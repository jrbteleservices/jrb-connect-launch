import { Button } from "@/components/ui/button";
import logo from "@/assets/jrb-logo.png";

const Header = () => {
  return (
    <header className="bg-background/70 backdrop-blur-xl border-b border-white/[0.06] sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <a href="#top" aria-label="JRB Tele Services — back to top" className="flex items-center shrink-0">
            <img src={logo} alt="JRB Tele Services logo" className="h-14 sm:h-16 w-auto object-contain" />
          </a>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="text-foreground/70 hover:text-foreground transition-colors">Services</a>
            <a href="#roi" className="text-foreground/70 hover:text-foreground transition-colors">ROI Calculator</a>
            <a href="#visualizer" className="text-foreground/70 hover:text-foreground transition-colors">Human + AI</a>
            <a href="#global" className="text-foreground/70 hover:text-foreground transition-colors">Global</a>
            <a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">Contact</a>
          </nav>

          <Button asChild variant="cta" size="sm" className="shrink-0 btn-aura">
            <a href="#contact">Book Strategy Call</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;