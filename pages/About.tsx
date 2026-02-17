import React from 'react';
import { Translation } from '../types';
import { IMG_BASE } from '../constants';

const About: React.FC<{ t: Translation }> = ({ t }) => {
  return (
    <div className="py-20 px-6 lg:py-32 lg:px-24 max-w-7xl mx-auto animate-fade-in bg-[#FDFCFB]">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
        
        {/* TEXT SECTION */}
        <section className="space-y-12 max-w-[65ch]">
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-[0.5em] text-stone-900 block font-bold font-sans">
              {t.about.label}
            </span>
            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-serif text-stone-950 leading-[1.1] tracking-tight">
              {t.about.title}
            </h2>
          </div>
          
          <div className="space-y-8 text-stone-900 leading-relaxed">
            {t.about.story.map((paragraph, index) => (
              <p 
                key={index} 
                className={
                  index === 0 
                    ? "text-2xl lg:text-3xl font-serif text-stone-950 leading-snug tracking-tight mb-10" 
                    : "text-xl lg:text-2xl font-light text-stone-800 mb-6"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* IMAGES SECTION */}
        <section className="flex flex-col gap-12 lg:gap-16">

          {["meritxell-1.jpeg", "meritxell-2.jpeg", "meritxell.jpeg"].map((img, i) => (
            <div key={img} className="relative overflow-hidden group shadow-sm rounded-sm max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] mx-auto">
              <img 
                src={IMG_BASE + img}
                alt="Creadora de Cro&Txet"
                className="w-full aspect-[4/5] object-cover transition-transform duration-[2s] group-hover:scale-105"
                loading={i === 0 ? "eager" : "lazy"}
                onError={(e) => (e.currentTarget.parentElement!.style.display = "none")}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
            </div>
          ))}

        </section>

      </div>

      {/* Visionary Quote */}
      <div className="mt-32 lg:mt-48 pt-20 border-t border-stone-200 text-center">
        <p className="text-3xl lg:text-5xl font-serif italic text-stone-400 max-w-4xl mx-auto leading-tight px-4">
          {t.about.quote}
        </p>
      </div>
    </div>
  );
};

export default About;
