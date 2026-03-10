import React from 'react';
import { Experience } from '../types';

interface ExperienceProps { items: Experience[]; }

export const ExperienceSection: React.FC<ExperienceProps> = ({ items }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="text-blue-600 font-black text-[10px] tracking-[0.6em] uppercase mb-4 block">Fieldwork</span>
          <h2 className="text-4xl md:text-6xl font-black font-heading tracking-wide text-slate-900 mb-4 leading-tight drop-shadow-sm title-reveal">
            Educational <br /> Practice & <span className="text-blue-600">Research.</span>
          </h2>
          <p className="text-slate-600 text-lg font-light max-w-sm tracking-wide">
            Translating evidence-based pedagogical theories into high-impact digital learning tools.
          </p>
        </div>
        
        <div className="lg:col-span-8 space-y-10">
          {items.map((item, idx) => (
            <div key={idx} className="glass-card p-8 md:p-12 rounded-[40px] hover:shadow-2xl transition-all duration-700 group border-white/50 hover-3d bg-white/60">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-8">
                <div>
                  <h4 className="text-2xl md:text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors tracking-wide">{item.role}</h4>
                  <p className="text-blue-600 font-bold tracking-wider mt-1">{item.organization}</p>
                </div>
                <div className="flex flex-col items-start md:items-end shrink-0">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] whitespace-nowrap">{item.period}</span>
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] mt-1 whitespace-nowrap">{item.location}</span>
                </div>
              </div>
              <div className="space-y-4">
                {item.points.map((p, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0 animate-pulse"></span>
                    <p className="text-base text-slate-600 font-light leading-relaxed tracking-wide">
                      {p}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};