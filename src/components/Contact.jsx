
import { Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">
          <span className="accent-quote">&quot;</span> Get In Touch
        </h2>
        
        <p className="contact-description">
          I am currently looking for new opportunities, and my inbox is always open. Whether you have a question, want to collaborate on an AI project, or just want to say hello, I&apos;ll try my best to get back to you!
        </p>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="name">NAME</label>
              <input type="text" id="name" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input type="email" id="email" placeholder="your@email.com" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">MESSAGE</label>
            <textarea id="message" rows="5" placeholder="Tell me about your project ideas..."></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message <Send size={16} />
          </button>
        </form>
      </div>

      <footer className="footer">
        <div className="footer-links">
          <a href="https://github.com/usama-codes" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/osama-ayaz-2005abc/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:usamaayaz475@gmail.com">Email</a>
        </div>
        <p className="copyright">
          Designed & Built by Osama Ayaz
        </p>
      </footer>
    </section>
  );
};

export default Contact;
