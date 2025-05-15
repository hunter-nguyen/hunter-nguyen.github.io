import React from 'react';
import Project from './Project';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  devpostUrl?: string;
}

const projectsData: Project[] = [
  {
    title: "fillosophy | 🏆 SFHacks 2025 Winner",
    description: "fillosophy is an AI-powered document workflow tool that helps first-gen immigrants navigate complex medical paperwork. By combining multilingual video input with RAG-based automation, it intelligently parses, contextualizes, and fills out forms end-to-end.",
    technologies: ["React", "LlamaIndex", "Python", "Whisper", "Gemini API"],
    githubUrl: "https://github.com/jask1m/fillosophy",
    devpostUrl: "https://devpost.com/software/form-force"
  },
  {
    title: "FireZero | 🥈 HackDavis Second Overall",
    description: "FireZero is a fire risk visualization and planning tool that uses open utility and safety data to assess building-level fire vulnerability. Built with Mapbox, Next.js, and the Gemini API, it generates real-time risk scores and AI-powered mitigation steps for campus infrastructure planning.",
    technologies: ["Next.js", "TypeScript", "Mapbox", "Python", "Gemini API", "Matplotlib"],
    githubUrl: "https://github.com/hunter-nguyen/hackdavis2025",
    devpostUrl: "https://devpost.com/software/firezero"
  },
  {
    title: "AVA | 🥇 Best Use of Groq",
    description: "AVA (Accessible Voice Assistant) is a hands-free, voice-powered AI agent that performs complex web tasks through natural language commands. Built with Groq's ultra-fast transcription and LLM APIs, AVA combines speech recognition, structured task planning, and browser automation for seamless, accessible digital interaction.",
    technologies: ["Python", "FastAPI", "Groq", "PyGame", "Browser Use", "SpeechRecognition", "distil-whisper", "Perplexity API"],
    githubUrl: "https://github.com/n8thantran/HackHayward2025",
    devpostUrl: "https://devpost.com/software/ava-zamdu0"
  },
];

const Projects: React.FC = () => {
  return (
    <div>
      <h2>Projects</h2>
      {projectsData.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;