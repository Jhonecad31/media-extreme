'use client';

import ProductGrid from '../global/Product-grid';
import FaqAccordion from '../global/Faq-accordion';

interface AgencyContentProps {
  lang: string;
  dict: any;
}

const JopaNauticosContent = ({ lang, dict }: AgencyContentProps) => {
  const details = dict?.agencyDetails || {};
  const agency = details.jopaNauticos || {
    title: 'Portal de Afiliado: Jopa Nauticos',
    badge: 'Socio de Actividades Acuáticas'
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-8 pb-16 text-[#1c2a4b] font-sans selection:bg-[#c42727]/30">
      {/* Ajustado el contenedor de max-w-6xl a max-w-7xl y padding horizontal md:px-8 */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Banner Hero más amplio y con tipografía más grande */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#163155] via-[#10243e] to-[#0f172a] text-white p-10 md:p-14 shadow-xl mb-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#c42727]/10 blur-3xl rounded-full translate-x-20 -translate-y-20"></div>
          <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-white/5 blur-2xl rounded-full"></div>
          
          <div className="relative z-10 flex-1 text-center md:text-left">
            <span className="bg-[#c42727] text-white font-bold text-xs md:text-sm uppercase tracking-wider px-4 py-2 rounded-full border border-white/10 mb-5 inline-block shadow-sm">
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
            <div className="w-32 h-32 md:w-44 md:h-44 flex items-center justify-center p-2">
              <img 
                src="/icon/logos/logo-jopa.webp" 
                alt="Jopa Nauticos Logo" 
                className="max-w-full max-h-full object-contain filter drop-shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Sección: Nuestras Experiencias */}
        <section className="mb-10">
          {dict?.experiences && (
            <div className="mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {dict.experiences.items.map((exp: any, idx: number) => (
                  <div key={idx} className="group bg-white rounded-2xl border border-slate-100 shadow-sm p-8 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                    {/* Decorative background glow on hover */}
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#163155]/5 rounded-full blur-xl group-hover:bg-[#c42727]/10 transition-all duration-500"></div>

                    {/* Icon Container (Tamaño aumentado) */}
                    <div className="w-16 h-16 rounded-2xl bg-[#163155]/10 flex items-center justify-center mb-6 text-[#163155] group-hover:scale-110 group-hover:bg-[#c42727] group-hover:text-white transition-all duration-300 shadow-sm">
                      <i className={`bx ${exp.icon} text-3xl`}></i>
                    </div>

                    {/* Title (Tamaño aumentado) */}
                    <h3 className="font-bold text-lg md:text-xl text-[#1c2a4b] mb-3 leading-snug group-hover:text-[#163155] transition-colors">
                      {exp.title}
                    </h3>

                    {/* Description (Tamaño aumentado de text-xs a text-sm) */}
                    <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                      {exp.desc}
                    </p>

                    {/* Badge */}
                    {exp.badge && (
                      <span className="text-xs font-bold text-[#c42727] bg-[#c42727]/8 border border-[#c42727]/10 px-3.5 py-1.5 rounded-full mt-auto inline-block shadow-sm">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        <div className="mt-8 border-t border-slate-200/60 pt-12">
          <h3 className="text-3xl font-black text-[#163155] mb-8">
            {dict?.products?.title || "Productos"}
          </h3>
          <ProductGrid 
            products={(dict?.products?.items || []).filter(
              (prod: any) => !['super_combo', 'extreme_atv_wild_pass', 'extreme_wild_pass_horseback_ride'].includes(prod.id)
            )} 
            dict={dict} 
          />
        </div>

        {/* Sección Preguntas Frecuentes (FAQ) */}
        <FaqAccordion faq={dict?.faq} accentColor="#c42727" brandColor="#163155" />

      </div>
    </div>
  );
};

export default JopaNauticosContent;
