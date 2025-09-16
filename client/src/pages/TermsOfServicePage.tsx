import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function TermsOfServicePage() {
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
              Terms of Service
            </CardTitle>
            <p className="text-muted-foreground font-light">Last updated: September 2024</p>
          </CardHeader>
          <CardContent className="space-y-6 text-sm leading-relaxed">
            <section>
              <h2 className="text-xl font-playfair font-light text-foreground mb-3 tracking-wide">Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. 
                These terms apply to all visitors, users, and others who access or use our services related to The Legacy Phase 1 
                property development.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-playfair font-light text-foreground mb-3 tracking-wide">Property Information</h2>
              <p className="text-muted-foreground">
                All property information, including but not limited to floor plans, amenities, specifications, and pricing, 
                is subject to change without notice. Images and renderings are for illustrative purposes only and may not 
                represent the final product. Actual features may vary.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-playfair font-light text-foreground mb-3 tracking-wide">Booking and Reservations</h2>
              <p className="text-muted-foreground">
                All bookings and reservations are subject to availability and final approval by Silverglades. A booking 
                amount may be required to secure your unit. Terms and conditions of sale will be provided separately 
                and govern any purchase agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-playfair font-light text-foreground mb-3 tracking-wide">RERA Compliance</h2>
              <p className="text-muted-foreground">
                This project is registered under RERA (Real Estate Regulatory Authority) with registration number 
                RC/REP/HARERA/GGM/861/593/2024/88. All representations and commitments are subject to RERA guidelines 
                and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-playfair font-light text-foreground mb-3 tracking-wide">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Shreyansh Jain Properties and its affiliates shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages arising out of your use of our services or any property-related transactions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-playfair font-light text-foreground mb-3 tracking-wide">Contact Information</h2>
              <p className="text-muted-foreground">
                For questions regarding these Terms of Service, please contact us at legal@shreyanshproperties.com 
                or call us at +91 98825 44999.
              </p>
            </section>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}