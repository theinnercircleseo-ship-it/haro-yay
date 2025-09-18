import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, TrendingUp, Shield } from "lucide-react"

export function HeroSection() {
  console.log("[v0] HeroSection component is rendering")

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Star className="w-4 h-4 mr-2" />
            Elite Editorial Placement Service
          </Badge>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
            Haro Link Building From Elite Publications That <span className="text-secondary">Don't Sell Links</span>
          </h1>

          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            While others pay $500+ for weak links from sites that sell to everyone, we secure editorial placements from
            Forbes, Inc, Entrepreneur, and top-tier publications that only feature genuine experts.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-sm">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>Never Sell Links</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span>$2,500 Link Value</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <Shield className="w-5 h-5 text-purple-600" />
              <span>Editorial Validation</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <Star className="w-5 h-5 text-orange-600" />
              <span>Impossible to Replicate</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-6">
              Secure Your Elite Links
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              See Our Publication Portfolio
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">Limited to 50 clients maximum. Consultation required.</p>
        </div>
      </div>
    </section>
  )
}
