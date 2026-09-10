import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
  const { t, urlLang } = useLanguage();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-24 bg-[#FDFCFB] animate-fade-in">
      <SEO title={t.notFound.seoTitle} description={t.notFound.body} path="/404" noindex />
      <div className="max-w-xl text-center space-y-10">
        <span className="block text-[13rem] leading-none font-serif text-stone-200 select-none">404</span>
        <h1 className="text-3xl lg:text-5xl font-serif text-stone-950 tracking-tight">
          {t.notFound.title}
        </h1>
        <p className="text-stone-700 text-xl leading-relaxed">
          {t.notFound.body}
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
          <Link
            to={`/${urlLang}/shop`}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-stone-950 text-white text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-black transition-all"
          >
            {t.notFound.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
          <Link
            to={`/${urlLang}`}
            className="inline-flex items-center justify-center px-8 py-4 border border-stone-300 text-stone-950 text-[11px] uppercase tracking-[0.4em] font-bold hover:border-stone-950 transition-all"
          >
            {t.common.backToHome}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
