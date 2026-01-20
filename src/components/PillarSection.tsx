import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface PillarProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  isReversed?: boolean;
  number: string;
}

const PillarSection: React.FC<PillarProps> = ({ id, title, subtitle, description, image, isReversed = false, number }) => {
  return (
    <section id={id} className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-4 left-4 text-6xl md:text-8xl font-serif text-white/20 font-bold">
                {number}
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <span className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-2 block">
              {subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6 leading-tight">
              {title}
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
              {description}
            </p>
            
            <a href="#contacto" className="group inline-flex items-center text-brand-dark uppercase tracking-widest text-sm font-bold hover:text-brand-gold transition-colors">
              Agendar consulta
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PillarSection;
