import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wifi, Phone, Monitor, Shield, Zap, HeadphonesIcon } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Phone,
      title: "Inbound Call Centers",
      description: "Professional inbound customer service solutions handling customer inquiries, support, and order processing with excellence.",
      features: ["Customer Support", "Order Processing", "Technical Helpdesk"]
    },
    {
      icon: HeadphonesIcon,
      title: "Outbound Call Centers",
      description: "Strategic outbound calling campaigns for lead generation, sales, market research, and customer retention programs.",
      features: ["Lead Generation", "Sales Campaigns", "Market Research"]
    },
    {
      icon: Monitor,
      title: "Voice Based Solutions",
      description: "Specialized voice-based contact center services leveraging Mumbai's cost-effective, high-quality operational advantages.",
      features: ["Voice Solutions", "Cost Effective", "Quality Operations"]
    },
    {
      icon: Shield,
      title: "Fortune Client Experience",
      description: "Proven track record serving Fortune clients with world-class competencies and continuous value delivery.",
      features: ["Fortune Clients", "Proven Results", "World Class Service"]
    },
    {
      icon: Zap,
      title: "Business Process Outsourcing",
      description: "Comprehensive BPO solutions backed by experienced management team and 10+ years of industry expertise.",
      features: ["BPO Services", "Experienced Team", "Industry Expertise"]
    },
    {
      icon: Wifi,
      title: "Custom Solutions",
      description: "Tailored contact center solutions designed to meet specific business requirements and operational needs.",
      features: ["Custom Development", "Scalable Solutions", "Business Integration"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive contact center solutions designed to deliver world-class competencies 
            with proven experience serving Fortune clients from our Mumbai operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;