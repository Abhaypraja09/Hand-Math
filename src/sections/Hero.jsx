import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const Hero = () => {
  const stats = [
    { label: 'Projects Done', value: '200+' },
    { label: 'Happy Clients', value: '50+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'IT Services', value: '10+' },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-offwhite">
      {/* Background Particles/Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-electric/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/5 blur-[120px] rounded-full" />
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '50px 50px' }} 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric/30 bg-electric/5 text-electric text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-electric"></span>
            </span>
            Next-Gen IT Solutions for India & Beyond
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading font-bold mb-6 leading-[1.1] text-navy"
          >
            Hand Math <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-navy to-gold">
              IT Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-navy/70 mb-10 max-w-2xl"
          >
            Empowering your business with premium Software Solutions, expert Digital Marketing, and scalable Cloud Infrastructure. Hand Math IT Solutions delivers innovation that drives growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-20"
          >
            <RouterLink to="/services" className="btn-primary w-full sm:w-auto">
              Explore Services
            </RouterLink>
            <RouterLink to="/portfolio" className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2">
              View Portfolio
              <ChevronRight size={20} />
            </RouterLink>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full py-10 border-t border-black/5"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-heading font-bold text-navy mb-2">{stat.value}</span>
                <span className="text-xs uppercase tracking-widest text-electric font-medium">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-[10%] w-12 h-12 border-2 border-electric/30 rounded-lg hidden xl:block"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -15, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-[10%] w-16 h-16 border-2 border-gold/30 rounded-full hidden xl:block"
      />
    </section>
  );
};

export default Hero;
