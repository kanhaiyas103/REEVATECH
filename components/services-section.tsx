"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Thermometer, ChefHat, Settings, Wrench, Shield, Clock } from "lucide-react"
import { supabase, type Service } from "@/lib/supabase"

export default function ServicesSection() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchServices() {
      try {
        if (!supabase) {
          console.log("[v0] Supabase not configured, using fallback services")
          // Use fallback services when database is not configured
          setServices([
            {
              id: "1",
              name: "HVAC Systems",
              description:
                "Complete heating, ventilation, and air conditioning solutions for commercial and industrial facilities.",
              category: "hvac",
              features: [
                "System Design & Installation",
                "Energy Efficiency Optimization",
                "Preventive Maintenance",
                "24/7 Emergency Support",
              ],
              is_active: true,
              sort_order: 1,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
            
            {
              id: "2",
              name: "Kitchen Equipment",
              description:
                "Professional kitchen equipment installation and maintenance for restaurants and commercial kitchens.",
              category: "kitchen",
              features: [
                "Commercial Kitchen Design",
                "Equipment Installation",
                "Maintenance Programs",
                "Compliance & Safety"
              ],
              is_active: true,
              sort_order: 2,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
          ])
          setLoading(false)
          return
        }

        const { data, error } = await supabase
          .from("services")
          .select("*")
          .eq("is_active", true)
          .order("sort_order", { ascending: true })

        if (error) throw error
        setServices(data || [])
      } catch (error) {
        console.error("Error fetching services:", error)
        setServices([
          {
            id: "1",
            name: "HVAC Systems",
            description:
              "Complete heating, ventilation, and air conditioning solutions for commercial and industrial facilities.",
            category: "hvac",
            features: [
              "System Design & Installation",
              "Energy Efficiency Optimization",
              "Preventive Maintenance",
              "24/7 Emergency Support",
            ],
            is_active: true,
            sort_order: 1,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
          {
            id: "2",
            name: "Kitchen Equipment",
            description:
              "Professional kitchen equipment installation and maintenance for restaurants and commercial kitchens.",
            category: "kitchen",
            features: [
              "Commercial Kitchen Design",
              "Equipment Installation",
              "Maintenance Programs",
              "Compliance & Safety"
            ],
            is_active: true,
            sort_order: 2,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  const additionalServices = [
    {
      icon: Settings,
      title: "System Maintenance",
      description: "Regular maintenance programs to keep your equipment running efficiently and extend its lifespan.",
    },
    {
      icon: Wrench,
      title: "Emergency Repairs",
      description: "24/7 emergency repair services to minimize downtime and keep your business operational.",
    },
    {
      icon: Shield,
      title: "Warranty & Support",
      description: "Comprehensive warranty coverage and ongoing technical support for all our installations.",
    },
    {
      icon: Clock,
      title: "Scheduled Service",
      description: "Flexible scheduling options to minimize disruption to your business operations.",
    },
  ]

  if (loading) {
    return (
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">Loading services...</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-serif">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive HVAC and kitchen equipment solutions tailored to your business needs
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="overflow-hidden bg-card border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-video relative">
                <img
                  src={`/abstract-geometric-shapes.png?height=300&width=500&query=${service.category} equipment installation`}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-2">
                    {service.category === "hvac" ? (
                      <Thermometer className="w-6 h-6 text-primary-foreground" />
                    ) : (
                      <ChefHat className="w-6 h-6 text-primary-foreground" />
                    )}
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">{service.name}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {service.features && service.features.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => (
            <Card
              key={index}
              className="text-center bg-card border-border hover:shadow-md transition-shadow duration-300"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg font-serif">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
