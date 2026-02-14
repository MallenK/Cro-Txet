
import React from 'react';
import { Translation, Language } from '../types';

interface LegalPageProps {
  t: Translation;
  lang: Language;
  type: 'privacy' | 'returns';
}

const LegalPage: React.FC<LegalPageProps> = ({ t, lang, type }) => {
  return (
    <div className="py-24 px-8 lg:px-24 max-w-4xl mx-auto animate-fade-in bg-white min-h-screen">
      {type === 'returns' ? (
        <article className="space-y-10">
          <header className="space-y-4 border-b border-stone-200 pb-10">
            <h1 className="text-4xl lg:text-6xl font-serif text-stone-950">{t.contact.policies.returns}</h1>
          </header>
          <div className="prose prose-stone max-w-none text-stone-900 space-y-8 text-xl leading-relaxed">
            <p className="font-serif text-3xl text-stone-950">
              {lang === 'CAT' 
                ? 'La política de devolucions estableix que disposes de 14 dies des de la recepció de l’article per sol·licitar-ne la devolució.'
                : lang === 'ES'
                ? 'Nuestra política de devoluciones establece que dispones de 14 días desde la recepción del artículo para solicitar su devolución.'
                : 'Our return policy allows you 14 days from the date you receive your item to request a return.'}
            </p>
            <p>
              {lang === 'CAT'
                ? 'Per poder tramitar una devolució, l’article ha d’estar en les mateixes condicions en què el vas rebre, sense usar, amb totes les etiquetes i en el seu embalatge original.'
                : lang === 'ES'
                ? 'Para poder tramitar una devolución, el artículo debe encontrarse en las mismas condiciones en que fue recibido, sin usar, con todas las etiquetas y en su embalaje original.'
                : 'To be eligible for a return, the item must be in the same condition as when received, unused, with all tags attached and in its original packaging.'}
            </p>
            <p className="bg-stone-50 p-6 border-l-4 border-stone-950 font-medium">
              {lang === 'CAT'
                ? 'Per iniciar una devolució, contacta’ns a hola@croandtxet.cat, indicant el motiu de la devolució. Les despeses d’enviament van a càrrec del client.'
                : lang === 'ES'
                ? 'Para solicitar una devolución, contáctanos en hola@croandtxet.cat, indicando el motivo. Los gastos de envío corren a cargo del cliente.'
                : 'To request a return, please contact us at hola@croandtxet.cat, explaining the reason. Shipping costs are the customer’s responsibility.'}
            </p>
            <div className="pt-10 space-y-4 border-t border-stone-200">
               <h3 className="text-[13px] uppercase tracking-[0.3em] font-bold text-stone-950">Reemborsaments / Reembolsos / Refunds</h3>
               <p className="text-lg">
                 {lang === 'CAT'
                   ? 'Un cop rebuda i inspeccionada la devolució, t’informarem si ha estat aprovat. El reemborsament s’efectuarà en un termini màxim de 10 dies hàbils.'
                   : lang === 'ES'
                   ? 'Una vez recibida e inspeccionada la devolución, te notificaremos si ha sido aprobado. El reembolso se realizará en un plazo de 10 días hábiles.'
                   : 'Once we receive and inspect your return, we will notify you of the approval. The refund will be issued within 10 business days.'}
               </p>
            </div>
          </div>
        </article>
      ) : (
        <article className="space-y-10">
          <header className="space-y-4 border-b border-stone-200 pb-10">
            <h1 className="text-4xl lg:text-6xl font-serif text-stone-950">{t.contact.policies.privacy}</h1>
            <p className="text-[12px] uppercase tracking-widest text-stone-800 font-bold">Última actualització: 14 d’abril de 2025</p>
          </header>
          <div className="prose prose-stone max-w-none text-stone-900 space-y-10 text-xl leading-relaxed">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-stone-950">1. Responsable del tractament</h3>
              <p>Cro&Txet — Web: croandtxet.cat — Email: hola@croandtxet.cat</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-stone-950">2. Finalitat</h3>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>Gestió de comandes i facturació.</li>
                <li>Atenció al client i consultes.</li>
                <li>Comunicacions comercials (amb consentiment).</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-stone-950">3. Drets</h3>
              <p className="text-lg">
                L’usuari pot exercir els seus drets d’accés, rectificació, supressió i portabilitat enviant una sol·licitud a 
                <span className="font-bold border-b border-stone-950"> hola@croandtxet.cat</span>. Cro&Txet aplica totes les mesures tècniques necessàries per garantir la seguretat de les teves dades.
              </p>
            </div>
          </div>
        </article>
      )}
    </div>
  );
};

export default LegalPage;
