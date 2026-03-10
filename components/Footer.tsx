import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-24 px-6 md:px-12 w-full mt-auto reveal">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 mb-24">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-[6rem] lg:text-[7.5rem] font-black font-heading tracking-wide mb-10 leading-[0.8] text-white title-reveal">
              LET'S <br /><span className="text-blue-500">CONNECT.</span>
            </h2>
            <p className="text-slate-400 text-xl font-light leading-relaxed tracking-wide">
              Open to collaborations on instructional systems design, learning data analysis, and educational research.
            </p>
          </div>
          
          <div className="flex flex-col gap-10 w-full md:w-auto">
            <div>
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 block">Inquiries</span>
              <a href="mailto:sagewu415@gmail.com" className="text-2xl md:text-3xl font-light hover:text-blue-400 transition-colors border-b border-slate-700 pb-2 tracking-wide text-white">
                sagewu415@gmail.com
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="http://linkedin.com/in/sijie-w-2020b738b" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-glow-interactive !bg-white/10 !border-blue-500/30 !text-white hover:!bg-white/20"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty('--x', `${x}px`);
                  e.currentTarget.style.setProperty('--y', `${y}px`);
                }}
              >
                LinkedIn Profile
                <svg className="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-800 gap-8">
          <div className="flex items-center gap-3">
             <div className="text-xl font-black font-heading tracking-[0.1em] uppercase text-white">Sijie Wu</div>
             <div className="w-1 h-1 rounded-full bg-slate-600"></div>
             <div className="text-[9px] font-black tracking-[0.4em] uppercase text-slate-500">Design Portfolio</div>
          </div>
          
          <div className="text-[9px] font-black tracking-[0.3em] uppercase text-slate-500 flex gap-4">
            <span>Columbia University</span>
            <span>Teachers College</span>
            <span className="text-blue-500">Instructional Designer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};