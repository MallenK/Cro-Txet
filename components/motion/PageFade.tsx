import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Per-route enter animation. Keyed on the pathname by the caller so it replays
 * on every navigation. Deliberately tiny: a 6px lift and a 0.3s fade.
 */
const PageFade: React.FC<React.PropsWithChildren<{ routeKey: string }>> = ({ routeKey, children }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      key={routeKey}
      initial={{ opacity: 0, y: reduce ? 0 : 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: EASE }}
    >
      {children}
    </motion.div>
  );
};

export default PageFade;
