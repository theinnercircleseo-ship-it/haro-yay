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

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance leading-tight text-white">
            Haro Link Building
            <br />
            From Elite Publications
            <br />
            That <span className="text-purple-300">Don't Sell Links</span>
          </h1>

          <p className="text-lg lg:text-xl text-white/90 mb-10 text-pretty max-w-3xl mx-auto leading-relaxed">
            While others pay $500+ for weak links from sites that sell to everyone, we secure editorial placements from
            Forbes, Inc, Entrepreneur, and top-tier publications that only feature genuine experts.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-2 bg-white/50 backdrop-blur-sm rounded-lg px-3 py-4 border border-white/30">
              <CheckCircle2 className="w-7 h-7 text-purple-600 flex-shrink-0" />
              <span className="text-white text-sm font-medium leading-tight text-center">
                Never Sell
                <br />
                Links
              </span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 bg-white/50 backdrop-blur-sm rounded-lg px-3 py-4 border border-white/30">
              <TrendingUp className="w-7 h-7 text-purple-600 flex-shrink-0" />
              <span className="text-white text-sm font-medium leading-tight text-center">
                $2,500 Link
                <br />
                Value
              </span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 bg-white/50 backdrop-blur-sm rounded-lg px-3 py-4 border border-white/30">
              <ShieldCheck className="w-7 h-7 text-purple-600 flex-shrink-0" />
              <span className="text-white text-sm font-medium leading-tight text-center">
                Editorial
                <br />
                Validation
              </span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 bg-white/50 backdrop-blur-sm rounded-lg px-3 py-4 border border-white/30">
              <Sparkles className="w-7 h-7 text-purple-600 flex-shrink-0" />
              <span className="text-white text-sm font-medium leading-tight text-center">
                Impossible to
                <br />
                Replicate
              </span>
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
                className="text-lg px-8 py-6 bg-white text-gray-900 border-2 border-white hover:bg-gray-100 font-semibold w-full sm:w-auto"
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
