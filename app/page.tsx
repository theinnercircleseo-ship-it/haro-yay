import { HeroSection } from "@/components/hero-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { MediaShowcaseSection } from "@/components/media-showcase-section"
import { PublicationsSection } from "@/components/publications-section"
import { ComparisonSection } from "@/components/comparison-section"
import { ProcessSection } from "@/components/process-section"
import { PricingSection } from "@/components/pricing-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  console.log("[v0] HomePage component is rendering")

  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <MediaShowcaseSection />
        <PublicationsSection />
        <ComparisonSection />
        <ProcessSection />
        <PricingSection />
        <SocialProofSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
