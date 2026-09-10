
import { Product, Translation, Language, Fotos_Txell } from './types';

// Directorio base para las fotos reales de producto
// `import.meta.env` solo existe bajo Vite; el script de sitemap (scripts/generate-sitemap.ts)
// importa este módulo con tsx, fuera de Vite, de ahí el fallback a '/'.
const BASE_URL = (import.meta as any).env?.BASE_URL ?? '/';
export const IMG_PATH = BASE_URL + 'img/fotos_productos/';
export const IMG_BASE = BASE_URL + 'img/fotos_txell/';

export const toWebp = (src: string) => src.replace(/\.(jpe?g|png)$/i, '.webp');
export const toAvif = (src: string) => src.replace(/\.(jpe?g|png|webp)$/i, '.avif');

const RAW_FOTOS_TXELL: Fotos_Txell[] = [
  {
    id: 'meritxell-1',
    src: IMG_BASE + 'meritxell-1.jpeg',
    alt: 'Meritxell trabajando en el taller'
  },
  {
    id: 'meritxell-2',
    src: IMG_BASE + 'meritxell-2.jpeg',
    alt: 'Detalle artesanal en proceso'
  },
  {
    id: 'meritxell-3',
    src: IMG_BASE + 'meritxell.jpeg',
    alt: 'Retrato en el taller'
  },
  {
    id: 'Home',
    src: IMG_BASE + 'Foto_Home.png',
    alt: 'Foto home'
  }
];

export const FOTOS_TXELL: Fotos_Txell[] = RAW_FOTOS_TXELL.map(f => ({ ...f, src: toWebp(f.src) }));


