import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

// Create client with error handling for missing credentials
export const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null

// Helper function to check if Supabase is configured
export const isSupabaseConfigured = () => {
  return !!(supabaseUrl && supabaseAnonKey)
}

// Database types
export interface ContactInquiry {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  inquiry_type: "general" | "quote" | "service"
  status: "new" | "contacted" | "closed"
  created_at: string
  updated_at: string
}

export interface QuoteRequest {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  service_type: "hvac" | "kitchen_equipment" | "both"
  project_description: string
  budget_range?: string
  timeline?: string
  location?: string
  status: "pending" | "quoted" | "accepted" | "declined"
  created_at: string
  updated_at: string
}

export interface NewsletterSubscriber {
  id: string
  email: string
  name?: string
  subscribed_at: string
  is_active: boolean
}

export interface PortfolioProject {
  id: string
  title: string
  description?: string
  category: "hvac" | "kitchen" | "commercial"
  client_name?: string
  location?: string
  completion_date?: string
  image_url?: string
  featured: boolean
  created_at: string
  updated_at: string
}

export interface Service {
  id: string
  name: string
  description?: string
  category: "hvac" | "kitchen"
  features?: string[]
  is_active: boolean
  sort_order: number
  created_at: string
  updated_at: string
}

export interface Testimonial {
  id: string
  client_name: string
  company?: string
  testimonial: string
  rating: number
  project_type?: string
  is_featured: boolean
  created_at: string
}
