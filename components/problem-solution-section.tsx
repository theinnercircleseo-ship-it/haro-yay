import { Card, CardContent } from "@/components/ui/card"

const GreenPuzzleIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 8H24V14C24 15.6569 22.6569 17 21 17C19.3431 17 18 15.6569 18 14V12H14C12.3431 12 11 13.3431 11 15C11 16.6569 12.3431 18 14 18H16V22H12C10.3431 22 9 23.3431 9 25C9 26.6569 10.3431 28 12 28H14V32H8V8Z"
      stroke="#22c55e"
      strokeWidth="2"
      fill="none"
    />
  </svg>
)

const RedPuzzleIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 8H32V32H16V28C16 26.3431 14.6569 25 13 25C11.3431 25 10 26.3431 10 28V30H8V26C8 24.3431 9.3431 23 11 23C12.6569 23 14 21.6569 14 20C14 18.3431 12.6569 17 11 17H8V13H12C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7H10V8H16Z"
      stroke="#ef4444"
      strokeWidth="2"
      fill="none"
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
