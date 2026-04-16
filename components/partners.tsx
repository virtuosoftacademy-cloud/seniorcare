import Image from 'next/image'

export default function Partners() {
  const partners = [
    {
      id: 1,
      name: 'Local Authority Partners',
      description: 'Working with local councils and authorities',
    },
    {
      id: 2,
      name: 'Healthcare Providers',
      description: 'Collaborating with NHS and medical professionals',
    },
    {
      id: 3,
      name: 'Support Networks',
      description: 'Partnering with community support organisations',
    },
    {
      id: 4,
      name: 'Advocacy Groups',
      description: 'Supporting rights and representation initiatives',
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm">Partners & Collaborators</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Working Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We collaborate with leading organisations to provide comprehensive, coordinated support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-colors flex flex-col items-center text-center gap-4"
            >
              {/* Generated Placeholder Logo */}
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-3xl font-bold text-white">{partner.id}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">{partner.name}</h3>
                <p className="text-sm text-muted-foreground">{partner.description}</p>
              </div>
            </div>
          ))}
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
