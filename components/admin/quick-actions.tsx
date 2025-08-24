import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Mail, FileText, Settings } from "lucide-react"

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
            <Plus className="w-6 h-6 mb-2" />
            <span className="text-sm">Add Project</span>
          </Button>
          <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
            <Mail className="w-6 h-6 mb-2" />
            <span className="text-sm">Send Newsletter</span>
          </Button>
          <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
            <FileText className="w-6 h-6 mb-2" />
            <span className="text-sm">Generate Report</span>
          </Button>
          <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
            <Settings className="w-6 h-6 mb-2" />
            <span className="text-sm">Site Settings</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
