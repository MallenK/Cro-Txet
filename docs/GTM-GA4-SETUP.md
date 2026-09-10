# Configuración de Google Tag Manager + GA4

Guía paso a paso para terminar de configurar el contenedor de GTM ya instalado en el código (`GTM-KCB67XSN`, ver `index.html`) y conectarlo con la propiedad GA4 existente (`G-HKBYYN0KC8`).

Esto es configuración manual en la consola de GTM ([tagmanager.google.com](https://tagmanager.google.com)) — no requiere tocar código, salvo que se indique lo contrario.

## Eventos que el código ya envía a `dataLayer`

Referencia de lo que el frontend empuja (ver `context/LanguageContext.tsx`, `pages/ProductDetail.tsx`, `pages/Contact.tsx`):

| Evento | Cuándo | Payload |
|---|---|---|
| `view_item` | Al abrir una ficha de producto | `ecommerce.items[0] = { item_id, item_name, price, item_category: 'bags' }` |
| `select_content` | Al elegir un color en una ficha de producto | `{ content_type: 'product_color', item_id, color }` |
| `generate_lead` | Al enviar con éxito el formulario de contacto o el de encargo de producto | `{ form_type: 'contact' \| 'product_inquiry', item_id? }` |
| `language_change` | Al cambiar de idioma desde el selector | `{ previous_language, new_language }` |
| `consent_update` | Al aceptar/rechazar en el banner de cookies | `{ consent_analytics: bool, consent_marketing: bool }` |
| `newsletter_signup` | Al suscribirse con éxito a la newsletter (Home) | `—` |
| `lead_thank_you_view` | Al llegar a la página `/gracias` tras enviar el formulario de contacto | `—` |

Las vistas de página (`page_view`), el scroll y el clic saliente a Instagram **no** requieren código — se configuran de forma nativa en GTM (ver Fases 2, 7 y 8).

### Consent Mode v2 (ya cableado en el código)

`index.html` inicializa **Google Consent Mode v2** con todo **denegado por defecto**
(`ad_storage`, `ad_user_data`, `ad_personalization`, `analytics_storage`) antes de
cargar GTM, y `components/CookieConsent.tsx` llama a `gtag('consent','update', …)` +
empuja `consent_update` cuando la persona decide. Por tanto:

- **No hace falta** ninguna plantilla de consentimiento de terceros en GTM.
- En cada etiqueta de GA4, deja la configuración de consentimiento **"No establecida"**
  (GTM respeta Consent Mode automáticamente): las etiquetas se disparan siempre, pero
  GA4 solo usa cookies cuando `analytics_storage` está `granted`. Con `denied` manda
  *pings* sin cookies (modelado de conversiones).
- Si más adelante añades píxeles de publicidad (Meta, Google Ads), márcalos para que
  **requieran `ad_storage`**.

---

## Fase 0 — Variables integradas

1. **Variables** → **Configurar** (sección "Variables integradas").
2. Marca toda la sección **Clicks** (Click URL, Click Classes, Click Text...) y toda la sección **Scroll** (Scroll Depth Threshold, Scroll Direction...), y **Page URL** / **Page Path** si no están ya activadas.

## Fase 1 — Etiqueta base de GA4

3. **Etiquetas → Nueva** → tipo **Google Analytics: Configuración de GA4**.
4. ID de medición: `G-HKBYYN0KC8`.
5. Activador: **Initialization - All Pages** (o "All Pages" si no aparece Initialization).
6. Nombre: `GA4 - Configuration`. Guardar.

## Fase 2 — Vistas de página en la SPA (`History Change`)

La web es una SPA con URLs limpias (`/ca`, `/es/shop`...); las navegaciones internas no recargan la página, así que hace falta esto para que cada cambio de ruta cuente como vista.

7. **Activadores → Nuevo** → tipo **Cambio de historial (History Change)**, sin condiciones adicionales. Nombre: `History Change - All`.
8. **Etiquetas → Nueva** → **Google Analytics: Evento de GA4**.
9. Etiqueta de configuración: `GA4 - Configuration`.
10. Nombre del evento: `page_view`.
11. Activador: `History Change - All`. Nombre: `GA4 - page_view (SPA)`. Guardar.

## Fase 3 — Vista de producto (`view_item`)

12. **Activadores → Nuevo** → **Evento personalizado** → nombre del evento: `view_item` → nómbralo `CE - view_item`.
13. **Etiquetas → Nueva** → GA4 Event → Configuración: `GA4 - Configuration` → Nombre del evento: `view_item`.
14. Activa la casilla **"Enviar datos de ecommerce" / "Send Ecommerce Data"** → origen: **Capa de datos**. GTM coge automáticamente `item_id`, `item_name`, `price` desde `ecommerce.items`.
15. Activador: `CE - view_item`. Nombre: `GA4 - view_item`. Guardar.

## Fase 4 — Clic en color (`select_content`)

16. **Variables → Nueva** ×2: variable de capa de datos `item_id` → `DLV - item_id`; variable de capa de datos `color` → `DLV - color`.
17. **Activadores → Nuevo** → Evento personalizado → `select_content` → `CE - select_content`.
18. **Etiquetas → Nueva** → GA4 Event → Configuración: `GA4 - Configuration` → Nombre del evento: `select_content`.
19. Parámetros del evento: `item_id` = `{{DLV - item_id}}`, `color` = `{{DLV - color}}`.
20. Activador: `CE - select_content`. Nombre: `GA4 - select_content`. Guardar.

## Fase 5 — Formularios (`generate_lead`)

21. **Variables → Nueva**: variable de capa de datos `form_type` → `DLV - form_type`.
22. **Activadores → Nuevo** → Evento personalizado → `generate_lead` → `CE - generate_lead`.
23. **Etiquetas → Nueva** → GA4 Event → Configuración: `GA4 - Configuration` → Nombre del evento: `generate_lead`.
24. Parámetros: `form_type` = `{{DLV - form_type}}` (y opcionalmente `item_id` = `{{DLV - item_id}}`, reutilizando la variable de la Fase 4).
25. Activador: `CE - generate_lead`. Nombre: `GA4 - generate_lead`. Guardar.

## Fase 6 — Cambio de idioma (`language_change`)

26. **Variables → Nueva** ×2: `previous_language` → `DLV - previous_language`; `new_language` → `DLV - new_language`.
27. **Activadores → Nuevo** → Evento personalizado → `language_change` → `CE - language_change`.
28. **Etiquetas → Nueva** → GA4 Event → Configuración: `GA4 - Configuration` → Nombre del evento: `language_change`.
29. Parámetros: `previous_language` = `{{DLV - previous_language}}`, `new_language` = `{{DLV - new_language}}`.
30. Activador: `CE - language_change`. Nombre: `GA4 - language_change`. Guardar.

## Fase 6b — Newsletter y "Gracias" (`newsletter_signup`, `lead_thank_you_view`)

30a. **Activadores → Nuevo** → Evento personalizado → `newsletter_signup` → `CE - newsletter_signup`.
30b. **Etiquetas → Nueva** → GA4 Event → Configuración: `GA4 - Configuration` → Nombre del evento: `newsletter_signup` → Activador: `CE - newsletter_signup`. Guardar.
30c. Repite con `lead_thank_you_view` (útil como confirmación limpia de lead de contacto, ya que `/gracias` es la página a la que redirige el formulario).

## Fase 6c — Consent (`consent_update`)

30d. **Variables → Nueva** ×2: variable de capa de datos `consent_analytics` → `DLV - consent_analytics`; `consent_marketing` → `DLV - consent_marketing`.
30e. **Activadores → Nuevo** → Evento personalizado → `consent_update` → `CE - consent_update`.
30f. **Etiquetas → Nueva** → GA4 Event → `consent_update`, parámetros `analytics` = `{{DLV - consent_analytics}}`, `marketing` = `{{DLV - consent_marketing}}`. Sirve para medir la tasa de aceptación de cookies.

## Fase 7 — Scroll depth (nativo, sin código)

31. **Activadores → Nuevo** → tipo **Profundidad de desplazamiento (Scroll Depth)**.
32. Porcentajes verticales: `25,50,75,90`. Se activa en: todas las páginas.
33. Nombre: `Scroll Depth - All`. Guardar.
34. **Etiquetas → Nueva** → GA4 Event → Configuración: `GA4 - Configuration` → Nombre del evento: `scroll`.
35. Parámetro: `percent_scrolled` = `{{Scroll Depth Threshold}}`.
36. Activador: `Scroll Depth - All`. Nombre: `GA4 - scroll`. Guardar.

## Fase 8 — Clic saliente a Instagram (nativo, sin código)

37. **Activadores → Nuevo** → tipo **Solo clics en enlaces (Just Links)**.
38. "Se activa en": Algunos clics en enlaces → condición: `Click URL` **contiene** `instagram.com`.
39. Nombre: `Click - Instagram`. Guardar.
40. **Etiquetas → Nueva** → GA4 Event → Configuración: `GA4 - Configuration` → Nombre del evento: `click`.
41. Parámetros: `link_url` = `{{Click URL}}`, `outbound` = `true`.
42. Activador: `Click - Instagram`. Nombre: `GA4 - outbound Instagram`. Guardar.

## Fase 9 — Probar y publicar

43. Botón **Preview** (arriba a la derecha) → introduce `https://croandtxet.cat` → se abre Tag Assistant en una pestaña nueva conectada al sitio.
44. Navega por la web (cambia de página, abre un producto, elige un color, haz scroll, envía el formulario, cambia de idioma, haz clic en Instagram) y comprueba en el panel de Tag Assistant que cada etiqueta de la lista de arriba aparece como disparada ("Tags Fired") en el momento esperado.
45. Comprueba en GA4 → **Informes en tiempo real** que los eventos van llegando.
46. Cuando todo esté validado: botón **Submit** (arriba a la derecha) → escribe un nombre de versión (p. ej. "Configuración inicial GA4") → **Publish**.

## Fase 10 — Marcar conversiones en GA4

47. En **GA4 → Administrar → Eventos** (o "Conversiones"/"Key events"), marca como **evento clave**:
    - `generate_lead` (o `lead_thank_you_view` si prefieres contar solo el formulario de contacto)
    - `newsletter_signup`
48. Espera 24-48 h a que GA4 acumule datos y podrás construir informes de embudo (`page_view` → `view_item` → `generate_lead`).

## Pendiente fuera de GTM

- Dar de alta `croandtxet.cat` en [Google Search Console](https://search.google.com/search-console) y enviar el sitemap: `https://croandtxet.cat/sitemap.xml`.
- (Opcional) Microsoft Clarity o Hotjar para mapas de calor y grabaciones: script propio, añadir a la CSP de `vercel.json` (`script-src` + `connect-src`).
