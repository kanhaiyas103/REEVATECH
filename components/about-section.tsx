import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Users, Clock, MapPin } from "lucide-react"

export default function AboutSection() {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Satisfied Clients",
      description: "Businesses trust us",
    },
    {
      icon: Clock,
      number: "15+",
      label: "Years Experience",
      description: "Industry expertise",
    },
    {
      icon: Award,
      number: "1000+",
      label: "Projects Completed",
      description: "Successful installations",
    },
    {
      icon: MapPin,
      number: "24/7",
      label: "Service Available",
      description: "Emergency support",
    },
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-serif">
              About <span className="text-primary">ReevaTech</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 15 years of experience in the HVAC and kitchen equipment industry, ReevaTech has established
              itself as a trusted partner for businesses across various sectors. We specialize in delivering
              comprehensive solutions that combine cutting-edge technology with reliable service.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of certified professionals is committed to providing exceptional service, from initial
              consultation and system design to installation, maintenance, and ongoing support. We understand that your
              equipment is critical to your business operations, which is why we offer 24/7 emergency service to keep
              you running smoothly.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground font-medium">Certified technicians and engineers</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground font-medium">Energy-efficient solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground font-medium">Comprehensive warranty coverage</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground font-medium">Preventive maintenance programs</span>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Learn More About Us
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/hvac-commercial-work.png"
              alt="ReevaTech team at work"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold font-serif">15+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-card border-border">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2 font-serif">{stat.number}</div>
                <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
