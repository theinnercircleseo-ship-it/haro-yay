import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote, TrendingUp, Users, Award, Star } from "lucide-react"

export function SocialProofSection() {
  const testimonials = [
    {
      quote: "Featured in Forbes 3x in 6 months - competitors still buying low-value link farm placements",
      company: "SaaS Startup CEO",
      result: "$2M in deals attributed",
    },
    {
      quote: "Inc Magazine made us their go-to fintech expert - became the industry voice",
      company: "Fintech Founder",
      result: "5x media mentions this year",
    },
    {
      quote: "Entrepreneur quoted us 5 times this year - impossible for competitors to replicate",
      company: "Marketing Agency Owner",
      result: "156% organic traffic increase",
    },
  ]

  const stats = [
    {
      icon: Award,
      number: "300+",
      label: "Editorial placements in non-selling publications",
    },
    {
      icon: TrendingUp,
      number: "89%",
      label: "Client retention (they can't get this elsewhere)",
    },
    {
      icon: Users,
      number: "156%",
      label: "Average organic traffic increase in year 1",
    },
    {
      icon: Star,
      number: "$2,500",
      label: "Average link value vs $80 bought links",
    },
  ]

  return (
    <section id="case-studies" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-6 text-balance">
            Brands We've Positioned as <span className="text-secondary">Industry Authorities</span>
          </h2>

          <p className="text-xl text-muted-foreground text-center mb-16 text-pretty max-w-3xl mx-auto">
            Real results from clients who chose elite editorial authority over cheap link building.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-secondary mb-4" />
                  <blockquote className="text-lg mb-4 leading-relaxed">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center justify-between">
                    <cite className="text-sm font-medium not-italic">{testimonial.company}</cite>
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.result}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-3xl font-bold text-secondary mb-2">{stat.number}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
