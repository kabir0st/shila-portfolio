import { Button } from "@/components/ui/button";
import { ChefHat, Award, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-warm relative overflow-hidden">
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="section-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="p-4 rounded-full bg-gradient-primary shadow-warm">
              <ChefHat className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 hero-text">
            Chef Marcus
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-primary mb-8 font-light">
            Culinary Artist & Executive Chef
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Creating extraordinary dining experiences through innovative cuisine, 
            passion for excellence, and a commitment to culinary artistry that 
            delights every sense.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Contact Me
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <ChefHat className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Signature Dishes</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;