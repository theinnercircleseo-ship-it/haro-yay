import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Why are your prices higher than other agencies?",
    answer:
      "We secure genuine editorial placements from publications that don't sell links. While others charge $300-500 for bought links from sites that sell to anyone, we deliver editorial features from outlets that maintain strict editorial standards and never accept payment for placement.",
  },
  {
    question: "Can't I just buy links from these publications directly?",
    answer:
      "No. Forbes, Inc, Entrepreneur and other elite outlets don't sell editorial placements. They only feature sources their journalists genuinely find valuable.",
  },
  {
    question: "How is this different from regular HARO services?",
    answer:
      "Most HARO services cast a wide net hoping for any placement. We have insider relationships with elite publication editors and position you specifically for their high-value opportunities.",
  },
  {
    question: "What if Google penalizes editorial links?",
    answer:
      "Google rewards genuine editorial mentions from authoritative sources. These aren't paid links - they're earned media placements that strengthen your E-E-A-T signals.",
  },
  {
    question: "Why can't my competitors get these same links?",
    answer:
      "Elite publications maintain editorial integrity. They won't feature multiple companies from the same industry without genuine differentiation. Our positioning ensures you're their preferred expert source.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16 text-balance">
            Elite Editorial Placement <span className="text-purple-600">FAQ</span>
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={`faq-${index}`}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 bg-white"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
