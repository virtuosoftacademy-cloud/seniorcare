import { NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/email' // Verified: matches your new file name
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

    // --- DEBUG LOG: MONITORING THE SENDER ---
    console.log("-----------------------------------------");
    console.log("📨 API received submission from:", body.email);

    // 1) Verify captcha 
    // (Kept commented out for your local testing phase)
    /*
    const captchaToken = typeof body.captchaToken === 'string' ? body.captchaToken : ''
    const forwardedFor = request.headers.get('x-forwarded-for') || ''
    const remoteIp = forwardedFor.split(',')[0]?.trim() || undefined

    const captchaResult = await verifyTurnstileToken(captchaToken, remoteIp)
    if (!captchaResult.ok) {
      console.error("❌ Captcha Failed:", captchaResult.reason);
      return NextResponse.json(
        { ok: false, message: captchaResult.reason || 'Captcha verification failed.' },
        { status: 403 }
      )
    }
    */

    // 2) Validate fields with Zod
    const parsed = contactFormSchema.safeParse(body)
    if (!parsed.success) {
      console.error("❌ Validation Failed:", parsed.error.flatten().fieldErrors);
      return NextResponse.json(
        {
          ok: false,
          message: 'Validation failed. Please check your entries.',
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 422 }
      )
    }

    // 3) Send via centralized email service (lib/email.ts)
    console.log(`🚀 Routing enquiry to: ${process.env.CONTACT_INBOX}`);
    
    await sendContactEmail(parsed.data)
    
    console.log("✅ SUCCESS: Emails sent to Admin and User.");
    console.log("-----------------------------------------");

    return NextResponse.json(
      { ok: true, message: 'Enquiry received. We will be in touch shortly.' },
      { status: 200 }
    )
  } catch (err: any) {
    // This catches SMTP errors, authentication issues, or network timeouts
    console.error('[POST /api/contact] CRITICAL ERROR:', err.message || err);
    
    return NextResponse.json(
      { ok: false, message: 'Failed to send your enquiry. Please try again later.' },
      { status: 500 }
    )
  }
}