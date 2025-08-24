"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { supabase, type PortfolioProject } from "@/lib/supabase"
import { Eye, Edit, Trash2, Star } from "lucide-react"

export function PortfolioTable() {
  const [projects, setProjects] = useState<PortfolioProject[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase
          .from("portfolio_projects")
          .select("*")
          .order("created_at", { ascending: false })

        if (error) throw error
        setProjects(data || [])
      } catch (error) {
        console.error("Error fetching projects:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "hvac":
        return "bg-blue-100 text-blue-800"
      case "kitchen":
        return "bg-green-100 text-green-800"
      case "commercial":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (loading) {
    return <div className="text-center py-8">Loading projects...</div>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center space-x-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold">{project.title}</h3>
                      {project.featured && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
                    </div>
                    <p className="text-sm text-muted-foreground">{project.client_name}</p>
                  </div>
                  <Badge className={getCategoryColor(project.category)}>{project.category}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{project.description}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {project.location} •{" "}
                  {project.completion_date ? new Date(project.completion_date).toLocaleDateString() : "Ongoing"}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Edit className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
