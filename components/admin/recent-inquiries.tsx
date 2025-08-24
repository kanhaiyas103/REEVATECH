"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { supabase, type ContactInquiry } from "@/lib/supabase"

export function RecentInquiries() {
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([])

  useEffect(() => {
    async function fetchRecentInquiries() {
      try {
        const { data, error } = await supabase
          .from("contact_inquiries")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(5)

        if (error) throw error
        setInquiries(data || [])
      } catch (error) {
        console.error("Error fetching recent inquiries:", error)
      }
    }

    fetchRecentInquiries()
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800"
      case "contacted":
        return "bg-yellow-100 text-yellow-800"
      case "closed":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Inquiries</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {inquiries.map((inquiry) => (
            <div key={inquiry.id} className="flex items-center justify-between">
              <div className="flex-1">
                <h4 className="font-medium">{inquiry.name}</h4>
                <p className="text-sm text-muted-foreground">{inquiry.email}</p>
                <p className="text-xs text-muted-foreground">{new Date(inquiry.created_at).toLocaleDateString()}</p>
              </div>
              <Badge className={getStatusColor(inquiry.status)}>{inquiry.status}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
