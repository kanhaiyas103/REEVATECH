import { ServiceScheduler } from "@/components/service-scheduler"

export const metadata = {
  title: "Schedule Service | ReevaTech - HVAC & Kitchen Equipment Solutions",
  description: "Schedule maintenance, repairs, or consultations with ReevaTech's expert technicians.",
}

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-serif">
            Schedule <span className="text-primary">Service</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Book maintenance, repairs, or consultations with our expert technicians
          </p>
        </div>

        <ServiceScheduler />
      </div>
    </div>
  )
}
