'use client';

import { useState } from 'react';
import Image from 'next/image';

interface HomeContentProps {
  lang: string;
  dict: any;
}

export default function HomeContent({ lang, dict }: HomeContentProps) {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrado rápido para que el vendedor encuentre el producto al instante en la calle
  const filteredProducts = dict.products.items.filter((prod: any) =>
    prod.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#1c2a4b] font-sans selection:bg-[#8ebf25]/40 pb-12">

      {/* PANEL CENTRAL DE CONTROL (Buscador y Contexto) */}
      <main className="max-w-5xl mx-auto px-4 mt-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-6">
          <h1 className="text-2xl font-black text-[#1c2a4b] tracking-tight mb-1">
            {dict?.home?.title || "Media Center Corporativo"}
          </h1>
          <p className="text-sm text-slate-500 mb-4">
            {dict?.home?.subtitle || "Material autorizado para agencias y asesores de venta."}
          </p>
          
          {/* Input de búsqueda rápida */}
          <div className="relative">
            <input
              type="text"
              placeholder={dict?.home?.searchPlaceholder || "Buscar experiencia o producto..."}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8ebf25] focus:bg-white transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* REJILLA DE TARJETAS DE DESCARGA DIRECTA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((prod: any, idx: number) => (
            <div key={idx} className="group bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300">
              
              {/* Imagen del Producto */}
              <div className="relative h-44 w-full bg-slate-50 overflow-hidden">
                <Image
                  src={prod.img ? (prod.img.startsWith('/') ? prod.img : `/${prod.img}`) : '/img/atv_adventure.png'}
                  alt={prod.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={idx < 3}
                />
              </div>

              {/* Info del Producto */}
              <div className="p-5 flex-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#2c6748] bg-[#2c6748]/10 px-2 py-0.5 rounded-md mb-2 inline-block">
                  {dict?.home?.saleKit || "Kit de Venta"}
                </span>
                <h3 className="font-bold text-lg text-[#1c2a4b] leading-snug">
                  {prod.title}
                </h3>
              </div>

              {/* Botonera de descarga limpia (Elimina los hovers complejos por clics directos) */}
              <div className="bg-slate-50 p-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-xs font-bold">
                
                {/* PDF */}
                <a href={prod.pdf} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 transition-all text-[#ea3323]">
                  <div className="w-8 h-8 rounded-lg bg-[#ea3323]/10 flex items-center justify-center text-lg">
                    <i className='bx bxs-file-pdf'></i>
                  </div>
                  <span>{dict?.home?.btnFactSheet || "Ficha"}</span>
                </a>

                {/* Fotos */}
                <a href={prod.photos} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 transition-all text-[#006daf]">
                  <div className="w-8 h-8 rounded-lg bg-[#006daf]/10 flex items-center justify-center text-lg">
                    <i className='bx bxl-dropbox'></i>
                  </div>
                  <span>{dict?.home?.btnPhotos || "Fotos"}</span>
                </a>

                {/* Video */}
                <a href={prod.video} download className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 transition-all text-[#2c6748]">
                  <div className="w-8 h-8 rounded-lg bg-[#2c6748]/10 flex items-center justify-center text-lg">
                    <i className='bx bx-video'></i>
                  </div>
                  <span>{dict?.home?.btnVideo || "Video"}</span>
                </a>

              </div>
            </div>
          ))}
        </div>

        {/* Estado vacío por si no encuentran el tour */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm bg-white rounded-2xl border border-dashed border-slate-200">
            {dict?.home?.noResults || "No se encontraron experiencias con ese nombre."}
          </div>
        )}
      </main>
    </div>
  );
}