const RAW_PRODUCTS: Product[] = [
  {
    id: 'alea',
    name: 'Aléa',
    meaning: { 
      CAT: 'del francès “destí” o “casualitat”; subtil i poètic.',
      ES: 'del francés “destino” o “casualidad”; sutil y poética',
      EN: 'from the French “destiny” or “chance”; subtle and poetic.'
    },
    description: { 
      ES: 'Bolso hecho a mano en tonos metálicos, con forma semicircular y trenzado artesanal. Puede tener cierre semicircular o cuadrado, usarse de mano o con cadena, e incluir asa integrada.', 
      CAT: 'Bolso fet a mà en tons metàl·lics, amb forma semicircular i trenat artesanal. Es pot fer amb tancament semicircular o quadrat, portar de mà o amb cadeneta, i incloure nanseta integrada.', 
      EN: 'Handcrafted metallic bag with a semicircular shape and artisanal weave. It can feature a semicircular or square clasp, be worn by hand or with a chain, and include an integrated handle.' 
    },
    price: 35,

    images: [
      {
        color: 'Silver',
        src: `${IMG_PATH}alea/bossa-crochet-alea.png`
      },
      {
        color: 'Metallic Black',
        src: `${IMG_PATH}alea/alea-negre.jpeg`
      },
      {
        color: 'Metallic Black',
        src: `${IMG_PATH}alea/alea-negre-2.jpeg`
      },
      {
        color: 'Silver',
        src: `${IMG_PATH}alea/alea-silver.jpeg`
      },
      {
        color: 'Silver',
        src: `${IMG_PATH}alea/alea-silver-+-negre-+-old-silver.jpeg`
      },
      {
        color: 'Golden',
        src: `${IMG_PATH}alea/alea-black+silver+gold.jpeg`
      },
    ],

    colors: [
      { name: 'Silver', hex: '#C0C0C0' },
      { name: 'Golden', hex: '#D4AF37' },
      { name: 'Metallic Black', hex: '#2C2C2C' }
    ],

    dimensions: {
      CAT: '24 x 14 cm aprox. (diàmetre x alt)',
      ES: '24 x 14 cm aprox. (diámetro x alto)',
      EN: 'Approx. 24 x 14 cm (diameter x height)'
    },
    careInstructions: {
      CAT: 'Evita l’exposició prolongada al sol per mantenir la brillantor del fil metàl·lic. Neteja amb un drap sec.',
      ES: 'Evita la exposición prolongada al sol para mantener el brillo del hilo metálico. Limpia con un paño seco.',
      EN: 'Avoid prolonged sun exposure to preserve the shine of the metallic thread. Clean with a dry cloth.'
    },

    details: {
      material: {
        ES: 'Hilo metálico premium',
        CAT: 'Fil metàl·lic premium',
        EN: 'Premium metallic yarn'
      },
      stitch: {
        ES: 'Trenzado artesanal (Punto cesto)',
        CAT: 'Trenat artesanal (Punt cistell)',
        EN: 'Handcrafted braiding (Basket stitch)'
      },
      options: { 
        ES: ['Cierre semicircular o cuadrado', 'De mano o con cadena', 'Asa integrada'],
        CAT: ['Tancament semicircular o quadrat', 'De mà o amb cadeneta', 'Nanseta integrada'],
        EN: ['Semicircular or square closure', 'Handheld or with chain', 'Integrated handle']
      }
    },

    addons: [
      {
        id: 'chain_120',
        price: 5,
        label: {
          CAT: 'Afegir cadeneta metàl·lica 1,20m',
          ES: 'Añadir cadena metálica 1,20m',
          EN: 'Add metal chain 1.20m'
        }
      }
    ]
  },


  {
    id: 'oraia',
    name: 'Oraïa',
    meaning: {
      CAT: 'del grec “bella”; calidesa i feminitat.',
      ES: 'del griego “bella”; calidez y feminidad',
      EN: 'from the Greek “beautiful”; warmth and femininity'
    },
    description: { 
      ES: 'Bolso artesanal elaborado con hilo de piel vegana y tejido con el elegante punto cesto o intercalado. Disponible en varios colores y en forma semicircular o cuadrada, con asa integrada.', 
      CAT: 'Bolso artesanal fet amb fil de pell vegana i treballat amb el delicat punt cistell o intercalat. Disponible en diferents colors i en forma semicircular o quadrada, amb nanseta integrada.', 
      EN: 'Handcrafted bag made from vegan leather yarn, woven with an elegant basket or interlaced stitch. Available in different colours and in a semicircular or square shape, with an integrated handle.' 
    },
    price: 40,

    images: [
      { color: 'Burgundy', src: `${IMG_PATH}oraia/bossa-crochet-oraia.png` },

      // Burgundy
      { color: 'Burgundy', src: `${IMG_PATH}oraia/oraia-ecopell-burgundy-punt-interccalat-2.jpeg` },
      { color: 'Burgundy', src: `${IMG_PATH}oraia/oraia-ecopell-burgundy-punt-interccalat-1.jpeg` },

      // Chocolate
      { color: 'Chocolate', src: `${IMG_PATH}oraia/oraia-ecopell-xocolata-2-punt-cistell.jpeg` },
      { color: 'Chocolate', src: `${IMG_PATH}oraia/oraia-ecopell-xocolata-3-punt-intercalat.jpeg` },
      { color: 'Chocolate', src: `${IMG_PATH}oraia/oraia-ecopell-xocolata-punt-cistell.jpeg` },
      { color: 'Chocolate', src: `${IMG_PATH}oraia/oraia-marro-amb-cadeneta.jpeg` },

      // Teal (aproximado)
      { color: 'Teal', src: `${IMG_PATH}oraia/oraia-verd.jpeg` },

      // Sin color (fallback)
      { src: `${IMG_PATH}oraia/oraia-1-punt-intercalat.jpeg` },
      { src: `${IMG_PATH}oraia/oraia-ecopell-burgundi-punt-cistell.jpeg` }
    ],

    colors: [
      { name: 'Chocolate', hex: '#3E2723' },
      { name: 'Burgundy', hex: '#800020' },
      { name: 'Teal', hex: '#008080' }
    ],

    details: {
      material: {
        ES: 'Hilo de piel vegana',
        CAT: 'Fil de pell vegana',
        EN: 'Vegan leather yarn'
      },
      stitch: {
        ES: 'Punto cesto o intercalado',
        CAT: 'Punt cistell o intercalat',
        EN: 'Basket or interleaved stitch'
      },
      options: { 
        ES: ['Cierre semicircular o cuadrado', 'De mano o con cadena', 'Asa integrada'],
        CAT: ['Tancament semicircular o quadrat', 'De mà o amb cadeneta', 'Nanseta integrada'],
        EN: ['Semicircular or square closure', 'Handheld or with chain', 'Integrated handle']
      },
    },

    addons: [
      {
        id: 'chain_120',
        price: 5,
        label: {
          CAT: 'Afegir cadeneta metàl·lica 1,20m',
          ES: 'Añadir cadena metálica 1,20m',
          EN: 'Add metal chain 1.20m'
        }
      }
    ]
  },

  {
    id: 'altair',
    name: 'Altair',
    meaning: {
      CAT: 'una de les estrelles més brillants del cel...',
      ES: 'una de las estrellas más brillantes del cielo...',
      EN: 'one of the brightest stars in the night sky...'
    },
    description: {
      ES: 'Bolso artesanal que destaca por su delicado punto estrella...',
      CAT: 'Bolso artesanal que destaca pel seu delicat punt d’estrella...',
      EN: 'Handcrafted bag distinguished by its delicate star stitch...'
    },
    price: 50,
    images: [
      // fallback (general)
      { color: 'Pale Pink', src: `${IMG_PATH}altair/bossa-crochet-altair.png` },

      // Pale Pink
      { color: 'Pale Pink', src: `${IMG_PATH}altair/altair-pell-rosa.jpeg` },
      { color: 'Pale Pink', src: `${IMG_PATH}altair/altair-pell-rosa-2.jpeg` }
    ],
    dimensions: {
      CAT: '28 x 22 x 10 cm aprox. (llarg x alt x fons)',
      ES: '28 x 22 x 10 cm aprox. (largo x alto x fondo)',
      EN: 'Approx. 28 x 22 x 10 cm (width x height x depth)'
    },
    careInstructions: {
      CAT: 'Neteja en sec o amb un drap humit. Deixa’l assecar lluny de fonts de calor directa.',
      ES: 'Limpieza en seco o con un paño húmedo. Deja que se seque lejos de fuentes de calor directa.',
      EN: 'Spot clean or wipe with a damp cloth. Let it air dry away from direct heat.'
    },
    colors: [
      { name: 'Pale Pink', hex: '#FADADD' },
      { name: 'Black', hex: '#000000' }
    ],
    details: {
      material: {
        ES: 'Piel vegana o lycra reciclada',
        CAT: 'Pell vegana o lycra reciclada',
        EN: 'Vegan leather or recycled lycra'
      }
    },
    addons: [
      {
        id: 'chain_120',
        price: 5,
        label: {
          CAT: 'Afegir cadeneta metàl·lica 1,20m',
          ES: 'Añadir cadena metálica 1,20m',
          EN: 'Add metal chain 1.20m'
        }
      }
    ]
  },

  {
    id: 'lyra',
    name: 'Lyra',
    meaning: {
      CAT: 'com la constel·lació, elegant i minimalista.',
      ES: 'como la constelación, elegante y minimalista.',
      EN: 'like the constellation – elegant and minimalist.'
    },
    description: {
      ES: 'Bolso clutch alargado tipo baguette...',
      CAT: 'Bolso clutch allargat tipus baguette...',
      EN: 'Elongated baguette-style clutch...'
    },
    price: 50,
    images: [
      // fallback
      { color: 'Black', src: `${IMG_PATH}lyra/bossa-crochet-lyra.png` },

      // Black
      { color: 'Black', src: `${IMG_PATH}lyra/lyra-negre-pell.jpeg` },
      { color: 'Black', src: `${IMG_PATH}lyra/lyra-negre-pell-2.jpeg` },

      // Brown
      { color: 'Brown', src: `${IMG_PATH}lyra/lyra-marro-fantasia-2.jpeg` },
      { color: 'Brown', src: `${IMG_PATH}lyra/lyra-marro-fantasia-3.jpeg` },
      { color: 'Brown', src: `${IMG_PATH}lyra/lyra-marro-amb-cadeneta.jpeg` }
    ],
    colors: [
      { name: 'Black', hex: '#000000' }
    ],
    details: {
      material: {
        ES: 'Piel vegana o lanas recicladas',
        CAT: 'Pell vegana o llanes reciclades',
        EN: 'Vegan leather or recycled yarns'
      }
    },
    addons: [
      {
        id: 'chain_120',
        price: 5,
        label: {
          CAT: 'Afegir cadeneta metàl·lica 1,20m',
          ES: 'Añadir cadena metálica 1,20m',
          EN: 'Add metal chain 1.20m'
        }
      }
    ]
  },

  {
    id: 'verae',
    name: 'Vérae',
    meaning: {
      CAT: '“autèntica” en llatí...',
      ES: '“auténtica” en latín...',
      EN: '“authentic” in Latin...'
    },
    description: {
      ES: 'Clutch artesanal elaborado con hilo de camisetas recicladas...',
      CAT: 'Clutch artesanal fet amb fil de samarretes reciclades...',
      EN: 'Handcrafted clutch made from recycled T-shirt yarn...'
    },
    price: 30,
    images: [
      // fallback
      { color: 'Brown', src: `${IMG_PATH}verae/bossa-crochet-verae.png` },

      // Brown
      { color: 'Brown', src: `${IMG_PATH}verae/verae-marro.jpeg` },

      // Blue
      { color: 'Blue', src: `${IMG_PATH}verae/verae-blau-+-print-blau.jpeg` },

      // Animal Print (mixto)
      { color: 'Animal Print', src: `${IMG_PATH}verae/verae-marro-+-negre-+-print.jpeg` }
    ],
    colors: [
      { name: 'Animal Print', hex: '#D2B48C' },
      { name: 'Black', hex: '#000000' }
    ],
    details: {
      material: {
        ES: 'Hilo de camisetas recicladas',
        CAT: 'Fil de samarretes reciclades',
        EN: 'Recycled T-shirt yarn'
      }
    },
    addons: [
      {
        id: 'chain_120',
        price: 5,
        label: {
          CAT: 'Afegir cadeneta metàl·lica 1,20m',
          ES: 'Añadir cadena metálica 1,20m',
          EN: 'Add metal chain 1.20m'
        }
      }
    ]
  },

  {
    id: 'nara',
    name: 'Nara',
    meaning: {
      CAT: 'senzillesa i equilibri en essència.',
      ES: 'sencillez y equilibrio en esencia',
      EN: 'simplicity and balance in essence'
    },
    description: {
      ES: 'Bolso hecho a mano con materiales reciclados...',
      CAT: 'Bolso fet a mà amb materials reciclats...',
      EN: 'Handcrafted bag made from recycled materials...'
    },
    price: 30,
    images: [
      { color: 'Black & White', src: `${IMG_PATH}nara/bossa-crochet-nara.png` },

      { color: 'Black & White', src: `${IMG_PATH}nara/nara-blanc+negre.jpeg` },
      { color: 'Black & White', src: `${IMG_PATH}nara/nara-blanc+negre-2.jpeg` },

      { color: 'Pink & Burgundy', src: `${IMG_PATH}nara/nara-rosa+burgundy.jpeg` },

      { color: 'Red & Gold', src: `${IMG_PATH}nara/nara-vermell-+-daurat.jpeg` }
    ],
    colors: [
      { name: 'Black & White', hex: '#000000' },
      { name: 'Pink & Burgundy', hex: '#C2185B' },
      { name: 'Red & Gold', hex: '#B71C1C' }
    ],
    details: {
      material: {
        ES: 'Materiales reciclados',
        CAT: 'Materials reciclats',
        EN: 'Recycled materials'
      }
    }
  },

  {
    id: 'vela',
    name: 'Vela',
    meaning: {
      CAT: 'inspirat pel vent, el mar i les aventures.',
      ES: 'inspirada por el viento...',
      EN: 'inspired by the wind...'
    },
    description: {
      ES: 'Bolso hecho a mano con materiales reciclados...',
      CAT: 'Bolso fet a mà amb materials reciclats...',
      EN: 'Handmade bag crafted from recycled materials...'
    },
    price: 30,
    images: [
      { color: 'Green', src: `${IMG_PATH}vela/bossa-crochet-vela.png` },

      { color: 'Blue', src: `${IMG_PATH}vela/vela-blaus.jpeg` },

      { color: 'Pink & Red', src: `${IMG_PATH}vela/vela-rosa+vermell.jpeg` },

      { color: 'Green', src: `${IMG_PATH}vela/vela-verds.jpeg` },
      { color: 'Green', src: `${IMG_PATH}vela/vela-verds-2.jpeg` }
    ],
    colors: [
      { name: 'Blue', hex: '#1E3A8A' },
      { name: 'Pink & Red', hex: '#E91E63' },
      { name: 'Green', hex: '#2E7D32' }
    ],
    details: {
      material: {
        ES: 'Materiales reciclados',
        CAT: 'Materials reciclats',
        EN: 'Recycled materials'
      }
    }
  },

  {
    id: 'velain',
    name: 'Velaïn',
    meaning: {
      CAT: 'fusió entre “velvet” i “divin”.',
      ES: 'fusión entre “velvet” y “divin”.',
      EN: 'a fusion of “velvet” and “divine.”'
    },
    description: {
      ES: 'Bolso artesanal realizado con un hilo especial de terciopelo...',
      CAT: 'Bolso artesanal elaborat amb un fil especial de vellut...',
      EN: 'Handcrafted bag made with a special velvet yarn...'
    },
    price: 45,
    images: [
      { color: 'Fuchsia', src: `${IMG_PATH}velain/bossa-crochet-velain.png` },

      { color: 'Fuchsia', src: `${IMG_PATH}velain/velain-fucsia.jpeg` },
      { color: 'Fuchsia', src: `${IMG_PATH}velain/velain-fucsia-2.jpeg` }
    ],
    colors: [
      { name: 'Fuchsia', hex: '#C2185B' }
    ],
    details: {
      material: {
        ES: 'Hilo de terciopelo especial',
        CAT: 'Fil de vellut especial',
        EN: 'Special velvet yarn'
      }
    },
    addons: [
      {
        id: 'chain_120',
        price: 5,
        label: {
          CAT: 'Afegir cadeneta metàl·lica 1,20m',
          ES: 'Añadir cadena metálica 1,20m',
          EN: 'Add metal chain 1.20m'
        }
      }
    ]
  }
];

