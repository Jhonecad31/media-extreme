'use client';

import { useState } from 'react';
import ProductGrid from './Product-grid';
import { getIKUrl } from '@/src/lib/imagekit';

interface HomeContentProps {
  lang: string;
  dict: any;
}

export default function HomeContent({ lang, dict }: HomeContentProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Filtrado rápido para que el vendedor encuentre el producto al instante en la calle
  const filteredProducts = dict.products.items.filter((prod: any) => {
    if (['extreme_atv_wild_pass', 'extreme_wild_pass_horseback_ride'].includes(prod.id)) return false;
    return prod.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#1c2a4b] font-sans selection:bg-[#8ebf25]/40 pb-12">

      {/* PANEL CENTRAL DE CONTROL (Buscador y Contexto) */}
      <main className="max-w-5xl mx-auto px-4 mt-6">
        {/* SECCIÓN NUESTRAS EXPERIENCIAS (Al principio de la vista) */}
        {dict?.experiences && (
          <div className="mb-12 border-b border-slate-200/60 pb-12">
            <div className="text-center mb-10">
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {dict.experiences.items.map((exp: any, idx: number) => (
                <div key={idx} className="group bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  {/* Decorative background glow on hover */}
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#8ebf25]/5 rounded-full blur-xl group-hover:bg-[#8ebf25]/15 transition-all duration-500"></div>

                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-[#8ebf25]/10 flex items-center justify-center mb-5 text-[#8ebf25] group-hover:scale-110 group-hover:bg-[#8ebf25] group-hover:text-white transition-all duration-300 shadow-sm">
                    <i className={`bx ${exp.icon} text-2xl`}></i>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-base text-[#1c2a4b] mb-2 leading-snug group-hover:text-[#2c6748] transition-colors">
                    {exp.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1">
                    {exp.desc}
                  </p>

                  {/* Badge */}
                  {exp.badge && (
                    <span className="text-[10px] font-bold text-[#ea3323] bg-[#ea3323]/8 border border-[#ea3323]/10 px-2.5 py-1 rounded-full mt-auto inline-block shadow-sm">
                      {exp.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* REJILLA DE TARJETAS DE DESCARGA DIRECTA */}
        <ProductGrid products={filteredProducts} dict={dict} />

        {/* Estado vacío por si no encuentran el tour */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm bg-white rounded-2xl border border-dashed border-slate-200">
            {dict?.home?.noResults || "No se encontraron experiencias con ese nombre."}
          </div>
        )}

        {/* SECCIÓN PREGUNTAS FRECUENTES (FAQ Accordion) */}
        {dict?.faq && (
          <div className="mt-16 border-t border-slate-200/60 pt-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-[#1c2a4b] tracking-tight mb-2">
                {dict.faq.title || "Preguntas Frecuentes"}
              </h2>
              <div className="w-16 h-1 bg-[#8ebf25] mx-auto rounded-full"></div>
            </div>

            <div className="space-y-4 w-full">
              {dict.faq.items.map((item: any, idx: number) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div 
                    key={idx} 
                    className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm ${
                      isOpen ? 'border-[#8ebf25] ring-1 ring-[#8ebf25]/30' : 'border-slate-100 hover:border-slate-200'
                    }`}
                  >
                    {/* Header/Question Trigger */}
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-slate-800 focus:outline-none hover:text-[#2c6748] transition-colors group"
                    >
                      <span className="text-sm md:text-base leading-snug flex-1">{item.q}</span>
                      <span className={`w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 transform transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#8ebf25]/10 text-[#8ebf25]' : 'group-hover:bg-slate-100 group-hover:text-slate-600'
                      }`}>
                        <i className="bx bx-chevron-down text-xl"></i>
                      </span>
                    </button>

                    {/* Answer Area (Accordion body) */}
                    <div 
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-[600px] opacity-100 border-t border-slate-50' : 'max-h-0 opacity-0 pointer-events-none'
                      }`}
                    >
                      <div className="px-6 py-5 text-sm text-slate-500 leading-relaxed bg-slate-50/50 flex flex-col gap-3.5">
                        <div 
                          className="[&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ul]:mt-2 [&_strong]:text-slate-800 [&_strong]:font-semibold [&_em]:italic"
                          dangerouslySetInnerHTML={{ __html: item.a }}
                        />

                        {(() => {
                          const imgSrc = item.img ? item.img.trim() : '';
                          const isImg = imgSrc.startsWith('/') || imgSrc.endsWith('.webp') || imgSrc.endsWith('.png') || imgSrc.endsWith('.jpg');
                          return isImg ? (
                            <div className="mt-4 w-full flex justify-center">
                              <img 
                                src={getIKUrl(imgSrc, { width: 600 })} 
                                alt={item.q} 
                                className="max-w-full h-auto object-contain rounded-lg" 
                                style={{ maxHeight: '300px' }} 
                              />
                            </div>
                          ) : null;
                        })()}
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-3 mt-2 pt-4 border-t border-slate-100">
                            {item.tags.map((tag: any, tIdx: number) => (
                              <span 
                                key={tIdx} 
                                className="inline-flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white border border-slate-100 shadow-sm hover:border-[#8ebf25]/30 hover:shadow-md transition-all duration-300 group"
                              >
                                <span className="w-8 h-8 rounded-lg bg-[#8ebf25]/10 flex items-center justify-center text-[#8ebf25] group-hover:bg-[#8ebf25] group-hover:text-white transition-all duration-300">
                                  <i className={`bx ${tag.icon} text-lg`}></i>
                                </span>
                                <span className="text-xs text-slate-700 font-bold tracking-tight">
                                  {tag.label}
                                </span>
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}