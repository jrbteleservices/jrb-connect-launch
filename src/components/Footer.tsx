import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/jrb-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={logo} alt="JRB Tele Services logo" className="h-24 w-auto object-contain rounded-md bg-white p-2" />
            </div>
            <p className="text-white/80 leading-relaxed">
              Pioneer in Voice Based Contact Centers operating from Mumbai, India. 
              Serving Fortune clients with world-class competencies for over 10 years.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Inbound Call Centers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Outbound Call Centers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Voice Based Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">BPO Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>+91 9766724740</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>info@jrbteleservices.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Vasai, Mumbai<br />Maharashtra 401202, India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 JRB Tele Services Pvt Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;