"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function StickyCtaButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white shadow-2xl" asChild>
        <Link href="/contact">Book a Call With Us</Link>
      </Button>
    </div>
  )
}
