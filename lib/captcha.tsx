import 'server-only'

const TURNSTILE_VERIFY_URL =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify'

type TurnstileResponse = {
  success: boolean
  challenge_ts?: string
  hostname?: string
  'error-codes'?: string[]
  action?: string
  cdata?: string
}

export type CaptchaVerificationResult =
  | { ok: true }
  | { ok: false; reason: string; codes?: string[] }

/**
 * Verifies a Cloudflare Turnstile token against Cloudflare's siteverify
 * endpoint. Returns { ok: true } on success, otherwise a structured failure.
 *
 * Reads TURNSTILE_SECRET_KEY from the environment. If unset (e.g. in dev),
 * verification is skipped — set the env var in staging/production.
 */
export async function verifyTurnstileToken(
  token: string,
  remoteIp?: string
): Promise<CaptchaVerificationResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY

  // No secret configured -> treat captcha as disabled (dev only).
  if (!secret) {
    if (process.env.NODE_ENV === 'production') {
      return {
        ok: false,
        reason: 'Captcha is not configured on the server.',
      }
    }
    console.warn(
      '[captcha] TURNSTILE_SECRET_KEY not set — skipping verification (dev only).'
    )
    return { ok: true }
  }

  if (!token) {
    return { ok: false, reason: 'Missing captcha token.' }
  }

  const body = new URLSearchParams()
  body.append('secret', secret)
  body.append('response', token)
  if (remoteIp) body.append('remoteip', remoteIp)

  let data: TurnstileResponse
  try {
    const res = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
      cache: 'no-store',
    })
    data = (await res.json()) as TurnstileResponse
  } catch (err) {
    console.error('[captcha] Verification request failed:', err)
    return { ok: false, reason: 'Could not reach captcha verification service.' }
  }

  if (data.success) return { ok: true }

  return {
    ok: false,
    reason: 'Captcha verification failed. Please try again.',
    codes: data['error-codes'],
  }
}