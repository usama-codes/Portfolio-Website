import { useRef } from 'react';
import { User, Terminal, ChevronLeft, ChevronRight, Award, ExternalLink } from 'lucide-react';
import { 
  SiTensorflow, SiKeras, SiScikitlearn, SiPytorch, SiOpencv, 
  SiJavascript, SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, 
  SiTypescript, SiAndroidstudio, SiCplusplus, SiMysql, SiPython,
  SiHackerrank, SiCoursera
} from 'react-icons/si';
import { FaJava, FaReact, FaNodeJs } from 'react-icons/fa';
import './About.css';

const About = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      // 300px roughly equals one card width + gap
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };
  const certifications = [
    { title: "Machine Learning Specialization", issuingAuth: "Coursera", icon: <SiCoursera color="#0056D2" className="cert-icon" />, url: "https://coursera.org/share/840c00b7103ab0b2f9826ee29456c71f" },
    { title: "Natural Language Processing with Probabilistic Models", issuingAuth: "Coursera", icon: <SiCoursera color="#0056D2" className="cert-icon" />, url: "https://coursera.org/share/db61dcfcb5b66473fd64a7478d36b837" },
    { title: "Natural Language Processing with Classification and Vector Spaces", issuingAuth: "Coursera", icon: <SiCoursera color="#0056D2" className="cert-icon" />, url: "https://coursera.org/share/af338ab443ef888344f0d626803c2242" },
    { title: "Problem Solving (Basic)", issuingAuth: "HackerRank", icon: <SiHackerrank color="#00EA64" className="cert-icon" />, url: "https://www.hackerrank.com/certificates/3ed999c56589" },
    { title: "Python (Basic)", issuingAuth: "HackerRank", icon: <SiHackerrank color="#00EA64" className="cert-icon" />, url: "https://www.hackerrank.com/certificates/94391b047436" },
  ];

  const skills = {
    "ML & DL": [
      { name: "TensorFlow", icon: <SiTensorflow color="#FF6F00" /> },
      { name: "Keras", icon: <SiKeras color="#D00000" /> },
      { name: "Scikit Learn", icon: <SiScikitlearn color="#F7931E" /> },
      { name: "PyTorch", icon: <SiPytorch color="#EE4C2C" /> },
      { name: "OpenCV", icon: <SiOpencv color="#5C3EE8" /> }
    ],
    "Web Dev": [
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Next", icon: <SiNextdotjs color="var(--text-primary)" /> },
      { name: "Express", icon: <SiExpress color="var(--text-primary)" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "Node", icon: <FaNodeJs color="#339933" /> }
    ],
    "App Dev": [
      { name: "Java", icon: <FaJava color="#007396" /> },
      { name: "Android Studio", icon: <SiAndroidstudio color="#3DDC84" /> }
    ],
    "Languages": [
      { name: "C++", icon: <SiCplusplus color="#00599C" /> },
      { name: "Python", icon: <SiPython color="#3776AB" /> },
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "Java", icon: <FaJava color="#007396" /> },
      { name: "SQL", icon: <SiMysql color="#4479A1" /> }
    ]
  };

  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <User className="section-icon" />
        <h2>About Me</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="about-content">
        <div className="about-stats-container">
          <div className="stats-header">
            <Award className="stats-icon" />
            <h3>Certifications</h3>
          </div>
          <div className="carousel-container">
            <button className="carousel-button prev-button" onClick={scrollLeft} aria-label="Previous certificates">
              <ChevronLeft size={24} />
            </button>
            
            <div className="certifications-carousel" ref={carouselRef}>
              {certifications.map((cert, index) => (
                <a key={index} href={cert.url} target="_blank" rel="noopener noreferrer" className="stat-card cert-card">
                  <div className="cert-card-header">
                    <span className="stat-number">{cert.icon}</span>
                    <ExternalLink size={18} className="cert-link-icon" />
                  </div>
                  <span className="stat-title">{cert.title}</span>
                  <p className="stat-desc">{cert.issuingAuth}</p>
                </a>
              ))}
            </div>

            <button className="carousel-button next-button" onClick={scrollRight} aria-label="Next certificates">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        <div className="about-skills">
          <div className="skills-header">
            <Terminal size={18} className="skills-icon"/>
            <h3>Technical Skills</h3>
          </div>
          
          <div className="skills-container">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-category">
                <h4>{category}</h4>
                <div className="skill-tags">
                  {items.map(skill => (
                    <span key={skill.name} className="skill-tag">
                      <span className="skill-tag-icon">{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
