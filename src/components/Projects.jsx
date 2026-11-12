import { Code2, ExternalLink, Github, X } from "lucide-react";
import { useState, useEffect } from "react";
import "./Projects.css";

// Project Images for Second Look
import sl1 from "./assets/second-look/Screenshot 2026-07-24 032253.png";
import sl2 from "./assets/second-look/Screenshot 2026-07-23 191055.png";
import sl3 from "./assets/second-look/Screenshot 2026-07-23 191208.png";
import sl4 from "./assets/second-look/Screenshot 2026-07-23 191306.png";

// Project Images for MediAssist
import ma1 from "./assets/medi-assist/Screenshot 2026-07-29 154721.png";
import ma2 from "./assets/medi-assist/image copy.png";
import ma3 from "./assets/medi-assist/image.png";
import ma4 from "./assets/medi-assist/image copy 3.png";
import ma5 from "./assets/medi-assist/image copy 4.png";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && activeProject) {
        setActiveProject(null);
      }
    };

    if (activeProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  const projects = [
    {
      title: "Aether Link — BLE Diagnostics & Health Hub",
      description:
        "A cross-platform Bluetooth Low Energy ecosystem surfacing real-time dashboard analytics from healthcare devices like the BPW1 Health Watch, Hipee Pill Box, and Lepod Pro ECG. Built a primary Flutter mobile app, a parallel native Android implementation, and a Java Swing desktop client bridging to a Python BLE subprocess. Also developed a Gemini CLI agent plugin to enforce strict MVVM architecture during AI-assisted code generation.",
      techStack: ["Flutter", "Java", "Python", "Bluetooth LE", "Gemini AI"],
    },
    {
      title: "Second Look",
      description:
        "An AI-powered web application for skin lesion analysis and early detection, featuring on-device inference directly in the browser via TensorFlow.js.",
      techStack: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "TensorFlow.js",
        "Firebase",
        "Python",
      ],
      github: "https://github.com/usama-codes/isic-2024",
      live: "https://isic-2024.vercel.app/",
      images: [sl1, sl2, sl3, sl4],
    },
    {
      title: "MediAssist",
      description:
        "An AI-powered telemedicine platform enabling real-time voice consultations with specialized medical agents, featuring symptom analysis, live transcription, and automated generation of structured medical reports.",
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Neon PostgreSQL",
        "Drizzle ORM",
        "Vapi AI",
      ],
      github: "https://github.com/usama-codes/medical-ai-voice-agent",
      live: "https://medical-ai-voice-agent-sable.vercel.app/",
      images: [ma1, ma2, ma3, ma4, ma5],
    },
    {
      title: "Raqam AI",
      description:
        "An Urdu-first personal finance assistant for users in Pakistan, combining a bilingual RTL-friendly dashboard with AI-powered financial education, data analysis, recommendations, and confirmation-gated actions. Includes transaction management, budgets, savings goals, voice conversations, CSV import, receipt OCR, alerts, and an auditable financial action log.",
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Convex",
        "Clerk",
        "OpenAI Agents SDK",
        "Google Gemini",
        "Tailwind CSS",
      ],
      github: "https://github.com/usama-codes/raqam-ai",
      live: "https://raqam-ai.vercel.app/",
    },
    {
      title: "Lost & Found Hub",
      description:
        "A full-stack platform for university communities featuring .edu-only registration, item reporting with multi-image uploads, ownership verification, and a gamified contributor leaderboard.",
      techStack: ["Next.js", "TypeScript", "React", "MongoDB", "NextAuth"],
      github: "https://github.com/usama-codes/lost-and-found-app",
      live: "https://lost-and-found-c4nagjev1-usama-codes-projects.vercel.app/",
    },
    {
      title: "Medify",
      description:
        "A full-stack e-pharmacy management platform featuring real-time WebSocket notifications, JWT authentication, and comprehensive dashboard analytics for both customers and pharmacies.",
      techStack: ["React", "Node.js", "Express", "Supabase", "WebSocket"],
      github: "https://github.com/usama-codes/medify",
    },
    {
      title: "Inquire",
      description:
        "A high-performance full-stack search engine utilizing an offline Python indexing pipeline and a persistent C++ query engine to rank over 190k Medium articles using TF-IDF.",
      techStack: ["C++", "Python", "Flask", "React", "TypeScript", "NLTK"],
      github: "https://github.com/usama-codes/search-engine",
    },
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
          <div
            key={index}
            className={`project-card animate-fade-in ${project.live ? "clickable-card" : ""}`}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => project.live && setActiveProject(project)}
            role={project.live ? "button" : undefined}
            tabIndex={project.live ? 0 : undefined}
            onKeyDown={(e) => {
              if (project.live && (e.key === "Enter" || e.key === " ")) {
                e.preventDefault();
                setActiveProject(project);
              }
            }}
          >
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <div
                className="project-links"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              >
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                  >
                    <Github size={18} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-tech-stack">
              {project.techStack.map((tech) => (
                <span key={tech} className="tech-item">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {activeProject && (
        <div
          className="project-modal-overlay"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-modal-btn"
              onClick={() => setActiveProject(null)}
              aria-label="Close modal"
              autoFocus
            >
              <X size={24} />
            </button>
            <h3 className="modal-title">{activeProject.title}</h3>
            {activeProject.images && activeProject.images.length > 0 ? (
              <div className="modal-gallery">
                {activeProject.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${activeProject.title} screenshot ${i + 1}`}
                    className="modal-image"
                  />
                ))}
              </div>
            ) : (
              <div className="modal-no-images">
                <p>No preview pictures available for this project.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
