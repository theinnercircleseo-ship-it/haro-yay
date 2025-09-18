import { Card, CardContent } from "@/components/ui/card"
import { Search, Target, FileText, Users, Award } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: Search,
      title: "Elite Query Intelligence",
      description:
        "Our insider network monitors journalist requests from publications that don't accept paid placements",
    },
    {
      icon: Target,
      title: "Expert Positioning Strategy",
      description: "We position you as the go-to industry authority that journalists actively seek out",
    },
    {
      icon: FileText,
      title: "Journalist-Grade Responses",
      description: "Our editorial team crafts insights that meet strict journalistic standards",
    },
    {
      icon: Users,
      title: "Relationship Cultivation",
      description: "We build long-term relationships with editors who come to us first for expert sources",
    },
    {
      icon: Award,
      title: "Exclusive Access Delivery",
      description: "You get featured in publications your competitors literally cannot access",
    },
  ]

  return (
    <section id="process" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-6 text-balance">
            How We Secure <span className="text-secondary">Impossible-to-Buy</span> Editorial Placements
          </h2>

          <p className="text-xl text-muted-foreground text-center mb-16 text-pretty max-w-3xl mx-auto">
            Our proven 5-step process transforms you from another vendor into the trusted expert source that elite
            journalists turn to first.
          </p>

          <div className="grid lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="relative group hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                    <step.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-balance">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
