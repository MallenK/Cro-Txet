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

## Segunda pasada — auditoría pre-lanzamiento (rama `pre-lanzamiento-mejoras`)

Repaso completo contra checklists de "cosas que arreglar antes de lanzar". Implementado:

### Legal y privacidad
- **Banner de cookies** (`components/CookieConsent.tsx`) con **Google Consent Mode v2**: deny por
  defecto en `index.html`, `consent update` al aceptar, reapertura desde el footer
  ("Preferències de cookies"). Helpers en `context/consent.ts`.
- **Política de privacidad** reescrita y completa (RGPD/LSSI, cookies, EmailJS, transferencias,
  derechos) y **Términos y condiciones** nuevos, ambos en CA/ES/EN, en `content/legal.ts`,
  renderizados por `pages/LegalPage.tsx` (`type` ahora `privacy | returns | terms`).

### Páginas y navegación nuevas
- `/:lang/faq` (`pages/Faq.tsx`, acordeón + `FAQPage` JSON-LD, contenido en `content/faq.ts`).
- `/:lang/gracias` (`pages/Thanks.tsx`, noindex) — el formulario de Contacto redirige aquí al enviar.
- `/:lang/terms`.
- **404 real** (`pages/NotFound.tsx`) como catch-all dentro del layout; rutas sin prefijo de idioma
  redirigen conservando el path.
- **Breadcrumbs** visibles + `BreadcrumbList` JSON-LD (`components/Breadcrumbs.tsx`) en shop,
  producto, about, contacto, faq y legales. `SEO.tsx` ya no emite el breadcrumb (fuente única).
- Footer reconstruido (navegación + legal + preferencias de cookies + RRSS). FAQ en la navegación.

### Chrome global (en `AppShell`)
- Barra de progreso de scroll, botón "volver arriba", botón flotante de contacto (Instagram DM —
  no hay teléfono/WhatsApp), skip-link de accesibilidad.

### Formularios
- Estado de **error visible** en Contacto y ProductDetail (antes fallaban en silencio).
- **Honeypot** anti-spam en los tres formularios.
- Compromiso de tiempo de respuesta en Contacto.

### Producto
- Botón **compartir** (Web Share API + fallback a portapapeles).
- **CTA fija en móvil** (precio + "consultar", hace scroll al formulario).
- Alt de imágenes localizado (antes texto fijo en inglés).

### Marketing
- **Newsletter** con incentivo (10% primer encargo) en la Home (`components/Newsletter.tsx`).
  Sin proveedor de email marketing todavía: envía a la bandeja vía EmailJS. Migrar cuando haya proveedor.

### Micro-animaciones (Motion / motion.dev)
- `motion@13`. `<MotionConfig reducedMotion="user">` en `App.tsx` (todo respeta
  `prefers-reduced-motion`). `components/motion/Reveal.tsx` (reveal on scroll con
  `useInView` + red de seguridad de 1.3s) sustituye al hook `useScrollReveal` y a
  `.fade-in-section`, ya eliminados. `components/motion/PageFade.tsx` (transición de
  ruta). Acordeones de FAQ y de producto animan `height` de verdad. CTA móvil de
  producto y banner de cookies entran deslizando.

### Modo oscuro (por defecto: CLARO)
- Tema por variables CSS: `[data-theme="dark"]` remapea las custom properties de color de
  Tailwind v4 (`--color-stone-*`, `--color-white/black`) invirtiendo la escala, sin variantes
  `dark:` en componentes. Tokens `--color-inverse-bg/fg` para las bandas invertidas.
- **El valor por defecto de un visitante nuevo es claro.** El toggle del sidebar
  (`components/ThemeToggle.tsx`, `context/theme.ts`) tiene 3 opciones: Clar / Fosc / **Sistema**
  (opt-in explícito a seguir el SO). `initTheme()` resuelve "system" a un `data-theme` concreto
  y escucha los cambios del SO. Sin parpadeo (script en `index.html`). No hay `@media
  (prefers-color-scheme)` en el CSS.

