
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { LEGAL_PRIVACY, LEGAL_TERMS, LegalDoc } from '../content/legal';

interface LegalPageProps {
  type: 'privacy' | 'returns' | 'terms';
}

const StructuredDoc: React.FC<{ doc: LegalDoc; lastUpdatedLabel: string }> = ({ doc, lastUpdatedLabel }) => (
  <div className="prose prose-stone max-w-none text-stone-900 space-y-12 text-lg leading-relaxed">
    {doc.intro && <p className="font-serif text-2xl lg:text-3xl text-stone-950">{doc.intro}</p>}
    {doc.sections.map((section, i) => (
      <section key={i} className="space-y-4">
        <h2 className="text-2xl font-serif text-stone-950">{section.heading}</h2>
        {section.paragraphs?.map((p, j) => <p key={j}>{p}</p>)}
        {section.list && (
          <ul className="list-disc list-outside pl-6 space-y-3">
            {section.list.map((li, j) => <li key={j}>{li}</li>)}
          </ul>
        )}
      </section>
    ))}
    <p className="text-[12px] uppercase tracking-widest text-stone-500 font-bold pt-8 border-t border-stone-200">
      {lastUpdatedLabel}: {doc.updated}
    </p>
  </div>
);

const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const { t, lang } = useLanguage();

  const meta = {
    privacy: { title: t.contact.policies.privacy, desc: t.legal.privacySeoDescription, path: '/privacy' },
    returns: { title: t.contact.policies.returns, desc: t.legal.returnsSeoDescription, path: '/returns' },
    terms: { title: t.legal.terms, desc: t.legal.termsSeoDescription, path: '/terms' },
  }[type];

  return (
    <div className="py-16 px-6 lg:px-24 max-w-4xl mx-auto animate-fade-in bg-white min-h-screen">
      <SEO title={meta.title} description={meta.desc} path={meta.path} />

      <Breadcrumbs items={[{ name: meta.title }]} className="mb-10" />

      <header className="space-y-4 border-b border-stone-200 pb-10 mb-12">
        <h1 className="text-4xl lg:text-6xl font-serif text-stone-950">{meta.title}</h1>
      </header>

      {type === 'privacy' && <StructuredDoc doc={LEGAL_PRIVACY[lang]} lastUpdatedLabel={t.legal.lastUpdated} />}
      {type === 'terms' && <StructuredDoc doc={LEGAL_TERMS[lang]} lastUpdatedLabel={t.legal.lastUpdated} />}

      {type === 'returns' && (
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
              ? 'Per poder tramitar una devolució, l’article ha d’estar en les mateixes condicions en què el vas rebre, sense usar o amb ús, amb totes les etiquetes i en el seu embalatge original.'
              : lang === 'ES'
              ? 'Para poder tramitar una devolución, el artículo debe encontrarse en las mismas condiciones en que fue recibido, sin usar o usado, con todas las etiquetas y en su embalaje original.'
              : 'To be eligible for a return, the item must be in the same condition as when received, unused or used, with all tags attached and in its original packaging.'}
          </p>
          <p>
            {lang === 'CAT'
              ? 'Les peces fetes a mida o amb personalització específica poden quedar excloses del dret de desistiment, d’acord amb la normativa de consum.'
              : lang === 'ES'
              ? 'Las piezas hechas a medida o con personalización específica pueden quedar excluidas del derecho de desistimiento, conforme a la normativa de consumo.'
              : 'Made-to-measure or specifically customised pieces may be excluded from the right of withdrawal under consumer law.'}
          </p>
          <p className="bg-stone-50 p-6 border-l-4 border-stone-950 font-medium">
            {lang === 'CAT'
              ? 'Per iniciar una devolució, contacta’ns a hola@croandtxet.cat, indicant el motiu de la devolució.'
              : lang === 'ES'
              ? 'Para solicitar una devolución, contáctanos en hola@croandtxet.cat, indicando el motivo de la devolución.'
              : 'To request a return, please contact us at hola@croandtxet.cat, explaining the reason for the return.'}
          </p>
          <div className="pt-10 space-y-4 border-t border-stone-200">
            <h2 className="text-[13px] uppercase tracking-[0.3em] font-bold text-stone-950">Reemborsaments / Reembolsos / Refunds</h2>
            <p className="text-lg">
              {lang === 'CAT'
                ? 'Un cop rebuda i inspeccionada la devolució, t’informarem si el reemborsament ha estat aprovat. S’efectuarà en un termini màxim de 10 dies hàbils.'
                : lang === 'ES'
                ? 'Una vez recibida e inspeccionada la devolución, te notificaremos si el reembolso ha sido aprobado. Se realizará en un plazo de 10 días hábiles.'
                : 'Once we receive and inspect your return, we will notify you whether your refund has been approved. It will be issued within 10 business days.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LegalPage;
