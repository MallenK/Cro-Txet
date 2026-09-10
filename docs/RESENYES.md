# Reseñas / testimonios

La infraestructura está lista y **oculta** hasta que haya reseñas reales. En cuanto
`content/reviews.ts` tenga al menos una:

- Aparece la sección **"El que diuen les clientes"** en la Home.
- En la ficha de cada producto con reseñas sale un bloque **"Ressenyes d'aquesta peça"**.
- El JSON-LD del producto emite `aggregateRating` + `review` → estrellas en Google.

## Cómo conseguir reseñas (0 €)

1. **Google Business Profile** — es el canal más importante. Crea el perfil (negocio
   de zona de servicio, sin dirección), y tras cada venta pide a la clienta que deje
   reseña con el enlace corto que Google te da. Esas reseñas cuentan para el
   posicionamiento local y se pueden copiar aquí.
2. **Instagram / WhatsApp** — cuando una clienta te escriba algo bonito, pídele
   permiso para publicarlo ("¿te importa que lo ponga en la web?").
3. **La propia web** — el botón *"Has comprat una peça? Explica'ns la teva
   experiència"* de la sección de testimonios lleva al formulario de contacto con el
   mensaje pre-rellenado (`/contact?ref=review`). Esos envíos llegan a tu correo.

## Cómo añadirlas a la web

Edita `content/reviews.ts`, descomenta el ejemplo y añade una entrada por reseña:

```ts
export const REVIEWS: CustomerReview[] = [
  {
    author: 'Marta G.',            // nombre + inicial, con permiso
    rating: 5,                     // 1 a 5
    body: 'La bossa és preciosa…', // la frase tal cual
    date: '2026-07-18',            // AAAA-MM-DD
    productId: 'alea',             // opcional: alea | oraia | altair | lyra | verae | nara | vela | velain
    authorLocation: 'Barcelona',   // opcional
    source: 'Google',              // opcional: Google | Instagram | WhatsApp…
  },
];
```

Sin `productId` es una reseña de marca (sale en la Home, no en una ficha concreta).

⚠️ **Solo reseñas auténticas y con permiso.** Reseñas falsas o incentivadas son una
violación de las políticas de Google y arriesgan una penalización manual.
