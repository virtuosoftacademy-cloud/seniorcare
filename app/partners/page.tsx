import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

export const metadata = {
  title: 'Our Partners | Ardell Living',
  description: 'Discover the strategic partnerships and collaborations that support Ardell Living\'s mission to provide excellent housing-led supported living services.',
}

export default function PartnersPage() {
  const partnerCategories = [
    {
      id: 1,
      name: 'Local Authority Partners',
      description: 'Working with local councils and authorities',
      details:
        'We collaborate closely with local authorities to ensure coordinated care pathways, appropriate funding, and integrated support. Our partnerships help us understand local needs and contribute to community development strategies.',
      examples: ['Council Adult Services', 'Housing Departments', 'Local Health & Wellbeing Boards'],
    },
    {
      id: 2,
      name: 'Healthcare Providers',
      description: 'Collaborating with NHS and medical professionals',
      details:
        'Our healthcare partnerships ensure residents receive comprehensive medical and mental health support. We work with GPs, specialists, mental health services, and community health teams to provide holistic care.',
      examples: ['NHS Services', 'Mental Health Providers', 'Community Health Teams', 'Specialist Services'],
    },
    {
      id: 3,
      name: 'Support Networks',
      description: 'Partnering with community support organisations',
      details:
        'Community organizations help us expand opportunities for personal development, social connection, and meaningful activity. These partnerships enrich the lives of the people we support.',
      examples: ['Employment Support Services', 'Education & Training Providers', 'Leisure & Recreation Services', 'Social Enterprise Partners'],
    },
    {
      id: 4,
      name: 'Advocacy Groups',
      description: 'Supporting rights and representation initiatives',
      details:
        'Advocacy and representation partners help ensure that resident voices are heard and their rights are protected. We actively support initiatives that promote independence and self-determination.',
      examples: ['Rights & Advocacy Organizations', 'User-Led Organizations', 'Representation Services', 'Safeguarding Bodies'],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Our Partners & Collaborators
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We work with leading organizations across health, social care, local government, and community sectors to deliver coordinated, comprehensive support.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Why We Partner</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No single organization can meet all the needs of the people we support. By building strong partnerships with health, social care, community, and advocacy organizations, we create a comprehensive ecosystem of support. These collaborations ensure our residents have access to:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Medical & Mental Health Support', description: 'Coordinated healthcare services and specialist support' },
                { title: 'Employment & Education', description: 'Pathways to work, learning, and personal development' },
                { title: 'Community & Social Connection', description: 'Opportunities for meaningful activity and relationships' },
                { title: 'Rights & Advocacy', description: 'Support to exercise choice and have their voices heard' },
              ].map((item, idx) => (
                <div key={idx} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Our Partnership Network
            </h2>
            <p className="text-lg text-muted-foreground">
              We collaborate across four key partnership areas to deliver integrated support
            </p>
          </div>

          <div className="space-y-8">
            {partnerCategories.map((category) => (
              <div key={category.id} className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-colors">
                <div className="flex gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-white">{category.id}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{category.name}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{category.details}</p>

                <div className="bg-muted/50 rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-3">Example Partners in This Category:</h4>
                  <ul className="space-y-2">
                    {category.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Benefits of Our Partnership Approach
          </h2>

          <div className="space-y-6">
            {[
              {
                title: 'Seamless Coordination',
                description:
                  'Integrated pathways across health, social care, and community support mean less duplication and better outcomes for residents.',
              },
              {
                title: 'Holistic Support',
                description:
                  'Our residents benefit from specialist expertise and comprehensive support across all aspects of their lives.',
              },
              {
                title: 'Quality Standards',
                description:
                  'Partnership with reputable organizations helps us maintain high standards and access best practice across the sector.',
              },
              {
                title: 'Resident Empowerment',
                description:
                  'Access to advocacy organizations ensures residents can exercise choice, have their voices heard, and exercise their rights.',
              },
              {
                title: 'Community Integration',
                description:
                  'Connections with community organizations help residents build meaningful relationships and stay connected to their communities.',
              },
              {
                title: 'Innovation & Learning',
                description:
                  'Our partnerships enable us to share knowledge, adopt best practices, and continuously improve our services.',
              },
            ].map((benefit, idx) => (
              <div key={idx} className="border-l-4 border-primary pl-6 py-2">
                <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20 sm:py-28 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Interested in Partnership Opportunities?
          </h2>
          <p className="text-lg text-muted-foreground">
            We&apos;re always interested in exploring new partnerships that would benefit the people we support. Whether you represent a local authority, healthcare provider, community organization, or advocacy group, we&apos;d like to hear from you.
          </p>
          <Link href="/contact" className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
            Discuss Partnership Options
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
