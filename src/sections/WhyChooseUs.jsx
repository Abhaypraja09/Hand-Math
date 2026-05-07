import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Zap, Target, Users, Headphones } from 'lucide-react';

const differentiators = [
  {
    title: "24/7 Support",
    desc: "Rounding the clock technical assistance for your critical business systems.",
    icon: Headphones
  },
  {
    title: "Agile Development",
    desc: "Fast, iterative delivery cycles that keep you involved in every step.",
    icon: Zap
  },
  {
    title: "NDA Protected",
    desc: "Your intellectual property and data are secured with strict legal protection.",
    icon: Shield
  },
  {
    title: "On-Time Delivery",
    desc: "We respect your deadlines and ensure project delivery within the timeline.",
    icon: Clock
  },
  {
    title: "Expert Team",
    desc: "Highly skilled professionals with years of industry-specific experience.",
    icon: Users
  },
  {
    title: "Results Driven",
    desc: "Focused on achieving measurable business outcomes and ROI.",
    icon: Target
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 relative bg-offwhite">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold font-heading font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Why Partner With Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight text-navy"
            >
              Excellence in <br />
              <span className="text-electric">Technology Delivery</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-navy/70 text-lg mb-10"
            >
              Hand Math IT Solutions is more than just a vendor. We are your technology partner, dedicated to solving complex problems with smart, scalable innovations.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {differentiators.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-electric/5 flex items-center justify-center">
                    <item.icon className="text-electric" size={24} />
                  </div>
                  <div>
                    <h4 className="text-navy font-bold mb-1">{item.title}</h4>
                    <p className="text-navy/50 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-2xl overflow-hidden border border-black/5 shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our Team" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-30" />
            </motion.div>
            
            {/* Animated accent */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-electric/20 blur-[80px] rounded-full animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/10 blur-[80px] rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
