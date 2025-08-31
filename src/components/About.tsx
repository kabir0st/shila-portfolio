import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Award, Utensils, Languages } from "lucide-react";

const About = () => {
  const experiences = [
    {
      title: "Assistant Kitchen Manager",
      restaurant: "Kantipur Hotel Training Center",
      location: "Pokhara, Nepal",
      period: "May 2025 - Aug 2025",
      achievements: [
        "Completed internship in Special Sushi preparation",
        "Gained hands-on experience in sushi making and kitchen coordination",
        "Maintained food hygiene and safety standards",
        "Assisted in managing daily kitchen operations to support team efficiency",
        "Ensured high-quality food presentation and customer satisfaction"
      ]
    },
    {
      title: "Financial Accountant",
      restaurant: "Siddhartha Lovedale Boarding School",
      location: "Pokhara, Nepal", 
      period: "Apr 2020 - Apr 2023",
      achievements: [
        "Managed financial operations, including daily transactions and billing",
        "Oversaw expense tracking and audit preparation",
        "Digitized financial documents in both Nepali and English",
        "Maintained accurate financial records for compliance",
        "Supported client relations and customer service operations"
      ]
    },
    {
      title: "Store Manager",
      restaurant: "Friends Gifts Shop and Fancy Store",
      location: "Pokhara, Nepal",
      period: "Aug 2018 - Mar 2020",
      achievements: [
        "Managed front-desk operations and financial activities",
        "Handled day-to-day business transactions and ledger entries",
        "Supported cash flow management and financial operations",
        "Provided exceptional customer service at reception",
        "Coordinated with accounting team to streamline operations"
      ]
    }
  ];

  const skills = [
    "Japanese Cuisine", "Sushi Preparation", "Coffee Brewing", "Latte Art", 
    "Espresso Preparation", "Oven Pizza Making", "Health & Safety Practices",
    "Team Management", "Microsoft Office", "Accounting", "Social Media",
    "Organizational Planning", "Customer Service", "Financial Management"
  ];

  const certifications = [
    "Master's in Business Studies - Tribhuvan University (2023-2025)",
    "Bachelor of Business Studies - Tribhuvan University (2016-2020)",
    "Sushi Specialistic Training - Kantipur Hotel Training Center",
    "Certificate of Barista Training Completion - Coffee Demy",
    "Accounting Package Tally and Computing - Quality Multi Training Centre"
  ];

  const languages = [
    { language: "Nepali", level: "Native" },
    { language: "Hindi", level: "C2 Proficient" },
    { language: "English", level: "B2 Independent" },
    { language: "Swedish", level: "A2 Basic" }
  ];

  return (
    <section className="py-20 bg-card" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About Shila Bhujel
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate culinary professional with expertise in Japanese cuisine and sushi preparation, 
            combined with strong business acumen. My journey spans from specialized culinary training in 
            Nepal to developing skills in barista arts, while maintaining excellence in financial management 
            and team leadership. Currently based in Gothenburg, Sweden, I bring a unique blend of Eastern 
            culinary traditions with modern business practices.
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

        {/* Languages */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-primary mb-10 text-center flex items-center justify-center">
            <Languages className="w-8 h-8 mr-3 text-accent" />
            Languages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {languages.map((lang, index) => (
              <Card key={index} className="text-center hover:shadow-warm transition-all duration-300 bg-gradient-warm">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-primary mb-2">{lang.language}</h4>
                  <Badge variant="outline" className="text-accent border-accent">
                    {lang.level}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;