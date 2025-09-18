import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">HL</span>
          </div>
          <span className="font-bold text-xl">HARO-Links</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="/about" className="text-gray-300 hover:text-white transition-colors">
            About Us
          </a>
          <a href="/case-studies" className="text-gray-300 hover:text-white transition-colors">
            Case Studies
          </a>
          <a href="/example-links" className="text-gray-300 hover:text-white transition-colors">
            Example Links
          </a>
          <a href="/blog" className="text-gray-300 hover:text-white transition-colors">
            Blog
          </a>
          <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
            Contact Us
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-800">
            Sign In
          </Button>
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}
