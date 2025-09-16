import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Shield, Building2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card/20 backdrop-blur-sm border-t border-border/30 pt-24 pb-12">
      <div className="max-w-8xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-playfair font-light text-foreground mb-6 tracking-wide">
              The Legacy <span className="text-primary italic">Phase 1</span>
            </h3>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed font-light">
              An architectural triumph where discerning taste meets uncompromising quality. 
              Each residence represents the pinnacle of sophisticated urban living.
            </p>
            <div className="space-y-2 opacity-70">
              <p className="text-xs text-muted-foreground font-light tracking-wide">
                <Shield className="h-3 w-3 inline mr-2" />
                RERA Registered
              </p>
              <p className="text-xs text-muted-foreground font-light tracking-wide">
                <Building2 className="h-3 w-3 inline mr-2" />
                By Silverglades
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-light text-foreground mb-6 tracking-wide">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#highlights" className="text-muted-foreground hover:text-primary transition-colors">Key Highlights</a></li>
              <li><a href="#amenities" className="text-muted-foreground hover:text-primary transition-colors">Amenities</a></li>
              <li><a href="#residences" className="text-muted-foreground hover:text-primary transition-colors">Floor Plans</a></li>
              <li><a href="#video" className="text-muted-foreground hover:text-primary transition-colors">Virtual Tour</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Project Info */}
          <div>
            <h4 className="font-playfair font-light text-foreground mb-6 tracking-wide">Specifications</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-light">
              <li>10.5 Acres of Curated Living</li>
              <li>341 Exclusive Residences</li>
              <li>3 & 4 Bedroom Configurations</li>
              <li>5 Architectural Towers</li>
              <li>Immediate Possession</li>
              <li>70-80% Landscaped Gardens</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair font-light text-foreground mb-6 tracking-wide">Private Consultations</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2" data-testid="footer-phone">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">+91 95608 02332</p>
                  <p className="text-muted-foreground">+91 9882544999</p>
                </div>
              </div>
              <div className="flex items-start space-x-2" data-testid="footer-address">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">33, Block, G- C, 122001, D,</p>
                  <p className="text-muted-foreground">S City Rd Number 1, Block G,</p>
                  <p className="text-muted-foreground">South City I, Sector 41,</p>
                  <p className="text-muted-foreground">Gurugram, Haryana 122007</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-sm text-muted-foreground text-center md:text-left opacity-70">
              <p className="font-light tracking-wide">© 2024 The Legacy Phase 1 by Silverglades. All rights reserved.</p>
              <p className="mt-2 text-xs opacity-60">RERA Reg. No: RC/REP/HARERA/GGM/861/593/2024/88</p>
            </div>
            <div className="flex items-center space-x-8 text-sm text-muted-foreground opacity-70">
              <a href="/privacy" className="hover:text-primary transition-colors font-light tracking-wide">Privacy</a>
              <a href="/terms" className="hover:text-primary transition-colors font-light tracking-wide">Terms</a>
              <a href="/disclaimer" className="hover:text-primary transition-colors font-light tracking-wide">Disclaimer</a>
            </div>
          </div>
        </div>

        {/* Refined Disclaimer */}
        <div className="mt-12 p-8 bg-background/20 backdrop-blur-sm rounded-none border border-border/10">
          <p className="text-xs text-muted-foreground leading-relaxed font-light opacity-70">
            The information presented herein is subject to change. Shreyansh Jain Properties reserves discretionary rights to modify content without prior notice. Imagery is representational. For comprehensive details and current availability, we invite you to schedule a private consultation with our advisors.
          </p>
        </div>
      </div>
    </footer>
  );
}