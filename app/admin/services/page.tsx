import { ServicesTable } from "@/components/admin/services-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Services</h1>
          <p className="text-muted-foreground">Manage your service offerings</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Service
        </Button>
      </div>

      <ServicesTable />
    </div>
  )
}
