import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { brandReviews, reviewsFor, ratingStats, CustomerReview } from '../content/reviews';
import { analytics } from '../lib/analytics';
import Reveal from './motion/Reveal';

const Stars: React.FC<{ rating: number; className?: string }> = ({ rating, className = '' }) => (
  <span className={`inline-flex gap-0.5 ${className}`} aria-label={`${rating}/5`}>
    {[1, 2, 3, 4, 5].map(n => (
      <Star
        key={n}
        className="w-4 h-4"
        strokeWidth={1.5}
        fill={n <= Math.round(rating) ? 'currentColor' : 'none'}
      />
    ))}
  </span>
);

const ReviewCard: React.FC<{ review: CustomerReview }> = ({ review }) => (
  <figure className="flex flex-col gap-5 p-8 lg:p-10 bg-white border border-stone-100 h-full">
    <Stars rating={review.rating} className="text-stone-950" />
    <blockquote className="flex-1">
      <p className="text-stone-800 text-xl lg:text-2xl font-serif leading-snug">« {review.body} »</p>
    </blockquote>
    <figcaption className="text-[11px] uppercase tracking-[0.25em] font-bold text-stone-500">
      {review.author}
      {review.authorLocation ? ` · ${review.authorLocation}` : ''}
      {review.source ? ` · ${review.source}` : ''}
    </figcaption>
  </figure>
);

interface TestimonialsProps {
  /** Product page: show only that product's + brand-general reviews, compact. */
  productId?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ productId }) => {
  const { t, urlLang } = useLanguage();
  const reviews = productId ? reviewsFor(productId) : brandReviews();
  if (reviews.length === 0) return null;

  const stats = ratingStats(reviews)!;
  const summary = t.testimonials.ratingSummary
    .replace('{average}', stats.average.toFixed(1))
    .replace('{count}', String(stats.count));

  if (productId) {
    return (
      <section className="border-t border-stone-200 pt-10 space-y-8">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-stone-950 font-sans">
            {t.testimonials.productTitle}
          </h3>
          <span className="inline-flex items-center gap-2 text-[11px] font-bold text-stone-500">
            <Stars rating={stats.average} className="text-stone-950" /> {summary}
          </span>
        </div>
        <div className="space-y-6">
          {reviews.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-28 lg:py-40 px-6 lg:px-24 bg-stone-100">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-2xl space-y-4 mb-16">
          <span className="inline-block text-[11px] uppercase tracking-[0.5em] text-stone-900 font-bold">
            {t.testimonials.label}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-950">{t.testimonials.title}</h2>
          <p className="text-stone-700 text-lg">{t.testimonials.subtitle}</p>
          <p className="inline-flex items-center gap-3 text-sm font-bold text-stone-600 pt-2">
            <Stars rating={stats.average} className="text-stone-950" /> {summary}
          </p>
        </Reveal>

        <div className="grid gap-4 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 6).map((r, i) => (
            <Reveal key={i} delay={Math.min(i, 5) * 0.05} className="h-full">
              <ReviewCard review={r} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <Link
            to={`/${urlLang}/contact?ref=review`}
            onClick={() => analytics.ctaClick({ cta_text: 'leave_review', cta_location: 'testimonials', cta_destination: 'contact' })}
            className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] font-bold text-stone-950 border-b-2 border-stone-950 pb-2 hover:text-stone-600 hover:border-stone-600 transition-colors"
          >
            {t.testimonials.requestCta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;
