import React, { useEffect } from 'react';

interface SnapStoryDetailsProps {
  onBack: () => void;
}

export const SnapStoryDetails: React.FC<SnapStoryDetailsProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-slate-900 py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-5s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto">
        <button 
          onClick={onBack}
          className="relative z-50 group flex items-center gap-3 text-blue-600 font-bold tracking-[0.2em] uppercase mb-12 hover:text-blue-800 transition-colors cursor-pointer"
        >
          <svg className="w-6 h-6 transform group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Portfolio
        </button>

        <header className="mb-16 reveal active">
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 rounded-full glass-card text-[11px] font-black tracking-[0.4em] text-blue-600 uppercase border border-blue-500/30">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
            Case Study
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-heading leading-tight mb-6 drop-shadow-xl text-slate-900">
            SnapStory: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AI-Powered English Learning Adventure</span>
          </h1>
          <p className="text-2xl text-slate-600 font-light tracking-wide border-l-4 border-blue-500 pl-6 py-2">
            Turning the real world into a magical storybook for kids.
          </p>
        </header>

        {/* Hero Image */}
        <div className="w-full rounded-[40px] overflow-hidden mb-24 shadow-2xl border border-white/50 reveal active hover-3d">
          <img src="https://github.com/sagewu666/picture-website2/blob/main/IMG_9526.JPG?raw=true" alt="SnapStory Hero" className="w-full h-auto object-cover" />
        </div>

        <div className="space-y-24">
          {/* Overview */}
          <section className="glass-card p-10 md:p-16 rounded-[40px] border border-white/50 hover-3d reveal active">
            <h2 className="text-3xl font-black font-heading text-blue-600 mb-8 flex items-center gap-4">
              Overview
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              SnapStory is an AI-driven English learning application designed specifically for ESL (English as a Second Language) children aged 6-12. It breaks away from the traditional rote memorization of vocabulary by creating a core loop of <strong className="text-slate-900 font-bold">"Real-World Treasure Hunt ➔ Vocabulary Learning ➔ Personalized Storybook Generation"</strong>, allowing kids to naturally master English while exploring the physical world.
            </p>
          </section>

          {/* Image Gallery */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal active">
            {[
              "https://github.com/sagewu666/picture-website2/blob/main/IMG_9518.jpg?raw=true",
              "https://github.com/sagewu666/picture-website2/blob/main/IMG_9519.jpg?raw=true",
              "https://github.com/sagewu666/picture-website2/blob/main/IMG_9520.jpg?raw=true"
            ].map((src, idx) => (
              <div key={idx} className="glass-card rounded-[24px] overflow-hidden border border-white/50 hover-3d group relative shadow-lg bg-white/40 p-2 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={src} 
                  alt={`SnapStory Screenshot ${idx + 1}`} 
                  className="w-full h-auto max-h-[600px] object-contain transform group-hover:scale-[1.02] transition-transform duration-700 rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </section>

          {/* Vibe Coding */}
          <section className="glass-card p-10 md:p-16 rounded-[40px] border border-white/50 hover-3d reveal active">
            <h2 className="text-3xl font-black font-heading text-blue-600 mb-8 flex items-center gap-4">
              <span className="text-white bg-blue-500 w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md">1</span> 
              The "Vibe Coding" Approach
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-12">
              This project is a product of my practice of the "Vibe Coding" philosophy—leveraging powerful AI programming assistants and multimodal large models (Google Gemini) to shift the primary focus from tedious low-level code implementation to Product Vibe, User Experience (UX), and core gameplay design.
            </p>
            
            {/* Design Flow Chart Image */}
            <div className="w-1/2 md:w-1/4 mx-auto rounded-3xl overflow-hidden mb-12 shadow-xl border border-white/50 hover-3d">
              <img src="https://github.com/sagewu666/picture-website2/blob/main/d4eb49c5d01ac81a352ee2b533de713e.PNG?raw=true" alt="Design Flow Chart" className="w-full h-auto object-cover" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm hover-3d">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Invisible Tech Stack</h3>
                <p className="text-slate-600 font-light leading-relaxed text-sm">
                  With the powerful multimodal capabilities of the Gemini API (visual recognition, text generation, image generation), I was able to quickly build extremely complex interaction logic. This allowed me to focus on polishing the "game feel" of the frontend—using React and Tailwind CSS to rapidly iterate a colorful, bouncy, and micro-interactive child-friendly UI.
                </p>
              </div>
              <div className="bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm hover-3d">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Experience First</h3>
                <p className="text-slate-600 font-light leading-relaxed text-sm">
                  The starting point of the design was not "how to teach English", but "how to make it fun for kids". The entire App is packaged as an adventure, where AI is the magician behind the scenes, and code is just the brush used to realize this magic.
                </p>
              </div>
            </div>
          </section>

          {/* Why This Direction */}
          <section className="glass-card p-10 md:p-16 rounded-[40px] border border-white/50 hover-3d reveal active">
            <h2 className="text-3xl font-black font-heading text-blue-600 mb-8 flex items-center gap-4">
              <span className="text-white bg-blue-500 w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md">2</span> 
              Why This Direction?
            </h2>
            <div className="mb-8 inline-flex items-center gap-3 px-5 py-2 rounded-full bg-purple-100 text-[11px] font-black tracking-[0.2em] text-purple-700 uppercase border border-purple-200">
              Target Audience: ESL Learners, Ages 6-12
            </div>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
              While observing children learning a second language, I discovered a clear pain point: traditional flashcards are devoid of context, extremely boring, and greatly dampen children's enthusiasm for learning. For kids aged 6-12, they are naturally active, full of imagination, and curious about the physical world around them. Therefore, I decided to build a product that connects <strong className="text-slate-900">"Physical Reality"</strong> and <strong className="text-slate-900">"Digital Imagination"</strong>:
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-blue-500 text-2xl mt-1">•</span>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Context is King</h4>
                  <p className="text-slate-600 font-light leading-relaxed">Kids don't need to rote-memorize "Apple"; instead, by taking a picture of an apple on the table, they get immediate feedback.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-500 text-2xl mt-1">•</span>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Extreme Personalization</h4>
                  <p className="text-slate-600 font-light leading-relaxed">Children in this age group love egocentric stories. If the words they just learned can instantly turn into an adventure story starring them, their intrinsic motivation for learning will be completely ignited.</p>
                </div>
              </li>
            </ul>
          </section>

          {/* Core Features */}
          <section className="glass-card p-10 md:p-16 rounded-[40px] border border-white/50 hover-3d reveal active">
            <h2 className="text-3xl font-black font-heading text-blue-600 mb-12 flex items-center gap-4">
              <span className="text-white bg-blue-500 w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md">3</span> 
              Core Features & Design Rationale
            </h2>
            
            <div className="space-y-12">
              <div className="relative pl-8 md:pl-0">
                <div className="hidden md:block absolute left-[27px] top-12 bottom-0 w-[2px] bg-gradient-to-b from-blue-300 to-transparent"></div>
                
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-12 relative">
                  <div className="md:w-1/3 shrink-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 shadow-sm z-10 relative shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Camera Quest</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-4">
                    <div className="bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm">
                      <h4 className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-2">What it is</h4>
                      <p className="text-slate-600 font-light leading-relaxed">Based on a selected theme (e.g., "Magical Forest", "Space Exploration"), kids find and photograph related objects in the real world. The AI vision model recognizes the objects and teaches the corresponding English words.</p>
                    </div>
                    <div className="bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm">
                      <h4 className="text-purple-600 font-bold text-sm uppercase tracking-widest mb-2">Why design it this way</h4>
                      <p className="text-slate-600 font-light leading-relaxed">Shifts learning from "passive reception" to "active exploration". Through physical movement and real-world interaction (Kinesthetic learning), it builds a much stronger neural connection between objects and English words than looking at 2D pictures ever could.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-12 relative">
                  <div className="md:w-1/3 shrink-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600 shadow-sm z-10 relative shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">AI Storybook</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-4">
                    <div className="bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm">
                      <h4 className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-2">What it is</h4>
                      <p className="text-slate-600 font-light leading-relaxed">After the treasure hunt, the AI takes the words the child just photographed and learned, combines them with the child's profile (name, avatar), and generates a personalized, illustrated adventure story in real-time.</p>
                    </div>
                    <div className="bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm">
                      <h4 className="text-purple-600 font-bold text-sm uppercase tracking-widest mb-2">Why design it this way</h4>
                      <p className="text-slate-600 font-light leading-relaxed">Solves the "learn and forget" problem. It weaves isolated words into a logical and fun narrative. When a child sees the "Cup" they just photographed turn into a magical holy grail that defeats a monster in the story, this Contextual Learning creates a massive "Aha Moment".</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative">
                  <div className="md:w-1/3 shrink-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-sm z-10 relative shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Explorer Passport & Word Gym</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-4">
                    <div className="bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm">
                      <h4 className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-2">What it is</h4>
                      <p className="text-slate-600 font-light leading-relaxed">Includes fun post-reading quizzes, a vocabulary book, and a "Passport" to record learning achievements.</p>
                    </div>
                    <div className="bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm">
                      <h4 className="text-purple-600 font-bold text-sm uppercase tracking-widest mb-2">Why design it this way</h4>
                      <p className="text-slate-600 font-light leading-relaxed">Introduces Gamification and Spaced Repetition mechanisms. It wraps boring after-class reviews in the thrill of collecting badges and leveling up, ensuring short-term memory is converted into long-term memory.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
