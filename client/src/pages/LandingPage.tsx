import { useRef } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import ResidencesSection from "@/components/ResidencesSection";
import VideoSection from "@/components/VideoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 64; // Account for fixed navigation height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation onScrollTo={scrollToSection} />
      <main>
        <HeroSection onScrollTo={scrollToSection} />
        <HighlightsSection />
        <AmenitiesSection />
        <ResidencesSection onScrollTo={scrollToSection} />
        <VideoSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}