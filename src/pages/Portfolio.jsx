import React from 'react';
import PortfolioGrid from '../sections/Portfolio';
import { motion } from 'framer-motion';

const PortfolioPage = () => {
  return (
    <div className="pt-32">
       <section className="container mx-auto px-6 mb-12">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            Our <span className="text-gold">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-navy/60"
          >
            Explore our latest projects and case studies where we've helped businesses achieve digital excellence.
          </motion.p>
        </div>
      </section>

      <PortfolioGrid />
      
      {/* Client CTA */}
      <section className="py-24 bg-electric/5 border-y border-electric/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Have a vision for your next project?</h2>
          <button className="btn-primary">Let's Build It Together</button>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
