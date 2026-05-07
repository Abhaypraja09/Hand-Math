import React from 'react';
import { motion } from 'framer-motion';

const techs = [
  'React', 'Node.js', 'Flutter', 'AWS', 'Firebase', 
  'WordPress', 'Shopify', 'Python', 'MongoDB', 
  'PostgreSQL', 'Docker', 'Figma'
];

const TechStack = () => {
  return (
    <section className="py-20 border-y border-black/5 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex flex-col items-center text-center">
        <h3 className="text-xl font-heading font-bold text-navy/30 tracking-widest uppercase mb-2">
          Technologies We Use
        </h3>
        <div className="w-12 h-1 bg-electric/20 rounded-full" />
      </div>

      <div className="relative flex overflow-x-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap gap-20 items-center"
        >
          {[...techs, ...techs].map((tech, idx) => (
            <div 
              key={idx} 
              className="text-4xl md:text-5xl font-heading font-bold text-navy/5 hover:text-electric/20 transition-colors cursor-default select-none"
            >
              {tech}
            </div>
          ))}
        </motion.div>
        
        {/* Gradient Mask */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white via-transparent to-white" />
      </div>
    </section>
  );
};

export default TechStack;
