"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { supabase, type Testimonial } from "@/lib/supabase"
import { Eye, Edit, Trash2, Star } from "lucide-react"

export function TestimonialsTable() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const { data, error } = await supabase
          .from("testimonials")
          .select("*")
          .order("created_at", { ascending: false })

        if (error) throw error
        setTestimonials(data || [])
      } catch (error) {
        console.error("Error fetching testimonials:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  if (loading) {
    return <div className="text-center py-8">Loading testimonials...</div>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Testimonials Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center space-x-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold">{testimonial.client_name}</h3>
                      {testimonial.is_featured && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
                    </div>
                    {testimonial.company && <p className="text-sm text-muted-foreground">{testimonial.company}</p>}
                  </div>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">"{testimonial.testimonial}"</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {testimonial.project_type} • {new Date(testimonial.created_at).toLocaleDateString()}
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
