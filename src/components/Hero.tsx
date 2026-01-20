import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0 bg-brand-cream">
      {/* Background Texture - Subtle and Premium */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/5 via-transparent to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-brand-cream to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Content - Editorial Style */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="md:w-1/2 text-center md:text-left order-2 md:order-1"
          >
            <div className="inline-block mb-6">
               <span className="py-1 border-b border-brand-gold text-brand-dark/60 uppercase tracking-[0.25em] text-xs font-medium">
                Medicina Estética & Sueño
              </span>
            </div>
           
            <h1 className="text-5xl lg:text-7xl font-serif font-medium leading-[1.1] text-brand-dark mb-8 text-balance">
              Dra. Gabriela <br />
              <span className="italic text-brand-accent relative inline-block">
                Carrillo
                {/* Subtle underline decoration */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-gold/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg text-brand-dark/70 mb-10 max-w-lg mx-auto md:mx-0 font-light leading-relaxed">
              Un enfoque íntimo y profesional hacia la belleza integral. Especialista en armonización facial, transplante capilar y diagnóstico del sueño.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center md:justify-start">
                <motion.a
                    href="#armonizacion"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-brand-dark text-brand-cream px-10 py-4 text-sm uppercase tracking-widest hover:bg-brand-gold transition-colors duration-300 w-full sm:w-auto text-center shadow-xl shadow-brand-dark/10"
                >
                    Ver Especialidades
                </motion.a>
                <motion.a
                    href="#contacto"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center justify-center gap-2 px-8 py-4 text-sm uppercase tracking-widest text-brand-dark hover:text-brand-gold transition-colors duration-300 w-full sm:w-auto"
                >
                    <span>Contactar</span>
                    <span className="block w-8 h-px bg-brand-dark group-hover:bg-brand-gold transition-colors"></span>
                </motion.a>
            </div>
          </motion.div>

          {/* Image Content - Asymmetric & Artistic Layout */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="md:w-[45%] relative mt-10 md:mt-0 order-1 md:order-2"
          >
            <div className="relative aspect-[3/4] md:aspect-[4/5] max-w-md mx-auto">
                {/* Back decorative frame (Gold) */}
                <div className="absolute top-6 right-6 w-full h-full border border-brand-gold/60 -z-10 transition-transform duration-700 hover:translate-x-2 hover:-translate-y-2"></div>
                
                {/* Solid background accent */}
                <div className="absolute -bottom-4 -left-4 w-2/3 h-2/3 bg-brand-stone/30 -z-20 rounded-bl-[4rem]"></div>
                
                {/* Main Image */}
                <img 
                    src="https://i.postimg.cc/YqjKjsZF/image.png" 
                    alt="Dra. Gabriela Carrillo" 
                    className="w-full h-full object-cover shadow-2xl z-10 relative" 
                />
                
                {/* Floating Signature Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -bottom-6 -right-4 md:-left-8 md:right-auto bg-brand-cream px-8 py-5 shadow-lg border-l-4 border-brand-gold z-20 max-w-[200px]"
                >
                    <p className="font-serif text-xl text-brand-dark italic leading-tight">Dra. G. Carrillo</p>
                    <p className="text-[10px] uppercase tracking-widest text-brand-accent mt-2 font-bold">Atención Personalizada</p>
                </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
