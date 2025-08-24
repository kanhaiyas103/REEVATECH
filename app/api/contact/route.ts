import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, company, service, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !service || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Insert contact inquiry into database
    const { data, error } = await supabase
      .from("contact_inquiries")
      .insert([
        {
          name: `${firstName} ${lastName}`,
          email,
          phone,
          company: company || null,
          message: `Service: ${service}\n\nDetails: ${message}`,
          inquiry_type: "quote",
          status: "new",
        },
      ])
      .select()

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to save inquiry" }, { status: 500 })
    }

    // Send notification email (you can integrate with email service later)
    console.log("[v0] New contact inquiry received:", data[0])

    return NextResponse.json({ message: "Quote request submitted successfully", id: data[0].id }, { status: 200 })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
