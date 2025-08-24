import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const services = [
    "HVAC Installation",
    "Kitchen Equipment",
    "System Maintenance",
    "Emergency Repairs",
    "Energy Audits",
    "Preventive Maintenance",
  ]

  const quickLinks = ["About Us", "Our Services", "Products", "Portfolio", "Careers", "Blog"]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-xl font-serif">R</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-xl font-bold font-serif">ReevaTech</h3>
                  <p className="text-xs text-primary-foreground/80">HVAC & Kitchen Solutions</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Your trusted partner for professional HVAC and kitchen equipment solutions. Serving businesses with
                expert installation, maintenance, and 24/7 support.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-200"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 font-serif">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#services"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 font-serif">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "")}`}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-6 font-serif">Stay Connected</h4>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-foreground/60" />
                  <span className="text-primary-foreground/80">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-foreground/60" />
                  <span className="text-primary-foreground/80">info@reevatech.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-foreground/60 mt-0.5" />
                  <div className="text-primary-foreground/80">
                    <div>123 Industrial Blvd</div>
                    <div>Suite 100, City, ST 12345</div>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div>
                <h5 className="font-medium mb-3">Newsletter</h5>
                <p className="text-sm text-primary-foreground/80 mb-3">Get maintenance tips and industry updates</p>
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                  />
                  <Button variant="secondary" size="sm" className="bg-secondary hover:bg-secondary/90">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">© 2024 ReevaTech. All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
