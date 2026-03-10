import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full space-y-16">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <span className="text-blue-600 font-black text-[10px] tracking-[0.6em] uppercase mb-4 block">Philosophy</span>
            <h2 className="text-5xl md:text-8xl font-black font-heading text-slate-900 leading-[0.95] tracking-wide drop-shadow-sm title-reveal">
              Efficiency through <br/><span className="text-blue-600">Precision.</span>
            </h2>
          </div>
          
          <div className="max-w-md space-y-6 text-slate-600 text-lg font-light leading-relaxed tracking-wide">
            <p>
              I am a Master’s candidate at <span className="font-bold text-slate-900 underline decoration-blue-500 underline-offset-4">Teachers College, Columbia University</span>. I specialize in designing instructional systems that leverage data analysis and interactive media to optimize human learning.
            </p>
            <p>
              My work focuses on identifying interaction patterns that reduce cognitive friction. By merging evidence-based pedagogical theories with digital design, I create learning environments that are both intuitive and measurable.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
          <div className="p-10 glass-card rounded-[40px] border border-white/50 shadow-sm hover:shadow-xl transition-all group hover-3d bg-white/60">
            <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform origin-left">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.674M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            </div>
            <h4 className="text-xl font-black text-slate-900 mb-3 tracking-wide">Analysis Core</h4>
            <p className="text-slate-600 font-light leading-relaxed tracking-wide">Qualitative Interaction Coding, Learning Analytics, and Evidence-centered Design methodologies.</p>
          </div>
          <div className="p-10 glass-card rounded-[40px] border border-white/50 shadow-sm hover:shadow-xl transition-all group hover-3d bg-white/60">
            <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform origin-left">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            <h4 className="text-xl font-black text-slate-900 mb-3 tracking-wide">Systems & UX</h4>
            <p className="text-slate-600 font-light leading-relaxed tracking-wide">Interactive Media Programming, Instructional Scaffolding, and High-fidelity Learning Experience Design.</p>
          </div>
        </div>
      </div>
    </div>
  );
};