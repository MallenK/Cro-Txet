
import React from 'react';
import { Translation } from '../types';

const About: React.FC<{ t: Translation }> = ({ t }) => {
  return (
    <div className="py-20 px-6 lg:py-32 lg:px-24 max-w-7xl mx-auto animate-fade-in">
      {/* Grid Container: Stacked on Mobile, 2 Columns on Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
        
        {/* TEXT SECTION (Left on Desktop) */}
        <section className="space-y-12 max-w-[65ch]">
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-[0.5em] text-stone-900 block font-bold">
              {t.about.label}
            </span>
            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-serif text-stone-950 leading-[1.1] tracking-tight">
              {t.about.title}
            </h2>
          </div>
          
          <div className="space-y-10 text-stone-900 text-xl lg:text-2xl leading-relaxed">
            {t.about.story.map((paragraph, index) => (
              <p 
                key={index} 
                className={index === 0 ? "text-2xl lg:text-3xl font-serif text-stone-950 leading-snug tracking-tight mb-8" : "mb-6"}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* IMAGES SECTION (Right on Desktop) - Exactly 2 images */}
        <section className="flex flex-col gap-12 lg:gap-16">
          <div className="relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1200" 
              alt="Detall de l'espai creatiu" 
              className="w-full aspect-[4/5] object-cover transition-transform duration-[2s] group-hover:scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
          </div>
          
          <div className="relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1506806732259-39c2d4a78ae7?auto=format&fit=crop&q=80&w=1200" 
              alt="Dissenyant a mà" 
              className="w-full aspect-[4/5] object-cover transition-transform duration-[2s] group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
          </div>
        </section>
      </div>

      {/* Optional Visionary Quote to balance the layout footer */}
      <div className="mt-32 lg:mt-48 pt-20 border-t border-stone-200 text-center">
         <p className="text-3xl lg:text-5xl font-serif italic text-stone-400 max-w-4xl mx-auto leading-tight px-4">
          {t.about.quote}
         </p>
      </div>
    </div>
  );
};

export default About;
