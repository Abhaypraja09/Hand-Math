import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-black/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <RouterLink to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-navy flex items-center justify-center rounded-lg">
                <span className="text-white font-bold text-xl font-heading">HM</span>
              </div>
              <span className="text-xl font-heading font-bold text-navy">
                Hand Math <span className="text-electric">IT</span>
              </span>
            </RouterLink>
            <p className="text-navy/50 mb-8 max-w-xs">
              Solving Complex Problems with Smart Technology. A premium IT partner for your digital transformation journey.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-navy/50 hover:text-electric hover:border-electric transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-navy/50 hover:text-electric hover:border-electric transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-navy/50 hover:text-electric hover:border-electric transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-navy/50 hover:text-electric hover:border-electric transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-navy mb-8 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><RouterLink to="/" className="text-navy/50 hover:text-electric transition-colors flex items-center gap-2">Home</RouterLink></li>
              <li><RouterLink to="/about" className="text-navy/50 hover:text-electric transition-colors flex items-center gap-2">About Us</RouterLink></li>
              <li><RouterLink to="/portfolio" className="text-navy/50 hover:text-electric transition-colors flex items-center gap-2">Portfolio</RouterLink></li>
              <li><RouterLink to="/blog" className="text-navy/50 hover:text-electric transition-colors flex items-center gap-2">Blog</RouterLink></li>
              <li><RouterLink to="/contact" className="text-navy/50 hover:text-electric transition-colors flex items-center gap-2">Contact</RouterLink></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-navy mb-8 text-lg">Services</h4>
            <ul className="space-y-4">
              <li><RouterLink to="/services/software-solutions" className="text-navy/50 hover:text-electric transition-colors">Software Solutions</RouterLink></li>
              <li><RouterLink to="/services/mobile-app-dev" className="text-navy/50 hover:text-electric transition-colors">Mobile Development</RouterLink></li>
              <li><RouterLink to="/services/digital-marketing" className="text-navy/50 hover:text-electric transition-colors">Digital Marketing</RouterLink></li>
              <li><RouterLink to="/services/cloud-services" className="text-navy/50 hover:text-electric transition-colors">Cloud Services</RouterLink></li>
              <li><RouterLink to="/services/cybersecurity" className="text-navy/50 hover:text-electric transition-colors">Cybersecurity</RouterLink></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-navy mb-8 text-lg">Newsletter</h4>
            <p className="text-navy/50 mb-6 text-sm">
              Subscribe to get the latest tech insights and company updates.
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your email"
                className="w-full bg-black/5 border border-black/5 rounded-full px-6 py-4 outline-none focus:border-electric transition-all text-navy"
              />
              <button className="absolute right-2 top-2 bottom-2 w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center hover:scale-110 transition-transform">
                <ArrowUpRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-navy/30 text-sm">
            © {currentYear} Hand Math IT Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-8">
            <RouterLink to="/privacy" className="text-navy/30 text-sm hover:text-navy transition-colors">Privacy Policy</RouterLink>
            <RouterLink to="/terms" className="text-navy/30 text-sm hover:text-navy transition-colors">Terms of Service</RouterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
