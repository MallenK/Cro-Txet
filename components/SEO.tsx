import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { SUPPORTED_URL_LANGS, LANG_TO_URL } from '../i18n';

const SITE_ORIGIN = 'https://croandtxet.cat';

const OG_LOCALE: Record<string, string> = {
  ca: 'ca_ES',
  es: 'es_ES',
  en: 'en_US',
};

interface BreadcrumbItem {
  name: string;
  /** Path without language prefix, e.g. "/shop" */
  path: string;
}

interface SEOProps {
  title: string;
  description: string;
  /** Path without language prefix, e.g. "/shop" or "" for home */
  path: string;
  image?: string;
  type?: 'website' | 'product' | 'article';
  product?: Product;
  breadcrumb?: BreadcrumbItem[];
  noindex?: boolean;
}

const isStaging = Boolean((import.meta as any).env?.VITE_IS_STAGING);

/**
 * Image paths carry Vite's `base` (e.g. "/Cro-Txet/" on GitHub Pages, "/" on Vercel).
 * JSON-LD/OG images must always resolve against the production origin regardless of
 * which host served the page, so strip any base prefix before the "/img/" marker.
 */
const toAbsoluteImageUrl = (src: string): string => {
  if (src.startsWith('http')) return src;
  const marker = src.indexOf('/img/');
  const normalized = marker >= 0 ? src.slice(marker) : `/${src.replace(/^\/+/, '')}`;
  return `${SITE_ORIGIN}${normalized}`;
};

const SEO: React.FC<SEOProps> = ({ title, description, path, image, type = 'website', product, breadcrumb, noindex }) => {
  const { urlLang } = useLanguage();

  const fullTitle = `${title} | Cro&Txet`;
  const canonical = `${SITE_ORIGIN}/${urlLang}${path}`;
  const ogImage = image ? toAbsoluteImageUrl(image) : `${SITE_ORIGIN}/img/fotos_txell/Foto_Home.webp`;
  const shouldNoindex = noindex || isStaging;

  useEffect(() => {
    document.documentElement.lang = urlLang;
  }, [urlLang]);

  const productJsonLd = product
    ? {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description,
        image: product.images.map(img => toAbsoluteImageUrl(img.src)),
        brand: { '@type': 'Brand', name: 'Cro&Txet' },
      }
    : null;

  const breadcrumbJsonLd = breadcrumb
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumb.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: `${SITE_ORIGIN}/${urlLang}${item.path}`,
        })),
      }
    : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {shouldNoindex && <meta name="robots" content="noindex,nofollow" />}

      {SUPPORTED_URL_LANGS.map(l => (
        <link key={l} rel="alternate" hrefLang={l} href={`${SITE_ORIGIN}/${l}${path}`} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_ORIGIN}/${LANG_TO_URL.CAT}${path}`} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={type === 'product' ? 'product' : 'website'} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={OG_LOCALE[urlLang]} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {productJsonLd && (
        <script type="application/ld+json">{JSON.stringify(productJsonLd)}</script>
      )}
      {breadcrumbJsonLd && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
