import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Philosophy = () => {
  return (
    <section id="filosofia" className="py-24 bg-brand-stone/20 relative">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Quote className="w-12 h-12 text-brand-gold mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl md:text-5xl font-serif text-brand-dark italic leading-snug mb-8">
            "Mi compromiso no termina en la consulta. Quedo atenta a tus avances, porque la verdadera transformación requiere acompañamiento y confianza."
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px w-12 bg-brand-dark/30"></div>
            <p className="uppercase tracking-widest text-sm font-bold text-brand-dark">
              Dra. Gabriela Carrillo
            </p>
            <div className="h-px w-12 bg-brand-dark/30"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
