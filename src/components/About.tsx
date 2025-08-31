import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Award, Utensils } from "lucide-react";

const About = () => {
  const experiences = [
    {
      title: "Executive Chef",
      restaurant: "Le Petit Gourmet",
      location: "New York, NY",
      period: "2020 - Present",
      achievements: [
        "Michelin Star recipient 2022 & 2023",
        "Increased revenue by 40% through menu innovation",
        "Led team of 25+ culinary professionals"
      ]
    },
    {
      title: "Sous Chef",
      restaurant: "The Golden Spoon",
      location: "San Francisco, CA", 
      period: "2018 - 2020",
      achievements: [
        "James Beard Award nominee",
        "Developed signature tasting menu",
        "Mentored junior chefs and line cooks"
      ]
    },
    {
      title: "Chef de Partie",
      restaurant: "Château Restaurant",
      location: "Paris, France",
      period: "2016 - 2018",
      achievements: [
        "Specialized in French classical cuisine",
        "Worked under Michelin 3-star chef",
        "Mastered advanced culinary techniques"
      ]
    }
  ];

  const skills = [
    "French Cuisine", "Molecular Gastronomy", "Farm-to-Table", "Wine Pairing",
    "Menu Development", "Kitchen Management", "Food Safety", "Pastry Arts",
    "Sustainable Cooking", "International Cuisine", "Food Photography", "Recipe Development"
  ];

  const certifications = [
    "Culinary Institute of America Graduate",
    "ServSafe Certified Manager",
    "Sommelier Level 2 Certification",
    "Sustainable Cuisine Specialist"
  ];

  return (
    <section className="py-20 bg-card" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About Chef Marcus
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With over 15 years of culinary excellence, I've dedicated my career to pushing 
            the boundaries of flavor, presentation, and dining experience. My journey has 
            taken me from classical French kitchens to innovative molecular gastronomy labs.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary mb-10 text-center">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-warm transition-all duration-300 bg-gradient-warm">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-primary mb-2">{exp.title}</h4>
                      <h5 className="text-xl text-accent font-semibold mb-2">{exp.restaurant}</h5>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="mr-4">{exp.location}</span>
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills & Certifications */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-8 flex items-center">
              <Utensils className="w-8 h-8 mr-3 text-accent" />
              Culinary Expertise
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary"
                  className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-primary mb-8 flex items-center">
              <Award className="w-8 h-8 mr-3 text-accent" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-4"></div>
                  <span className="text-muted-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;