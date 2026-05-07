import React from 'react';
import ContactSection from '../sections/Contact';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="pt-32">
      <section className="container mx-auto px-6 mb-12">
        <div className="max-w-3xl text-center mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            Let's <span className="text-gold">Connect</span>
          </motion.h1>
          <p className="text-xl text-navy/60">
            Have a project in mind or just want to say hi? We'd love to hear from you.
          </p>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default ContactPage;
