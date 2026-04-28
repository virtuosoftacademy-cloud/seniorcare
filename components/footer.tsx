import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center">
                <img src="/ArdellLogo.png" alt="Ardell Living Logo" className="w-6 h-6" />
              </div>
              {/* <span className="font-bold text-lg">Ardell Living</span> */}
            </div>
            <p className="text-primary-foreground/70">
              Creating safe, high-quality homes where people can thrive.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          {/* <div>
            <h3 className="font-bold mb-4 text-background">Services</h3>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#services" className="hover:text-primary transition-colors">Housing Support</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Care Management</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Health & Wellness</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Community Integration</a></li>
            </ul>
          </div> */}

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4 text-background">Company</h3>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/partners" className="hover:text-primary transition-colors">Partners</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4 text-background">Legal</h3>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-primary-foreground/70 text-sm">
            <p>&copy; {currentYear} Ardell Living Ltd. All rights reserved.</p>
            {/* <p>CQC Regulated | Safeguarding Committed | Community Focused</p> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
