import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "ReevaTech - HVAC & Kitchen Equipment Solutions",
  description:
    "Professional HVAC and Kitchen Equipment solutions for commercial and industrial applications. Expert installation, maintenance, and support.",
  generator: "v0.app",
  keywords: "HVAC, Kitchen Equipment, Commercial HVAC, Industrial Kitchen, Installation, Maintenance, Repair",
  authors: [{ name: "ReevaTech" }],
  openGraph: {
    title: "ReevaTech - HVAC & Kitchen Equipment Solutions",
    description: "Professional HVAC and Kitchen Equipment solutions for commercial and industrial applications.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
