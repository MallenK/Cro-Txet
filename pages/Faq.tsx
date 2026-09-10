import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { FAQ } from '../content/faq';

const Faq: React.FC = () => {
  const { t, lang, urlLang } = useLanguage();
  const items = FAQ[lang];
  const [open, setOpen] = useState<number | null>(0);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <div className="py-16 px-6 lg:py-28 lg:px-24 max-w-4xl mx-auto animate-fade-in bg-[#FDFCFB] min-h-screen">
      <SEO title={t.faqMeta.seoTitle} description={t.faqMeta.seoDescription} path="/faq" />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <Breadcrumbs items={[{ name: t.faqMeta.title }]} className="mb-12" />

      <header className="space-y-5 border-b border-stone-200 pb-12 mb-12">
        <span className="text-[11px] uppercase tracking-[0.5em] text-stone-900 font-bold">{t.faqMeta.label}</span>
        <h1 className="text-4xl lg:text-6xl font-serif text-stone-950 tracking-tight">{t.faqMeta.title}</h1>
        <p className="text-stone-700 text-xl">{t.faqMeta.subtitle}</p>
      </header>

      <dl className="divide-y divide-stone-200 border-b border-stone-200">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="py-2">
              <dt>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                >
                  <span className="text-xl lg:text-2xl font-serif text-stone-950 group-hover:text-stone-600 transition-colors">
                    {item.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-stone-500 shrink-0 mt-1.5 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
              </dt>
              <dd className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
                <p className="text-stone-700 text-lg leading-relaxed pr-10">{item.a}</p>
              </dd>
            </div>
          );
        })}
      </dl>

      <div className="mt-16 p-10 lg:p-14 bg-stone-950 text-white text-center space-y-6">
        <p className="font-serif text-2xl lg:text-3xl tracking-tight">{t.faqMeta.stillHelp}</p>
        <Link
          to={`/${urlLang}/contact`}
          className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] font-bold border-b-2 border-white pb-2 hover:text-stone-300 hover:border-stone-300 transition-all"
        >
          {t.faqMeta.ctaContact}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default Faq;
