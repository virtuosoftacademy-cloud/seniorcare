import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative bg-background py-20 sm:py-28 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-semibold uppercase tracking-wider text-sm">Welcome to Ardell Living</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Housing-Led Support for Vulnerable Adults
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We provide safe, effective, and compassionate housing-led supported living services. Our CQC-regulated services ensure your wellbeing, dignity, and independence are always our priority.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 animate-bounce-subtle" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="text-muted-foreground">Individuals Supported</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              {/* <div>
                <p className="text-3xl font-bold text-primary">CQC</p>
                <p className="text-muted-foreground">Regulated & Compliant</p>
              </div> */}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute bg-primary w-xl rounded-2xl p-8 sm:p-12 h-90 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl text-primary-foreground">🏘️</span>
                </div>
                <p className="text-white font-semibold text-lg">Safe & Supportive Living</p>
              </div>
            </div>

            <div className="relative lg:left-8 top-8 w-xl bg-accent h-72 lg:h-86 rounded-2xl flex items-center justify-center">
              <img src={"/oldImg.jpg"} alt='Oldage'
                className="bg-primary mx-auto w-xl flex items-center rounded-2xl justify-center h-90"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
