export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  points: string[];
  liveDemo?: string;
  videoUrl?: string; 
  placeholderImg: string;
  genAiPrompt?: string; // New field for AI generation
  tech: string[];
}

export interface Education {
  degree: string;
  major?: string; // Added major field
  school: string;
  location: string;
  year: string;
  details: string[];
}

export interface Experience {
  role: string;
  organization: string;
  location: string;
  period: string;
  points: string[];
}