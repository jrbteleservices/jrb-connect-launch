import { Button } from "@/components/ui/button";
import { ArrowRight, Globe2, PhoneCall, TrendingUp, ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero">
      {/* ambient shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary-glow/30 rounded-full blur-3xl" aria-hidden />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-cta/20 rounded-full blur-3xl" aria-hidden />

      <div className="relative container mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-20 sm:pb-28">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-white/90 text-xs sm:text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
            Trusted B2B Partner · Since 2015
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
            Global B2B Lead Gen{" "}
            <span className="bg-gradient-to-r from-white via-white to-primary-glow bg-clip-text text-transparent">
              & Growth Partner
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            JRB Tele Services powers pipeline growth for ambitious brands across Australia, the US, UK, Canada, NZ and India — combining outbound expertise, digital marketing and proprietary SaaS.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button asChild variant="cta" size="xl" className="group w-full sm:w-auto">
              <a href="#contact">
                Book a Growth Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline-light" size="xl" className="w-full sm:w-auto">
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>

        {/* Bento stat strip */}
        <div className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {[
            { icon: Globe2, k: "6", l: "Countries Served" },
            { icon: PhoneCall, k: "24/7", l: "Live Operations" },
            { icon: TrendingUp, k: "10+ yrs", l: "Fortune-Client Track Record" },
            { icon: ShieldCheck, k: "ISO-grade", l: "Quality & Compliance" },
          ].map(({ icon: Icon, k, l }) => (
            <div key={l} className="glass-dark rounded-2xl p-4 sm:p-5">
              <Icon className="w-5 h-5 text-primary-glow mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white leading-tight">{k}</div>
              <div className="text-xs sm:text-sm text-white/70 mt-0.5">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;