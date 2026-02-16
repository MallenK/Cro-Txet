
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Translation, Language } from '../types';
import { 
  ChevronLeft, 
  Plus, 
  Send, 
  CheckCircle2, 
  Loader2, 
  Award, 
  ChevronDown,
  Sparkles,
  Package
} from 'lucide-react';

interface ProductDetailProps {
  t: Translation;
  lang: Language;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ t, lang }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);
  
  const [activeImg, setActiveImg] = useState(0);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center space-y-6">
        <h2 className="text-3xl font-serif text-stone-900">{t.common.notFound}</h2>
        <Link to="/shop" className="text-stone-900 border-b-2 border-stone-900 pb-2 uppercase tracking-widest text-xs font-bold hover:text-stone-500 hover:border-stone-500 transition-all">
          {t.common.backToShop}
        </Link>
      </div>
    );
  }

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 8000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white animate-fade-in pb-32">
      {/* Mobile Sticky Back Button */}
      <div className="lg:hidden sticky top-0 z-30 bg-white/90 backdrop-blur-md px-6 py-4 flex items-center border-b border-stone-100">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-stone-950 font-bold text-[10px] uppercase tracking-[0.2em] font-sans">
          <ChevronLeft className="w-4 h-4" /> {t.common.back}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row">
        
        {/* Gallery - Sticky Scroll Layout */}
        <section className="lg:w-[60%] xl:w-[65%] flex flex-col">
          <div className="flex flex-col lg:gap-px bg-stone-50">
            {product.images.map((img, idx) => (
              <div 
                key={idx} 
                className={`relative overflow-hidden w-full ${idx === 0 ? 'h-[75vh] lg:h-screen' : 'hidden lg:block h-screen'}`}
              >
                <img 
                  src={img} 
                  alt={`${product.name} view ${idx + 1}`} 
                  className="w-full h-full object-cover"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
                {idx === 0 && (
                  <div className="absolute top-8 right-8 bg-white/90 backdrop-blur px-4 py-2 rounded-full border border-stone-200 flex items-center gap-2 shadow-sm">
                    <Award className="w-3.5 h-3.5 text-stone-950" />
                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-stone-950 font-sans">Peça única</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="lg:hidden flex justify-center gap-2 py-4">
            {product.images.map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full ${activeImg === i ? 'bg-stone-950' : 'bg-stone-300'}`} />
            ))}
          </div>
        </section>

        {/* Info Section */}
        <section className="lg:w-[40%] xl:w-[35%] lg:sticky lg:top-0 lg:h-screen flex flex-col p-6 lg:p-12 xl:p-20 overflow-y-auto no-scrollbar">
          <div className="space-y-12">
            
            <header className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-6 bg-stone-900" />
                <span className="text-[12px] uppercase tracking-[0.4em] text-stone-950 font-bold font-sans">
                  {product.meaning[lang]}
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif text-stone-950 leading-none">
                {product.name}
              </h1>
              <p className="text-3xl font-serif text-stone-950 pt-2 font-serif">{product.price}€</p>
            </header>

            <div className="space-y-6">
              <p className="text-stone-900 text-2xl lg:text-3xl font-serif leading-relaxed">
                {product.description[lang]}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2 font-sans">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-full">
                  <Sparkles className="w-3 h-3 text-stone-950" />
                  <span className="text-[10px] uppercase tracking-widest text-stone-950 font-bold">Disseny Artesanal</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-full">
                  <Package className="w-3 h-3 text-stone-950" />
                  <span className="text-[10px] uppercase tracking-widest text-stone-950 font-bold">Consum Conscient</span>
                </div>
              </div>
            </div>

            <div className="border-t border-stone-200 pt-8 font-serif">
              <button 
                onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                className="w-full flex justify-between items-center py-4 group"
              >
                <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-stone-950 font-sans">{t.shop.detailsLabel}</span>
                <ChevronDown className={`w-4 h-4 text-stone-600 transition-transform duration-500 ${isDetailsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isDetailsOpen ? 'max-h-[500px] opacity-100 pt-4 pb-8' : 'max-h-0 opacity-0'}`}>
                <div className="space-y-6 text-sm">
                  {product.details?.material && (
                    <div>
                      <h4 className="text-[11px] uppercase tracking-widest text-stone-950 font-bold mb-2 font-sans">{t.shop.materialLabel}</h4>
                      <p className="text-stone-900 text-xl font-serif">{product.details.material[lang]}</p>
                    </div>
                  )}
                  {product.details?.stitch && (
                    <div>
                      <h4 className="text-[11px] uppercase tracking-widest text-stone-950 font-bold mb-2 font-sans">{t.shop.stitchLabel}</h4>
                      <p className="text-stone-900 text-xl font-serif">{product.details.stitch[lang]}</p>
                    </div>
                  )}
                  {product.details?.options && (
                    <div>
                      <h4 className="text-[11px] uppercase tracking-widest text-stone-950 font-bold mb-2 font-sans">{t.shop.optionsLabel}</h4>
                      <ul className="list-disc list-inside text-stone-900 text-xl space-y-2 font-serif">
                        {product.details.options[lang].map((opt, i) => (
                          <li key={i}>{opt}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-10 pt-8 border-t border-stone-200">
              <div className="space-y-3">
                <h3 className="text-2xl font-serif text-stone-950">Personalitza la teva peça</h3>
                <p className="text-stone-800 text-[11px] uppercase tracking-widest font-bold font-sans">Consulta per a fabricació personalitzada</p>
              </div>

              {formStatus === 'success' ? (
                <div className="bg-stone-950 text-white p-12 text-center space-y-8 animate-fade-in shadow-xl">
                  <div className="flex justify-center">
                    <CheckCircle2 className="w-12 h-12 text-stone-300" />
                  </div>
                  <p className="font-serif text-2xl tracking-tight">{t.contact.form.sent}</p>
                </div>
              ) : (
                <form onSubmit={handleOrderSubmit} className="space-y-10 font-sans">
                  <input 
                    type="text" 
                    required
                    placeholder={t.contact.form.namePlaceholder}
                    className="w-full bg-transparent border-b border-stone-400 py-3 focus:outline-none transition-all text-stone-950 text-lg"
                  />
                  <input 
                    type="email" 
                    required
                    placeholder={t.contact.form.emailPlaceholder}
                    className="w-full bg-transparent border-b border-stone-400 py-3 focus:outline-none transition-all text-stone-950 text-lg"
                  />
                  <textarea 
                    required
                    rows={2}
                    placeholder={t.contact.form.messagePlaceholder}
                    className="w-full bg-transparent border-b border-stone-400 py-3 focus:outline-none transition-all text-stone-950 text-lg resize-none"
                  />

                  <button 
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full py-6 bg-stone-950 text-white text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-black transition-all flex items-center justify-center gap-4 group shadow-lg"
                  >
                    {formStatus === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : <>{t.contact.form.send} <Send className="w-4 h-4 group-hover:translate-x-1" /></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
