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
  // 1. Log that the action started
  console.log("🛠️ Action Triggered: submitContactForm started.");

  const value: ContactFormValues = {
    name: ((formData.get('name') as string) || '').trim(),
    organisation: ((formData.get('organisation') as string) || '').trim(),
    email: ((formData.get('email') as string) || '').trim(),
    phone: ((formData.get('phone') as string) || '').trim(),
    enquiryType: ((formData.get('enquiryType') as string) || '').trim(),
    message: ((formData.get('message') as string) || '').trim(),
    consent: formData.get('consent') === 'on',
  }

  // Validate on the server
  const parsed = contactFormSchema.safeParse(value)
  if (!parsed.success) {
    console.error("❌ Validation Failed:", parsed.error.issues);
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
    // 2. Use a more robust URL check
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    const apiEndpoint = `${baseUrl}/api/contact`
    
    console.log(`🔗 Fetching to: ${apiEndpoint}`);

    const res = await fetch(apiEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(value),
      cache: 'no-store',
    })

    console.log(`📡 API Response Status: ${res.status}`);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      console.error("❌ API Error Data:", data);
      return {
        status: 'error',
        message: data?.message || 'We could not send your enquiry right now.',
        value,
      }
    }

    console.log("✨ Form processed successfully!");
    return {
      status: 'success',
      message: 'We’ve received your enquiry and will get back to you shortly.',
      value: emptyValues,
    }
  } catch (err) {
    console.error('🔥 Critical Fetch Error:', err)
    return {
      status: 'error',
      message: 'A network error occurred. Please try again.',
      value,
    }
  }
}