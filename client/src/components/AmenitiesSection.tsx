import { Card, CardContent } from "@/components/ui/card";
import clubImage from "@assets/generated_images/Club_Primo_luxury_amenities_84380791.png";
import trailImage from "@assets/generated_images/Nature_walk_forest_trail_5151f517.png";
import interiorImage from "@assets/generated_images/Luxury_apartment_interior_2ebbaf2d.png";
import poolImage from "@assets/generated_images/luxury_swimming_pool_amenity_10dbf6fd.png";
import gymImage from "@assets/generated_images/luxury_fitness_center_gym_6d0208db.png";
import spaImage from "@assets/generated_images/luxury_spa_wellness_center_b0916119.png";
import balconyImage from "@assets/generated_images/luxury_balcony_city_view_d622f899.png";

const amenities = [
  {
    image: trailImage,
    title: "Forest Trail & Orchard Garden",
    description: "A 3.5-acre Nature Walk weaves through lush forestry and themed gardens. Stroll under canopy of trees, relax in orchard gardens, or unwind in private cabanas amid nature."
  },
  {
    image: clubImage,
    title: "Club Primo (Luxury Clubhouse)",
    description: "One of two exclusive clubhouses, Club Primo offers a spa and sauna, state-of-the-art gym, infinity swimming pool, fine-dining restaurant & bar, and private banquet hall."
  },
  {
    image: poolImage,
    title: "Infinity Swimming Pool",
    description: "Resort-style infinity swimming pool with crystal-clear waters. Expansive deck area with premium loungers and cabanas for ultimate relaxation and entertainment."
  },
  {
    image: gymImage,
    title: "State-of-the-Art Fitness Center",
    description: "Fully equipped modern gymnasium with premium exercise equipment, floor-to-ceiling windows, and professional-grade facilities for comprehensive wellness."
  },
  {
    image: spaImage,
    title: "Wellness & Spa Center",
    description: "Tranquil spa facility offering rejuvenating treatments, meditation spaces, and wellness therapies in an atmosphere of complete serenity and luxury."
  },
  {
    image: balconyImage,
    title: "Private Balconies & Terraces",
    description: "Expansive private outdoor spaces with panoramic city views. Premium outdoor furniture and landscaped elements create perfect entertainment areas."
  },
  {
    image: interiorImage,
    title: "Concierge & Hospitality Services",
    description: "Designed in partnership with Oberoi Hotels Group for hospitality consulting. Expect hotel-grade concierge service, valet, and personalized assistance."
  }
];

const additionalAmenities = [
  "Kids' play arena & indoor game rooms",
  "Mini cinema & entertainment zones", 
  "Tennis court & half basketball court",
  "Skating rink & jogging tracks",
  "Rainwater harvesting & solar power",
  "3-tier security with 24/7 surveillance"
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-light text-foreground mb-8 tracking-tight">
            Curated Lifestyle
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            An orchestrated symphony of refinement, where every detail speaks to the connoisseur of exceptional living
          </p>
        </div>

        {/* Main Amenities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-24">
          {amenities.map((amenity, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-elevate transition-all duration-500 border-none rounded-none shadow-lg group"
              data-testid={`amenity-card-${index}`}
            >
              <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
                <img 
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/10"></div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-playfair font-light text-foreground mb-4 tracking-wide">
                  {amenity.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  {amenity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Amenities Grid */}
        <div className="bg-card/30 backdrop-blur-sm rounded-none p-16">
          <h3 className="text-2xl font-playfair font-light text-foreground mb-12 text-center tracking-wide">
            Refined Conveniences
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalAmenities.map((amenity, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 p-4 hover:bg-background/30 transition-all duration-300"
                data-testid={`additional-amenity-${index}`}
              >
                <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 opacity-60"></div>
                <span className="text-foreground font-light text-sm tracking-wide">{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lifestyle Quote */}
        <div className="mt-24 text-center">
          <blockquote className="text-3xl font-playfair font-light italic text-muted-foreground max-w-4xl mx-auto leading-relaxed tracking-wide">
            "Where the art of living transcends the ordinary, 
            and every moment becomes a testament to refined taste."
          </blockquote>
        </div>
      </div>
    </section>
  );
}