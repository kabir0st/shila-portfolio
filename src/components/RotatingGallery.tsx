import { useEffect, useState, useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";

// Sushi Rolls
import californiaRoll from "@/assets/califonia roll.jpeg";
import dragonRoll from "@/assets/dragon roll.jpeg";
import friedRoll from "@/assets/fried roll.jpeg";
import fryTempuraRoll from "@/assets/fry tempura roll.jpeg";
import futomakiRoll from "@/assets/futomaki roll.jpeg";
import philadelphiaRoll from "@/assets/philadelphia roll.jpeg";
import rainbowRoll from "@/assets/rainbow roll.jpeg";
import sakeRoll from "@/assets/sake roll.jpeg";
import spicyMayuroRoll from "@/assets/spicy mayuro roll.jpeg";
import tekkaMakiRoll from "@/assets/tekka maki roll.jpeg";
import tunaAvocadoRoll from "@/assets/tuna avocado roll.jpeg";
import yasaiRoll from "@/assets/yasai roll.jpeg";

// Traditional Japanese
import gyoza from "@/assets/gyoza.jpeg";
import misoSoup from "@/assets/miso soup.jpeg";
import nigiri from "@/assets/nigiri.jpeg";
import ramen from "@/assets/ramen.jpeg";
import sushi from "@/assets/sushi.jpeg";
import temaki from "@/assets/temaki.jpeg";
import temari from "@/assets/temari.jpeg";

// Salads & Appetizers
import avocadoSalad from "@/assets/avocado salad with pomzu sauce.jpeg";
import kaniSalad from "@/assets/kani salad.jpeg";
import salmonTunaTartare from "@/assets/salmon tuna tartare.jpeg";

// Western Fusion
import burgerAndFries from "@/assets/burger_and_fries.jpeg";
import sandwich from "@/assets/sandwich.jpeg";

// Certificates
import basritaCertificate from "@/assets/basrita_cerificate.jpeg";
import braisataTraining from "@/assets/braisata_training.jpeg";
import sushiCertificate from "@/assets/sushi certificate.jpeg";

// Personal Photos
import anotherMe from "@/assets/another me.jpeg";
import ceremonyPhoto from "@/assets/ceremoney_photo.jpeg";
import myPhoto from "@/assets/myphoto.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string>("");
  const [lightboxTitle, setLightboxTitle] = useState<string>("");
  const [lightboxDescription, setLightboxDescription] = useState<string>("");
  const [activeSection, setActiveSection] = useState<string>("culinary");
  
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  // Data Collections
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps"
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const sushiRolls = [
    { src: dragonRoll, name: "Dragon Roll", description: "Fresh eel, avocado, and cucumber, topped with thinly sliced avocado, drizzled with unagi sauce", category: "Specialty", size: "large" },
    { src: rainbowRoll, name: "Rainbow Roll", description: "California roll topped with vibrant sashimi including tuna, salmon, yellowtail, and avocado", category: "Specialty", size: "large" },
    { src: philadelphiaRoll, name: "Philadelphia Roll", description: "Fresh salmon, cream cheese, and cucumber balance", category: "Classic", size: "medium" },
    { src: californiaRoll, name: "California Roll", description: "The iconic inside-out roll with imitation crab, avocado, and cucumber", category: "Classic", size: "medium" },
    { src: spicyMayuroRoll, name: "Spicy Mayuro Roll", description: "Spicy tuna or salmon topped with masago and scallions", category: "Spicy", size: "medium" },
    { src: tunaAvocadoRoll, name: "Tuna Avocado Roll", description: "Fresh tuna sashimi and creamy avocado", category: "Classic", size: "medium" },
    { src: sakeRoll, name: "Sake Roll", description: "Rich Norwegian salmon with a touch of cucumber", category: "Classic", size: "small" },
    { src: tekkaMakiRoll, name: "Tekka Maki Roll", description: "Pure bluefin tuna and seasoned sushi rice", category: "Traditional", size: "small" },
    { src: yasaiRoll, name: "Yasai Roll", description: "Cucumber, avocado, and pickled radish", category: "Vegetarian", size: "medium" },
    { src: fryTempuraRoll, name: "Tempura Roll", description: "Crispy tempura shrimp with avocado, topped with flakes and spicy mayo", category: "Fried", size: "large" },
    { src: futomakiRoll, name: "Futomaki Roll", description: "Tamago, cucumber, pickled radish, and shiitake mushrooms", category: "Traditional", size: "medium" },
    { src: friedRoll, name: "Fried Specialty", description: "Deep-fried roll with a crispy exterior", category: "Fried", size: "small" }
  ];

  const traditionalDishes = [
    { src: sushi, name: "Premium Sushi", description: "Exquisite assortment of nigiri and sashimi", category: "Sushi", size: "large" },
    { src: nigiri, name: "Nigiri", description: "Hand-pressed sushi rice topped with premium fish", category: "Sushi", size: "medium" },
    { src: temaki, name: "Temaki Hand Rolls", description: "Fresh ingredients wrapped in crispy nori", category: "Sushi", size: "medium" },
    { src: temari, name: "Temari", description: "Beautiful ball-shaped sushi", category: "Sushi", size: "small" },
    { src: ramen, name: "Authentic Ramen", description: "Rich broth with hand-pulled noodles and chashu", category: "Noodles", size: "large" },
    { src: misoSoup, name: "Miso Soup", description: "Comforting soup with wakame and silky tofu", category: "Soup", size: "small" },
    { src: gyoza, name: "Pan-Fried Gyoza", description: "Crispy bottom, tender steamed top dumplings", category: "Appetizer", size: "medium" }
  ];

  const saladsAppetizers = [
    { src: avocadoSalad, name: "Avocado Salad", description: "With citrusy ponzu sauce", category: "Salad", size: "medium" },
    { src: kaniSalad, name: "Kani Salad", description: "Crab stick mixed with crisp vegetables", category: "Salad", size: "small" },
    { src: salmonTunaTartare, name: "Tartare", description: "Premium salmon and tuna seasoned", category: "Appetizer", size: "large" }
  ];

  const westernFusion = [
    { src: burgerAndFries, name: "Wagyu Burger", description: "Artisanal toppings and hand-cut fries", category: "Fusion", size: "large" },
    { src: sandwich, name: "Specialty Sandwich", description: "Eastern and Western flavors combined", category: "Fusion", size: "medium" }
  ];

  const certificates = [
    { src: sushiCertificate, name: "Sushi Master", description: "Traditional sushi preparation", category: "Achievement", size: "medium" },
    { src: basritaCertificate, name: "Barista Cert", description: "Professional coffee preparation", category: "Achievement", size: "medium" },
    { src: braisataTraining, name: "Advanced Culinary", description: "Advanced cooking techniques", category: "Achievement", size: "medium" }
  ];

  const personalPhotos = [
    { src: myPhoto, name: "Chef Portrait", description: "Dedication to culinary arts", category: "Personal", size: "medium" },
    { src: anotherMe, name: "Culinary Journey", description: "Ongoing professional growth", category: "Personal", size: "medium" },
    { src: ceremonyPhoto, name: "Graduation", description: "Completion of professional training", category: "Personal", size: "large" }
  ];

  const allCollections = {
    culinary: [...sushiRolls, ...traditionalDishes, ...saladsAppetizers, ...westernFusion],
    certificates: certificates,
    personal: personalPhotos
  };

  const galleryImages = allCollections[activeSection as keyof typeof allCollections] || allCollections.culinary;

  // Initial ScrollTrigger GSAP Animation
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(titleRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(tabsRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(".embla-slide-custom",
      { x: 100, opacity: 0, scale: 0.9 },
      { x: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.05, ease: "power2.out" },
      "-=0.4"
    );
  }, { scope: sectionRef });

  // GSAP animation when changing sections (Tabs)
  useGSAP(() => {
    gsap.fromTo(".embla-slide-custom", 
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.05, ease: "back.out(1.2)", overwrite: true }
    );
    // Restart embla carousel position on section change
    if (emblaApi) emblaApi.scrollTo(0, true);
  }, [activeSection, emblaApi]);

  // Keyboard support for lightbox
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (lightboxOpen && e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen]);

  const openLightbox = (src: string, title: string, description: string = "") => {
    setLightboxImage(src);
    setLightboxTitle(title);
    setLightboxDescription(description);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <section ref={sectionRef} className="py-32 bg-background relative overflow-hidden" id="gallery">
      {/* Sleek architectural background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-primary to-transparent"></div>
        <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={titleRef} className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Portfolio</h2>
            <h3 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Selected <span className="text-primary italic font-serif">Works</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience the artistry of my culinary expertise through my dedication, professional achievements, and personal moments.
            </p>
          </div>
          
          {/* Section Navigation Tabs */}
          <div ref={tabsRef} className="mt-8 md:mt-0 flex flex-wrap gap-2">
            {[
              { key: 'culinary', label: 'Culinary' },
              { key: 'certificates', label: 'Achievements' },
              { key: 'personal', label: 'Journey' }
            ].map((section) => (
              <button
                key={section.key}
                onClick={() => setActiveSection(section.key)}
                className={`px-6 py-3 border transition-all duration-500 uppercase tracking-widest text-xs font-semibold ${
                  activeSection === section.key
                    ? 'bg-foreground text-background border-foreground'
                    : 'bg-transparent text-foreground border-border hover:border-primary'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Embla Carousel OR Grand Achievement Layout */}
      {activeSection === 'certificates' ? (
        <div className="relative w-full px-6 md:px-12 py-16 animate-in fade-in zoom-in duration-700">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 max-w-7xl mx-auto">
            {galleryImages.map((item, index) => (
              <div 
                key={`cert-${index}`} 
                className="group relative flex flex-col items-center bg-card/40 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-primary/20 shadow-xl hover:shadow-primary/30 transition-all duration-700 hover:-translate-y-4"
                onClick={() => openLightbox(item.src, item.name, item.description)}
              >
                {/* Grand Image Frame */}
                <div className="relative w-full aspect-square md:aspect-[4/3] overflow-hidden rounded-xl border-4 border-background shadow-2xl mb-8 group-hover:border-primary/50 transition-colors duration-500 cursor-pointer">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 bg-black/40">
                    <ZoomIn className="w-12 h-12 text-white/90 drop-shadow-lg" />
                  </div>
                </div>
                
                {/* Elegant Typography for Description */}
                <div className="text-center w-full">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
                    {item.category}
                  </div>
                  <h4 className="text-2xl md:text-3xl font-serif text-foreground mb-4 leading-tight">
                    {item.name}
                  </h4>
                  <div className="w-16 h-0.5 bg-border mx-auto mb-4 group-hover:bg-primary transition-colors duration-500"></div>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div ref={carouselContainerRef} className="relative w-full overflow-hidden pt-8 pb-16 animate-in fade-in duration-500">
          <div className="absolute top-1/2 left-4 z-20 -translate-y-1/2 hidden md:block">
            <button onClick={scrollPrev} className="p-4 bg-background/80 hover:bg-primary hover:text-primary-foreground backdrop-blur-md border border-border transition-all duration-300 group">
              <ChevronLeft className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-4 z-20 -translate-y-1/2 hidden md:block">
            <button onClick={scrollNext} className="p-4 bg-background/80 hover:bg-primary hover:text-primary-foreground backdrop-blur-md border border-border transition-all duration-300 group">
              <ChevronRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="embla overflow-visible" ref={emblaRef}>
            <div className="embla__container flex cursor-grab active:cursor-grabbing">
              {galleryImages.map((item, index) => (
                <div 
                  key={`${activeSection}-${index}`} 
                  className="embla__slide embla-slide-custom flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_22%] min-w-0 pr-6 relative group"
                  onClick={() => openLightbox(item.src, item.name, item.description)}
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-card border border-border/50 rounded-xl shadow-lg">
                    {/* Image with zoom effect */}
                    <img
                      src={item.src}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                      loading="lazy"
                    />
                    
                    {/* Elegant overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                      <span className="text-primary tracking-[0.2em] text-xs font-bold uppercase mb-3 inline-block">
                        {item.category}
                      </span>
                      <h4 className="text-white font-serif text-3xl mb-3 drop-shadow-md">{item.name}</h4>
                      <div className="w-8 h-0.5 bg-primary/80 mb-4"></div>
                      <p className="text-white/80 text-sm line-clamp-3 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Hover icon */}
                    <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modern Luxury Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-background/98 backdrop-blur-xl z-50 flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-4 text-foreground/50 hover:text-foreground hover:bg-muted transition-all duration-300 z-50"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative w-full max-w-7xl h-full max-h-[85vh] flex flex-col md:flex-row gap-8 items-center" onClick={(e) => e.stopPropagation()}>
            {/* Image Container */}
            <div className="w-full md:w-2/3 h-[50vh] md:h-full relative overflow-hidden bg-muted/20 border border-border/50 flex items-center justify-center p-4">
              <img
                src={lightboxImage}
                alt={lightboxTitle}
                className="max-w-full max-h-full object-contain animate-in zoom-in-95 duration-500"
              />
            </div>
            
            {/* Minimalist Info Panel */}
            <div className="w-full md:w-1/3 flex flex-col justify-center animate-in slide-in-from-right-8 duration-700 delay-100">
              <h3 className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight">{lightboxTitle}</h3>
              <div className="w-12 h-1 bg-primary mb-6"></div>
              {lightboxDescription && (
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  {lightboxDescription}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;