import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '../utils/cn';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled ? "py-4 glass border-b border-black/5" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <RouterLink to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-navy flex items-center justify-center rounded-lg shadow-lg group-hover:rotate-12 transition-transform duration-300">
            <span className="text-white font-bold text-xl font-heading">HM</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-heading font-bold tracking-tight text-navy group-hover:text-electric transition-colors">
              Hand Math <span className="text-electric">IT</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-navy/50 leading-none">Solutions</span>
          </div>
        </RouterLink>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <RouterLink
              key={link.name}
              to={link.path}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-electric",
                location.pathname === link.path ? "text-electric" : "text-navy/80"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-electric shadow-[0_0_8px_rgba(0,122,255,0.4)]"
                />
              )}
            </RouterLink>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <RouterLink to="/contact" className="btn-primary flex items-center gap-2 group">
            Get Free Consultation
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </RouterLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden transition-colors",
            isScrolled ? "text-navy" : "text-navy"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-b border-black/5 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-10 flex flex-col gap-8">
              {navLinks.map((link) => (
                <RouterLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl font-heading font-bold transition-colors",
                    location.pathname === link.path ? "text-electric" : "text-navy"
                  )}
                >
                  {link.name}
                </RouterLink>
              ))}
              <RouterLink
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary text-center py-4"
              >
                Get Free Consultation
              </RouterLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
