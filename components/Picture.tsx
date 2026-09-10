import React from 'react';
import { toAvif } from '../constants';

type PictureProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  /** A .webp (or .jpg/.png) path. An .avif sibling is assumed to exist — the
   *  build pipeline (scripts/generate-webp.ts) emits one for every image. */
  src: string;
  alt: string;
};

/**
 * <img> with an AVIF <source> in front. Keeps the exact <img> API (className,
 * loading, decoding, fetchPriority, onError…) so it drops in for a plain <img>.
 * The <picture> uses `display: contents` (index.css) so it adds no box and the
 * <img> lays out exactly as before.
 */
const Picture: React.FC<PictureProps> = ({ src, alt, ...imgProps }) => {
  const avif = toAvif(src);
  return (
    <picture>
      {avif !== src && <source srcSet={avif} type="image/avif" />}
      <img src={src} alt={alt} {...imgProps} />
    </picture>
  );
};

export default Picture;
