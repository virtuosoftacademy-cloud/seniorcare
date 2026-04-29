'use client';
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import Values from '@/components/values'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import CTA from '@/components/cta';

// export const metadata = {
//   title: 'About Ardell Living | Our Mission & Values',
//   description: 'Learn about Ardell Living\'s housing-led supported living approach, our mission to support vulnerable adults, and our core values of dignity, independence, and compassionate care.',
// }

export default function AboutPage() {
  const cqcBoxes = [
    {
      title: 'Safe',
      description: 'We provide secure, well-maintained homes with clear safeguarding procedures and risk management frameworks in place',
    },
    {
      title: 'Effective',
      description: 'Support is delivered in line with assessed needs, care plans and best practice guidance',
    },
    {
      title: 'Caring',
      description: 'Individuals are treated with dignity, respect, and compassion at all times',
    },
    {
      title: 'Responsive',
      description: 'Services are flexible and adapt to changing needs and circumstances',
    },
    {
      title: 'Well-led',
      description: 'Strong governance, oversight and continuous improvement underpin our operations',
    },
  ]

  const values = [
    {
      title: 'Dignity & Respect',
      description: 'We treat every individual with respect, ensuring their choices, preferences and rights are always upheld.',
    },
    {
      title: 'Independence',
      description: 'We support individuals to develop confidence and life skills, enabling them to live as independently as possible.',
    },
    {
      title: 'Safety & Stability',
      description: 'We provide secure, well-managed environments where individuals feel safe and supported.',
    },
    {
      title: 'Quality & Excellence',
      description: 'We maintain high standards across our housing and support services, aligned with regulatory expectations.',
    },
    {
      title: 'Accountability',
      description: 'We operate with transparency, strong governance and clear responsibility in everything we do.',
    },
    {
      title: 'Compassion',
      description: 'We deliver care with empathy, understanding and a genuine commitment to each individual\'s wellbeing.',
    },
  ]

  const whatMakesUsDifferent = [
    {
      title: 'Purpose-designed homes',
      description: 'environments that promote safety, comfort and independence',
    },
    {
      title: 'Structured and consistent support',
      description: 'aligned with individual care plans and commissioning requirements',
    },
    {
      title: 'Robust governance frameworks',
      description: 'policies, procedures and oversight aligned with regulatory expectations',
    },
    {
      title: 'Outcome-focused delivery',
      description: 'supporting individuals to progress towards greater independence and stability',
    },
  ]

  const ourCommitment = [
    'Maintaining compliance with CQC standards and best practice guidance',
    'Ensuring safeguarding and risk management processes are embedded in daily operations',
    'Providing transparent, accountable and well-documented service delivery',
    'Continuously reviewing and improving the quality of our services',
  ]
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}

      {/* Hero Section - About Ardell Living */}
      <section className="pt-12 sm:pt-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              About Ardell Living
            </h1>
            <div className="space-y-4 text-sm">

              {/* Clickable Dropdown - First Paragraph */}
              <div className="overflow-hidden space-y-2">
                <p
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-lg text-foreground font-medium leading-relaxed pr-8 transition-colors duration-200">
                  <em className='font-bold'>Creating homes where people can live with dignity, independence, and purpose. </em>
                  <br />
                  Ardell Living is
                  a housing-led supported living provider, delivering high-quality accommodation alongside
                  tailored, person-centred support. Our services are designed in line with the expectations of the
                  Care Quality Commission (CQC), ensuring that individuals receive safe, effective, caring,
                  responsive and well-led support.
                </p>


                {/* Dropdown Content */}
                <div className={` text-sm space-y-2
        overflow-hidden transition-all duration-500 ease-in-out
        ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-90'}
        `}>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We believe that a stable, well-managed home is the foundation for positive outcomes. By combining thoughtfully designed living environments with structured and consistent support, we enable individuals to develop independence, build confidence and live with dignity.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We work collaboratively with local authorities, care partners and healthcare professionals to ensure that every placement is appropriate, sustainable and aligned with individual care needs and outcomes.
                  </p>
                </div>
              </div>

              {/* Remaining Normal Paragraphs */}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 sm:py-18">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Ardell Living, we believe that every individual deserves to live in a home of their own, with the support they need to thrive. Our housing-led approach puts people at the centre of everything we do, recognising that stable housing is the foundation for positive change and personal growth.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We work with vulnerable adults to create personalised support plans that respect their choices, encourage their independence and help them build meaningful lives. By focusing on what people can do, rather than their limitations, we create pathways to recovery, resilience and wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section with CQC Boxes */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Approach</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our model is built around person-centred care and housing stability, ensuring that support is tailored to each individual while promoting independence wherever possible.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We align our delivery with the CQC's Key Lines of Enquiry (KLOEs):
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {cqcBoxes.map((item, idx) => (
                <div key={idx} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      {/* <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our values shape every aspect of how we deliver our services, from the homes we provide to the support we deliver.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <Values />
      {/* What Makes Us Different & Our Commitment Section */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* What Makes Us Different */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">What Makes Us Different</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ardell Living adopts a housing-first approach, recognising that the quality and stability of accommodation directly impact wellbeing and long-term outcomes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We differentiate ourselves through:
              </p>
              <ul className="space-y-4 mt-4">
                {whatMakesUsDifferent.map((item, idx) => (
                  <li key={idx} className="border-l-4 border-primary pl-4">
                    <h3 className="font-bold text-foreground text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Commitment */}
            <div className="space-y-6 pt-6 border-t border-border">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Commitment</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are committed to delivering services that meet both regulatory standards and the expectations of individuals, families and commissioning authorities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our commitment includes:
              </p>
              <ul className="space-y-3 mt-4">
                {ourCommitment.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed pt-4">
                At Ardell Living, we do not simply provide accommodation or support, we create environments where individuals can build stable, meaningful, and independent lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />

      {/* <Footer /> */}
    </div>
  )
}