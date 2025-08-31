import Hero from "@/components/Hero";
import About from "@/components/About";
import RotatingGallery from "@/components/RotatingGallery";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <RotatingGallery />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
