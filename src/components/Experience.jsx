
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "ML/DL Intern",
      company: "Murabbi",
      date: "Jun 2024 - Sep 2024",
      description: "Worked on ISIC-2024 Kaggle competition using a mix of Machine Learning and Deep Learning algorithms.",
      skills: ["Machine Learning", "Data Analysis", "Python"]
    }
  ];

  const education = [
    {
      title: "Bachelor of Engineering in Software Engineering",
      institution: "SEECS, NUST",
      date: "2023 - Current",
    },
    {
      title: "FSc Pre-Engineering",
      institution: "Aziz Bhatti Shaheed Army College Mardan",
      date: "2021 - 2023",
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <Briefcase className="section-icon" />
        <h2>Experience & Education</h2>
        <div className="section-line"></div>
      </div>

      <div className="timeline-container">
        <div className="timeline-section">
          <h3 className="timeline-category">Experience</h3>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">{exp.date}</div>
                <div className="timeline-content">
                  <h4 className="timeline-title">{exp.title} <span>@ {exp.company}</span></h4>
                  <p className="timeline-description">{exp.description}</p>
                  <div className="timeline-skills">
                    {exp.skills.map(skill => (
                      <span key={skill} className="timeline-skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline-section">
          <h3 className="timeline-category">Education</h3>
          <div className="timeline">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">{edu.date}</div>
                <div className="timeline-content">
                  <h4 className="timeline-title">{edu.title}</h4>
                  <p className="timeline-description">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
