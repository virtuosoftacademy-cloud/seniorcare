
import Image from 'next/image'
import { Building2, Heart, Users, Shield } from 'lucide-react'

export default function Partners() {
  const partners = [
    {
      id: 1,
      icon: Building2,
      name: 'Local Authority Partners',
      description: 'We work closely with local authorities to deliver supported living solutions that meet commissioning requirements, regulatory standards and long-term placement objectives.',
    },
    {
      id: 2,
      icon: Users,
      name: 'Care and Support Providers',
      description: 'We partner with experienced, regulated care providers to deliver person-centred support aligned with individual care plans and outcomes.',
    },
    {
      id: 3,
      icon: Shield,
      name: 'Property & Housing Partners',
      description: 'Through our housing network, we secure and manage high-quality accommodation designed to meet the specific needs of supported living environments.',
    },
    {
      id: 4,
      icon: Heart,
      name: 'Healthcare & Community Services ',
      description: 'We engage with healthcare professionals and community services to ensure individuals receive holistic support that promotes wellbeing and independence.',
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm">Partners & Collaborators</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Our Strategic Partnerships
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We actively collaborate with:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner) => {
            const Icon = partner.icon
            return (
              <div
                key={partner.id}
                className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-colors flex flex-col items-center text-center gap-4 group"
              >
                {/* Animated Icon */}
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-primary animate-bounce-subtle" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground">{partner.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 bg-card rounded-xl p-8 border border-border">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Ready to Partner With Us?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We&apos;re always looking to expand our network of partners and collaborators. Reach out to discuss potential partnerships.
            </p>
            <a href="/contact" className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
