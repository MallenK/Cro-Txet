
import { Product, Translation, Language } from './types';

// Directorio base para las fotos reales de producto
const IMG_PATH = 'img/fotos_productos/';

export const PRODUCTS: Product[] = [
  {
    id: 'alea',
    name: 'Aléa',
    meaning: { ES: 'Destino / Casualidad', CAT: 'Destí / Casualitat', EN: 'Fate / Chance' },
    description: { 
      ES: 'Bolso hecho a mano en tonos metálicos, con forma semicircular y trenzado artesanal. Puede tener cierre semicircular o cuadrado, usarse de mano o con cadena, e incluir asa integrada.', 
      CAT: 'Bolso fet a mà en tons metàl·lics, amb forma semicircular i trenat artesanal. Es pot fer amb tancament semicircular o quadrat, portar de mà o amb cadeneta, i incloure nanseta integrada.', 
      EN: 'Handcrafted metallic bag with a semicircular shape and artisanal weave. It can feature a semicircular or square clasp, be worn by hand or with a chain, and include an integrated handle.' 
    },
    price: 35,
    images: [
      `${IMG_PATH}alea_1.jpg`, // Foto del bolso plateado semicircular
      `${IMG_PATH}alea_2.jpg`, // Foto del grupo: Silver, Golden, Metallic Black
      `${IMG_PATH}alea_3.jpg`, // Foto detalle del trenzado metálico
      `${IMG_PATH}alea_4.jpg`  // Foto extra
    ],
    colors: [{ name: 'Silver', hex: '#C0C0C0' }, { name: 'Golden', hex: '#D4AF37' }, { name: 'Metallic Black', hex: '#2C2C2C' }],
    details: {
      material: { ES: 'Hilo metálico premium', CAT: 'Fil metàl·lic premium', EN: 'Premium metallic yarn' },
      stitch: { ES: 'Trenzado artesanal (Punto cesto)', CAT: 'Trenat artesanal (Punt cistell)', EN: 'Handcrafted braiding (Basket stitch)' },
      options: { 
        ES: ['Cierre semicircular o cuadrado', 'De mano o con cadena', 'Asa integrada'],
        CAT: ['Tancament semicircular o quadrat', 'De mà o amb cadeneta', 'Nanseta integrada'],
        EN: ['Semicircular or square closure', 'Handheld or with chain', 'Integrated handle']
      },
      extraChain: true
    }
  },
  {
    id: 'oraia',
    name: 'Oraïa',
    meaning: { ES: 'Bella / Calidez', CAT: 'Bella / Calidesa', EN: 'Beautiful / Warmth' },
    description: { 
      ES: 'Bolso artesanal elaborado con hilo de piel vegana y tejido con el elegante punto cesto o intercalado. Disponible en varios colores y en forma semicircular o cuadrada, con asa integrada.', 
      CAT: 'Bolso artesanal fet amb fil de pell vegana i treballat amb el delicat punt cistell o intercalat. Disponible en diferents colors i en forma semicircular o quadrada, amb nanseta integrada.', 
      EN: 'Handcrafted bag made from vegan leather yarn, woven with an elegant basket or interlaced stitch. Available in different colours and in a semicircular or square shape, with an integrated handle.' 
    },
    price: 40,
    images: [
      `${IMG_PATH}oraia_1.jpg`, // Foto del bolso color Teal/Azul verdoso
      `${IMG_PATH}oraia_2.jpg`, // Foto del bolso color Chocolate
      `${IMG_PATH}oraia_3.jpg`  // Foto comparativa Bronze/Teal
    ],
    colors: [{ name: 'Chocolate', hex: '#3E2723' }, { name: 'Burgundy', hex: '#800020' }, { name: 'Teal', hex: '#008080' }],
    details: {
      material: { ES: 'Hilo de piel vegana', CAT: 'Fil de pell vegana', EN: 'Vegan leather yarn' },
      stitch: { ES: 'Punto cesto o intercalado', CAT: 'Punt cistell o intercalat', EN: 'Basket or interleaved stitch' },
      options: {
        ES: ['Forma semicircular o cuadrada', 'Asa integrada'],
        CAT: ['Forma semicircular o quadrada', 'Nanseta integrada'],
        EN: ['Semicircular or square shape', 'Integrated handle']
      },
      extraChain: true
    }
  },
  {
    id: 'altair',
    name: 'Altair',
    meaning: { ES: 'Estrecha brillante', CAT: 'Estrella brillant', EN: 'Bright star' },
    description: { 
      ES: 'Bolso artesanal que destaca por su delicado punto estrella. Puede confeccionarse con hilo de piel vegana o con hilo reciclado de lycra, combinando diseño, sostenibilidad y calidad.', 
      CAT: 'Bolso artesanal que destaca pel seu delicat punt d’estrella. Es pot realitzar amb fil de pell vegana o amb fil reciclat de lycra, combinant disseny, sostenibilitat i qualitat.', 
      EN: 'Handcrafted bag distinguished by its delicate star stitch. It can be made using vegan leather yarn or recycled lycra yarn, combining design, sustainability and quality.' 
    },
    price: 50,
    images: [
      `${IMG_PATH}altair_1.jpg`, // Foto de la creadora con el bolso rosa punto estrella
      `${IMG_PATH}altair_2.jpg`, // Detalle del punto estrella en rosa
      `${IMG_PATH}altair_3.jpg`  // Foto extra de detalle
    ],
    colors: [{ name: 'Pale Pink', hex: '#FADADD' }, { name: 'Black', hex: '#000000' }],
    details: {
      material: { ES: 'Piel vegana o lycra reciclada', CAT: 'Pell vegana o lycra reciclada', EN: 'Vegan leather or recycled lycra' },
      stitch: { ES: 'Punto estrella sofisticado', CAT: 'Punt estrella sofisticat', EN: 'Sophisticated star stitch' },
      extraChain: true
    }
  },
  {
    id: 'lyra',
    name: 'Lyra',
    meaning: { ES: 'Constelación / Minimalista', CAT: 'Constel·lació / Minimalista', EN: 'Constellation / Minimalist' },
    description: { 
      ES: 'Bolso clutch alargado tipo baguette con una elegancia marcada. Puede confeccionarse con hilo de piel vegana o con otras lanas recicladas. El punto cesto le aporta estructura y un acabado sofisticado.', 
      CAT: 'Bolso clutch allargat tipus baguette amb una elegància marcada. Es pot realitzar amb fil de pell vegana o amb altres llanes reciclades. El punto cistell li aporta estructura i un acabat sofisticat.', 
      EN: 'Elongated baguette-style clutch with a strong, elegant presence. It can be crafted using vegan leather yarn or other recycled yarns. The basket stitch adds structure and a refined finish.' 
    },
    price: 50,
    images: [
      `${IMG_PATH}lyra_1.jpg`, // Foto del bolso negro tipo baguette
      `${IMG_PATH}lyra_2.jpg`, // Foto del bolso iridiscente/multicolor
      `${IMG_PATH}lyra_3.jpg`  // Foto detalle de la cadena y forma
    ],
    colors: [{ name: 'Black', hex: '#000000' }, { name: 'Iridiscent', hex: '#4B0082' }],
    details: {
      material: { ES: 'Piel vegana o lanas recicladas', CAT: 'Pell vegana o llanes reciclades', EN: 'Vegan leather or recycled yarns' },
      stitch: { ES: 'Punto cesto estructural', CAT: 'Punt cistell estructural', EN: 'Structural basket stitch' },
      extraChain: true
    }
  },
  {
    id: 'verae',
    name: 'Vérae',
    meaning: { ES: 'Auténtica', CAT: 'Autèntica', EN: 'Authentic' },
    description: { 
      ES: 'Clutch artesanal elaborado con hilo de camisetas recicladas. Diseño versátil que se adapta tanto al día a día como a ocasiones especiales. Sostenible y con alma artesanal.', 
      CAT: 'Clutch artesanal fet amb fil de samarretes reciclades. Disseny versàtil que s’adapta tant al dia a dia com a ocasions especials. Sostenible i amb ànima artesanal.', 
      EN: 'Handcrafted clutch made from recycled T-shirt yarn. Versatile design suitable for both everyday use and special occasions. Sustainable with true artisanal character.' 
    },
    price: 30,
    images: [
      `${IMG_PATH}verae_1.jpg`, // Foto grupo: Black, Animal Print, Chocolate
      `${IMG_PATH}verae_2.jpg`, // Detalle Animal Print
      `${IMG_PATH}verae_3.jpg`  // Detalle Black
    ],
    colors: [{ name: 'Animal Print', hex: '#D2B48C' }, { name: 'Black', hex: '#000000' }, { name: 'Chocolate', hex: '#3E2723' }],
    details: {
      material: { ES: 'Hilo de camisetas recicladas', CAT: 'Fil de samarretes reciclades', EN: 'Recycled T-shirt yarn' },
      stitch: { ES: 'Punto sólido versátil', CAT: 'Punt sòlid versàtil', EN: 'Versatile solid stitch' },
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
    meaning: { ES: 'Sencillez y equilibrio', CAT: 'Senzillesa i equilibri', EN: 'Simplicity and balance' },
    description: { 
      ES: 'Bolso hecho a mano con materiales reciclados que une diseño y sostenibilidad. Con asa corta y cadena, puede llevarse colgado o bajo el brazo. Personalizable con hilo dorado opcional.', 
      CAT: 'Bolso fet a mà amb materials reciclats que combina disseny i consciència. Amb nansa petita i cadeneta, es pot portar penjat o sota el braç. Personalitzable amb fil daurat opcional.', 
      EN: 'Handcrafted bag made from recycled materials, blending design and sustainability. Featuring a small handle and chain strap, it can be worn over the shoulder or under the arm.' 
    },
    price: 30,
    images: [
      `${IMG_PATH}nara_1.jpg`, // Foto bicolor Blanco/Negro con cadena
      `${IMG_PATH}nara_2.jpg`, // Foto bicolor Rosa/Granate con cadena
      `${IMG_PATH}nara_3.jpg`  // Detalle del asa trenzada bicolor
    ],
    colors: [{ name: 'Bicolor White/Black', hex: '#F5F5F5' }, { name: 'Bicolor Burgundy', hex: '#800020' }],
    details: {
      material: { ES: 'Materiales reciclados', CAT: 'Materials reciclats', EN: 'Recycled materials' },
      stitch: { ES: 'Punto entrelazado', CAT: 'Punt entrellaçat', EN: 'Intertwined stitch' },
      options: {
        ES: ['Hilo dorado o brillante opcional', 'Asa corta y cadena'],
        CAT: ['Fil daurat o brillant opcional', 'Nansa petita i cadeneta'],
        EN: ['Optional gold or shimmering thread', 'Small handle and chain']
      }
    }
  },
  {
    id: 'vela',
    name: 'Vela',
    meaning: { ES: 'Viento y aventuras', CAT: 'Vent i aventures', EN: 'Wind and adventures' },
    description: { 
      ES: 'Bolso hecho a mano con materiales reciclados, fresco y divertido. Destaca por sus mosquetones con forma de corazón o estrella que le aportan un toque original.', 
      CAT: 'Bolso fet a mà amb materials reciclats, fresc i divertit. Destaca pels seus mosquetons amb forma de cor o estrella que li donen un toc juganer.', 
      EN: 'Handmade bag crafted from recycled materials, fun and stylish. It features heart- or star-shaped clasps for a playful touch.' 
    },
    price: 30,
    images: [
      `${IMG_PATH}vela_1.jpg`, // Foto bolso verde con mosquetones estrella
      `${IMG_PATH}vela_2.jpg`, // Detalle de los mosquetones
      `${IMG_PATH}vela_3.jpg`  // Detalle del tejido
    ],
    colors: [{ name: 'Pink Pattern', hex: '#FFB6C1' }, { name: 'Blue/White Pattern', hex: '#AFDBF5' }, { name: 'Green Moss', hex: '#8A9A5B' }],
    details: {
      material: { ES: 'Materiales reciclados', CAT: 'Materials reciclats', EN: 'Recycled materials' },
      stitch: { ES: 'Punto fresco y ligero', CAT: 'Punt fresc i lleuger', EN: 'Fresh and light stitch' },
      options: {
        ES: ['Mosquetones de corazón o estrella'],
        CAT: ['Mosquetons de cor o estrella'],
        EN: ['Heart or star-shaped clasps']
      }
    }
  },
  {
    id: 'velain',
    name: 'Velaïn',
    meaning: { ES: 'Velvet + Divine', CAT: 'Velvet + Divine', EN: 'Velvet + Divine' },
    description: { 
      ES: 'Bolso artesanal realizado con un hilo especial de terciopelo que le aporta una presencia suave y muy sofisticada. Su acabado elegante lo convierte en el complemento ideal para cualquier look.', 
      CAT: 'Bolso artesanal elaborat amb un fil especial de vellut que li aporta una presència suau i molt sofisticada. El seu acabat elegant el converteix en el complement ideal per a qualsevol look.', 
      EN: 'Handcrafted bag made with a special velvet yarn that gives it a soft, highly sophisticated presence. Its elegant finish makes it the perfect accessory for any look.' 
    },
    price: 45,
    images: [
      `${IMG_PATH}velain_1.jpg`, // Tu foto principal del bolso fucsia
      `${IMG_PATH}velain_2.jpg`, // Tu foto detalle (top view)
      `${IMG_PATH}velain_3.jpg`, // Tu foto siendo sujetado por la mano
      `${IMG_PATH}velain_4.jpg`  // Foto detalle del tejido terciopelo
    ],
    colors: [{ name: 'Vibrant Fuchsia', hex: '#FF00FF' }],
    details: {
      material: { ES: 'Hilo de terciopelo especial', CAT: 'Fil de vellut especial', EN: 'Special velvet yarn' },
      stitch: { ES: 'Punto relieve suave', CAT: 'Punt relleu suau', EN: 'Soft relief stitch' },
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
      artisanNote: 'Cada bolso està fet a mà, amb cura, amor i estil propi. Cada peça és exclusiva i es pot personalitzar segons el teu gust.',
      productionTime: 'Elaboro cada peça a mà i sota demanda en un termini de 5 a 10 dies laborables.',
      language: 'Idioma'
    },
    nav: { home: 'Inici', about: 'Qui sóc', shop: 'Shop', contact: 'Contacte' },
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
      aboutLinkCta: 'Conèixer la meva història'
    },
    about: {
      label: 'Qui sóc',
      title: 'Fils que expliquen una història',
      story: [
        'Tot va començar amb la meva mare. Sempre la recordo amb alguna labor a les mans, cosint amb aquella calma i delicadesa que només dona l’amor per allò que es fa a foc lent. Ella em va ensenyar els primers punts, gairebé com un joc, sense imaginar que anys més tard aquell fil invisible ens seguiria unint.',
        'Aquest estiu, obligada a fer una pausa, una amiga em va animar a reprendre el crochet. El que havia de ser una distracció s’ha convertit en una passió. Punt rere punt, vaig començar a crear bosses, primer per regalar... fins que tothom em va dir el mateix: “Les has de vendre!”',
        'I aquí em teniu: transformant fils en històries, colors en emocions i temps en peces úniques.',
        'Cada bolso està fet a mà, amb cura, amor i estil propi. Hi ha models i colors que pots triar, però també pots personalitzar la teva bossa perquè sigui tan única com tu.',
        'Perquè quan una peça es fa amb el cor, no és només un bolso —és una petita part de qui el crea.'
      ],
      inspirationLabel: 'Inspiració',
      inspirationDesc: 'Llum i calma del mediterrani.',
      quote: '“No només teixeixo fils, teixeixo moments de calma en un món que corre massa ràpid.”'
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
      optionsLabel: 'Opcions'
    },
    contact: {
      label: 'Contacte',
      title: '¿Necessites que t’ajudem?',
      subtitle: 'Sempre estic disponible per ajudar-te. Pots contactar amb nosaltres omplint el formulari següent.',
      form: { 
        name: 'Nom', namePlaceholder: 'El teu nom',
        email: 'Email', emailPlaceholder: 'hola@croandtxet.cat',
        message: 'Missatge', messagePlaceholder: 'En què et puc ajudar?',
        send: 'Enviar Missatge', sent: 'Enviat amb èxit', productInquiry: 'Consulta sobre'
      },
      info: { emailTitle: 'Email', atelierTitle: 'Taller', atelierLoc: 'Barcelona' },
      care: { title: 'Consells per cuidar el teu bolso fet a mà', content: 'Desa’l amb paper a l’interior. No el rentis a la rentadora. En cas de taca, aplica un desgreixant i frega suaument amb un drap humit.' },
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
      artisanNote: 'Cada bolso está hecho a mano, con cariño, cuidado y mucho estilo. Cada pieza es exclusiva y puede personalizarse a tu gusto.',
      productionTime: 'Elaboro cada unidad a mano y bajo demanda en un plazo de 5 a 10 días laborables.',
      language: 'Idioma'
    },
    nav: { home: 'Inicio', about: 'Qui sóc', shop: 'Shop', contact: 'Contacto' },
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
      aboutLinkCta: 'Conocer mi historia'
    },
    about: {
      label: 'Qui sóc',
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
      quote: '“No solo tejo hilos, tejo momentos de calma en un mundo que corre demasiado rápido.”'
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
      optionsLabel: 'Opciones'
    },
    contact: {
      label: 'Contacto',
      title: '¿Necesitas que te ayudemos?',
      subtitle: 'Estoy siempre disponible para ayudarte. Puedes contactarnos rellenando el formulario a continuación.',
      form: { 
        name: 'Nombre', namePlaceholder: 'Tu nombre',
        email: 'Correo electrónico', emailPlaceholder: 'hola@croandtxet.cat',
        message: 'Comentario', messagePlaceholder: '¿En qué puedo ayudarte?',
        send: 'Enviar Mensaje', sent: 'Enviado con éxito', productInquiry: 'Consulta sobre'
      },
      info: { emailTitle: 'Email', atelierTitle: 'Taller', atelierLoc: 'Barcelona' },
      care: { title: 'Consejos para cuidar tu bolso hecho a mano', content: 'Guárdalo con papel en el interior. No lo laves a máquina. En caso de mancha, aplica un desengrasante y frota suavemente con un paño húmedo.' },
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
      artisanNote: 'Each bag is handmade, with love, care, and style. Each piece is exclusive and can be customized to your taste.',
      productionTime: 'Each piece is handmade and made to order within 5 to 10 business days.',
      language: 'Language'
    },
    nav: { home: 'Home', about: 'About Me', shop: 'Shop', contact: 'Contact' },
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
      aboutLinkCta: 'Meet my story'
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
      quote: '“I don\'t just weave threads, I weave moments of calm in a world that runs too fast.”'
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
      optionsLabel: 'Options'
    },
    contact: {
      label: 'Contact',
      title: 'Need help?',
      subtitle: 'I’m always here to help. You can get in touch with us by filling out the form below.',
      form: { 
        name: 'Name', namePlaceholder: 'Your name',
        email: 'Email address', emailPlaceholder: 'hello@croandtxet.cat',
        message: 'Comment', messagePlaceholder: 'How can I help you?',
        send: 'Send Message', sent: 'Sent successfully', productInquiry: 'Inquiry about'
      },
      info: { emailTitle: 'Email', atelierTitle: 'Studio', atelierLoc: 'Barcelona' },
      care: { title: 'Tips to care for your handmade bag', content: 'Store it with paper inside. Do not machine wash. If stained, apply a degreaser and gently rub with a damp cloth.' },
      policies: { returns: 'Return Policy', privacy: 'Privacy Policy' }
    }
  }
};
