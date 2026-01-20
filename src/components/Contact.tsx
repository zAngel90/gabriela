import React from 'react';

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-brand-dark text-brand-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-16">
          
          <div className="md:w-1/3">
            <h2 className="text-4xl font-serif mb-6">Contacto Exclusivo</h2>
            <p className="text-white/60 mb-8 font-light leading-relaxed">
              Para consultas privadas y valoraciones personalizadas sobre cualquiera de mis tres pilares.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-brand-gold uppercase text-xs tracking-widest mb-1">Email</h3>
                <a href="mailto:contacto@dragabrielacarrillo.com" className="text-lg hover:text-brand-gold transition-colors">contacto@dragabrielacarrillo.com</a>
              </div>
              <div>
                <h3 className="text-brand-gold uppercase text-xs tracking-widest mb-1">Ubicación</h3>
                <p className="text-lg">Consultorio Privado, Ciudad de México</p>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 bg-white/5 p-8 md:p-12 border border-white/10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-brand-gold">Nombre</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="Tu nombre completo" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-brand-gold">Teléfono</label>
                  <input type="tel" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="+52 ..." />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-brand-gold">Interés Principal</label>
                <select className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-brand-gold transition-colors [&>option]:text-black">
                  <option value="">Selecciona una opción</option>
                  <option value="armonizacion">Armonización Facial</option>
                  <option value="capilar">Transplante Capilar</option>
                  <option value="sueno">Diagnóstico de Sueño</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-brand-gold">Mensaje</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="Cuéntame brevemente tus objetivos..."></textarea>
              </div>

              <button type="submit" className="bg-brand-gold text-brand-dark px-8 py-3 uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors duration-300 w-full md:w-auto">
                Enviar Solicitud
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
