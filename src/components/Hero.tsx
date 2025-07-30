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
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero/80"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Connect to the
                <span className="block bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
                  Future
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Premium telecommunications services that keep your business connected, 
                secure, and ahead of the competition.
              </p>
            </div>
            
            <div className="space-y-3">
              {[
                "High-Speed Internet Solutions",
                "24/7 Technical Support",
                "Enterprise-Grade Security"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="hero" size="xl" className="group">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline-hero" size="xl">
                View Services
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
                    <span className="text-white/90">99.9% Network Uptime</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary-glow rounded-full"></div>
                    <span className="text-white/90">Fastest Installation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="text-white/90">Competitive Pricing</span>
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