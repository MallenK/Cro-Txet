import React, { createContext, useContext, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Language, Translation } from '../types';
import { TRANSLATIONS } from '../constants';
import { DEFAULT_URL_LANG, LANG_TO_URL, URL_TO_LANG, UrlLang } from '../i18n';

interface LanguageContextValue {
  lang: Language;
  urlLang: UrlLang;
  t: Translation;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider: React.FC<{ urlLang: UrlLang; children: React.ReactNode }> = ({ urlLang, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const lang = URL_TO_LANG[urlLang];
  const t = TRANSLATIONS[lang];

  const setLang = (newLang: Language) => {
    const newUrlLang = LANG_TO_URL[newLang];
    localStorage.setItem('cro_txet_lang', newLang);

    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'language_change',
        previous_language: lang,
        new_language: newLang,
      });
    }

    const segments = location.pathname.split('/');
    segments[1] = newUrlLang;
    navigate(segments.join('/') + location.search + location.hash);
  };

  const value = useMemo(() => ({ lang, urlLang, t, setLang }), [lang, urlLang, t, location.pathname]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
};

export const useSavedLangOrDefault = (): UrlLang => {
  const saved = typeof window !== 'undefined' ? localStorage.getItem('cro_txet_lang') as Language | null : null;
  return saved && LANG_TO_URL[saved] ? LANG_TO_URL[saved] : DEFAULT_URL_LANG;
};
