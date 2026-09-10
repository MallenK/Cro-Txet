import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { SUPPORTED_URL_LANGS, LANG_TO_URL } from '../i18n';
import { productReviews } from '../content/reviews';

const SITE_ORIGIN = 'https://croandtxet.cat';

const OG_LOCALE: Record<string, string> = {
  ca: 'ca_ES',
  es: 'es_ES',
  en: 'en_US',
};

interface SEOProps {
  title: string;
  description: string;
  /** Path without language prefix, e.g. "/shop" or "" for home */
  path: string;
  image?: string;
  type?: 'website' | 'product' | 'article';
  product?: Product;
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

const priceValidUntil = () => {
  const d = new Date();
  d.setFullYear(d.getFullYear() + 1);
  return d.toISOString().split('T')[0];
};

const SEO: React.FC<SEOProps> = ({ title, description, path, image, type = 'website', product, noindex }) => {
  const { lang, urlLang } = useLanguage();

  const fullTitle = `${title} | Cro&Txet`;
  const canonical = `${SITE_ORIGIN}/${urlLang}${path}`;
  const ogImage = image ? toAbsoluteImageUrl(image) : `${SITE_ORIGIN}/img/og/og-default.jpg`;
  const shouldNoindex = noindex || isStaging;

  useEffect(() => {
    document.documentElement.lang = urlLang;
  }, [urlLang]);

  let productJsonLd: Record<string, unknown> | null = null;
  if (product) {
    const reviews = productReviews(product.id);
    productJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description,
      sku: product.id,
      image: product.images.map(img => toAbsoluteImageUrl(img.src)),
      brand: { '@type': 'Brand', name: 'Cro&Txet' },
      category: 'Bosses de crochet fetes a mà',
      url: canonical,
      inLanguage: urlLang,
      ...(product.details?.material?.[lang] ? { material: product.details.material[lang] } : {}),
      ...(product.colors?.length ? { color: product.colors.map(c => c.name).join(', ') } : {}),
      // El precio mostrado en la web es orientativo (piezas a medida). Se declara
      // igualmente para habilitar resultados enriquecidos; mantener sincronizado
      // con `product.price`. Si se pasa a "solo presupuesto", quitar `offers`.
      offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/LimitedAvailability',
        itemCondition: 'https://schema.org/NewCondition',
        priceValidUntil: priceValidUntil(),
        url: canonical,
        seller: { '@type': 'Organization', name: 'Cro&Txet' },
      },
      ...(reviews.length
        ? {
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1),
              reviewCount: reviews.length,
            },
            review: reviews.map(r => ({
              '@type': 'Review',
              reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
              author: { '@type': 'Person', name: r.author },
              datePublished: r.date,
              reviewBody: r.body,
            })),
          }
        : {}),
    };
  }

  return (
    <Helmet>
      <html lang={urlLang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {shouldNoindex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      )}

      {SUPPORTED_URL_LANGS.map(l => (
        <link key={l} rel="alternate" hrefLang={l} href={`${SITE_ORIGIN}/${l}${path}`} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_ORIGIN}/${LANG_TO_URL.CAT}${path}`} />

      <meta property="og:site_name" content="Cro&Txet" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:type" content={type === 'product' ? 'product' : 'website'} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={OG_LOCALE[urlLang]} />
      {SUPPORTED_URL_LANGS.filter(l => l !== urlLang).map(l => (
        <meta key={l} property="og:locale:alternate" content={OG_LOCALE[l]} />
      ))}
      {type === 'product' && product && (
        <meta property="product:price:amount" content={String(product.price)} />
      )}
      {type === 'product' && <meta property="product:price:currency" content="EUR" />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {productJsonLd && (
        <script type="application/ld+json">{JSON.stringify(productJsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
