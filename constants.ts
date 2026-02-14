
import { Product, Translation, Language } from './types';

const getImgs = (id: string) => [
  `https://picsum.photos/seed/${id}1/1000/1200`,
  `https://picsum.photos/seed/${id}2/1000/1200`,
  `https://picsum.photos/seed/${id}3/1000/1200`,
  `https://picsum.photos/seed/${id}4/1000/1200`,
  `https://picsum.photos/seed/${id}5/1000/1200`,
  `https://picsum.photos/seed/${id}6/1000/1200`,
];

export const PRODUCTS: Product[] = [
  {
    id: 'alea',
    name: 'Aléa',
    meaning: { ES: 'Destino / Casualidad', CAT: 'Destí / Casualitat', EN: 'Fate / Chance' },
    description: { 
      ES: 'Bolso metálico semicircular con trenzado artesanal. Sutil y poético.', 
      CAT: 'Bossa metàl·lica semicircular amb trenat artesanal. Subtil i poètic.', 
      EN: 'Semicircular metallic bag with handcrafted braiding. Subtle and poetic.' 
    },
    price: 35,
    images: getImgs('alea'),
    colors: [{ name: 'Metálico', hex: '#A8A9AD' }, { name: 'Dorado', hex: '#D4AF37' }],
    details: {
      material: { ES: 'Hilo metálico premium', CAT: 'Fil metàl·lic premium', EN: 'Premium metallic yarn' },
      stitch: { ES: 'Trenzado artesanal', CAT: 'Trenat artesanal', EN: 'Handcrafted braiding' },
      options: { 
        ES: ['Cierre semicircular o cuadrado', 'De mano o con cadena', 'Asa integrada'],
        CAT: ['Tancament semicircular o quadrat', 'De mà o amb cadena', 'Nansa integrada'],
        EN: ['Semicircular or square closure', 'Handheld or with chain', 'Integrated handle']
      },
      extraChain: true
    }
  },
  {
    id: 'oraia',
    name: 'Oraïa',
    meaning: { ES: 'Bella', CAT: 'Bella', EN: 'Beautiful' },
    description: { 
      ES: 'Inspirado en formas suaves. Elegancia en cada punto.', 
      CAT: 'Inspirat en formes suaus. Elegància en cada punt.', 
      EN: 'Inspired by soft shapes. Elegance in every stitch.' 
    },
    price: 40,
    images: getImgs('oraia'),
    colors: [{ name: 'Nude', hex: '#E3BC9A' }, { name: 'Crudo', hex: '#F5F5DC' }],
    details: {
      material: { ES: 'Hilo de piel vegana', CAT: 'Fil de pell vegana', EN: 'Vegan leather yarn' },
      stitch: { ES: 'Punto cesto o intercalado', CAT: 'Punt cistell o intercalat', EN: 'Basket or interleaved stitch' },
      options: {
        ES: ['Forma semicircular o cuadrada'],
        CAT: ['Forma semicircular o quadrada'],
        EN: ['Semicircular or square shape']
      },
      extraChain: true
    }
  },
  {
    id: 'altair',
    name: 'Altair',
    meaning: { ES: 'Estrella brillante', CAT: 'Estrella brillant', EN: 'Bright star' },
    description: { 
      ES: 'Símbolo de luz y elegancia. Un diseño que trasciende tendencias.', 
      CAT: 'Símbol de llum i elegància. Un disseny que transcendeix tendències.', 
      EN: 'Symbol of light and elegance. A design that transcends trends.' 
    },
    price: 50,
    images: getImgs('altair'),
    colors: [{ name: 'Plata', hex: '#C0C0C0' }, { name: 'Oro', hex: '#FFD700' }],
    details: {
      material: { ES: 'Piel vegana o lycra reciclada', CAT: 'Pell vegana o lycra reciclada', EN: 'Vegan leather or recycled lycra' },
      stitch: { ES: 'Punto estrella sofisticado', CAT: 'Punt estrella sofisticat', EN: 'Sophisticated star stitch' },
      extraChain: true
    }
  },
  {
    id: 'lyra',
    name: 'Lyra',
    meaning: { ES: 'Constelación minimalista', CAT: 'Constel·lació minimalista', EN: 'Minimalist constellation' },
    description: { 
      ES: 'Clutch baguette alargado. La máxima expresión del menos es más.', 
      CAT: 'Clutch baguette allargat. La màxima expressió del menys és més.', 
      EN: 'Elongated baguette clutch. The ultimate expression of less is more.' 
    },
    price: 50,
    images: getImgs('lyra'),
    colors: [{ name: 'Gris', hex: '#808080' }, { name: 'Negro', hex: '#000000' }],
    details: {
      material: { ES: 'Piel vegana o lanas recicladas', CAT: 'Pell vegana o llanes reciclades', EN: 'Vegan leather or recycled wool' },
      stitch: { ES: 'Punto cesto personalizable', CAT: 'Punt cistell personalitzable', EN: 'Customizable basket stitch' },
      extraChain: true
    }
  },
  {
    id: 'verae',
    name: 'Vérae',
    meaning: { ES: 'Auténtica', CAT: 'Autèntica', EN: 'Authentic' },
    description: { 
      ES: 'Belleza honesta y material reciclado.', 
      CAT: 'Bellesa honesta i material reciclat.', 
      EN: 'Honest beauty and recycled material.' 
    },
    price: 30,
    images: getImgs('verae'),
    colors: [{ name: 'Pastel', hex: '#FADADD' }],
    details: {
      material: { ES: 'Hilo de camisetas recicladas', CAT: 'Fil de samarretes reciclades', EN: 'Recycled t-shirt yarn' },
      stitch: { ES: 'Punto sólido', CAT: 'Punt sòlid', EN: 'Solid stitch' },
      options: {
        ES: ['Forma ovalada o cuadrada'],
        CAT: ['Forma ovalada o quadrada'],
        EN: ['Oval or square shape']
      },
      extraChain: true
    }
  },
  {
    id: 'nara',
    name: 'Nara',
    meaning: { ES: 'Simplicidad y equilibrio', CAT: 'Senzillesa i equilibri', EN: 'Simplicity and balance' },
    description: { 
      ES: 'Puro equilibrio visual teñido de calma.', 
      CAT: 'Pur equilibri visual tenyit de calma.', 
      EN: 'Pure visual balance dyed in calm.' 
    },
    price: 30,
    images: getImgs('nara'),
    colors: [{ name: 'Arena', hex: '#D2B48C' }],
    details: {
      material: { ES: 'Material 100% reciclado', CAT: 'Material 100% reciclat', EN: '100% recycled material' },
      stitch: { ES: 'Punto lineal', CAT: 'Punt lineal', EN: 'Linear stitch' },
      options: {
        ES: ['Asa corta o cadena', 'Hilo dorado opcional'],
        CAT: ['Nansa curta o cadena', 'Fil daurat opcional'],
        EN: ['Short handle or chain', 'Optional golden thread']
      }
    }
  },
  {
    id: 'vela',
    name: 'Vela',
    meaning: { ES: 'Viento y aventuras', CAT: 'Vent i aventures', EN: 'Wind and adventures' },
    description: { 
      ES: 'Estilo fresco y divertido para días mediterráneos.', 
      CAT: 'Estil fresc i divertit per a dies mediterranis.', 
      EN: 'Fresh and fun style for Mediterranean days.' 
    },
    price: 30,
    images: getImgs('vela'),
    colors: [{ name: 'Azul', hex: '#A2C2E1' }],
    details: {
      material: { ES: 'Lycra ligera', CAT: 'Lycra lleugera', EN: 'Light lycra' },
      stitch: { ES: 'Punto elástico', CAT: 'Punt elàstic', EN: 'Elastic stitch' },
      options: {
        ES: ['Mosquetones de corazón o estrella'],
        CAT: ['Mosquetons de cor o estrella'],
        EN: ['Heart or star carabiners']
      }
    }
  },
  {
    id: 'velain',
    name: 'Velaïn',
    meaning: { ES: 'Velvet + Divine', CAT: 'Velvet + Divine', EN: 'Velvet + Divine' },
    description: { 
      ES: 'Presencia suave y sofisticada. Tacto inigualable.', 
      CAT: 'Presència suau i sofisticada. Tacte inigualable.', 
      EN: 'Soft and sophisticated presence. Unmatched touch.' 
    },
    price: 45,
    images: getImgs('velain'),
    colors: [{ name: 'Terciopelo', hex: '#4B0082' }],
    details: {
      material: { ES: 'Hilo de terciopelo premium', CAT: 'Fil de vellut premium', EN: 'Premium velvet yarn' },
      stitch: { ES: 'Punto relleu', CAT: 'Punt relleu', EN: 'Relief stitch' },
      extraChain: true
    }
  }
];

