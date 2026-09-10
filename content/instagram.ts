import { Language } from '../types';
import { IMG_PATH, IMG_BASE, toWebp } from '../constants';

/**
 * Curated Instagram posts featured on the site. These are plain outbound links
 * (no Instagram embed script, no third-party iframe) using our own product
 * photography — zero maintenance risk, no CSP or privacy trade-off. To refresh
 * the selection, swap the `url` / `image` / copy below.
 *
 * Handle: @cro_and_txet · https://instagram.com/cro_and_txet
 */

export const INSTAGRAM_HANDLE = 'cro_and_txet';
export const INSTAGRAM_URL = 'https://instagram.com/cro_and_txet';

export interface IgPost {
  /** Permalink to the Instagram post/reel. */
  url: string;
  /** Local image shown for the card (already resolved to .webp). */
  image: string;
  alt: Record<Language, string>;
  caption: Record<Language, string>;
}

export const INSTAGRAM_POSTS: IgPost[] = [
  {
    url: 'https://www.instagram.com/cro_and_txet/p/DV_4s8rDjY2/',
    image: toWebp(IMG_PATH + 'alea/alea-silver.jpeg'),
    alt: {
      CAT: 'Clutch Aléa en to metal·litzat, feta a mà per Cro&Txet',
      ES: 'Clutch Aléa en tono metalizado, hecha a mano por Cro&Txet',
      EN: 'Aléa clutch in a metallic tone, handmade by Cro&Txet',
    },
    caption: {
      CAT: 'Aléa en metal·litzat: nansa semicircular integrada i el tancament de sempre.',
      ES: 'Aléa en metalizado: asa semicircular integrada y el cierre de siempre.',
      EN: 'Aléa in metallic: integrated semicircular handle and the signature clasp.',
    },
  },
  {
    url: 'https://www.instagram.com/cro_and_txet/p/DTTSOoFDvFr/',
    image: toWebp(IMG_PATH + 'oraia/oraia-verd.jpeg'),
    alt: {
      CAT: 'Bossa Oraïa en verd, pell vegana i punt elegant',
      ES: 'Bolso Oraïa en verde, piel vegana y punto elegante',
      EN: 'Oraïa bag in green, vegan leather and an elegant stitch',
    },
    caption: {
      CAT: 'El mateix model per a dues germanes: un en verd, l’altre en marró xocolata.',
      ES: 'El mismo modelo para dos hermanas: uno en verde, el otro en marrón chocolate.',
      EN: 'The same model for two sisters: one in green, the other in chocolate brown.',
    },
  },
  {
    url: 'https://www.instagram.com/cro_and_txet/reel/DWH3bYFCENK/',
    image: toWebp(IMG_PATH + 'alea/alea-black+silver+gold.jpeg'),
    alt: {
      CAT: 'Bosses de crochet en fils metal·litzats de diversos colors',
      ES: 'Bolsos de crochet en hilos metalizados de varios colores',
      EN: 'Crochet bags in metallic yarns in several colours',
    },
    caption: {
      CAT: 'Metal·litzats que no passen desapercebuts. Tens un color al cap? El creo.',
      ES: 'Metalizados que no pasan desapercibidos. ¿Tienes un color en mente? Lo creo.',
      EN: 'Metallics that don’t go unnoticed. Have a colour in mind? I’ll make it.',
    },
  },
  {
    url: 'https://www.instagram.com/cro_and_txet/p/DcD29g3OiA2/',
    image: toWebp(IMG_BASE + 'meritxell-1.jpeg'),
    alt: {
      CAT: 'Meritxell teixint al taller de Cro&Txet',
      ES: 'Meritxell tejiendo en el taller de Cro&Txet',
      EN: 'Meritxell crocheting in the Cro&Txet studio',
    },
    caption: {
      CAT: 'Del taller: quan sobren restes de fil, neix un patró nou.',
      ES: 'Del taller: cuando sobran restos de hilo, nace un patrón nuevo.',
      EN: 'From the studio: leftover yarn turns into a brand-new pattern.',
    },
  },
  {
    url: 'https://www.instagram.com/cro_and_txet/p/DZ2OIlYOCQG/',
    image: toWebp(IMG_PATH + 'nara/nara-vermell-+-daurat.jpeg'),
    alt: {
      CAT: 'Bossa Nara en vermell i daurat, per a ocasions especials',
      ES: 'Bolso Nara en rojo y dorado, para ocasiones especiales',
      EN: 'Nara bag in red and gold, for special occasions',
    },
    caption: {
      CAT: 'Veure tantes amigues lluint els bolsos fets a mà en un mateix esdeveniment.',
      ES: 'Ver a tantas amigas luciendo los bolsos hechos a mano en un mismo evento.',
      EN: 'Seeing so many friends carrying the handmade bags at the same event.',
    },
  },
  {
    url: 'https://www.instagram.com/cro_and_txet/reel/DbrEOlzO_mn/',
    image: toWebp(IMG_PATH + 'vela/vela-verds.jpeg'),
    alt: {
      CAT: 'Bossa Vela feta amb fil de samarretes reciclades',
      ES: 'Bolso Vela hecho con hilo de camisetas recicladas',
      EN: 'Vela bag made from recycled T-shirt yarn',
    },
    caption: {
      CAT: 'Zaria: fil de samarretes reciclades i boletes de fusta. Res es llença.',
      ES: 'Zaria: hilo de camisetas recicladas y bolitas de madera. Nada se tira.',
      EN: 'Zaria: recycled T-shirt yarn and wooden beads. Nothing goes to waste.',
    },
  },
];
