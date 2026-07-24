import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles } from "lucide-react";

const metrics = [
  { k: "98%", l: "CSAT Rating" },
  { k: "+240%", l: "B2B Pipeline Growth" },
  { k: "30–50%", l: "Cost Reduction" },
  { k: "24/7", l: "Global Delivery" },
];

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden />
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/20 rounded-full blur-[140px]" aria-hidden />

      <div className="relative container mx-auto px-4 sm:px-6 pt-20 sm:pt-28 pb-24 sm:pb-32">
        <div className="max-w-4xl animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-foreground/80 text-xs sm:text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            Human + AI Hybrid BPO · Est. 2015
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold leading-[1.02] tracking-tight text-foreground">
            Scale operations with{" "}
            <span className="text-gradient">elite human sales teams</span>{" "}
            fused to cutting-edge AI.
          </h1>
          <p className="mt-7 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            JRB Tele Services is the hybrid BPO, digital growth agency, and SaaS engineering house that ambitious brands trust to close pipeline in Australia, the US, UK, Canada, NZ and India.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button asChild variant="cta" size="xl" className="group w-full sm:w-auto btn-aura">
              <a href="#contact">
                Book a 15-Min Strategy Blueprint Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline-light" size="xl" className="w-full sm:w-auto">
              <a href="#playbook">
                <Download className="w-5 h-5" />
                Download Human+AI BPO Playbook
              </a>
            </Button>
          </div>
        </div>

        {/* Trust metric bento strip */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {metrics.map((m, i) => (
            <div
              key={m.l}
              className="glass glass-hover p-5 sm:p-6 animate-fade-up"
              style={{ animationDelay: `${120 + i * 80}ms` }}
            >
              <div className="font-display text-3xl sm:text-4xl font-bold text-gradient leading-none">{m.k}</div>
              <div className="mt-2 text-xs sm:text-sm text-muted-foreground tracking-wide uppercase">{m.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;