import React, { useRef } from 'react';

export const Hero: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    buttonRef.current.style.setProperty('--x', `${x}px`);
    buttonRef.current.style.setProperty('--y', `${y}px`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-[120px] animate-float z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-[120px] animate-float z-0" style={{ animationDelay: '-5s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.15] pointer-events-none animate-float z-0" style={{ animationDelay: '-10s' }}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#3b82f6" d="M44.7,-76.4C58.2,-69.3,69.7,-57.4,77.3,-43.3C84.9,-29.2,88.6,-12.9,87.6,3.1C86.7,19,81.1,34.7,71.5,47.7C61.8,60.8,48.1,71.2,33.1,76.6C18.1,81.9,1.9,82.3,-14.8,79.8C-31.5,77.3,-48.6,71.8,-61.7,60.8C-74.8,49.8,-83.8,33.3,-86.7,16C-89.6,-1.3,-86.3,-19.4,-77.9,-34.7C-69.5,-49.9,-55.9,-62.4,-41.2,-69C-26.6,-75.6,-10.9,-76.4,2.3,-80.4C15.4,-84.4,31.2,-83.5,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
        <div className="max-w-6xl">
          <div className="animate-hero-text">
            <div className="inline-flex items-center gap-3 px-5 py-2 mb-10 rounded-full glass-card text-[11px] font-black tracking-[0.6em] text-blue-600 uppercase border border-blue-500/30">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
              EdTech Specialist
            </div>
            
            <h1 className="text-6xl md:text-[7rem] lg:text-[8.5rem] font-black font-heading leading-[0.9] tracking-wide text-slate-900 mb-14 drop-shadow-xl">
              INSTRUCTIONAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">DESIGNER</span>
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 animate-hero-text" style={{ animationDelay: '0.3s' }}>
            <p className="text-slate-600 text-xl md:text-2xl font-light leading-relaxed max-w-xl tracking-wider">
              Based at <span className="font-bold text-slate-900 underline decoration-blue-500 underline-offset-8">Columbia University</span>. Building precision digital learning architectures through cognitive engineering.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                ref={buttonRef}
                onMouseMove={handleMouseMove}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-glow-interactive"
              >
                VIEW PROJECTS
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-6 md:left-12 flex flex-col items-start gap-6 opacity-50 animate-bounce">
        <div className="w-[1px] h-20 bg-gradient-to-b from-blue-500 to-transparent"></div>
        <span className="text-[10px] font-black text-slate-500 tracking-[0.8em] uppercase [writing-mode:vertical-lr]">Scroll</span>
      </div>
    </div>
  );
};