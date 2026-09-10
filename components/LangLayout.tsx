import React from 'react';
import { Navigate, Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import Sidebar from './Sidebar';
import ScrollProgress from './ScrollProgress';
import BackToTop from './BackToTop';
import FloatingContact from './FloatingContact';
import CookieConsent from './CookieConsent';
import AnalyticsBridge from './AnalyticsBridge';
import PageFade from './motion/PageFade';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';
import { openConsentSettings } from '../context/consent';
import { isSupportedUrlLang } from '../i18n';

const Footer: React.FC = () => {
  const { t, urlLang } = useLanguage();
  const base = `/${urlLang}`;

  const explore = [
    { name: t.nav.home, to: base },
    { name: t.nav.shop, to: `${base}/shop` },
    { name: t.nav.about, to: `${base}/about` },
    { name: t.nav.faq, to: `${base}/faq` },
    { name: t.nav.contact, to: `${base}/contact` },
  ];
  const legal = [
    { name: t.contact.policies.privacy, to: `${base}/privacy` },
    { name: t.legal.terms, to: `${base}/terms` },
    { name: t.contact.policies.returns, to: `${base}/returns` },
  ];

  return (
    <footer className="border-t border-stone-200 bg-stone-50/60 w-full">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <p className="text-2xl font-serif text-stone-950">Cro&Txet</p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500 font-bold leading-relaxed">
            Barcelona · Craft &amp; Design
          </p>
          <a
            href="https://instagram.com/cro_and_txet"
            target="_blank"
            rel="noopener noreferrer"
            data-analytics="instagram_footer"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-stone-900 font-bold hover:text-stone-500 transition-colors"
          >
            <Instagram className="w-4 h-4" /> {t.footer.followUs}
          </a>
        </div>

        <nav aria-label={t.footer.explore} className="space-y-3">
          <p className="text-[10px] uppercase tracking-[0.35em] text-stone-400 font-bold">{t.footer.explore}</p>
          {explore.map(i => (
            <Link key={i.to} to={i.to} className="block text-[11px] uppercase tracking-[0.2em] text-stone-700 font-bold hover:text-stone-950 transition-colors">
              {i.name}
            </Link>
          ))}
        </nav>

        <nav aria-label={t.footer.legalHeading} className="space-y-3">
          <p className="text-[10px] uppercase tracking-[0.35em] text-stone-400 font-bold">{t.footer.legalHeading}</p>
          {legal.map(i => (
            <Link key={i.to} to={i.to} className="block text-[11px] uppercase tracking-[0.2em] text-stone-700 font-bold hover:text-stone-950 transition-colors">
              {i.name}
            </Link>
          ))}
          <button
            onClick={openConsentSettings}
            className="block text-left text-[11px] uppercase tracking-[0.2em] text-stone-700 font-bold hover:text-stone-950 transition-colors"
          >
            {t.footer.cookiePrefs}
          </button>
        </nav>

        <div className="space-y-3 sm:text-right lg:text-left">
          <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500 font-bold">
            &copy; {new Date().getFullYear()} Cro&Txet
          </p>
          <p className="text-[9px] uppercase tracking-[0.35em] text-stone-400">
            Developed by{' '}
            <a href="https://github.com/MallenK" target="_blank" rel="noopener noreferrer" className="hover:text-stone-700 transition-colors">
              MallenK
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

const AppShell: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] max-w-full overflow-x-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-stone-950 focus:text-white focus:px-4 focus:py-2 focus:text-xs focus:uppercase focus:tracking-widest"
      >
        {t.a11y.skipToContent}
      </a>
      <ScrollProgress />
      <AnalyticsBridge />
      <Sidebar />

      <main id="main" className="flex-1 lg:pl-72 min-h-screen transition-all duration-500 max-w-full overflow-x-hidden">
        <div className="w-full">
          <PageFade routeKey={location.pathname}>
            <Outlet />
          </PageFade>
        </div>
        <Footer />
      </main>

      <BackToTop />
      <FloatingContact />
      <CookieConsent />
    </div>
  );
};

const LangLayout: React.FC = () => {
  const { lang } = useParams();

  if (!isSupportedUrlLang(lang)) {
    return <Navigate to="/ca" replace />;
  }

  return (
    <LanguageProvider urlLang={lang}>
      <AppShell />
    </LanguageProvider>
  );
};

export default LangLayout;
