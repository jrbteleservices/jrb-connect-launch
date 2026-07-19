import { Button } from "@/components/ui/button";
import logo from "@/assets/jrb-logo.png";

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-xl border-b border-border/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <a href="#top" aria-label="JRB Tele Services — back to top" className="flex items-center shrink-0">
            <img src={logo} alt="JRB Tele Services logo" className="h-16 sm:h-20 w-auto object-contain" />
          </a>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
            <a href="#global" className="text-foreground/80 hover:text-primary transition-colors">Global Reach</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
          </nav>

          <Button asChild variant="cta" size="sm" className="shrink-0">
            <a href="#contact">Book Growth Call</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;