### Instagram (@cro_and_txet)
- `content/instagram.ts`: 6 publicaciones reales enlazadas como **enlaces salientes normales**
  (sin el script de embed de Instagram, sin iframe de terceros → sin coste de CSP ni de
  privacidad), con fotografía propia de producto. `components/FeaturedInstagram.tsx` las muestra
  en una sección editorial de la Home. Para refrescar la selección: editar `url`/`image`/copy.
- Datos del perfil (sept. 2026): 231 seguidores, 26 posts. Bio: "sóc la Meritxell… Crochet lover
  & addict · Clutches, Bolsets & peces úniques · Total handmade from Barcelona". Cuenta personal:
  @TxellMallen. El contenido individual está tras el muro de login de Instagram; el endpoint
  `/p/<id>/embed/captioned/` sí expone caption e imagen sin login.

### Rendimiento e imágenes
- Favicon de marca (SVG + PNG 16/32/192/512 + apple-touch-icon), `site.webmanifest`, `theme-color`.
- Imagen Open Graph dedicada 1200×630 (`public/img/og/og-default.jpg`).
- `scripts/generate-assets.ts` genera favicons + OG en cada build.
- Fuentes de Google no bloqueantes; `fetchpriority`/`decoding` en el hero; `loading="lazy"` en la
  rejilla de tienda; pantalla de carga previa a la hidratación.
- `hooks/useScrollReveal.ts`: reveal on scroll reutilizable (Home, Shop, About).

### Seguridad
- **Headers en `vercel.json`**: CSP, HSTS, X-Content-Type-Options, X-Frame-Options,
  Referrer-Policy, Permissions-Policy, COOP + cache de assets.
- `npm audit fix` → 0 vulnerabilidades.
- Fix: email de contacto `.com` → `.cat` (era incoherente).

### Verificado en navegador
Rutas ca/es, 404, FAQ, términos, contacto: sin errores de consola. Banner de cookies y
Consent Mode operativos. CTA de producto `position: fixed`. Build de producción OK (sitemap 48 URLs).

## Tercera pasada — SEO + Analytics fase 1 (rama `seo-analytics-fase-1`)

### Analytics (listo para GA4, config en `docs/GTM-GA4-SETUP.md`)
- `lib/analytics.ts`: **punto único** para `dataLayer`. Eventos estilo GA4:
  `page_view` (con `content_group` y `content_language`), `view_item_list`,
  `select_item`, `view_item` (ecommerce), `select_content` (color/addon),
  `form_start`, `generate_lead` (con `estimated_value`), `lead_thank_you_view`,
  `newsletter_signup`, `share`, `cta_click`, `outbound_click`, `faq_toggle`,
  `language_change`, `theme_change`, `consent_update`.
- `components/AnalyticsBridge.tsx`: `page_view` por navegación SPA (tras flush del
  `<title>`) + tracking delegado de enlaces salientes (`data-analytics`).
- Todos los `window.dataLayer.push` sueltos migrados a `lib/analytics.ts`.
- **En GTM**: activar la etiqueta de vista de página con el evento personalizado
  `page_view` (no History Change) y desactivar las vistas por historial de la
  medición mejorada de GA4.

### SEO técnico
- `components/SEO.tsx`: `Product` JSON-LD enriquecido (`sku`, `image[]`,
  `material`, `color`, `category`, `url`, `inLanguage`) **con `offers`** (precio
  mostrado, EUR, `LimitedAvailability`, `priceValidUntil`) → revierte la decisión
  previa "sin offers" por petición de SEO máxima; **mantener el precio del schema
  sincronizado con `product.price`**. `aggregateRating`/`review` se emiten
  automáticamente si `content/reviews.ts` tiene reseñas reales (vacío, plumbing
  listo — **no añadir reseñas falsas**).
