import { QuoteCalculator } from "@/components/quote-calculator"

export const metadata = {
  title: "Quote Calculator | ReevaTech - HVAC & Kitchen Equipment Solutions",
  description:
    "Get an instant estimate for your HVAC or kitchen equipment project with our interactive quote calculator.",
}

export default function QuoteCalculatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-serif">
            Project <span className="text-primary">Quote Calculator</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get an instant estimate for your HVAC or kitchen equipment project
          </p>
        </div>

        <QuoteCalculator />
      </div>
    </div>
  )
}
