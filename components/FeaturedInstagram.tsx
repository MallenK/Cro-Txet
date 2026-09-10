import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { INSTAGRAM_POSTS, INSTAGRAM_URL } from '../content/instagram';
import Reveal from './motion/Reveal';

const FeaturedInstagram: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="py-28 lg:py-40 px-6 lg:px-24 bg-stone-100" data-analytics-section="instagram_featured">
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.5em] text-stone-900 font-bold">
              <Instagram className="w-4 h-4" /> {t.instagram.label}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-950">{t.instagram.title}</h2>
            <p className="text-stone-700 text-lg max-w-md">{t.instagram.subtitle}</p>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] font-bold text-stone-950 border-b-2 border-stone-950 pb-2 hover:text-stone-600 hover:border-stone-600 transition-colors w-fit"
          >
            {t.instagram.follow}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {INSTAGRAM_POSTS.map((post, i) => (
            <Reveal key={post.url} delay={Math.min(i, 5) * 0.05}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-sm bg-stone-200"
                aria-label={`${t.instagram.viewPost} — ${post.caption[lang]}`}
              >
                <img
                  src={post.image}
                  alt={post.alt[lang]}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-[#0a0a0a]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 p-4 lg:p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[#fafafa] text-sm lg:text-base font-serif leading-snug">{post.caption[lang]}</span>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-[#fafafa]/80 text-[10px] uppercase tracking-[0.25em] font-bold">
                    <Instagram className="w-3 h-3" /> {t.instagram.viewPost}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInstagram;
