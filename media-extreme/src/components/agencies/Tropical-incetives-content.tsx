'use client';

import ProductGrid from '../global/Product-grid';
import FaqAccordion from '../global/Faq-accordion';

interface AgencyContentProps {
  lang: string;
  dict: any;
}

export default function TropicalIncentivesContent({ lang, dict }: AgencyContentProps) {
  const details = dict?.agencyDetails || {};
  const agency = details.tropicalIncentives || {
    title: 'Portal DMC: Tropical Incentives',
    badge: 'Socio de Grupos y Convenciones',
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-8 pb-16 text-[#1c2a4b] font-sans selection:bg-[#d7aa38]/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        


        {/* Banner Hero con Colores Oficiales Tropical Incentives (Azul Marino #002d5d y Oro #d7aa38) */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#002d5d] via-[#102a45] to-[#0f172a] text-white p-10 md:p-14 shadow-xl mb-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#d7aa38]/10 blur-3xl rounded-full translate-x-20 -translate-y-20"></div>
          <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-white/5 blur-2xl rounded-full"></div>
          
          <div className="relative z-10 flex-1 text-center md:text-left">
            <span className="bg-[#d7aa38] text-white font-bold text-xs md:text-sm uppercase tracking-wider px-4 py-2 rounded-full border border-white/10 mb-5 inline-block shadow-sm">
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
                src="/icon/logos/Logo-tropical.svg" 
                alt="Tropical Incentives Logo" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Sección: Nuestras Experiencias */}
        <section className="mb-10">
          {dict?.experiences && (
            <div className="mb-6">
              <h2 className="text-3xl font-black text-[#002d5d] mb-8 text-center md:text-left">
                {dict.experiences.title || 'Nuestras Experiencias'}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {dict.experiences.items.map((exp: any, idx: number) => (
                  <div key={idx} className="group bg-white rounded-2xl border border-slate-100 shadow-sm p-8 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                    {/* Decorative background glow on hover */}
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#002d5d]/5 rounded-full blur-xl group-hover:bg-[#d7aa38]/10 transition-all duration-500"></div>

                    {/* Icon Container */}
                    <div className="w-16 h-16 rounded-2xl bg-[#002d5d]/10 flex items-center justify-center mb-6 text-[#002d5d] group-hover:scale-110 group-hover:bg-[#d7aa38] group-hover:text-white transition-all duration-300 shadow-sm">
                      <i className={`bx ${exp.icon} text-3xl`}></i>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-lg md:text-xl text-[#1c2a4b] mb-3 leading-snug group-hover:text-[#002d5d] transition-colors">
                      {exp.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                      {exp.desc}
                    </p>

                    {/* Badge */}
                    {exp.badge && (
                      <span className="text-xs font-bold text-[#d7aa38] bg-[#d7aa38]/8 border border-[#d7aa38]/10 px-3.5 py-1.5 rounded-full mt-auto inline-block shadow-sm">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Rejilla de productos (cards del Home) */}
        <div className="mt-8 border-t border-slate-200/60 pt-12">
          <h3 className="text-3xl font-black text-[#002d5d] mb-8">
            {dict?.products?.title || "Productos"}
          </h3>
          <ProductGrid products={(dict?.products?.items || []).filter((p: any) => !['city_taco_tour', 'beach_taco_tour', 'extreme_atv_wild_pass', 'extreme_wild_pass_horseback_ride'].includes(p.id))} dict={dict} />
        </div>

        {/* Sección Preguntas Frecuentes (FAQ) */}
        <FaqAccordion faq={dict?.faq} accentColor="#d7aa38" brandColor="#002d5d" />

      </div>
    </div>
  );
}
