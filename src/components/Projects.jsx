
import { Code2, ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "MediAssist",
      description: "An AI-powered telemedicine platform enabling real-time voice consultations with specialized medical agents, featuring symptom analysis, live transcription, and automated generation of structured medical reports.",
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Neon PostgreSQL", "Drizzle ORM", "Vapi AI"],
      github: "https://github.com/usama-codes/medical-ai-voice-agent",
      live: "https://medical-ai-voice-agent-sable.vercel.app/"
    },
    {
      title: "Lost & Found Hub",
      description: "A full-stack platform for university communities featuring .edu-only registration, item reporting with multi-image uploads, ownership verification, and a gamified contributor leaderboard.",
      techStack: ["Next.js", "TypeScript", "React", "MongoDB", "NextAuth"],
      github: "https://github.com/usama-codes/lost-and-found-app",
      live: "https://lost-and-found-c4nagjev1-usama-codes-projects.vercel.app/"
    },
    {
      title: "Medify",
      description: "A full-stack e-pharmacy management platform featuring real-time WebSocket notifications, JWT authentication, and comprehensive dashboard analytics for both customers and pharmacies.",
      techStack: ["React", "Node.js", "Express", "Supabase", "WebSocket"],
      github: "https://github.com/usama-codes/medify",
    },
    {
      title: "Inquire",
      description: "A high-performance full-stack search engine utilizing an offline Python indexing pipeline and a persistent C++ query engine to rank over 190k Medium articles using TF-IDF.",
      techStack: ["C++", "Python", "Flask", "React", "TypeScript", "NLTK"],
      github: "https://github.com/usama-codes/search-engine",
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <Code2 className="section-icon" />
        <h2>Featured Projects</h2>
        <div className="section-line"></div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                    <Github size={18} />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-tech-stack">
              {project.techStack.map(tech => (
                <span key={tech} className="tech-item">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
