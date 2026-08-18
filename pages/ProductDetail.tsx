
import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import {
  ChevronLeft,
  ChevronRight,
  Send,
  CheckCircle2,
  Loader2,
  Award,
  ChevronDown,
  Sparkles,
  Package
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const ProductDetail: React.FC = () => {
  const { t, lang, urlLang } = useLanguage();
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);

  const [activeImg, setActiveImg] = useState(0);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);
  
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!product) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'view_item',
      ecommerce: {
        items: [{ item_id: product.id, item_name: product.name, price: product.price, item_category: 'bags' }],
      },
    });
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center space-y-6">
        <h2 className="text-3xl font-serif text-stone-900">{t.common.notFound}</h2>
        <Link to={`/${urlLang}/shop`} className="text-stone-900 border-b-2 border-stone-900 pb-2 uppercase tracking-widest text-xs font-bold hover:text-stone-500 hover:border-stone-500 transition-all">
          {t.common.backToShop}
        </Link>
      </div>
    );
  }

  const imagesToShow = selectedColor
    ? product.images.filter(img => img.color === selectedColor)
    : product.images;

  const nextImg = () =>
    setActiveImg(prev => (prev + 1) % imagesToShow.length);

  const prevImg = () =>
    setActiveImg(prev => (prev - 1 + imagesToShow.length) % imagesToShow.length);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) nextImg();
    if (isRightSwipe) prevImg();
  };


  const [orderData, setOrderData] = React.useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const handleOrderChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value
    });
  };

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      const selectedAddonLabels =
        product.addons
          ?.filter(a => selectedAddons.includes(a.id))
          .map(a => a.label[lang])
          .join(', ') || '';

      const enrichedMessage = `
      Producte: ${product.name}
      Preu base: ${product.price}€
      ${selectedAddonLabels ? `Extras: ${selectedAddonLabels}` : ''}
      Preu estimat: ${finalPrice}€

      Missatge del client:
      ${orderData.message}
      `;

      await emailjs.send(
        'service_wsj9ttf',
        'template_dradehi',
        {
          ...orderData,
          message: enrichedMessage
        },
        'iGpB097zxE-0bBxRC'
      );

      setFormStatus('success');
      setOrderData({
        from_name: '',
        from_email: '',
        message: ''
      });

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'generate_lead', form_type: 'product_inquiry', item_id: product.id });

      setTimeout(() => setFormStatus('idle'), 5000);

    } catch (error) {
      console.error(error);
      setFormStatus('idle');
    }
  };

  const finalPrice = product.price + (product.addons?.filter(a => selectedAddons.includes(a.id)).reduce((acc, a) => acc + a.price, 0) || 0);


  return (
    <div className="min-h-screen bg-white animate-fade-in pb-32">
      <SEO
        title={product.name}
        description={product.description[lang]}
        path={`/product/${product.id}`}
        image={product.images[0]?.src}
        type="product"
        product={product}
        breadcrumb={[
          { name: t.nav.shop, path: '/shop' },
          { name: product.name, path: `/product/${product.id}` },
        ]}
      />
      <div className="lg:hidden sticky top-0 z-30 bg-white/90 backdrop-blur-md px-6 py-4 flex items-center border-b border-stone-100">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-stone-950 font-bold text-[10px] uppercase tracking-[0.2em] font-sans">
          <ChevronLeft className="w-4 h-4" /> {t.common.back}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Gallery Section with Consistent Proportions */}
        <section className="lg:w-[60%] xl:w-[65%] flex flex-col relative overflow-hidden bg-stone-50">
          
          {/* Mobile View Slider */}
          <div 
            className="lg:hidden relative aspect-[4/5] w-full touch-pan-y overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="flex h-full transition-transform duration-500 ease-out" 
              style={{ transform: `translateX(-${activeImg * 100}%)` }}
            >
              {imagesToShow.map((img, idx) => (
                <div key={idx} className="w-full h-full flex-shrink-0 overflow-hidden">
                  <img 
                    src={img.src}
                    alt={`${product.name} perspective ${idx + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 active:scale-105"
                  />
                </div>
              ))}
            </div>

            <button onClick={prevImg} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 active:scale-90 z-10">
              <ChevronLeft className="w-5 h-5 text-stone-950" />
            </button>
            <button onClick={nextImg} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 active:scale-90 z-10">
              <ChevronRight className="w-5 h-5 text-stone-950" />
            </button>

            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full border border-stone-200 flex items-center gap-2 shadow-sm scale-90 z-10">
              <Award className="w-3 h-3 text-stone-950" />
              <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-stone-950 font-sans">Peça única</span>
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden lg:flex flex-col gap-16 p-12 xl:p-24">
            {imagesToShow.map((img, idx) => (
              <div 
                key={idx} 
                className="relative overflow-hidden w-full aspect-[4/5] bg-stone-100 rounded-sm group shadow-md"
              >
                <img 
                  src={img.src}
                  alt={`${product.name} detail ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
                {idx === 0 && (
                  <div className="absolute top-10 right-10 bg-white/95 backdrop-blur-md px-6 py-3 rounded-full border border-stone-200 flex items-center gap-3 shadow-lg">
                    <Award className="w-5 h-5 text-stone-950" />
                    <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-stone-950 font-sans">Peça única</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Dots */}
          <div className="lg:hidden flex justify-center gap-3 py-8 bg-white">
            {imagesToShow.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActiveImg(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeImg === i ? 'bg-stone-950 scale-125' : 'bg-stone-300'
                }`} 
              />
            ))}
          </div>

        </section>

        {/* Info Section with Better Spacing */}
        <section className="lg:w-[40%] xl:w-[35%] lg:sticky lg:top-0 lg:h-screen flex flex-col p-10 lg:p-16 xl:p-24 overflow-y-auto no-scrollbar bg-white">
          <div className="space-y-16">
          <header className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-serif text-stone-950 leading-none tracking-tighter">
                {product.name}
              </h1>
              <p className="italic-serif text-stone-500 text-2xl lg:text-3xl tracking-tight mt-4">
                « {product.meaning[lang]} »
              </p>
            </div>

            <p className="text-4xl font-serif text-stone-950 font-light">
              {finalPrice}€
            </p>

            {/* 🔥 SELECTOR DE COLOR */}
            {product.colors && (
              <div className="flex gap-3 pt-4">
                {product.colors.map(color => (
                  <button
                    key={color.name}
                    onClick={() => {
                      if (selectedColor === color.name) {
                        setSelectedColor(null); // 👈 quitar filtro
                      } else {
                        setSelectedColor(color.name); // 👈 aplicar filtro
                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({
                          event: 'select_content',
                          content_type: 'product_color',
                          item_id: product.id,
                          color: color.name,
                        });
                      }
                      setActiveImg(0);
                    }}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === color.name
                        ? 'border-stone-950 scale-110'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            )}
          </header>

            {product.addons?.map((addon) => {
              const isSelected = selectedAddons.includes(addon.id);

              return (
                <button
                  key={addon.id}
                  type="button"
                  onClick={() =>
                    setSelectedAddons(prev =>
                      isSelected
                        ? prev.filter(id => id !== addon.id)
                        : [...prev, addon.id]
                    )
                  }
                  className={`mt-6 w-full flex justify-between items-center px-6 py-4 border transition-all duration-300
                    ${isSelected
                      ? 'border-stone-950 bg-stone-50'
                      : 'border-stone-200 hover:border-stone-950'}
                  `}
                >
                  <span className="text-sm uppercase tracking-widest font-bold text-stone-900">
                    {addon.label[lang]}
                  </span>

                  <span className="text-sm font-serif">
                    +{addon.price}€
                  </span>
                </button>
              );
            })}

            {product.addons && (
              <p className="text text-stone-500 mt-4 leading-relaxed">
                {lang === 'CAT' && 'Si desitges afegir la cadeneta, indica-ho al missatge del formulari.'}
                {lang === 'ES' && 'Si deseas añadir la cadena, indícalo en el mensaje del formulario.'}
                {lang === 'EN' && 'If you would like to add the chain, please mention it in your message.'}
              </p>
            )}

            <div className="space-y-8">
              <p className="text-stone-900 text-2xl lg:text-3xl font-serif">
                {product.description[lang]}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-3 px-5 py-2.5 bg-stone-50 border border-stone-200 rounded-full">
                  <Sparkles className="w-4 h-4 text-stone-950" />
                  <span className="text-[11px] uppercase tracking-widest text-stone-950 font-bold">Artesania Genuïna</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-2.5 bg-stone-50 border border-stone-200 rounded-full">
                  <Package className="w-4 h-4 text-stone-950" />
                  <span className="text-[11px] uppercase tracking-widest text-stone-950 font-bold">Slow Fashion</span>
                </div>
              </div>
            </div>

            <div className="border-t border-stone-200 pt-10">
              <button 
                onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                className="w-full flex justify-between items-center py-4"
              >
                <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-stone-950 font-sans">{t.shop.detailsLabel}</span>
                <ChevronDown className={`w-4 h-4 text-stone-600 transition-transform duration-500 ${isDetailsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isDetailsOpen ? 'max-h-[900px] opacity-100 pt-8 pb-10' : 'max-h-0 opacity-0'}`}>
                <div className="space-y-12">
                  {product.details?.material && (
                    <div>
                      <h4 className="text-[11px] uppercase tracking-widest text-stone-950 font-bold mb-4 font-sans opacity-60">{t.shop.materialLabel}</h4>
                      <p className="text-stone-900 text-2xl lg:text-3xl font-serif">{product.details.material[lang]}</p>
                    </div>
                  )}
                  {product.details?.stitch && (
                    <div>
                      <h4 className="text-[11px] uppercase tracking-widest text-stone-950 font-bold mb-4 font-sans opacity-60">{t.shop.stitchLabel}</h4>
                      <p className="text-stone-900 text-2xl lg:text-3xl font-serif">{product.details.stitch[lang]}</p>
                    </div>
                  )}
                  {product.dimensions && (
                    <div>
                      <h4 className="text-[11px] uppercase tracking-widest text-stone-950 font-bold mb-4 font-sans opacity-60">{t.shop.dimensionsLabel}</h4>
                      <p className="text-stone-900 text-2xl lg:text-3xl font-serif">{product.dimensions[lang]}</p>
                    </div>
                  )}
                  {product.careInstructions && (
                    <div>
                      <h4 className="text-[11px] uppercase tracking-widest text-stone-950 font-bold mb-4 font-sans opacity-60">{t.shop.careLabel}</h4>
                      <p className="text-stone-900 text-2xl lg:text-3xl font-serif">{product.careInstructions[lang]}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-stone-200">
              {formStatus === 'success' ? (
                <div className="bg-stone-950 text-white p-14 text-center space-y-10 animate-fade-in shadow-2xl">
                  <CheckCircle2 className="w-16 h-16 text-stone-300 mx-auto" />
                  <p className="font-serif text-3xl tracking-tight">{t.contact.form.sent}</p>
                </div>
              ) : (
                <div className="space-y-10">
                  <h3 className="text-3xl lg:text-4xl font-serif text-stone-950">Personalitza la teva peça única</h3>
                    <form onSubmit={handleOrderSubmit} className="space-y-8">

                      <input
                        type="text"
                        name="from_name"
                        value={orderData.from_name}
                        onChange={handleOrderChange}
                        required
                        placeholder={t.contact.form.namePlaceholder}
                        className="w-full bg-stone-50 border border-stone-200 py-5 px-7 focus:outline-none focus:border-stone-950 transition-all text-stone-950 text-lg shadow-sm"
                      />

                      <input
                        type="email"
                        name="from_email"
                        value={orderData.from_email}
                        onChange={handleOrderChange}
                        required
                        placeholder={t.contact.form.emailPlaceholder}
                        className="w-full bg-stone-50 border border-stone-200 py-5 px-7 focus:outline-none focus:border-stone-950 transition-all text-stone-950 text-lg shadow-sm"
                      />

                      <textarea
                        name="message"
                        value={orderData.message}
                        onChange={handleOrderChange}
                        required
                        rows={4}
                        placeholder={t.contact.form.messagePlaceholder}
                        className="w-full bg-stone-50 border border-stone-200 py-5 px-7 focus:outline-none focus:border-stone-950 transition-all text-stone-950 text-lg resize-none shadow-sm"
                      />

                      <button
                        type="submit"
                        disabled={formStatus === 'loading'}
                        className="w-full py-8 bg-stone-950 text-white text-[11px] uppercase tracking-[0.6em] font-bold hover:bg-black transition-all shadow-2xl flex items-center justify-center gap-4 group"
                      >
                        {formStatus === 'loading'
                          ? <Loader2 className="w-5 h-5 animate-spin" />
                          : <>{t.contact.form.send} <Send className="w-4 h-4 group-hover:translate-x-2 transition-transform" /></>}
                      </button>

                    </form>

                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
