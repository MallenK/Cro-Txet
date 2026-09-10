import { Language } from '../types';

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export interface LegalDoc {
  updated: string;
  intro?: string;
  sections: LegalSection[];
}

/**
 * Long-form legal copy (privacy + terms), per language, kept out of constants.ts
 * so the translation object stays manageable. Rendered by pages/LegalPage.tsx.
 *
 * NOTE (para Cro&Txet): esta redacción es una base sólida y genérica para un
 * negocio artesanal sin checkout propio (formulario de contacto + EmailJS +
 * Google Analytics/GTM). Antes de la publicación definitiva conviene revisar
 * con datos reales el titular/identidad fiscal y, si en algún momento se añade
 * pasarela de pago o newsletter con proveedor externo, actualizar los encargados
 * del tratamiento.
 */

const CONTACT_EMAIL = 'hola@croandtxet.cat';

export const LEGAL_PRIVACY: Record<Language, LegalDoc> = {
  CAT: {
    updated: '10 de setembre de 2025',
    intro:
      'A Cro&Txet ens prenem seriosament la teva privacitat. Aquesta política explica quines dades recollim quan visites croandtxet.cat o ens escrius, amb quina finalitat i quins drets tens sobre elles.',
    sections: [
      {
        heading: '1. Responsable del tractament',
        paragraphs: [
          'Cro&Txet (en endavant, “nosaltres”).',
          `Web: croandtxet.cat · Correu de contacte: ${CONTACT_EMAIL} · Ubicació: Barcelona (Espanya).`,
        ],
      },
      {
        heading: '2. Quines dades tractem',
        list: [
          'Dades que ens facilites pel formulari de contacte o de consulta de producte: nom, adreça de correu electrònic i el contingut del teu missatge.',
          'Dades de navegació i ús: pàgines visitades, dispositiu, navegador i dades estadístiques agregades, recollides mitjançant cookies i tecnologies similars només si hi dones el teu consentiment.',
        ],
      },
      {
        heading: '3. Amb quina finalitat',
        list: [
          'Respondre les teves consultes i preparar pressupostos de peces personalitzades.',
          'Gestionar les comandes acordades i el seguiment postvenda.',
          'Analitzar de forma agregada l’ús de la web per millorar-la (només amb consentiment).',
        ],
      },
      {
        heading: '4. Base jurídica',
        list: [
          'Consentiment de la persona interessada en enviar el formulari i, per a l’analítica, en acceptar les cookies.',
          'Execució d’un contracte o de mesures precontractuals quan sol·licites un pressupost o fas una comanda.',
          'Compliment d’obligacions legals (per exemple, fiscals o comptables) quan escaigui.',
        ],
      },
      {
        heading: '5. Enviament del formulari',
        paragraphs: [
          'El formulari de la web s’envia a través del servei EmailJS (EmailJS, Inc.), que transmet el teu missatge al nostre correu. Les dades viatgen xifrades i EmailJS actua com a encarregat del tractament. No es fa servir per a cap altra finalitat.',
        ],
      },
      {
        heading: '6. Cookies i analítica',
        paragraphs: [
          'La web utilitza Google Analytics 4 a través de Google Tag Manager per obtenir estadístiques d’ús, i Vercel Analytics per a mètriques de rendiment. Aquestes eines només s’activen si acceptes les cookies analítiques al bàner de consentiment; per defecte estan desactivades (Google Consent Mode v2).',
          'Pots canviar la teva decisió en qualsevol moment des de l’enllaç “Preferències de cookies” del peu de pàgina.',
        ],
      },
      {
        heading: '7. Destinataris i transferències',
        paragraphs: [
          'No venem ni cedim les teves dades a tercers. Els proveïdors que ens donen servei (allotjament a Vercel, enviament de formularis amb EmailJS, analítica de Google) poden tractar dades als Estats Units sota les garanties adequades (clàusules contractuals tipus i marcs de transferència vigents).',
        ],
      },
      {
        heading: '8. Conservació',
        paragraphs: [
          'Conservem els missatges de contacte mentre gestionem la teva consulta i, després, el temps necessari per atendre responsabilitats legals. Les dades de comandes es conserven durant els terminis fiscals aplicables. Les dades analítiques es conserven de forma agregada segons la configuració de Google Analytics.',
        ],
      },
      {
        heading: '9. Els teus drets',
        paragraphs: [
          `Pots exercir els drets d’accés, rectificació, supressió, oposició, limitació i portabilitat escrivint a ${CONTACT_EMAIL}. També pots retirar el consentiment en qualsevol moment i presentar una reclamació davant l’Agència Espanyola de Protecció de Dades (aepd.es) si consideres que no hem atès els teus drets.`,
        ],
      },
      {
        heading: '10. Canvis en aquesta política',
        paragraphs: [
          'Podem actualitzar aquesta política per adaptar-la a canvis legals o de funcionament. Publicarem sempre la versió vigent en aquesta pàgina amb la data d’actualització.',
        ],
      },
    ],
  },
  ES: {
    updated: '10 de septiembre de 2025',
    intro:
      'En Cro&Txet nos tomamos en serio tu privacidad. Esta política explica qué datos recogemos cuando visitas croandtxet.cat o nos escribes, con qué finalidad y qué derechos tienes sobre ellos.',
    sections: [
      {
        heading: '1. Responsable del tratamiento',
        paragraphs: [
          'Cro&Txet (en adelante, “nosotros”).',
          `Web: croandtxet.cat · Correo de contacto: ${CONTACT_EMAIL} · Ubicación: Barcelona (España).`,
        ],
      },
      {
        heading: '2. Qué datos tratamos',
        list: [
          'Datos que nos facilitas mediante el formulario de contacto o de consulta de producto: nombre, dirección de correo electrónico y el contenido de tu mensaje.',
          'Datos de navegación y uso: páginas visitadas, dispositivo, navegador y datos estadísticos agregados, recogidos mediante cookies y tecnologías similares solo si das tu consentimiento.',
        ],
      },
      {
        heading: '3. Con qué finalidad',
        list: [
          'Responder a tus consultas y preparar presupuestos de piezas personalizadas.',
          'Gestionar los pedidos acordados y el seguimiento posventa.',
          'Analizar de forma agregada el uso de la web para mejorarla (solo con consentimiento).',
        ],
      },
      {
        heading: '4. Base jurídica',
        list: [
          'Consentimiento de la persona interesada al enviar el formulario y, para la analítica, al aceptar las cookies.',
          'Ejecución de un contrato o de medidas precontractuales cuando solicitas un presupuesto o realizas un pedido.',
          'Cumplimiento de obligaciones legales (por ejemplo, fiscales o contables) cuando proceda.',
        ],
      },
      {
        heading: '5. Envío del formulario',
        paragraphs: [
          'El formulario de la web se envía a través del servicio EmailJS (EmailJS, Inc.), que transmite tu mensaje a nuestro correo. Los datos viajan cifrados y EmailJS actúa como encargado del tratamiento. No se usa para ninguna otra finalidad.',
        ],
      },
      {
        heading: '6. Cookies y analítica',
        paragraphs: [
          'La web utiliza Google Analytics 4 a través de Google Tag Manager para obtener estadísticas de uso, y Vercel Analytics para métricas de rendimiento. Estas herramientas solo se activan si aceptas las cookies analíticas en el banner de consentimiento; por defecto están desactivadas (Google Consent Mode v2).',
          'Puedes cambiar tu decisión en cualquier momento desde el enlace “Preferencias de cookies” del pie de página.',
        ],
      },
      {
        heading: '7. Destinatarios y transferencias',
        paragraphs: [
          'No vendemos ni cedemos tus datos a terceros. Los proveedores que nos dan servicio (alojamiento en Vercel, envío de formularios con EmailJS, analítica de Google) pueden tratar datos en Estados Unidos bajo las garantías adecuadas (cláusulas contractuales tipo y marcos de transferencia vigentes).',
        ],
      },
      {
        heading: '8. Conservación',
        paragraphs: [
          'Conservamos los mensajes de contacto mientras gestionamos tu consulta y, después, el tiempo necesario para atender responsabilidades legales. Los datos de pedidos se conservan durante los plazos fiscales aplicables. Los datos analíticos se conservan de forma agregada según la configuración de Google Analytics.',
        ],
      },
      {
        heading: '9. Tus derechos',
        paragraphs: [
          `Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a ${CONTACT_EMAIL}. También puedes retirar el consentimiento en cualquier momento y presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es) si consideras que no hemos atendido tus derechos.`,
        ],
      },
      {
        heading: '10. Cambios en esta política',
        paragraphs: [
          'Podemos actualizar esta política para adaptarla a cambios legales o de funcionamiento. Publicaremos siempre la versión vigente en esta página con la fecha de actualización.',
        ],
      },
    ],
  },
  EN: {
    updated: '10 September 2025',
    intro:
      'At Cro&Txet we take your privacy seriously. This policy explains what data we collect when you visit croandtxet.cat or contact us, why, and what rights you have over it.',
    sections: [
      {
        heading: '1. Data controller',
        paragraphs: [
          'Cro&Txet (“we”, “us”).',
          `Website: croandtxet.cat · Contact email: ${CONTACT_EMAIL} · Location: Barcelona (Spain).`,
        ],
      },
      {
        heading: '2. What data we process',
        list: [
          'Data you provide through the contact or product enquiry form: name, email address and the content of your message.',
          'Browsing and usage data: pages visited, device, browser and aggregated statistics, collected through cookies and similar technologies only if you give consent.',
        ],
      },
      {
        heading: '3. Purposes',
        list: [
          'Replying to your enquiries and preparing quotes for custom pieces.',
          'Managing agreed orders and after-sales follow-up.',
          'Analysing website usage in aggregate to improve it (only with consent).',
        ],
      },
      {
        heading: '4. Legal basis',
        list: [
          'Your consent when submitting the form and, for analytics, when accepting cookies.',
          'Performance of a contract or pre-contractual steps when you request a quote or place an order.',
          'Compliance with legal obligations (e.g. tax or accounting) where applicable.',
        ],
      },
      {
        heading: '5. Form submission',
        paragraphs: [
          'The website form is sent through the EmailJS service (EmailJS, Inc.), which delivers your message to our inbox. Data is transmitted encrypted and EmailJS acts as a data processor. It is not used for any other purpose.',
        ],
      },
      {
        heading: '6. Cookies and analytics',
        paragraphs: [
          'The website uses Google Analytics 4 via Google Tag Manager for usage statistics, and Vercel Analytics for performance metrics. These tools only run if you accept analytics cookies in the consent banner; they are disabled by default (Google Consent Mode v2).',
          'You can change your choice at any time from the “Cookie preferences” link in the footer.',
        ],
      },
      {
        heading: '7. Recipients and transfers',
        paragraphs: [
          'We do not sell or share your data with third parties. The providers that support us (hosting on Vercel, form delivery via EmailJS, Google analytics) may process data in the United States under appropriate safeguards (standard contractual clauses and current transfer frameworks).',
        ],
      },
      {
        heading: '8. Retention',
        paragraphs: [
          'We keep contact messages while we handle your enquiry and afterwards for as long as needed to address legal responsibilities. Order data is kept for the applicable tax periods. Analytics data is retained in aggregate according to the Google Analytics configuration.',
        ],
      },
      {
        heading: '9. Your rights',
        paragraphs: [
          `You can exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to ${CONTACT_EMAIL}. You may also withdraw consent at any time and lodge a complaint with the Spanish Data Protection Agency (aepd.es) if you believe we have not handled your rights properly.`,
        ],
      },
      {
        heading: '10. Changes to this policy',
        paragraphs: [
          'We may update this policy to reflect legal or operational changes. The current version will always be published on this page with its update date.',
        ],
      },
    ],
  },
};

