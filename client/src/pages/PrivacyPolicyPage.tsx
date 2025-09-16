import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function PrivacyPolicyPage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/20 backdrop-blur-sm border-b border-border/30 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-playfair font-light text-foreground tracking-wide">
              The Legacy <span className="text-primary italic">Phase 1</span>
            </h1>
            <Button
              variant="ghost"
              onClick={() => setLocation("/")}
              className="font-light tracking-wide"
              data-testid="button-back-home"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-playfair font-light tracking-wide">
              Privacy Policy
            </CardTitle>
            <p className="text-muted-foreground font-light">Last updated: September 2024</p>
          </CardHeader>
          <CardContent className="space-y-6 text-sm leading-relaxed">
            <section>
              <h2 className="text-xl font-playfair font-light text-foreground mb-3 tracking-wide">Information We Collect</h2>
              <p className="text-muted-foreground">
                We collect information you provide directly to us, such as when you request information about our properties, 
                schedule consultations, or contact us. This may include your name, email address, phone number, and preferences 
                regarding property types and budgets.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-playfair font-light text-foreground mb-3 tracking-wide">How We Use Your Information</h2>
              <p className="text-muted-foreground">
                We use the information we collect to provide, maintain, and improve our services, communicate with you about 
                our properties, send you relevant information and updates, and respond to your inquiries and requests.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-playfair font-light text-foreground mb-3 tracking-wide">Information Sharing</h2>
              <p className="text-muted-foreground">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except as described in this policy. We may share your information with trusted partners who assist us in 
                operating our business and serving you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-playfair font-light text-foreground mb-3 tracking-wide">Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-playfair font-light text-foreground mb-3 tracking-wide">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at privacy@shreyanshproperties.com 
                or call us at +91 98825 44999.
              </p>
            </section>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}