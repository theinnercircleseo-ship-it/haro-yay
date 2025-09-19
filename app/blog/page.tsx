import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const featuredArticles = [
    {
      title: "What is HARO and Why Elite Publications Use It",
      excerpt:
        "Understanding the Help a Reporter Out platform and how top-tier publications leverage it for expert sourcing.",
      category: "Foundation",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      slug: "what-is-haro-elite-publications",
      featured: true,
    },
    {
      title: "Is HARO Worth It? ROI of Editorial vs Bought Links",
      excerpt: "Comprehensive analysis of HARO's value proposition compared to traditional link building methods.",
      category: "Strategy",
      readTime: "12 min read",
      date: "Dec 12, 2024",
      slug: "haro-roi-editorial-vs-bought-links",
    },
    {
      title: "Getting Featured in Forbes Through HARO: Insider Secrets",
      excerpt: "Step-by-step guide to securing Forbes editorial coverage through strategic HARO responses.",
      category: "Publication Focus",
      readTime: "10 min read",
      date: "Dec 10, 2024",
      slug: "haro-roi-editorial-vs-bought-links", // Updated slug
    },
  ]

  const recentArticles = [
    {
      title: "How to Write HARO Pitches That Journalists Actually Want",
      excerpt: "Master the art of crafting compelling HARO responses that editors can't ignore.",
      category: "Strategy",
      readTime: "6 min read",
      date: "Dec 8, 2024",
      slug: "haro-roi-editorial-vs-bought-links", // Updated slug
    },
    {
      title: "HARO Alternatives for Elite Media Outreach",
      excerpt: "Exploring other platforms and strategies for securing high-authority editorial placements.",
      category: "Platforms",
      readTime: "9 min read",
      date: "Dec 5, 2024",
      slug: "what-is-haro-elite-publications", // Updated slug
    },
    {
      title: "HARO for SaaS: Building Category Leadership",
      excerpt: "How SaaS companies can leverage HARO to establish thought leadership and market authority.",
      category: "Industry",
      readTime: "11 min read",
      date: "Dec 3, 2024",
      slug: "haro-roi-editorial-vs-bought-links", // Updated slug
    },
    {
      title: "Google E-E-A-T and Editorial Link Authority",
      excerpt:
        "Understanding how editorial links align with Google's Experience, Expertise, Authoritativeness, and Trustworthiness signals.",
      category: "Technical",
      readTime: "7 min read",
      date: "Nov 30, 2024",
      slug: "what-is-haro-elite-publications", // Updated slug
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Foundation: "bg-blue-100 text-blue-700",
      Strategy: "bg-green-100 text-green-700",
      "Publication Focus": "bg-purple-100 text-purple-700",
      Platforms: "bg-orange-100 text-orange-700",
      Industry: "bg-teal-100 text-teal-700",
      Technical: "bg-red-100 text-red-700",
    }
    return colors[category] || "bg-gray-100 text-gray-700"
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Editorial Authority Insights & Strategy</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert insights on HARO, editorial link building, and media authority strategies from our insider media
              network team.
            </p>
          </div>

          {/* Featured Article */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-purple-600 to-blue-600 p-8 text-white flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">FEATURED</div>
                    <div className="text-sm opacity-90">Must-read article</div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getCategoryColor(featuredArticles[0].category)}>
                        {featuredArticles[0].category}
                      </Badge>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {featuredArticles[0].date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredArticles[0].readTime}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-3">{featuredArticles[0].title}</CardTitle>
                    <CardDescription className="text-base">{featuredArticles[0].excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={`/blog/${featuredArticles[0].slug}`}
                      className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>

          {/* Recent Articles */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {recentArticles.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getCategoryColor(article.category)}>{article.category}</Badge>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-3">{article.title}</CardTitle>
                    <CardDescription>{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Explore by Category</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a
                href="/blog/what-is-haro-elite-publications"
                className="bg-blue-100 text-blue-700 px-4 py-3 rounded-lg text-center font-medium hover:opacity-80 transition-opacity"
              >
                Foundation
              </a>
              <a
                href="/blog/haro-roi-editorial-vs-bought-links"
                className="bg-green-100 text-green-700 px-4 py-3 rounded-lg text-center font-medium hover:opacity-80 transition-opacity"
              >
                Strategy
              </a>
              <a
                href="/blog"
                className="bg-purple-100 text-purple-700 px-4 py-3 rounded-lg text-center font-medium hover:opacity-80 transition-opacity"
              >
                Publication Focus
              </a>
              <a
                href="/blog"
                className="bg-orange-100 text-orange-700 px-4 py-3 rounded-lg text-center font-medium hover:opacity-80 transition-opacity"
              >
                Platforms
              </a>
              <a
                href="/blog"
                className="bg-teal-100 text-teal-700 px-4 py-3 rounded-lg text-center font-medium hover:opacity-80 transition-opacity"
              >
                Industry
              </a>
              <a
                href="/blog"
                className="bg-red-100 text-red-700 px-4 py-3 rounded-lg text-center font-medium hover:opacity-80 transition-opacity"
              >
                Technical
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
