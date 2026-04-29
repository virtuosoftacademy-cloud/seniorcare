import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground text-balance">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Contact Ardell Living today to learn more about our services or to discuss your specific needs. We&apos;re here to help.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="bg-accent-foreground/10 rounded-lg p-6 text-primary-foreground">
              <Phone className="w-8 h-8 mx-auto mb-3" />
              <p className="font-semibold mb-1">Phone</p>
              <span className="hover:underline">
                +44 (0) XXX XXX XXXX <br /> (we will update when available)
              </span>
            </div>
            <div className="bg-accent-foreground/10 rounded-lg p-6 text-primary-foreground">
              <Mail className="w-8 h-8 mx-auto mb-3" />
              <p className="font-semibold mb-1">Email</p>
              <a href="mailto:info@ardellliving.co.uk" className="hover:underline">info@ardellliving.co.uk</a>
            </div>
            <div className="bg-accent-foreground/10 rounded-lg p-6 text-primary-foreground">
              <MapPin className="w-8 h-8 mx-auto mb-3" />
              <p className="font-semibold mb-1">Registered Address</p>
              <p>Ardell Living Ltd
                10 Garendon Gardens
                Morden
                SM4 6EP,
                United Kingdom
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/contact"
              className="inline-block bg-primary-foreground hover:bg-primary-foreground/90 text-primary px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us Now
            </Link>
            {/* <a
              href="#home"
              className="inline-block border-2 border-primary-foreground hover:bg-primary-foreground/10 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Back to Top
            </a> */}
          </div>
        </div>
      </div>
    </section>
  )
}
