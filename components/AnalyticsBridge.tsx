import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { analytics } from '../lib/analytics';

const contentGroupFor = (pathname: string): string => {
  const rest = pathname.replace(/^\/(ca|es|en)/, '') || '/';
  if (rest === '/' || rest === '') return 'home';
  if (rest.startsWith('/product')) return 'product';
  if (rest.startsWith('/shop')) return 'shop';
  if (rest.startsWith('/about')) return 'about';
  if (rest.startsWith('/contact')) return 'contact';
  if (rest.startsWith('/faq')) return 'faq';
  if (rest.startsWith('/gracias')) return 'thank_you';
  if (/^\/(privacy|returns|terms)/.test(rest)) return 'legal';
  return 'not_found';
};

/**
 * Fires a `page_view` on every SPA navigation, once react-helmet-async has
 * flushed the new <title>. GTM should trigger GA4 page views off THIS event
 * (custom event `page_view`), not off History Change, so the extra params
 * (content_group, content_language) come through.
 */
const AnalyticsBridge: React.FC = () => {
  const { pathname } = useLocation();
  const { urlLang } = useLanguage();
  const last = useRef<string>('');

  useEffect(() => {
    if (last.current === pathname) return;
    last.current = pathname;
    const id = window.setTimeout(() => {
      analytics.pageView({
        path: pathname,
        title: document.title,
        language: urlLang,
        contentGroup: contentGroupFor(pathname),
      });
    }, 60);
    return () => window.clearTimeout(id);
  }, [pathname, urlLang]);

  // Delegated outbound-link tracking (Instagram, credits, any future external link).
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.href;
      if (!/^https?:\/\//i.test(href)) return;
      try {
        if (new URL(href).origin === window.location.origin) return;
      } catch {
        return;
      }
      const ctx =
        a.getAttribute('data-analytics') ||
        a.closest('[data-analytics-section]')?.getAttribute('data-analytics-section') ||
        'unclassified';
      analytics.outboundClick(href, ctx);
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
};

export default AnalyticsBridge;
