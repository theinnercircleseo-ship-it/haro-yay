import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-sidebar border-t border-sidebar-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/haro-logo.png"
                alt="HARO-Links Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-bold text-xl">HARO-Links</span>
            </div>
            {/* </CHANGE> */}
            <p className="text-muted-foreground mb-4 max-w-md leading-relaxed">
              Elite editorial placement service securing backlinks from top-tier publications that don't sell links.
              Genuine authority recognition for serious brands.
            </p>
            <p className="text-sm text-muted-foreground">© 2024 HARO-Links. All rights reserved.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Elite Editorial Placements
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Authority Building
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Media Relationship Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Expert Positioning
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
