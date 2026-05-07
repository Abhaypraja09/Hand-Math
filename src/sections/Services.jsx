import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Globe, 
  Smartphone, 
  BarChart3, 
  ShieldCheck, 
  Cloud, 
  Layout, 
  Search, 
  ShoppingBag, 
  Cpu 
} from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const services = [
  {
    id: 'software-solutions',
    title: 'Software Solutions',
    description: 'Custom ERP, CRM, SaaS, desktop & web apps tailored to your business needs.',
    icon: Code,
    color: 'electric'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'SEO, content marketing, social media, and email campaigns to grow your brand.',
    icon: BarChart3,
    color: 'gold'
  },
  {
    id: 'mobile-app-dev',
    title: 'Mobile App Development',
    description: 'Native iOS/Android and Flutter/React Native cross-platform applications.',
    icon: Smartphone,
    color: 'electric'
  },
  {
    id: 'paid-ads',
    title: 'Google & Social Ads',
    description: 'ROI-driven Google Ads, Meta Ads, LinkedIn Ads, and remarketing strategies.',
    icon: Search,
    color: 'gold'
  },
  {
    id: 'domain-hosting',
    title: 'Domain & Web Hosting',
    description: 'Reliable domain registration, VPS/Dedicated hosting, and SSL certificates.',
    icon: Globe,
    color: 'electric'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Premium Figma designs, wireframing, and brand identity that converts.',
    icon: Layout,
    color: 'gold'
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'AWS/Azure/GCP setup, cloud migration, DevOps, and CI/CD automation.',
    icon: Cloud,
    color: 'electric'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Vulnerability assessment, firewall setup, and enterprise data protection.',
    icon: ShieldCheck,
    color: 'gold'
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    description: 'Tech strategy, digital transformation audits, and system architecture.',
    icon: Cpu,
    color: 'electric'
  },
  {
    id: 'ecommerce-solutions',
    title: 'E-commerce Solutions',
    description: 'Shopify, WooCommerce, and custom online store development for scale.',
    icon: ShoppingBag,
    color: 'gold'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-electric font-heading font-bold tracking-[0.3em] uppercase text-sm mb-4"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6 text-navy"
          >
            Comprehensive <span className="text-electric">IT Services</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-electric to-gold rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <RouterLink to={`/services/${service.id}`} className="block h-full">
                <div className="card-gradient p-8 h-full flex flex-col items-start hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl">
                  <div className={`p-4 rounded-2xl bg-${service.color}/10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`text-${service.color}`} size={32} />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-4 text-navy group-hover:text-electric transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-navy/60 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="mt-auto flex items-center text-electric text-sm font-bold group-hover:gap-2 transition-all">
                    Learn More 
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </div>
                </div>
              </RouterLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
