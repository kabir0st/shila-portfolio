import { useEffect, useState } from "react";

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



const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string>("");
  const [lightboxTitle, setLightboxTitle] = useState<string>("");
  const [lightboxDescription, setLightboxDescription] = useState<string>("");
  const [bentoHoveredIndex, setBentoHoveredIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("culinary");

  // Sushi Rolls Collection - Optimized sizes for better grid filling
  const sushiRolls = [
    { src: dragonRoll, name: "Dragon Roll", description: "A masterpiece roll featuring fresh eel, avocado, and cucumber, topped with thinly sliced avocado resembling dragon scales, drizzled with unagi sauce", category: "Specialty Roll", size: "large" },
    { src: rainbowRoll, name: "Rainbow Roll", description: "Vibrant California roll topped with an array of colorful sashimi including tuna, salmon, yellowtail, and avocado creating a rainbow effect", category: "Specialty Roll", size: "large" },
    { src: philadelphiaRoll, name: "Philadelphia Roll", description: "Classic American-style roll with fresh salmon, cream cheese, and cucumber, delivering a perfect balance of rich and refreshing flavors", category: "Classic Roll", size: "medium" },
    { src: californiaRoll, name: "California Roll", description: "The iconic inside-out roll with imitation crab, avocado, and cucumber, rolled in sesame seeds - a perfect introduction to sushi", category: "Classic Roll", size: "medium" },
    { src: spicyMayuroRoll, name: "Spicy Mayuro Roll", description: "Bold and flavorful roll featuring spicy tuna or salmon with a special mayo-based sauce, topped with masago and scallions for extra heat", category: "Spicy Roll", size: "medium" },
    { src: tunaAvocadoRoll, name: "Tuna Avocado Roll", description: "Simple yet elegant combination of fresh tuna sashimi and creamy avocado, showcasing the pure flavors of premium ingredients", category: "Classic Roll", size: "medium" },
    { src: sakeRoll, name: "Sake Roll", description: "Traditional salmon roll highlighting the rich, buttery flavor of Norwegian salmon with a touch of cucumber for freshness", category: "Classic Roll", size: "small" },
    { src: tekkaMakiRoll, name: "Tekka Maki Roll", description: "Traditional tuna roll - the purest expression of sushi craftsmanship with premium bluefin tuna and perfectly seasoned sushi rice", category: "Traditional", size: "small" },
    { src: yasaiRoll, name: "Yasai Roll", description: "Vegetarian delight featuring fresh seasonal vegetables including cucumber, avocado, and pickled radish, perfect for plant-based diners", category: "Vegetarian", size: "medium" },
    { src: fryTempuraRoll, name: "Tempura Roll", description: "Crispy tempura shrimp roll with avocado and cucumber, topped with tempura flakes and drizzled with spicy mayo and eel sauce", category: "Fried Roll", size: "large" },
    { src: futomakiRoll, name: "Futomaki Roll", description: "Large traditional roll packed with multiple ingredients including tamago, cucumber, pickled radish, and shiitake mushrooms", category: "Traditional", size: "medium" },
    { src: friedRoll, name: "Fried Specialty Roll", description: "Innovative deep-fried roll with a crispy exterior and warm, flavorful filling, served with special dipping sauces", category: "Fried Roll", size: "small" }
  ];

  // Traditional Japanese Dishes - Optimized sizes for better grid filling
  const traditionalDishes = [
    { src: sushi, name: "Premium Sushi Selection", description: "Exquisite assortment of nigiri and sashimi featuring the day's finest fish, expertly crafted with traditional techniques passed down through generations", category: "Sushi", size: "large" },
    { src: nigiri, name: "Nigiri Sushi", description: "Hand-pressed sushi rice topped with premium fish, showcasing the perfect balance of rice temperature, fish quality, and chef's technique", category: "Sushi", size: "medium" },
    { src: temaki, name: "Temaki Hand Rolls", description: "Cone-shaped hand rolls filled with fresh ingredients, wrapped in crispy nori seaweed - the perfect handheld sushi experience", category: "Sushi", size: "medium" },
    { src: temari, name: "Temari Sushi", description: "Beautiful ball-shaped sushi wrapped in colorful ingredients, inspired by traditional Japanese temari balls - as beautiful as it is delicious", category: "Sushi", size: "small" },
    { src: ramen, name: "Authentic Ramen", description: "Rich, complex broth simmered for hours with hand-pulled noodles, tender chashu pork, soft-boiled egg, and traditional toppings", category: "Noodles", size: "large" },
    { src: misoSoup, name: "Traditional Miso Soup", description: "Comforting soup made with fermented soybean paste, wakame seaweed, and silky tofu - the soul of Japanese cuisine", category: "Soup", size: "small" },
    { src: gyoza, name: "Pan-Fried Gyoza", description: "Perfectly crispy bottom, tender steamed top dumplings filled with seasoned pork and vegetables, served with tangy dipping sauce", category: "Appetizer", size: "medium" }
  ];

  // Salads & Appetizers
  const saladsAppetizers = [
    { src: avocadoSalad, name: "Avocado Salad with Ponzu", description: "Fresh mixed greens topped with creamy avocado slices, drizzled with citrusy ponzu sauce and sesame seeds for a light, refreshing start", category: "Salad", size: "medium" },
    { src: kaniSalad, name: "Kani Salad", description: "Delicate crab stick salad mixed with crisp vegetables, cucumber, and creamy Japanese mayo, topped with masago for extra texture", category: "Salad", size: "small" },
    { src: salmonTunaTartare, name: "Salmon Tuna Tartare", description: "Expertly diced premium salmon and tuna seasoned with Asian flavors, served with crispy wonton chips and wasabi aioli", category: "Appetizer", size: "large" }
  ];

  // Western Fusion
  const westernFusion = [
    { src: burgerAndFries, name: "Gourmet Burger & Fries", description: "Juicy wagyu beef burger with artisanal toppings and hand-cut fries, showcasing my versatility beyond traditional Japanese cuisine", category: "Fusion", size: "large" },
    { src: sandwich, name: "Specialty Sandwich", description: "Creative sandwich combining Eastern and Western flavors with premium ingredients and unique preparation techniques", category: "Fusion", size: "medium" }
  ];



  // Certificates
  const certificates = [
    { src: sushiCertificate, name: "Sushi Master Certification", description: "Professional certification in traditional sushi preparation and Japanese culinary techniques", category: "Achievement", size: "medium" },
    { src: basritaCertificate, name: "Barista Certification", description: "Certified in professional coffee preparation and beverage service", category: "Achievement", size: "medium" },
    { src: braisataTraining, name: "Advanced Culinary Training", description: "Specialized training certificate in advanced cooking techniques and kitchen management", category: "Achievement", size: "medium" }
  ];

  // Personal Photos
  const personalPhotos = [
    { src: myPhoto, name: "Chef Portrait", description: "Professional portrait showcasing my dedication to the culinary arts", category: "Personal", size: "medium" },
    { src: anotherMe, name: "Culinary Journey", description: "Capturing a moment in my ongoing culinary journey and professional growth", category: "Personal", size: "medium" },
    { src: ceremonyPhoto, name: "Graduation Ceremony", description: "Celebrating the completion of professional culinary training and certification", category: "Personal", size: "large" }
  ];

  // Combine all collections
  const allCollections = {
    culinary: [...sushiRolls, ...traditionalDishes, ...saladsAppetizers, ...westernFusion],
    certificates: certificates,
    personal: personalPhotos
  };

  const galleryImages = allCollections[activeSection as keyof typeof allCollections] || allCollections.culinary;

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
  const openLightbox = (src: string, title: string, description: string = "") => {
    setLightboxImage(src);
    setLightboxTitle(title);
    setLightboxDescription(description);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage("");
    setLightboxTitle("");
    setLightboxDescription("");
    document.body.style.overflow = 'unset';
  };

  // Optimized bento grid size classes to eliminate wasted space
  const getBentoSizeClass = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-3 row-span-2 md:row-span-2 lg:row-span-2 min-h-[280px] md:min-h-[320px] lg:min-h-[360px]';
      case 'medium':
        return 'col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 row-span-1 md:row-span-1 lg:row-span-2 min-h-[200px] md:min-h-[240px] lg:min-h-[280px]';
      case 'small':
      default:
        return 'col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 row-span-1 md:row-span-1 lg:row-span-1 min-h-[200px] md:min-h-[240px] lg:min-h-[280px]';
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
            My Culinary Journey
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the artistry of my culinary expertise through my dedication, professional achievements, and personal moments. 
            As a chef with a Master's degree in Accounting and Management, I bring both culinary excellence and business leadership to the kitchen.
          </p>
        </div>

        {/* Section Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-card/80 backdrop-blur-sm rounded-full p-2 border border-border/50">
            {[
              { key: 'culinary', label: 'Culinary Creations', icon: '🍣' },
              { key: 'certificates', label: 'Achievements', icon: '🏆' },
              { key: 'personal', label: 'Personal Journey', icon: '👨‍🍳' }
            ].map((section) => (
              <button
                key={section.key}
                onClick={() => setActiveSection(section.key)}
                className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 text-sm font-medium ${
                  activeSection === section.key
                    ? 'bg-primary text-primary-foreground shadow-lg transform scale-105'
                    : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                <span className="text-lg">{section.icon}</span>
                <span className="hidden sm:inline">{section.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Section Description */}
        <div className="text-center mb-12">
          {activeSection === 'culinary' && (
            <div className="animate-in fade-in duration-500">
              <h3 className="text-2xl font-semibold text-primary mb-4">Culinary Creations</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From traditional Japanese sushi rolls to innovative fusion dishes, explore my diverse culinary repertoire 
                featuring premium ingredients and meticulous preparation techniques. Beyond cooking, my management expertise 
                ensures efficient kitchen operations and cost-effective food service delivery.
              </p>
            </div>
          )}
          {activeSection === 'certificates' && (
            <div className="animate-in fade-in duration-500">
              <h3 className="text-2xl font-semibold text-primary mb-4">Professional Achievements</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                My commitment to excellence spans both culinary arts and business management. These professional certifications 
                showcase my culinary expertise, while my Master's degree in Accounting and Management demonstrates my ability 
                to lead teams, manage finances, and optimize restaurant operations.
              </p>
            </div>
          )}
          {activeSection === 'personal' && (
            <div className="animate-in fade-in duration-500">
              <h3 className="text-2xl font-semibold text-primary mb-4">Behind the Scenes</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Glimpses into my personal culinary journey, capturing moments of growth, celebration, 
                and the passion that drives my commitment to the culinary arts. As someone who understands 
                both the creative and business sides of the industry, I'm equipped to excel in any kitchen environment.
              </p>
            </div>
          )}
        </div>

        {/* Optimized Bento Grid - No Wasted Space */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4 lg:gap-4 max-w-7xl mx-auto auto-rows-min">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer ${getBentoSizeClass(item.size)} overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:z-10 hover:shadow-2xl hover:shadow-primary/20`}
              style={{
                animationDelay: `${index * 80}ms`,
              }}
              onMouseEnter={() => setBentoHoveredIndex(index)}
              onMouseLeave={() => setBentoHoveredIndex(null)}
              onClick={() => openLightbox(item.src, item.name, item.description)}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Image */}
              <div className="w-full h-full overflow-hidden">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  loading="lazy"
                  style={{
                    objectPosition: 'center 25%',
                    aspectRatio: 'auto',
                    minHeight: '100%'
                  }}
                />
              </div>
              
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
        <div className="flex justify-center mt-16 space-x-6 md:space-x-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{allCollections.culinary.length}</div>
            <div className="text-sm text-muted-foreground">Culinary Creations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{allCollections.certificates.length}+</div>
            <div className="text-sm text-muted-foreground">Culinary Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">Master's</div>
            <div className="text-sm text-muted-foreground">Business Management</div>
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
            
            {/* Image title and description */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 rounded-b-xl">
              <h3 className="text-white text-xl font-semibold mb-2">{lightboxTitle}</h3>
              {lightboxDescription && (
                <p className="text-white/80 text-sm leading-relaxed max-w-2xl">{lightboxDescription}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;