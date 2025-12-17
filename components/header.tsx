"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" })
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMobileMenuOpen])

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
          <div className="w-10 h-10 relative flex-shrink-0">
            <Image src="/images/haro-logo.png" alt="HARO-Links Logo" width={40} height={40} className="rounded-full" />
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

        <div className="hidden md:flex items-center space-x-4">
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

        <button
          ref={buttonRef}
          className="md:hidden p-2 text-white hover:bg-gray-800 rounded-lg transition-colors z-[60]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-16 left-0 right-0 w-full bg-white shadow-2xl z-[55] animate-in slide-in-from-top duration-200"
        >
          <nav className="flex flex-col py-2">
            <Link
              href="/about"
              onClick={handleLinkClick}
              className={`px-5 py-3 text-base ${
                isActive("/about") ? "text-purple-600 font-semibold bg-purple-50" : "text-gray-900 hover:bg-gray-100"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/case-studies"
              onClick={handleLinkClick}
              className={`px-5 py-3 text-base ${
                isActive("/case-studies")
                  ? "text-purple-600 font-semibold bg-purple-50"
                  : "text-gray-900 hover:bg-gray-100"
              }`}
            >
              Case Studies
            </Link>
            <Link
              href="/example-links"
              onClick={handleLinkClick}
              className={`px-5 py-3 text-base ${
                isActive("/example-links")
                  ? "text-purple-600 font-semibold bg-purple-50"
                  : "text-gray-900 hover:bg-gray-100"
              }`}
            >
              Example Links
            </Link>
            <Link
              href="/blog"
              onClick={handleLinkClick}
              className={`px-5 py-3 text-base ${
                isActive("/blog") ? "text-purple-600 font-semibold bg-purple-50" : "text-gray-900 hover:bg-gray-100"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className={`px-5 py-3 text-base ${
                isActive("/contact") ? "text-purple-600 font-semibold bg-purple-50" : "text-gray-900 hover:bg-gray-100"
              }`}
            >
              Contact Us
            </Link>

            <div className="px-4 py-3 space-y-2 border-t border-gray-200 mt-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full text-gray-900 border-gray-300 hover:bg-gray-100 bg-transparent"
                asChild
              >
                <Link href="/contact" onClick={handleLinkClick}>
                  Sign In
                </Link>
              </Button>
              <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700 text-white" asChild>
                <Link href="/contact" onClick={handleLinkClick}>
                  Get Started
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
