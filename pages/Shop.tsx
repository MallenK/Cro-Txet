
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Translation, Language } from '../types';

interface ShopProps {
  t: Translation;
  lang: Language;
}

const Shop: React.FC<ShopProps> = ({ t, lang }) => {
  return (
    <div className="py-20 px-6 lg:py-32 lg:px-20 max-w-[1600px] mx-auto animate-fade-in">
      <header className="mb-20 lg:mb-32 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 border-b border-stone-100 pb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
             <span className="h-[1px] w-6 bg-stone-900" />
             <span className="text-[11px] uppercase tracking-[0.4em] text-stone-900 font-bold">{t.shop.label}</span>
          </div>
          <h2 className="text-5xl lg:text-8xl font-serif text-stone-950 leading-tight tracking-tight">{t.shop.title}</h2>
        </div>
        <p className="text-stone-900 text-xl max-w-sm leading-relaxed">
          {t.shop.desc}
        </p>
      </header>

      {/* Grid optimized for premium scanability */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-20 lg:gap-y-32">
        {PRODUCTS.map((product) => (
          <Link 
            key={product.id} 
            to={`/product/${product.id}`}
            className="group flex flex-col h-full"
          >
            <div className="aspect-[3/4] mb-8 bg-stone-50 overflow-hidden rounded-sm transition-transform duration-700">
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            
            <div className="flex flex-col flex-1 px-1 space-y-3">
              <div className="flex justify-between items-baseline">
                <h3 className="text-3xl lg:text-4xl font-serif text-stone-950 group-hover:text-stone-700 transition-colors">
                  {product.name}
                </h3>
                <span className="text-xl font-bold text-stone-950">{product.price}€</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.3em] text-stone-600 font-bold">
                  {product.meaning[lang]}
                </span>
              </div>

              <div className="pt-4 flex items-center gap-3 mt-auto">
                 <span className="text-[11px] uppercase tracking-[0.4em] text-stone-950 font-bold group-hover:text-stone-600 transition-colors">
                    {t.common.explore}
                 </span>
                 <ArrowRight className="w-4 h-4 text-stone-950 transition-all duration-500 group-hover:translate-x-2 group-hover:text-stone-600" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
