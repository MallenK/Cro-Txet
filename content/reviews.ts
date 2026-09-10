/**
 * Reseñas reales de clientas.
 *
 * ⚠️  SOLO reseñas auténticas y con permiso de la persona. Reseñas falsas o
 *     incentivadas son una violación de las políticas de Google y arriesgan una
 *     penalización manual.
 *
 * Cómo añadir una: descomenta el bloque de ejemplo de abajo y rellénalo.
 *   - `author`: nombre o nombre + inicial ("Marta G."). Con permiso.
 *   - `rating`: 1 a 5.
 *   - `body`: la frase de la clienta, tal cual.
 *   - `date`: "AAAA-MM-DD".
 *   - `productId` (opcional): id del producto (alea, oraia, altair, lyra, verae,
 *     nara, vela, velain) para asociar la reseña a esa ficha. Sin `productId` es
 *     una reseña de marca (aparece en la sección de la Home pero no en el schema
 *     de un producto concreto).
 *   - `source` (opcional): "Instagram", "Google", "WhatsApp"…
 *
 * Con el array no vacío:
 *   - `components/Testimonials.tsx` muestra la sección en la Home y, filtrado,
 *     en la ficha de producto.
 *   - `components/SEO.tsx` emite `aggregateRating` + `review` en el JSON-LD del
 *     producto correspondiente.
 * Con el array vacío, todo se oculta sin romper nada.
 */

export interface CustomerReview {
  author: string;
  /** 1–5 */
  rating: number;
  body: string;
  /** ISO date, e.g. "2026-07-18" */
  date: string;
  productId?: string;
  authorLocation?: string;
  source?: string;
}

export const REVIEWS: CustomerReview[] = [
  // Descomenta y rellena con reseñas reales (con permiso). Ejemplo:
  // {
  //   author: 'Marta G.',
  //   rating: 5,
  //   body: 'La bossa és preciosa i es nota el treball a mà. Vaig poder triar el color exacte i el resultat és espectacular.',
  //   date: '2026-07-18',
  //   productId: 'alea',        // opcional: id del producto
  //   authorLocation: 'Barcelona', // opcional
  //   source: 'Instagram',      // opcional
  // },
];

/** Todas — para la sección de la Home. */
export const brandReviews = () => REVIEWS;

/** Solo las de un producto — para el JSON-LD de esa ficha (schema estricto). */
export const productReviews = (productId: string) =>
  REVIEWS.filter(r => r.productId === productId);

/** Para mostrar en la ficha: las del producto + las de marca general. */
export const reviewsFor = (productId?: string) =>
  productId ? REVIEWS.filter(r => !r.productId || r.productId === productId) : REVIEWS;

export const ratingStats = (reviews: CustomerReview[]) => {
  if (reviews.length === 0) return null;
  const sum = reviews.reduce((s, r) => s + r.rating, 0);
  return { average: sum / reviews.length, count: reviews.length };
};
