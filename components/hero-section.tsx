import { Button } from "@/components/ui/button"
import { CheckCircle2, TrendingUp, ShieldCheck, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const StarRating = () => (
  <>
    {[1, 2, 3, 4, 5].map((star) => (
      <span key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400">
        ★
      </span>
    ))}
  </>
)

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/hero-gradient-bg.jpg" alt="" fill className="object-cover" priority quality={85} sizes="100vw" />
      </div>

      <div className="absolute inset-0 bg-black/10 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Elite Editorial Placement Service</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
            <span className="text-white">HARO Link Building</span>
            <br />
            <span className="text-black">From Elite Publications</span>
            <br />
            <span className="text-black">That </span>
            <span className="text-white">Don't Sell Links</span>
          </h1>

          <p className="text-lg lg:text-xl text-white/90 mb-10 text-pretty max-w-3xl mx-auto leading-relaxed">
            While others pay $500+ for weak links from sites that sell to everyone, we secure editorial placements from
            Forbes, Inc, Entrepreneur, and top-tier publications that only feature genuine experts.
          </p>

          <div className="max-w-md mx-auto mb-10 space-y-3 text-left">
            <div className="flex items-center space-x-4 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
              <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0" />
              <span className="text-white font-medium">Never Sell Links</span>
            </div>
            <div className="flex items-center space-x-4 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
              <TrendingUp className="w-6 h-6 text-white flex-shrink-0" />
              <span className="text-white font-medium">$2,500 Link Value</span>
            </div>
            <div className="flex items-center space-x-4 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
              <ShieldCheck className="w-6 h-6 text-white flex-shrink-0" />
              <span className="text-white font-medium">Editorial Validation</span>
            </div>
            <div className="flex items-center space-x-4 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
              <Sparkles className="w-6 h-6 text-white flex-shrink-0" />
              <span className="text-white font-medium">Impossible to Replicate</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-purple-600 text-white hover:bg-purple-700 text-lg px-8 py-6 font-semibold w-full sm:w-auto"
              >
                Secure Your Elite Links
              </Button>
            </Link>
            <Link href="/example-links">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-white text-gray-900 border-2 border-white hover:bg-purple-600 hover:text-white hover:border-purple-600 font-semibold w-full sm:w-auto"
              >
                See Our Publication Portfolio
              </Button>
            </Link>
          </div>

          <p className="text-sm text-red-200 font-medium bg-red-900/30 backdrop-blur-sm inline-block px-4 py-2 rounded">
            Limited to 50 clients maximum. Consultation required.
          </p>
        </div>
      </div>
    </section>
  )
}
