import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wifi, Phone, Monitor, Shield, Zap, HeadphonesIcon } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Lightning-fast fiber optic internet connections with speeds up to 1Gbps for seamless browsing and streaming.",
      features: ["Fiber Optic Technology", "24/7 Monitoring", "Scalable Bandwidth"]
    },
    {
      icon: Phone,
      title: "Voice Solutions",
      description: "Crystal-clear voice communication systems designed for modern businesses and residential needs.",
      features: ["VoIP Integration", "Call Management", "Multi-line Support"]
    },
    {
      icon: Monitor,
      title: "Digital TV Services",
      description: "Premium digital television packages with HD channels and on-demand content.",
      features: ["HD Quality", "Multiple Packages", "On-Demand Content"]
    },
    {
      icon: Shield,
      title: "Network Security",
      description: "Advanced cybersecurity solutions to protect your data and ensure secure communications.",
      features: ["Firewall Protection", "Threat Detection", "Data Encryption"]
    },
    {
      icon: Zap,
      title: "Enterprise Solutions",
      description: "Comprehensive telecommunications infrastructure for businesses of all sizes.",
      features: ["Custom Solutions", "Dedicated Support", "SLA Guarantee"]
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock technical support to ensure your services run smoothly.",
      features: ["Technical Assistance", "Remote Troubleshooting", "Emergency Response"]
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
            Comprehensive telecommunications solutions designed to meet your connectivity needs 
            with cutting-edge technology and exceptional service quality.
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