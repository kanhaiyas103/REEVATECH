import { PortfolioTable } from "@/components/admin/portfolio-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function PortfolioPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Portfolio Projects</h1>
          <p className="text-muted-foreground">Manage your project showcase</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </Button>
      </div>

      <PortfolioTable />
    </div>
  )
}
