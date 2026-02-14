
export type Language = 'CAT' | 'ES' | 'EN';

export interface Product {
  id: string;
  name: string;
  meaning: Record<Language, string>;
  description: Record<Language, string>;
  price: number;
  images: string[];
  colors: { name: string; hex: string }[];
  details?: {
    material: Record<Language, string>;
    stitch: Record<Language, string>;
    options?: Record<Language, string[]>;
    extraChain?: boolean;
  };
}

export interface Translation {
  common: {
    back: string;
    explore: string;
    loading: string;
    notFound: string;
    backToShop: string;
    artisanNote: string;
    productionTime: string;
    language: string;
  };
  nav: {
    home: string;
    about: string;
    shop: string;
    contact: string;
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
  };
  about: {
    label: string;
    title: string;
    story: string[];
    inspirationLabel: string;
    inspirationDesc: string;
    quote: string;
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
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
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
