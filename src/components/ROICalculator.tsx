import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { TrendingDown, Users, Zap } from "lucide-react";

const fmt = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: 0 });

const ROICalculator = () => {
  const [leads, setLeads] = useState<number[]>([1500]);
  const [agents, setAgents] = useState<number[]>([8]);

  const numbers = useMemo(() => {
    const monthlyLeads = leads[0];
    const agentCount = agents[0];
    const inhouseCost = agentCount * 4200 + monthlyLeads * 1.2; // USD baseline
    const jrbCost = agentCount * 1850 + monthlyLeads * 0.55;
    const savings = Math.max(0, inhouseCost - jrbCost);
    const savingsPct = inhouseCost ? Math.round((savings / inhouseCost) * 100) : 0;
    const pipelineLift = Math.round(monthlyLeads * 0.24);
    return { inhouseCost, jrbCost, savings, savingsPct, pipelineLift };
  }, [leads, agents]);

  return (
    <section id="roi" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">ROI Calculator</span>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            See your <span className="text-gradient">Hybrid Human + AI</span> savings in seconds.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Move the sliders to your current volume. We benchmark JRB's blended human + AI delivery model against a fully in-house team.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 glass p-6 sm:p-8 space-y-8">
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-foreground/90">Current monthly leads / conversations</label>
                <span className="font-display text-xl font-bold text-accent">{fmt(leads[0])}</span>
              </div>
              <Slider value={leads} onValueChange={setLeads} min={200} max={20000} step={100} />
            </div>
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-foreground/90">Agents / SDRs currently deployed</label>
                <span className="font-display text-xl font-bold text-accent">{agents[0]}</span>
              </div>
              <Slider value={agents} onValueChange={setAgents} min={1} max={100} step={1} />
            </div>
            <div className="grid sm:grid-cols-3 gap-3 pt-2">
              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">In-house / month</div>
                <div className="font-display text-2xl font-bold text-foreground mt-1">${fmt(numbers.inhouseCost)}</div>
              </div>
              <div className="rounded-2xl bg-primary/10 border border-primary/25 p-4">
                <div className="text-xs uppercase tracking-widest text-primary-glow">With JRB / month</div>
                <div className="font-display text-2xl font-bold text-foreground mt-1">${fmt(numbers.jrbCost)}</div>
              </div>
              <div className="rounded-2xl bg-accent/10 border border-accent/30 p-4">
                <div className="text-xs uppercase tracking-widest text-accent">You save</div>
                <div className="font-display text-2xl font-bold text-foreground mt-1">{numbers.savingsPct}%</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: TrendingDown, t: `$${fmt(numbers.savings)}`, s: "Estimated monthly savings" },
              { icon: Zap, t: `+${fmt(numbers.pipelineLift)}`, s: "Additional qualified pipeline / mo" },
              { icon: Users, t: "24 / 7", s: "Blended human + AI coverage" },
            ].map((m) => (
              <div key={m.s} className="glass glass-hover p-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center">
                  <m.icon className="w-5 h-5 text-primary-glow" />
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-foreground">{m.t}</div>
                  <div className="text-xs text-muted-foreground">{m.s}</div>
                </div>
              </div>
            ))}
            <Button asChild variant="cta" size="lg" className="w-full btn-aura">
              <a href="#contact">Lock in these numbers →</a>
            </Button>
            <p className="text-xs text-muted-foreground text-center">Directional benchmark based on JRB delivery data. Final pricing tailored per engagement.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;