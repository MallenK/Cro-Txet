
export type Language = 'CAT' | 'ES' | 'EN';

export interface ProductAddon {
  id: string;
  price: number;
  label: Record<Language, string>;
}

export interface Product {
  id: string;
  name: string;
  meaning: Record<Language, string>;
  description: Record<Language, string>;
  price: number;

  images: {
    src: string;
    color?: string; // 👈 opcional
  }[];

  colors: { name: string; hex: string }[];

  details?: {
    material?: Record<Language, string>;
    stitch?: Record<Language, string>;
    options?: Record<Language, string[]>;
  };

  dimensions?: Record<Language, string>;
  careInstructions?: Record<Language, string>;

  addons?: ProductAddon[];
}


export interface Translation {
  common: {
    back: string;
    explore: string;
    loading: string;
    notFound: string;
    backToShop: string;
    backToHome: string;
    artisanNote: string;
    productionTime: string;
    language: string;
  };
  nav: {
    home: string;
    about: string;
    shop: string;
    contact: string;
    faq: string;
  };
  a11y: {
    backToTop: string;
    openMenu: string;
    closeMenu: string;
    breadcrumb: string;
    chat: string;
    skipToContent: string;
    theme: string;
  };
  theme: {
    light: string;
    dark: string;
    system: string;
  };
  footer: {
    explore: string;
    legalHeading: string;
    cookiePrefs: string;
    followUs: string;
  };
  notFound: {
    seoTitle: string;
    title: string;
    body: string;
    cta: string;
  };
  thanks: {
    seoTitle: string;
    title: string;
    body: string;
    response: string;
    ctaShop: string;
    ctaHome: string;
  };
  faqMeta: {
    seoTitle: string;
    seoDescription: string;
    label: string;
    title: string;
    subtitle: string;
    stillHelp: string;
    ctaContact: string;
  };
  newsletter: {
    label: string;
    title: string;
    desc: string;
    incentive: string;
    placeholder: string;
    cta: string;
    success: string;
    error: string;
    consent: string;
  };
  cookies: {
    title: string;
    body: string;
    accept: string;
    reject: string;
    settings: string;
    save: string;
    necessary: string;
    necessaryDesc: string;
    analytics: string;
    analyticsDesc: string;
    policy: string;
  };
  product: {
    share: string;
    shareCopied: string;
    stickyCta: string;
  };
  instagram: {
    label: string;
    title: string;
    subtitle: string;
    follow: string;
    viewPost: string;
  };
  testimonials: {
    label: string;
    title: string;
    subtitle: string;
    ratingSummary: string;
    productTitle: string;
    requestCta: string;
    reviewPrefill: string;
  };
  home: {
    heroSubtitle: string;
    heroTitle: string;
    cta: string;
    philosophyTitle: string;
    philosophySubtitle: string;
    values: {
      slow: string;
      slowDesc: string;
      handmade: string;
      handmadeDesc: string;
      demand: string;
      demandSubtitle: string;
      demandDesc: string;
    };
    lookbookTitle: string;
    lookbookDesc: string;
    lookbookCta: string;
    aboutLinkTitle: string;
    aboutLinkDesc: string;
    aboutLinkCta: string;
    seoTitle: string;
    seoDescription: string;
    heroImageAlt: string;
    workshopImageAlt: string;
    lookbookImageAlt: string;
  };
  about: {
    label: string;
    title: string;
    story: string[];
    inspirationLabel: string;
    inspirationDesc: string;
    quote: string;
    seoTitle: string;
    seoDescription: string;
    founderImageAlt: string;
  };
  shop: {
    label: string;
    title: string;
    desc: string;
    optionalChain: string;
    addToCart: string;
    color: string;
    availableColors: string;
    detailsLabel: string;
    materialLabel: string;
    stitchLabel: string;
    optionsLabel: string;
    dimensionsLabel: string;
    careLabel: string;
    seoTitle: string;
    seoDescription: string;
  };
  legal: {
    returnsSeoDescription: string;
    privacySeoDescription: string;
    termsSeoDescription: string;
    terms: string;
    lastUpdated: string;
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    seoTitle: string;
    seoDescription: string;
    responseTime: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      send: string;
      sent: string;
      productInquiry: string;
      error: string;
      invalidEmail: string;
    };
    info: {
      emailTitle: string;
      atelierTitle: string;
      atelierLoc: string;
    };
    care: {
      title: string;
      content: string;
    };
    policies: {
      returns: string;
      privacy: string;
    };
  };
}

export interface Fotos_Txell {
  id: string;
  src: string;
  alt: string;
}
