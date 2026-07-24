import { Globe2 } from "lucide-react";

const regions = [
  { code: "AU", name: "Australia", note: "Lead Generation Australia" },
  { code: "US", name: "United States", note: "Nationwide outbound" },
  { code: "UK", name: "United Kingdom", note: "London hub coverage" },
  { code: "CA", name: "Canada", note: "Toronto & Vancouver" },
  { code: "NZ", name: "New Zealand", note: "Auckland region" },
  { code: "IN", name: "India", note: "HQ · Mumbai" },
];

const GlobalReach = () => {
  return (
    <section id="global" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">Global Reach</span>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            One partner. <span className="text-gradient">Six markets</span>. Zero excuses.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            We run outbound and growth campaigns across six English-speaking markets from a single, timezone-agile operations floor in Mumbai.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {regions.map((r) => (
            <div key={r.code} className="group glass glass-hover p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-xs font-bold tracking-widest text-accent">{r.code}</span>
                <Globe2 className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <div className="font-semibold text-foreground">{r.name}</div>
              <div className="text-xs text-muted-foreground mt-1">{r.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;