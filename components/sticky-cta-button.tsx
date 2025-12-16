"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export function StickyCtaButton() {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push("/contact", { scroll: false })
    // Force scroll to top immediately after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" })
    }, 0)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white shadow-2xl" onClick={handleClick}>
        Book a Call With Us
      </Button>
    </div>
  )
}
