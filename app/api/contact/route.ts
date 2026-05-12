import { NextResponse } from 'next/server'
// Import the simplified function from your new email.js file
import { sendEmail } from '@/lib/email' 

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null)

    // Basic check for request body
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { ok: false, message: 'Invalid request body.' },
        { status: 400 }
      )
    }

    // --- DEBUG LOGS ---
    console.log("-----------------------------------------");
    console.log("📨 API Route triggered via email.js");
    console.log("🚀 Targeting Inbox:", process.env.CONTACT_INBOX);

    /**
     * Note: We are bypassing complex Zod validation here to keep 
     * the "backend" as simple as you requested.
     */

    // Call your new centralized email function
    await sendEmail(body)
    
    console.log("✅ SUCCESS: sendEmail function executed.");
    console.log("-----------------------------------------");

    return NextResponse.json(
      { ok: true, message: 'Enquiry received successfully.' },
      { status: 200 }
    )
  } catch (err: any) {
    console.error('[POST /api/contact] Backend Error:', err.message || err);
    
    return NextResponse.json(
      { ok: false, message: 'Server failed to process enquiry.' },
      { status: 500 }
    )
  }
}