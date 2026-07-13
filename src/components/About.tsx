import { Card } from "@/components/ui/card";
import { Award, Users, Clock, TrendingUp } from "lucide-react";
import aboutVideo from "@/assets/about-callcenter.mp4.asset.json";

const About = () => {
  const stats = [
    { icon: Users, label: "Fortune Clients", value: "Multiple" },
    { icon: Clock, label: "Years Experience", value: "10+" },
    { icon: Award, label: "Service Quality", value: "World Class" },
    { icon: TrendingUp, label: "Team Size", value: "25+" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                About <span className="bg-gradient-primary bg-clip-text text-transparent">JRB Tele Services</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Welcome to the world of JRB Tele Services - a pioneer in the field of Voice Based Contact Centers 
                operating out of the low-cost, high quality location of Mumbai, India.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2015, JRB Tele Services has obtained "World Class" competencies working with Fortune clients 
                for the past 10 years. With effective solutions that offer continuous value and backed by an able and 
                experienced management team, JRB Tele Services has what it takes to help you in your business.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary/10 rounded-2xl blur-3xl"></div>
            <div className="relative">
              <video
                src={aboutVideo.url}
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl pointer-events-none"></div>
            </div>
            
            <Card className="absolute -bottom-8 -left-8 p-6 bg-white border-border/50 shadow-elegant">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Founded 2015</div>
                  <div className="text-sm text-muted-foreground">Mumbai Based</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;