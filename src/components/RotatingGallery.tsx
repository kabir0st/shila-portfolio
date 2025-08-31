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
    const radius = 250;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius * 0.5; // Half circle effect
    
    return {
      left: `calc(50% + ${x}px)`,
      top: `calc(50% + ${y}px)`,
      transform: `translate(-50%, -50%) scale(${0.8 + Math.sin(angle) * 0.3})`,
      zIndex: Math.floor(Math.sin(angle) * 10) + 10,
    };
  };

  return (
    <section className="py-20 bg-gradient-warm overflow-hidden" id="gallery">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Culinary Creations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my signature dishes, each crafted with passion, 
            precision, and the finest ingredients to create memorable dining experiences.
          </p>
        </div>

        <div className="relative h-96 md:h-[500px] mb-12">
          <div className="rotating-gallery">
            {foodImages.map((image, index) => (
              <div
                key={index}
                className="gallery-item"
                style={getPosition(index, foodImages.length)}
              >
                <img
                  src={image}
                  alt={`Gourmet dish ${index + 1}`}
                  className="food-image"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Controls */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Hover over images to see them up close
          </p>
          <div className="flex justify-center space-x-2">
            {foodImages.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-primary/30 hover:bg-primary transition-colors duration-300 cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RotatingGallery;