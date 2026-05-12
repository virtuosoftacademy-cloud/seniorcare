import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendContactEmail(data: {
  name: string;
  email: string;
  enquiryType: string;
  message: string;
  phone?: string;
  organisation?: string;
}) {
  const { name, email, enquiryType, message, phone, organisation } = data;

  try {
    // --- DEBUG LOGS ---
    console.log("-----------------------------------------");
    console.log("📨 ADMIN INBOX:", process.env.CONTACT_INBOX);
    console.log("📨 USER EMAIL:", email);
    console.log("-----------------------------------------");

    // 1. Send Email to the Admin (Ardell Living)
    // FIX: Ensure 'to' is definitely using the env variable
    await transporter.sendMail({
      from: process.env.MAIL_FROM, 
      to: process.env.CONTACT_INBOX, 
      replyTo: email, // This allows you to click reply to talk to the user
      subject: `New ${enquiryType} Enquiry: ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2>New Website Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Organisation:</strong> ${organisation || 'Not provided'}</p>
          <p><strong>Type:</strong> ${enquiryType}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    // 2. Send Confirmation Email to the User
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: email,
      subject: "We've received your enquiry — Ardell Living",
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <p>Hi ${name},</p>
          <p>Thanks for contacting Ardell Living. We've received your message and our team will get back to you shortly.</p>
          <p>Best regards,<br><strong>Ardell Living Team</strong></p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("❌ Email Service Error:", error);
    throw error;
  }
}