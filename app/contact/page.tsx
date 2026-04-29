'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: '',
    consent: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real app, this would send to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: '',
        organization: '',
        email: '',
        phone: '',
        enquiryType: '',
        message: '',
        consent: false,
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* <Header /> */}

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
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <p className="text-green-800 font-semibold">Thank you for reaching out!</p>
                    <p className="text-green-700 text-sm mt-2">We&apos;ve received your message and will get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Organization Name (Optional)
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your organization"
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
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
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
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="+44 (0) XXX XXX XXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="Type" className="block text-sm font-medium text-foreground mb-2">
                        Enquiry Type
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.enquiryType}
                        onChange={handleChange}
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
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Tell us how we can help..."
                      />
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        required
                        className="mr-2 leading-tight"
                      />
                      <label htmlFor="consent" className="text-sm text-foreground">
                        I consent to Ardell Living storing and processing my information in accordance with its
                        Privacy Policy.
                        Your information will be handled securely and used only for the purpose of responding to your
                        enquiry.
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="capitalize w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold transition-colors"
                    >
                     submit inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-card rounded-xl p-8 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Phone</h3>
                    <a href="tel:+44 (0) 123 456 7890" className="text-primary hover:underline">
                      +44 (0) 123 456 7890 
                    </a>

                    {/* <p className="text-sm text-muted-foreground mt-1">Call us to discuss your needs</p> */}
                    {/* <p className="text-sm text-muted-foreground mt-1">Call us to discuss your needs</p> */}
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
                    <a href="mailto:info@ardellliving.co.uk" className="text-primary hover:underline">
                      info@ardellliving.co.uk
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">We&apos;ll respond within 24 hours</p>
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
                    <p className="text-foreground">
                      13 Edward Avenue<br />
                      Morden<br />
                      SM4 6EP
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-8 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Business Hours</h3>
                    <p className="text-foreground text-sm leading-relaxed">
                      Monday - Friday:<br /> 9:00 AM - 5:00 PM <br />
                      Saturday: <br /> 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
          <div className='w-5xl pt-10 mx-auto'>
            <div className="space-y-4 bg-card border border-border rounded-xl p-10 md:p-12 shadow-sm text-center">
              <div>
                <h2 className='font-bold text-xl pb-2'>For Local Authorities & Partners</h2>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed text-center">
                  We work closely with local authorities, commissioners and care providers to deliver supported
                  living solutions aligned with individual needs and regulatory expectations.
                  For partnership enquiries, please contact our team directly or submit an enquiry using the form
                  above.
                </p>
              </div>
              <div>
                <h2 className='font-bold text-xl py-2 capitalize'>Supporting lives. Building futures.</h2>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed text-center">
                  All enquiries are handled professionally and in confidence. We aim to respond within 1–2
                  working days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  )
}
