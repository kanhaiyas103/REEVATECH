"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Calculator, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ]

  const advancedFeatures = [
    { name: "Quote Calculator", href: "/quote-calculator", icon: Calculator },
    { name: "Schedule Service", href: "/schedule", icon: Calendar },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-12 h-12 relative">
                <Image src="/images/reevatech-logo.png" alt="ReevaTech Logo" fill className="object-contain" priority />
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-foreground font-serif">ReevaTech</h1>
                <p className="text-xs text-muted-foreground">BEYOND AIR</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Link href="/quote-calculator">
                <Button variant="outline" size="sm" className="bg-transparent">
                  <Calculator className="w-4 h-4 mr-2" />
                  Quote
                </Button>
              </Link>
              <Link href="/schedule">
                <Button variant="outline" size="sm" className="bg-transparent">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule
                </Button>
              </Link>
            </div>
            <Button className="bg-primary hover:bg-primary/90">Get Quote</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 border border-border">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="border-t border-border pt-2 mt-2">
                {advancedFeatures.map((feature) => (
                  <Link
                    key={feature.name}
                    href={feature.href}
                    className="flex items-center px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <feature.icon className="w-4 h-4 mr-2" />
                    {feature.name}
                  </Link>
                ))}
              </div>
              <div className="px-3 py-2 border-t border-border mt-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <Phone className="w-4 h-4" />
                  <span>(555) 123-4567</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">Get Quote</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
