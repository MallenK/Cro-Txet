# Contexto del proyecto — Cro&Txet

Resumen de la campaña de SEO técnico + medición realizada sobre la web, para que cualquiera (incluida una sesión futura de Claude) pueda retomarlo sin perder contexto.

## Punto de partida

La web (Vite + React, SPA) era prácticamente invisible para buscadores:

- `HashRouter` (`/#/shop`) — URLs poco indexables y sin vistas previas al compartir.
- Sin `robots.txt`, sin `sitemap.xml`.
- Sin meta description, Open Graph, Twitter Card ni JSON-LD.
- `<title>` estático idéntico en todas las páginas.
- El idioma (CAT/ES/EN) era estado de cliente, no formaba parte de la URL — Google solo podía indexar un idioma.
- Tailwind se cargaba por CDN (`cdn.tailwindcss.com`), no compilado.
- Imágenes sin optimizar (JPEG/PNG pesados, sin WebP).
- GA4 insertado a pelo (`gtag.js`), sin Tag Manager.
- Dos despliegues activos sin dominio canónico claro: GitHub Pages y Vercel.

## Decisiones tomadas con el usuario

- **Dominio canónico:** `https://croandtxet.cat` (Vercel). GitHub Pages pasa a ser **staging**, con `noindex`/`Disallow: /`.
- **Routing:** migrar de `HashRouter` a `BrowserRouter` con URLs limpias.
- **SEO multilingüe:** completo, con URLs por idioma (`/ca`, `/es`, `/en`) y `hreflang`, no un parche.
- **JSON-LD de producto:** sin `offers`/`price`/`availability` — el precio mostrado es orientativo, cada pieza requiere contactar para presupuesto final, así que no se declara como oferta cerrada.
- **GTM:** contenedor ya creado por el usuario, `GTM-KCB67XSN`.
- **Fidelidad visual:** cero cambios visuales percibidos por el usuario — cualquier diferencia de renderizado introducida por la migración técnica debía corregirse hasta igualar el aspecto actual, verificado con diff de píxeles automatizado (no solo capturas a ojo).

## Qué se ha implementado (ya en producción, commit `a92a974`)

### Base técnica y routing
- `HashRouter` → `BrowserRouter`, con `basename` según el host (`vite.config.ts` ya distinguía Vercel de GitHub Pages via `VERCEL=1`).
- `vercel.json` con rewrite SPA; `public/404.html` con el truco estándar de spa-github-pages para el staging.
- Rutas anidadas bajo `/:lang` (`components/LangLayout.tsx`, `context/LanguageContext.tsx`, `i18n.ts`); `/` redirige a `/ca` (o al idioma guardado en `localStorage`).
- Tailwind migrado de CDN a build-time (`@tailwindcss/vite`, `index.css`).

### SEO on-page
- `components/SEO.tsx` (con `react-helmet-async`): title, meta description, canonical, hreflang ×3 + x-default, Open Graph, Twitter Card, por página y por producto.
- JSON-LD: `Organization` (estático en `index.html`), `Product` y `BreadcrumbList` (en fichas de producto, vía `SEO.tsx`).
- `scripts/generate-sitemap.ts` (42 URLs: 3 idiomas × 14 rutas) y `robots.txt`, generados en build, distintos según el host.

### Medición
- Snippet de GTM (`GTM-KCB67XSN`) sustituyendo al `gtag.js` suelto.
- Eventos ya enviados a `dataLayer` desde el código: `view_item`, `select_content`, `generate_lead`, `language_change`.
- **Pendiente (fuera del código, manual en la consola de GTM):** configurar las etiquetas/activadores que recojan esos eventos y los envíen a GA4, más `page_view` (History Change), scroll depth y clic saliente a Instagram (nativos de GTM, sin código). Guía completa paso a paso: [`GTM-GA4-SETUP.md`](GTM-GA4-SETUP.md).

### Imágenes
- Las 48 imágenes de producto/marca convertidas a WebP (`scripts/generate-webp.ts`, ~30% menos peso); pipeline automático para fotos futuras (se ejecuta en cada `npm run build`).
- Alt text localizado y dinámico donde antes era genérico/fijo.

### Contenido
- Campos `dimensions`/`careInstructions` añadidos al tipo `Product`, rellenados como patrón inicial para 2 productos (Aléa, Altair). Pendiente extenderlo al resto del catálogo (trabajo de copy, no de código).

### Verificación de fidelidad visual
Se comparó pixel a pixel la versión nueva contra la versión en producción antes del cambio (Home, About, Shop, Product, Contact, Privacy, Devoluciones). Se encontraron y corrigieron 4 bugs reales de cascada CSS introducidos por el salto de Tailwind v3(CDN)→v4, invisibles sin herramientas de diff:

1. `.font-serif` — Tailwind CDN ganaba el conflicto de cascada y forzaba la serif del sistema (Georgia/Times) en vez de Cormorant Garamond; se fijó ese mismo valor explícitamente para no alterar el aspecto actual.
2. Clases `leading-*` combinadas con tamaños de texto responsivos (`text-X lg:text-Y`) eran inertes en el sitio actual (el interlineado por defecto del tamaño de texto siempre ganaba) — se eliminaron esas clases muertas en 16 sitios.
3. Márgenes de `space-y-*` sobre elementos `inline` (`<span>`, `<label>`) se perdían porque Tailwind v4 los aplica como `margin-bottom` al elemento anterior en vez de `margin-top` al siguiente, y los márgenes verticales no afectan a elementos inline — se añadió `inline-block` donde hacía falta.
4. Un elemento decorativo `position:absolute` contaba erróneamente para el espaciado `space-y-12` en la sección de "consejos de cuidado" del formulario de contacto — reproducido con un margen explícito.

Resultado final (diff de imagen, umbral 0.15): 0.00%–0.14% en todas las páginas salvo Contacto (0.60%, residuo de unos pocos píxeles en las etiquetas del formulario, imperceptible) y Producto (0.14%, que en realidad es el contenido nuevo de "Mides"/"Cura de la peça", intencional).

## Estado actual

- Todo commiteado y en producción (`git log` → commit `a92a974` en `main`, desplegado en Vercel).
- Verificado en `croandtxet.cat`: rutas limpias (`/ca/shop`, `/es/product/alea`), `sitemap.xml`, `robots.txt` y GTM cargando correctamente.

## Pendiente

1. **Configurar GTM en la consola** (tags/activadores para los eventos que ya llegan al `dataLayer`, más `page_view`/scroll/clic saliente) — ver [`GTM-GA4-SETUP.md`](GTM-GA4-SETUP.md). Sin esto, GA4 no recibe nada todavía aunque el código ya esté listo.
2. **Dar de alta el dominio en Google Search Console** y enviar `https://croandtxet.cat/sitemap.xml`.
3. **Extender `dimensions`/`careInstructions`** al resto de productos del catálogo (Oraïa, Lyra, Vérae, Nara, Vela, Velaïn) — copy, no código.
4. **Deliberadamente fuera de alcance por ahora** (decisión tomada en el plan original, no un olvido):
   - Blog/journal — necesitaría un compromiso de contenido continuo para tener valor SEO real; no encaja en un pase técnico puntual.
   - Limpieza de nombres de archivo `*_gpt.png` (artefactos de generación con IA) — bajo impacto SEO frente al esfuerzo de re-referenciar cada uso.
