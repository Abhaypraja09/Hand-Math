import React from 'react';
import ServicesGrid from '../sections/Services'; // Reuse the home grid but maybe with more info
import { motion } from 'framer-motion';

const ServicesPage = () => {
  return (
    <div className="pt-32 bg-offwhite min-h-screen">
      <section className="container mx-auto px-6 mb-12">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6 text-navy"
          >
            Our <span className="text-electric">Specializations</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-navy/60"
          >
            We offer a wide range of IT services designed to help your business stay ahead in the digital age.
          </motion.p>
        </div>
      </section>
      
      <ServicesGrid />

      {/* Pricing/Packages section */}
      <section className="py-24 bg-white border-t border-black/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4 text-navy">Service Packages</h2>
            <p className="text-navy/60">Choose the right plan for your business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Starter', price: '₹49,999', features: ['Basic Website', 'Local SEO', '5 Social Posts', '1 Email Account'] },
              { name: 'Professional', price: '₹1,24,999', features: ['Custom App', 'Full SEO', 'Daily Social Posts', 'AWS Hosting', '24/7 Support'], highlight: true },
              { name: 'Enterprise', price: 'Contact Us', features: ['SaaS Development', 'Cloud Migration', 'Security Audit', 'Dedicated Team', 'Custom Strategy'] }
            ].map((pkg, i) => (
              <div key={i} className={cn(
                "bg-offwhite p-10 rounded-3xl border flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 shadow-sm",
                pkg.highlight ? "border-electric shadow-xl" : "border-black/5"
              )}>
                <h3 className="text-2xl font-heading font-bold mb-2 text-navy">{pkg.name}</h3>
                <div className="text-4xl font-bold text-electric mb-8">{pkg.price}</div>
                <ul className="space-y-4 mb-10 text-navy/60 w-full">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center justify-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={pkg.highlight ? "btn-primary w-full" : "btn-outline w-full"}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

export default ServicesPage;
