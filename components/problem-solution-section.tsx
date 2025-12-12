import { Card, CardContent } from "@/components/ui/card"

const GreenPuzzleIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 8 H20 V12 C20 13 21 14 22 14 C23 14 24 13 24 12 V8 H28 V12 C28 13 29 14 30 14 C31 14 32 13 32 12 V8 H36 V20 H32 C31 20 30 21 30 22 C30 23 31 24 32 24 H36 V28 H32 C31 28 30 29 30 30 C30 31 31 32 32 32 H36 V36 H6 V8 Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      className="text-green-600"
    />
  </svg>
)

const RedPuzzleIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 6 H32 V10 C32 11 33 12 34 12 C35 12 36 11 36 10 V6 H40 V34 H36 V30 C36 29 35 28 34 28 C33 28 32 29 32 30 V34 H28 V30 C28 29 27 28 26 28 C25 28 24 29 24 30 V34 H20 V30 C20 29 19 28 18 28 C17 28 16 29 16 30 V34 H8 V6 Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      className="text-red-600"
    />
  </svg>
)

export function ProblemSolutionSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16 text-balance text-gray-900">
            Stop Buying Weak Links. Start Earning <span className="text-purple-600">Elite Editorial Placements</span>.
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="border-destructive/20 bg-destructive/5">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="mr-3">
                    <RedPuzzleIcon />
                  </div>
                  <h3 className="text-2xl font-bold text-destructive">The Problem</h3>
                </div>
                <p className="text-lg mb-6 leading-relaxed text-justify">
                  Most agencies charge $300-500+ for links from sites that sell links to anyone with a credit card.
                  These "PBN-style" links from link farms provide minimal SEO value and carry penalty risks.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-destructive/20">
                    <span>What competitors pay:</span>
                    <span className="font-bold text-destructive">$300-500 per link</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-destructive/20">
                    <span>Actual value of their links:</span>
                    <span className="font-bold text-destructive">$80-150</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>Publications that sell links:</span>
                    <span className="font-bold text-destructive">10,000+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="mr-3">
                    <GreenPuzzleIcon />
                  </div>
                  <h3 className="text-2xl font-bold text-green-700">Our Solution</h3>
                </div>
                <p className="text-lg mb-6 leading-relaxed text-justify text-green-800">
                  We secure genuine editorial placements from prestigious publications that maintain strict editorial
                  standards. These outlets choose sources based on expertise, not payment.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-green-200">
                    <span className="text-green-800">What we deliver:</span>
                    <span className="font-bold text-green-600">Editorial placements</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-green-200">
                    <span className="text-green-800">From outlets where links:</span>
                    <span className="font-bold text-green-600">Aren't for sale</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-green-800">Elite publications we access:</span>
                    <span className="font-bold text-green-600">200+ (invitation-only)</span>
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