export const LEGAL_TERMS: Record<Language, LegalDoc> = {
  CAT: {
    updated: '10 de setembre de 2025',
    intro:
      'Aquestes condicions regulen l’ús del lloc web croandtxet.cat i la relació comercial per a l’encàrrec de peces artesanals de Cro&Txet.',
    sections: [
      {
        heading: '1. Identificació',
        paragraphs: [
          `Titular: Cro&Txet · Web: croandtxet.cat · Contacte: ${CONTACT_EMAIL} · Barcelona (Espanya).`,
        ],
      },
      {
        heading: '2. Objecte',
        paragraphs: [
          'Cro&Txet dissenya i fabrica de manera artesanal bosses de crochet i complements. La web és un aparador: no incorpora carret de compra ni pagament en línia. Les comandes es formalitzen per correu electrònic després d’una consulta a través del formulari.',
        ],
      },
      {
        heading: '3. Preus i pressupostos',
        list: [
          'Els preus mostrats a la botiga són orientatius i corresponen a la configuració base de cada model.',
          'El preu final depèn de la personalització (fil, mides, acabats, cadeneta, enviament) i es comunica per escrit abans de començar la producció.',
          'El pressupost acceptat per escrit és vinculant per a ambdues parts durant el termini que s’hi indiqui.',
        ],
      },
      {
        heading: '4. Procés de comanda',
        list: [
          'Envies una consulta amb els detalls de la peça que vols.',
          'Reps un pressupost amb preu final, termini estimat i forma de pagament.',
          'En acceptar el pressupost i fer el pagament acordat, la comanda entra en producció.',
          'El termini habitual de producció és de 5 a 10 dies laborables, més el temps d’enviament.',
        ],
      },
      {
        heading: '5. Pagament',
        paragraphs: [
          'El pagament es fa pels mitjans indicats al pressupost (per exemple, transferència bancària o Bizum). No es tracten dades de targeta a través de la web.',
        ],
      },
      {
        heading: '6. Enviaments',
        paragraphs: [
          'Els enviaments es fan a la península per missatgeria. La despesa i el termini de lliurament s’indiquen al pressupost. Per a Balears, Canàries o enviaments internacionals, consulta abans de confirmar.',
        ],
      },
      {
        heading: '7. Desistiment i devolucions',
        paragraphs: [
          'Com a consumidor tens dret a desistir de la compra en 14 dies naturals des de la recepció, segons la Política de devolucions. Les peces fetes a mida o amb personalització específica poden quedar excloses del dret de desistiment d’acord amb la normativa de consum.',
        ],
      },
      {
        heading: '8. Garantia i naturalesa artesanal',
        paragraphs: [
          'Totes les peces es fan a mà. Les petites variacions de color, mida o acabat respecte a les fotografies són inherents al producte artesanal i no es consideren defectes. S’apliquen les garanties legals per falta de conformitat.',
        ],
      },
      {
        heading: '9. Propietat intel·lectual',
        paragraphs: [
          'Els continguts de la web (textos, fotografies, dissenys, logotip) són propietat de Cro&Txet i no es poden reproduir sense autorització.',
        ],
      },
      {
        heading: '10. Legislació aplicable',
        paragraphs: [
          'Aquestes condicions es regeixen per la legislació espanyola. Per a qualsevol controvèrsia, les parts se sotmeten als jutjats i tribunals que corresponguin segons la normativa de consum aplicable.',
        ],
      },
    ],
  },
  ES: {
    updated: '10 de septiembre de 2025',
    intro:
      'Estas condiciones regulan el uso del sitio web croandtxet.cat y la relación comercial para el encargo de piezas artesanales de Cro&Txet.',
    sections: [
      {
        heading: '1. Identificación',
        paragraphs: [
          `Titular: Cro&Txet · Web: croandtxet.cat · Contacto: ${CONTACT_EMAIL} · Barcelona (España).`,
        ],
      },
      {
        heading: '2. Objeto',
        paragraphs: [
          'Cro&Txet diseña y fabrica de forma artesanal bolsos de crochet y complementos. La web es un escaparate: no incorpora carrito de compra ni pago en línea. Los pedidos se formalizan por correo electrónico tras una consulta a través del formulario.',
        ],
      },
      {
        heading: '3. Precios y presupuestos',
        list: [
          'Los precios mostrados en la tienda son orientativos y corresponden a la configuración base de cada modelo.',
          'El precio final depende de la personalización (hilo, medidas, acabados, cadena, envío) y se comunica por escrito antes de empezar la producción.',
          'El presupuesto aceptado por escrito es vinculante para ambas partes durante el plazo que en él se indique.',
        ],
      },
      {
        heading: '4. Proceso de pedido',
        list: [
          'Envías una consulta con los detalles de la pieza que quieres.',
          'Recibes un presupuesto con precio final, plazo estimado y forma de pago.',
          'Al aceptar el presupuesto y realizar el pago acordado, el pedido entra en producción.',
          'El plazo habitual de producción es de 5 a 10 días laborables, más el tiempo de envío.',
        ],
      },
      {
        heading: '5. Pago',
        paragraphs: [
          'El pago se realiza por los medios indicados en el presupuesto (por ejemplo, transferencia bancaria o Bizum). No se tratan datos de tarjeta a través de la web.',
        ],
      },
      {
        heading: '6. Envíos',
        paragraphs: [
          'Los envíos se realizan a la península por mensajería. El coste y el plazo de entrega se indican en el presupuesto. Para Baleares, Canarias o envíos internacionales, consulta antes de confirmar.',
        ],
      },
      {
        heading: '7. Desistimiento y devoluciones',
        paragraphs: [
          'Como consumidor tienes derecho a desistir de la compra en 14 días naturales desde la recepción, según la Política de devoluciones. Las piezas hechas a medida o con personalización específica pueden quedar excluidas del derecho de desistimiento conforme a la normativa de consumo.',
        ],
      },
      {
        heading: '8. Garantía y naturaleza artesanal',
        paragraphs: [
          'Todas las piezas se hacen a mano. Las pequeñas variaciones de color, tamaño o acabado respecto a las fotografías son inherentes al producto artesanal y no se consideran defectos. Se aplican las garantías legales por falta de conformidad.',
        ],
      },
      {
        heading: '9. Propiedad intelectual',
        paragraphs: [
          'Los contenidos de la web (textos, fotografías, diseños, logotipo) son propiedad de Cro&Txet y no pueden reproducirse sin autorización.',
        ],
      },
      {
        heading: '10. Legislación aplicable',
        paragraphs: [
          'Estas condiciones se rigen por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales que correspondan según la normativa de consumo aplicable.',
        ],
      },
    ],
  },
  EN: {
    updated: '10 September 2025',
    intro:
      'These terms govern the use of the croandtxet.cat website and the commercial relationship for commissioning handmade Cro&Txet pieces.',
    sections: [
      {
        heading: '1. Identification',
        paragraphs: [
          `Owner: Cro&Txet · Website: croandtxet.cat · Contact: ${CONTACT_EMAIL} · Barcelona (Spain).`,
        ],
      },
      {
        heading: '2. Purpose',
        paragraphs: [
          'Cro&Txet designs and handcrafts crochet bags and accessories. The website is a showcase: it has no shopping cart or online payment. Orders are placed by email after an enquiry through the form.',
        ],
      },
      {
        heading: '3. Prices and quotes',
        list: [
          'Prices shown in the shop are indicative and correspond to the base configuration of each model.',
          'The final price depends on customisation (yarn, size, finish, chain, shipping) and is confirmed in writing before production begins.',
          'A quote accepted in writing is binding on both parties for the period stated in it.',
        ],
      },
      {
        heading: '4. Order process',
        list: [
          'You send an enquiry with the details of the piece you want.',
          'You receive a quote with the final price, estimated timeline and payment method.',
          'Once you approve the quote and make the agreed payment, the order goes into production.',
          'The usual production time is 5 to 10 business days, plus shipping time.',
        ],
      },
      {
        heading: '5. Payment',
        paragraphs: [
          'Payment is made by the means stated in the quote (e.g. bank transfer or Bizum). No card data is processed through the website.',
        ],
      },
      {
        heading: '6. Shipping',
        paragraphs: [
          'Orders are shipped within mainland Spain by courier. Cost and delivery time are stated in the quote. For the Balearic or Canary Islands or international shipping, ask before confirming.',
        ],
      },
      {
        heading: '7. Right of withdrawal and returns',
        paragraphs: [
          'As a consumer you have the right to withdraw from the purchase within 14 calendar days of delivery, as set out in the Return Policy. Made-to-measure or specifically customised pieces may be excluded from the right of withdrawal under consumer law.',
        ],
      },
      {
        heading: '8. Warranty and handmade nature',
        paragraphs: [
          'All pieces are handmade. Small variations in colour, size or finish compared to the photographs are inherent to a handcrafted product and are not considered defects. Statutory warranties for lack of conformity apply.',
        ],
      },
      {
        heading: '9. Intellectual property',
        paragraphs: [
          'The website content (text, photographs, designs, logo) is the property of Cro&Txet and may not be reproduced without permission.',
        ],
      },
      {
        heading: '10. Applicable law',
        paragraphs: [
          'These terms are governed by Spanish law. For any dispute, the parties submit to the courts that have jurisdiction under the applicable consumer regulations.',
        ],
      },
    ],
  },
};
