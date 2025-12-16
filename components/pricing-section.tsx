"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Crown, Zap } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const plans = [
  {
    name: "Executive Authority",
    monthlyPrice: "$3,997",
    yearlyPrice: "$39,970",
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
    monthlyPrice: "$6,997",
    yearlyPrice: "$69,970",
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
    monthlyPrice: "$12,997",
    yearlyPrice: "$129,970",
    icon: Zap,
    badge: "Premium",
    badgeVariant: "premium" as const,
    features: [
      "6-8 premium editorial features (DR 85+)",
      "Exclusive access to invitation-only publications",
      "Personal brand authority development",
      "PR crisis management protection",
      "Weekly strategic consultations",
    ],
  },
]

export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")
  const [flipKey, setFlipKey] = useState(0)

  const handleBillingChange = (period: "monthly" | "yearly") => {
    if (period !== billingPeriod) {
      setBillingPeriod(period)
      setFlipKey((prev) => prev + 1)
    }
  }

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-6 text-balance text-black">
            Investment in <span className="text-purple-600">Elite Editorial Authority</span>
          </h2>

          <p className="text-xl text-black/90 text-center mb-8 text-pretty max-w-3xl mx-auto">
            These are genuine editorial placements, not purchased links. Investment reflects the expertise and
            relationships required to access publications that don't sell placements.
          </p>

          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-lg p-1 shadow-sm border border-gray-200">
              <button
                onClick={() => handleBillingChange("monthly")}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  billingPeriod === "monthly"
                    ? "bg-purple-600 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => handleBillingChange("yearly")}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  billingPeriod === "yearly"
                    ? "bg-purple-600 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <Card
                key={`${plan.name}-${flipKey}`}
                className={`relative flex flex-col ${
                  index === 1 ? "border-2 border-secondary shadow-xl scale-105" : ""
                } animate-[flip_0.6s_ease-in-out]`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge
                      variant={plan.badgeVariant}
                      className={
                        plan.badgeVariant === "premium" ? "px-4 py-1 bg-purple-600 text-white border-0" : "px-4 py-1"
                      }
                    >
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
                    <span className="text-4xl font-bold">
                      {billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      /{billingPeriod === "monthly" ? "month" : "year"}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-3 mb-6 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button
                      className={`w-full cursor-pointer ${index === 1 ? "bg-secondary hover:bg-secondary/90" : ""}`}
                      variant={index === 1 ? "default" : "outline"}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-black/70 italic">
              *Note: These are genuine editorial placements, not purchased links. Investment reflects the expertise and
              relationships required to access publications that don't sell placements.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes flip {
          0% {
            transform: perspective(1000px) rotateY(0deg);
          }
          50% {
            transform: perspective(1000px) rotateY(90deg);
            opacity: 0.5;
          }
          100% {
            transform: perspective(1000px) rotateY(0deg);
          }
        }
      `}</style>
    </section>
  )
}
