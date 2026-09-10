import { Language } from '../types';

export interface FaqItem {
  q: string;
  a: string;
}

/**
 * FAQ content, per language. Rendered as an accordion on /faq (and reused as a
 * section elsewhere) and emitted as FAQPage JSON-LD for rich results.
 */
export const FAQ: Record<Language, FaqItem[]> = {
  CAT: [
    {
      q: 'Com puc comprar una bossa?',
      a: 'Totes les peces es fan sota demanda. Tria el model a la botiga, omple el formulari de la fitxa del producte amb els detalls que vulguis (color, personalització, cadeneta…) i et contestaré amb el pressupost final i el termini. El pagament es coordina un cop confirmada la comanda.',
    },
    {
      q: 'Quant triga a estar llesta la meva bossa?',
      a: 'Entre 5 i 10 dies laborables des que confirmem la comanda, ja que cada peça es teixeix a mà una a una. Si tens una data límit, indica-ho al missatge i mirem d’ajustar-nos.',
    },
    {
      q: 'Els preus són definitius?',
      a: 'El preu que veus a la botiga és orientatiu. El preu final depèn de la personalització (fil, mides, acabats, cadeneta) i te’l confirmo per escrit abans de començar. No es cobra res fins que acceptes el pressupost.',
    },
    {
      q: 'Puc personalitzar el color o les mides?',
      a: 'Sí. Molts models permeten triar color i alguns detalls. Explica’m què tens al cap al formulari i t’indico què és possible i com afecta el preu i el termini.',
    },
    {
      q: 'Feu enviaments? Quant costen?',
      a: 'Sí, faig enviaments a tota la península. La despesa d’enviament es calcula segons la destinació i s’inclou al pressupost final. Consulta’m per a Balears, Canàries o enviaments internacionals.',
    },
    {
      q: 'Puc tornar o canviar una peça?',
      a: 'Disposes de 14 dies des de la recepció per sol·licitar una devolució. La peça ha d’estar sense usar i en el seu embalatge original. Les peces amb personalització a mida poden quedar excloses. Tens tots els detalls a la Política de devolucions.',
    },
    {
      q: 'Com cuido una bossa de crochet?',
      a: 'Desa-la amb paper a l’interior perquè conservi la forma, no la rentis a màquina i neteja les taques amb un drap humit. Trobaràs la guia completa de cura a la pàgina de Contacte i a la fitxa de cada producte.',
    },
    {
      q: 'Són peces úniques?',
      a: 'Sí. Cada bossa es fa a mà, i les petites variacions i imperfeccions formen part del seu caràcter artesanal. No hi ha dues peces exactament iguals.',
    },
  ],
  ES: [
    {
      q: '¿Cómo puedo comprar un bolso?',
      a: 'Todas las piezas se hacen bajo demanda. Elige el modelo en la tienda, rellena el formulario de la ficha del producto con los detalles que quieras (color, personalización, cadena…) y te responderé con el presupuesto final y el plazo. El pago se coordina una vez confirmado el pedido.',
    },
    {
      q: '¿Cuánto tarda en estar listo mi bolso?',
      a: 'Entre 5 y 10 días laborables desde que confirmamos el pedido, ya que cada pieza se teje a mano una a una. Si tienes una fecha límite, indícalo en el mensaje e intentamos ajustarnos.',
    },
    {
      q: '¿Los precios son definitivos?',
      a: 'El precio que ves en la tienda es orientativo. El precio final depende de la personalización (hilo, medidas, acabados, cadena) y te lo confirmo por escrito antes de empezar. No se cobra nada hasta que aceptas el presupuesto.',
    },
    {
      q: '¿Puedo personalizar el color o las medidas?',
      a: 'Sí. Muchos modelos permiten elegir color y algunos detalles. Cuéntame qué tienes en mente en el formulario y te indico qué es posible y cómo afecta al precio y al plazo.',
    },
    {
      q: '¿Hacéis envíos? ¿Cuánto cuestan?',
      a: 'Sí, hago envíos a toda la península. El gasto de envío se calcula según el destino y se incluye en el presupuesto final. Consúltame para Baleares, Canarias o envíos internacionales.',
    },
    {
      q: '¿Puedo devolver o cambiar una pieza?',
      a: 'Dispones de 14 días desde la recepción para solicitar una devolución. La pieza debe estar sin usar y en su embalaje original. Las piezas con personalización a medida pueden quedar excluidas. Tienes todos los detalles en la Política de devoluciones.',
    },
    {
      q: '¿Cómo cuido un bolso de crochet?',
      a: 'Guárdalo con papel en el interior para que conserve la forma, no lo laves a máquina y limpia las manchas con un paño húmedo. Encontrarás la guía completa de cuidado en la página de Contacto y en la ficha de cada producto.',
    },
    {
      q: '¿Son piezas únicas?',
      a: 'Sí. Cada bolso se hace a mano, y las pequeñas variaciones e imperfecciones forman parte de su carácter artesanal. No hay dos piezas exactamente iguales.',
    },
  ],
  EN: [
    {
      q: 'How do I buy a bag?',
      a: 'Every piece is made to order. Choose a model in the shop, fill in the form on the product page with any details you want (colour, customisation, chain…) and I’ll reply with a final quote and timeline. Payment is arranged once the order is confirmed.',
    },
    {
      q: 'How long does my bag take?',
      a: 'Between 5 and 10 business days from order confirmation, since each piece is crocheted by hand one at a time. If you have a deadline, mention it in your message and we’ll try to work around it.',
    },
    {
      q: 'Are the prices final?',
      a: 'The price shown in the shop is indicative. The final price depends on customisation (yarn, size, finish, chain) and I confirm it in writing before starting. Nothing is charged until you approve the quote.',
    },
    {
      q: 'Can I customise the colour or size?',
      a: 'Yes. Many models let you choose the colour and some details. Tell me what you have in mind in the form and I’ll let you know what’s possible and how it affects price and timeline.',
    },
    {
      q: 'Do you ship? How much does it cost?',
      a: 'Yes, I ship across mainland Spain. Shipping is calculated by destination and included in the final quote. Ask me about the Balearic or Canary Islands and international shipping.',
    },
    {
      q: 'Can I return or exchange a piece?',
      a: 'You have 14 days from delivery to request a return. The piece must be unused and in its original packaging. Made-to-measure custom pieces may be excluded. Full details are in the Return Policy.',
    },
    {
      q: 'How do I care for a crochet bag?',
      a: 'Store it with paper inside to keep its shape, don’t machine wash it, and spot-clean stains with a damp cloth. The full care guide is on the Contact page and on each product page.',
    },
    {
      q: 'Are these one-of-a-kind pieces?',
      a: 'Yes. Every bag is handmade, and small variations and imperfections are part of its artisan character. No two pieces are exactly alike.',
    },
  ],
};
