"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, FolderOpen, Users, Mail } from "lucide-react"
import { supabase } from "@/lib/supabase"

interface Stats {
  inquiries: number
  projects: number
  testimonials: number
  subscribers: number
}

export function AdminStats() {
  const [stats, setStats] = useState<Stats>({
    inquiries: 0,
    projects: 0,
    testimonials: 0,
    subscribers: 0,
  })

  useEffect(() => {
    async function fetchStats() {
      try {
        const [inquiriesRes, projectsRes, testimonialsRes, subscribersRes] = await Promise.all([
          supabase.from("contact_inquiries").select("id", { count: "exact", head: true }),
          supabase.from("portfolio_projects").select("id", { count: "exact", head: true }),
          supabase.from("testimonials").select("id", { count: "exact", head: true }),
          supabase.from("newsletter_subscribers").select("id", { count: "exact", head: true }),
        ])

        setStats({
          inquiries: inquiriesRes.count || 0,
          projects: projectsRes.count || 0,
          testimonials: testimonialsRes.count || 0,
          subscribers: subscribersRes.count || 0,
        })
      } catch (error) {
        console.error("Error fetching stats:", error)
      }
    }

    fetchStats()
  }, [])

  const statCards = [
    {
      title: "Contact Inquiries",
      value: stats.inquiries,
      icon: MessageSquare,
      description: "Total inquiries received",
    },
    {
      title: "Portfolio Projects",
      value: stats.projects,
      icon: FolderOpen,
      description: "Projects in showcase",
    },
    {
      title: "Testimonials",
      value: stats.testimonials,
      icon: Users,
      description: "Customer reviews",
    },
    {
      title: "Newsletter Subscribers",
      value: stats.subscribers,
      icon: Mail,
      description: "Active subscribers",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
