import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "SaaS Startup → TechCrunch Feature",
      company: "CloudSync Pro",
      industry: "SaaS",
      publications: ["TechCrunch", "VentureBeat", "Forbes"],
      results: {
        traffic: "+340%",
        leads: "+250%",
        authority: "DR 45 → 72",
      },
      description:
        "Positioned CloudSync as a category leader in enterprise file management through strategic editorial placements.",
      timeline: "3 months",
    },
    {
      title: "Fintech Brand → Forbes Authority",
      company: "PayFlow Solutions",
      industry: "Fintech",
      publications: ["Forbes", "Inc Magazine", "Entrepreneur"],
      results: {
        traffic: "+280%",
        leads: "+190%",
        authority: "DR 38 → 65",
      },
      description:
        "Built thought leadership around digital payment security, resulting in CEO recognition as industry expert.",
      timeline: "4 months",
    },
    {
      title: "B2B Platform → Inc Magazine Cover",
      company: "WorkStream Analytics",
      industry: "B2B Software",
      publications: ["Inc Magazine", "Fast Company", "Harvard Business Review"],
      results: {
        traffic: "+420%",
        leads: "+310%",
        authority: "DR 42 → 78",
      },
      description:
        "Secured Inc Magazine cover story on remote work analytics, establishing market leadership position.",
      timeline: "5 months",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/purple-abstract-curved-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-purple-600/20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-6 text-white">Elite Publication Success Stories</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Real results from brands that chose editorial authority over bought links. See how strategic media
                placements drive sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 mb-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-gray-50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                      <CardDescription className="text-lg">
                        {study.company} • {study.industry} • {study.timeline}
                      </CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.publications.map((pub) => (
                        <Badge key={pub} variant="secondary" className="bg-purple-100 text-purple-700">
                          {pub}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-6">{study.description}</p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <div className="text-4xl font-extrabold text-green-600">{study.results.traffic}</div>
                        <ArrowUpRight className="w-8 h-8 text-green-600 stroke-[3]" />
                      </div>
                      <div className="text-sm text-muted-foreground">Organic Traffic</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <div className="text-4xl font-extrabold text-blue-600">{study.results.leads}</div>
                        <ArrowUpRight className="w-8 h-8 text-blue-600 stroke-[3]" />
                      </div>
                      <div className="text-sm text-muted-foreground">Qualified Leads</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <div className="text-4xl font-extrabold text-purple-600">{study.results.authority}</div>
                        <ArrowUpRight className="w-8 h-8 text-purple-600 stroke-[3]" />
                      </div>
                      <div className="text-sm text-muted-foreground">Domain Rating</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready for Your Success Story?</h2>
            <p className="mb-6 opacity-90">
              Join these industry leaders who chose editorial authority over bought links.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/example-links"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors"
              >
                View Example Links
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Start Your Campaign
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
