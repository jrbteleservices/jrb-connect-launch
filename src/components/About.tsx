import { Card } from "@/components/ui/card";
import { Award, Users, Clock, TrendingUp } from "lucide-react";
import servicesIcon from "@/assets/services-icon.jpg";

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Customers", value: "10,000+" },
    { icon: Clock, label: "Years Experience", value: "15+" },
    { icon: Award, label: "Network Uptime", value: "99.9%" },
    { icon: TrendingUp, label: "Growth Rate", value: "40%" }
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
                With over 15 years of excellence in telecommunications, JRB Tele Services has been 
                at the forefront of connecting communities and businesses across the region.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We pride ourselves on delivering reliable, high-quality telecommunications solutions 
                that drive growth and innovation. Our commitment to customer satisfaction and 
                technological advancement has made us a trusted partner for thousands of clients.
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
              <img 
                src={servicesIcon} 
                alt="Telecommunications Services" 
                className="w-full rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
            
            <Card className="absolute -bottom-8 -left-8 p-6 bg-white border-border/50 shadow-elegant">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">ISO Certified</div>
                  <div className="text-sm text-muted-foreground">Quality Assured</div>
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