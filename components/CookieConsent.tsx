import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import {
  ConsentValue,
  applyConsent,
  readConsent,
  OPEN_CONSENT_EVENT,
} from '../context/consent';

const CookieConsent: React.FC = () => {
  const { t, urlLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(true);

  useEffect(() => {
    const stored = readConsent();
    if (!stored) {
      setOpen(true);
    } else {
      setAnalytics(stored.analytics);
    }
    const reopen = () => {
      const s = readConsent();
      setAnalytics(s ? s.analytics : true);
      setShowDetails(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  const commit = (value: Omit<ConsentValue, 'necessary' | 'ts'>) => {
    applyConsent({ necessary: true, ts: Date.now(), ...value });
    setOpen(false);
    setShowDetails(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[120] p-4 sm:p-6">
      <div
        role="dialog"
        aria-live="polite"
        aria-label={t.cookies.title}
        className="mx-auto max-w-3xl bg-white border border-stone-200 shadow-2xl p-6 lg:p-8 space-y-5"
      >
        <div className="space-y-2">
          <h2 className="text-lg font-serif text-stone-950">{t.cookies.title}</h2>
          <p className="text-sm text-stone-600 leading-relaxed">{t.cookies.body}</p>
          <p className="text-xs text-stone-500">
            <Link to={`/${urlLang}/privacy`} className="underline hover:text-stone-950">
              {t.cookies.policy}
            </Link>
          </p>
        </div>

        {showDetails && (
          <div className="space-y-3 border-t border-stone-100 pt-4">
            <label className="flex items-start gap-3 opacity-60">
              <input type="checkbox" checked disabled className="mt-1" />
              <span className="text-sm">
                <span className="font-bold text-stone-900 block">{t.cookies.necessary}</span>
                <span className="text-stone-500">{t.cookies.necessaryDesc}</span>
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={analytics}
                onChange={e => setAnalytics(e.target.checked)}
                className="mt-1"
              />
              <span className="text-sm">
                <span className="font-bold text-stone-900 block">{t.cookies.analytics}</span>
                <span className="text-stone-500">{t.cookies.analyticsDesc}</span>
              </span>
            </label>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 sm:justify-end pt-1">
          {!showDetails && (
            <button
              onClick={() => setShowDetails(true)}
              className="order-3 sm:order-1 px-5 py-3 text-[11px] uppercase tracking-[0.2em] font-bold text-stone-600 hover:text-stone-950 transition-colors"
            >
              {t.cookies.settings}
            </button>
          )}
          <button
            onClick={() => commit({ analytics: false, marketing: false })}
            className="order-2 px-5 py-3 border border-stone-300 text-[11px] uppercase tracking-[0.2em] font-bold text-stone-950 hover:border-stone-950 transition-colors"
          >
            {t.cookies.reject}
          </button>
          <button
            onClick={() =>
              showDetails
                ? commit({ analytics, marketing: false })
                : commit({ analytics: true, marketing: false })
            }
            className="order-1 sm:order-3 px-5 py-3 bg-stone-950 text-white text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-black transition-colors"
          >
            {showDetails ? t.cookies.save : t.cookies.accept}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
