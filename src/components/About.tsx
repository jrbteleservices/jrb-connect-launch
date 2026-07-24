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
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">About JRB</span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              A Mumbai-built engine for <span className="text-gradient">global B2B growth</span>.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              JRB Tele Services Pvt Ltd is a pioneer in voice-based contact centers, operating from the low-cost, high-quality talent hub of Mumbai, India since 2015.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We've earned world-class competencies working with Fortune clients for over a decade — backed by an experienced management team that treats your pipeline like their own.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass glass-hover p-5">
                  <s.icon className="w-5 h-5 text-accent mb-2" />
                  <div className="font-display text-2xl font-bold text-foreground">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-3xl" aria-hidden />
            <div className="relative glass p-2">
              <video
                src={aboutVideo.url}
                autoPlay loop muted playsInline
                className="w-full rounded-[calc(1.25rem-0.25rem)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;