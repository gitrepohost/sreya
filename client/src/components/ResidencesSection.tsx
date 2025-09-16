import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home } from "lucide-react";
import floorPlan3BHK from "@assets/generated_images/3BHK_floor_plan_5c3b29fe.png";
import floorPlan4BHK from "@assets/generated_images/4BHK_floor_plan_6ea8ede8.png";

interface ResidencesSectionProps {
  onScrollTo: (section: string) => void;
}

const residenceTypes = [
  {
    type: "3 BHK + Utility",
    area: "2800",
    price: "₹6.58 Cr onwards",
    features: ["Family Lounge", "Powder Room", "Service Room"],
    description: "Spacious 3-bedroom apartments with an extra family lounge – perfect for intimate gatherings or a home theatre.",
    floorPlan: floorPlan3BHK,
    available: true
  },
  {
    type: "4 BHK + Utility", 
    area: "3800",
    price: "₹8.93 Cr onwards",
    features: ["Family Lounge", "Powder Room", "Service Quarters"],
    description: "Large 4-bedroom homes with villa-like space in the sky, featuring private lift lobby access.",
    floorPlan: floorPlan4BHK,
    available: true
  },
  {
    type: "4 BHK + Study + Utility",
    area: "4800", 
    price: "₹11.76 Cr onwards",
    features: ["Study Room", "Family Lounge", "Powder Room", "Service Quarters"],
    description: "The ultimate in luxury with dedicated study room. Corner units with expansive wrap-around balconies.",
    floorPlan: floorPlan4BHK,
    available: true
  }
];

const premiumSpecs = [
  "Italian marble flooring",
  "Engineered wood in bedrooms", 
  "Smart home automation",
  "VRV air conditioning",
  "Premium bath fittings (Kohler/Grohe)",
  "Floor-to-ceiling windows"
];

export default function ResidencesSection({ onScrollTo }: ResidencesSectionProps) {
  return (
    <section id="residences" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-light text-foreground mb-8 tracking-tight">
            Architectural Masterpieces
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Residences conceived for those who appreciate the sublime intersection of space, light, and artistic vision
          </p>
        </div>

        {/* Residence Types */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          {residenceTypes.map((residence, index) => (
            <Card 
              key={index} 
              className="hover-elevate transition-all duration-500 relative overflow-hidden border-none rounded-none shadow-lg group"
              data-testid={`residence-card-${index}`}
            >
              {!residence.available && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="destructive">Limited Units</Badge>
                </div>
              )}
              
              <CardHeader className="pb-6">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mx-auto">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-playfair font-light tracking-wide">{residence.type}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-lg font-light text-muted-foreground tracking-wide">{residence.area} sq.ft.</div>
                    <div className="text-xl font-playfair text-primary tracking-wide">{residence.price}</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed font-light text-center mb-6">
                  {residence.description}
                </p>

                <div className="space-y-4">
                  <h4 className="font-playfair text-sm text-center tracking-wide">Distinctive Elements</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {residence.features.map((feature, idx) => (
                      <div key={idx} className="text-center py-1">
                        <span className="text-xs font-light text-muted-foreground tracking-wide">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="aspect-w-16 aspect-h-20 bg-muted rounded-md overflow-hidden">
                  <img 
                    src={residence.floorPlan}
                    alt={`${residence.type} floor plan`}
                    className="w-full h-48 object-contain p-4"
                  />
                </div>

                <div className="flex flex-col gap-3 pt-4">
                  <Button 
                    variant="outline"
                    size="sm" 
                    className="font-light tracking-wide"
                    onClick={() => onScrollTo("contact")}
                    data-testid={`button-enquire-${index}`}
                  >
                    Private Viewing
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Premium Specifications */}
        <div className="bg-card/30 backdrop-blur-sm rounded-none p-16">
          <h3 className="text-3xl font-playfair font-light text-foreground mb-12 text-center tracking-wide">
            Artisanal Finishes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumSpecs.map((spec, index) => (
              <div 
                key={index}
                className="text-center p-4 hover:bg-background/20 transition-all duration-300"
                data-testid={`spec-${index}`}
              >
                <div className="w-1 h-1 bg-primary rounded-full mx-auto mb-3 opacity-60"></div>
                <span className="text-foreground text-sm font-light tracking-wide">{spec}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-12 text-center">
          <div data-testid="trust-rera" className="opacity-70">
            <p className="text-xs text-muted-foreground font-light tracking-wider uppercase">RERA Registered</p>
            <p className="text-xs text-muted-foreground mt-1 opacity-60">RC/REP/HARERA/GGM/861/593/2024/88</p>
          </div>
          <div data-testid="trust-developer" className="opacity-70">
            <p className="text-xs text-muted-foreground font-light tracking-wider uppercase">By Silverglades</p>
            <p className="text-xs text-muted-foreground mt-1 opacity-60">Legacy of Excellence</p>
          </div>
        </div>

        {/* Exclusive Invitation */}
        <div className="mt-24 bg-card/20 backdrop-blur-sm rounded-none p-16 text-center">
          <h3 className="text-3xl font-playfair font-light text-foreground mb-8 tracking-wide">
            By Private Appointment
          </h3>
          <Button 
            variant="outline"
            size="lg"
            onClick={() => onScrollTo("contact")}
            data-testid="button-schedule-tour"
            className="font-light tracking-wide px-8"
          >
            Arrange Exclusive Preview
          </Button>
        </div>
      </div>
    </section>
  );
}