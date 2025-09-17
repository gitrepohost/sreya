import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Shield, Building2 } from "lucide-react";
import heroImage from "@assets/generated_images/Luxury_property_hero_image_9d13cc19.png";

interface HeroSectionProps {
  onScrollTo: (section: string) => void;
}

export default function HeroSection({ onScrollTo }: HeroSectionProps) {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          // Remove fixed attachment for mobile compatibility
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-playfair font-light text-white mb-8 sm:mb-12 leading-[0.95] tracking-tight">
          The Legacy <span className="text-primary font-normal italic">Phase 1</span>
        </h1>
        
        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 font-light mb-12 sm:mb-16 leading-relaxed tracking-wide px-2">
          An Exclusive Address for the Discerning Few
        </p>
        
        {/* Subtle Info Line */}
        <div className="mb-8 sm:mb-12">
          <p className="text-white/60 text-xs sm:text-sm font-light tracking-[0.2em] uppercase px-4">
            Sector 63A • Golf Course Road • Limited Residences
          </p>
        </div>
        
        {/* Exclusive CTA */}
        <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center px-4">
          <Button 
            size="lg"
            variant="outline"
            className="text-sm sm:text-base px-8 sm:px-12 py-3 sm:py-4 font-light bg-white/5 backdrop-blur-md border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-500 tracking-wide w-full sm:w-auto"
            onClick={() => onScrollTo("contact")}
            data-testid="button-enquire-hero"
          >
            Request Private Consultation
          </Button>
          <p className="text-white/50 text-xs font-light tracking-wide">
            By Invitation Only
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/40 rounded-full flex justify-center">
              <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1 sm:mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
