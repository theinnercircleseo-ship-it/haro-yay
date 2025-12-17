import { X, Check } from "lucide-react"

export function ComparisonSection() {
  const traditionalPoints = [
    "Buy links from sites that sell to everyone",
    "$300-500 for links from sites that sell placements",
    "Risk Google penalties from obvious paid links",
    "Links available to any competitor with budget",
    "Generic anchor text from paid placements",
  ]

  const haroPoints = [
    "Earn editorial placements from exclusive outlets",
    "Genuine editorial features from outlets that don't sell links",
    "Algorithm-safe editorial endorsements",
    "Exclusive access based on expertise",
    "Natural, contextual mentions by journalists",
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16 text-balance text-gray-800">
            <span className="text-purple-600">HARO Links</span> vs.{" "}
            <span className="text-black">Traditional Link Building</span>
          </h2>

          <div className="relative">
            <div className="relative">
              {/* Vertical connecting line - hidden on mobile */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 -translate-x-1/2"></div>

              {haroPoints.map((point, index) => (
                <div key={index} className="mb-8 md:mb-4 relative">
                  {/* Mobile Layout - Stacked vertically with cons before pros */}
                  <div className="md:hidden space-y-4">
                    {/* Traditional Point (Con) */}
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                          <X className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-gray-700">
                        {traditionalPoints[index]}
                      </div>
                    </div>

                    {/* HARO Point (Pro) */}
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                          <Check className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-gray-700">
                        {point}
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout - Side by side */}
                  <div className="hidden md:grid grid-cols-2 gap-8">
                    {/* HARO Point (Left) */}
                    <div className="flex items-center gap-4">
                      <div className="flex-1 bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-gray-700">
                        {point}
                      </div>
                      {/* Checkmark Icon */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                          <Check className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Traditional Point (Right) */}
                    <div className="flex items-center gap-4">
                      {/* X Icon */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                          <X className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-gray-700">
                        {traditionalPoints[index]}
                      </div>
                    </div>

                    {/* Horizontal connecting line */}
                    <div className="absolute left-1/2 top-1/2 w-8 h-px bg-gray-300 -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
