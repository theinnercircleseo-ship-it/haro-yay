import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export default function ExampleLinksPage() {
  const exampleLinks = [
    {
      publication: "Forbes",
      title: "How AI is Transforming Enterprise Data Management",
      url: "#",
      domain: "forbes.com",
      dr: 94,
      category: "Technology",
      type: "Expert Quote",
      description:
        "CEO featured as industry expert discussing AI implementation challenges in enterprise environments.",
    },
    {
      publication: "TechCrunch",
      title: "The Future of Fintech: Security-First Payment Solutions",
      url: "#",
      domain: "techcrunch.com",
      dr: 92,
      category: "Fintech",
      type: "Thought Leadership",
      description: "In-depth analysis piece positioning client as thought leader in payment security innovation.",
    },
    {
      publication: "Inc Magazine",
      title: "Remote Work Analytics: What Data Reveals About Productivity",
      url: "#",
      domain: "inc.com",
      dr: 91,
      category: "Business",
      type: "Cover Story",
      description: "Full cover story featuring client's research on remote work productivity metrics.",
    },
    {
      publication: "Entrepreneur",
      title: "Scaling SaaS: Lessons from 100+ Successful Startups",
      url: "#",
      domain: "entrepreneur.com",
      dr: 89,
      category: "SaaS",
      type: "Case Study",
      description: "Comprehensive case study highlighting client's growth strategies and market positioning.",
    },
    {
      publication: "Harvard Business Review",
      title: "The ROI of Employee Wellness Programs",
      url: "#",
      domain: "hbr.org",
      dr: 93,
      category: "HR Tech",
      type: "Research Feature",
      description: "Research-backed article featuring client's wellness platform data and insights.",
    },
    {
      publication: "Fast Company",
      title: "Design Thinking in B2B Software Development",
      url: "#",
      domain: "fastcompany.com",
      dr: 90,
      category: "Design",
      type: "Innovation Story",
      description: "Innovation spotlight showcasing client's user-centered design approach.",
    },
  ]

  const getDRColor = (dr: number) => {
    if (dr >= 90) return "text-green-600 bg-green-50"
    if (dr >= 80) return "text-blue-600 bg-blue-50"
    return "text-purple-600 bg-purple-50"
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Example Editorial Placements</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real editorial links from elite publications. These aren't bought links - they're authentic editorial
              placements that build lasting authority.
            </p>
          </div>

          <div className="grid gap-6 mb-16">
            {exampleLinks.map((link, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-lg">{link.publication}</CardTitle>
                        <Badge className={`${getDRColor(link.dr)} border-0`}>DR {link.dr}</Badge>
                        <Badge variant="outline">{link.type}</Badge>
                      </div>
                      <CardDescription className="text-base font-medium text-foreground mb-2">
                        {link.title}
                      </CardDescription>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{link.domain}</span>
                        <span>•</span>
                        <span>{link.category}</span>
                      </div>
                    </div>
                    <a
                      href={link.url}
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      View Article
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{link.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">DR 90+</span>
              </div>
              <h3 className="font-semibold mb-2">Elite Publications Only</h3>
              <p className="text-sm text-muted-foreground">
                We focus exclusively on publications with Domain Rating 80+ for maximum authority impact
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">100%</span>
              </div>
              <h3 className="font-semibold mb-2">Editorial Earned</h3>
              <p className="text-sm text-muted-foreground">
                Every placement is earned through editorial merit, not paid sponsorship or guest posting
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">∞</span>
              </div>
              <h3 className="font-semibold mb-2">Permanent Value</h3>
              <p className="text-sm text-muted-foreground">
                Editorial links provide permanent authority that compounds over time, unlike paid campaigns
              </p>
            </div>
          </div>

          <div className="text-center bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to See Your Brand Featured?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              These are just examples of what's possible when you choose editorial authority over bought links. Your
              industry expertise deserves elite publication coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
              >
                Read Our Strategy Blog
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
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
