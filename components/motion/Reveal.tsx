import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

/**
 * Subtle scroll-into-view reveal. Editorial pace: 8px rise, half-second ease,
 * plays once. `prefers-reduced-motion` drops the movement and keeps a plain fade.
 *
 * Renders the element itself (via `as`), not a wrapper, so it can replace a
 * plain <div>/<section>/<h2>.
 *
 * Safety net: anything not scrolled into view within ~1.3s is shown anyway, so
 * content is never left invisible for non-scrolling contexts (crawlers, deep
 * links, fast jumps to the footer).
 */

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealTag = 'div' | 'section' | 'span' | 'li' | 'h2' | 'h3' | 'p' | 'article';

export interface RevealProps {
  as?: RevealTag;
  className?: string;
  style?: React.CSSProperties;
  /** Seconds to wait before animating — use for a light stagger. */
  delay?: number;
  /** Rise distance in px. */
  y?: number;
  children: React.ReactNode;
}

const Reveal: React.FC<RevealProps> = ({ as = 'div', className, style, delay = 0, y = 8, children }) => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -8% 0px' });
  const reduce = useReducedMotion();
  const [forced, setForced] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setForced(true), 1300);
    return () => window.clearTimeout(id);
  }, []);

  const shown = inView || forced;
  const Comp = (motion as any)[as] as typeof motion.div;
  const hidden = { opacity: 0, y: reduce ? 0 : y };

  return (
    <Comp
      ref={ref as any}
      className={className}
      style={style}
      initial={hidden}
      animate={shown ? { opacity: 1, y: 0 } : hidden}
      transition={{ duration: 0.5, ease: EASE, delay }}
    >
      {children}
    </Comp>
  );
};

export default Reveal;
