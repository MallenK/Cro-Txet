import React from 'react';
import emailjs from '@emailjs/browser';
import { Translation } from '../types';
import { Send, MapPin, Mail, Sparkles, Heart, Loader2, CheckCircle2 } from 'lucide-react';

const Contact: React.FC<{ t: Translation }> = ({ t }) => {
  const [formStatus, setFormStatus] = React.useState<'idle' | 'loading' | 'success'>('idle');

  const [formData, setFormData] = React.useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      await emailjs.send(
        'service_z2mi68a',
        'template_dradehi',
        formData,
        'iGpB097zxE-0bBxRC'
      );

      setFormStatus('success');
      setFormData({
        from_name: '',
        from_email: '',
        message: ''
      });

      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error(error);
      setFormStatus('idle');
    }
  };


  return (
    <div className="animate-fade-in bg-white min-h-screen">
      {/* 1. Header - Estandarizado con Shop.tsx */}
      <header className="py-20 px-6 lg:py-32 lg:px-20 max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 border-b border-stone-100 pb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
             <span className="h-[1px] w-6 bg-stone-900" />
             <span className="text-[11px] uppercase tracking-[0.4em] text-stone-900 font-bold">{t.contact.label}</span>
          </div>
          <h2 className="text-5xl lg:text-8xl font-serif text-stone-950 leading-tight tracking-tight">
            {t.contact.title}
          </h2>
        </div>
        <p className="text-stone-900 text-xl lg:text-2xl max-w-sm leading-relaxed italic-serif">
          {t.contact.subtitle}
        </p>
      </header>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-20 py-20 lg:py-32 grid lg:grid-cols-12 gap-20 lg:gap-32">
        
        {/* Lado Izquierdo: Formulario Estandarizado con ProductDetail.tsx */}
        <section className="lg:col-span-7 space-y-16">
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-[0.4em] text-stone-400 font-bold">
              {t.contact.form.productInquiry}
            </span>
            <div className="h-[1px] w-full bg-stone-100" />
          </div>

          {formStatus === 'success' ? (
            <div className="bg-stone-950 text-white p-12 lg:p-20 text-center space-y-8 animate-fade-in shadow-2xl rounded-sm">
              <CheckCircle2 className="w-16 h-16 text-stone-300 mx-auto" strokeWidth={1} />
              <p className="font-serif text-3xl tracking-tight">{t.contact.form.sent}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-stone-900 font-bold ml-1">
                    {t.contact.form.name}
                  </label>
                  <input 
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.form.namePlaceholder}
                    className="w-full bg-stone-50 border border-stone-200 py-5 px-7 focus:outline-none focus:border-stone-950 transition-all text-stone-950 text-lg shadow-sm font-sans"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-stone-900 font-bold ml-1">
                    {t.contact.form.email}
                  </label>
                  <input 
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.form.emailPlaceholder}
                    className="w-full bg-stone-50 border border-stone-200 py-5 px-7 focus:outline-none focus:border-stone-950 transition-all text-stone-950 text-lg shadow-sm font-sans"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-stone-900 font-bold ml-1">
                  {t.contact.form.message}
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder={t.contact.form.messagePlaceholder}
                  className="w-full bg-stone-50 border border-stone-200 py-5 px-7 focus:outline-none focus:border-stone-950 transition-all text-stone-950 text-lg resize-none shadow-sm font-sans"
                />
              </div>
              
              <button 
                type="submit"
                disabled={formStatus === 'loading'}
                className="group relative w-full py-8 bg-stone-950 text-white hover:bg-black transition-all uppercase text-[11px] tracking-[0.6em] font-bold shadow-2xl flex items-center justify-center gap-4 overflow-hidden"
              >
                {formStatus === 'loading' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <span className="relative z-10">{t.contact.form.send}</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-2 relative z-10" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Información de Contacto Directo - Estilo Home Icons */}
          <div className="grid md:grid-cols-2 gap-8 pt-12">
            <div className="p-10 bg-stone-50 border border-stone-100 flex items-center gap-6 group hover:bg-white hover:shadow-xl transition-all duration-500">
              <div className="w-12 h-12 rounded-full bg-stone-950 flex items-center justify-center text-white shrink-0 shadow-lg">
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div className="space-y-1">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">{t.contact.info.emailTitle}</h4>
                <p className="text-xl font-serif text-stone-950">hola@croandtxet.com</p>
              </div>
            </div>
            <div className="p-10 bg-stone-50 border border-stone-100 flex items-center gap-6 group hover:bg-white hover:shadow-xl transition-all duration-500">
              <div className="w-12 h-12 rounded-full bg-stone-950 flex items-center justify-center text-white shrink-0 shadow-lg">
                <MapPin className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div className="space-y-1">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">{t.contact.info.atelierTitle}</h4>
                <p className="text-xl font-serif text-stone-950">{t.contact.info.atelierLoc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Lado Derecho: Contenido de Valor (Cuidados y Autenticidad) */}
        <section className="lg:col-span-5 space-y-16">
          <div className="bg-stone-50 border border-stone-100 p-10 lg:p-16 space-y-12 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Sparkles className="w-24 h-24 text-stone-950" />
            </div>

            <div className="space-y-10 relative z-10">
              <div className="flex items-center gap-4">
                <Sparkles className="w-6 h-6 text-stone-950" />
                <h3 className="text-3xl lg:text-4xl font-serif text-stone-950 leading-tight">
                  {t.contact.care.title}
                </h3>
              </div>
              
              <div className="h-[1px] w-full bg-stone-200" />
              
              <div className="space-y-10 text-stone-900 italic-serif text-xl lg:text-2xl leading-relaxed">
                {t.contact.care.content.split('\n').map((line, i) => {
                  const trimmed = line.trim();
                  if (trimmed.startsWith('•') || trimmed.startsWith('●')) {
                    return (
                      <div key={i} className="flex gap-4 items-start pl-2">
                        <span className="text-stone-400 mt-2 text-[8px] shrink-0">●</span>
                        <span>{trimmed.substring(1).trim()}</span>
                      </div>
                    );
                  }
                  return trimmed ? <p key={i} className="font-light">{trimmed}</p> : null;
                })}
              </div>
            </div>

            {/* Sello de Autenticidad Artesanal - Estilo Editorial */}
            <div className="pt-12 border-t border-stone-200 mt-12">
               <div className="flex items-start gap-6">
                 <div className="w-14 h-14 bg-stone-950 flex items-center justify-center shrink-0 rounded-full shadow-lg">
                   <Heart className="w-6 h-6 text-white" strokeWidth={1} />
                 </div>
                 <div className="space-y-4">
                   <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold text-stone-950">L'Essència Cro&Txet</h4>
                   <p className="text-stone-700 text-lg lg:text-xl italic-serif leading-relaxed">
                     {t.common.artisanNote}
                   </p>
                 </div>
               </div>
            </div>
          </div>

          {/* Banner de Sostenibilidad / Tiempo de producción */}
          <div className="p-10 border border-stone-200 text-center space-y-4 group hover:border-stone-950 transition-colors duration-700">
             <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400">{t.home.values.demand}</h4>
             <p className="text-xl lg:text-2xl font-serif text-stone-950">
               {t.common.productionTime}
             </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
