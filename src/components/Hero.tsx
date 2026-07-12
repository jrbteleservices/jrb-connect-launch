import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-telecom.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Telecommunications Network" 
          className="w-full h-full object-cover object-center opacity-30 sm:opacity-25 md:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero/85 sm:bg-gradient-hero/80"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                World Class
                <span className="block bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
                  Contact Center
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-xl">
                Pioneer in Voice Based Contact Center operating from Mumbai, India. 
                Delivering world-class competencies with Fortune clients for over 10 years.
              </p>
            </div>
            
            <div className="space-y-2.5 sm:space-y-3">
              {[
                "Voice Based Contact Center Solutions",
                "Fortune Client Experience",
                "Mumbai-Based Quality Operations"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm sm:text-base text-white/90">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild variant="hero" size="xl" className="group w-full sm:w-auto">
                <a href="#contact">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline-hero" size="xl" className="w-full sm:w-auto">
                <a href="#services">View Services</a>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary/20 rounded-2xl blur-3xl transform rotate-6"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose JRB?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="text-white/90">10+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary-glow rounded-full"></div>
                    <span className="text-white/90">Fortune Client Portfolio</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="text-white/90">Mumbai Cost Advantage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;