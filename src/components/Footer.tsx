import { Phone, Mail, MapPin, Linkedin } from "lucide-react";
import logo from "@/assets/jrb-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[hsl(239_60%_10%)] text-white">
      <div className="container mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4 lg:col-span-1">
            <img src={logo} alt="JRB Tele Services logo" className="h-20 w-auto object-contain rounded-lg bg-white p-2" />
            <p className="text-white/70 text-sm leading-relaxed">
              B2B lead generation, digital marketing and SaaS — engineered in Mumbai, delivered globally.
            </p>
            <a href="#" aria-label="LinkedIn" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>

          <nav aria-label="Services">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">Services</h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li><a href="#services" className="hover:text-white">B2B Lead Generation</a></li>
              <li><a href="#services" className="hover:text-white">Appointment Setting</a></li>
              <li><a href="#services" className="hover:text-white">SEO & Google Ads</a></li>
              <li><a href="#services" className="hover:text-white">VoxFlowNote</a></li>
              <li><a href="#services" className="hover:text-white">CallValue</a></li>
            </ul>
          </nav>

          <nav aria-label="Global Reach">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">Global Reach</h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>Lead Generation Australia</li>
              <li>United States</li>
              <li>United Kingdom</li>
              <li>Canada</li>
              <li>New Zealand</li>
              <li>India</li>
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 9766724740</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@jrbteleservices.com</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5" /> Vasai, Mumbai · Maharashtra 401202, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} JRB Tele Services Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/legal/privacy.html" className="hover:text-white">Privacy</a>
            <a href="/legal/terms.html" className="hover:text-white">Terms</a>
            <a href="/legal/refund.html" className="hover:text-white">Refund</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;