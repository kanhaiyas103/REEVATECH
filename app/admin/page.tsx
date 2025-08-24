import { AdminStats } from "@/components/admin/admin-stats"
import { RecentInquiries } from "@/components/admin/recent-inquiries"
import { QuickActions } from "@/components/admin/quick-actions"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to ReevaTech Admin Panel</p>
      </div>

      <AdminStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentInquiries />
        <QuickActions />
      </div>
    </div>
  )
}
