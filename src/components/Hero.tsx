import { Button } from "@/components/ui/button";
import { ChefHat, Award, Users } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import heroImage from "@/assets/another me.jpeg";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.fromTo(".hero-icon", 
      { scale: 0, rotation: -180, opacity: 0 }, 
      { scale: 1, rotation: 0, opacity: 1, duration: 1.2 }
    )
    .fromTo(".hero-text", 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, stagger: 0.2 },
      "-=0.6"
    )
    .fromTo(".hero-p", 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.4"
    )
    .fromTo(".hero-btn", 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
      "-=0.4"
    )
    .fromTo(".hero-stat", 
      { scale: 0.8, opacity: 0, y: 30 }, 
      { scale: 1, opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
      "-=0.4"
    )
    // Image reveal animation
    .fromTo(".hero-image-wrapper",
      { x: 100, opacity: 0, scale: 0.95 },
      { x: 0, opacity: 1, scale: 1, duration: 1.2 },
      "-=1.5"
    );
    
    // Floating background elements
    gsap.to(".bg-shape-1", {
      y: 40,
      x: 30,
      rotation: 15,
      yoyo: true,
      repeat: -1,
      duration: 6,
      ease: "sine.inOut"
    });
    
    gsap.to(".bg-shape-2", {
      y: -50,
      x: -40,
      rotation: -10,
      yoyo: true,
      repeat: -1,
      duration: 8,
      ease: "sine.inOut",
      delay: 1
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 py-12 md:py-20 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Content Area */}
        <div className="w-full lg:w-1/2 text-left">
          <div className="mb-8 inline-flex hero-icon">
            <div className="p-4 rounded-full bg-primary/20 border border-primary/30 shadow-glow backdrop-blur-sm">
              <ChefHat className="w-10 h-10 text-primary" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 hero-text text-foreground tracking-tight leading-[1.1]">
            Shila<br />Bhujel
          </h1>
          
          <div className="w-24 h-1 bg-primary mb-8 hero-text rounded-full"></div>
          
          <h2 className="text-xl md:text-2xl text-primary mb-8 font-semibold hero-text tracking-wide uppercase">
            Culinary Specialist & Business Professional
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl mb-12 leading-relaxed hero-p font-light">
            Specializing in Japanese cuisine and sushi preparation with expertise in coffee arts. 
            Combining culinary passion with business acumen to create exceptional dining experiences 
            and professional service excellence.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-16">
            <Button 
              size="lg" 
              className="hero-btn border-2 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-foreground shadow-lg hover:shadow-primary/30 transition-all duration-300 rounded-none px-8 py-6 text-sm uppercase tracking-widest font-bold"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="hero-btn border-2 border-foreground/20 text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-300 rounded-none bg-transparent px-8 py-6 text-sm uppercase tracking-widest font-bold"
            >
              Contact Me
            </Button>
          </div>
          
          {/* Stats Bar */}
          <div className="flex flex-wrap gap-12 pt-8 border-t border-border/40 max-w-xl">
            <div className="hero-stat flex flex-col">
              <span className="text-4xl font-serif text-foreground mb-1">2+</span>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" /> Experience
              </span>
            </div>
            
            <div className="hero-stat flex flex-col">
              <span className="text-4xl font-serif text-foreground mb-1">4</span>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" /> Languages
              </span>
            </div>
            
            <div className="hero-stat flex flex-col">
              <span className="text-4xl font-serif text-foreground mb-1">3</span>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold flex items-center gap-2">
                <ChefHat className="w-4 h-4 text-primary" /> Specialties
              </span>
            </div>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="w-full lg:w-1/2 hero-image-wrapper relative">
          <div className="relative aspect-[3/4] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-t-full rounded-b-lg border-8 border-card shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay z-10"></div>
            <img 
              src={heroImage} 
              alt="Shila Bhujel - Chef Portrait" 
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Decorative accents */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/50 rounded-full blur-2xl -z-10"></div>
          <div className="absolute top-12 -right-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        </div>
        
      </div>
      
      {/* Global Background decorations */}
      <div className="bg-shape-1 absolute top-1/4 right-[40%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="bg-shape-2 absolute bottom-1/4 left-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default Hero;