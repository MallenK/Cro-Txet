import React from 'react';
import { Navigate, Outlet, useParams, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';
import { isSupportedUrlLang } from '../i18n';

const AppShell: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#FDFCFB] text-[#171717] max-w-full overflow-x-hidden">
      <Sidebar />

      <main className="flex-1 lg:pl-72 min-h-screen transition-all duration-500 max-w-full overflow-x-hidden">
        <div className="w-full">
          <Outlet />
        </div>

        <footer className="py-16 px-6 lg:px-20 border-t border-stone-200 flex flex-col items-center gap-6 lg:flex-row lg:justify-between bg-stone-50/50 w-full">

          <div className="text-[10px] text-stone-900 font-bold uppercase tracking-[0.3em] text-center lg:text-left">
            &copy; {new Date().getFullYear()} Cro&Txet — Barcelona · Craft & Design
          </div>

          <div className="text-[9px] uppercase tracking-[0.4em] text-stone-400 text-center">
            Developed by{" "}
            <a
              href="https://github.com/MallenK"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-700 transition-colors"
            >
              MallenK
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 text-[10px] text-stone-900 font-bold uppercase tracking-[0.2em]">
            <Link to="returns" className="hover:text-stone-950 transition-colors border-b border-stone-950 pb-0.5 whitespace-nowrap">
              {t.contact.policies.returns}
            </Link>
            <Link to="privacy" className="hover:text-stone-950 transition-colors border-b border-stone-950 pb-0.5 whitespace-nowrap">
              {t.contact.policies.privacy}
            </Link>
          </div>

        </footer>
      </main>
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
