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

Las vistas de página (`page_view`), el scroll y el clic saliente a Instagram **no** requieren código — se configuran de forma nativa en GTM (ver Fases 2, 7 y 8).

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

## Pendiente fuera de GTM

- Dar de alta `croandtxet.cat` en [Google Search Console](https://search.google.com/search-console) y enviar el sitemap: `https://croandtxet.cat/sitemap.xml`.
