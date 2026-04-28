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
      name: 'Local Authorities & Commissioners',
      description: 'Working with local councils and authorities',
      details:
        'We work closely with local authorities to deliver supported living solutions that meet commissioning requirements, regulatory standards, and long-term placement objectives. Our partnerships help us understand local needs and contribute to community development strategies.',
      examples: ['Council Adult Services', 'Housing Departments', 'Local Health & Wellbeing Boards'],
    },
    {
      id: 2,
      name: 'Care & Support Providers',
      description: 'Collaborating with regulated care organisations',
      details:
        'We partner with experienced, regulated care providers to deliver person-centred support aligned with individual care plans and outcomes. These partnerships ensure residents receive comprehensive care that promotes independence and wellbeing.',
      examples: ['Domiciliary Care Providers', 'Specialist Support Services', 'CQC-Regulated Care Organisations'],
    },
    {
      id: 3,
      name: 'Property & Housing Partners',
      description: 'Securing high-quality accommodation',
      details:
        'Through our housing network, we secure and manage high-quality accommodation designed to meet the specific needs of supported living environments. Our property partners help us maintain safe, stable, and appropriate housing for all residents.',
      examples: ['Private Landlords', 'Housing Associations', 'Property Developers', 'Maintenance Services'],
    },
    {
      id: 4,
      name: 'Healthcare & Community Services',
      description: 'Partnering for holistic wellbeing',
      details:
        'We engage with healthcare professionals and community services to ensure individuals receive holistic support that promotes wellbeing and independence. These collaborations help us expand opportunities for personal development and social connection.',
      examples: ['NHS Services', 'Mental Health Providers', 'Community Health Teams', 'Employment Support Services'],
    },
  ]

  const commitmentPoints = [
    'Transparency and accountability',
    'Shared outcomes and objectives',
    'Consistent communication and collaboration',
    'Alignment with regulatory and safeguarding standards',
  ]

  const partnershipBenefits = [
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
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Updated */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm">Our Network</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Working in Partnership to Deliver Better Outcomes
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              At Ardell Living, collaboration sits at the core of our service delivery. We work alongside trusted partners across housing, care, and local authority networks to ensure individuals receive coordinated, high-quality support within safe and stable environments.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Philosophy - Updated */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Partnership Model</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our partnership model enables us to combine specialist expertise, ensuring that every individual benefits from a well-rounded, responsive, and sustainable support framework.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No single organization can meet all the needs of the people we support. By building strong partnerships with health, social care, housing, and community organizations, we create a comprehensive ecosystem of support.
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

      {/* Partner Categories - Updated with new content */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Our Strategic Partnerships
            </h2>
            <p className="text-lg text-muted-foreground">
              We actively collaborate across four key partnership areas to deliver integrated support
            </p>
          </div>

          <div className="space-y-8">
            {partnerCategories.map((category) => (
              <div key={category.id} className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-colors">
                <div className="flex gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">{category.id}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{category.name}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{category.details}</p>

                <div className="bg-muted/50 rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-3">Example Partners:</h4>
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

      {/* Our Commitment to Partnership - NEW SECTION */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-border rounded-xl p-8 md:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-8">
              Our Commitment to Partnership
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
              {commitmentPoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground pt-6 border-t border-border">
              This collaborative approach ensures that every service we deliver is coordinated, effective, and centred around the individual.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Benefits - Updated */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Benefits of Our Partnership Approach
          </h2>

          <div className="space-y-6">
            {partnershipBenefits.map((benefit, idx) => (
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
            Want to Learn More About Our Full Network of Partners?
          </h2>
          <p className="text-lg text-muted-foreground">
            We&apos;re always interested in exploring new partnerships that would benefit the people we support. 
            Whether you represent a local authority, healthcare provider, community organization, or advocacy group, 
            we&apos;d like to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
              Discuss Partnership Options
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}