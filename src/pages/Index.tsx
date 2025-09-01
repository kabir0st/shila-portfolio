import Hero from "@/components/Hero";
import About from "@/components/About";
import RotatingGallery from "@/components/RotatingGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <RotatingGallery />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
