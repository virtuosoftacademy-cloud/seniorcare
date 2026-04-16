import { Users, Lightbulb, Award, Smile, Handshake, Leaf } from 'lucide-react'

export default function Values() {
  const values = [
    {
      icon: Users,
      title: 'Person-Centred',
      description: 'Every individual is at the heart of what we do. We respect choices, preferences, and promote independence.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continually develop new approaches and leverage best practices to enhance service quality.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We hold ourselves to the highest standards in every aspect of our work and care provision.',
    },
    {
      icon: Smile,
      title: 'Compassion',
      description: 'Empathy and genuine care underpin all our relationships with service users and their families.',
    },
    {
      icon: Handshake,
      title: 'Collaboration',
      description: 'We work together with partners, stakeholders, and community to provide holistic support.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We are committed to environmental responsibility and building a better future for all.',
    },
  ]

  return (
    <section id="values" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm">Our Foundation</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Core Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These principles guide every decision and interaction, ensuring we deliver services that truly make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon
            return (
              <div
                key={idx}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/90 transition-colors">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
