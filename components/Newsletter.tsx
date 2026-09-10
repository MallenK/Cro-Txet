import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Loader2, Check, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

/**
 * Newsletter sign-up. No email-marketing provider yet, so submissions are
 * relayed to the studio inbox via EmailJS (same service as the contact form).
 * Swap the `emailjs.send` call for the provider's endpoint when one is set up.
 */
const Newsletter: React.FC = () => {
  const { t, urlLang } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((e.target as HTMLFormElement).company?.value) return; // honeypot
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    try {
      await emailjs.send(
        'service_wsj9ttf',
        'template_dradehi',
        { from_name: 'Newsletter', from_email: email, message: 'Nova subscripció a la newsletter des de la web.' },
        'iGpB097zxE-0bBxRC'
      );
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'newsletter_signup' });
      setEmail('');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="bg-stone-950 text-white px-6 lg:px-24 py-24 lg:py-32">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <span className="text-[11px] uppercase tracking-[0.5em] text-stone-400 font-bold">{t.newsletter.label}</span>
        <h2 className="text-3xl lg:text-5xl font-serif tracking-tight">{t.newsletter.title}</h2>
        <p className="text-stone-300 text-lg">{t.newsletter.desc}</p>

        {status === 'success' ? (
          <p className="inline-flex items-center gap-3 text-lg font-serif text-white">
            <Check className="w-5 h-5" /> {t.newsletter.success}
          </p>
        ) : (
          <form onSubmit={submit} className="space-y-4" noValidate>
            <p className="hidden" aria-hidden="true">
              <label>No omplir<input type="text" name="company" tabIndex={-1} autoComplete="off" /></label>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <label className="sr-only" htmlFor="newsletter-email">{t.newsletter.placeholder}</label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={e => { setEmail(e.target.value); if (status === 'error') setStatus('idle'); }}
                required
                placeholder={t.newsletter.placeholder}
                className="flex-1 bg-white/10 border border-white/25 px-6 py-4 text-white placeholder:text-stone-400 focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-4 bg-white text-stone-950 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-stone-200 transition-colors flex items-center justify-center gap-3"
              >
                {status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : t.newsletter.cta}
              </button>
            </div>
            {status === 'error' && (
              <p role="alert" className="flex items-center justify-center gap-2 text-sm text-red-300">
                <AlertCircle className="w-4 h-4" /> {t.newsletter.error}
              </p>
            )}
            <p className="text-xs text-stone-400">
              <Link to={`/${urlLang}/privacy`} className="underline hover:text-white">
                {t.newsletter.consent}
              </Link>
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
