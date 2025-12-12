import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Star, Award } from "lucide-react"

export function PublicationsSection() {
  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-6 text-balance text-gray-900">
            The Publications Your Competitors <span className="text-purple-600">Can't Access</span>
          </h2>

          <p className="text-xl text-gray-800 text-center mb-16 text-pretty max-w-3xl mx-auto">
            These elite publications maintain strict editorial standards and never sell placements. Access is earned
            through expertise, not payment.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-secondary/10">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    <Award className="w-4 h-4 mr-1" />
                    Premium Tier
                  </Badge>
                  <span className="text-sm font-medium text-secondary">DR 85+</span>
                </div>
                <div className="min-h-[64px] flex items-center">
                  <CardTitle className="text-2xl">Elite Publications</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 mt-1.5" />
                    <span>
                      <strong>Forbes</strong> - Editorial features only
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 mt-1.5" />
                    <span>
                      <strong>Inc Magazine</strong> - No paid placements accepted
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 mt-1.5" />
                    <span>
                      <strong>Entrepreneur</strong> - Strict source vetting
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 mt-1.5" />
                    <span>
                      <strong>Fast Company</strong> - Journalist-selected sources
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 mt-1.5" />
                    <span>
                      <strong>Harvard Business Review</strong> - Expert-only contributions
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">
                    <Star className="w-4 h-4 mr-1" />
                    High-Authority Tier
                  </Badge>
                  <span className="text-sm font-medium">DR 70-84</span>
                </div>
                <div className="min-h-[64px] flex items-center">
                  <CardTitle className="text-2xl">Authority Publications</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0 mt-1.5" />
                    <span>
                      <strong>TechCrunch</strong> - No link sales policy
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0 mt-1.5" />
                    <span>
                      <strong>Mashable</strong> - Editorial integrity maintained
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0 mt-1.5" />
                    <span>
                      <strong>Search Engine Journal</strong> - Industry expert sources
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0 mt-1.5" />
                    <span>
                      <strong>MarketingLand</strong> - Vetted professional insights
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0 mt-1.5" />
                    <span>
                      <strong>Social Media Today</strong> - Thought leader features
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">Specialist Publications</Badge>
                  <span className="text-sm font-medium">DR 60-79</span>
                </div>
                <div className="min-h-[64px] flex items-center">
                  <CardTitle className="text-2xl">Industry Leaders</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 text-purple-600 mr-3 flex-shrink-0 mt-1.5" />
                    <span>Industry-specific outlets with editorial standards</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 text-purple-600 mr-3 flex-shrink-0 mt-1.5" />
                    <span>Regional business publications with strong authority</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 text-purple-600 mr-3 flex-shrink-0 mt-1.5" />
                    <span>Professional trade magazines with expert-only policies</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 text-purple-600 mr-3 flex-shrink-0 mt-1.5" />
                    <span>Niche authority sites that maintain quality standards</span>
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
