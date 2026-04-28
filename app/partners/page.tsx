import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

export const metadata = {
  title: 'Our Partners | Ardell Living',
  description: 'Discover the strategic partnerships and collaborations that support Ardell Living\'s mission to provide excellent housing-led supported living services.',
}

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}

      {/* Fold 1: Page Heading */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-secondary/20 to-background">
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
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-xl p-8 md:p-10 shadow-sm">
            <p className="text-muted-foreground text-lg leading-relaxed text-center">
              Our partnership model enables us to combine specialist expertise, ensuring that every individual
              benefits from a well-rounded, responsive and sustainable support framework.
            </p>
          </div>
        </div>
      </section>

      {/* Our Strategic Partnerships */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10 text-center">
            Our Strategic Partnerships
          </h2>
          <p className="text-lg text-muted-foreground mb-10 text-center">
            We actively collaborate with:
          </p>

          <div className="space-y-6">
            {/* Local Authorities & Commissioners */}
            <div className="border-l-4 border-primary pl-6 py-2">
              <h3 className="text-xl font-bold text-foreground mb-2">Local Authorities & Commissioners</h3>
              <p className="text-muted-foreground leading-relaxed">
                We work closely with local authorities to deliver supported living solutions that meet commissioning
                requirements, regulatory standards and long-term placement objectives.
              </p>
            </div>

            {/* Care & Support Providers */}
            <div className="border-l-4 border-primary pl-6 py-2">
              <h3 className="text-xl font-bold text-foreground mb-2">Care & Support Providers</h3>
              <p className="text-muted-foreground leading-relaxed">
                We partner with experienced, regulated care providers to deliver person-centred support aligned with
                individual care plans and outcomes.
              </p>
            </div>

            {/* Property & Housing Partners */}
            <div className="border-l-4 border-primary pl-6 py-2">
              <h3 className="text-xl font-bold text-foreground mb-2">Property & Housing Partners</h3>
              <p className="text-muted-foreground leading-relaxed">
                Through our housing network, we secure and manage high-quality accommodation designed to meet the
                specific needs of supported living environments.
              </p>
            </div>

            {/* Healthcare & Community Services */}
            <div className="border-l-4 border-primary pl-6 py-2">
              <h3 className="text-xl font-bold text-foreground mb-2">Healthcare & Community Services</h3>
              <p className="text-muted-foreground leading-relaxed">
                We engage with healthcare professionals and community services to ensure individuals receive holistic
                support that promotes wellbeing and independence.
              </p>
            </div>
          </div>
        </div>
      </section>

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
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg/8 font-semibold text-gray-900">
           Our Strategic Partners Include:
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt="Transistor"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Reform"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Tuple"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="SavvyCal"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            <img
              alt="Statamic"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          </div>
        </div>
      </div>

      {/* Interested in Partnership Opportunities? */}
      <section className="py-20 sm:py-28 bg-gradient-to-r from-primary/10 to-accent/10">
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

      {/* <Footer /> */}
    </div>
  )
}