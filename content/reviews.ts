/**
 * Real customer reviews. **Only add genuine reviews with the customer's
 * permission** — fake or incentivised reviews are a Google policy violation and
 * risk a manual penalty.
 *
 * When this array is non-empty, `components/SEO.tsx` emits `aggregateRating` +
 * `review` inside the Product JSON-LD, and a testimonials section can render
 * them on-site. Until then everything degrades cleanly to nothing.
 *
 * `productId` optional: omit for a general brand review, set it to attach the
 * review to a specific product's structured data.
 */

export interface CustomerReview {
  author: string;
  /** 1–5 */
  rating: number;
  body: string;
  /** ISO date, e.g. "2026-07-18" */
  date: string;
  productId?: string;
  source?: string;
}

export const REVIEWS: CustomerReview[] = [
  // {
  //   author: 'Marta G.',
  //   rating: 5,
  //   body: 'La bossa és preciosa i es nota el treball a mà. Vaig poder triar el color exacte.',
  //   date: '2026-07-18',
  //   productId: 'alea',
  //   source: 'Instagram',
  // },
];

export const reviewsFor = (productId?: string) =>
  productId ? REVIEWS.filter(r => r.productId === productId) : REVIEWS;
