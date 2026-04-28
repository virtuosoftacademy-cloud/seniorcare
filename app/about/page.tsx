import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import Values from '@/components/values'

export const metadata = {
  title: 'About Ardell Living | Our Mission & Values',
  description: 'Learn about Ardell Living\'s housing-led supported living approach, our mission to support vulnerable adults, and our core values of dignity, independence, and compassionate care.',
}


export default function AboutPage() {

  const WhatMakesUsDifferent = [
    {
      title: 'Purpose-designed homes',
      description: 'environments that promote safety, comfort, and independence.',
    },
    {
      title: 'Structured and consistent support',
      description: 'Support is delivered in line with assessed needs, care plans, and best practice guidance.',
    },
    {
      title: 'Robust governance frameworks ',
      description: 'policies, procedures, and oversight aligned with regulatory expectations.',
    },
    {
      title: 'Outcome-focused delivery ',
      description: 'supporting individuals to progress towards greater independence and stability.',
    }
  ]

  const OurCommitment = [
    {
      description: 'Maintaining compliance with CQC standards and best practice guidance.',
    },
    {
      description: 'Ensuring safeguarding and risk management processes are embedded in daily operations.',
    },
    {
      description: 'Providing transparent, accountable, and well-documented service delivery ',
    },
    {
      description: 'Continuously reviewing and improving the quality of our services.',
    }
  ]
  const values = [
    {
      icon: 'UserPlus',
      title: 'Dignity & Respect',
      description: 'We treat every individual with respect, ensuring their choices, preferences, and rights are always upheld.',
    },
    {
      icon: '🎯',
      title: 'Independence',
      description: 'We support individuals to develop confidence and life skills, enabling them to live as independently as possible.',
    },
    {
      icon: '🛡️',
      title: 'Safety & stability',
      description: 'We provide secure, well-managed environments where individuals feel safe and supported.',
    },
    {
      icon: '⭐',
      title: 'Quality & Excellence',
      description: 'We maintain high standards across our housing and support services, aligned with regulatory expectations.',
    },
    {
      icon: '❤️',
      title: 'Compassion',
      description: 'We deliver care with empathy, understanding, and genuine commitment to each individual’s well-being.',
    },
    {
      icon: '📋',
      title: 'Accountability',
      description: 'We operate with transparency, strong governance, and clear responsibility in everything we do.',
    },
  ]

  const partners = [
    {
      id: 1,
      category: 'Local Authority & Commissioners',
      description: 'We work closely with local authorities to deliver supported living solutions that meet commissioning requirements, regulatory standards, and long-term placement objectives.      ',
    },
    {
      id: 2,
      category: 'Healthcare & Community Services',
      description: 'We engage with healthcare professionals and community services to ensure individuals receive holistic support that promotes wellbeing and independence.',
    },
    {
      id: 3,
      category: 'Care & Support Providers',
      description: 'We partner with experienced, regulated care providers to deliver person-centred support aligned with individual care plans and outcomes.'
    },
    {
      id: 4,
      category: 'Property & Housing Partners',
      description: 'Through our housing network, we secure and manage high-quality accommodation designed to meet the specific needs of supported living environments.',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-linear-to-b from-secondary/20 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              About Ardell Living
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Providing housing-led supported living services with dignity, compassion, and person-centered care.
            </p>
          </div>
        </div>
      </section>


      {/* Mission Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Creating homes where people can live with dignity, independence, and purpose Ardell Living is a housing-led supported living provider, delivering high-quality accommodation alongside tailored, person-centred support. Our services are designed in line with the expectations of the Care Quality Commission (CQC), ensuring that individuals receive safe, effective, caring, responsive, and well-led support.              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that a stable, well-managed home is the foundation for positive outcomes. By combining thoughtfully designed living environments with structured and consistent support, we enable individuals to develop independence, build confidence, and live with dignity.              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">We work collaboratively with local authorities, care partners, and healthcare professionals to ensure that every placement is appropriate, sustainable, and aligned with individual care needs and outcomes.</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Approach</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our model is built around person-centred care and housing stability, ensuring that support is tailored to each individual while promoting independence wherever possible.
                We align our delivery with the CQC’s Key Lines of Enquiry (KLOEs):
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">Safe</h3>
                  <p className="text-muted-foreground">
                    We provide secure, well-maintained homes with clear safeguarding procedures and risk management frameworks in place                   </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">Effective</h3>
                  <p className="text-muted-foreground">
                    Support is delivered in line with assessed needs, care plans, and best practice guidance
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">Caring</h3>
                  <p className="text-muted-foreground">
                    Individuals are treated with dignity, respect, and compassion at all times.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">Responsive </h3>
                  <p className="text-muted-foreground">
                    Services are flexible and adapt to changing needs and circumstances
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">Well-led</h3>
                  <p className="text-muted-foreground">
                    Strong governance, oversight, and continuous improvement underpin our operations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className=" px-6 sm:px-6 lg:px-8 py-20 sm:py-28 bg-muted/30 space-y-10">
        <div className='max-w-4xl mx-auto'>
          <div >
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">What Makes Us Different</h2>
              <p className="text-sm md:text-lg text-muted-foreground">
                Ardell Living adopts a housing-first approach, recognising that the quality and stability of accommodation directly impact wellbeing and long-term outcomes.
                We differentiate ourselves through:
              </p>
            </div>

            <ul className="space-y-2 list-disc pl-5">
              {WhatMakesUsDifferent.map((standard) => (
                <li key={standard.title}>
                  <h3 className="font-bold text-foreground text-lg">{standard.title}</h3>
                  <p className="text-muted-foreground mt-2">{standard.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className='pt-6'>
            <div className="space-y-6 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">Our Commitment</h2>
              <p className="text-sm md:text-lg text-muted-foreground">
                We are committed to delivering services that meet both regulatory standards and the expectations of individuals, families, and commissioning authorities.
                Our commitment includes:
              </p>
            </div>

            <ul className="space-y-2 list-disc pl-5">
              {OurCommitment.map((standard) => (
                <li key={standard.description}>
                  <p className="text-muted-foreground">{standard.description}</p>
                </li>
              ))}
            </ul>
            <p className="pt-6 text-sm md:text-lg text-muted-foreground max-w-3xl">
              Ardell Living adopts a housing-first approach, recognising that the quality and stability of accommodation directly impact wellbeing and long-term outcomes.
              We differentiate ourselves through:
            </p>
          </div>
        </div>
      </section>



      {/* Values Section */}
      <Values />

      {/* Partners Section */}
      <section className="py-10 sm:py-18">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 space-y-4">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm">Our Network</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground max-w-2xl mx-auto">
              Working in Partnership to Deliver Better Outcomes
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
              At Ardell Living, collaboration sits at the core of our service delivery. We work alongside trusted partners across housing, care, and local authority networks to ensure individuals receive coordinated, high-quality support within safe and stable environments.
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12">
            Our partnership model enables us to combine specialist expertise, ensuring that every individual benefits from a well-rounded, responsive, and sustainable support framework.
          </p>

          <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-8">
            Our Strategic Partnerships
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-xl p-8 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Local Authorities & Commissioners</h3>
                  <p className="text-muted-foreground">
                    We work closely with local authorities to deliver supported living solutions that meet commissioning requirements, regulatory standards, and long-term placement objectives.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-xl p-8 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Care & Support Providers</h3>
                  <p className="text-muted-foreground">
                    We partner with experienced, regulated care providers to deliver person-centred support aligned with individual care plans and outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-xl p-8 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Property & Housing Partners</h3>
                  <p className="text-muted-foreground">
                    Through our housing network, we secure and manage high-quality accommodation designed to meet the specific needs of supported living environments.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-xl p-8 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Healthcare & Community Services</h3>
                  <p className="text-muted-foreground">
                    We engage with healthcare professionals and community services to ensure individuals receive holistic support that promotes wellbeing and independence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-border rounded-xl p-8 mt-10">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-6">
              Our Commitment to Partnership
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-foreground">Transparency and accountability</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-foreground">Shared outcomes and objectives</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-foreground">Consistent communication and collaboration</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-foreground">Alignment with regulatory and safeguarding standards</span>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-6 pt-4 border-t border-border">
              This collaborative approach ensures that every service we deliver is coordinated, effective, and centred around the individual.
            </p>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Want to learn more about our full network of partners?
            </p>
            <Link href="/partners" className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Partners
            </Link>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      {/* <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Ready to Get in Touch?
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you&apos;re interested in our services, want to discuss a partnership, or have questions about our approach, we&apos;d love to hear from you.
          </p>
          <Link href="/contact" className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
            Contact Us Today
          </Link>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
