import { Button } from "@/components/ui/button";
import {
  PhoneOutgoing, CalendarClock, Headset, Target,
  Search, Share2, MousePointerClick, TrendingUp,
  Mic, LineChart, ArrowRight, Code2, Workflow, Plug,
} from "lucide-react";

const DefinitionBlock = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-4 text-sm text-muted-foreground leading-relaxed border-l-2 border-accent/50 pl-4 italic">
    {children}
  </p>
);

const MetricPill = ({ label }: { label: string }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium bg-white/[0.04] border border-white/[0.08] text-foreground/80">
    <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {label}
  </span>
);

const Services = () => {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">Three Pillars · One Engine</span>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Everything your revenue team needs, <span className="text-gradient">under one roof</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            From AI-screened outbound conversations to full-funnel growth marketing and custom SaaS engineering — a single operating partner replacing four vendors.
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-6 gap-5 sm:gap-6">
          {/* Pillar 1 — Omnichannel Contact Center (wide) */}
          <article className="lg:col-span-4 glass glass-hover p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" aria-hidden />
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <Headset className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Pillar 01</span>
              </div>
              <h3 className="mt-5 font-display text-2xl sm:text-3xl font-bold text-foreground">
                AI-Powered B2B Appointment Setting & Omnichannel Contact Center
              </h3>
              <DefinitionBlock>
                JRB's Omnichannel Contact Center is a Mumbai-based hybrid delivery unit combining trained human SDRs with an AI screening layer that qualifies inbound and outbound conversations across voice, email, LinkedIn and chat. It powers B2B appointment setting, B2C demo scheduling, telesales, and 24/7 customer support for global enterprises.
              </DefinitionBlock>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { i: PhoneOutgoing, t: "Outbound Telesales & Cold Calling" },
                  { i: CalendarClock, t: "B2B Appointment Setting" },
                  { i: Target, t: "B2C Demo Scheduling" },
                  { i: Headset, t: "24/7 Inbound Support" },
                ].map(({ i: Icon, t }) => (
                  <div key={t} className="flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/[0.06] px-3.5 py-3">
                    <Icon className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm font-medium text-foreground/90">{t}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <MetricPill label="98% CSAT" />
                <MetricPill label="+240% Pipeline" />
                <MetricPill label="24/7 Delivery" />
              </div>
            </div>
          </article>

          {/* Pillar 3 — SaaS (tall right) */}
          <article className="lg:col-span-2 lg:row-span-2 glass glass-hover p-8 relative overflow-hidden">
            <div className="absolute -bottom-24 -left-16 w-64 h-64 bg-accent/15 rounded-full blur-3xl" aria-hidden />
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-accent" />
                </div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Pillar 03</span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
                Outsourced SaaS Development For Global Enterprises
              </h3>
              <DefinitionBlock>
                JRB's SaaS & Web Engineering practice ships full-stack custom software, third-party API integrations and workflow automation for BPO, sales-tech and fintech clients — from architecture through production monitoring.
              </DefinitionBlock>

              <ul className="mt-5 space-y-2.5 text-sm text-foreground/85">
                <li className="flex items-center gap-2"><Code2 className="w-4 h-4 text-accent" /> Full-stack custom development</li>
                <li className="flex items-center gap-2"><Plug className="w-4 h-4 text-accent" /> CRM & telephony API integrations</li>
                <li className="flex items-center gap-2"><Workflow className="w-4 h-4 text-accent" /> Workflow automation & AI agents</li>
              </ul>

              <div className="mt-6 space-y-3">
                <div className="rounded-2xl bg-white/[0.04] border border-white/[0.08] p-4 hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <Mic className="w-4 h-4 text-primary" />
                    <h4 className="font-semibold text-foreground">VoxFlowNote</h4>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">AI voice-note transcription for sales & support teams.</p>
                  <Button asChild variant="cta" size="sm" className="w-full">
                    <a href="https://voxflownote.lovable.app" target="_blank" rel="noopener noreferrer">Launch VoxFlowNote <ArrowRight className="w-4 h-4" /></a>
                  </Button>
                </div>
                <div className="rounded-2xl bg-white/[0.04] border border-white/[0.08] p-4 hover:border-accent/50 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <LineChart className="w-4 h-4 text-accent" />
                    <h4 className="font-semibold text-foreground">CallValue</h4>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">Real-time call scoring and ROI attribution.</p>
                  <Button asChild variant="cta" size="sm" className="w-full">
                    <a href="https://callvalue.lovable.app/" target="_blank" rel="noopener noreferrer">Launch CallValue <ArrowRight className="w-4 h-4" /></a>
                  </Button>
                </div>
              </div>
            </div>
          </article>

          {/* Pillar 2 — Digital Growth Agency (wide) */}
          <article className="lg:col-span-4 glass glass-hover p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary-glow/15 rounded-full blur-3xl" aria-hidden />
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-foreground" />
                </div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Pillar 02</span>
              </div>
              <h3 className="mt-5 font-display text-2xl sm:text-3xl font-bold text-foreground">
                Digital Growth Agency: SEO, Paid Social & Conversion Rate Optimization
              </h3>
              <DefinitionBlock>
                JRB's Digital Growth Agency is a full-funnel performance unit delivering comprehensive SEO, high-ROI social media marketing (SMM), Google Ads management, and conversion rate optimization (CRO) for B2B and DTC brands scaling in Australia, the US and the UK.
              </DefinitionBlock>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { i: Search, t: "Technical SEO" },
                  { i: Share2, t: "Paid Social & SMM" },
                  { i: MousePointerClick, t: "Google Ads" },
                  { i: TrendingUp, t: "CRO & Analytics" },
                ].map(({ i: Icon, t }) => (
                  <div key={t} className="flex flex-col items-start gap-2 rounded-xl bg-white/[0.03] border border-white/[0.06] px-3.5 py-3">
                    <Icon className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-foreground/90">{t}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <MetricPill label="4.3× Avg. ROAS" />
                <MetricPill label="Top-3 SERP in 90 days" />
                <MetricPill label="+62% Conversion Lift" />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;