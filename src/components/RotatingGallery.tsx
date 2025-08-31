import { useEffect, useState, useRef } from "react";
import food1 from "@/assets/food1.jpg";
import food2 from "@/assets/food2.jpg";
import food3 from "@/assets/food3.jpg";
import food4 from "@/assets/food4.jpg";
import food5 from "@/assets/food5.jpg";
import food6 from "@/assets/food6.jpg";
import food7 from "@/assets/food7.jpg";
import food8 from "@/assets/food8.jpg";

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string>("");
  const [lightboxTitle, setLightboxTitle] = useState<string>("");
  const [bentoHoveredIndex, setBentoHoveredIndex] = useState<number | null>(null);

  // Gallery images collection
  const galleryImages = [
    { src: food1, name: "Signature Sushi Platter", description: "An artful arrangement of our finest nigiri", category: "Sushi", size: "large" },
    { src: food2, name: "Authentic Ramen Bowl", description: "Rich, soul-warming tonkotsu with hand-pulled noodles", category: "Ramen", size: "medium" },
    { src: food3, name: "Tempura Selection", description: "Light, crispy vegetables and prawns", category: "Tempura", size: "small" },
    { src: food4, name: "Premium Sashimi", description: "Freshest cuts of the day's finest fish", category: "Sashimi", size: "medium" },
    { src: food5, name: "Traditional Bento", description: "Perfectly balanced traditional Japanese meal", category: "Bento", size: "large" },
    { src: food6, name: "A5 Wagyu Experience", description: "The pinnacle of Japanese beef perfection", category: "Wagyu", size: "small" },
    { src: food7, name: "Chef's Omakase", description: "Trust the chef's seasonal inspiration", category: "Omakase", size: "medium" },
    { src: food8, name: "Matcha Dessert", description: "Traditional sweets with modern presentation", category: "Dessert", size: "small" },
    { src: food1, name: "Chirashi Bowl", description: "Assorted sashimi over seasoned sushi rice", category: "Sushi", size: "medium" },
    { src: food2, name: "Miso Ramen", description: "Rich miso broth with tender chashu", category: "Ramen", size: "large" },
    { src: food3, name: "Vegetable Tempura", description: "Seasonal vegetables in perfect batter", category: "Tempura", size: "small" },
    { src: food4, name: "Tuna Sashimi", description: "Premium bluefin tuna, expertly cut", category: "Sashimi", size: "medium" }
  ];

  // Keyboard support for lightbox
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (lightboxOpen && e.key === 'Escape') {
        closeLightbox();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen]);

  // Lightbox functions
  const openLightbox = (src: string, title: string) => {
    setLightboxImage(src);
    setLightboxTitle(title);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage("");
    setLightboxTitle("");
    document.body.style.overflow = 'unset';
  };

  // Bento grid size classes
  const getBentoSizeClass = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'medium':
        return 'col-span-2 row-span-1';
      case 'small':
      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <section className="min-h-screen py-20 bg-gradient-warm overflow-hidden relative" id="gallery">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold text-primary mb-8 hero-text">
            Culinary Gallery
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the artistry of Japanese cuisine through my signature creations. 
            Each dish tells a story of tradition, innovation, and culinary excellence.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-fr max-w-7xl mx-auto">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer ${getBentoSizeClass(item.size)} overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 hover:z-10`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              onMouseEnter={() => setBentoHoveredIndex(index)}
              onMouseLeave={() => setBentoHoveredIndex(null)}
              onClick={() => openLightbox(item.src, item.name)}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Image */}
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                loading="lazy"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/80 text-primary-foreground rounded-full mb-2">
                    {item.category}
                  </span>
                  <h4 className="text-white font-semibold text-sm mb-1">{item.name}</h4>
                  <p className="text-white/80 text-xs line-clamp-2">{item.description}</p>
                </div>
              </div>
              
              {/* Zoom icon */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
              
              {/* Shimmer effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transition-transform duration-1000 ${
                bentoHoveredIndex === index ? 'translate-x-full' : '-translate-x-full'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="flex justify-center mt-16 space-x-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{galleryImages.length}</div>
            <div className="text-sm text-muted-foreground">Signature Dishes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">8</div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-[90vh] animate-in zoom-in duration-300">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Image */}
            <img
              src={lightboxImage}
              alt={lightboxTitle}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Image title */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
              <h3 className="text-white text-xl font-semibold">{lightboxTitle}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;