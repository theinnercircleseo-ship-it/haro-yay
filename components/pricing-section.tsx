import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Crown, Zap } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Executive Authority",
      price: "$3,997",
      period: "/month",
      icon: Star,
      badge: "Most Popular",
      badgeVariant: "secondary" as const,
      features: [
        "2-3 elite publication placements (DR 75+)",
        "Forbes, Inc, Entrepreneur tier access",
        "Expert spokesperson development",
        "Journalist relationship building",
        "Monthly authority audit",
      ],
    },
    {
      name: "Industry Leader",
      price: "$6,997",
      period: "/month",
      icon: Crown,
      badge: "Best Value",
      badgeVariant: "default" as const,
      features: [
        "4-5 top-tier editorial placements (DR 80+)",
        "Priority access to breaking news opportunities",
        "Multi-industry thought leadership positioning",
        "Direct journalist network introductions",
        "Quarterly strategy optimization",
      ],
    },
    {
      name: "Market Domination",
      price: "$12,997",
      period: "/month",
      icon: Zap,
      badge: "Premium",
      badgeVariant: "outline" as const,
      features: [
        "6-8 premium editorial features (DR 85+)",
        "Exclusive access to invitation-only publications",
        "Personal brand authority development",
        "PR crisis management protection",
        "Weekly strategic consultations",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-6 text-balance">
            Investment in <span className="text-secondary">Elite Editorial Authority</span>
          </h2>

          <p className="text-xl text-muted-foreground text-center mb-16 text-pretty max-w-3xl mx-auto">
            These are genuine editorial placements, not purchased links. Investment reflects the expertise and
            relationships required to access publications that don't sell placements.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${index === 1 ? "border-2 border-secondary shadow-xl scale-105" : ""}`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant={plan.badgeVariant} className="px-4 py-1">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${index === 1 ? "bg-secondary hover:bg-secondary/90" : ""}`}
                    variant={index === 1 ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground italic">
              *Note: These are genuine editorial placements, not purchased links. Investment reflects the expertise and
              relationships required to access publications that don't sell placements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
