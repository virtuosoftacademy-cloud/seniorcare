'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const PathName = usePathname()

  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/partners', label: 'Partners' },
    { href: '/contact', label: 'Contact' },
  ]
  const isActive = (label: string) => {
    const currentPath = PathName || '/'
    const link = navLinks.find(link => link.label === label)
    return link && currentPath === link.href ? 'text-primary font-semibold' : 'text-foreground hover:text-primary transition-colors'
  }

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img src="/ArdellLogo.png" alt="Ardell Living Logo" className="w-6 h-6" />
            </div>
            <span className="text-foreground font-bold text-lg hidden sm:inline">Ardell Living</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${isActive(link.label)}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:block">
            <Link href="/contact" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-colors">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden border-t border-border py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-foreground hover:text-primary hover:bg-muted px-4 py-2 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link href="/contact" className="block bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-medium transition-colors text-center mt-4">
              Get Started
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
