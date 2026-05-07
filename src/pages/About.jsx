import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Target, Rocket, Briefcase, Calendar } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2019', title: 'Founded', desc: 'Hand Math IT Solutions was established in Bangalore with a vision to simplify complex tech.' },
    { year: '2020', title: 'First 50 Clients', desc: 'Reached a major milestone of serving 50+ local businesses during the digital boom.' },
    { year: '2022', title: 'Expansion', desc: 'Expanded services to Cloud and Cybersecurity, moving to a larger Innovation Hub.' },
    { year: '2024', title: 'Global Presence', desc: 'Started catering to international clients across US, Europe, and UAE.' },
  ];

  const team = [
    { name: 'Abhay Prajapati', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Sarah Joseph', role: 'Head of Design', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Vikram Singh', role: 'CTO', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <div className="pt-32 pb-24 bg-offwhite min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-electric font-heading font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight text-navy"
          >
            Solving Complex Problems with <span className="text-gold">Smart Technology</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-navy/70 leading-relaxed"
          >
            At Hand Math IT Solutions, we believe that the most powerful solutions are often the most elegant. Based in the heart of India's Silicon Valley, we combine mathematical precision with engineering excellence to build digital products that matter.
          </motion.p>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="bg-white py-24 mb-24">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass p-12 rounded-3xl border border-black/5 shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-electric/5 flex items-center justify-center mb-8">
              <Target className="text-electric" size={32} />
            </div>
            <h2 className="text-3xl font-heading font-bold mb-6 text-navy">Our Mission</h2>
            <p className="text-navy/60 leading-relaxed text-lg">
              To empower businesses globally by providing innovative, high-quality, and cost-effective IT solutions that drive growth and digital transformation.
            </p>
          </div>
          <div className="glass p-12 rounded-3xl border border-black/5 shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-gold/5 flex items-center justify-center mb-8">
              <Rocket className="text-gold" size={32} />
            </div>
            <h2 className="text-3xl font-heading font-bold mb-6 text-navy">Our Vision</h2>
            <p className="text-navy/60 leading-relaxed text-lg">
              To be the most trusted technology partner, recognized for our commitment to excellence, integrity, and the success of our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4 text-navy">Company Journey</h2>
          <div className="w-20 h-1 bg-electric mx-auto rounded-full" />
        </div>
        
        <div className="relative border-l-2 border-black/5 ml-8 md:ml-0 md:left-1/2 md:-translate-x-1/2 space-y-12">
          {milestones.map((m, i) => (
            <div key={i} className={`relative md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'}`}>
              <div className={`absolute top-0 w-8 h-8 rounded-full bg-white border-2 border-electric flex items-center justify-center 
                ${i % 2 === 0 ? 'right-full translate-x-4 md:translate-x-16' : 'left-full -translate-x-4 md:-translate-x-16'}
                -left-10 md:left-auto md:right-auto`}>
                <div className="w-2 h-2 rounded-full bg-electric" />
              </div>
              <div className="glass p-6 md:p-8 rounded-2xl border border-black/5 hover:border-electric/30 transition-colors shadow-sm">
                <span className="text-electric font-bold text-xl mb-2 block">{m.year}</span>
                <h4 className="text-xl font-heading font-bold mb-2 text-navy">{m.title}</h4>
                <p className="text-navy/50 text-sm md:text-base">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4 text-navy">Leadership Team</h2>
            <p className="text-navy/60">The minds behind the innovation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-3xl mb-6 relative border border-black/5">
                  <img src={member.image} className="w-full h-full object-cover transition-all duration-700" alt={member.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-0 group-hover:opacity-40 transition-opacity" />
                </div>
                <h3 className="text-2xl font-heading font-bold group-hover:text-electric transition-colors text-navy">{member.name}</h3>
                <p className="text-navy/50">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
