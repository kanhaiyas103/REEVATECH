import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name } = body

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email address is required" }, { status: 400 })
    }

    // Insert newsletter subscription
    const { data, error } = await supabase
      .from("newsletter_subscribers")
      .insert([
        {
          email,
          name: name || null,
          is_active: true,
        },
      ])
      .select()

    if (error) {
      // Handle duplicate email
      if (error.code === "23505") {
        return NextResponse.json({ error: "Email already subscribed" }, { status: 409 })
      }

      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 })
    }

    console.log("[v0] New newsletter subscription:", data[0])

    return NextResponse.json({ message: "Successfully subscribed to newsletter" }, { status: 200 })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
