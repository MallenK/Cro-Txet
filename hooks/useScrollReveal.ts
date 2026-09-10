import { useEffect } from 'react';

/**
 * Reveals any descendant with the `.fade-in-section` class as it scrolls into
 * view (adds `.visible`, styled in index.css). Call once per page, after the
 * content has rendered. Respects prefers-reduced-motion by revealing everything
 * immediately.
 */
export function useScrollReveal(deps: unknown[] = []) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.fade-in-section'));
    if (nodes.length === 0) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      nodes.forEach(n => n.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    nodes.forEach(n => observer.observe(n));

    // Safety net: never leave content hidden if the observer misbehaves.
    const fallback = window.setTimeout(() => {
      nodes.forEach(n => n.classList.add('visible'));
    }, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
