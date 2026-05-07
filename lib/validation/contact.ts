import { z } from 'zod'

const VALID_ENQUIRY_TYPES = [
  'localauthority/commissioner',
  'careprovider',
  'housing/landlord',
  'individual/family',
  'generalenquiry',
] as const

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Please enter your full name.')
    .max(120, 'Name is too long.'),
  organisation: z.string().max(200, 'Organisation name is too long.').optional().or(z.literal('')),
  email: z.string().email('Please enter a valid email address.').max(200),
  phone: z
    .string()
    .max(40, 'Phone number is too long.')
    .optional()
    .or(z.literal('')),
  enquiryType: z.enum(VALID_ENQUIRY_TYPES, {
    message: 'Please select an enquiry type.',
  }),
  message: z
    .string()
    .min(10, 'Please write a slightly longer message (at least 10 characters).')
    .max(5000, 'Message is too long (max 5000 characters).'),
  consent: z.literal(true, {
    message: 'You must agree to the privacy policy to continue.',
  }),
})

export type ContactFormInput = z.infer<typeof contactFormSchema>