import { Play } from "lucide-react";
import { useState } from "react";

export default function VideoSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const videoId = "G6m-B_Kp9PI"; // The Legacy Phase 1 video
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const handlePlayVideo = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section id="video" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
            Video Walkthrough
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a Virtual Tour – Get a glimpse of the ultra-luxurious apartments and amenities through our exclusive video walkthrough.
          </p>
        </div>

        {/* Video Player */}
        <div className="relative max-w-5xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden shadow-2xl">
            {!isVideoLoaded ? (
              // Video Thumbnail with Play Button
              <div className="relative w-full h-0 pb-[56.25%]">
                <img 
                  src={thumbnailUrl}
                  alt="The Legacy Phase 1 Video Walkthrough"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    onClick={handlePlayVideo}
                    className="group flex items-center justify-center w-20 h-20 bg-primary hover:bg-primary/90 rounded-full transition-all duration-300 hover:scale-110"
                    data-testid="button-play-video"
                  >
                    <Play className="h-8 w-8 text-primary-foreground ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    Walkthrough: The Legacy by Silverglades – Experience the Lifestyle
                  </h3>
                  <p className="text-white/80 text-sm">
                    Explore luxury residences and world-class amenities
                  </p>
                </div>
              </div>
            ) : (
              // Embedded YouTube Video
              <div className="w-full h-0 pb-[56.25%] relative">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0`}
                  title="The Legacy Phase 1 Video Walkthrough"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  data-testid="video-iframe"
                ></iframe>
              </div>
            )}
          </div>

          {/* Video Description */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the grandeur of The Legacy Phase 1 through our comprehensive video tour. 
              See the spacious residences, premium amenities, and lush green landscapes that make this development truly exceptional.
            </p>
          </div>
        </div>

        {/* Video Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div data-testid="stat-virtual-tours">
            <div className="text-2xl font-playfair font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Virtual Tours Available</div>
          </div>
          <div data-testid="stat-show-flats">
            <div className="text-2xl font-playfair font-bold text-primary mb-2">3</div>
            <div className="text-sm text-muted-foreground">Furnished Show Flats</div>
          </div>
          <div data-testid="stat-site-visits">
            <div className="text-2xl font-playfair font-bold text-primary mb-2">Daily</div>
            <div className="text-sm text-muted-foreground">Site Visits</div>
          </div>
          <div data-testid="stat-construction">
            <div className="text-2xl font-playfair font-bold text-primary mb-2">85%</div>
            <div className="text-sm text-muted-foreground">Construction Complete</div>
          </div>
        </div>
      </div>
    </section>
  );
}