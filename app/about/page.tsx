import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Our Insider Media Network Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a specialized team of media professionals with insider access to elite publications, helping brands
              secure authentic editorial placements that build lasting authority.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Elite Publication Access</CardTitle>
                <CardDescription>
                  Direct relationships with editors at Forbes, Inc, Entrepreneur, TechCrunch, and 200+ premium
                  publications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our team includes former journalists and PR professionals who understand what elite publications
                  actually want. We don't just respond to HARO queries - we craft strategic editorial campaigns that
                  position your brand as an industry authority.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Proven Track Record</CardTitle>
                <CardDescription>
                  Over 5,000 successful editorial placements across Fortune 500 companies and emerging brands
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We've helped SaaS companies secure TechCrunch features, fintech startups land Forbes coverage, and B2B
                  brands build category leadership through strategic editorial authority campaigns.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Why Editorial Authority Matters</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3x</span>
                </div>
                <h3 className="font-semibold mb-2">Higher Trust</h3>
                <p className="text-sm text-muted-foreground">
                  Editorial mentions generate 3x more trust than paid advertising
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">10x</span>
                </div>
                <h3 className="font-semibold mb-2">SEO Value</h3>
                <p className="text-sm text-muted-foreground">
                  Editorial links provide 10x more SEO value than bought links
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">∞</span>
                </div>
                <h3 className="font-semibold mb-2">Long-term Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Editorial authority compounds over time, unlike paid campaigns
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Build Editorial Authority?</h2>
            <p className="text-muted-foreground mb-8">
              Join 500+ brands that trust our insider media network for authentic editorial placements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/case-studies"
                className="inline-flex items-center justify-center px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
              >
                View Case Studies
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
