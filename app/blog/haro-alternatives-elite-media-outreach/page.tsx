import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft } from "lucide-react"

export default function HaroAlternativesPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <a href="/blog" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </a>

            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-blue-100 text-blue-700">Foundation</Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Dec 18, 2024
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  10 min read
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-6 text-balance">HARO Alternatives for Elite Media Outreach</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Comprehensive guide to premium media outreach platforms that complement or compete with HARO for editorial
              authority building.
            </p>
          </div>

          <article className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
              <p className="text-lg font-medium text-green-900 mb-0">
                While HARO dominates the media outreach landscape, savvy PR professionals know that diversifying your
                editorial strategy across multiple platforms maximizes your chances of securing premium placements in
                elite publications.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Multi-Platform Advantage</h2>
            <p className="text-gray-700 leading-relaxed">
              Relying solely on HARO limits your editorial opportunities. Elite publications often use multiple sourcing
              platforms, and journalists have different preferences for where they post their queries. A comprehensive
              media strategy leverages several platforms to maximize coverage opportunities.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
              <h4 className="font-bold text-yellow-800 mb-2">Strategic Insight</h4>
              <p className="text-yellow-700 mb-0">
                The most successful editorial campaigns use 3-4 platforms simultaneously, increasing placement
                opportunities by 300-400% compared to single-platform strategies.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Premium HARO Alternatives</h2>

            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-bold">P</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">ProfNet</h3>
                    <p className="text-sm text-gray-600">PR Newswire's premium journalist network</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Advantages</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Higher-tier journalist network</li>
                      <li>• More targeted industry queries</li>
                      <li>• Better filtering capabilities</li>
                      <li>• Premium publication focus</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Considerations</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Paid subscription required</li>
                      <li>• Fewer daily queries than HARO</li>
                      <li>• More competitive responses</li>
                      <li>• Higher expertise threshold</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">Q</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Qwoted</h3>
                    <p className="text-sm text-gray-600">Real-time journalist query platform</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Advantages</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Real-time query notifications</li>
                      <li>• Direct journalist messaging</li>
                      <li>• Detailed journalist profiles</li>
                      <li>• Mobile-optimized platform</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Considerations</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Smaller query volume</li>
                      <li>• Premium features cost extra</li>
                      <li>• Less established network</li>
                      <li>• Variable query quality</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold">S</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">SourceBottle</h3>
                    <p className="text-sm text-gray-600">Australian-based global media platform</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Advantages</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Strong international coverage</li>
                      <li>• Less competitive than HARO</li>
                      <li>• Good for niche industries</li>
                      <li>• Free basic membership</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Considerations</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Smaller US publication network</li>
                      <li>• Lower query frequency</li>
                      <li>• Less premium publication focus</li>
                      <li>• Time zone challenges</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Direct Journalist Outreach Platforms</h2>
            <p className="text-gray-700 leading-relaxed">
              Beyond query-response platforms, direct journalist outreach tools allow you to proactively pitch story
              ideas and build relationships with media professionals.
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-8 my-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Top Direct Outreach Tools</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-bold text-purple-700">Prowly</h4>
                    <p className="text-sm text-gray-600">
                      Comprehensive PR platform with journalist database and pitch tracking
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-blue-700">Muck Rack</h4>
                    <p className="text-sm text-gray-600">
                      Journalist database with social media integration and pitch management
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-bold text-green-700">Cision</h4>
                    <p className="text-sm text-gray-600">
                      Enterprise-level media database with comprehensive analytics
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-bold text-orange-700">JustReachOut</h4>
                    <p className="text-sm text-gray-600">
                      Affordable journalist database with pitch templates and tracking
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Industry-Specific Platforms</h2>
            <p className="text-gray-700 leading-relaxed">
              Specialized platforms often provide better results for specific industries, offering more targeted
              opportunities and less competition.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-3">Tech & Startups</h4>
                <ul className="text-sm text-blue-700 space-y-2">
                  <li>• TechCrunch Expert Network</li>
                  <li>• AngelList Press</li>
                  <li>• Product Hunt Maker Network</li>
                  <li>• Hacker News connections</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-green-800 mb-3">Finance & Business</h4>
                <ul className="text-sm text-green-700 space-y-2">
                  <li>• Wall Street Journal Expert Network</li>
                  <li>• Forbes Councils</li>
                  <li>• Harvard Business Review contributors</li>
                  <li>• Financial Planning Magazine sources</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Building a Multi-Platform Strategy</h2>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-6">
              <p className="text-purple-900 mb-0">
                <strong>Success Formula:</strong> The most effective editorial strategies combine reactive (query
                response) and proactive (direct outreach) approaches across multiple platforms.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 my-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recommended Platform Mix</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Primary Platform (40% effort)</h4>
                    <p className="text-sm text-gray-600">HARO for volume and consistency</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Premium Platform (30% effort)</h4>
                    <p className="text-sm text-gray-600">ProfNet or Qwoted for high-value opportunities</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Direct Outreach (20% effort)</h4>
                    <p className="text-sm text-gray-600">Prowly or Muck Rack for proactive pitching</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Niche Platform (10% effort)</h4>
                    <p className="text-sm text-gray-600">Industry-specific platforms for specialized coverage</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Platform Selection Criteria</h2>
            <p className="text-gray-700 leading-relaxed">
              Choose platforms based on your industry, target publications, and available resources. Consider these
              factors when building your platform portfolio:
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Query Quality</h4>
                <p className="text-sm text-gray-600">Relevance to your expertise and target publications</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Competition Level</h4>
                <p className="text-sm text-gray-600">Number of experts competing for each opportunity</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Cost vs Value</h4>
                <p className="text-sm text-gray-600">Platform fees relative to placement quality and frequency</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-8 my-8">
              <h3 className="text-xl font-bold mb-3">The Diversification Advantage</h3>
              <p className="mb-0 opacity-90">
                While HARO remains the foundation of most editorial strategies, the companies achieving the highest
                media coverage rates are those that strategically diversify across multiple platforms, maximizing their
                opportunities for premium editorial placements.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mt-12">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Ready to Expand Your Media Reach?</h3>
              <p className="text-blue-700 mb-6">
                Our multi-platform editorial strategy has helped clients secure 5x more premium placements by leveraging
                the right mix of media outreach platforms for their industry and goals.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Get Your Platform Strategy
              </a>
            </div>
          </article>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="/blog/what-is-haro-elite-publications"
                className="group block p-6 border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-purple-600 group-hover:text-purple-700 mb-2">
                  What is HARO and Why Elite Publications Use It
                </h4>
                <p className="text-sm text-muted-foreground">
                  Understanding the foundation platform for editorial authority building
                </p>
              </a>
              <a
                href="/blog/featured-vs-haro-better-publications"
                className="group block p-6 border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-purple-600 group-hover:text-purple-700 mb-2">
                  Featured.com vs HARO: Which Gets Better Publications
                </h4>
                <p className="text-sm text-muted-foreground">
                  Detailed comparison of two leading media outreach platforms
                </p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
