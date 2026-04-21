import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { UserPlus } from 'lucide-react'
import Values from '@/components/values'

export const metadata = {
  title: 'About Ardell Living | Our Mission & Values',
  description: 'Learn about Ardell Living\'s housing-led supported living approach, our mission to support vulnerable adults, and our core values of dignity, independence, and compassionate care.',
}

export default function AboutPage() {
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
                At Ardell Living, we believe that every individual deserves to live in a home of their own, with the support they need to thrive. Our housing-led approach puts people at the center of everything we do, recognizing that stable housing is the foundation for positive change and personal growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We work with vulnerable adults to create personalized support plans that respect their choices, encourage their independence, and help them build meaningful lives. By focusing on what people can do, rather than their limitations, we create pathways to recovery, resilience, and wellbeing.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Approach</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The housing-led supported living model is built on a simple but powerful principle: everyone deserves a home. This approach recognizes that by providing stable housing first—unconditionally—and then wrapping tailored support around it, we can help people achieve their goals and live fulfilling lives.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">Person-Centered</h3>
                  <p className="text-muted-foreground">Every support plan is tailored to individual needs, goals, and aspirations.</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">Evidence-Based</h3>
                  <p className="text-muted-foreground">We use proven practices and continuously evaluate our impact and outcomes.</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">CQC Regulated</h3>
                  <p className="text-muted-foreground">We maintain high standards across all five CQC Key Lines of Enquiry.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <Values/>

      {/* Partners Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm">Our Network</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Strategic Partnerships
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We collaborate with leading organizations to provide comprehensive, coordinated support to the people we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-xl p-8 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">{partner.id}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{partner.category}</h3>
                    <p className="text-muted-foreground">{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
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

      {/* CQC Standards Section */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">CQC Regulatory Compliance</h2>
            <p className="text-lg text-muted-foreground">
              As a CQC-regulated provider, we are inspected against five Key Lines of Enquiry to ensure we meet the highest standards of care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {['Safe', 'Effective', 'Caring', 'Responsive', 'Well-led'].map((standard) => (
              <div key={standard} className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/30 transition-colors">
                <h3 className="font-bold text-foreground text-lg">{standard}</h3>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8">
            These standards ensure we consistently provide safe, effective, and compassionate care that respects the dignity and choices of every individual.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28">
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
      </section>

      <Footer />
    </div>
  )
}
