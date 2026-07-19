import { Award, Users, Clock, TrendingUp } from "lucide-react";
import aboutVideo from "@/assets/about-callcenter.mp4.asset.json";

const About = () => {
  const stats = [
    { icon: Users, label: "Global Clients", value: "Fortune-tier" },
    { icon: Clock, label: "Years in Business", value: "10+" },
    { icon: Award, label: "Service Grade", value: "World Class" },
    { icon: TrendingUp, label: "Team Size", value: "25+" },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-secondary/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-cta uppercase">About JRB</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
              A Mumbai-built engine for global B2B growth.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              JRB Tele Services Pvt Ltd is a pioneer in voice-based contact centers, operating from the low-cost, high-quality talent hub of Mumbai, India since 2015.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We've earned world-class competencies working with Fortune clients for over a decade — backed by an experienced management team that treats your pipeline like their own.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-card border border-border p-5 shadow-card">
                  <s.icon className="w-5 h-5 text-primary mb-2" />
                  <div className="text-2xl font-bold text-foreground">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/15 rounded-3xl blur-3xl" aria-hidden />
            <video
              src={aboutVideo.url}
              autoPlay loop muted playsInline
              className="relative w-full rounded-3xl shadow-elegant"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;