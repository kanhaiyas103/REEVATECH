import { InquiriesTable } from "@/components/admin/inquiries-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function InquiriesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Contact Inquiries</h1>
          <p className="text-muted-foreground">Manage customer inquiries and quote requests</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Note
        </Button>
      </div>

      <InquiriesTable />
    </div>
  )
}
