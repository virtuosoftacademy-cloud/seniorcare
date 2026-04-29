import { Award, Handshake, Leaf, Lightbulb, Smile, Users } from 'lucide-react'
import { UsersIcon } from './ui/users'
import { HeartIcon } from './ui/heart'
import { HeartHandshakeIcon } from './ui/heart-handshake'
import { SmileIcon } from './ui/smile'
import { BrainIcon } from './ui/brain'
import { UpvoteIcon } from './ui/upvote'
import { RouteIcon } from './ui/route'
import { RefreshCCWIcon } from './ui/refresh-ccw'
import { UserIcon } from './ui/user'
import { TrendingUpIcon } from './ui/trending-up'
import { ShieldCheckIcon } from './ui/shield-check'
import { CheckIcon } from './ui/check'
import { HomeIcon } from './ui/home'
import { FileTextIcon } from './ui/file-text'

export default function Values() {
  const values = [
    {
      icon: UserIcon,
      title: 'Dignity & Respect',
      description: 'We treat every individual with respect, ensuring their choices, preferences, and rights are always upheld.',
    },
    {
      icon: TrendingUpIcon,
      title: 'Independence',
      description: 'We support individuals to develop confidence and life skills, enabling them to live as independently as possible.',
    },
    {
      icon: HomeIcon,
      title: 'Safety & Stability',
      description: 'We provide secure, well-managed environments where individuals feel safe and supported.',
    },
    {
      icon: CheckIcon,
      title: 'Quality & Excellence',
      description: 'We maintain high standards across our housing and support services, aligned with regulatory expectations.',
    },
    {
      icon: FileTextIcon,
      title: 'Accountability',
      description: 'We operate with transparency, strong governance, and clear responsibility in everything we do.',
    },
    {
      icon: HeartIcon,
      title: 'Compassion',
      description: 'We deliver care with empathy, understanding, and genuine commitment to each individual’s well-being.',
    },
  ]

  return (
    <section id="values" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          {/* <p className="text-primary font-semibold uppercase tracking-wider text-sm">Our Foundation</p> */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Our Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our values shape every aspect of how we deliver our services, from the homes we provide to the support we deliver.          </p>
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
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
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
