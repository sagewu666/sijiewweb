import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
  onViewProject?: (projectId: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, onViewProject }) => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const isYouTube = (url?: string) => url?.includes('youtube') || url?.includes('embed') || url?.includes('shorts');
  const isVimeo = (url?: string) => url?.includes('vimeo');

  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:embed\/|v\/|watch\?v=|youtu\.be\/|shorts\/)([^#&?]*)/);
    return (match && match[1].length === 11) ? match[1] : null;
  };

  const getVimeoId = (url: string) => {
    const match = url.match(/vimeo\.com\/(?:video\/|)(\d+)/);
    return (match && match[1]) ? match[1] : null;
  };

  const getEmbedUrl = (url: string) => {
    if (isYouTube(url)) {
      const id = getYouTubeId(url);
      return id ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1` : url;
    }
    if (isVimeo(url)) {
      const id = getVimeoId(url);
      return id ? `https://player.vimeo.com/video/${id}?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479` : url;
    }
    return url;
  };

  const toggleFullscreen = (id: string) => {
    const el = document.getElementById(`container-${id}`);
    if (el) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        el.requestFullscreen().catch(err => console.error(err));
      }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start relative">
      {projects.map((project, index) => (
        <div key={project.id} className={`flex flex-col reveal hover-3d project-card-${index} bg-white/40 p-6 md:p-8 rounded-[40px] glass-card border border-white/50 shadow-sm`}>
          <div 
            id={`container-${project.id}`}
            className="relative w-full overflow-hidden rounded-[32px] border border-white/50 shadow-md bg-black group transition-all duration-700"
            style={{ 
              aspectRatio: project.id === 'snap-story' ? '9 / 16' : '16 / 9',
              maxHeight: project.id === 'snap-story' ? '800px' : 'none'
            }}
          >
            {playingId === project.id && project.videoUrl ? (
              <div className="absolute inset-0 w-full h-full bg-black z-10 rounded-[32px] overflow-hidden">
                {isYouTube(project.videoUrl) || isVimeo(project.videoUrl) ? (
                  <iframe
                    className="absolute inset-0 w-full h-full scale-[1.05]"
                    src={getEmbedUrl(project.videoUrl)}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video 
                    src={project.videoUrl} 
                    autoPlay 
                    controls 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-[1.05]"
                  />
                )}
                
                <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-1.5 pointer-events-auto">
                    <button 
                      onClick={() => setPlayingId(null)}
                      className="bg-black/40 hover:bg-black/80 backdrop-blur-md text-white text-[7px] font-black px-3 py-1.5 rounded-full transition-all border border-white/10 uppercase tracking-[0.3em]"
                    >
                      Close
                    </button>
                    <button 
                      onClick={() => toggleFullscreen(project.id)}
                      className="bg-black/40 hover:bg-black/80 backdrop-blur-md text-white text-[7px] font-black px-3 py-1.5 rounded-full transition-all border border-white/10 uppercase tracking-[0.3em]"
                    >
                      Full
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div 
                className="absolute inset-0 w-full h-full cursor-pointer overflow-hidden bg-slate-200"
                onClick={() => setPlayingId(project.id)}
              >
                 {/* Image or AI Placeholder */}
                <img 
                  src={project.placeholderImg} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-30 transition-all duration-1000 group-hover:scale-110" 
                  onError={(e) => {
                    // Fallback if image fails
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Generation Indicator */}
                {project.placeholderImg.includes('unsplash') && project.genAiPrompt && (
                   <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md text-white text-[8px] font-bold px-3 py-1 rounded-full uppercase tracking-widest animate-pulse border border-white/20">
                     Generating AI Cover...
                   </div>
                )}

                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white/60 backdrop-blur-3xl border border-white/80 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-500 shadow-2xl">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-600 group-hover:text-white translate-x-1 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="px-2 mt-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[11px] font-black text-blue-600 tracking-[0.3em] uppercase bg-blue-100 px-4 py-1.5 rounded-xl border border-blue-200">
                {project.category}
              </span>
              <div className="h-[1px] flex-1 bg-slate-200"></div>
            </div>
            <h3 className="text-4xl font-black font-heading text-slate-900 mb-6 tracking-wide drop-shadow-sm">{project.title}</h3>
            <p className="text-slate-600 text-xl font-light leading-relaxed mb-10 tracking-wide">{project.description}</p>
            <div className="flex flex-wrap gap-3 mb-10">
              {project.tech.map(t => (
                <span key={t} className="px-5 py-2 rounded-2xl border border-white/50 glass-card text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] shadow-sm hover:bg-blue-500 hover:text-white hover:scale-105 transition-all cursor-default bg-white/60">
                  {t}
                </span>
              ))}
            </div>
            {onViewProject && (
              <button 
                onClick={() => onViewProject(project.id)}
                className="group flex items-center gap-3 text-blue-600 font-bold tracking-[0.2em] uppercase hover:text-blue-800 transition-colors mt-4"
              >
                View Details
                <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};