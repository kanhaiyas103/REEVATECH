import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export default function ProductsSection() {
  const productCategories = [
    {
      title: "HVAC Systems",
      description: "Commercial and industrial heating, ventilation, and air conditioning solutions",
      image: "/modern-commercial-hvac-rooftop.png",
      products: [
        "Rooftop Units (RTU)",
        "Split Systems",
        "Variable Refrigerant Flow (VRF)",
        "Chillers & Cooling Towers",
        "Air Handling Units (AHU)",
        "Heat Pumps",
      ],
      badge: "Energy Efficient",
    },
    {
      title: "Kitchen Ventilation",
      description: "Professional kitchen exhaust and ventilation systems for commercial kitchens",
      image: "/placeholder-h2sna.png",
      products: [
        "Exhaust Hoods",
        "Make-up Air Units",
        "Grease Duct Systems",
        "Fire Suppression Integration",
        "Demand Control Ventilation",
        "Energy Recovery Systems",
      ],
      badge: "Fire Safe",
    },
    {
      title: "Kitchen Equipment",
      description: "High-performance commercial kitchen appliances and equipment",
      image: "/commercial-kitchen-stainless.png",
      products: [
        "Commercial Ovens",
        "Refrigeration Systems",
        "Dishwashing Equipment",
        "Food Prep Equipment",
        "Cooking Ranges",
        "Warming Equipment",
      ],
      badge: "Professional Grade",
    },
    {
      title: "Control Systems",
      description: "Smart building automation and control systems for optimal efficiency",
      image: "/building-automation-interface.png",
      products: [
        "Building Management Systems",
        "Smart Thermostats",
        "Energy Monitoring",
        "Remote Access Controls",
        "Automated Scheduling",
        "Predictive Maintenance",
      ],
      badge: "Smart Technology",
    },
  ]

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-serif">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Premium equipment and systems from leading manufacturers, backed by our expert installation and support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productCategories.map((category, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative aspect-video">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">{category.badge}</Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl font-serif">{category.title}</CardTitle>
                <CardDescription className="text-base">{category.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {category.products.map((product, productIndex) => (
                    <div key={productIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                      <span className="truncate">{product}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group bg-transparent"
                >
                  View Products
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-serif">Need a Custom Solution?</h3>
            <p className="text-muted-foreground mb-6">
              Our experts can design and specify the perfect equipment combination for your specific requirements and
              budget.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Request Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
