
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Menu, X } from 'lucide-react';
import { Language, Translation } from '../types';

interface SidebarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation;
}

const Sidebar: React.FC<SidebarProps> = ({ lang, setLang, t }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  // Fix: Block body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.shop, path: '/shop' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.contact, path: '/contact' },
  ];

  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Menu Button - Moved to top right */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-5 right-5 z-[100] w-12 h-12 flex items-center justify-center bg-white shadow-xl rounded-full border border-stone-200 focus:outline-none active:scale-90 transition-all duration-300"
        aria-label={isOpen ? "Tancar menú" : "Obrir menú"}
      >
        {isOpen ? <X className="w-5 h-5 text-stone-900" /> : <Menu className="w-5 h-5 text-stone-900" />}
      </button>

      {/* Backdrop with smooth fade */}
      <div 
        className={`lg:hidden fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-40 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={closeSidebar} 
      />

      <aside className={`
        fixed inset-y-0 left-0 z-50 w-80 lg:w-72 bg-[#FDFCFB] flex flex-col p-10 lg:p-14
        sidebar-transition border-r border-stone-100 transform-gpu
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="mb-20 text-center lg:text-left">
          <Link to="/" onClick={closeSidebar} className="group inline-block">
            <h1 className="text-4xl font-serif tracking-tighter text-stone-950 mb-1">Cro&Txet</h1>
            <p className="text-[10px] uppercase tracking-[0.4em] text-stone-900 font-bold pl-1">Disseny Artesanal</p>
          </Link>
        </div>

        <nav className="flex-1 flex flex-col gap-8 lg:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeSidebar}
              className={`relative inline-block text-[13px] lg:text-[11px] uppercase tracking-[0.4em] font-bold transition-all duration-300 w-fit ${
                location.pathname === item.path || (item.path === '/shop' && location.pathname.startsWith('/product'))
                  ? 'text-stone-950' 
                  : 'text-stone-500 hover:text-stone-950'
              }`}
            >
              {item.name}
              {(location.pathname === item.path || (item.path === '/shop' && location.pathname.startsWith('/product'))) && (
                <span className="absolute -bottom-2 left-0 w-8 h-[2.5px] bg-stone-950" />
              )}
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-10 space-y-12 border-t border-stone-100">
          <div className="flex flex-col gap-5">
            <span className="text-[10px] uppercase tracking-[0.5em] text-stone-900 font-bold">{t.common.language}</span>
            <div className="flex gap-8 text-[11px] lg:text-[10px] font-bold">
              {(['CAT', 'ES', 'EN'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLang(l);
                    closeSidebar();
                  }}
                  className={`transition-all tracking-widest py-1 ${lang === l ? 'text-stone-950 border-b-2 border-stone-950' : 'text-stone-400 hover:text-stone-700'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-4 w-fit py-2"
          >
            <div className="w-11 h-11 bg-stone-100 rounded-full flex items-center justify-center group-hover:bg-stone-950 group-hover:text-white transition-all shadow-sm">
              <Instagram className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-stone-900 font-bold group-hover:text-stone-950 transition-colors">Instagram</span>
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
