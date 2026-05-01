import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import Partners from '@/components/partners'
import LogoLoop from '@/components/LogoLoop'

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Fold 1: Page Heading */}
      <section className="pt-16 bg-linear-to-b from-secondary/20 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Working in Partnership to Deliver Better Outcomes
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              At Ardell Living, collaboration sits at the core of our service delivery. We work alongside trusted
              partners across housing, care and local authority networks to ensure individuals receive co-ordinated,
              high-quality support within safe and stable environments.
            </p>
          </div>
        </div>
      </section>

      {/* Box Design for Partnership Model */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-xl p-8 md:p-10 shadow-sm">
            <p className="text-muted-foreground text-lg leading-relaxed text-center">
              Our partnership model enables us to combine specialist expertise, ensuring that every individual
              benefits from a well-rounded, responsive and sustainable support framework.
            </p>
          </div>
        </div>
      </section>

      <Partners />

      {/* Our Commitment to Partnership */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-border rounded-xl p-8 md:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-8">
              Our Commitment to Partnership
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
              {[
                'Transparency and accountability',
                'Shared outcomes and objectives',
                'Consistent communication and collaboration',
                'Alignment with regulatory and safeguarding standards',
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground pt-6 border-t border-border">
              This collaborative approach ensures that every service we deliver is co-ordinated, effective, and centred
              around the individual.
            </p>
          </div>
        </div>
      </section>

      {/* Logo Strip Section */}
      <LogoLoop logos={[
        { src: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg", alt: "Transistor" },
        { src: "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg", alt: "Transistor" },
        { src: "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg", alt: "Transistor" },
        { src: "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg", alt: "Transistor" },
        { src: "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg", alt: "Transistor" },
      ]} />
      {/* Interested in Partnership Opportunities? */}
      <section className="py-20 sm:py-28 bg-linear-to-r from-primary/10 to-accent/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Interested in Partnership Opportunities?
          </h2>
          <p className="text-lg text-muted-foreground">
            We are always interested in exploring new partnerships that benefit the people we support.
            Whether you represent a local authority, healthcare provider, community organisation or
            advocacy group, we would love hearing from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}