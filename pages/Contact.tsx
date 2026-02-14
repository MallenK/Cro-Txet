
import React from 'react';
import { Translation } from '../types';
import { Send, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC<{ t: Translation }> = ({ t }) => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="py-24 px-8 lg:px-20 max-w-6xl mx-auto animate-fade-in">
      <header className="mb-24 text-center lg:text-left">
        <span className="text-[11px] uppercase tracking-[0.5em] text-stone-900 font-bold mb-4 block">{t.contact.label}</span>
        <h2 className="text-4xl lg:text-7xl font-serif text-stone-950 mb-8">{t.contact.title}</h2>
        <p className="text-stone-900 font-light text-2xl max-w-3xl leading-relaxed italic-serif">
          {t.contact.subtitle}
        </p>
      </header>

      <div className="grid lg:grid-cols-12 gap-20">
        <section className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-widest text-stone-900 font-bold">{t.contact.form.name}</label>
              <input 
                type="text" 
                required
                className="w-full bg-transparent border-b border-stone-400 py-5 focus:outline-none transition-all text-stone-950 font-medium placeholder:text-stone-400"
                placeholder={t.contact.form.namePlaceholder}
              />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-widest text-stone-900 font-bold">{t.contact.form.email}</label>
              <input 
                type="email" 
                required
                className="w-full bg-transparent border-b border-stone-400 py-5 focus:outline-none transition-all text-stone-950 font-medium placeholder:text-stone-400"
                placeholder={t.contact.form.emailPlaceholder}
              />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-widest text-stone-900 font-bold">{t.contact.form.message}</label>
              <textarea 
                required
                rows={4}
                className="w-full bg-transparent border-b border-stone-400 py-5 focus:outline-none transition-all text-stone-950 font-medium resize-none placeholder:text-stone-400"
                placeholder={t.contact.form.messagePlaceholder}
              />
            </div>
            
            <button 
              type="submit"
              className="group inline-flex items-center px-16 py-6 bg-stone-950 text-white hover:bg-stone-800 transition-all uppercase text-[11px] tracking-[0.4em] font-bold disabled:opacity-50 shadow-xl"
              disabled={submitted}
            >
              {submitted ? t.contact.form.sent : t.contact.form.send}
              <Send className="ml-4 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </section>

        <section className="lg:col-span-5 space-y-16 lg:pl-10">
          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-stone-100 flex items-center justify-center shrink-0 rounded-full">
                <Mail className="w-6 h-6 text-stone-950" />
              </div>
              <div>
                <h4 className="text-stone-950 font-serif text-2xl mb-1">{t.contact.info.emailTitle}</h4>
                <p className="text-stone-900 font-medium tracking-wide">hola@croandtxet.com</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-stone-100 flex items-center justify-center shrink-0 rounded-full">
                <MapPin className="w-6 h-6 text-stone-950" />
              </div>
              <div>
                <h4 className="text-stone-950 font-serif text-2xl mb-1">{t.contact.info.atelierTitle}</h4>
                <p className="text-stone-900 font-medium">{t.contact.info.atelierLoc}</p>
              </div>
            </div>
          </div>

          <div className="p-10 bg-stone-50 border border-stone-200 shadow-sm space-y-4 rounded-sm">
            <h4 className="text-stone-950 font-serif text-3xl">{t.contact.care.title}</h4>
            <p className="text-stone-900 font-light leading-relaxed text-xl">
              {t.contact.care.content}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
