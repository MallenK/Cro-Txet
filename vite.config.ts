import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  const isVercel = process.env.VERCEL === '1';

  return {
    base: isVercel ? '/' : '/Cro-Txet/',

    server: {
      port: 3000,
      host: '0.0.0.0',
    },

    plugins: [
      react(),
      tailwindcss(),
      ViteImageOptimizer({
        // .webp / .avif are already produced and tuned by scripts/generate-webp.ts;
        // re-encoding them here (AVIF especially) makes builds crawl. .svg has no
        // svgo installed. So the plugin only touches the original png/jpg fallbacks.
        exclude: /\.(svg|avif|webp)$/,
        png: { quality: 82 },
        jpeg: { quality: 82 },
        jpg: { quality: 82 },
      }),
    ],

    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'import.meta.env.VITE_IS_STAGING': JSON.stringify(!isVercel),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
