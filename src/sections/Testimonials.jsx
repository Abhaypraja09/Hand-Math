import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "TechNexus India",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "Hand Math IT delivered our ERP system well ahead of schedule. Their attention to detail and understanding of Indian business workflows is unparalleled.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    company: "Global Retail Solutions",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "The SEO and digital marketing campaign handled by them increased our lead generation by 150%. Highly recommended for anyone looking for growth.",
    rating: 5
  },
  {
    name: "Amit Patel",
    company: "Swift Logistics",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "Our mobile app transition was seamless. The Flutter-based solution they provided is fast, stable, and our customers love the new UI.",
    rating: 5
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 relative bg-offwhite overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-heading font-bold tracking-[0.3em] uppercase text-sm mb-4"
          >
            Client Voice
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold text-navy"
          >
            What They <span className="text-electric">Say About Us</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode='wait'>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass p-8 md:p-16 rounded-3xl border border-black/5 relative shadow-xl"
            >
              <Quote className="absolute top-8 left-8 text-electric/10" size={80} />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[index].rating)].map((_, i) => (
                    <Star key={i} className="text-gold fill-gold" size={20} />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-navy/80 italic mb-10 leading-relaxed">
                  "{testimonials[index].text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonials[index].photo} 
                    alt={testimonials[index].name} 
                    className="w-16 h-16 rounded-full border-2 border-electric p-1"
                  />
                  <div className="text-left">
                    <h4 className="font-heading font-bold text-lg text-navy">{testimonials[index].name}</h4>
                    <p className="text-electric text-sm">{testimonials[index].company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-navy hover:border-navy hover:text-white transition-all text-navy"
            >
              <ChevronLeft />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-navy hover:border-navy hover:text-white transition-all text-navy"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
