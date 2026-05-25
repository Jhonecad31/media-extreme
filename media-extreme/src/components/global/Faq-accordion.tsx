'use client';

import { useState } from 'react';

interface FaqItem {
  q: string;
  a: string;
  icon?: string;
  tags?: Array<{ icon: string; label: string }>;
}

interface FaqAccordionProps {
  faq: {
    title?: string;
    items: FaqItem[];
  };
  accentColor: string; // Hex value e.g. '#c42727' (Best Day / Jopa red)
  brandColor: string;  // Hex value e.g. '#163155' (Navy)
}

export default function FaqAccordion({ faq, accentColor, brandColor }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faq || !faq.items || faq.items.length === 0) return null;

  return (
    <div className="mt-16 border-t border-slate-200/60 pt-12">
      <div className="text-center mb-10">
        <h2 
          className="text-3xl font-black tracking-tight mb-2"
          style={{ color: brandColor }}
        >
          {faq.title || "Preguntas Frecuentes"}
        </h2>
        <div 
          className="w-16 h-1 mx-auto rounded-full"
          style={{ backgroundColor: accentColor }}
        ></div>
      </div>

      <div className="space-y-4 w-full">
        {faq.items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm"
              style={{ 
                borderColor: isOpen ? accentColor : '#f1f5f9',
                boxShadow: isOpen ? `0 0 0 1px ${accentColor}40, 0 1px 2px 0 rgba(0, 0, 0, 0.05)` : undefined
              }}
            >
              {/* Question Header */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-slate-800 focus:outline-none transition-colors group"
              >
                <span 
                  className="text-sm md:text-base leading-snug flex-1 transition-colors"
                  style={{ color: isOpen ? brandColor : undefined }}
                >
                  {item.q}
                </span>
                <span 
                  className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 transform transition-transform duration-300"
                  style={{ 
                    transform: isOpen ? 'rotate(180deg)' : undefined,
                    backgroundColor: isOpen ? `${accentColor}15` : undefined,
                    color: isOpen ? accentColor : undefined
                  }}
                >
                  <i className="bx bx-chevron-down text-xl"></i>
                </span>
              </button>

              {/* Answer Content */}
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-[600px] opacity-100 border-t border-slate-50' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                <div className="px-6 py-5 text-sm text-slate-500 leading-relaxed bg-slate-50/55 flex flex-col gap-4">
                  <div 
                    className="[&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ul]:mt-2 [&_strong]:text-slate-800 [&_strong]:font-semibold [&_em]:italic"
                    dangerouslySetInnerHTML={{ __html: item.a }}
                  />
                  
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-1 pt-4 border-t border-slate-100">
                      {item.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="inline-flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group"
                        >
                          <span 
                            className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                            style={{ 
                              backgroundColor: `${accentColor}15`, 
                              color: accentColor 
                            }}
                          >
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
  );
}
