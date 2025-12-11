"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">HL</span>
          </div>
          <span className="font-bold text-xl">HARO-Links</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/about"
            onClick={handleLinkClick}
            className={`transition-colors ${
              isActive("/about") ? "text-purple-600 font-semibold" : "text-gray-300 hover:text-white"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/case-studies"
            onClick={handleLinkClick}
            className={`transition-colors ${
              isActive("/case-studies") ? "text-purple-600 font-semibold" : "text-gray-300 hover:text-white"
            }`}
          >
            Case Studies
          </Link>
          <Link
            href="/example-links"
            onClick={handleLinkClick}
            className={`transition-colors ${
              isActive("/example-links") ? "text-purple-600 font-semibold" : "text-gray-300 hover:text-white"
            }`}
          >
            Example Links
          </Link>
          <Link
            href="/blog"
            onClick={handleLinkClick}
            className={`transition-colors ${
              isActive("/blog") ? "text-purple-600 font-semibold" : "text-gray-300 hover:text-white"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={handleLinkClick}
            className={`transition-colors ${
              isActive("/contact") ? "text-purple-600 font-semibold" : "text-gray-300 hover:text-white"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-800" asChild>
            <Link href="/contact" onClick={handleLinkClick}>
              Sign In
            </Link>
          </Button>
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
            <Link href="/contact" onClick={handleLinkClick}>
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