- Meta: `og:site_name`, `og:image:alt`, `og:locale:alternate`,
  `product:price:*`, `robots: max-image-preview:large` en páginas indexables.
- `index.html`: `@graph` con `Organization`+`Brand` (`founder`, `priceRange`,
  `address`) + `WebSite`.
- **Un único `<h1>` por página**: el logo del sidebar pasa a `<span>`;
  Home/Shop/About/Contact promueven su título a `<h1>` (sin cambio visual).

### Testimonios / reseñas
- `components/Testimonials.tsx` (sección en la Home + bloque compacto en la ficha de
  producto) + `content/reviews.ts`. **Oculto mientras `REVIEWS` esté vacío.** Con
  reseñas: sección visible + `aggregateRating`/`review` en el JSON-LD del producto
  (schema estricto por `productId`, `components/SEO.tsx`).
- Botón "Explica'ns la teva experiència" → `/contact?ref=review` (mensaje
  pre-rellenado; se trackea como `form_type: 'review'`).
- Guía para el cliente: [`RESENYES.md`](RESENYES.md). **No añadir reseñas falsas.**

### Rendimiento de imágenes
- `scripts/generate-webp.ts` emite `.avif` además de `.webp` para cada imagen;
  regenera solo lo que falta (los derivados se commitean). `FORCE_IMAGES=1` fuerza.
- `components/Picture.tsx`: `<picture>` con `<source>` AVIF + `<img>` webp de
  fallback (`picture { display: contents }`). En Home, Shop, ProductDetail, About
  e Instagram. `fetchPriority="high"` en la primera imagen de galería.
- 8 imágenes principales de producto renombradas: `<id>_gpt.png` →
  `bossa-crochet-<id>.png`.
- `vite.config.ts`: el optimizador ya no reprocesa `.webp`/`.avif` (build de 3 min → 15 s).

## Pendiente

1. **Configurar GTM en la consola** (tags/activadores para los eventos que ya llegan al `dataLayer`, más `page_view`/scroll/clic saliente) — ver [`GTM-GA4-SETUP.md`](GTM-GA4-SETUP.md). Sin esto, GA4 no recibe nada todavía aunque el código ya esté listo. **Nuevos eventos disponibles**: `consent_update`, `newsletter_signup`, `lead_thank_you_view`.
2. **Dar de alta el dominio en Google Search Console** y enviar `https://croandtxet.cat/sitemap.xml`.
3. **Extender `dimensions`/`careInstructions`** al resto de productos del catálogo (Oraïa, Lyra, Vérae, Nara, Vela, Velaïn) — copy, no código.
4. **Pasos manuales fuera del código de la auditoría pre-lanzamiento**:
   - **EmailJS**: restringir los dominios permitidos en el panel de EmailJS (allowlist) para evitar abuso del formulario desde otros orígenes.
   - **Newsletter**: dar de alta un proveedor (Mailchimp/MailerLite/Brevo) y sustituir el `emailjs.send` de `components/Newsletter.tsx` por su endpoint + doble opt-in.
   - **Revisar la redacción legal** de `content/legal.ts` con los datos fiscales reales del titular antes de publicar.
   - **Confirmar** el deep link de Instagram DM (`ig.me/m/cro_and_txet`) en `components/FloatingContact.tsx`.
5. **Deliberadamente fuera de alcance**:
   - **LocalBusiness schema completo** — sin dirección física publicable; el JSON-LD `Organization` se ha enriquecido con ciudad, email e idiomas, que es lo correcto sin NAP real.
   - **Monitorización de errores** (Sentry) — opcional; Vercel Analytics cubre lo básico.
   - **Blog/journal** — necesitaría un compromiso de contenido continuo para tener valor SEO real.
   - Limpieza de nombres de archivo `*_gpt.png` (artefactos de generación con IA) — bajo impacto SEO.
