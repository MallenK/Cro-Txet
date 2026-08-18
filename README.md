# Cro&Txet

Bolsos de crochet hechos a mano, piezas únicas de diseño artesanal. Barcelona · slow fashion · producción bajo demanda.

**Sitio en producción:** [croandtxet.cat](https://croandtxet.cat)

## Stack

- [Vite](https://vitejs.dev/) 6 + [React](https://react.dev/) 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4 (`@tailwindcss/vite`, compilado en build)
- [react-router-dom](https://reactrouter.com/) 7 — rutas limpias con prefijo de idioma (`/ca`, `/es`, `/en`)
- [react-helmet-async](https://github.com/staylor/react-helmet-async) — metadatos SEO por página
- [EmailJS](https://www.emailjs.com/) — formularios de contacto y encargo sin backend
- [Google Tag Manager](https://tagmanager.google.com/) + GA4 — medición de navegación
- [sharp](https://sharp.pixelplumbing.com/) + `vite-plugin-image-optimizer` — imágenes en WebP

## Empezar

**Requisitos:** Node.js 18+

```bash
npm install
npm run dev
```

La web queda disponible en `http://localhost:3000/Cro-Txet/` (redirige a `/ca` automáticamente).

## Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Genera `.webp` de imágenes nuevas → build de producción → `sitemap.xml`/`robots.txt` |
| `npm run preview` | Sirve el build de producción localmente |
| `npm run deploy` | Publica `dist/` en GitHub Pages (entorno de staging, ver abajo) |

## Idiomas y contenido

Los textos viven en `constants.ts` (`TRANSLATIONS`, `PRODUCTS`), completos en catalán, castellano e inglés — no hay archivos de traducción externos. El idioma activo se resuelve desde el primer segmento de la URL (`/ca/...`, `/es/...`, `/en/...`) vía `context/LanguageContext.tsx`; el selector de idioma navega a la misma ruta cambiando ese prefijo.

## Despliegue

Dos entornos, ambos ligados al repositorio de GitHub:

- **Vercel (producción)** — `croandtxet.cat`. Cada push a `main` despliega automáticamente. `vite.config.ts` detecta el entorno (`VERCEL=1`) para servir la app en la raíz (`/`), generar `sitemap.xml`/`robots.txt` indexables y omitir la etiqueta `noindex`.
- **GitHub Pages (staging)** — `mallenk.github.io/Cro-Txet`, publicado manualmente con `npm run deploy`. Sirve bajo `/Cro-Txet/`, con `robots.txt: Disallow: /` y `noindex` en cada página para no competir con el dominio real en buscadores.

```bash
git add .
git commit -m "mensaje"
git push origin main   # despliega a Vercel automáticamente
npm run deploy          # publica el staging en GitHub Pages (opcional)
```

## SEO y medición

- Metadatos por página (title, description, canonical, hreflang, Open Graph) vía el componente `components/SEO.tsx`.
- JSON-LD: `Organization` (estático en `index.html`), `Product` y `BreadcrumbList` (por ficha de producto).
- `scripts/generate-sitemap.ts` y la lógica de `robots.txt` corren tras cada build.
- Google Tag Manager (`GTM-KCB67XSN`) + GA4 (`G-HKBYYN0KC8`) — guía de configuración completa en [`docs/GTM-GA4-SETUP.md`](docs/GTM-GA4-SETUP.md).

Contexto más amplio del proyecto (qué se hizo, por qué, y qué queda pendiente) en [`docs/PROJECT-CONTEXT.md`](docs/PROJECT-CONTEXT.md).

## Estructura

```
pages/           Páginas (Home, Shop, ProductDetail, About, Contact, LegalPage)
components/      Sidebar, LangLayout (layout + validación de idioma), SEO
context/         LanguageContext (idioma activo, derivado de la URL)
constants.ts     Catálogo de productos y traducciones (CAT/ES/EN)
types.ts         Tipos compartidos (Product, Translation, Language)
i18n.ts          Mapeo entre idioma interno y segmento de URL
scripts/         generate-sitemap.ts, generate-webp.ts (se ejecutan en build)
public/          Estáticos, imágenes de producto, 404.html (fallback SPA de GitHub Pages)
docs/            Documentación del proyecto (SEO, GTM/GA4, contexto)
```

---

Developed by [MallenK](https://github.com/MallenK)
