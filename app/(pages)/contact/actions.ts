
import { contactFormSchema } from '@/lib/validation/contact'

export type ContactFormValues = {
  name: string
  organisation: string
  email: string
  phone: string
  enquiryType: string
  message: string
  consent: boolean
}

export type ContactFormState = {
  status: 'idle' | 'success' | 'error'
  message: string
  value: ContactFormValues
  fieldErrors?: Partial<Record<keyof ContactFormValues, string>>
}

export const initialContactState: ContactFormState = {
  status: 'idle',
  message: '',
  value: {
    name: '',
    organisation: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: '',
    consent: false,
  },
}


const emptyValues: ContactFormValues = {
  name: '',
  organisation: '',
  email: '',
  phone: '',
  enquiryType: '',
  message: '',
  consent: false,
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const value: ContactFormValues = {
    name: ((formData.get('name') as string) || '').trim(),
    organisation: ((formData.get('organisation') as string) || '').trim(),
    email: ((formData.get('email') as string) || '').trim(),
    phone: ((formData.get('phone') as string) || '').trim(),
    enquiryType: ((formData.get('enquiryType') as string) || '').trim(),
    message: ((formData.get('message') as string) || '').trim(),
    consent: formData.get('consent') === 'on',
  }

  // Validate on the server before sending email
  const parsed = contactFormSchema.safeParse(value)
  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof ContactFormValues, string>> = {}
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof ContactFormValues
      if (!fieldErrors[key]) fieldErrors[key] = issue.message
    }
    return {
      status: 'error',
      message: 'Please correct the highlighted fields and try again.',
      value,
      fieldErrors,
    }
  }

  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(value),
      cache: 'no-store',
    })

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      return {
        status: 'error',
        message:
          data?.message ||
          'We could not send your enquiry right now. Please try again in a moment.',
        value,
      }
    }

    return {
      status: 'success',
      message: 'We\u2019ve received your enquiry and will get back to you within 1\u20132 working days.',
      value: emptyValues,
    }
  } catch (err) {
    console.error('Contact form submission error:', err)
    return {
      status: 'error',
      message: 'A network error occurred. Please try again.',
      value,
    }
  }
}