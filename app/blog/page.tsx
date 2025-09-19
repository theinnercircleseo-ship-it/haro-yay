import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, Search, Filter } from "lucide-react"

export default function BlogPage() {
  const allArticles = [
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
      excerpt:
        "Comprehensive analysis of HARO's value proposition compared to traditional link building methods with real performance data.",
      category: "Strategy",
      readTime: "12 min read",
      date: "Dec 12, 2024",
      slug: "haro-roi-editorial-vs-bought-links",
    },
    {
      title: "HARO Alternatives for Elite Media Outreach",
      excerpt:
        "Comprehensive guide to premium media outreach platforms that complement or compete with HARO for editorial authority building.",
      category: "Foundation",
      readTime: "10 min read",
      date: "Dec 18, 2024",
      slug: "haro-alternatives-elite-media-outreach",
    },
    {
      title: "Featured.com vs HARO: Which Gets Better Publications",
      excerpt:
        "Detailed comparison of Featured.com and HARO for securing editorial placements in elite publications with cost analysis.",
      category: "Foundation",
      readTime: "11 min read",
      date: "Dec 20, 2024",
      slug: "featured-vs-haro-better-publications",
    },
    {
      title: "How to Write HARO Pitches That Journalists Actually Want",
      excerpt:
        "Master the art of crafting compelling HARO responses that cut through the noise and secure editorial placements.",
      category: "Strategy",
      readTime: "14 min read",
      date: "Dec 22, 2024",
      slug: "write-haro-pitches-journalists-want",
    },
    {
      title: "Pitching Elite Publications: Beyond Basic HARO Responses",
      excerpt:
        "Advanced tactics for securing placements in tier-1 publications through strategic relationship building and expert positioning.",
      category: "Strategy",
      readTime: "13 min read",
      date: "Dec 25, 2024",
      slug: "pitching-elite-publications-beyond-haro",
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Foundation: "bg-blue-100 text-blue-700 border-blue-200",
      Strategy: "bg-green-100 text-green-700 border-green-200",
      "Publication Focus": "bg-purple-100 text-purple-700 border-purple-200",
      Platforms: "bg-orange-100 text-orange-700 border-orange-200",
      Industry: "bg-teal-100 text-teal-700 border-teal-200",
      Technical: "bg-red-100 text-red-700 border-red-200",
    }
    return colors[category] || "bg-gray-100 text-gray-700 border-gray-200"
  }

  const getCategoryGradient = (category: string) => {
    const gradients: { [key: string]: string } = {
      Foundation: "from-blue-500 to-blue-600",
      Strategy: "from-green-500 to-green-600",
      "Publication Focus": "from-purple-500 to-purple-600",
      Platforms: "from-orange-500 to-orange-600",
      Industry: "from-teal-500 to-teal-600",
      Technical: "from-red-500 to-red-600",
    }
    return gradients[category] || "from-gray-500 to-gray-600"
  }

  const featuredArticle = allArticles.find((article) => article.featured)
  const recentArticles = allArticles.filter((article) => !article.featured)

  const categories = [
    { name: "Foundation", count: allArticles.filter((a) => a.category === "Foundation").length, color: "blue" },
    { name: "Strategy", count: allArticles.filter((a) => a.category === "Strategy").length, color: "green" },
    { name: "Publication Focus", count: 0, color: "purple" },
    { name: "Platforms", count: 0, color: "orange" },
    { name: "Industry", count: 0, color: "teal" },
    { name: "Technical", count: 0, color: "red" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
              Editorial Authority Insights
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              HARO & Media Strategy Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
              Expert insights, proven strategies, and insider secrets for building editorial authority through HARO and
              elite media outreach.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 max-w-2xl mx-auto">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <button className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
          </div>

          {featuredArticle && (
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-900">Featured Article</h2>
              </div>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                <div className="md:flex">
                  <div className="md:w-1/3 relative overflow-hidden">
                    <img
                      src={`/abstract-geometric-shapes.png?key=er9ln&height=400&width=600&query=${encodeURIComponent(
                        `featured ${featuredArticle.category.toLowerCase()} editorial authority HARO strategy`,
                      )}`}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-blue-600/90 flex items-center justify-center">
                      <div className="text-center text-white relative z-10">
                        <div className="text-4xl font-bold mb-2">FEATURED</div>
                        <div className="text-sm opacity-90">Must-read article</div>
                        <div className="w-16 h-1 bg-white/30 rounded-full mx-auto mt-4"></div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className={`${getCategoryColor(featuredArticle.category)} border`}>
                        {featuredArticle.category}
                      </Badge>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {featuredArticle.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredArticle.readTime}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-gray-900 text-balance">{featuredArticle.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{featuredArticle.excerpt}</p>
                    <a
                      href={`/blog/${featuredArticle.slug}`}
                      className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          )}

          <div className="mb-20">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-gray-900">All Articles</h2>
              <div className="ml-auto text-sm text-gray-500">{allArticles.length} articles</div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentArticles.map((article, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1"
                >
                  <div className={`h-2 bg-gradient-to-r ${getCategoryGradient(article.category)}`}></div>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={`/abstract-geometric-shapes.png?key=hczwt&key=ganh7&height=200&width=400&query=${encodeURIComponent(
                        `${article.category.toLowerCase()} editorial authority ${article.title.split(" ").slice(0, 3).join(" ")}`,
                      )}`}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={`${getCategoryColor(article.category)} border text-xs`}>
                        {article.category}
                      </Badge>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-3 group-hover:text-purple-600 transition-colors text-balance leading-tight">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <a
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium group-hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Explore by Category</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Dive deeper into specific areas of editorial authority and media strategy
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-${category.color}-100 rounded-lg flex items-center justify-center`}>
                      <div className={`w-6 h-6 bg-${category.color}-500 rounded`}></div>
                    </div>
                    <div className={`text-2xl font-bold text-${category.color}-600`}>{category.count}</div>
                  </div>
                  <h3
                    className={`text-lg font-bold text-gray-900 mb-2 group-hover:text-${category.color}-600 transition-colors`}
                  >
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {category.count > 0 ? `${category.count} articles available` : "Coming soon"}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                    <span>Explore category</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get the latest HARO strategies and editorial authority insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white/50 focus:outline-none"
              />
              <button className="px-8 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors font-medium whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
