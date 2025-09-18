import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Target } from "lucide-react"

export function ProblemSolutionSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16 text-balance">
            Stop Buying Weak Links. Start Earning <span className="text-secondary">Elite Editorial Placements</span>.
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="border-destructive/20 bg-destructive/5">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-destructive mr-3" />
                  <h3 className="text-2xl font-bold text-destructive">The Problem</h3>
                </div>
                <p className="text-lg mb-6 leading-relaxed">
                  Most agencies charge $300-500+ for links from sites that sell links to anyone with a credit card.
                  These "PBN-style" links from link farms provide minimal SEO value and carry penalty risks.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-destructive/20">
                    <span>What competitors pay:</span>
                    <span className="font-bold text-destructive">$300-500 per link</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-destructive/20">
                    <span>Actual value of their links:</span>
                    <span className="font-bold text-destructive">$80-150</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>Publications that sell links:</span>
                    <span className="font-bold text-destructive">10,000+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-green-700">Our Solution</h3>
                </div>
                <p className="text-lg mb-6 leading-relaxed text-green-800">
                  We secure genuine editorial placements from prestigious publications that maintain strict editorial
                  standards. These outlets choose sources based on expertise, not payment.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-green-200">
                    <span className="text-green-800">What we deliver:</span>
                    <span className="font-bold text-green-600">Editorial placements</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-green-200">
                    <span className="text-green-800">From outlets where links:</span>
                    <span className="font-bold text-green-600">Aren't for sale</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-green-800">Elite publications we access:</span>
                    <span className="font-bold text-green-600">200+ (invitation-only)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
