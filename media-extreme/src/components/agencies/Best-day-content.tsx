'use client';

import { useState } from 'react';
import Link from 'next/link';

interface AgencyContentProps {
  lang: string;
  dict: any;
}

export default function BestDayContent({ lang, dict }: AgencyContentProps) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const agencyCode = 'BD-EXTREME-26';

  // Get translations from dict
  const details = dict?.agencyDetails || {};
  const commonBack = details.back || 'Volver a Agencias';
  const commonDownload = details.download || 'Descargar';
  const commonCopy = details.copy || 'Copiar Código';
  const commonCopied = details.copiedText || '¡Copiado!';
  
  const agency = details.bestDay || {
    title: 'Portal de Afiliado: Best Day',
    badge: 'Socio Preferencial',
    greeting: '¡Hola equipo de Best Day! Aquí tienen sus recursos comerciales personalizados para la temporada 2026.',
    commissionLabel: 'Comisión Preferencial',
    commissionValue: '15% Net Rate',
    codeLabel: 'Código de Venta',
    managerLabel: 'Gerente de Cuenta',
    managerValue: 'Mariana Rojas',
    resourcesTitle: 'Recursos Exclusivos Best Day',
    resourcesSubtitle: 'Material promocional y técnico personalizado con lineamientos de Best Day.',
    contactTitle: 'Soporte Directo para Best Day',
    contactSubtitle: '¿Necesitas material personalizado, tarifas grupales o asistencia inmediata?',
    formName: 'Nombre Completo',
    formEmail: 'Correo Electrónico',
    formMessage: '¿En qué te podemos ayudar?',
    formSubmit: 'Enviar Solicitud',
    formSuccess: '¡Solicitud enviada con éxito! Nos pondremos en contacto contigo pronto.',
    policyTitle: 'Políticas y Condiciones de Reserva',
    policyInfo: 'Las reservas de Best Day deben realizarse con un mínimo de 12 horas de anticipación. Cancelaciones sin cargo hasta 24 horas antes del tour. Aplican tarifas netas confidenciales según convenio vigente.',
    resource1: 'Folleto Co-Brandeado Best Day',
    resource2: 'Banners Digitales para BestDay.com',
    resource3: 'Video Promocional de ATV (Edición Redes)'
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
      title: agency.resource1 || 'Folleto Co-Brandeado Best Day',
      type: 'PDF',
      size: '4.8 MB',
      icon: 'bxs-file-pdf',
      color: 'text-orange-500 bg-orange-50',
      url: '../factsheet/ExtremeATVAdventureFactSheet-esp.pdf',
    },
    {
      title: agency.resource2 || 'Banners Digitales para BestDay.com',
      type: 'ZIP',
      size: '18.2 MB',
      icon: 'bx-images',
      color: 'text-blue-500 bg-blue-50',
      url: 'https://www.dropbox.com/sh/27725dl4ajhvred/AAAVNELjySKy1pItUvo6JLsfa?dl=0',
    },
    {
      title: agency.resource3 || 'Video Promocional de ATV (Edición Redes)',
      type: 'MP4',
      size: '25.6 MB',
      icon: 'bx-video',
      color: 'text-[#2c6748] bg-[#2c6748]/10',
      url: '../videos/extreme-atv-adventure.mp4',
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
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white p-8 md:p-12 shadow-xl mb-8">
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
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center text-2xl">
              <i className="bx bx-trending-up"></i>
            </div>
            <div>
              <span className="text-xs text-slate-400 font-semibold block">{agency.commissionLabel}</span>
              <span className="text-xl font-bold text-[#1c2a4b]">{agency.commissionValue}</span>
            </div>
          </div>

          {/* Stat 2: Código Copiable */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-500 flex items-center justify-center text-2xl">
                <i className="bx bx-barcode-reader"></i>
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
            <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-500 flex items-center justify-center text-2xl">
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
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50/10 transition-all gap-4"
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
                        className="flex-1 sm:flex-none text-center px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-orange-500 transition-colors shadow-sm"
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
                <i className="bx bx-shield-quarter text-orange-500 text-2xl"></i>
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
                    placeholder="E.g. Mariana Rojas"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all text-[#1c2a4b]"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#1c2a4b]/80 uppercase block mb-1.5">{agency.formEmail}</label>
                  <input
                    type="email"
                    required
                    placeholder="mrojas@bestday.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all text-[#1c2a4b]"
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all text-[#1c2a4b] resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl text-xs font-bold hover:shadow-lg hover:shadow-orange-500/20 active:scale-[0.98] transition-all"
                >
                  {agency.formSubmit}
                </button>
              </form>
            )}
            
            {/* Informacion de contacto rapida */}
            <div className="border-t border-slate-100 mt-6 pt-6 space-y-3">
              <a href="mailto:mrojas@bestday.com" className="flex items-center gap-3 text-slate-500 hover:text-orange-500 text-sm transition-colors">
                <i className="bx bx-envelope text-lg"></i>
                <span>mrojas@bestday.com</span>
              </a>
              <a href="https://wa.me/529981234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-500 hover:text-emerald-500 text-sm transition-colors">
                <i className="bx bxl-whatsapp text-lg text-emerald-500"></i>
                <span>+52 (998) 123-4567</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
