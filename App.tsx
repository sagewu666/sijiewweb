import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillsSection } from './components/SkillsSection';
import { Projects } from './components/Projects';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { SnapStoryDetails } from './components/SnapStoryDetails';
import { SynapseDetails } from './components/SynapseDetails';
import { Project, Education, Experience } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  // Initial Data
  const initialProjectsData: Project[] = [
    {
      id: "learning-synapse",
      title: "SYNAPSE",
      category: "Learning Engine",
      description: "A recursive learning engine designed to map conceptual DNA through AI-driven content transformation.",
      points: [
        "Visualized complex information structures using cognitive load theory.",
        "Engineered an interface for deep hierarchical knowledge mapping."
      ],
      liveDemo: "https://www.linkedin.com/in/sijie-w-2020b738b",
      videoUrl: "https://vimeo.com/1156036453",
      tech: ["Information Design", "AI Integration", "UX Architecture"],
      placeholderImg: "https://raw.githubusercontent.com/sagewu666/image/main/IMG_4954.jpg"
    },
    {
      id: "snap-story",
      title: "SnapStory",
      category: "ESL/EFL Acquisition",
      description: "A magical world for kids aged 6-12 where real-world photos are transformed into interactive stories for ESL and EFL learners.",
      points: [
        "Gamified vocabulary acquisition for non-native speakers through contextualized visual inputs.",
        "Designed child-centric UI with instructional scaffolding to lower cognitive barriers in language learning."
      ],
      liveDemo: "https://www.linkedin.com/in/sijie-w-2020b738b",
      videoUrl: "https://vimeo.com/1156035200",
      tech: ["ESL/EFL Pedagogy", "K-12 Tech", "Interactive Storytelling"],
      placeholderImg: "https://raw.githubusercontent.com/sagewu666/image/main/IMG_4949.jpg"
    }
  ];

  const [projectsData, setProjectsData] = useState<Project[]>(initialProjectsData);
  const [currentView, setCurrentView] = useState<'home' | 'snapstory' | 'synapse'>('home');
  const hasGeneratedRef = useRef(false);

  const handleViewProject = (projectId: string) => {
    if (projectId === 'snap-story') {
      setCurrentView('snapstory');
      window.scrollTo(0, 0);
    } else if (projectId === 'learning-synapse') {
      setCurrentView('synapse');
      window.scrollTo(0, 0);
    }
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setTimeout(() => {
      const element = document.getElementById('projects');
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  // Generate Images with Gemini
  useEffect(() => {
    const generateImages = async () => {
      if (hasGeneratedRef.current) return;
      hasGeneratedRef.current = true;

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const updatedProjects = [...projectsData];
      let hasUpdates = false;

      for (let i = 0; i < updatedProjects.length; i++) {
        const project = updatedProjects[i];
        if (project.genAiPrompt) {
          try {
            console.log(`Generating cover for ${project.title}...`);
            const response = await ai.models.generateContent({
              model: 'gemini-2.5-flash-image',
              contents: {
                parts: [{ text: project.genAiPrompt }]
              }
            });
            
            // Extract image from response
            const parts = response.candidates?.[0]?.content?.parts;
            if (parts) {
              for (const part of parts) {
                if (part.inlineData && part.inlineData.data) {
                  updatedProjects[i] = {
                    ...project,
                    placeholderImg: `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`
                  };
                  hasUpdates = true;
                }
              }
            }
          } catch (error) {
            console.error(`Failed to generate image for ${project.title}`, error);
          }
        }
      }

      if (hasUpdates) {
        setProjectsData(updatedProjects);
      }
    };

    generateImages();
  }, []); // Run once on mount

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3, rootMargin: '-80px 0px -20% 0px' });

    const sections = document.querySelectorAll('section');
    sections.forEach(el => observer.observe(el));

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    return () => {
      observer.disconnect();
      revealObserver.disconnect();
    };
  }, [currentView]);

  const educationData: Education[] = [
    {
      degree: "M.A. Instructional Technology & Media (Candidate)",
      school: "Teachers College, Columbia University",
      location: "New York, NY",
      year: "08/2025 - Present",
      details: ["GPA: 4.0/4.0", "Core Focus: Interactive Media Programming, Instructional Design Systems"]
    },
    {
      degree: "Exchange Student, Academic Study Abroad Program",
      school: "University of California, Irvine",
      location: "Irvine, CA",
      year: "09/2023 - 12/2023",
      details: ["GPA: 4.0/4.0", "Core Courses: Issues in K-12 Educ, Bilingual Education"]
    },
    {
      degree: "Bachelor of Education",
      major: "Major: Preschool Education",
      school: "Shanghai Normal University",
      location: "Shanghai, China",
      year: "09/2021 - 06/2025",
      details: [
        "WES GPA: 3.64/4.0",
        "Scholarship: SHNU Academic Achievement Scholarship; SHNU Overseas Exchange Scholarship"
      ]
    }
  ];

  const experienceData: Experience[] = [
    {
      role: "Volunteer Learning Experience Designer",
      organization: "Marlene Yu Museum",
      location: "New York, NY",
      period: "02/2026 - Present",
      points: [
        "Designed and developed an interactive self-guided tour web prototype for museum visitors, creating a digital platform to present artwork descriptions, background context, and extended content",
        "Structured content architecture and page logic based on visitor experience scenarios, integrating images, interpretive text, and interactive elements to enhance coherence and engagement"
      ]
    },
    {
      role: "Member",
      organization: "Snow Day Learning Lab",
      location: "New York, NY",
      period: "08/2025 - Present",
      points: [
        "Participated in weekly lab meetings focused on educational technology, learning experience design, and discussion of current EdTech research and practice",
        "Contributed to hands-on EdTech activities and exploratory design work related to learning tools and interactive media"
      ]
    },
    {
      role: "Research Support for PhD Dissertation Project",
      organization: "Teachers College, Columbia University",
      location: "New York, NY",
      period: "10/2025 - 02/2026",
      points: [
        "Conducted qualitative analysis of dialogue and interaction data from Scratch based game creation sessions",
        "Organized and coded learning interaction data to identify patterns related to participation, identity, and sense of belonging in computing activities",
        "Supported analysis of how social and cultural contexts influence young learners’ engagement with computer science"
      ]
    },
    {
      role: "Trainee Teacher & Intern Teacher",
      organization: "Oriental Kindergarten",
      location: "Shanghai, China",
      period: "04/2024 - 11/2024",
      points: [
        "Supported the design and delivery of structured learning activities aligned with learning goals",
        "Created and iterated on instructional materials to improve clarity, engagement, and implementation"
      ]
    }
  ];

  const skillsList = [
    "Instructional Design and Training Content Development",
    "Learner Analysis and Content Optimization",
    "Information and Visual Design",
    "Writing and Presentation of Learning Material",
    "Vibe Coding"
  ];

  const toolsList = [
    "Figma", "Videoleap", "Canva", "Google AI Studio", "HTML, CSS, JavaScript"
  ];

  const handleNavigate = (sectionId: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  if (currentView === 'snapstory') {
    return (
      <div className="flex flex-col w-full min-h-screen relative overflow-hidden bg-transparent">
        <div className="bg-glow -top-32 -left-32 animate-float"></div>
        <div className="bg-glow -bottom-32 -right-32 animate-float" style={{ animationDelay: '-10s' }}></div>
        <Navbar activeSection="projects" onNavigate={handleNavigate} />
        <main className="flex-1 mt-20">
          <SnapStoryDetails onBack={handleBackToHome} />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentView === 'synapse') {
    return (
      <div className="flex flex-col w-full min-h-screen relative overflow-hidden bg-transparent">
        <div className="bg-glow -top-32 -left-32 animate-float"></div>
        <div className="bg-glow -bottom-32 -right-32 animate-float" style={{ animationDelay: '-10s' }}></div>
        <Navbar activeSection="projects" onNavigate={handleNavigate} />
        <main className="flex-1 mt-20">
          <SynapseDetails onBack={handleBackToHome} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-screen relative overflow-hidden bg-transparent">
      {/* Persistant Animated Background Globs */}
      <div className="bg-glow -top-32 -left-32 animate-float"></div>
      <div className="bg-glow -bottom-32 -right-32 animate-float" style={{ animationDelay: '-10s' }}></div>
      <div className="bg-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 animate-float" style={{ animationDelay: '-15s' }}></div>
      
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="flex-1">
        <section id="home" className="w-full">
          <Hero />
        </section>

        <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full reveal">
          <About />
        </section>

        <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full reveal">
          <SkillsSection skills={skillsList} tools={toolsList} />
        </section>

        <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
          <div className="mb-16 reveal">
            <h2 className="text-4xl md:text-6xl font-black font-heading text-slate-900 mb-6 tracking-tight drop-shadow-sm title-reveal">
              Selected <span className="text-blue-600">Works</span>
            </h2>
            <p className="text-slate-600 text-lg font-light max-w-2xl">
              Precision-engineered educational tools and interactive architectures.
            </p>
          </div>
          <Projects projects={projectsData} onViewProject={handleViewProject} />
        </section>

        <section id="experience" className="py-24 w-full reveal">
          <div className="px-6 md:px-12 max-w-7xl mx-auto w-full">
            <ExperienceSection items={experienceData} />
          </div>
        </section>

        <section id="education" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full reveal mb-10">
          <EducationSection items={educationData} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;