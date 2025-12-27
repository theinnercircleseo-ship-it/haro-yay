"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function StickyCtaButton() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)

  useEffect(() => {
    if (isCalendlyOpen) {
      const script = document.createElement("script")
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    }
  }, [isCalendlyOpen])

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white shadow-2xl"
          onClick={() => setIsCalendlyOpen(true)}
        >
          Book a Call With Us
        </Button>
      </div>

      {isCalendlyOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-5xl h-[90vh] max-h-[800px] overflow-hidden">
            <button
              onClick={() => setIsCalendlyOpen(false)}
              className="absolute top-4 right-4 z-10 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-2 shadow-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div
              className="calendly-inline-widget w-full h-full"
              data-url="https://calendly.com/brunofigueiroacavalcanti/30min?hide_gdpr_banner=1"
            />
          </div>
        </div>
      )}
    </>
  )
}