export const PRODUCTS: Product[] = RAW_PRODUCTS.map(p => ({
  ...p,
  images: p.images.map(img => ({ ...img, src: toWebp(img.src) })),
}));

export const TRANSLATIONS: Record<Language, Translation> = {
  CAT: {
    common: {
      back: 'Tornar',
      explore: 'Explorar',
      loading: 'Carregant...',
      notFound: 'Producte no trobat',
      backToShop: 'Tornar a la botiga',
      backToHome: 'Tornar a l’inici',
      artisanNote: 'Cada una de les meves creacions és totalment artesanal, feta íntegrament a mà amb la tècnica del crochet. Acabades i cosides a mà quan cal. Les petites imperfeccions, si n’hi ha, són naturals i garanteixen l’autenticitat del producte. Cada bolso és una peça única.',
      productionTime: 'Elaboro cada peça a mà i sota demanda en un termini de 5 a 10 dies laborables.',
      language: 'Idioma'
    },
    nav: { home: 'Inici', about: 'Qui sóc', shop: 'Tenda', contact: 'Contacte', faq: 'Preguntes freqüents' },
    a11y: {
      backToTop: 'Tornar a dalt',
      openMenu: 'Obrir menú',
      closeMenu: 'Tancar menú',
      breadcrumb: 'Ruta de navegació',
      chat: 'Escriu-nos per Instagram',
      skipToContent: 'Salta al contingut',
      theme: 'Canviar tema',
    },
    theme: { light: 'Clar', dark: 'Fosc', system: 'Sistema' },
    footer: {
      explore: 'Explora',
      legalHeading: 'Legal',
      cookiePrefs: 'Preferències de cookies',
      followUs: 'Segueix-nos',
    },
    notFound: {
      seoTitle: 'Pàgina no trobada',
      title: 'Aquesta pàgina s’ha perdut entre els fils',
      body: 'L’enllaç que has seguit no existeix o s’ha mogut. Torna a l’inici o descobreix el catàleg de peces.',
      cta: 'Anar a la botiga',
    },
    thanks: {
      seoTitle: 'Gràcies',
      title: 'Gràcies pel teu missatge',
      body: 'He rebut la teva consulta i et respondré personalment com abans millor.',
      response: 'Normalment responc en menys de 24–48 h laborables.',
      ctaShop: 'Seguir explorant el catàleg',
      ctaHome: 'Tornar a l’inici',
    },
    faqMeta: {
      seoTitle: 'Preguntes freqüents',
      seoDescription: 'Resolc els dubtes més habituals sobre les bosses de crochet fetes a mà de Cro&Txet: compres, terminis, personalització, enviaments i devolucions.',
      label: 'Ajuda',
      title: 'Preguntes freqüents',
      subtitle: 'Tot el que sol preguntar-se abans d’encarregar una peça.',
      stillHelp: 'No has trobat el que buscaves?',
      ctaContact: 'Escriu-me directament',
    },
    newsletter: {
      label: 'Newsletter',
      title: 'Rep les novetats i un 10% en el teu primer encàrrec',
      desc: 'Noves col·leccions, peces disponibles i històries del taller. Sense spam.',
      incentive: '10% de descompte en la teva primera comanda personalitzada.',
      placeholder: 'El teu correu electrònic',
      cta: 'Vull apuntar-m’hi',
      success: 'Fet! Revisa el teu correu per confirmar la subscripció.',
      error: 'No s’ha pogut completar la subscripció. Torna-ho a provar més tard.',
      consent: 'En apuntar-t’hi acceptes la Política de privacitat. Pots donar-te de baixa quan vulguis.',
    },
    cookies: {
      title: 'Aquesta web fa servir cookies',
      body: 'Faig servir cookies pròpies necessàries i, amb el teu permís, cookies analítiques per entendre com es fa servir la web i millorar-la.',
      accept: 'Acceptar-les totes',
      reject: 'Només les necessàries',
      settings: 'Configurar',
      save: 'Desar preferències',
      necessary: 'Necessàries',
      necessaryDesc: 'Imprescindibles per al funcionament bàsic i la seguretat. Sempre actives.',
      analytics: 'Analítiques',
      analyticsDesc: 'Google Analytics i Vercel Analytics, de forma agregada i anònima.',
      policy: 'Més informació a la Política de privacitat.',
    },
    product: {
      share: 'Compartir',
      shareCopied: 'Enllaç copiat',
      stickyCta: 'Consultar aquesta peça',
    },
    instagram: {
      label: 'Instagram',
      title: 'Del taller a Instagram',
      subtitle: 'Nous models, encàrrecs i històries del dia a dia. @cro_and_txet.',
      follow: 'Seguir @cro_and_txet',
      viewPost: 'Veure la publicació',
    },
    testimonials: {
      label: 'Ressenyes',
      title: 'El que diuen les clientes',
      subtitle: 'Cada peça acaba en mans d’algú que l’estima. Això és el que expliquen.',
      ratingSummary: '{average} de 5 · {count} ressenyes',
      productTitle: 'Ressenyes d’aquesta peça',
      requestCta: 'Has comprat una peça? Explica’ns la teva experiència',
      reviewPrefill: 'La meva experiència amb la meva peça de Cro&Txet:\n\n',
    },
    home: {
      heroSubtitle: 'Bosses úniques, fetes a mà amb amor i estil',
      heroTitle: 'Fils que expliquen una història',
      cta: 'Descobrir models',
      philosophyTitle: 'Filosofia',
      philosophySubtitle: 'L’art de crear amb calma, fil a fil.',
      values: {
        slow: 'Slow fashion',
        slowDesc: 'Cada bolso es crea a poc a poc, respectant el temps del procés i posant atenció a cada detall.',
        handmade: 'Fet a mà',
        handmadeDesc: 'Elaboro cada peça personalment, una a una, de manera artesanal.',
        demand: 'Únic i conscient',
        demandSubtitle: '5–10 dies laborables',
        demandDesc: 'Treballo sota demanda per oferir peces exclusives i evitar produccions innecessàries.'
      },
      lookbookTitle: 'Dissenyats per perdurar.',
      lookbookDesc: 'Peces que no segueixen tendències efímeres, sinó que expliquen la teva pròpia història.',
      lookbookCta: 'Explorar',
      aboutLinkTitle: 'L’ànima darrere el fil',
      aboutLinkDesc: 'Descobreix com un llegat familiar i una pausa necessària es van convertir en passió pel crochet.',
      aboutLinkCta: 'Conèixer la meva història',
      seoTitle: 'Bosses de crochet fetes a mà',
      seoDescription: 'Bosses de crochet fetes a mà, peces úniques de disseny artesanal. Cro&Txet — Barcelona, slow fashion i producció sota demanda.',
      heroImageAlt: 'Bossa de crochet artesanal feta a mà per Cro&Txet',
      workshopImageAlt: 'Taller artesanal de Cro&Txet a Barcelona',
      lookbookImageAlt: 'detall de bossa de crochet'
    },
    about: {
      label: 'Qui sóc',
      title: 'Fils que expliquen una història',
      story: [
        'Tot va començar amb la meva mare. Sempre la recordo amb alguna labor a les mans, cosint amb aquella calma i delicadesa que només dona l’amor per allò que es fa a foc lent. Ella em va ensenyar els primers punts, gairebé com un joc, sense imaginar que anys més tard aquell fil invisible ens seguiria unint.',
        'Aquest estiu, obligada a fer una pausa, una amiga em va animar a reprendre el crochet. El que havia de ser una distracció s’ha convertit en una passió. Punt rere punt, vaig començar a crear bosses, primer per regalar... fins que tothom em va dir el mateix: “Les has de vendre!”',
        'I aquí em teniu: transformant fils en històries, colors en emocions i temps en peces uniques.',
        'Cada bolso està fet a mà, amb cura, amor i estil propi. Hi ha models i colors que pots triar, però també pots personalitzar la teva bossa perquè sigui tan única com tu.',
        'Perquè quan una peça es fa amb el cor, no és només un bolso —és una petita part de qui el crea.'
      ],
      inspirationLabel: 'Inspiració',
      inspirationDesc: 'Llum i calma del mediterrani.',
      quote: '“No només teixeixo fils, teixeixo moments de calma en un món que corre massa ràpid.”',
      seoTitle: 'Qui sóc — la creadora de Cro&Txet',
      seoDescription: 'Coneix la història darrere de Cro&Txet: un llegat familiar, una passió pel crochet i bosses fetes a mà amb amor a Barcelona.',
      founderImageAlt: 'Meritxell, creadora de Cro&Txet, treballant al taller'
    },
    shop: {
      label: 'Col·lecció',
      title: 'Catàleg de Peces',
      desc: 'Bosses fetes a mà amb amor i estil. Cada peça és exclusiva i única.',
      optionalChain: 'Afegir cadeneta metàl·lica (+5€)',
      addToCart: 'Consultar peça',
      color: 'Color',
      availableColors: 'Colors',
      detailsLabel: 'Detalls de la peça',
      materialLabel: 'Material',
      stitchLabel: 'Tipus de punt',
      optionsLabel: 'Opcions',
      dimensionsLabel: 'Mides',
      careLabel: 'Cura de la peça',
      seoTitle: 'Catàleg de bosses de crochet fetes a mà',
      seoDescription: 'Descobreix el catàleg de bosses de crochet fetes a mà de Cro&Txet: peces úniques, personalitzables i sota demanda.'
    },
    legal: {
      returnsSeoDescription: 'Política de devolucions de Cro&Txet.',
      privacySeoDescription: 'Política de privacitat de Cro&Txet.',
      termsSeoDescription: 'Termes i condicions de compra i ús de la web de Cro&Txet.',
      terms: 'Termes i condicions',
      lastUpdated: 'Última actualització'
    },
    contact: {
      label: 'Contacte',
      title: '¿Necessites que t’ajudem?',
      subtitle: 'Sempre estic disponible per ajudar-te. Pots contactar amb nosaltres omplint el formulari següent.',
      seoTitle: 'Contacte',
      seoDescription: 'Contacta amb Cro&Txet per demanar pressupost o personalitzar la teva bossa de crochet feta a mà.',
      responseTime: 'Responc tots els missatges personalment, normalment en menys de 24–48 h laborables.',
      form: {
        name: 'Nom', namePlaceholder: 'El teu nom',
        email: 'Email', emailPlaceholder: 'hola@croandtxet.cat',
        message: 'Missatge', messagePlaceholder: 'En què et puc ajudar?',
        send: 'Enviar Missatge', sent: 'Enviat amb èxit', productInquiry: 'Consulta sobre',
        error: 'No s’ha pogut enviar el missatge. Torna-ho a provar o escriu-nos a hola@croandtxet.cat.',
        invalidEmail: 'Introdueix una adreça de correu vàlida.'
      },
      info: { emailTitle: 'Email', atelierTitle: 'Taller', atelierLoc: 'Barcelona' },
      care: { 
        title: 'Consells per cuidar el teu bolso fet a mà', 
        content: `• Desa’l amb paper a l’interior perquè conservi la seva forma.
• No el rentis a la rentadora, ja que el mecanisme interior podria desgastar-se. En cas de taca, aplica un desgreixant, deixa’l actuar i frega suaument amb un drap humit. Per a taques més persistents, porta’l a la tintoreria.
• Si amb el temps el mecanisme interior comença a fer soroll, no el llencis: aplica una petita quantitat de lubricant amb un bastonet de cotó.`
      },
      policies: { returns: 'Política de devolucions', privacy: 'Privacitat' }
    }
  },
  ES: {
    common: {
      back: 'Volver',
      explore: 'Explorar',
      loading: 'Cargando...',
      notFound: 'Producto no encontrado',
      backToShop: 'Volver a la tienda',
      backToHome: 'Volver al inicio',
      artisanNote: 'Cada una de mis creaciones es totalmente artesanal, realizada íntegramente a mano con la técnica del crochet. Terminadas y cosidas a mano cuando es necesario. Las pequeñas imperfecciones, si las hay, son naturales y garantizan la autenticidad del producto. Cada bolso es una pieza única.',
      productionTime: 'Elaboro cada unidad a mano y bajo demanda en un plazo de 5 a 10 días laborables.',
      language: 'Idioma'
    },
    nav: { home: 'Inicio', about: 'Quien soy', shop: 'Tienda', contact: 'Contacto', faq: 'Preguntas frecuentes' },
    a11y: {
      backToTop: 'Volver arriba',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      breadcrumb: 'Ruta de navegación',
      chat: 'Escríbenos por Instagram',
      skipToContent: 'Saltar al contenido',
      theme: 'Cambiar tema',
    },
    theme: { light: 'Claro', dark: 'Oscuro', system: 'Sistema' },
    footer: {
      explore: 'Explora',
      legalHeading: 'Legal',
      cookiePrefs: 'Preferencias de cookies',
      followUs: 'Síguenos',
    },
    notFound: {
      seoTitle: 'Página no encontrada',
      title: 'Esta página se ha perdido entre los hilos',
      body: 'El enlace que has seguido no existe o se ha movido. Vuelve al inicio o descubre el catálogo de piezas.',
      cta: 'Ir a la tienda',
    },
    thanks: {
      seoTitle: 'Gracias',
      title: 'Gracias por tu mensaje',
      body: 'He recibido tu consulta y te responderé personalmente lo antes posible.',
      response: 'Normalmente respondo en menos de 24–48 h laborables.',
      ctaShop: 'Seguir explorando el catálogo',
      ctaHome: 'Volver al inicio',
    },
    faqMeta: {
      seoTitle: 'Preguntas frecuentes',
      seoDescription: 'Resuelvo las dudas más habituales sobre los bolsos de crochet hechos a mano de Cro&Txet: compras, plazos, personalización, envíos y devoluciones.',
      label: 'Ayuda',
      title: 'Preguntas frecuentes',
      subtitle: 'Todo lo que se suele preguntar antes de encargar una pieza.',
      stillHelp: '¿No has encontrado lo que buscabas?',
      ctaContact: 'Escríbeme directamente',
    },
    newsletter: {
      label: 'Newsletter',
      title: 'Recibe las novedades y un 10% en tu primer encargo',
      desc: 'Nuevas colecciones, piezas disponibles e historias del taller. Sin spam.',
      incentive: '10% de descuento en tu primer pedido personalizado.',
      placeholder: 'Tu correo electrónico',
      cta: 'Quiero apuntarme',
      success: '¡Hecho! Revisa tu correo para confirmar la suscripción.',
      error: 'No se ha podido completar la suscripción. Inténtalo de nuevo más tarde.',
      consent: 'Al apuntarte aceptas la Política de privacidad. Puedes darte de baja cuando quieras.',
    },
    cookies: {
      title: 'Esta web usa cookies',
      body: 'Uso cookies propias necesarias y, con tu permiso, cookies analíticas para entender cómo se usa la web y mejorarla.',
      accept: 'Aceptarlas todas',
      reject: 'Solo las necesarias',
      settings: 'Configurar',
      save: 'Guardar preferencias',
      necessary: 'Necesarias',
      necessaryDesc: 'Imprescindibles para el funcionamiento básico y la seguridad. Siempre activas.',
      analytics: 'Analíticas',
      analyticsDesc: 'Google Analytics y Vercel Analytics, de forma agregada y anónima.',
      policy: 'Más información en la Política de privacidad.',
    },
    product: {
      share: 'Compartir',
      shareCopied: 'Enlace copiado',
      stickyCta: 'Consultar esta pieza',
    },
    instagram: {
      label: 'Instagram',
      title: 'Del taller a Instagram',
      subtitle: 'Nuevos modelos, encargos e historias del día a día. @cro_and_txet.',
      follow: 'Seguir @cro_and_txet',
      viewPost: 'Ver la publicación',
    },
    testimonials: {
      label: 'Reseñas',
      title: 'Lo que dicen las clientas',
      subtitle: 'Cada pieza acaba en manos de alguien que la quiere. Esto es lo que cuentan.',
      ratingSummary: '{average} de 5 · {count} reseñas',
      productTitle: 'Reseñas de esta pieza',
      requestCta: '¿Has comprado una pieza? Cuéntanos tu experiencia',
      reviewPrefill: 'Mi experiencia con mi pieza de Cro&Txet:\n\n',
    },
    home: {
      heroSubtitle: 'Bolsos únicos, hechos a mano con amor y estilo',
      heroTitle: 'Hilos que cuentan una historia',
      cta: 'Ver catálogo',
      philosophyTitle: 'Filosofía',
      philosophySubtitle: 'El arte de crear con calma, hilo a hilo.',
      values: {
        slow: 'Slow fashion',
        slowDesc: 'Cada bolso se crea sin prisas, respetando el proceso y cuidando cada detalle.',
        handmade: 'Hecho a mano',
        handmadeDesc: 'Elaboro cada pieza personalmente, una a una, de forma artesanal.',
        demand: 'Único y consciente',
        demandSubtitle: '5–10 días laborables',
        demandDesc: 'Trabajo bajo demanda para ofrecer piezas exclusivas y evitar producciones innecesarias.'
      },
      lookbookTitle: 'Diseñados para perdurar.',
      lookbookDesc: 'Piezas que no siguen tendencias efímeras, sino que acompañan tu propio estilo.',
      lookbookCta: 'Explorar',
      aboutLinkTitle: 'El alma detrás del hilo',
      aboutLinkDesc: 'Descubre cómo un legado familiar y una pausa necesaria se transformaron en pasión por el crochet.',
      aboutLinkCta: 'Conocer mi historia',
      seoTitle: 'Bolsos de crochet hechos a mano',
      seoDescription: 'Bolsos de crochet hechos a mano, piezas únicas de diseño artesanal. Cro&Txet — Barcelona, slow fashion y producción bajo demanda.',
      heroImageAlt: 'Bolso de crochet artesanal hecho a mano por Cro&Txet',
      workshopImageAlt: 'Taller artesanal de Cro&Txet en Barcelona',
      lookbookImageAlt: 'detalle de bolso de crochet'
    },
    about: {
      label: 'Quien soy',
      title: 'Hilos que cuentan una historia',
      story: [
        'Todo empezó con mi madre. Siempre la recuerdo con alguna labor entre las manos, cosiendo con esa calma y delicadeza que solo da el amor por las cosas hechas despacio. Ella me enseñó los primeros puntos, casi como un juego, sin imaginar que aquel hilo invisible seguiría uniéndonos muchos años después.',
        'Este verano, obligada a hacer una pausa, una amiga me animó a retomar el crochet. Lo que comenzó como una distracción se ha convertido en una pasión. Punto a punto, empecé a crear bolsos, primero para regalar... hasta que todos me decían lo mismo: “¡Deberías venderlos!”',
        'Y aquí estoy: transformando hilos en historias, colores en emociones y tiempo en piezas únicas.',
        'Cada bolso está hecho a mano, con cariño, cuidado y mucho estilo. Hay modelos y colores que puedes elegir, pero también puedes personalizar tu bolso para que sea tan único como tú.',
        'Porque cuando una pieza se hace con el corazón, no es solo un bolso —es una parte de quien lo crea.'
      ],
      inspirationLabel: 'Inspiración',
      inspirationDesc: 'Luz y calma del mediterráneo.',
      quote: '“No solo tejo hilos, tejo momentos de calma en un mundo que corre demasiado rápido.”',
      seoTitle: 'Quién soy — la creadora de Cro&Txet',
      seoDescription: 'Conoce la historia detrás de Cro&Txet: un legado familiar, una pasión por el crochet y bolsos hechos a mano con amor en Barcelona.',
      founderImageAlt: 'Meritxell, creadora de Cro&Txet, trabajando en el taller'
    },
    shop: {
      label: 'Colección',
      title: 'Catálogo de Piezas',
      desc: 'Bolsos hechos a mano con amor y estilo. Cada pieza es exclusiva y única.',
      optionalChain: 'Añadir cadena metálica (+5€)',
      addToCart: 'Consultar pieza',
      color: 'Color',
      availableColors: 'Colores',
      detailsLabel: 'Detalles de la pieza',
      materialLabel: 'Material',
      stitchLabel: 'Tipo de punto',
      optionsLabel: 'Opciones',
      dimensionsLabel: 'Medidas',
      careLabel: 'Cuidado de la pieza',
      seoTitle: 'Catálogo de bolsos de crochet hechos a mano',
      seoDescription: 'Descubre el catálogo de bolsos de crochet hechos a mano de Cro&Txet: piezas únicas, personalizables y bajo demanda.'
    },
    legal: {
      returnsSeoDescription: 'Política de devoluciones de Cro&Txet.',
      privacySeoDescription: 'Política de privacidad de Cro&Txet.',
      termsSeoDescription: 'Términos y condiciones de compra y uso de la web de Cro&Txet.',
      terms: 'Términos y condiciones',
      lastUpdated: 'Última actualización'
    },
    contact: {
      label: 'Contacto',
      title: '¿Necesitas que te ayudemos?',
      subtitle: 'Estoy siempre disponible para ayudarte. Puedes contactarnos rellenando el formulario a continuación.',
      seoTitle: 'Contacto',
      seoDescription: 'Contacta con Cro&Txet para pedir presupuesto o personalizar tu bolso de crochet hecho a mano.',
      responseTime: 'Respondo todos los mensajes personalmente, normalmente en menos de 24–48 h laborables.',
      form: {
        name: 'Nombre', namePlaceholder: 'Tu nombre',
        email: 'Correo electrónico', emailPlaceholder: 'hola@croandtxet.cat',
        message: 'Comentario', messagePlaceholder: '¿En qué puedo ayudarte?',
        send: 'Enviar Mensaje', sent: 'Enviado con éxito', productInquiry: 'Consulta sobre',
        error: 'No se ha podido enviar el mensaje. Inténtalo de nuevo o escríbenos a hola@croandtxet.cat.',
        invalidEmail: 'Introduce una dirección de correo válida.'
      },
      info: { emailTitle: 'Email', atelierTitle: 'Taller', atelierLoc: 'Barcelona' },
      care: { 
        title: 'Consejos para cuidar tu bolso hecho a mano', 
        content: `• Guárdalo con papel en el interior para que conserve su forma.
• No lo laves a máquina, ya que el mecanismo interior podría desgastarse. En caso de mancha, aplica un desengrasante, déjalo actuar y frota suavemente con un paño húmedo. Para manchas más persistentes, llévalo a la tintorería.
• Si con el tiempo el mecanismo interior empieza a hacer ruido, no lo deseches: aplica una pequeña cantidad de lubricante con un bastoncillo de algodón.`
      },
      policies: { returns: 'Política de devoluciones', privacy: 'Privacidad' }
    }
  },
  EN: {
    common: {
      back: 'Back',
      explore: 'Explore',
      loading: 'Loading...',
      notFound: 'Product not found',
      backToShop: 'Back to shop',
      backToHome: 'Back to home',
      artisanNote: 'Each of my creations is entirely handcrafted using the crochet technique, and finished and sewn by hand when necessary. Small imperfections, if any, are natural and reflect the authenticity of the product. Every bag is a unique piece.',
      productionTime: 'Each piece is handmade and made to order within 5 to 10 business days.',
      language: 'Language'
    },
    nav: { home: 'Home', about: 'About Me', shop: 'Shop', contact: 'Contact', faq: 'FAQ' },
    a11y: {
      backToTop: 'Back to top',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      breadcrumb: 'Breadcrumb',
      chat: 'Message us on Instagram',
      skipToContent: 'Skip to content',
      theme: 'Switch theme',
    },
    theme: { light: 'Light', dark: 'Dark', system: 'System' },
    footer: {
      explore: 'Explore',
      legalHeading: 'Legal',
      cookiePrefs: 'Cookie preferences',
      followUs: 'Follow us',
    },
    notFound: {
      seoTitle: 'Page not found',
      title: 'This page got lost among the threads',
      body: 'The link you followed doesn’t exist or has moved. Head back home or explore the catalog.',
      cta: 'Go to the shop',
    },
    thanks: {
      seoTitle: 'Thank you',
      title: 'Thank you for your message',
      body: 'I’ve received your enquiry and will reply personally as soon as I can.',
      response: 'I usually reply within 24–48 business hours.',
      ctaShop: 'Keep exploring the catalog',
      ctaHome: 'Back to home',
    },
    faqMeta: {
      seoTitle: 'Frequently asked questions',
      seoDescription: 'Answers to the most common questions about Cro&Txet handmade crochet bags: buying, timelines, customisation, shipping and returns.',
      label: 'Help',
      title: 'Frequently asked questions',
      subtitle: 'Everything people usually ask before commissioning a piece.',
      stillHelp: 'Didn’t find what you were looking for?',
      ctaContact: 'Write to me directly',
    },
    newsletter: {
      label: 'Newsletter',
      title: 'Get the news and 10% off your first commission',
      desc: 'New collections, available pieces and stories from the studio. No spam.',
      incentive: '10% off your first custom order.',
      placeholder: 'Your email address',
      cta: 'Sign me up',
      success: 'Done! Check your inbox to confirm your subscription.',
      error: 'We couldn’t complete the subscription. Please try again later.',
      consent: 'By signing up you accept the Privacy Policy. You can unsubscribe any time.',
    },
    cookies: {
      title: 'This site uses cookies',
      body: 'I use necessary first-party cookies and, with your permission, analytics cookies to understand how the site is used and improve it.',
      accept: 'Accept all',
      reject: 'Necessary only',
      settings: 'Customise',
      save: 'Save preferences',
      necessary: 'Necessary',
      necessaryDesc: 'Essential for basic functionality and security. Always on.',
      analytics: 'Analytics',
      analyticsDesc: 'Google Analytics and Vercel Analytics, aggregated and anonymous.',
      policy: 'More information in the Privacy Policy.',
    },
    product: {
      share: 'Share',
      shareCopied: 'Link copied',
      stickyCta: 'Inquire about this piece',
    },
    instagram: {
      label: 'Instagram',
      title: 'From the studio to Instagram',
      subtitle: 'New models, commissions and day-to-day stories. @cro_and_txet.',
      follow: 'Follow @cro_and_txet',
      viewPost: 'View the post',
    },
    testimonials: {
      label: 'Reviews',
      title: 'What customers say',
      subtitle: 'Every piece ends up with someone who loves it. Here is what they say.',
      ratingSummary: '{average} out of 5 · {count} reviews',
      productTitle: 'Reviews for this piece',
      requestCta: 'Bought a piece? Tell us about your experience',
      reviewPrefill: 'My experience with my Cro&Txet piece:\n\n',
    },
    home: {
      heroSubtitle: 'Unique handmade bags, crafted with love and style',
      heroTitle: 'Threads that tell a story',
      cta: 'See catalog',
      philosophyTitle: 'Philosophy',
      philosophySubtitle: 'The art of creating with calm, stitch by stitch.',
      values: {
        slow: 'Slow fashion',
        slowDesc: 'Each bag is made slowly, respecting the process and every detail.',
        handmade: 'Handmade',
        handmadeDesc: 'I personally craft each piece, one by one, with care.',
        demand: 'Unique and conscious',
        demandSubtitle: '5–10 working days',
        demandDesc: 'Made to order to offer exclusive pieces and avoid unnecessary production.'
      },
      lookbookTitle: 'Designed to last.',
      lookbookDesc: 'Pieces that do not follow ephemeral trends, but tell your own story.',
      lookbookCta: 'Explore',
      aboutLinkTitle: 'The soul behind the thread',
      aboutLinkDesc: 'Discover how a family legacy and a necessary pause turned into a passion for crochet.',
      aboutLinkCta: 'Meet my story',
      seoTitle: 'Handmade crochet bags',
      seoDescription: 'Handmade crochet bags, one-of-a-kind artisan pieces. Cro&Txet — Barcelona, slow fashion and made-to-order production.',
      heroImageAlt: 'Handmade crochet bag by Cro&Txet',
      workshopImageAlt: 'Cro&Txet handmade atelier in Barcelona',
      lookbookImageAlt: 'bag detail'
    },
    about: {
      label: 'About Me',
      title: 'Threads that tell a story',
      story: [
        'It all started with my mother. I always remember her with some kind of needlework in her hands, sewing with the calm and delicacy that only come from loving what you do slowly and with care. She taught me my first stitches, almost as a game —never imagining that the invisible thread between us would keep us connected for years to come.',
        'This summer, while I had to take some time to rest, a friend encouraged me to pick up crochet again. What began as a pastime soon became a true passion. Stitch by stitch, I started creating bags —first as gifts, until everyone told me the same thing: “You should sell them!”',
        'And here I am: turning threads into stories, colours into emotions, and time into unique pieces.',
        'Each bag is handmade, with love, care, and style. There are some models and colours to choose from, but every piece can be custom-made to your preferences —so it’s as unique as you are.',
        'Because when something is made with heart, it’s more than just a bag —it’s a little piece of the person who made it.'
      ],
      inspirationLabel: 'Inspiration',
      inspirationDesc: 'Light and calm of the Mediterranean.',
      quote: '“I don\'t just weave threads, I weave moments of calm in a world that runs too fast.”',
      seoTitle: 'About — the maker behind Cro&Txet',
      seoDescription: 'Discover the story behind Cro&Txet: a family legacy, a passion for crochet, and handmade bags crafted with love in Barcelona.',
      founderImageAlt: 'Meritxell, founder of Cro&Txet, working in her atelier'
    },
    shop: {
      label: 'Collection',
      title: 'Piece Catalog',
      desc: 'Handmade bags crafted with love and style. Each piece is exclusive and unique.',
      optionalChain: 'Add metal bag chain (+5€)',
      addToCart: 'Inquire about piece',
      color: 'Color',
      availableColors: 'Colors',
      detailsLabel: 'Piece Details',
      materialLabel: 'Material',
      stitchLabel: 'Stitch Type',
      optionsLabel: 'Options',
      dimensionsLabel: 'Dimensions',
      careLabel: 'Care instructions',
      seoTitle: 'Handmade crochet bags catalog',
      seoDescription: 'Browse the Cro&Txet catalog of handmade crochet bags: unique, customizable, made-to-order pieces.'
    },
    legal: {
      returnsSeoDescription: 'Cro&Txet return policy.',
      privacySeoDescription: 'Cro&Txet privacy policy.',
      termsSeoDescription: 'Terms and conditions for purchasing from and using the Cro&Txet website.',
      terms: 'Terms & Conditions',
      lastUpdated: 'Last updated'
    },
    contact: {
      label: 'Contact',
      title: 'Need help?',
      subtitle: 'I’m always here to help. You can get in touch with us by filling out the form below.',
      seoTitle: 'Contact',
      seoDescription: 'Get in touch with Cro&Txet to request a quote or customize your handmade crochet bag.',
      responseTime: 'I reply to every message personally, usually within 24–48 business hours.',
      form: {
        name: 'Name', namePlaceholder: 'Your name',
        email: 'Email address', emailPlaceholder: 'hello@croandtxet.cat',
        message: 'Comment', messagePlaceholder: 'How can I help you?',
        send: 'Send Message', sent: 'Sent successfully', productInquiry: 'Inquiry about',
        error: 'The message couldn’t be sent. Please try again or email us at hola@croandtxet.cat.',
        invalidEmail: 'Please enter a valid email address.'
      },
      info: { emailTitle: 'Email', atelierTitle: 'Studio', atelierLoc: 'Barcelona' },
      care: { 
        title: 'Tips to care for your handmade bag', 
        content: `• Store it with paper inside to help maintain its shape.
• Do not machine wash it, as the inner mechanism may wear out. If stained, apply a degreaser, let it sit, and gently rub with a damp cloth. For more persistent stains, take it to a dry cleaner.
• If the inner mechanism starts to make noise over time, don’t discard it: apply a small amount of lubricant using a cotton swab.`
      },
      policies: { returns: 'Return Policy', privacy: 'Privacy Policy' }
    }
  }
};