export const TRANSLATIONS: Record<Language, Translation> = {
  CAT: {
    common: {
      back: 'Tornar',
      explore: 'Explorar',
      loading: 'Carregant...',
      notFound: 'Producte no trobat',
      backToShop: 'Tornar a la botiga',
      artisanNote: 'Cada peça està feta completament a mà amb tècnica ganxet. Les petites imperfeccions garanteixen autenticitat i fan que cada bossa sigui única.',
      productionTime: 'Fabricació artesanal sota comanda.',
      language: 'Idioma'
    },
    nav: { home: 'Inici', about: 'Qui sóc', shop: 'Shop', contact: 'Contacte' },
    home: {
      heroSubtitle: 'Fet a mà amb intenció',
      heroTitle: 'Fils que expliquen una història',
      cta: 'Descobrir models',
      philosophyTitle: 'Filosofia',
      philosophySubtitle: 'La paciència del detall, la intenció del fil.',
      values: {
        slow: 'Slow fashion',
        slowDesc: 'Cada bossa respecta el cicle natural de creació, sense presses, prioritzant la qualitat sobre el volum.',
        handmade: 'Fet a mà',
        handmadeDesc: 'Tècniques ancestrals de ganxet elevades a una estètica contemporània per mans expertes.',
        demand: 'Sota demanda',
        demandSubtitle: '5–10 dies laborables',
        demandDesc: 'Fabricat exclusivament per a tu per evitar el malbaratament.'
      },
      lookbookTitle: 'Dissenyats per perdurar, creats per inspirar.',
      lookbookDesc: 'Peça que no segueix tendències efímeres, sinó que acompanya el teu estil personal durant anys.',
      lookbookCta: 'Explorar'
    },
    about: {
      label: 'Qui sóc',
      title: 'Fils que expliquen una història',
      story: [
        'Tot va començar amb la meva mare. Sempre la recordo amb alguna labor a les mans, cosint amb aquella calma i delicadesa que només dona l’amor per allò que es fa a foc lent. Ella em va ensenyar els primers punts, gairebé com un joc, sense imaginar que anys més tard aquell fil invisible ens seguiria unint.',
        'Aquest estiu, obligada a fer una pausa, una amiga em va animar a reprendre el crochet. El que havia de ser una distracció s’ha convertit en una passió. Punt rere punt, vaig començar a crear bosses, primer per regalar... fins que tothom em va dir el mateix: “Les has de vendre!”',
        'I aquí em teniu: transformant fils en històries, colors en emocions i temps en peces uniques.',
        'Cada bolso està fet a mà, amb cura, amor i estil propi. Hi ha models i colors que pots triar, pero també pots personalitzar la teva bossa perquè sigui tan única com tu.',
        'Perquè quan una peça es fa amb el cor, no és només un bolso —és una petita part de qui el crea.'
      ],
      inspirationLabel: 'Inspiració',
      inspirationDesc: 'El meu treball neix a la costa brava, o la llum i la calma del mediterrani dicten el ritme de les meves agulles.',
      quote: '“No només teixeixo fils, teixeixo moments de calma en un món que corre massa ràpid.”'
    },
    shop: {
      label: 'Col·lecció Artesanal',
      title: 'Catàleg de Peces',
      desc: 'Bosses úniques, fetes a mà amb amor i estil',
      optionalChain: 'Cadeneta metàl·lica (+5€)',
      addToCart: 'Afegir a la cistella',
      color: 'Color',
      availableColors: 'Colors disponibles',
      detailsLabel: 'Detalls de la peça',
      materialLabel: 'Material',
      stitchLabel: 'Tipus de punt',
      optionsLabel: 'Personalització'
    },
    contact: {
      label: 'Contacte',
      title: 'Parlem?',
      subtitle: 'Si tens qualsevol dubte o vols una personalització especial, escriu-me.',
      form: { 
        name: 'Nom', 
        namePlaceholder: 'El teu nom',
        email: 'Email', 
        emailPlaceholder: 'hola@exemple.com',
        message: 'Missatge', 
        messagePlaceholder: 'En què et puc ajudar?',
        send: 'Enviar Sol·licitud',
        sent: 'Enviat amb èxit',
        productInquiry: 'Sol·licitud per:'
      },
      info: {
        emailTitle: 'Email Atenció',
        atelierTitle: 'Taller',
        atelierLoc: 'Barcelona, Artesania Local'
      },
      care: {
        title: 'Cura de la teva bossa',
        content: 'Rentat a mà amb aigua freda i sabó neutre. Assecar en horitzontal a l\'ombra.'
      },
      policies: { returns: 'Devolucions', privacy: 'Privacitat' }
    }
  },
  ES: {
    common: {
      back: 'Volver',
      explore: 'Explorar',
      loading: 'Cargando...',
      notFound: 'Producto no encontrado',
      backToShop: 'Volver a la tienda',
      artisanNote: 'Cada pieza está hecha completamente a mano con técnica crochet. Las pequeñas imperfecciones garantizan autenticidad y hacen que cada bolso sea único.',
      productionTime: 'Fabricación artesanal bajo pedido.',
      language: 'Idioma'
    },
    nav: { home: 'Inicio', about: 'Qui sóc', shop: 'Shop', contact: 'Contacto' },
    home: {
      heroSubtitle: 'Hecho a mano con intención',
      heroTitle: 'Hilos que cuentan una historia',
      cta: 'Ver catálogo',
      philosophyTitle: 'Filosofía',
      philosophySubtitle: 'La paciencia del detalle, la intención del hilo.',
      values: {
        slow: 'Slow fashion',
        slowDesc: 'Cada bolso respeta el ciclo natural de creación, sin prisas, priorizando la calidad sobre el volumen.',
        handmade: 'Hecho a mano',
        handmadeDesc: 'Técnicas ancestrales de ganchillo elevadas a una estética contemporánea por manos expertas.',
        demand: 'Bajo demanda',
        demandSubtitle: '5–10 días laborables',
        demandDesc: 'Fabricado exclusivamente para ti para evitar el desperdicio.'
      },
      lookbookTitle: 'Diseñados para perdurar, creados para inspirar.',
      lookbookDesc: 'Piezas que no siguen tendencias efímeras, sino que acompañan tu estilo personal durante años.',
      lookbookCta: 'Explorar'
    },
    about: {
      label: 'Qui sóc',
      title: 'Hilos que cuentan una historia',
      story: [
        'Todo empezó con mi madre. Siempre la recuerdo con alguna labor entre las manos, cosiendo con esa calma y delicadeza que solo da el amor por las cosas hechas despacio. Ella me enseñó los primeros puntos, casi como un juego, sin imaginar que aquel hilo invisible seguiría uniéndonos muchos años después.',
        'Este verano, obligada a hacer una pausa, una amiga me animó a retomar el crochet. Lo que comenzó como una distracción se ha convertido en una pasión. Punto a punto, empecé a crear bolsos, primero para regalar... hasta que todos me decían lo mismo: “¡Deberías venderlos!”',
        'And here I am: turning threads into stories, colours into emotions, and time into unique pieces.',
        'Cada bolso está hecho a mano, con cariño, cuidado y mucho estilo. Hay modelos y colores que puedes elegir, pero también puedes personalizar tu bolso para que sea tan único como tú.',
        'Porque cuando una pieza se hace con el corazón, no es solo un bolso —es una parte de quien lo crea.'
      ],
      inspirationLabel: 'Inspiración',
      inspirationDesc: 'Mi trabajo nace en la costa brava, donde la luz y la calma del mediterráneo dictan el ritmo de mi agujas.',
      quote: '“No solo tejo hilos, tejo momentos de calma en un mundo que corre demasiado rápido.”'
    },
    shop: {
      label: 'Diseño Artesanal',
      title: 'Catálogo de Piezas',
      desc: 'Bolsos únicos, hechos a mano con amor y estilo',
      optionalChain: 'Cadeneta metálica (+5€)',
      addToCart: 'Añadir al carrito',
      color: 'Color',
      availableColors: 'Colores disponibles',
      detailsLabel: 'Detalles de la pieza',
      materialLabel: 'Material',
      stitchLabel: 'Tipo de punto',
      optionsLabel: 'Personalización'
    },
    contact: {
      label: 'Contacto',
      title: '¿Hablamos?',
      subtitle: 'Si tienes cualquier duda o quieres una personalización especial, escríbeme.',
      form: { 
        name: 'Nombre', 
        namePlaceholder: 'Tu nombre',
        email: 'Email', 
        emailPlaceholder: 'hola@ejemplo.com',
        message: 'Mensaje', 
        messagePlaceholder: '¿En qué puedo ayudarte?',
        send: 'Enviar Solicitud',
        sent: 'Enviado con éxito',
        productInquiry: 'Solicitud para:'
      },
      info: {
        emailTitle: 'Email Atención',
        atelierTitle: 'Taller',
        atelierLoc: 'Barcelona, Artesanía Local'
      },
      care: {
        title: 'Cuidado de tu bolso',
        content: 'Lavado a mano con agua fría y jabón neutre. Secar en horizontal a la sombra.'
      },
      policies: { returns: 'Devoluciones', privacy: 'Privacidad' }
    }
  },
  EN: {
    common: {
      back: 'Back',
      explore: 'Explore',
      loading: 'Loading...',
      notFound: 'Product not found',
      backToShop: 'Back to shop',
      artisanNote: 'Each piece is entirely handmade with crochet technique. Small imperfections guarantee authenticity and make each bag unique.',
      productionTime: 'Handcrafted on request.',
      language: 'Language'
    },
    nav: { home: 'Home', about: 'About Me', shop: 'Shop', contact: 'Contact' },
    home: {
      heroSubtitle: 'Handcrafted with intention',
      heroTitle: 'Threads that tell a story',
      cta: 'See catalog',
      philosophyTitle: 'Philosophy',
      philosophySubtitle: 'The patience of detail, the intention of the thread.',
      values: {
        slow: 'Slow fashion',
        slowDesc: 'Each bag respects the natural cycle of creation, without rushing, prioritizing quality over volume.',
        handmade: 'Handmade',
        handmadeDesc: 'Ancient crochet techniques elevated to a contemporary aesthetic by expert hands.',
        demand: 'On demand',
        demandSubtitle: '5–10 working days',
        demandDesc: 'Exclusively manufactured for you to avoid waste.'
      },
      lookbookTitle: 'Designed to last, created to inspire.',
      lookbookDesc: 'Pieces that do not follow ephemeral trends, but accompany your personal style for years.',
      lookbookCta: 'Explore'
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
      inspirationDesc: 'My work is born on the Costa Brava, where the light and calm of the Mediterranean dictate the rhythm of my needles.',
      quote: '“I don\'t just weave threads, I weave moments of calm in a world that runs too fast.”'
    },
    shop: {
      label: 'Handmade Series',
      title: 'Piece Catalog',
      desc: 'Unique handmade bags, crafted with love and style',
      optionalChain: 'Metal chain (+5€)',
      addToCart: 'Add to Cart',
      color: 'Color',
      availableColors: 'Available colors',
      detailsLabel: 'Piece Details',
      materialLabel: 'Material',
      stitchLabel: 'Stitch Type',
      optionsLabel: 'Customization'
    },
    contact: {
      label: 'Contact',
      title: 'Let\'s talk?',
      subtitle: 'If you have any questions or want a special personalization, write to me.',
      form: { 
        name: 'Name', 
        namePlaceholder: 'Your name',
        email: 'Email', 
        emailPlaceholder: 'hello@example.com',
        message: 'Message', 
        messagePlaceholder: 'How can I help you?',
        send: 'Send Inquiry',
        sent: 'Sent successfully',
        productInquiry: 'Inquiry for:'
      },
      info: {
        emailTitle: 'Email Support',
        atelierTitle: 'Studio',
        atelierLoc: 'Barcelona, Local Craft'
      },
      care: {
        title: 'Care Instructions',
        content: 'Hand wash with cold water and neutral soap. Dry flat in the shade.'
      },
      policies: { returns: 'Return Policy', privacy: 'Privacy' }
    }
  }
};
