import { Button } from "@/components/ui/button";
import {
  PhoneOutgoing, CalendarClock, Clock3,
  Palette, Search, Share2, MousePointerClick,
  Mic, LineChart, ArrowRight,
} from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-[0.2em] text-cta uppercase">What we do</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Three pillars. One growth engine.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From qualified outbound conversations to full-funnel digital marketing and proprietary SaaS — everything your revenue team needs, under one roof.
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {/* Pillar 1 — Outbound */}
          <article className="lg:col-span-1 rounded-3xl p-8 bg-gradient-primary text-white shadow-elegant relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/10 rounded-full blur-3xl" aria-hidden />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5">
                <PhoneOutgoing className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Outbound Services</h3>
              <p className="mt-2 text-white/80">Human-led pipeline built by trained SDRs in Mumbai, delivering into your CRM.</p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-center gap-3"><PhoneOutgoing className="w-4 h-4 text-primary-glow" /> B2B Lead Generation</li>
                <li className="flex items-center gap-3"><CalendarClock className="w-4 h-4 text-primary-glow" /> Appointment Setting</li>
                <li className="flex items-center gap-3"><Clock3 className="w-4 h-4 text-primary-glow" /> 24/7 Global Operations</li>
              </ul>
            </div>
          </article>

          {/* Pillar 2 — Digital Marketing */}
          <article className="lg:col-span-1 rounded-3xl p-8 bg-card border border-border shadow-card">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Search className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Digital Marketing</h3>
            <p className="mt-2 text-muted-foreground">Own the search results and social feeds your buyers scroll every day.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {[
                { i: Palette, t: "Web Design & Dev" },
                { i: Search, t: "SEO" },
                { i: Share2, t: "SMM" },
                { i: MousePointerClick, t: "Google Ads" },
              ].map(({ i: Icon, t }) => (
                <div key={t} className="flex items-center gap-2 rounded-xl bg-secondary/60 px-3 py-2.5">
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="font-medium text-foreground">{t}</span>
                </div>
              ))}
            </div>
          </article>

          {/* Pillar 3 — SaaS Solutions */}
          <article className="lg:col-span-1 rounded-3xl p-8 bg-card border border-border shadow-card">
            <div className="w-12 h-12 rounded-xl bg-cta/10 flex items-center justify-center mb-5">
              <LineChart className="w-6 h-6 text-cta" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">SaaS Solutions</h3>
            <p className="mt-2 text-muted-foreground">Software built by call-center operators, for call-center operators.</p>

            <div className="mt-6 space-y-3">
              <div className="rounded-xl border border-border p-4 hover:border-primary transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <Mic className="w-4 h-4 text-primary" />
                  <h4 className="font-semibold text-foreground">VoxFlowNote</h4>
                </div>
                <p className="text-xs text-muted-foreground mb-3">AI voice-note transcription for sales & support teams.</p>
                <Button asChild variant="cta" size="sm" className="w-full">
                  <a href="#contact">Launch VoxFlowNote <ArrowRight className="w-4 h-4" /></a>
                </Button>
              </div>
              <div className="rounded-xl border border-border p-4 hover:border-primary transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <LineChart className="w-4 h-4 text-primary" />
                  <h4 className="font-semibold text-foreground">CallValue</h4>
                </div>
                <p className="text-xs text-muted-foreground mb-3">Real-time call scoring and ROI attribution.</p>
                <Button asChild variant="cta" size="sm" className="w-full">
                  <a href="#contact">Launch CallValue <ArrowRight className="w-4 h-4" /></a>
                </Button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;