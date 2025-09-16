import { Trees, Building2, Users, CableCar, ShieldCheck, Construction } from "lucide-react";

const highlights = [
  {
    icon: Trees,
    title: "Low-Density Development",
    description: "Sprawling 10.5-acre campus with only ~341 units in Phase 1",
    detail: "≈40 units/acre – a first in luxury development"
  },
  {
    icon: Building2,
    title: "4 + 1 Towers",
    description: "Four main high-rise towers plus one exclusive tower",
    detail: "G+35/36 floors offering panoramic city views"
  },
  {
    icon: Trees,
    title: "70–80% Open Greens",
    description: "Mostly open space with landscaped gardens and lawns",
    detail: "3.5-acre nature walk for resort-like ambiance"
  },
  {
    icon: CableCar,
    title: "Private Lift Lobbies",
    description: "Each residence has private or semi-private elevator lobby",
    detail: "No crowded corridors – personal entrance for your home"
  },
  {
    icon: Users,
    title: "No EWS Units",
    description: "Exclusively luxury with no Economically Weaker Section units",
    detail: "Preserving the elite community feel"
  },
  {
    icon: Construction,
    title: "60m Wide Construction Access",
    description: "Located on a 60-meter wide arterial road",
    detail: "Direct connectivity with grand approach"
  }
];

export default function HighlightsSection() {
  return (
    <section id="highlights" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-light text-foreground mb-8 tracking-tight">
            Distinctive Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Where architectural mastery meets unparalleled refinement
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-none p-12 hover-elevate border-none transition-all duration-500 group"
                data-testid={`highlight-${index}`}
              >
                <div className="text-center space-y-6">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-500">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-light text-foreground mb-4 tracking-wide">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm font-light leading-relaxed">
                      {highlight.description}
                    </p>
                    <p className="text-primary font-light text-sm tracking-wide">
                      {highlight.detail}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center" data-testid="stat-acres">
            <div className="text-3xl lg:text-4xl font-playfair font-bold text-primary mb-2">10.5</div>
            <div className="text-sm text-muted-foreground">Acres</div>
          </div>
          <div className="text-center" data-testid="stat-units">
            <div className="text-3xl lg:text-4xl font-playfair font-bold text-primary mb-2">341</div>
            <div className="text-sm text-muted-foreground">Total Units</div>
          </div>
          <div className="text-center" data-testid="stat-towers">
            <div className="text-3xl lg:text-4xl font-playfair font-bold text-primary mb-2">5</div>
            <div className="text-sm text-muted-foreground">Towers</div>
          </div>
          <div className="text-center" data-testid="stat-floors">
            <div className="text-3xl lg:text-4xl font-playfair font-bold text-primary mb-2">36</div>
            <div className="text-sm text-muted-foreground">Max Floors</div>
          </div>
        </div>
      </div>
    </section>
  );
}