
import { Mail, Github, Linkedin } from 'lucide-react';
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiNextdotjs, SiTensorflow, SiPytorch, SiCplusplus, SiPython, SiMongodb, SiTailwindcss, SiExpress } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const floatingIcons = [
    { Icon: SiJavascript, color: '#F7DF1E' },
    { Icon: SiTypescript, color: '#3178C6' },
    { Icon: SiReact, color: '#61DAFB' },
    { Icon: SiNodedotjs, color: '#339933' },
    { Icon: SiNextdotjs, color: 'var(--text-primary)' }, 
    { Icon: SiTensorflow, color: '#FF6F00' },
    { Icon: SiPytorch, color: '#EE4C2C' },
    { Icon: SiCplusplus, color: '#00599C' },
    { Icon: SiPython, color: '#3776AB' },
    { Icon: SiMongodb, color: '#47A248' },
    { Icon: SiTailwindcss, color: '#06B6D4' },
    { Icon: SiExpress, color: 'var(--text-primary)' },
    { Icon: FaJava, color: '#007396' }
  ];
  return (
    <section id="header" className="hero-section">
      <div className="floating-icons-container">
        {(() => {
          const icons = [];
          const generatedPositions = [];
          
          for (let i = 0; i < 25; i++) {
            const iconData = floatingIcons[i % floatingIcons.length];
            const IconComponent = iconData.Icon;
            
            // Try up to 10 times to find a position with minimum 4% spacing
            let randomLeft;
            let attempts = 0;
            let hasCollision = true;
            
            while (hasCollision && attempts < 10) {
              randomLeft = Math.random() * 95; // 0 to 95%
              hasCollision = generatedPositions.some(pos => Math.abs(pos - randomLeft) < 4);
              attempts++;
            }
            
            generatedPositions.push(randomLeft);

            const randomDelay = Math.random() * 10;
            const randomDuration = 7 + Math.random() * 8; 
            const randomSize = 12 + Math.random() * 15; 
            
            icons.push(
              <div 
                key={i} 
                className="floating-icon"
                style={{
                  left: `${randomLeft}%`,
                  animationDelay: `${randomDelay}s`,
                  animationDuration: `${randomDuration}s`,
                  fontSize: `${randomSize}px`,
                  color: iconData.color
                }}
              >
                <IconComponent />
              </div>
            );
          }
          return icons;
        })()}
      </div>

      <div className="hero-content animate-fade-in">
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-title">Osama Ayaz.</h1>
        <h2 className="hero-subtitle">I build intelligent systems.</h2>
        
        <p className="hero-description">
          A Software Engineering student passionate about <strong>Artificial Intelligence, Machine Learning</strong>, and <strong>Web Development</strong>. Currently focused on exploring the frontiers of deep learning and building functional, state-of-the-art products that make life easier.
        </p>
        
        <div className="hero-socials">
          <a href="https://github.com/usama-codes" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link github-link">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/osama-ayaz-2005abc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link linkedin-link">
            <Linkedin size={24} />
          </a>
          <a href="mailto:usamaayaz475@gmail.com" aria-label="Email" className="social-link gmail-link">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
