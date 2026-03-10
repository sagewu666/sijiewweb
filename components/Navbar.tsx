import React from 'react';

interface NavbarProps { 
  activeSection: string; 
  onNavigate?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
  ];

  const scrollTo = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 flex justify-center">
      <div className="w-full max-w-7xl flex items-center justify-between">
        <div onClick={() => scrollTo('home')} className="text-xl font-black font-heading tracking-tighter text-slate-900 bg-white/60 px-4 py-2 rounded-2xl border border-white/50 shadow-sm backdrop-blur-md uppercase hover:scale-105 transition-transform cursor-pointer">Sijie Wu</div>
        
        <div className="hidden md:flex items-center gap-2 p-1.5 bg-white/60 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-5 py-2 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all nav-link-hover ${
                activeSection === item.id 
                ? 'text-blue-600 active' 
                : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <div className="bg-blue-500/80 backdrop-blur-md border border-blue-400/50 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-md">
            {activeSection}
          </div>
        </div>
      </div>
    </nav>
  );
};