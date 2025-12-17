import { Card, CardContent } from "@/components/ui/card"

const ProblemIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="18" stroke="#ef4444" strokeWidth="2" fill="none" />
    <path d="M13 13L27 27M27 13L13 27" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
)

const SolutionIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="18" stroke="#22c55e" strokeWidth="2" fill="none" />
    <path d="M12 20L17 25L28 14" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export function ProblemSolutionSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center mb-16 text-balance leading-tight md:leading-normal text-gray-900 px-2">
            Stop Buying Weak Links. Start Earning <span className="text-purple-600">Elite Editorial Placements</span>.
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="border-destructive/20 bg-destructive/5">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-4">
                  <div className="mr-3">
                    <ProblemIcon />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-destructive">The Problem</h3>
                </div>
                <p className="text-base md:text-lg mb-6 leading-relaxed text-justify">
                  Most agencies charge $300-500+ for links from sites that sell links to anyone with a credit card.
                  These "PBN-style" links from link farms provide minimal SEO value and carry penalty risks.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-destructive/20 text-sm md:text-base">
                    <span>What competitors pay:</span>
                    <span className="font-bold text-destructive whitespace-nowrap ml-2">$300-500 per link</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-destructive/20 text-sm md:text-base">
                    <span>Actual value of their links:</span>
                    <span className="font-bold text-destructive whitespace-nowrap ml-2">$80-150</span>
                  </div>
                  <div className="flex justify-between items-center py-2 text-sm md:text-base">
                    <span>Publications that sell links:</span>
                    <span className="font-bold text-destructive whitespace-nowrap ml-2">10,000+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-4">
                  <div className="mr-3">
                    <SolutionIcon />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-green-700">Our Solution</h3>
                </div>
                <p className="text-base md:text-lg mb-6 leading-relaxed text-justify">
                  We secure genuine editorial placements from prestigious publications that maintain strict editorial
                  standards. These outlets choose sources based on expertise, not payment.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-green-200 text-sm md:text-base">
                    <span>What we deliver:</span>
                    <span className="font-bold text-green-600 whitespace-nowrap ml-2">Editorial placements</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-green-200 text-sm md:text-base">
                    <span>From outlets where links:</span>
                    <span className="font-bold text-green-600 whitespace-nowrap ml-2">Aren't for sale</span>
                  </div>
                  <div className="flex justify-between items-center py-2 text-sm md:text-base">
                    <span>Elite publications we access:</span>
                    <span className="font-bold text-green-600 whitespace-nowrap ml-2">200+ (invitation-only)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
