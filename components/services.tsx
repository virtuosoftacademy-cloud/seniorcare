import { Shield, Heart, Zap, Users, FileCheck, TrendingUp } from 'lucide-react'

export default function Services() {
  const cqcStandards = [
    {
      icon: Shield,
      title: 'Safe',
      description: 'We maintain the highest safety standards and safeguarding protocols to protect every individual in our care.',
    },
    {
      icon: Zap,
      title: 'Effective',
      description: 'Our evidence-based approach ensures tangible outcomes and continuous improvement in care delivery.',
    },
    {
      icon: Heart,
      title: 'Caring',
      description: 'Compassion and empathy guide every interaction, ensuring dignity and respect for all service users.',
    },
    {
      icon: Users,
      title: 'Responsive',
      description: 'We listen to individual needs and adapt our services to provide personalised, responsive support.',
    },
    {
      icon: FileCheck,
      title: 'Well-Led',
      description: 'Strong leadership and clear vision drive our commitment to excellence and continuous learning.',
    },
    {
      icon: TrendingUp,
      title: 'Quality',
      description: 'Regular reviews and evaluations ensure we consistently meet and exceed regulatory requirements.',
    },
  ]

  return (
    <section id="services" className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Our CQC-Regulated Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aligned with the Care Quality Commission&apos;s key lines of enquiry, we demonstrate excellence across all domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cqcStandards.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="bg-card rounded-xl p-8 hover:shadow-md transition-shadow border border-border"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
