'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { toast } from 'sonner'
import Link from 'next/link'

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    setIsPending(true);

    try {
      // Sending enquiry via EmailJS
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setIsSuccess(true);
      toast.success('Message sent', {
        description: "We've received your enquiry and will get back to you soon.",
      });
      
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Something went wrong', {
        description: 'Failed to send your message. Please try again later.',
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <main className="min-h-screen">
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
              Get in Touch with Ardell Living
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you are a local authority, care provider, landlord or making an enquiry on behalf of an
              individual, our team is here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>

                {isSuccess ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <p className="text-green-800 font-semibold">Thank you for reaching out!</p>
                    <p className="text-green-700 text-sm mt-2">We&apos;ve received your message and will get back to you soon.</p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="mt-4 text-sm text-green-800 underline font-medium"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="organisation" className="block text-sm font-medium text-foreground mb-2">
                          Organisation Name (Optional)
                        </label>
                        <input
                          type="text"
                          id="organisation"
                          name="organisation"
                          className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your organisation"
                        />
                      </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="+44 (0) XXX XXX XXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="enquiryType" className="block text-sm font-medium text-foreground mb-2">
                        Enquiry Type
                      </label>
                      <select
                        id="enquiryType"
                        name="enquiryType"
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select an enquiry type</option>
                        <option value="localauthority/commissioner">Local Authority / Commissioner</option>
                        <option value="careprovider">Care Provider</option>
                        <option value="housing/landlord">Housing / Landlord</option>
                        <option value="individual/family">Individual / Family</option>
                        <option value="generalenquiry">General Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Tell us how we can help..."
                      />
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        required
                        className="mt-1 mr-2"
                      />
                      <label htmlFor="consent" className="text-sm text-foreground">
                        I consent to Ardell Living storing and processing my information in accordance with its {" "}
                        <Link href={'/privacypolicy'} className='hover:underline font-medium'> 
                        Privacy Policy.
                        </Link>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isPending}
                      className="capitalize w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isPending ? 'submitting...' : 'submit inquiry'}
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-card rounded-xl p-8 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Phone</h3>
                    <span className="text-primary">+44 (0) XXX XXX XXXX</span>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-xl p-8 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Email</h3>
                    <a href="mailto:info@ardellliving.co.uk" className="text-primary hover:underline font-medium">
                      info@ardellliving.co.uk
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-xl p-8 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Registered Address</h3>
                    <p className="text-foreground text-sm">
                      13 Edward Avenue, Morden, SM4 6EP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}