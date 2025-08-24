import { TestimonialsTable } from "@/components/admin/testimonials-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function TestimonialsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Testimonials</h1>
          <p className="text-muted-foreground">Manage customer testimonials and reviews</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Testimonial
        </Button>
      </div>

      <TestimonialsTable />
    </div>
  )
}
