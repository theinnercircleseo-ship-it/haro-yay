import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Star, Sparkles } from "lucide-react"
import Link from "next/link"

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2 bg-purple-100 text-purple-700 border-0">
            <Sparkles className="w-4 h-4 mr-2" />
            Exclusive Access
          </Badge>

          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance text-gray-900">
            Ready to Dominate With Links Your Competitors <span className="text-purple-600">Cannot Buy</span>?
          </h2>

          <p className="text-xl text-gray-700 mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Join the exclusive tier of brands featured in publications that maintain editorial integrity. No link farms.
            No paid placements. Just genuine authority recognition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6 font-semibold w-full sm:w-auto cursor-pointer"
              >
                Claim Your Elite Media Access
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-2 hover:bg-gray-100 font-semibold w-full sm:w-auto cursor-pointer text-gray-900 border-gray-300 bg-transparent"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:space-x-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-green-600" />
              <span>Limited to 50 clients maximum</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-purple-600" />
              <span>Consultation required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
