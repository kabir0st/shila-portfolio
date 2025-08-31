import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-card" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Let's Create Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to elevate your dining experience? Whether you're planning a special event,
            looking for culinary consultation, or interested in collaboration, I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-warm mr-4">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-primary">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-warm mr-4">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-primary">Email</p>
                  <p className="text-muted-foreground">marcus@chefmarcus.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-warm mr-4">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-primary">Location</p>
                  <p className="text-muted-foreground">New York, NY</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-bold text-primary mb-4">Follow My Journey</h4>
              <div className="flex space-x-4">
                <Button 
                  size="icon" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button 
                  size="icon" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button 
                  size="icon" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-warm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="John"
                      className="focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe"
                      className="focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Email Address
                  </label>
                  <Input 
                    type="email"
                    placeholder="john.doe@example.com"
                    className="focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Event Type
                  </label>
                  <Input 
                    placeholder="Private Dinner, Catering, Consultation"
                    className="focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your vision and how I can help bring it to life..."
                    rows={5}
                    className="focus:ring-primary focus:border-primary"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-primary hover:shadow-glow transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;