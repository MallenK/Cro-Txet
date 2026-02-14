
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import LegalPage from './pages/LegalPage';
import { Language } from './types';
import { TRANSLATIONS } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  // Default to CAT and persist user preference
  const [lang, setLang] = React.useState<Language>(() => {
    const saved = localStorage.getItem('cro_txet_lang');
    return (saved as Language) || 'CAT';
  });

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('cro_txet_lang', newLang);
  };

  const t = TRANSLATIONS[lang];

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col lg:flex-row min-h-screen bg-[#FDFCFB] text-[#171717]">
        <Sidebar lang={lang} setLang={handleSetLang} t={t} />
        
        <main className="flex-1 lg:pl-72 min-h-screen transition-all duration-500">
          <Routes>
            <Route path="/" element={<Home t={t} />} />
            <Route path="/about" element={<About t={t} />} />
            <Route path="/shop" element={<Shop t={t} lang={lang} />} />
            <Route path="/product/:id" element={<ProductDetail t={t} lang={lang} />} />
            <Route path="/contact" element={<Contact t={t} />} />
            <Route path="/privacy" element={<LegalPage t={t} lang={lang} type="privacy" />} />
            <Route path="/returns" element={<LegalPage t={t} lang={lang} type="returns" />} />
          </Routes>
          
          <footer className="py-16 px-6 lg:px-20 border-t border-stone-200 flex flex-col items-center gap-6 lg:flex-row lg:justify-between bg-stone-50/50">
            <div className="text-[10px] text-stone-900 font-bold uppercase tracking-[0.3em]">
              &copy; {new Date().getFullYear()} Cro&Txet — Barcelona · Craft & Design
            </div>
            <div className="flex gap-8 text-[10px] text-stone-900 font-bold uppercase tracking-[0.2em]">
              <Link to="/returns" className="hover:text-stone-950 transition-colors border-b border-stone-950 pb-0.5">{t.contact.policies.returns}</Link>
              <Link to="/privacy" className="hover:text-stone-950 transition-colors border-b border-stone-950 pb-0.5">{t.contact.policies.privacy}</Link>
            </div>
          </footer>
        </main>
      </div>
    </Router>
  );
};

export default App;
