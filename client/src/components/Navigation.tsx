import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

interface NavigationProps {
  onScrollTo: (section: string) => void;
}

export default function Navigation({ onScrollTo }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Home", section: "hero" },
    { label: "Highlights", section: "highlights" },
    { label: "Amenities", section: "amenities" },
    { label: "Residences", section: "residences" },
    { label: "Gallery", section: "video" },
    { label: "Contact", section: "contact" }
  ];

  const handleScrollTo = (section: string) => {
    onScrollTo(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/30">
        <div className="max-w-8xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-playfair font-light text-foreground tracking-wide">
                The Legacy <span className="text-primary font-normal italic">Phase 1</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {navigationItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => handleScrollTo(item.section)}
                  className="text-sm font-light text-muted-foreground hover:text-foreground transition-all duration-300 tracking-wide uppercase"
                  data-testid={`nav-${item.section}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => handleScrollTo("contact")}
                className="hidden sm:flex items-center space-x-2 font-light tracking-wide"
                data-testid="button-cta-nav"
              >
                <span>Private Consultation</span>
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => handleScrollTo(item.section)}
                  className="block w-full text-left px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                  data-testid={`nav-mobile-${item.section}`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => handleScrollTo("contact")}
                className="w-full mt-4"
                data-testid="button-cta-mobile"
              >
                <Phone className="h-4 w-4 mr-2" />
                Enquire Now
              </Button>
            </div>
          </div>
        )}
      </nav>
      {/* Spacer for fixed navigation */}
      <div className="h-16" />
    </>
  );
}