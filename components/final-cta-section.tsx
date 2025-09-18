import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Star, Award } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Award className="w-4 h-4 mr-2" />
            Exclusive Access
          </Badge>

          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
            Ready to Dominate With Links Your Competitors <span className="text-secondary">Cannot Buy</span>?
          </h2>

          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Join the exclusive tier of brands featured in publications that maintain editorial integrity. No link farms.
            No paid placements. Just genuine authority recognition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-6">
              Claim Your Elite Media Access
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              Schedule Consultation
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-green-600" />
              <span>Limited to 50 clients maximum</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-secondary" />
              <span>Consultation required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
