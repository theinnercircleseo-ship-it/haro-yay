import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft } from "lucide-react"

export default function WriteHaroPitchesPage() {
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
              <Badge className="bg-green-100 text-green-700">Strategy</Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Dec 22, 2024
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  14 min read
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-6 text-balance">
              How to Write HARO Pitches That Journalists Actually Want
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Master the art of crafting compelling HARO responses that cut through the noise and secure editorial
              placements in elite publications.
            </p>
          </div>

          <article className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
              <p className="text-lg font-medium text-green-900 mb-0">
                The difference between HARO success and failure often comes down to a single factor: understanding what
                journalists actually want. After analyzing thousands of successful HARO responses, clear patterns emerge
                that separate winning pitches from the 95% that get ignored.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Journalist's Perspective</h2>
            <p className="text-gray-700 leading-relaxed">
              Journalists receive 50-200 HARO responses per query. They're not looking for the perfect expert – they're
              looking for the expert who makes their job easiest. This fundamental shift in perspective changes
              everything about how you should craft your responses.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
              <h4 className="font-bold text-yellow-800 mb-2">Critical Insight</h4>
              <p className="text-yellow-700 mb-0">
                Journalists don't have time to interview 20 experts. They want 2-3 immediately usable quotes that fit
                perfectly into their existing story structure.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The HARO Response Framework</h2>
            <p className="text-gray-700 leading-relaxed">
              Successful HARO responses follow a predictable structure that makes journalists' lives easier. This
              framework has generated over 1,000 editorial placements across elite publications.
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-8 my-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">The 5-Part HARO Response Structure</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700">Subject Line Hook</h4>
                    <p className="text-sm text-gray-600">Lead with your most compelling credential or unique angle</p>
                    <div className="bg-blue-50 p-3 rounded mt-2">
                      <p className="text-xs text-blue-700 mb-0">
                        Example: "SaaS CEO who scaled from $0 to $50M ARR using editorial authority"
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-purple-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-700">Immediate Value</h4>
                    <p className="text-sm text-gray-600">Start with your best quote or insight first</p>
                    <div className="bg-purple-50 p-3 rounded mt-2">
                      <p className="text-xs text-purple-700 mb-0">
                        "The biggest mistake I see companies make is treating editorial coverage like advertising..."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-green-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Credibility Proof</h4>
                    <p className="text-sm text-gray-600">Brief, relevant credentials that establish authority</p>
                    <div className="bg-green-50 p-3 rounded mt-2">
                      <p className="text-xs text-green-700 mb-0">
                        "As featured in Forbes, TechCrunch, and Inc Magazine for scaling strategies..."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-orange-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-700">Supporting Quotes</h4>
                    <p className="text-sm text-gray-600">2-3 additional ready-to-use quotes with context</p>
                    <div className="bg-orange-50 p-3 rounded mt-2">
                      <p className="text-xs text-orange-700 mb-0">
                        Provide specific, actionable insights that directly address the query
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-red-600 font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700">Professional Close</h4>
                    <p className="text-sm text-gray-600">Contact info and availability for follow-up</p>
                    <div className="bg-red-50 p-3 rounded mt-2">
                      <p className="text-xs text-red-700 mb-0">
                        "Available for follow-up questions until [specific time]. High-res headshot attached."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Subject Line Mastery</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
              <p className="text-blue-900 mb-0">
                <strong>Success Factor:</strong> Your subject line determines whether your response gets opened. 80% of
                HARO responses fail at this first hurdle.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Journalists scan subject lines looking for immediate relevance and credibility. Generic subject lines like
              "HARO Response" or "Expert Available" get deleted instantly. Winning subject lines lead with your most
              compelling credential or unique angle.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-bold text-red-800 mb-3">❌ Weak Subject Lines</h4>
                <ul className="text-sm text-red-700 space-y-2">
                  <li>• "HARO Response - Marketing Expert"</li>
                  <li>• "Available for Interview"</li>
                  <li>• "Expert Source Available"</li>
                  <li>• "Re: Your HARO Query"</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-green-800 mb-3">✅ Strong Subject Lines</h4>
                <ul className="text-sm text-green-700 space-y-2">
                  <li>• "Forbes-featured CEO: 3 scaling mistakes that kill startups"</li>
                  <li>• "CMO who grew SaaS from $1M to $100M ARR"</li>
                  <li>• "Ex-Google PM: Why most product launches fail"</li>
                  <li>• "Fintech founder with 2 exits and $500M raised"</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Quote Quality Formula</h2>
            <p className="text-gray-700 leading-relaxed">
              The best HARO responses provide quotes that journalists can use immediately without editing. This requires
              understanding story structure and providing context that makes your insights immediately usable.
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-8 my-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">High-Impact Quote Structure</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">1. Context Setup</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    "When I was scaling my fintech startup from $5M to $50M ARR..."
                  </p>
                  <p className="text-xs text-gray-500">Establishes credibility and relevance</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">2. Specific Insight</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    "...I discovered that 73% of our best customers came from editorial coverage, not paid ads."
                  </p>
                  <p className="text-xs text-gray-500">Provides concrete, quotable insight</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">3. Actionable Takeaway</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    "The key is treating journalists as partners, not targets. Provide value first, promotion second."
                  </p>
                  <p className="text-xs text-gray-500">Gives readers something they can implement</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Timing and Response Speed</h2>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-6">
              <p className="text-purple-900 mb-0">
                <strong>Speed Advantage:</strong> Responding within the first 2 hours increases your chances of being
                selected by 400%.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              HARO queries often have tight deadlines. Journalists typically select sources from the first 10-20
              high-quality responses they receive. This creates a significant advantage for experts who can respond
              quickly with well-crafted pitches.
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-8 my-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Response Timeline Strategy</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 font-bold">0-2h</span>
                  </div>
                  <h4 className="font-semibold text-green-700 mb-2">Prime Time</h4>
                  <p className="text-sm text-green-600">Highest selection rate (15-20%)</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-yellow-600 font-bold">2-6h</span>
                  </div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Good Window</h4>
                  <p className="text-sm text-yellow-600">Moderate selection rate (8-12%)</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-red-600 font-bold">6h+</span>
                  </div>
                  <h4 className="font-semibold text-red-700 mb-2">Late Entry</h4>
                  <p className="text-sm text-red-600">Low selection rate (2-5%)</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Common Pitch Killers</h2>
            <p className="text-gray-700 leading-relaxed">
              Even well-intentioned HARO responses can fail due to common mistakes that immediately signal amateur
              status to journalists. Avoiding these pitfalls dramatically improves your success rate.
            </p>

            <div className="space-y-4 my-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="font-bold text-red-800 mb-2">❌ The Product Pitch</h4>
                <p className="text-red-700 text-sm mb-2">
                  "Our revolutionary SaaS platform helps companies increase productivity by 300%..."
                </p>
                <p className="text-red-600 text-xs">
                  <strong>Why it fails:</strong> Journalists want insights, not sales pitches
                </p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="font-bold text-red-800 mb-2">❌ The Generic Expert</h4>
                <p className="text-red-700 text-sm mb-2">"I'm a marketing expert with 10 years of experience..."</p>
                <p className="text-red-600 text-xs">
                  <strong>Why it fails:</strong> No specific credibility or unique angle
                </p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="font-bold text-red-800 mb-2">❌ The Vague Response</h4>
                <p className="text-red-700 text-sm mb-2">
                  "I'd be happy to discuss this topic. Please let me know if you'd like to schedule a call..."
                </p>
                <p className="text-red-600 text-xs">
                  <strong>Why it fails:</strong> Provides no immediate value or usable content
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Advanced Pitch Strategies</h2>
            <p className="text-gray-700 leading-relaxed">
              Once you've mastered the basics, advanced strategies can help you stand out even further and secure
              placements in the most competitive queries from elite publications.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-3">🎯 The Data Hook</h4>
                <p className="text-sm text-blue-700">
                  Lead with proprietary research or unique data points that journalists can't get elsewhere
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-bold text-purple-800 mb-3">🔄 The Contrarian Angle</h4>
                <p className="text-sm text-purple-700">
                  Provide a thoughtful counterpoint to conventional wisdom in your industry
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-green-800 mb-3">📊 The Case Study</h4>
                <p className="text-sm text-green-700">
                  Share specific examples with measurable results that illustrate your points
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-bold text-orange-800 mb-3">🎪 The Story Arc</h4>
                <p className="text-sm text-orange-700">
                  Structure your response as a mini-narrative with conflict, resolution, and lessons learned
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Measuring and Improving Performance</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-6">
              <p className="text-green-900 mb-0">
                <strong>Optimization Key:</strong> Track your response rates and continuously refine your approach based
                on what works for your specific expertise and target publications.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              The most successful HARO practitioners treat it like a skill to be developed. They track metrics, analyze
              successful responses, and continuously refine their approach based on results.
            </p>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-8 my-8">
              <h3 className="text-xl font-bold mb-3">The Compound Effect</h3>
              <p className="mb-0 opacity-90">
                Mastering HARO pitch writing isn't just about individual placements – it's about building a systematic
                approach that generates consistent editorial coverage and establishes you as a go-to expert in your
                field.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-8 mt-12">
              <h3 className="text-xl font-bold text-green-800 mb-4">Ready to Master HARO Pitching?</h3>
              <p className="text-green-700 mb-6">
                Our proven HARO response templates and strategies have generated over 2,000 editorial placements for
                clients across elite publications. Let us help you craft pitches that journalists actually want to use.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Get HARO Pitch Templates
              </a>
            </div>
          </article>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="/blog/pitching-elite-publications-beyond-haro"
                className="group block p-6 border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-purple-600 group-hover:text-purple-700 mb-2">
                  Pitching Elite Publications: Beyond Basic HARO Responses
                </h4>
                <p className="text-sm text-muted-foreground">
                  Advanced tactics for securing placements in tier-1 publications
                </p>
              </a>
              <a
                href="/blog/respond-haro-queries-media-pro"
                className="group block p-6 border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-purple-600 group-hover:text-purple-700 mb-2">
                  How to Respond to HARO Queries Like a Media Pro
                </h4>
                <p className="text-sm text-muted-foreground">
                  Professional standards and best practices for HARO success
                </p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
