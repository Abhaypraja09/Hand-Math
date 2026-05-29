import React from 'react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-offwhite flex items-center justify-center pt-32 pb-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-electric/10 blur-[120px] rounded-full" />
         <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 border border-black/5 rounded-full font-bold text-xs uppercase tracking-widest text-navy mb-8 shadow-sm backdrop-blur-md"
        >
          <Sparkles size={14} className="text-electric" />
          Coming Soon
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-6xl md:text-8xl font-heading font-bold text-navy mb-6 tracking-tight"
        >
          404
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl md:text-3xl font-heading font-bold text-navy mb-6"
        >
          Page Not Found or Under Construction
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-navy/60 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          The page you are looking for doesn't exist yet, or we are currently building it. We are constantly expanding our enterprise solutions.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <RouterLink to="/" className="btn-primary inline-flex items-center gap-2 shadow-lg shadow-electric/20 hover:shadow-electric/40">
            <ArrowLeft size={18} />
            Back to Home
          </RouterLink>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
