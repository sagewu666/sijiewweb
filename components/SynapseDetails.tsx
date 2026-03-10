import React, { useEffect } from 'react';

interface SynapseDetailsProps {
  onBack: () => void;
}

export const SynapseDetails: React.FC<SynapseDetailsProps> = ({ onBack }) => {
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
            Synapse: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AI-Powered Recursive Learning Engine</span>
          </h1>
          <p className="text-2xl text-slate-600 font-light tracking-wide border-l-4 border-blue-500 pl-6 py-2">
            Visualizing knowledge as an infinite, explorable network of connected concepts.
          </p>
        </header>

        <div className="mb-24 flex justify-center reveal active">
          <div className="glass-card rounded-[24px] overflow-hidden border border-white/50 hover-3d shadow-lg bg-white/40 p-2 max-w-md w-full">
            <img 
              src="https://github.com/sagewu666/picture-website2/blob/main/IMG_9531.jpg?raw=true" 
              alt="Synapse Hero" 
              className="w-full h-auto max-h-[600px] object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="space-y-24">
          {/* Overview */}
          <section className="glass-card p-10 md:p-16 rounded-[40px] border border-white/50 hover-3d reveal active">
            <h2 className="text-3xl font-black font-heading text-blue-600 mb-8 flex items-center gap-4">
              Overview
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Synapse is an AI-driven "recursive" learning engine. It breaks away from traditional linear reading patterns (like reading books or articles). By inputting any topic, the AI automatically deconstructs and expands it, generating a dynamic, interactive Knowledge Graph in real-time. Users can explore it like navigating the universe, continuously clicking nodes to dig deeper, or synthesizing different nodes to build a holistic understanding of complex subjects during their exploration.
            </p>
          </section>

          {/* Vibe Coding */}
          <section className="glass-card p-10 md:p-16 rounded-[40px] border border-white/50 hover-3d reveal active">
            <h2 className="text-3xl font-black font-heading text-blue-600 mb-8 flex items-center gap-4">
              <span className="text-white bg-blue-500 w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md">1</span> 
              The "Vibe Coding" Approach
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-12">
              This project is also a product of my practice of the "Vibe Coding" philosophy—leveraging powerful AI programming assistants and the deep reasoning capabilities of Google Gemini, I shifted my focus from tedious data structure processing to the stunning visual impact (Visual Vibe) and exploration experience (UX) of knowledge visualization.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm hover-3d">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Invisible Tech Stack</h3>
                <p className="text-slate-600 font-light leading-relaxed text-sm">
                  Leveraging the Gemini API's powerful structured data generation capabilities (transforming abstract concepts into Nodes and Links), I was able to quickly build extremely complex knowledge deconstruction logic. This allowed me to focus on polishing the "geeky" and "sci-fi" feel of the frontend—using React, D3.js, and Tailwind CSS to rapidly iterate an immersive UI with Glassmorphism, smooth zooming, and dynamic node expansion.
                </p>
              </div>
              <div className="bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm hover-3d">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Experience First</h3>
                <p className="text-slate-600 font-light leading-relaxed text-sm">
                  The starting point of the design was not "giving you a Wikipedia article", but "making you a knowledge hacker". The entire App is packaged as the growth process of a neural synapse, where AI is the neuron responsible for building connections, and code is just the medium to present this blossoming of thought.
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
              Target Audience: Lifelong Learners, Students, & Researchers
            </div>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
              When observing people learning complex interdisciplinary subjects (like AI, quantum physics, macroeconomics), I found a clear pain point: traditional information presentation is linear, but human understanding and memory are networked. Faced with massive amounts of information, learners easily "see the trees but miss the forest." Therefore, I decided to build a product that connects <strong className="text-slate-900">"Macro Overview"</strong> and <strong className="text-slate-900">"Micro Details"</strong>:
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-blue-500 text-2xl mt-1">•</span>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Context is King</h4>
                  <p className="text-slate-600 font-light leading-relaxed">Learning the "Backpropagation Algorithm" in isolation is difficult, but if you can see its connections to "Calculus", "Neural Networks", and "Error Functions" on a graph, understanding becomes instantly multidimensional.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-500 text-2xl mt-1">•</span>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Extreme Personalization</h4>
                  <p className="text-slate-600 font-light leading-relaxed">Everyone's curiosity points are different. Synapse allows users to freely select nodes of interest for "recursive expansion", meaning everyone's final generated knowledge graph is a unique personal cognitive map.</p>
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
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-12">
              To achieve these goals, I designed the App with three core interaction modules, forming a complete closed loop for knowledge internalization:
            </p>

            <div className="space-y-12">
              <div className="relative pl-8 md:pl-0">
                <div className="hidden md:block absolute left-[27px] top-12 bottom-0 w-[2px] bg-gradient-to-b from-blue-300 to-transparent"></div>
                
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-12 relative">
                  <div className="md:w-1/3 shrink-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 shadow-sm z-10 relative shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Infinite Knowledge Graph</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-4">
                    <div className="bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm">
                      <h4 className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-2">What it is</h4>
                      <p className="text-slate-600 font-light leading-relaxed">Users input an initial topic (e.g., "Black Holes"), and the AI breaks it down into core concept nodes and connects them. Users can click any sub-node of interest, and the AI will continue to deconstruct downwards, allowing the graph to grow infinitely.</p>
                    </div>
                    <div className="bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm">
                      <h4 className="text-purple-600 font-bold text-sm uppercase tracking-widest mb-2">Why design it this way</h4>
                      <p className="text-slate-600 font-light leading-relaxed">Transforms learning from "passive reading" to "active treasure hunting". By leveraging human Spatial Memory, the visual node distances and connections help the brain intuitively establish logical dependencies between concepts.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-12 relative">
                  <div className="md:w-1/3 shrink-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600 shadow-sm z-10 relative shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Concept Synthesis</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-4">
                    <div className="bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm">
                      <h4 className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-2">What it is</h4>
                      <p className="text-slate-600 font-light leading-relaxed">Users can select 2-3 seemingly unrelated nodes on the graph (e.g., "Biology" and "Machine Learning") and click "Synthesize". The AI will think deeply and explain their potential connections and interdisciplinary applications.</p>
                    </div>
                    <div className="bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm">
                      <h4 className="text-purple-600 font-bold text-sm uppercase tracking-widest mb-2">Why design it this way</h4>
                      <p className="text-slate-600 font-light leading-relaxed">Addresses the problem of "lack of deep thinking". The highest level of learning is not memorization, but establishing cross-boundary connections. This feature encourages Lateral Thinking, bringing users "Aha Moments" akin to discovering a new continent.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative">
                  <div className="md:w-1/3 shrink-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-sm z-10 relative shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Creator Mode & Resource Library</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-4">
                    <div className="bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm">
                      <h4 className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-2">What it is</h4>
                      <p className="text-slate-600 font-light leading-relaxed">Includes manually adding/editing nodes (Creator Mode), saving core concepts to a sidebar (Resource Library), and generating a one-click summary report of the current exploration path (Learning Summary).</p>
                    </div>
                    <div className="bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm">
                      <h4 className="text-purple-600 font-bold text-sm uppercase tracking-widest mb-2">Why design it this way</h4>
                      <p className="text-slate-600 font-light leading-relaxed">Introduces Personal Knowledge Management (PKM) concepts. Ensures the tool is not just a cool "toy", but can settle into the user's "Second Brain". Through manual editing and summary output (Feynman Technique), it completes the final leap from "information acquisition" to "knowledge internalization".</p>
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
