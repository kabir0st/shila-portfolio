import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/5 to-secondary/5 border-t border-primary/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Phone */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-4">
            <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center shadow-warm shrink-0">
              <Phone className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-primary text-lg">Phone</h3>
              <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                +46 070 014 1719
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-4">
            <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center shadow-warm shrink-0">
              <Mail className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-primary text-lg">Email</h3>
              <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                sheelabhujel26@gmail.com
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-4">
            <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center shadow-warm shrink-0">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-primary text-lg">Location</h3>
              <p className="text-muted-foreground">
                Gothenburg, Sweden
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-primary/10 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Shila Bhujel. Specializing in Japanese cuisine, sushi preparation, and coffee services.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
