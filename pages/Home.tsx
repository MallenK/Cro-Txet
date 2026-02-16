
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Sparkles, Package } from 'lucide-react';
import { Translation } from '../types';

const Home: React.FC<{ t: Translation }> = ({ t }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Editorial Hero */}
      <section className="relative min-h-[95vh] flex flex-col justify-center items-center overflow-hidden px-8">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80&w=2000" 
            alt="Craftsmanship" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-stone-950/20 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 text-center space-y-12 max-w-4xl mx-auto">
          <div className="space-y-4">
            <span className="block text-[12px] uppercase tracking-[0.6em] text-white font-bold fade-in-section hero-text-shadow">
              {t.home.heroSubtitle}
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.9] fade-in-section hero-text-shadow">
              {t.home.heroTitle}
            </h2>
          </div>
          <div className="fade-in-section" style={{ transitionDelay: '0.4s' }}>
            <Link 
              to="/shop" 
              className="inline-flex items-center text-[13px] uppercase tracking-[0.4em] text-white border-b-2 border-white pb-3 font-bold group hover:text-stone-200 hover:border-stone-200 transition-all"
            >
              {t.home.cta}
              <ArrowRight className="ml-4 w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values - Updated Background and Icons */}
      <section className="py-32 lg:py-48 px-8 lg:px-24 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-4 space-y-6 fade-in-section">
              <span className="text-[12px] uppercase tracking-[0.4em] text-stone-900 font-bold">{t.home.philosophyTitle}</span>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-950 leading-tight">
                {t.home.philosophySubtitle}
              </h3>
            </div>
            
            <div className="lg:col-span-8 grid md:grid-cols-3 gap-16 lg:pt-20">
              {/* Value 1 */}
              <div className="space-y-6 fade-in-section text-center md:text-left" style={{ transitionDelay: '0.1s' }}>
                <div className="flex justify-center md:justify-start">
                  <div className="p-5 bg-stone-950 rounded-full shadow-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <h4 className="text-sm uppercase tracking-widest text-stone-950 font-bold">{t.home.values.slow}</h4>
                <p className="text-stone-900 text-lg leading-relaxed">{t.home.values.slowDesc}</p>
              </div>

              {/* Value 2 */}
              <div className="space-y-6 fade-in-section text-center md:text-left" style={{ transitionDelay: '0.2s' }}>
                <div className="flex justify-center md:justify-start">
                  <div className="p-5 bg-stone-950 rounded-full shadow-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <h4 className="text-sm uppercase tracking-widest text-stone-950 font-bold">{t.home.values.handmade}</h4>
                <p className="text-stone-900 text-lg leading-relaxed">{t.home.values.handmadeDesc}</p>
              </div>

              {/* Value 3 */}
              <div className="space-y-6 fade-in-section text-center md:text-left" style={{ transitionDelay: '0.3s' }}>
                <div className="flex justify-center md:justify-start">
                  <div className="p-5 bg-stone-950 rounded-full shadow-lg flex items-center justify-center">
                    <Package className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <h4 className="text-sm uppercase tracking-widest text-stone-950 font-bold">{t.home.values.demand}</h4>
                <p className="text-stone-900 text-lg leading-relaxed">
                  <span className="font-bold text-stone-950 block mb-2">{t.home.values.demandSubtitle}</span>
                  {t.home.values.demandDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: Link to 'Qui Sóc' */}
      <section className="py-32 lg:py-60 px-8 lg:px-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative fade-in-section">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1200" 
                alt="El taller" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-stone-100 hidden lg:block -z-10" />
          </div>
          <div className="lg:w-1/2 space-y-10 fade-in-section" style={{ transitionDelay: '0.2s' }}>
             <span className="text-[11px] uppercase tracking-[0.5em] text-stone-400 font-bold">{t.nav.about}</span>
             <h3 className="text-5xl lg:text-7xl font-serif text-stone-950 leading-tight">
               {t.home.aboutLinkTitle}
             </h3>
             <p className="text-stone-900 text-2xl leading-relaxed max-w-lg">
               {t.home.aboutLinkDesc}
             </p>
             <Link to="/about" className="group flex items-center gap-4 text-[12px] uppercase tracking-[0.4em] font-bold text-stone-950">
               {t.home.aboutLinkCta}
               <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
             </Link>
          </div>
        </div>
      </section>

      {/* Lookbook Style Split */}
      <section className="grid lg:grid-cols-2 bg-[#F9F8F6]">
        <div className="h-[70vh] lg:h-screen overflow-hidden fade-in-section">
          <img 
            src="https://images.unsplash.com/photo-1549497538-301288c96677?auto=format&fit=crop&q=80&w=1200" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s]"
            alt="Product Detail"
          />
        </div>
        <div className="flex flex-col justify-center p-12 lg:p-24 space-y-10 fade-in-section">
          <h3 className="text-4xl lg:text-7xl font-serif text-stone-950 leading-[1.1]">
            {t.home.lookbookTitle}
          </h3>
          <p className="text-stone-900 text-xl max-w-md leading-relaxed">
            {t.home.lookbookDesc}
          </p>
          <Link to="/shop" className="btn-premium w-fit text-xs uppercase tracking-[0.3em] pt-4 font-bold">
            {t.home.lookbookCta}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
