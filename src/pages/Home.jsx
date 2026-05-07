import React from 'react';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import WhyChooseUs from '../sections/WhyChooseUs';
import Portfolio from '../sections/Portfolio';
import TechStack from '../sections/TechStack';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Services />
      <WhyChooseUs />
      <TechStack />
      <Portfolio />
      <Testimonials />
      
      {/* Blog Section (Short version for Home) */}
      <section className="py-24 bg-white border-t border-black/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-electric font-heading font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Insights</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy">Latest From <span className="text-gold">Our Blog</span></h2>
            </div>
            <button className="btn-outline">View All Posts</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-6 relative">
                  <img 
                    src={`https://images.unsplash.com/photo-${[
                      '1519389950473-47ba0277781c',
                      '1451187580459-43490279c0fa',
                      '1550751827-4bd374c3f58b'
                    ][i-1]}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt="Blog"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-electric text-white font-bold text-[10px] rounded uppercase">
                    Technology
                  </div>
                </div>
                <span className="text-navy/40 text-sm mb-2 block">May 07, 2026 • 5 min read</span>
                <h3 className="text-xl font-heading font-bold mb-4 text-navy group-hover:text-electric transition-colors">
                  {i === 1 && "The Future of AI in Enterprise Software"}
                  {i === 2 && "How Cloud Migration Impacts Business Scalability"}
                  {i === 3 && "Top 5 Cybersecurity Trends for Indian Businesses"}
                </h3>
                <div className="flex items-center text-electric text-sm font-bold gap-2">
                  Read Article →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </motion.main>
  );
};

export default Home;
