import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-cream border-t border-brand-dark/10 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <p className="font-serif font-bold text-lg text-brand-dark">DRA. GABRIELA CARRILLO</p>
          <p className="text-xs text-gray-500 mt-2">© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-brand-dark hover:text-brand-gold transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-brand-dark hover:text-brand-gold transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
