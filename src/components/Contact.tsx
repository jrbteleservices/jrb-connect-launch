import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  company: z.string().trim().max(120).optional(),
  region: z.string().trim().max(80).optional(),
  message: z.string().trim().min(5).max(1200),
});

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      region: String(fd.get("region") || ""),
      message: String(fd.get("message") || ""),
    };
    const parsed = schema.safeParse(payload);
    if (!parsed.success) {
      toast({ title: "Please check your inputs", description: parsed.error.issues[0]?.message, variant: "destructive" });
      return;
    }
    setLoading(true);
    // Route into chat_threads as a lead capture record (CRM schema hook).
    const { error } = await supabase.from("chat_threads").insert({
      session_id: crypto.randomUUID(),
      title: `Lead · ${parsed.data.name} · ${parsed.data.company || "—"} · ${parsed.data.region || "Global"} · ${parsed.data.email} · ${parsed.data.message.slice(0, 240)}`,
    });
    setLoading(false);
    if (error) {
      toast({ title: "Something went wrong", description: "Please email info@jrbteleservices.com directly.", variant: "destructive" });
      return;
    }
    setDone(true);
    toast({ title: "Blueprint request received", description: "A JRB strategist will respond within one business day." });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" aria-hidden />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px]" aria-hidden />
      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">Get Started</span>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Book your <span className="text-gradient">15-min Strategy Blueprint</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Tell us about your pipeline goals. A senior JRB strategist responds within one business day with a tailored Human+AI delivery plan and pricing benchmark.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Phone, t: "Direct Line", v: "+91 9766724740" },
              { icon: Mail, t: "Email", v: "info@jrbteleservices.com" },
              { icon: MapPin, t: "Global HQ", v: "Vasai, Mumbai · Maharashtra 401202, India" },
              { icon: Clock, t: "Ops Hours", v: "24/7 · IST · AEST · EST · GMT" },
            ].map((c) => (
              <div key={c.t} className="glass p-5 glass-hover">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.t}</div>
                    <div className="font-medium mt-1 text-foreground">{c.v}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 glass p-6 sm:p-8 space-y-5">
            <h3 className="font-display text-xl font-bold text-foreground">Request your blueprint</h3>
            {done ? (
              <div className="rounded-2xl bg-primary/10 border border-primary/25 p-6 flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground">You're on the list.</div>
                  <p className="text-sm text-muted-foreground mt-1">A JRB strategist will reach out within one business day. Watch for an email from info@jrbteleservices.com.</p>
                </div>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground/90 mb-1.5 block">Full name</label>
                    <Input name="name" placeholder="Priya Kapoor" required maxLength={80} className="bg-white/[0.03] border-white/10 text-foreground placeholder:text-muted-foreground/60" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground/90 mb-1.5 block">Work email</label>
                    <Input name="email" type="email" placeholder="priya@company.com" required maxLength={160} className="bg-white/[0.03] border-white/10 text-foreground placeholder:text-muted-foreground/60" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground/90 mb-1.5 block">Company</label>
                    <Input name="company" placeholder="Company Pty Ltd" maxLength={120} className="bg-white/[0.03] border-white/10 text-foreground placeholder:text-muted-foreground/60" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground/90 mb-1.5 block">Target region</label>
                    <Input name="region" placeholder="Australia, US, UK…" maxLength={80} className="bg-white/[0.03] border-white/10 text-foreground placeholder:text-muted-foreground/60" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground/90 mb-1.5 block">What are you scaling?</label>
                  <Textarea name="message" rows={4} placeholder="e.g. Outbound B2B appointment setting for our Sydney SaaS sales team — need 40 qualified meetings / month." required maxLength={1200} className="bg-white/[0.03] border-white/10 text-foreground placeholder:text-muted-foreground/60" />
                </div>
                <Button type="submit" variant="cta" size="lg" className="w-full btn-aura" disabled={loading}>
                  {loading ? (<><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>) : "Book my 15-min Strategy Call"}
                </Button>
                <p className="text-xs text-muted-foreground text-center">No spam. Your details route into our secure CRM only.</p>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;