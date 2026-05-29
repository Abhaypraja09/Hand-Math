import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronRight, ChevronDown, 
  ShieldCheck, Receipt, Package, Globe, Smartphone, Sparkles, MessageSquare, ArrowRight, Truck
} from 'lucide-react';
import { cn } from '../utils/cn';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Framer Motion Variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 400, damping: 30, mass: 0.8, staggerChildren: 0.05 }
    },
    exit: { opacity: 0, y: 10, scale: 0.95, filter: 'blur(5px)', transition: { duration: 0.2, ease: "easeIn" } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }
  };

  const navLinks = [
    { name: 'About Us', path: '/about' },
    {
      name: 'Products',
      path: '/products',
      isDropdown: true,
      type: 'mega',
      featured: {
        name: 'LogKaro CRM',
        path: '/logkaro',
        desc: 'Flagship Fleet CRM for modern businesses.',
        icon: Truck,
        badge: 'NEW',
        cta: 'Explore Product'
      },
      items: [
        { name: 'Billing Software', path: '/billing-software', desc: 'Streamline invoicing and payments.', icon: Receipt },
        { name: 'Inventory Software', path: '/inventory-software', desc: 'Real-time stock tracking and analytics.', icon: Package },
      ]
    },
    {
      name: 'Services',
      path: '/services',
      isDropdown: true,
      type: 'mega',
      featured: {
        name: 'Enterprise IT',
        path: '/services',
        desc: 'End-to-end managed infrastructure & technical support.',
        icon: ShieldCheck,
        badge: 'CORE',
        cta: 'View All Services'
      },
      items: [
        { name: 'Web Development', path: '/services/web-development', icon: Globe, desc: 'High-performance scalable websites.' },
        { name: 'App Development', path: '/services/app-development', icon: Smartphone, desc: 'Native iOS and Android apps.' },
        { name: 'AI Automation', path: '/services/ai-automation', icon: Sparkles, desc: 'Next-gen workflow automation.' },
      ]
    },
    {
      name: 'Portfolio',
      path: '/portfolio',
      isDropdown: true,
      type: 'mega',
      featured: {
        name: 'Success Stories',
        path: '/portfolio',
        desc: 'See how we scale businesses globally with custom solutions.',
        icon: Globe,
        badge: 'CASE STUDIES',
        cta: 'View Portfolio'
      },
      items: [
        { name: 'Logistics Tech', path: '/portfolio?filter=logistics', icon: Truck, desc: 'Transforming fleet operations.' },
        { name: 'Enterprise ERP', path: '/portfolio?filter=erp', icon: Package, desc: 'Complex system integrations.' },
        { name: 'FinTech Solutions', path: '/portfolio?filter=fintech', icon: Receipt, desc: 'Secure financial platforms.' },
      ]
    },
    { name: 'Contact Us', path: '/contact' },
  ];

  const toggleMobileDropdown = (name) => {
    setMobileDropdownOpen(mobileDropdownOpen === name ? null : name);
  };

  let timeoutId = null;

  const handleMouseEnter = (name) => {
    if (timeoutId) clearTimeout(timeoutId);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // Slight delay for smooth UX
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 pointer-events-none px-4 sm:px-6 lg:px-8 pt-6 transition-all duration-500">
      <nav
        className={cn(
          "mx-auto w-full max-w-7xl pointer-events-auto transition-all duration-500 rounded-full",
          isScrolled 
            ? "bg-white/95 backdrop-blur-2xl border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-3 px-6 sm:px-8 lg:px-10" 
            : "bg-white/90 backdrop-blur-xl border border-black/5 shadow-md py-4 px-6 sm:px-8 lg:px-10"
        )}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <RouterLink to="/" className="flex items-center group relative z-50 mix-blend-multiply">
            <img src="/logo.png" alt="Hand Math Technologies" className="h-[50px] md:h-[60px] w-auto object-contain origin-left group-hover:scale-105 transition-transform duration-300" />
          </RouterLink>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.isDropdown && handleMouseEnter(link.name)}
              onMouseLeave={() => link.isDropdown && handleMouseLeave()}
            >
              <RouterLink
                to={link.path || '#'}
                className={cn(
                  "relative px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 rounded-full rounded-2xl",
                  location.pathname === link.path || (link.isDropdown && activeDropdown === link.name) 
                    ? "text-navy bg-white shadow-sm" 
                    : "text-navy/70 hover:text-navy hover:bg-black/5"
                )}
              >
                {link.name}
                {link.isDropdown && (
                  <ChevronDown size={14} className={cn("transition-transform duration-300 opacity-60", activeDropdown === link.name && "rotate-180")} />
                )}
              </RouterLink>

              {/* Desktop Dropdowns */}
              {link.isDropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className={cn(
                        "absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-2xl rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/40 overflow-hidden z-50",
                        link.type === 'mega' ? "w-[700px]" : "w-[340px]"
                      )}
                    >
                      {link.type === 'mega' ? (
                        /* MEGA MENU (Products) */
                        <div className="grid grid-cols-12 gap-0">
                          {/* Left: Featured Product */}
                          <div className="col-span-5 relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-electric p-8 text-white flex flex-col justify-between group">
                            {/* Animated Background Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700" />
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl -ml-10 -mb-10 group-hover:scale-150 transition-transform duration-700" />
                            
                            <div className="relative z-10 flex flex-col items-start h-full">
                              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20 mb-6 shadow-sm">
                                {link.featured.badge}
                              </span>
                              
                              <motion.div 
                                animate={{ y: [0, -8, 0] }} 
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 mb-6 shadow-xl"
                              >
                                <link.featured.icon size={32} className="text-white drop-shadow-md" />
                              </motion.div>
                              
                              <h4 className="text-2xl font-bold font-heading mb-2 drop-shadow-sm">{link.featured.name}</h4>
                              <p className="text-white/80 text-sm leading-relaxed mb-8">{link.featured.desc}</p>
                              
                              <RouterLink 
                                to={link.featured.path} 
                                onClick={() => setActiveDropdown(null)}
                                className="mt-auto inline-flex items-center gap-2 bg-white text-electric px-5 py-2.5 rounded-full font-bold text-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300"
                              >
                                {link.featured.cta} <ArrowRight size={16} />
                              </RouterLink>
                            </div>
                          </div>
                          
                          {/* Right: Other Products */}
                          <div className="col-span-7 p-6 bg-white flex flex-col gap-2">
                            <span className="text-xs font-bold text-navy/40 uppercase tracking-wider px-3 pb-2 block">More Products</span>
                            {link.items.map((item, idx) => (
                              <motion.div key={item.name} variants={itemVariants}>
                                <RouterLink
                                  to={item.path}
                                  onClick={() => setActiveDropdown(null)}
                                  className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-black/5 transition-colors"
                                >
                                  <div className="w-12 h-12 rounded-xl bg-electric/10 text-electric flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-electric group-hover:text-white transition-all duration-300 shadow-sm">
                                    <item.icon size={22} />
                                  </div>
                                  <div className="flex flex-col flex-1">
                                    <div className="flex items-center justify-between">
                                      <span className="font-bold text-navy group-hover:text-electric transition-colors">{item.name}</span>
                                      <ChevronRight size={16} className="text-navy/30 group-hover:text-electric group-hover:translate-x-1 transition-all" />
                                    </div>
                                    <span className="text-sm text-navy/60 mt-1">{item.desc}</span>
                                  </div>
                                </RouterLink>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        /* SIMPLE DROPDOWN (Services) */
                        <div className="p-4 flex flex-col gap-1 bg-white">
                           <span className="text-xs font-bold text-navy/40 uppercase tracking-wider px-3 pb-2 pt-1 block">Our Services</span>
                          {link.items.map((item) => (
                            <motion.div key={item.name} variants={itemVariants}>
                              <RouterLink
                                to={item.path}
                                onClick={() => setActiveDropdown(null)}
                                className="group flex items-center gap-4 p-3 rounded-xl hover:bg-black/5 transition-all"
                              >
                                <div className="w-10 h-10 rounded-lg bg-black/5 text-navy/70 flex items-center justify-center group-hover:bg-electric/10 group-hover:text-electric transition-colors">
                                  <item.icon size={20} />
                                </div>
                                <div className="flex flex-col">
                                  <span className="font-bold text-sm text-navy group-hover:text-electric transition-colors">{item.name}</span>
                                  <span className="text-xs text-navy/50">{item.desc}</span>
                                </div>
                              </RouterLink>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <RouterLink to="/contact" className="btn-primary flex items-center gap-2 group px-6 py-2.5 shadow-lg shadow-electric/20 hover:shadow-electric/40 transition-all rounded-full">
            Get Consultation
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </RouterLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 bg-black/5 rounded-full text-navy hover:bg-black/10 transition-colors z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-black/10 shadow-2xl overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-black/5 pb-4 last:border-0">
                  <div
                    className="flex justify-between items-center cursor-pointer group"
                    onClick={() => link.isDropdown ? toggleMobileDropdown(link.name) : (setIsMobileMenuOpen(false))}
                  >
                    <RouterLink
                      to={link.isDropdown ? (link.path || '#') : link.path}
                      className={cn(
                        "text-xl font-heading font-bold transition-colors flex items-center gap-3",
                        location.pathname === link.path ? "text-electric" : "text-navy"
                      )}
                    >
                      {link.name}
                      {link.type === 'mega' && (
                        <span className="text-[10px] bg-gradient-to-r from-purple-500 to-electric text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                          Hot
                        </span>
                      )}
                    </RouterLink>
                    {link.isDropdown && (
                      <div className={cn("p-2 rounded-full bg-black/5 transition-transform duration-300", mobileDropdownOpen === link.name && "rotate-180 bg-electric/10 text-electric")}>
                        <ChevronDown size={20} />
                      </div>
                    )}
                  </div>
                  
                  {/* Mobile Dropdown Items */}
                  {link.isDropdown && (
                    <AnimatePresence>
                      {mobileDropdownOpen === link.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-3 pt-4 pb-2">
                            {link.type === 'mega' && (
                              <RouterLink
                                to={link.featured.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-purple-100"
                              >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-md">
                                  <link.featured.icon size={24} />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-bold text-navy">{link.featured.name}</span>
                                    <span className="text-[9px] bg-electric text-white px-1.5 py-0.5 rounded font-bold uppercase">{link.featured.badge}</span>
                                  </div>
                                  <span className="text-xs text-navy/60 mt-0.5 block">{link.featured.desc}</span>
                                </div>
                              </RouterLink>
                            )}
                            
                            {link.items.map((item) => (
                              <RouterLink
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-4 p-3 rounded-xl hover:bg-black/5 transition-colors"
                              >
                                <div className="w-10 h-10 rounded-lg bg-black/5 text-navy/60 flex items-center justify-center shrink-0">
                                  <item.icon size={20} />
                                </div>
                                <div className="flex flex-col">
                                  <span className="font-bold text-sm text-navy">{item.name}</span>
                                  {item.desc && <span className="text-xs text-navy/50">{item.desc}</span>}
                                </div>
                              </RouterLink>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
              
              <RouterLink
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary text-center py-4 mt-2 shadow-xl shadow-electric/20 rounded-xl"
              >
                Get IT Consultation
              </RouterLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </div>
  );
};

export default Navbar;
