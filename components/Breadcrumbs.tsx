import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SITE_ORIGIN = 'https://croandtxet.cat';

export interface Crumb {
  name: string;
  /** Path without language prefix, e.g. "/shop". Omit on the current (last) page. */
  path?: string;
}

/**
 * Visible breadcrumb trail + matching BreadcrumbList JSON-LD.
 * The home crumb is prepended automatically.
 */
const Breadcrumbs: React.FC<{ items: Crumb[]; className?: string }> = ({ items, className = '' }) => {
  const { t, urlLang } = useLanguage();

  const trail: Crumb[] = [{ name: t.nav.home, path: '' }, ...items];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      ...(c.path !== undefined ? { item: `${SITE_ORIGIN}/${urlLang}${c.path}` } : {}),
    })),
  };

  return (
    <nav aria-label={t.a11y.breadcrumb} className={`flex items-center flex-wrap gap-1.5 text-[10px] uppercase tracking-[0.25em] font-bold text-stone-400 ${className}`}>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      {trail.map((c, i) => {
        const isLast = i === trail.length - 1;
        return (
          <React.Fragment key={i}>
            {i > 0 && <ChevronRight className="w-3 h-3 text-stone-300 shrink-0" />}
            {isLast || c.path === undefined ? (
              <span aria-current="page" className="text-stone-700">{c.name}</span>
            ) : (
              <Link to={`/${urlLang}${c.path}`} className="hover:text-stone-950 transition-colors">
                {c.name}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
