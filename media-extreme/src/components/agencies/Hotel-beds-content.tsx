'use client';

import { useState } from 'react';
import Image from 'next/image';
import ProductGrid from '../global/Product-grid';
import { imageKitLoader } from '@/src/lib/imagekit';
import FaqAccordion from '../global/Faq-accordion';

interface AgencyContentProps {
  lang: string;
  dict: any;
}

export default function HotelBedsContent({ lang, dict }: AgencyContentProps) {
  const details = dict?.agencyDetails || {};
  const agency = details.hotelBeds || {
    title: 'Portal de Afiliado: Hotel Beds',
    badge: 'Socio de Integración API'
  };

  const filteredProducts = (dict?.products?.items || []).filter(
    (prod: any) => prod.id === 'beach_taco_tour' || prod.id === 'beach_taco_tour'
  );
  const tacoGallery = [
    { src: '/Gallery-media-extreme/Beach Taco tour 02.webp', alt: 'Beach Taco Tour 02' },
    { src: '/Gallery-media-extreme/Beach Taco tour 01.webp', alt: 'Beach Taco Tour 01' },
    { src: '/Gallery-media-extreme/Beach Taco tour 11.webp', alt: 'Beach Taco Tour 11' },
    { src: '/Gallery-media-extreme/Beach Taco tour 15.webp', alt: 'Beach Taco Tour 15' },
    { src: '/Gallery-media-extreme/Beach Taco tour 12.webp', alt: 'Beach Taco Tour 12' },
    { src: '/Gallery-media-extreme/Beach Taco tour 09.webp', alt: 'Beach Taco Tour 09' },
    { src: '/Gallery-media-extreme/Beach Taco tour 13.webp', alt: 'Beach Taco Tour 13' }
  ];

  const [activeImage, setActiveImage] = useState<string>(tacoGallery[0].src);

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-8 pb-16 text-[#1c2a4b] font-sans selection:bg-[#e2001a]/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        



        {/* Banner Hero con Colores Oficiales Hotelbeds (Midnight Blue #0c192c y Rojo Carmesí #e2001a) */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0c192c] via-[#0d233a] to-[#0f172a] text-white p-10 md:p-14 shadow-xl mb-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#e2001a]/10 blur-3xl rounded-full translate-x-20 -translate-y-20"></div>
          <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-white/5 blur-2xl rounded-full"></div>
          
          <div className="relative z-10 flex-1 text-center md:text-left">
            <span className="bg-[#e2001a] text-white font-bold text-xs md:text-sm uppercase tracking-wider px-4 py-2 rounded-full border border-white/10 mb-5 inline-block shadow-sm">
              {agency.badge}
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 leading-tight">
              {agency.title}
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl leading-relaxed">
              {agency.greeting}
            </p>
          </div>

          <div className="relative z-10 shrink-0 transform hover:scale-105 transition-transform duration-300">
            <div className="w-32 h-32 md:w-44 md:h-44 bg-white rounded-2xl flex items-center justify-center p-6 shadow-2xl border border-white/20">
              <img 
                src="/icon/logos/logo-hoteldeads.png" 
                alt="Hotel Beds Logo" 
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
                    {/* Decorative background glow on hover */}
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#0c192c]/5 rounded-full blur-xl group-hover:bg-[#e2001a]/10 transition-all duration-500"></div>

                    {/* Icon Container */}
                    <div className="w-11 h-11 sm:w-16 sm:h-16 rounded-lg sm:rounded-2xl bg-[#0c192c]/10 flex items-center justify-center text-[#0c192c] group-hover:scale-110 group-hover:bg-[#e2001a] group-hover:text-white transition-all duration-300 shadow-sm shrink-0 sm:mb-6">
                      <i className={`bx ${exp.icon} text-lg sm:text-3xl`}></i>
                    </div>

                    {/* Text Wrapper */}
                    <div className="flex flex-col flex-1 h-full sm:items-center">
                      {/* Title */}
                      <h3 className="font-bold text-base sm:text-lg md:text-xl text-[#1c2a4b] mb-0.5 sm:mb-3 leading-snug group-hover:text-[#0c192c] transition-colors">
                        {exp.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-500 leading-snug mb-0.5 sm:mb-4">
                        {exp.desc}
                      </p>

                      {/* Badge */}
                      {exp.badge && exp.icon !== 'bx-time-five' && (
                        <span className="text-[8px] sm:text-xs font-bold text-[#e2001a] bg-[#e2001a]/8 border border-[#e2001a]/10 px-1.5 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full self-start sm:self-auto mt-auto inline-block shadow-sm">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
        <section className="mb-14 border-t border-slate-200/60 pt-12">
          <div className="text-center md:text-left mb-8">
            <h2 className="text-3xl font-black text-[#0c192c] mb-2">
              Galería: Beach Taco Tour
            </h2>
            <p className="text-sm text-slate-400">
              Explora imágenes de la experiencia gastronómica y cultural en Puerto Morelos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Imagen Activa / Principal */}
            <div className="lg:col-span-2 relative h-[350px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-md border border-slate-100 bg-slate-50">
              <Image
                loader={imageKitLoader}
                src={activeImage}
                alt="City & Taco Tour Active Gallery View"
                fill
                sizes="(max-w-1024px) 100vw, 66vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Selector de Miniaturas */}
            <div className="grid grid-cols-4 lg:grid-cols-2 gap-3 h-fit max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {tacoGallery.map((img, idx) => {
                const isActive = img.src === activeImage;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img.src)}
                    className={`relative h-20 md:h-24 w-full rounded-2xl overflow-hidden shadow-sm transition-all duration-300 border ${
                      isActive 
                        ? 'border-[#e2001a] ring-2 ring-[#e2001a]/30 scale-[1.02]' 
                        : 'border-slate-100 hover:border-slate-300 hover:scale-[1.01]'
                    }`}
                  >
                    <Image
                      loader={imageKitLoader}
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-w-640px) 25vw, 15vw"
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Rejilla de productos (cards del Home) */}
        <div className="mt-8 border-t border-slate-200/60 pt-12">
          <h3 className="text-3xl font-black text-[#0c192c] mb-8">
            {dict?.products?.title || "Productos"}
          </h3>
          <ProductGrid products={filteredProducts} dict={dict} />
        </div>

        {/* Sección Preguntas Frecuentes (FAQ) */}
        <FaqAccordion faq={dict?.faq} accentColor="#e2001a" brandColor="#0c192c" />

      </div>
    </div>
  );
}
