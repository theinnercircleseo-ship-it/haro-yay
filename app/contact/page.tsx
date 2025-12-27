import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Clock, Calendar } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/purple-abstract-curved-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-purple-600/20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4 text-white">Schedule Your Strategy Consultation</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Book a 30-minute call to discuss your editorial authority goals and get a custom strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <Card className="max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                  <Calendar className="w-6 h-6 text-purple-600" />
                  Book Your Free Consultation
                </CardTitle>
                <CardDescription>
                  Select a time that works best for you. We'll discuss your industry, goals, and how we can help you get
                  featured in elite publications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/brunofigueiroacavalcanti/30min"
                  style={{ minWidth: "320px", height: "700px" }}
                ></div>
                <script
                  type="text/javascript"
                  src="https://assets.calendly.com/assets/external/widget.js"
                  async
                ></script>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Or Contact Us Directly</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Prefer to reach out another way? Fill out the form below or use our direct contact information.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Get Your Free Editorial Strategy Consultation</CardTitle>
                  <CardDescription>
                    Tell us about your brand and goals. We'll create a custom editorial authority strategy for your
                    industry.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Smith" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Business Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Input id="industry" placeholder="SaaS, Fintech, B2B, etc." />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="goals">Editorial Goals</Label>
                    <Textarea
                      id="goals"
                      placeholder="What publications do you want to be featured in? What authority do you want to build?"
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700 cursor-pointer">
                    Get Free Strategy Consultation
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We'll respond within 24 hours with a custom editorial strategy for your brand.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-purple-600" />
                    Direct Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">hello@haro-links.com</p>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-600" />
                    Response Times
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium">Strategy Consultations</p>
                    <p className="text-muted-foreground">Within 24 hours</p>
                  </div>
                  <div>
                    <p className="font-medium">Campaign Updates</p>
                    <p className="text-muted-foreground">Weekly reports</p>
                  </div>
                  <div>
                    <p className="font-medium">Editorial Placements</p>
                    <p className="text-muted-foreground">Real-time notifications</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-800">Why Choose Our Editorial Service?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <p className="text-sm text-purple-700">
                      <strong>Insider Access:</strong> Direct relationships with editors at 200+ elite publications
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <p className="text-sm text-purple-700">
                      <strong>Proven Results:</strong> 5,000+ successful editorial placements across industries
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <p className="text-sm text-purple-700">
                      <strong>No Bought Links:</strong> 100% editorial merit, building lasting authority
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long does it take to see results?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Most clients see their first editorial placements within 30-60 days. Authority building is a
                    long-term strategy that compounds over time.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What publications do you work with?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We have relationships with 200+ elite publications including Forbes, TechCrunch, Inc, Entrepreneur,
                    and industry-specific trade publications.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
