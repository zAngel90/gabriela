import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PillarSection from './components/PillarSection';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-cream selection:bg-brand-gold selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Pilar 1: Armonización Facial */}
        <PillarSection 
          id="armonizacion"
          number="01"
          title="Armonización Facial"
          subtitle="Estética Avanzada"
          description="Un enfoque artístico y médico para equilibrar tus rasgos. No se trata de cambiar quién eres, sino de realzar tu belleza natural mediante técnicas mínimamente invasivas que respetan tu anatomía y expresión."
          image="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
        />

        {/* Pilar 2: Transplante Capilar */}
        <PillarSection 
          id="capilar"
          number="02"
          title="Transplante Capilar"
          subtitle="Restauración & Confianza"
          description="Recupera la densidad y el diseño natural de tu cabello. Utilizamos tecnología de vanguardia para asegurar resultados indetectables y duraderos, devolviéndote no solo cabello, sino seguridad."
          image="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=2070&auto=format&fit=crop"
          isReversed={true}
        />

        {/* Pilar 3: Diagnóstico de Sueño */}
        <PillarSection 
          id="sueno"
          number="03"
          title="Diagnóstico de Sueño"
          subtitle="Salud Integral"
          description="El descanso es el pilar fundamental de la belleza y la salud. Realizamos diagnósticos precisos para identificar trastornos del sueño que afectan tu calidad de vida y envejecimiento celular."
          image="https://images.unsplash.com/photo-1541781777631-fa182f3a4b3c?q=80&w=2070&auto=format&fit=crop"
        />

        <Philosophy />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
