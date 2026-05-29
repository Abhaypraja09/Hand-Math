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
      <TechStack />
      <Portfolio />
      <Contact />
    </motion.main>
  );
};

export default Home;
