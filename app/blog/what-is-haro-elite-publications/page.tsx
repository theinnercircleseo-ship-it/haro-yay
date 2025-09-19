import { Header } from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft } from "lucide-react"

export default function WhatIsHaroPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

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
                  Dec 15, 2024
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />8 min read
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-6 text-balance">What is HARO and Why Elite Publications Use It</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Understanding the Help a Reporter Out platform and how top-tier publications leverage it for expert
              sourcing.
            </p>
          </div>

          <article className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <p className="text-lg font-medium text-blue-900 mb-0">
                Help a Reporter Out (HARO) has become the gold standard for connecting journalists with expert sources.
                But what exactly is HARO, and why do elite publications like Forbes, TechCrunch, and Inc Magazine rely
                on it for their editorial content?
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The HARO Platform Explained</h2>

            <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">📧 How HARO Works</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">1️⃣</span>
                  </div>
                  <h4 className="font-semibold mb-2">Journalists Submit Queries</h4>
                  <p className="text-sm text-gray-600">Reporters post requests for expert sources and quotes</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">2️⃣</span>
                  </div>
                  <h4 className="font-semibold mb-2">HARO Distributes Daily</h4>
                  <p className="text-sm text-gray-600">Three emails sent daily with categorized queries</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">3️⃣</span>
                  </div>
                  <h4 className="font-semibold mb-2">Experts Respond</h4>
                  <p className="text-sm text-gray-600">Subject matter experts provide valuable insights</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              HARO is a free service that connects journalists seeking expert sources with professionals who have
              relevant expertise. Three times daily, HARO sends out emails containing queries from reporters looking for
              quotes, data, and insights for their articles.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Unlike traditional PR outreach, HARO creates a direct line between media professionals and subject matter
              experts. This relationship benefits both parties: journalists get credible sources quickly, while experts
              gain valuable editorial coverage.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why Elite Publications Choose HARO</h2>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-6">
              <p className="text-purple-900 mb-0">
                <strong>Key Advantage:</strong> Top-tier publications use HARO because it provides access to verified
                experts across every industry.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              When a Forbes editor needs a fintech expert for a breaking news story, HARO delivers qualified sources
              within hours, not days. The platform's vetting process ensures that sources are legitimate professionals,
              not just anyone seeking publicity.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-3">🏆 For Publications</h4>
                <ul className="text-sm text-blue-700 space-y-2">
                  <li>• Quick access to verified experts</li>
                  <li>• Quality control and vetting</li>
                  <li>• Diverse industry coverage</li>
                  <li>• Maintains editorial standards</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-green-800 mb-3">💼 For Experts</h4>
                <ul className="text-sm text-green-700 space-y-2">
                  <li>• Direct journalist access</li>
                  <li>• Editorial coverage opportunities</li>
                  <li>• Authority building platform</li>
                  <li>• No upfront costs</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Editorial Authority Advantage</h2>
            <p className="text-gray-700 leading-relaxed">
              What makes HARO particularly valuable is that it creates genuine editorial relationships. When you respond
              to a HARO query, you're not buying a link or guest posting – you're earning editorial coverage through
              expertise and value.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
              <h4 className="font-bold text-yellow-800 mb-2">⚡ Critical Distinction</h4>
              <p className="text-yellow-700 mb-0">
                This distinction is critical for long-term SEO success. Editorial links from HARO carry significantly
                more authority than purchased placements because they represent genuine editorial endorsement.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">HARO vs Traditional Link Building</h2>

            <div className="bg-white border border-gray-200 rounded-xl p-8 my-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Method Comparison</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-green-700 mb-4">✅ HARO Editorial Links</h4>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li>• Earned through expertise</li>
                    <li>• Journalist specifically sought you</li>
                    <li>• Genuine editorial endorsement</li>
                    <li>• Long-term authority building</li>
                    <li>• Higher search engine trust</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-700 mb-4">❌ Traditional Link Building</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Guest post outreach</li>
                    <li>• Paid placements</li>
                    <li>• Limited editorial credibility</li>
                    <li>• Transactional relationships</li>
                    <li>• Lower authority signals</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              When you're featured in a publication through HARO, you're there because a journalist specifically sought
              your expertise. This editorial merit creates lasting value that{" "}
              <a
                href="/blog/haro-roi-editorial-vs-bought-links"
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                consistently outperforms bought links
              </a>
              in terms of referral traffic, brand authority, and search engine rankings.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Getting Started with HARO</h2>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
              <p className="text-blue-900 mb-0">
                <strong>Success Formula:</strong> Understanding what journalists actually want is key to HARO success.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              It's not about pitching your product – it's about providing valuable insights that enhance their stories.
              The most successful HARO responses are specific, data-driven, and immediately usable.
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-8 my-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">🎯 What Journalists Want</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">✅ Effective Responses</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Specific, actionable insights</li>
                    <li>• Data-backed statements</li>
                    <li>• Immediately usable quotes</li>
                    <li>• Relevant expertise</li>
                    <li>• Quick turnaround</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">❌ Avoid These</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Product pitches</li>
                    <li>• Generic responses</li>
                    <li>• Self-promotional content</li>
                    <li>• Irrelevant expertise</li>
                    <li>• Late submissions</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Future of Editorial Authority</h2>
            <p className="text-gray-700 leading-relaxed">
              As search engines become more sophisticated in evaluating content quality and authority, editorial
              placements through platforms like HARO become increasingly valuable. They represent the kind of authentic,
              merit-based coverage that builds lasting brand authority.
            </p>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-8 my-8">
              <h3 className="text-xl font-bold mb-3">🚀 The Strategic Advantage</h3>
              <p className="mb-0 opacity-90">
                For businesses serious about building editorial authority, HARO isn't just a link building tool – it's a
                pathway to becoming a recognized expert in your industry.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-8 mt-12">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Ready to Build Editorial Authority?</h3>
              <p className="text-purple-700 mb-6">
                Our insider media network can help you secure authentic editorial placements in elite publications
                through strategic HARO campaigns and direct journalist relationships.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                Start Your Campaign Today
              </a>
            </div>
          </article>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="/blog/haro-roi-editorial-vs-bought-links"
                className="group block p-6 border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-purple-600 group-hover:text-purple-700 mb-2">
                  Is HARO Worth It? ROI of Editorial vs Bought Links
                </h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive analysis of HARO's value proposition and proven ROI data
                </p>
              </a>
              <a
                href="/blog"
                className="group block p-6 border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-purple-600 group-hover:text-purple-700 mb-2">
                  More HARO Strategy Articles
                </h4>
                <p className="text-sm text-muted-foreground">
                  Discover more insights on editorial authority building and media strategy
                </p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
