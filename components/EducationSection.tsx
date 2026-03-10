import React from 'react';
import { Education } from '../types';

interface EducationProps { items: Education[]; }

export const EducationSection: React.FC<EducationProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
      <div className="md:col-span-4">
        <span className="text-blue-600 font-black text-[10px] tracking-[0.6em] uppercase mb-4 block">Academic Path</span>
        <h2 className="text-4xl md:text-6xl font-black font-heading tracking-wide text-slate-900 mb-6 leading-none drop-shadow-sm title-reveal">
          Intellectual <br /><span className="text-blue-600">Journey.</span>
        </h2>
      </div>
      
      <div className="md:col-span-8 space-y-20">
        {items.map((item, idx) => (
          <div key={idx} className="group relative glass-card p-8 rounded-[40px] border border-white/50 hover-3d shadow-sm">
            <div className="relative">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h4 className="text-3xl font-black text-slate-900 leading-tight tracking-wide">{item.degree}</h4>
                  {item.major && (
                     <p className="text-xl font-medium text-slate-600 mt-1 mb-2 tracking-wide">{item.major}</p>
                  )}
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-blue-600 font-bold text-sm tracking-wide">{item.school}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500 text-xs font-medium uppercase tracking-[0.2em]">{item.location}</span>
                  </div>
                </div>
                <div className="px-6 py-2 bg-blue-100 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-blue-200 mt-2 md:mt-0 shadow-sm whitespace-nowrap">
                  {item.year}
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {item.details.map((detail, i) => (
                  <div key={i} className="px-4 py-2 bg-white/60 border border-white/50 rounded-xl text-[10px] font-bold text-slate-600 uppercase tracking-[0.15em] shadow-sm">
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};