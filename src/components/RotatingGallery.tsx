import { useEffect, useState } from "react";
import food1 from "@/assets/food1.jpg";
import food2 from "@/assets/food2.jpg";
import food3 from "@/assets/food3.jpg";
import food4 from "@/assets/food4.jpg";
import food5 from "@/assets/food5.jpg";
import food6 from "@/assets/food6.jpg";
import food7 from "@/assets/food7.jpg";
import food8 from "@/assets/food8.jpg";

const RotatingGallery = () => {
  const [rotation, setRotation] = useState(0);

  // Food images with proper imports
  const foodImages = [
    food1, food2, food3, food4, food5, food6, food7, food8
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.5);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const getPosition = (index: number, total: number) => {
    const angle = (index / total) * Math.PI + (rotation * Math.PI) / 180;
    const radius = window.innerWidth > 1024 ? 400 : window.innerWidth > 768 ? 300 : 250;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius * 0.4; // Half circle effect
    
    return {
      left: `calc(50% + ${x}px)`,
      top: `calc(50% + ${y}px)`,
      transform: `translate(-50%, -50%) scale(${1.0 + Math.sin(angle) * 0.4})`,
      zIndex: Math.floor(Math.sin(angle) * 10) + 10,
      opacity: 0.7 + Math.sin(angle) * 0.3,
    };
  };

  return (
    <section className="min-h-screen py-20 bg-gradient-warm overflow-hidden relative" id="gallery">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 section-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold text-primary mb-8 hero-text">
            Culinary Gallery
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the artistry of Japanese cuisine through my signature creations. 
            Each dish tells a story of tradition, innovation, and culinary excellence.
          </p>
        </div>

        <div className="relative h-[600px] md:h-[800px] mb-16">
          <div className="rotating-gallery">
            {foodImages.map((image, index) => (
              <div
                key={index}
                className="gallery-item group cursor-pointer"
                style={getPosition(index, foodImages.length)}
              >
                <img
                  src={image}
                  alt={`Signature dish ${index + 1} - Japanese cuisine specialty`}
                  className="food-image group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Gallery Controls */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
            Watch as my culinary creations come to life in this rotating showcase
          </p>
          <div className="flex justify-center space-x-3 mb-8">
            {foodImages.map((_, index) => (
              <div
                key={index}
                className="w-3 h-3 rounded-full bg-primary/40 hover:bg-primary hover:scale-125 transition-all duration-300 cursor-pointer animate-pulse"
                style={{ animationDelay: `${index * 200}ms` }}
              />
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="mt-12">
            <p className="text-2xl font-semibold text-primary mb-4">Ready to taste perfection?</p>
            <button className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:shadow-glow hover:scale-105 transition-all duration-300">
              Book Your Experience
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RotatingGallery;