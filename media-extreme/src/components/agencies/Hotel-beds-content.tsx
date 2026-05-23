'use client';

import { useState } from 'react';
import Link from 'next/link';

interface AgencyContentProps {
  lang: string;
  dict: any;
}

export default function HotelBedsContent({ lang, dict }: AgencyContentProps) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const agencyCode = 'HB-NETS-2026';

  // Get translations from dict
  const details = dict?.agencyDetails || {};
  const commonBack = details.back || 'Volver a Agencias';
  const commonDownload = details.download || 'Descargar';
  const commonCopy = details.copy || 'Copiar ID';
  const commonCopied = details.copiedText || '¡Copiado!';

  const agency = details.hotelBeds || {
    title: 'Portal de Afiliado: Hotel Beds',
    badge: 'Socio de Integración API',
    greeting: '¡Hola equipo de Hotel Beds! Accede a las guías de integración XML, mapeo de tarifas dinámicas y material de soporte.',
    commissionLabel: 'Esquema de Tarifas',
    commissionValue: 'Dynamic Net Rates',
    codeLabel: 'ID de Integración',
    managerLabel: 'Gerente de Cuenta',
    managerValue: 'David Sterling',
    resourcesTitle: 'Recursos Técnicos y de Integración',
    resourcesSubtitle: 'Documentación de API, mapeo de IDs de productos y material gráfico para distribución global.',
    contactTitle: 'Soporte Técnico API & Reservas',
    contactSubtitle: '¿Necesitas soporte con el mapeo de productos, incidencias de API o contratos dinámicos?',
    formName: 'Nombre Completo',
    formEmail: 'Correo de la Empresa',
    formMessage: 'Descripción de la consulta',
    formSubmit: 'Enviar Consulta',
    formSuccess: '¡Consulta enviada con éxito! El equipo de soporte técnico se pondrá en contacto.',
    policyTitle: 'Políticas de Integración y Bloqueo',
    policyInfo: 'Todas las integraciones API deben cumplir con el protocolo de confirmación en tiempo real. Las cancelaciones se rigen bajo los convenios dinámicos estipulados en la API. En caso de discrepancia, consultar con el manager asignado.',
    resource1: 'Manual de Integración XML v4.2',
    resource2: 'Excel de Mapeo de Códigos de Producto',
    resource3: 'Banners Promocionales Co-Brandeados'
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(agencyCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 4000);
    }
  };

  const exclusiveResources = [
    {
      title: agency.resource1 || 'Manual de Integración XML v4.2',
      type: 'PDF',
      size: '2.5 MB',
      icon: 'bxs-file-pdf',
      color: 'text-blue-500 bg-blue-50',
      url: '../factsheet/ExtremeATVAdventureFactSheet-esp.pdf',
    },
    {
      title: agency.resource2 || 'Excel de Mapeo de Códigos de Producto',
      type: 'XLSX',
      size: '110 KB',
      icon: 'bx-table',
      color: 'text-indigo-500 bg-indigo-50',
      url: 'https://www.dropbox.com/sh/lw3xhat2uti56mv/AABqWVSBr192X2kkTx3ldU3ka?dl=0',
    },
    {
      title: agency.resource3 || 'Banners Promocionales Co-Brandeados',
      type: 'ZIP',
      size: '14.8 MB',
      icon: 'bx-images',
      color: 'text-violet-500 bg-violet-50',
      url: 'https://www.dropbox.com/sh/27725dl4ajhvred/AAAVNELjySKy1pItUvo6JLsfa?dl=0',
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-8 pb-16 text-[#1c2a4b] font-sans selection:bg-[#8ebf25]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Botón Volver */}
        <Link 
          href={`/${lang}/agencies`}
          className="inline-flex items-center text-slate-500 hover:text-[#002b11] font-semibold text-sm mb-6 transition-colors group"
        >
          <i className="bx bx-left-arrow-alt text-xl mr-1 group-hover:-translate-x-1 transition-transform"></i>
          {commonBack}
        </Link>

        {/* Banner Hero */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 text-white p-8 md:p-12 shadow-xl mb-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 blur-3xl rounded-full translate-x-20 -translate-y-20"></div>
          <div className="relative z-10">
            <span className="bg-white/20 text-white font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full backdrop-blur-sm border border-white/10 mb-4 inline-block">
              {agency.badge}
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              {agency.title}
            </h1>
            <p className="text-white/90 text-base md:text-lg max-w-2xl leading-relaxed">
              {agency.greeting}
            </p>
          </div>
        </div>

        {/* Grid de Stats Rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Stat 1: Comisión */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-500 flex items-center justify-center text-2xl">
              <i className="bx bx-dollar-circle"></i>
            </div>
            <div>
              <span className="text-xs text-slate-400 font-semibold block">{agency.commissionLabel}</span>
              <span className="text-xl font-bold text-[#1c2a4b]">{agency.commissionValue}</span>
            </div>
          </div>

          {/* Stat 2: Código Copiable */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl">
                <i className="bx bx-network-chart"></i>
              </div>
              <div>
                <span className="text-xs text-slate-400 font-semibold block">{agency.codeLabel}</span>
                <span className="text-lg font-mono font-bold text-[#1c2a4b]">{agencyCode}</span>
              </div>
            </div>
            <button
              onClick={handleCopy}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                copied 
                  ? 'bg-emerald-500 text-white shadow-md' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {copied ? commonCopied : commonCopy}
            </button>
          </div>

          {/* Stat 3: Ejecutivo */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center text-2xl">
              <i className="bx bx-user-voice"></i>
            </div>
            <div>
              <span className="text-xs text-slate-400 font-semibold block">{agency.managerLabel}</span>
              <span className="text-xl font-bold text-[#1c2a4b]">{agency.managerValue}</span>
            </div>
          </div>

        </div>

        {/* Contenido Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Columna Izquierda: Recursos y Políticas */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Sección Recursos */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[#002b11] mb-2">{agency.resourcesTitle}</h2>
              <p className="text-sm text-slate-400 mb-6">{agency.resourcesSubtitle}</p>
              
              <div className="space-y-4">
                {exclusiveResources.map((res, index) => (
                  <div 
                    key={index}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/10 transition-all gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${res.color} shrink-0`}>
                        <i className={`bx ${res.icon}`}></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1c2a4b] text-base leading-snug">{res.title}</h4>
                        <span className="text-xs text-slate-400 font-medium">Format: {res.type} • {res.size}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <a 
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none text-center px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-blue-600 transition-colors shadow-sm"
                      >
                        {commonDownload}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Politicas */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8">
              <h3 className="text-xl font-bold text-[#1c2a4b] mb-4 flex items-center gap-2">
                <i className="bx bx-shield-quarter text-blue-500 text-2xl"></i>
                {agency.policyTitle}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {agency.policyInfo}
              </p>
            </div>

          </div>

          {/* Columna Derecha: Formulario de Contacto */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8 h-fit">
            <h3 className="text-xl font-bold text-[#002b11] mb-2">{agency.contactTitle}</h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">{agency.contactSubtitle}</p>
            
            {submitted ? (
              <div className="bg-emerald-50 text-emerald-600 rounded-xl p-4 text-center border border-emerald-100 flex flex-col items-center gap-2 py-8 animate-fade-in">
                <i className="bx bx-check-circle text-5xl"></i>
                <p className="text-sm font-semibold">{agency.formSuccess}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-[#1c2a4b]/80 uppercase block mb-1.5">{agency.formName}</label>
                  <input
                    type="text"
                    required
                    placeholder="E.g. David Sterling"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-[#1c2a4b]"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#1c2a4b]/80 uppercase block mb-1.5">{agency.formEmail}</label>
                  <input
                    type="email"
                    required
                    placeholder="dsterling@hotelbeds.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-[#1c2a4b]"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#1c2a4b]/80 uppercase block mb-1.5">{agency.formMessage}</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-[#1c2a4b] resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-xs font-bold hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98] transition-all"
                >
                  {agency.formSubmit}
                </button>
              </form>
            )}
            
            {/* Informacion de contacto rapida */}
            <div className="border-t border-slate-100 mt-6 pt-6 space-y-3">
              <a href="mailto:dsterling@hotelbeds.com" className="flex items-center gap-3 text-slate-500 hover:text-blue-500 text-sm transition-colors">
                <i className="bx bx-envelope text-lg"></i>
                <span>dsterling@hotelbeds.com</span>
              </a>
              <a href="https://wa.me/529987654321" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-500 hover:text-emerald-500 text-sm transition-colors">
                <i className="bx bxl-whatsapp text-lg text-emerald-500"></i>
                <span>+52 (998) 765-4321</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
