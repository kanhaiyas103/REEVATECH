"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { supabase, type Service } from "@/lib/supabase"
import { Eye, Edit, Trash2, ToggleLeft, ToggleRight } from "lucide-react"

export function ServicesTable() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchServices() {
      try {
        const { data, error } = await supabase.from("services").select("*").order("sort_order", { ascending: true })

        if (error) throw error
        setServices(data || [])
      } catch (error) {
        console.error("Error fetching services:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "hvac":
        return "bg-blue-100 text-blue-800"
      case "kitchen_equipment":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (loading) {
    return <div className="text-center py-8">Loading services...</div>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Services Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center space-x-4">
                  <div>
                    <h3 className="font-semibold">{service.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{service.description}</p>
                  </div>
                  <Badge className={getCategoryColor(service.category)}>{service.category.replace("_", " ")}</Badge>
                  <div className="flex items-center">
                    {service.is_active ? (
                      <ToggleRight className="w-5 h-5 text-green-500" />
                    ) : (
                      <ToggleLeft className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
                {service.features && service.features.length > 0 && (
                  <div className="mt-2">
                    <p className="text-xs text-muted-foreground">
                      Features: {service.features.slice(0, 3).join(", ")}
                      {service.features.length > 3 && "..."}
                    </p>
                  </div>
                )}
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
