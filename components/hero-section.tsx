import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Wrench, Clock, Calculator, Calendar } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-card">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/commercial-kitchen-hvac.png"
          alt="Professional HVAC and Kitchen Equipment"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20">
              <Shield className="w-4 h-4 mr-2" />
              Trusted by 500+ Businesses
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 font-serif leading-tight">
            Professional <span className="text-primary">HVAC</span> &{" "}
            <span className="text-secondary">Kitchen Equipment</span> Solutions
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Expert installation, maintenance, and support for commercial and industrial applications. Your trusted
            partner for reliable climate control and kitchen solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              View Our Work
            </Button>
            <div className="flex gap-2">
              <Link href="/quote-calculator">
                <Button variant="outline" size="lg" className="bg-transparent">
                  <Calculator className="w-5 h-5 mr-2" />
                  Quick Quote
                </Button>
              </Link>
              <Link href="/schedule">
                <Button variant="outline" size="lg" className="bg-transparent">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule
                </Button>
              </Link>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 bg-card/50 backdrop-blur rounded-lg p-4 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Expert Installation</h3>
                <p className="text-sm text-muted-foreground">Professional setup & commissioning</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-card/50 backdrop-blur rounded-lg p-4 border border-border">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">Emergency service available</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-card/50 backdrop-blur rounded-lg p-4 border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Quality Guarantee</h3>
                <p className="text-sm text-muted-foreground">Warranty on all installations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
