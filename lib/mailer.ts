import 'server-only'
import nodemailer, { type Transporter } from 'nodemailer'

type ContactPayload = {
  name: string
  organisation?: string
  email: string
  phone?: string
  enquiryType: string
  message: string
  consent: boolean
}

const ENQUIRY_LABELS: Record<string, string> = {
  'localauthority/commissioner': 'Local Authority / Commissioner',
  careprovider: 'Care Provider',
  'housing/landlord': 'Housing / Landlord',
  'individual/family': 'Individual / Family',
  generalenquiry: 'General Enquiry',
}

let cachedTransporter: Transporter | null = null

function getTransporter(): Transporter {
  if (cachedTransporter) return cachedTransporter

  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASSWORD

  if (!host || !user || !pass) {
    throw new Error(
      'SMTP configuration is incomplete. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASSWORD in your environment.'
    )
  }

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    // 465 -> implicit TLS; 587/25 -> STARTTLS
    secure: port === 465,
    auth: { user, pass },
  })

  return cachedTransporter
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function buildAdminEmail(payload: ContactPayload) {
  const enquiryLabel = ENQUIRY_LABELS[payload.enquiryType] || payload.enquiryType
  const safe = {
    name: escapeHtml(payload.name),
    organisation: escapeHtml(payload.organisation || '—'),
    email: escapeHtml(payload.email),
    phone: escapeHtml(payload.phone || '—'),
    enquiryLabel: escapeHtml(enquiryLabel),
    message: escapeHtml(payload.message).replace(/\n/g, '<br/>'),
  }

  const subject = `New enquiry from ${payload.name} (${enquiryLabel})`

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; color:#111; max-width:640px;">
      <h2 style="margin:0 0 16px;">New contact form submission</h2>
      <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;width:100%;">
        <tr><td style="font-weight:bold;width:160px;">Name</td><td>${safe.name}</td></tr>
        <tr><td style="font-weight:bold;">Organisation</td><td>${safe.organisation}</td></tr>
        <tr><td style="font-weight:bold;">Email</td><td>${safe.email}</td></tr>
        <tr><td style="font-weight:bold;">Phone</td><td>${safe.phone}</td></tr>
        <tr><td style="font-weight:bold;">Enquiry Type</td><td>${safe.enquiryLabel}</td></tr>
        <tr><td style="font-weight:bold;vertical-align:top;">Message</td><td>${safe.message}</td></tr>
        <tr><td style="font-weight:bold;">Consent</td><td>${payload.consent ? 'Given' : 'Not given'}</td></tr>
      </table>
      <p style="margin-top:24px;font-size:12px;color:#666;">
        Sent from the Ardell Living website contact form.
      </p>
    </div>
  `

  const text = [
    'New contact form submission',
    '',
    `Name:         ${payload.name}`,
    `Organisation: ${payload.organisation || '—'}`,
    `Email:        ${payload.email}`,
    `Phone:        ${payload.phone || '—'}`,
    `Enquiry:      ${enquiryLabel}`,
    `Consent:      ${payload.consent ? 'Given' : 'Not given'}`,
    '',
    'Message:',
    payload.message,
  ].join('\n')

  return { subject, html, text }
}

function buildAutoReplyEmail(payload: ContactPayload) {
  const safeName = escapeHtml(payload.name)

  const subject = 'We\u2019ve received your enquiry — Ardell Living'

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; color:#111; max-width:640px;">
      <h2 style="margin:0 0 16px;">Thank you, ${safeName}</h2>
      <p>We&rsquo;ve received your enquiry and a member of our team will be in touch within 1&ndash;2 working days.</p>
      <p>If your matter is urgent, please call us on the number listed on our contact page.</p>
      <p style="margin-top:24px;">Kind regards,<br/>The Ardell Living team</p>
      <hr style="border:none;border-top:1px solid #eee;margin:24px 0;"/>
      <p style="font-size:12px;color:#666;">
        This is an automated confirmation. Please do not reply to this message.
      </p>
    </div>
  `

  const text = [
    `Thank you, ${payload.name}`,
    '',
    'We have received your enquiry and a member of our team will be in touch within 1–2 working days.',
    'If your matter is urgent, please call us on the number listed on our contact page.',
    '',
    'Kind regards,',
    'The Ardell Living team',
  ].join('\n')

  return { subject, html, text }
}

export async function sendContactEmails(payload: ContactPayload): Promise<void> {
  const transporter = getTransporter()

  const fromAddress =
    process.env.MAIL_FROM || `Ardell Living <${process.env.SMTP_USER}>`
  const adminInbox = process.env.CONTACT_INBOX || process.env.SMTP_USER

  if (!adminInbox) {
    throw new Error('CONTACT_INBOX (or SMTP_USER) must be set to receive enquiries.')
  }

  const admin = buildAdminEmail(payload)
  const autoReply = buildAutoReplyEmail(payload)

  // 1) Notify the team
  await transporter.sendMail({
    from: fromAddress,
    to: adminInbox,
    replyTo: `${payload.name} <${payload.email}>`,
    subject: admin.subject,
    text: admin.text,
    html: admin.html,
  })

  // 2) Confirmation to the sender (best-effort, don't fail the whole request)
  try {
    await transporter.sendMail({
      from: fromAddress,
      to: payload.email,
      subject: autoReply.subject,
      text: autoReply.text,
      html: autoReply.html,
    })
  } catch (err) {
    console.error('Auto-reply failed (non-fatal):', err)
  }
}