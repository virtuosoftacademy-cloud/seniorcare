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

    // --- DEBUG LOG: SEE WHAT DATA IS ARRIVING ---
    console.log("📨 Received form submission attempt:", body);

    // 1) Verify captcha BEFORE doing any work
    // NOTE: Commented out for local testing so you can confirm SMTP works first.
    /*
    const captchaToken = typeof body.captchaToken === 'string' ? body.captchaToken : ''
    const forwardedFor = request.headers.get('x-forwarded-for') || ''
    const remoteIp = forwardedFor.split(',')[0]?.trim() || undefined

    const captchaResult = await verifyTurnstileToken(captchaToken, remoteIp)
    if (!captchaResult.ok) {
      console.error("❌ Captcha Verification Failed:", captchaResult.reason);
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
    */

    // 2) Validate user-supplied fields
    const parsed = contactFormSchema.safeParse(body)
    if (!parsed.success) {
      console.error("❌ Validation Failed:", parsed.error.flatten().fieldErrors);
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
    console.log("🚀 Attempting to send emails via SMTP...");
    await sendContactEmails(parsed.data)
    
    console.log("✅ SUCCESS: Emails sent successfully!");

    return NextResponse.json(
      { ok: true, message: 'Enquiry received. We will be in touch shortly.' },
      { status: 200 }
    )
  } catch (err: any) {
    // This will print the EXACT error from Nodemailer in your terminal
    console.error('[POST /api/contact] CRITICAL ERROR:', err.message || err);
    
    return NextResponse.json(
      { ok: false, message: 'Failed to send your enquiry. Please try again later.' },
      { status: 500 }
    )
  }
}