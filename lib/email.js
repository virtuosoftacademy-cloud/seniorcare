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

export async function sendEmail(data) {
  const { name, email, enquiryType, message, phone, organisation } = data;

  // Fallback for optional fields
  const displayMessage = message && message.trim() !== '' ? message : "No additional message provided.";
  const displayOrg = organisation && organisation.trim() !== '' ? organisation : "N/A";
  const displayPhone = phone && phone.trim() !== '' ? phone : "N/A";

  try {
    // 1. Email to Official Inbox
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.CONTACT_INBOX,
      replyTo: email,
      subject: `New ${enquiryType} Enquiry: ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px;">
          <h2 style="color: #4a5d4e;">New Website Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${displayPhone}</p>
          <p><strong>Organisation:</strong> ${displayOrg}</p>
          <p><strong>Enquiry Type:</strong> ${enquiryType}</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${displayMessage}</div>
        </div>
      `,
    });

    // 2. Confirmation to User
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: email,
      subject: "We've received your enquiry — Ardell Living",
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <p>Hi ${name},</p>
          <p>Thank you for contacting Ardell Living. We have received your enquiry and our team will get back to you within 1-2 working days.</p>
          <p>Best regards,<br><strong>Ardell Living Team</strong></p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Email.js Error:", error);
    throw error;
  }
}