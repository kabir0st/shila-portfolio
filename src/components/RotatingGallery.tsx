import { useEffect, useState, useRef } from "react";
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string>("");
  const [lightboxTitle, setLightboxTitle] = useState<string>("");
  const [bentoHoveredIndex, setBentoHoveredIndex] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Food images with descriptive names for better UX
  const foodImages = [
    { src: food1, name: "Sushi Artistry", description: "Premium nigiri selection" },
    { src: food2, name: "Ramen Perfection", description: "Rich tonkotsu broth" },
    { src: food3, name: "Tempura Elegance", description: "Light & crispy delicacy" },
    { src: food4, name: "Sashimi Excellence", description: "Fresh ocean treasures" },
    { src: food5, name: "Bento Harmony", description: "Balanced meal composition" },
    { src: food6, name: "Wagyu Glory", description: "Premium beef experience" },
    { src: food7, name: "Seasonal Special", description: "Chef's daily creation" },
    { src: food8, name: "Sweet Finale", description: "Traditional dessert" }
  ];

  // Extended collection for Bento box gallery
  const bentoGalleryImages = [
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setRotation(prev => prev + 0.3);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [isPaused]);

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

  const getPosition = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI + (rotation * Math.PI) / 180;
    const baseRadius = window.innerWidth > 1024 ? 380 : window.innerWidth > 768 ? 280 : 220;
    const isHovered = hoveredIndex === index;
    const radius = isHovered ? baseRadius * 1.3 : baseRadius;
    
    // Create a more dynamic orbital pattern
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius * 0.6;
    
    // Enhanced scaling with perspective effect
    const depthFactor = Math.cos(angle);
    const baseScale = 0.8 + depthFactor * 0.4;
    const hoverScale = isHovered ? 1.6 : 1.0;
    const finalScale = baseScale * hoverScale;
    
    return {
      left: `calc(50% + ${x}px)`,
      top: `calc(50% + ${y}px)`,
      transform: `translate(-50%, -50%) scale(${finalScale}) perspective(1000px) rotateY(${depthFactor * 15}deg)`,
      zIndex: isHovered ? 100 : Math.floor(depthFactor * 10) + 10,
      opacity: isHovered ? 1 : 0.75 + depthFactor * 0.25,
      filter: isHovered ? 'brightness(1.1) saturate(1.2)' : `brightness(${0.9 + depthFactor * 0.2})`,
    };
  };

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
        <div className="text-center mb-20 section-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold text-primary mb-8 hero-text">
            Culinary Gallery
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the artistry of Japanese cuisine through my signature creations. 
            Each dish tells a story of tradition, innovation, and culinary excellence.
          </p>
        </div>

        <div 
          className="relative h-[600px] md:h-[800px] mb-16"
          ref={galleryRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setHoveredIndex(null);
          }}
        >
          <div className="rotating-gallery">
            {foodImages.map((item, index) => (
              <div
                key={index}
                className="gallery-item group cursor-pointer absolute"
                style={getPosition(index, foodImages.length)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Glowing ring effect on hover */}
                <div className={`absolute inset-0 rounded-full transition-all duration-700 ${
                  hoveredIndex === index 
                    ? 'ring-4 ring-primary/50 ring-offset-4 ring-offset-transparent shadow-2xl shadow-primary/25' 
                    : ''
                }`}></div>
                
                {/* Floating particles effect */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-accent rounded-full animate-ping"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${15 + (i % 2) * 70}%`,
                          animationDelay: `${i * 200}ms`,
                          animationDuration: '2s'
                        }}
                      />
                    ))}
                  </div>
                )}
                
                {/* Main image with enhanced effects */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={item.src}
                    alt={`${item.name} - ${item.description}`}
                    className={`w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover rounded-xl transition-all duration-700 ${
                      hoveredIndex === index 
                        ? 'shadow-2xl border-2 border-primary/30' 
                        : 'shadow-lg'
                    }`}
                    loading="lazy"
                  />
                  
                  {/* Shimmer effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transition-transform duration-1000 ${
                    hoveredIndex === index ? 'translate-x-full' : '-translate-x-full'
                  }`}></div>
                </div>

                {/* Enhanced info overlay */}
                <div className={`absolute -bottom-16 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
                  hoveredIndex === index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4 pointer-events-none'
                }`}>
                  <div className="bg-card/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-xl border border-primary/20 min-w-max">
                    <h4 className="text-sm font-semibold text-primary text-center whitespace-nowrap">
                      {item.name}
                    </h4>
                    <p className="text-xs text-muted-foreground text-center mt-1 whitespace-nowrap">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Arrow pointing to image */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-card/95"></div>
                </div>

                {/* Pulsing background effect */}
                <div className={`absolute inset-0 rounded-full bg-primary/5 transition-all duration-700 ${
                  hoveredIndex === index ? 'scale-150 opacity-100' : 'scale-100 opacity-0'
                }`}></div>
              </div>
            ))}
          </div>
          
          {/* Central hub with rotating elements */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              {/* Rotating border rings */}
              <div className="w-32 h-32 border-2 border-primary/20 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 border border-accent/30 rounded-full animate-reverse-spin"></div>
              
              {/* Central content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center bg-card/80 backdrop-blur-sm rounded-full p-4 shadow-lg">
                  <div className="text-xs font-medium text-primary">Chef's</div>
                  <div className="text-xs text-muted-foreground">Gallery</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Gallery Controls */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
            {hoveredIndex !== null 
              ? `Exploring: ${foodImages[hoveredIndex].name}` 
              : "Hover over each dish to discover its story • Gallery rotates automatically"
            }
          </p>
          
          {/* Interactive indicators */}
          <div className="flex justify-center space-x-4 mb-8">
            {foodImages.map((item, index) => (
              <div
                key={index}
                className={`relative cursor-pointer transition-all duration-500 ${
                  hoveredIndex === index ? 'scale-125' : 'hover:scale-110'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  hoveredIndex === index 
                    ? 'bg-primary shadow-lg shadow-primary/50' 
                    : 'bg-primary/40 hover:bg-primary/70'
                }`} />
                
                {/* Ripple effect */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping"></div>
                )}
                
                {/* Tooltip */}
                <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                  hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                }`}>
                  <div className="bg-card px-2 py-1 rounded text-xs font-medium text-primary whitespace-nowrap shadow-lg">
                    {item.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pause/Play Control */}
          <div className="mb-8">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className={`relative group px-6 py-3 rounded-full transition-all duration-300 ${
                isPaused 
                  ? 'bg-primary text-primary-foreground shadow-lg' 
                  : 'bg-card border border-primary/30 text-primary hover:bg-primary/10'
              }`}
            >
              <span className="flex items-center space-x-2">
                <div className={`w-4 h-4 transition-transform duration-300 ${isPaused ? 'rotate-90' : ''}`}>
                  {isPaused ? (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  )}
                </div>
                <span className="text-sm font-medium">
                  {isPaused ? 'Resume Gallery' : 'Pause Gallery'}
                </span>
              </span>
              
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
          
          {/* Call to Action with enhanced styling */}
          <div className="mt-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-3xl"></div>
            <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-primary/20">
              <p className="text-2xl font-semibold text-primary mb-2">Ready to taste perfection?</p>
              <p className="text-muted-foreground mb-6">Experience these masterpieces in person</p>
              
              <button className="group relative bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 hover:scale-105">
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Book Your Experience</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Box Gallery Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16 section-fade-in">
          <h3 className="text-4xl md:text-6xl font-bold text-primary mb-6 hero-text">
            Complete Collection
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore our full menu through this interactive gallery. Click any image to view it in detail.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-fr max-w-7xl mx-auto">
          {bentoGalleryImages.map((item, index) => (
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
            <div className="text-3xl font-bold text-primary mb-2">{bentoGalleryImages.length}</div>
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

export default RotatingGallery;