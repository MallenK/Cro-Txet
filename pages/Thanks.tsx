import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const Thanks: React.FC = () => {
  const { t, urlLang } = useLanguage();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'lead_thank_you_view' });
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-24 bg-white animate-fade-in">
      <SEO title={t.thanks.seoTitle} description={t.thanks.body} path="/gracias" noindex />
      <div className="max-w-xl text-center space-y-10">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-stone-950 flex items-center justify-center shadow-xl">
            <CheckCircle2 className="w-9 h-9 text-white" strokeWidth={1.25} />
          </div>
        </div>
        <h1 className="text-3xl lg:text-5xl font-serif text-stone-950 tracking-tight">
          {t.thanks.title}
        </h1>
        <p className="text-stone-700 text-xl leading-relaxed">{t.thanks.body}</p>
        <p className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.3em] font-bold text-stone-500">
          <Clock className="w-4 h-4" strokeWidth={1.5} />
          {t.thanks.response}
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
          <Link
            to={`/${urlLang}/shop`}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-stone-950 text-white text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-black transition-all"
          >
            {t.thanks.ctaShop}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
          <Link
            to={`/${urlLang}`}
            className="inline-flex items-center justify-center px-8 py-4 border border-stone-300 text-stone-950 text-[11px] uppercase tracking-[0.4em] font-bold hover:border-stone-950 transition-all"
          >
            {t.thanks.ctaHome}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
