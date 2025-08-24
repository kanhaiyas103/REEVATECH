"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Calculator, Download, Mail } from "lucide-react"

interface QuoteData {
  projectType: string
  squareFootage: number
  serviceType: string[]
  timeline: string
  complexity: string
  location: string
}

export function QuoteCalculator() {
  const [quoteData, setQuoteData] = useState<QuoteData>({
    projectType: "",
    squareFootage: 0,
    serviceType: [],
    timeline: "",
    complexity: "",
    location: "",
  })
  const [estimate, setEstimate] = useState<number | null>(null)
  const [showResults, setShowResults] = useState(false)

  const calculateQuote = () => {
    let basePrice = 0
    let multiplier = 1

    // Base pricing by project type
    switch (quoteData.projectType) {
      case "hvac-residential":
        basePrice = 5000
        break
      case "hvac-commercial":
        basePrice = 15000
        break
      case "kitchen-restaurant":
        basePrice = 25000
        break
      case "kitchen-industrial":
        basePrice = 50000
        break
      default:
        basePrice = 10000
    }

    // Square footage factor
    const sqftFactor = Math.max(1, quoteData.squareFootage / 1000)
    basePrice *= sqftFactor

    // Service type additions
    const serviceAdditions = quoteData.serviceType.length * 2000

    // Timeline multiplier
    switch (quoteData.timeline) {
      case "urgent":
        multiplier *= 1.5
        break
      case "standard":
        multiplier *= 1.0
        break
      case "flexible":
        multiplier *= 0.9
        break
    }

    // Complexity multiplier
    switch (quoteData.complexity) {
      case "basic":
        multiplier *= 1.0
        break
      case "standard":
        multiplier *= 1.3
        break
      case "complex":
        multiplier *= 1.8
        break
    }

    const finalEstimate = (basePrice + serviceAdditions) * multiplier
    setEstimate(Math.round(finalEstimate))
    setShowResults(true)
  }

  const handleServiceTypeChange = (service: string, checked: boolean) => {
    if (checked) {
      setQuoteData((prev) => ({
        ...prev,
        serviceType: [...prev.serviceType, service],
      }))
    } else {
      setQuoteData((prev) => ({
        ...prev,
        serviceType: prev.serviceType.filter((s) => s !== service),
      }))
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calculator Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calculator className="w-5 h-5 mr-2" />
              Project Details
            </CardTitle>
            <CardDescription>Tell us about your project to get an accurate estimate</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Project Type */}
            <div>
              <Label className="text-base font-medium">Project Type</Label>
              <RadioGroup
                value={quoteData.projectType}
                onValueChange={(value) => setQuoteData((prev) => ({ ...prev, projectType: value }))}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="hvac-residential" id="hvac-residential" />
                  <Label htmlFor="hvac-residential">HVAC - Residential</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="hvac-commercial" id="hvac-commercial" />
                  <Label htmlFor="hvac-commercial">HVAC - Commercial</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="kitchen-restaurant" id="kitchen-restaurant" />
                  <Label htmlFor="kitchen-restaurant">Kitchen Equipment - Restaurant</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="kitchen-industrial" id="kitchen-industrial" />
                  <Label htmlFor="kitchen-industrial">Kitchen Equipment - Industrial</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Square Footage */}
            <div>
              <Label htmlFor="squareFootage" className="text-base font-medium">
                Square Footage
              </Label>
              <Input
                id="squareFootage"
                type="number"
                placeholder="e.g., 2000"
                value={quoteData.squareFootage || ""}
                onChange={(e) =>
                  setQuoteData((prev) => ({ ...prev, squareFootage: Number.parseInt(e.target.value) || 0 }))
                }
                className="mt-2"
              />
            </div>

            {/* Services Needed */}
            <div>
              <Label className="text-base font-medium">Services Needed</Label>
              <div className="mt-2 space-y-2">
                {[
                  "Installation",
                  "Maintenance",
                  "Repair",
                  "Design Consultation",
                  "Emergency Service",
                  "Warranty Support",
                ].map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <Checkbox
                      id={service}
                      checked={quoteData.serviceType.includes(service)}
                      onCheckedChange={(checked) => handleServiceTypeChange(service, checked as boolean)}
                    />
                    <Label htmlFor={service}>{service}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <Label className="text-base font-medium">Project Timeline</Label>
              <RadioGroup
                value={quoteData.timeline}
                onValueChange={(value) => setQuoteData((prev) => ({ ...prev, timeline: value }))}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="urgent" id="urgent" />
                  <Label htmlFor="urgent">Urgent (1-2 weeks) - +50%</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="standard" id="standard" />
                  <Label htmlFor="standard">Standard (3-6 weeks)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="flexible" id="flexible" />
                  <Label htmlFor="flexible">Flexible (6+ weeks) - 10% discount</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Complexity */}
            <div>
              <Label className="text-base font-medium">Project Complexity</Label>
              <RadioGroup
                value={quoteData.complexity}
                onValueChange={(value) => setQuoteData((prev) => ({ ...prev, complexity: value }))}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="basic" id="basic" />
                  <Label htmlFor="basic">Basic - Standard installation</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="standard" id="standard-complexity" />
                  <Label htmlFor="standard-complexity">Standard - Custom requirements</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="complex" id="complex" />
                  <Label htmlFor="complex">Complex - Specialized systems</Label>
                </div>
              </RadioGroup>
            </div>

            <Button
              onClick={calculateQuote}
              className="w-full"
              disabled={
                !quoteData.projectType || !quoteData.squareFootage || !quoteData.timeline || !quoteData.complexity
              }
            >
              Calculate Estimate
            </Button>
          </CardContent>
        </Card>

        {/* Results */}
        <Card>
          <CardHeader>
            <CardTitle>Your Estimate</CardTitle>
            <CardDescription>Based on the information provided</CardDescription>
          </CardHeader>
          <CardContent>
            {showResults && estimate ? (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">${estimate.toLocaleString()}</div>
                  <p className="text-muted-foreground">Estimated Project Cost</p>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Estimate Includes:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Equipment and materials</li>
                    <li>• Professional installation</li>
                    <li>• Testing and commissioning</li>
                    <li>• Basic warranty coverage</li>
                    <li>• Project management</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> This is a preliminary estimate. Final pricing may vary based on site
                    conditions, specific requirements, and current market rates.
                  </p>
                </div>

                <div className="flex flex-col space-y-2">
                  <Button className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Request Detailed Quote
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Download Estimate
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Calculator className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Fill out the form to get your instant estimate</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
