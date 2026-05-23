'use client';

import Link from 'next/link';

interface AgenciesListProps {
  lang: string;
  dict: any;
}

export default function AgenciesList({ lang, dict }: AgenciesListProps) {
  const agencies = [
    { 
      name: 'Best Day', 
      path: 'agents-best-page', 
      logo: '/icon/logos/logo-bestday.svg', 
      icon: 'bx-sun', 
      color: 'from-orange-400 to-red-500' 
    },
    { 
      name: 'Hotel Beds', 
      path: 'agents-hotel-page', 
      logo: '/icon/logos/logo-hoteldeads.png', // Spelled exactly as added on disk
      icon: 'bx-bed', 
      color: 'from-blue-400 to-indigo-600' 
    },
    { 
      name: 'Jopa Nauticos', 
      path: 'agents-jopa-page', 
      logo: '/icon/logos/logo-nauticos-negro.png', 
      icon: 'bx-water', 
      color: 'from-cyan-400 to-blue-500' 
    },
    { 
      name: 'Tropical Incentives', 
      path: 'agents-tropical-page', 
      logo: '/icon/logos/Logo-tropical.svg', 
      icon: 'bx-leaf', 
      color: 'from-emerald-400 to-green-600' 
    },
    { 
      name: 'Wild Pass', 
      path: 'agents-wild-page', 
      logo: '/icon/logos/logo-wildpass.png', 
      icon: 'bx-map-alt', 
      color: 'from-amber-400 to-orange-500' 
    },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-12 pb-24 text-[#1c2a4b] selection:bg-[#8ebf25]/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#002b11] mb-4">
            {dict?.agencies?.title || 'Nuestras Agencias Asociadas'}
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            {dict?.agencies?.subtitle || 'Accede al material exclusivo y recursos de ventas para cada una de nuestras agencias afiliadas.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agencies.map((agency) => (
            <Link 
              key={agency.path}
              href={`/${lang}/${agency.path}`}
              className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col items-center text-center h-full"
            >
              {/* Background Gradient Element */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${agency.color} opacity-10 blur-3xl rounded-full group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              {/* Container para Logo o Icono */}
              <div className="w-24 h-24 rounded-2xl mb-6 flex items-center justify-center  border border-slate-100 shadow-sm transform group-hover:scale-110 transition-transform duration-300 p-4 relative z-10">
                {agency.logo ? (
                  <img 
                    src={agency.logo} 
                    alt={agency.name} 
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div className={`w-full h-full rounded-xl bg-gradient-to-br ${agency.color} flex items-center justify-center text-white text-3xl shadow-inner`}>
                    <i className={`bx ${agency.icon}`}></i>
                  </div>
                )}
              </div>
              
              <h3 className="text-2xl font-bold text-[#1c2a4b] mb-3">{agency.name}</h3>
              
              <div className="mt-auto pt-6 flex items-center justify-center text-sm font-semibold text-[#8ebf25] group-hover:text-[#002b11] transition-colors">
                <span>{dict?.agencies?.viewResources || 'Ver Recursos'}</span>
                <i className="bx bx-right-arrow-alt text-xl ml-1 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
