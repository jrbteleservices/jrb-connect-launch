import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import logo from "@/assets/jrb-logo.jpeg";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="JRB Tele Services logo" className="h-20 sm:h-24 w-auto object-contain" />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+91 9766724740</span>
              </div>
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@jrbteleservices.com</span>
              </div>
            </div>
            <Button variant="hero" size="sm">Get Quote</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;