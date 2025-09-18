import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Check } from "lucide-react"

export function ComparisonSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16 text-balance">
            HARO Links vs. <span className="text-secondary">Traditional Link Building</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-destructive/20">
              <CardHeader className="bg-destructive/5">
                <CardTitle className="text-2xl text-destructive flex items-center">
                  <X className="w-6 h-6 mr-2" />
                  Traditional Agencies
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                    <span>Buy links from sites that sell to everyone</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                    <span>$300-500 for links from sites that sell placements</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                    <span>Risk Google penalties from obvious paid links</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                    <span>Links available to any competitor with budget</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                    <span>Generic anchor text from paid placements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader className="bg-green-100">
                <CardTitle className="text-2xl text-green-700 flex items-center">
                  <Check className="w-6 h-6 mr-2" />
                  HARO-Links Elite
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-green-800">Earn editorial placements from exclusive outlets</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-green-800">
                      Genuine editorial features from outlets that don't sell links
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-green-800">Algorithm-safe editorial endorsements</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-green-800">Exclusive access based on expertise</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-green-800">Natural, contextual mentions by journalists</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
