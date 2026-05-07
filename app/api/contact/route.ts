import { NextResponse } from 'next/server'
import { sendContactEmails } from '@/lib/mailer'
import { contactFormSchema } from '@/lib/validation/contact'
import { verifyTurnstileToken } from '@/lib/captcha'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null)

    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { ok: false, message: 'Invalid request body.' },
        { status: 400 }
      )
    }

    // 1) Verify captcha BEFORE doing any work
    const captchaToken = typeof body.captchaToken === 'string' ? body.captchaToken : ''
    const forwardedFor = request.headers.get('x-forwarded-for') || ''
    const remoteIp = forwardedFor.split(',')[0]?.trim() || undefined

    const captchaResult = await verifyTurnstileToken(captchaToken, remoteIp)
    if (!captchaResult.ok) {
      return NextResponse.json(
        {
          ok: false,
          message:
            captchaResult.reason ||
            'Captcha verification failed. Please try again.',
        },
        { status: 403 }
      )
    }

    // 2) Validate user-supplied fields
    const parsed = contactFormSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Validation failed.',
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 422 }
      )
    }

    // 3) Send
    await sendContactEmails(parsed.data)

    return NextResponse.json(
      { ok: true, message: 'Enquiry received. We will be in touch shortly.' },
      { status: 200 }
    )
  } catch (err) {
    console.error('[POST /api/contact] error:', err)
    return NextResponse.json(
      { ok: false, message: 'Failed to send your enquiry. Please try again later.' },
      { status: 500 }
    )
  }
}