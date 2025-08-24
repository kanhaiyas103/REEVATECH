"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar, Clock, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ServiceScheduler() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    urgency: "",
    description: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isScheduled, setIsScheduled] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Submit to contact inquiries with scheduling type
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.name.split(" ")[0] || formData.name,
          lastName: formData.name.split(" ").slice(1).join(" ") || "",
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.serviceType,
          message: `Service Scheduling Request:
          
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime}
Urgency: ${formData.urgency}

Description: ${formData.description}`,
        }),
      })

      if (response.ok) {
        setIsScheduled(true)
        toast({
          title: "Service Scheduled!",
          description: "We'll contact you within 24 hours to confirm your appointment.",
          duration: 5000,
        })

        // Send confirmation email
        await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: formData.email,
            subject: "Service Appointment Request Received",
            message: `Hi ${formData.name},\n\nWe've received your service appointment request for ${formData.preferredDate} at ${formData.preferredTime}.\n\nOur team will contact you within 24 hours to confirm the appointment and discuss any specific requirements.\n\nService Type: ${formData.serviceType}\nUrgency: ${formData.urgency}\n\nThank you for choosing ReevaTech!\n\nBest regards,\nReevaTech Service Team`,
            type: "service_scheduling",
          }),
        })
      } else {
        throw new Error("Failed to schedule service")
      }
    } catch (error) {
      toast({
        title: "Scheduling Failed",
        description: "Please try again or call us directly for immediate assistance.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  if (isScheduled) {
    return (
      <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-foreground mb-4">Service Request Submitted!</h3>
          <p className="text-muted-foreground mb-6">
            Thank you for scheduling with ReevaTech. Our team will contact you within 24 hours to confirm your
            appointment and discuss any specific requirements.
          </p>
          <div className="bg-background/50 rounded-lg p-4 mb-6">
            <h4 className="font-semibold mb-2">What happens next?</h4>
            <ul className="text-sm text-muted-foreground space-y-1 text-left">
              <li>• Our service coordinator will call you to confirm the appointment</li>
              <li>• We'll discuss specific requirements and prepare accordingly</li>
              <li>• You'll receive a confirmation email with technician details</li>
              <li>• Our certified technician will arrive at the scheduled time</li>
            </ul>
          </div>
          <Button onClick={() => setIsScheduled(false)} variant="outline">
            Schedule Another Service
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calendar className="w-5 h-5 mr-2" />
          Schedule Your Service
        </CardTitle>
        <CardDescription>Fill out the form below and we'll contact you to confirm your appointment</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@company.com"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(555) 123-4567"
                required
              />
            </div>
            <div>
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Your Company"
              />
            </div>
          </div>

          <div>
            <Label>Service Type *</Label>
            <RadioGroup
              value={formData.serviceType}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, serviceType: value }))}
              className="mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="maintenance" id="maintenance" />
                <Label htmlFor="maintenance">Routine Maintenance</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="repair" id="repair" />
                <Label htmlFor="repair">Repair Service</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="installation" id="installation" />
                <Label htmlFor="installation">New Installation</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="consultation" id="consultation" />
                <Label htmlFor="consultation">Consultation</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="emergency" id="emergency" />
                <Label htmlFor="emergency">Emergency Service</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="preferredDate">Preferred Date *</Label>
              <Input
                id="preferredDate"
                name="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={handleInputChange}
                min={new Date().toISOString().split("T")[0]}
                required
              />
            </div>
            <div>
              <Label htmlFor="preferredTime">Preferred Time *</Label>
              <Input
                id="preferredTime"
                name="preferredTime"
                type="time"
                value={formData.preferredTime}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div>
            <Label>Urgency Level *</Label>
            <RadioGroup
              value={formData.urgency}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, urgency: value }))}
              className="mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="emergency" id="urgency-emergency" />
                <Label htmlFor="urgency-emergency">Emergency (Same Day)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="urgent" id="urgency-urgent" />
                <Label htmlFor="urgency-urgent">Urgent (Within 2-3 Days)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="standard" id="urgency-standard" />
                <Label htmlFor="urgency-standard">Standard (Within 1 Week)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="flexible" id="urgency-flexible" />
                <Label htmlFor="urgency-flexible">Flexible (Within 2 Weeks)</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="description">Service Description *</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Please describe the service needed, any specific issues, or requirements..."
              className="min-h-[100px]"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting || !formData.serviceType || !formData.urgency}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Scheduling...
              </>
            ) : (
              <>
                <Clock className="w-4 h-4 mr-2" />
                Schedule Service
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
