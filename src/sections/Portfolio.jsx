import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'Web', 'Mobile', 'Marketing'];

const projects = [
  {
    id: 1,
    title: 'FinTech Dashboard',
    category: 'Web',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'HealthTrack App',
    category: 'Mobile',
    tech: ['Flutter', 'Firebase', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Luxury E-commerce',
    category: 'Web',
    tech: ['Shopify', 'Liquid', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'SEO Campaign - Real Estate',
    category: 'Marketing',
    tech: ['SEO', 'Content Strategy'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Social Media Management',
    category: 'Marketing',
    tech: ['Meta Ads', 'Design'],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Industrial ERP System',
    category: 'Web',
    tech: ['React', 'Python', 'AWS'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-electric font-heading font-bold tracking-[0.3em] uppercase text-sm mb-4"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-12 text-navy"
          >
            Case <span className="text-gold">Studies</span>
          </motion.h2>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-8 py-2 rounded-full border transition-all duration-300 font-medium",
                  activeCategory === cat 
                    ? "bg-navy border-navy text-white shadow-lg" 
                    : "border-black/5 text-navy/60 hover:border-navy/50 hover:text-navy"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-electric mb-1 block">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-heading font-bold text-navy">{project.title}</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-electric transition-colors">
                      <ExternalLink size={18} className="group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] px-2 py-1 rounded bg-black/5 text-navy/40 border border-black/5">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full py-3 rounded-lg border border-navy/30 text-navy font-bold hover:bg-navy/5 transition-colors">
                    View Case Study
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

// Helper for classes (already defined in utils/cn but just for safety if used directly)
function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

export default Portfolio;
