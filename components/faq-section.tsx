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
  {
    question: "What is Digital PR?",
    answer:
      "Digital PR encompasses strategies for earning media coverage and backlinks through journalist outreach and expert commentary. HARO link building is a specific digital PR tactic focused on responding to journalist source requests to earn editorial placements.",
  },
  {
    question: "Can I pre-approve pitches before submission?",
    answer:
      "Yes, though tight HARO deadlines may limit this for time-sensitive queries. We can establish pre-approved topics, messaging guidelines, and approval workflows during onboarding to balance oversight with competitive response timing.",
  },
  {
    question: "How involved do I need to be?",
    answer:
      "Minimal involvement after onboarding. We handle everything—query monitoring, pitch writing, submission, and tracking. You receive reports on placements. Some clients prefer more involvement through pitch approvals, which we accommodate.",
  },
  {
    question: "Do you cover every business niche?",
    answer:
      "Most legitimate niches work well with HARO, particularly business, marketing, technology, finance, health, and professional services. We don't serve adult content, gambling, pharmaceutical promotions, or regulated industries with platform restrictions.",
  },
  {
    question: "Can I specify dream publications?",
    answer:
      "You can share target publications, and we'll prioritize relevant opportunities when they appear. However, HARO operates on journalist demand—we can only respond to queries journalists actually post. Focus on quality metrics rather than specific brand names.",
  },
  {
    question: "How close to my niche will links be?",
    answer:
      "We prioritize topically relevant placements, but may also secure valuable links from adjacent categories where your expertise applies. High-authority links from tangentially related topics still provide significant SEO value through domain authority.",
  },
  {
    question: "Can you link to money pages?",
    answer:
      "Most HARO links point to homepages because journalists link to source credentials rather than product pages. Homepage authority distributes across your site through internal linking. Discuss specific landing page goals to understand realistic expectations.",
  },
  {
    question: "Can I choose anchor text?",
    answer:
      "No—journalists decide anchor text, typically using names or company names. This natural variation is actually beneficial: it's exactly what Google expects from editorially earned links and avoids patterns that could trigger algorithmic scrutiny.",
  },
  {
    question: "How long do links last?",
    answer:
      "Most HARO links are permanent—publications typically don't remove archived content. Publishers can update articles anytime, but link removal is uncommon. This risk exists with any editorial link and isn't specific to HARO.",
  },
  {
    question: "Can I white-label this service?",
    answer:
      "Yes. We offer white-label partnerships for agencies including custom reporting templates, client communication guidelines, and confidentiality agreements. Contact us to discuss agency arrangements.",
  },
  {
    question: "How many links per month can I expect?",
    answer:
      "Realistically, 2–5 qualifying links monthly once momentum builds. This varies by niche—some categories have abundant queries, others fewer. HARO is a quality play delivering high-authority placements, not a volume strategy.",
  },
  {
    question: "What's the typical turnaround time?",
    answer:
      "Initial results typically appear within 4–8 weeks. Publication timing varies by journalist—some pieces go live in days, others take months depending on editorial calendars. We continue pitching until all contracted links are delivered.",
  },
  {
    question: "Is HARO link building Google compliant?",
    answer:
      "Yes. HARO links are editorially earned, not purchased or exchanged. Journalists independently choose to cite your expertise—this is exactly the type of natural link acquisition that Google's guidelines support and reward.",
  },
  {
    question: "Do you provide refunds?",
    answer:
      "We guarantee delivery of contracted qualifying links rather than offering refunds. We continue pitching until all links are delivered. Review our terms for specific policies on partial package completion.",
  },
  {
    question: "What if journalists don't disclose their publication?",
    answer:
      "Approximately one-third of HARO queries come from anonymous journalists. Some represent major publications avoiding inbox flooding; others are newer outlets. You only pay for links meeting our quality criteria regardless of pre-submission uncertainty.",
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
