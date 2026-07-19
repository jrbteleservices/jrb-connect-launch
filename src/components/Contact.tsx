import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-gradient-hero relative overflow-hidden">
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl" aria-hidden />
      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl text-white">
          <span className="text-xs font-semibold tracking-[0.2em] text-cta uppercase">Get started</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Let's build your pipeline.
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Tell us about your growth targets. We'll come back within one business day with a tailored plan.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Phone, t: "Phone", v: "+91 9766724740" },
              { icon: Mail, t: "Email", v: "info@jrbteleservices.com" },
              { icon: MapPin, t: "HQ", v: "Vasai, Mumbai · Maharashtra 401202, India" },
              { icon: Clock, t: "Hours", v: "24/7 Operations · IST/AEST/EST/GMT" },
            ].map((c) => (
              <div key={c.t} className="glass-dark rounded-2xl p-5 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/60">{c.t}</div>
                    <div className="font-medium mt-1">{c.v}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <form
            className="lg:col-span-3 rounded-3xl bg-white p-6 sm:p-8 shadow-elegant space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-xl font-bold text-foreground">Send us a message</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Full name</label>
                <Input placeholder="Your name" required />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Work email</label>
                <Input type="email" placeholder="you@company.com" required />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
                <Input placeholder="Company name" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Region</label>
                <Input placeholder="Australia, US, UK…" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">What do you need?</label>
              <Textarea rows={4} placeholder="e.g. B2B appointment setting for our Sydney sales team." />
            </div>
            <Button type="submit" variant="cta" size="lg" className="w-full">
              Book my Growth Call
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;