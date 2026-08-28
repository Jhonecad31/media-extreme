'use client';
import { JSX } from 'react';
import ProductGrid from '../global/Product-grid';
import FaqAccordion from '../global/Faq-accordion';

interface AgencyContentProps {
  lang: string;
  dict: any;
}

const ProductIds = [
  'cenote_aqua',
];

export default function AquaWorldContent({ lang, dict }: AgencyContentProps) {
  const details = dict?.agencyDetails || {};
  const agency = details.aquaWorld || {
    title: 'Portal de Afiliado: Aqua World',
    badge: 'Socio Preferencial'
  };

  const filteredProducts = (dict?.products?.items || []).filter(
    (prod: any) => ProductIds.includes(prod.id)
  );

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-8 pb-16 text-[#1c2a4b] font-sans selection:bg-[#e53935]/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Banner Hero */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#00115b] via-[#00115b] to-[#00115b] text-white p-10 md:p-14 shadow-xl mb-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#e53935]/10 blur-3xl rounded-full translate-x-20 -translate-y-20"></div>
          <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-white/5 blur-2xl rounded-full"></div>
          
          <div className="relative z-10 flex-1 text-center md:text-left">
            <span className="bg-[#ba007c] text-white font-bold text-xs md:text-sm uppercase tracking-wider px-4 py-2 rounded-full border border-white/10 mb-5 inline-block shadow-sm">
              {agency.badge}
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 leading-tight">
              {agency.title}
            </h1>
          </div>
          
          <div className="relative z-10 shrink-0 transform hover:scale-105 transition-transform duration-300">
            <div className="w-32 h-32 md:w-44 md:h-44 bg-white rounded-2xl flex items-center justify-center p-6 shadow-2xl border border-white/20">
              <img 
                src="/icon/logos/logo-aquaworld.webp" 
                alt="Aqua World Logo" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
        {/* Sección: Nuestras Experiencias */}
        <section className="mb-10">
          {dict?.experiences && (
            <div className="mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6">
                {dict.experiences.items.map((exp: any, idx: number) => (
                  <div key={idx} className="group bg-white rounded-xl border border-slate-100 shadow-sm p-2 flex flex-row items-center text-left gap-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden sm:flex-col sm:items-center sm:text-center sm:p-8 h-full min-h-[92px] sm:min-h-0">
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#0054a6]/5 rounded-full blur-xl group-hover:bg-[#e53935]/10 transition-all duration-500"></div>

                    <div className="w-11 h-11 sm:w-16 sm:h-16 rounded-lg sm:rounded-2xl bg-[#0054a6]/10 flex items-center justify-center text-[#00115b] group-hover:scale-110 group-hover:bg-[#ba007c] group-hover:text-white transition-all duration-300 shadow-sm shrink-0 sm:mb-6">
                      <i className={`bx ${exp.icon} text-lg sm:text-3xl`}></i>
                    </div>

                    <div className="flex flex-col flex-1 h-full sm:items-center">
                      <h3 className="font-bold text-base sm:text-lg md:text-xl text-[#00115b] mb-0.5 sm:mb-3 leading-snug group-hover:text-[#00115b] transition-colors">
                        {exp.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-500 leading-snug mb-0.5 sm:mb-4">
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Sección de Productos con ProductGrid optimizado (ficha, mica azul y sin espacios vacíos exagerados) */}
        <div className="mt-8 border-t border-slate-200/60 pt-12">
          <h3 className="text-3xl font-black text-[#00115b] mb-8">
            {dict?.products?.title || "Productos"}
          </h3>
          <div className="[&_img]:w-full [&_img]:h-full [&_img]:object-cover [&_.relative]:bg-[#00115b] [&_img]:p-0">
            <ProductGrid 
              products={filteredProducts} 
              dict={dict} 
            />
          </div>
        </div>

        {/* Sección Preguntas Frecuentes (FAQ) */}
        <FaqAccordion faq={dict?.faq} accentColor="#ba007c" brandColor="#00115b" />

      </div>
    </div>
  );
}