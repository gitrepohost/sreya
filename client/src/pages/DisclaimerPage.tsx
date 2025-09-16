import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { useLocation } from "wouter";

export default function DisclaimerPage() {
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
            <CardTitle className="text-3xl font-playfair font-light tracking-wide flex items-center">
              <AlertTriangle className="h-8 w-8 text-primary mr-3" />
              Disclaimer
            </CardTitle>
            <p className="text-muted-foreground font-light">Important legal information</p>
          </CardHeader>
          <CardContent className="space-y-6 text-sm leading-relaxed">
            <section>
              <h2 className="text-xl font-playfair font-light text-foreground mb-3 tracking-wide">General Disclaimer</h2>
              <p className="text-muted-foreground">
                The information presented on this website is for general informational purposes only. While we endeavor 
                to keep the information up to date and correct, we make no representations or warranties of any kind, 
                express or implied, about the completeness, accuracy, reliability, suitability, or availability of the 
                information, products, services, or related graphics.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-playfair font-light text-foreground mb-3 tracking-wide">Property Information</h2>
              <p className="text-muted-foreground">
                All property specifications, floor plans, amenities, and features are indicative and subject to change 
                as per architectural and design requirements. The actual area may vary from the stated area. Computer 
                generated images, walkthroughs, and renders are only indicative of the actual design.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-playfair font-light text-foreground mb-3 tracking-wide">Pricing and Availability</h2>
              <p className="text-muted-foreground">
                All prices mentioned are subject to change without prior notice and do not constitute an offer. 
                Availability of units is subject to prior sale. Final prices will be confirmed at the time of booking 
                and may include additional charges like registration, documentation, and other statutory fees.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-playfair font-light text-foreground mb-3 tracking-wide">No Investment Advice</h2>
              <p className="text-muted-foreground">
                The content on this website does not constitute investment advice, financial advice, trading advice, 
                or any other sort of advice. You are responsible for conducting your own due diligence and obtaining 
                professional advice before making any investment decision.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-playfair font-light text-foreground mb-3 tracking-wide">Third Party Content</h2>
              <p className="text-muted-foreground">
                This website may contain links to third-party websites or content. We do not endorse, warrant, or 
                assume responsibility for the accuracy or reliability of any information offered by third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-playfair font-light text-foreground mb-3 tracking-wide">Contact Us</h2>
              <p className="text-muted-foreground">
                For any clarifications or questions regarding this disclaimer, please contact us at 
                info@shreyanshproperties.com or call us at +91 98825 44999.
              </p>
            </section>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}