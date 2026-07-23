import React from 'react';
import { usePortfolioVoice } from '../../Hooks/usePortfolioVoice';
import profileLogo from '../../assets/Krishna logo.jpg';
import './Footer.css';

const Footer = () => {
  const { speak } = usePortfolioVoice();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo" onMouseEnter={() => speak("You are viewing the official portfolio of Krishna Patil Rajput, Full-Stack and Game Developer.")}>
              <img src={profileLogo} alt="Logo" className="footer-logo-img" />
              <div className="logo-text-wrapper">
                <span className="logo-text">Krishna Patil Rajput</span>
                <div className="logo-subtitle">Full-Stack & Game Developer</div>
              </div>
            </div>
            <p className="footer-description" onMouseEnter={() => speak("I build innovative solutions with modern technologies and creative problem-solving approaches, specializing in MERN stack and AI-powered applications.")}>
              Building innovative solutions with modern technologies and creative problem-solving approaches.
              Specializing in MERN stack and AI-powered applications.
            </p>
            <div className="footer-contact">
              <div className="contact-item" onMouseEnter={() => speak("Send me an email at Krishna dot coders 12 at gmail dot com.")}>
                <span className="contact-icon">📧</span>
                <span>Krishna.coders12@gmail.com</span>
              </div>
              <div className="contact-item" onMouseEnter={() => speak("I am based in Nashik, India.")}>
                <span className="contact-icon">📍</span>
                <span>Nashik, India</span>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 onMouseEnter={() => speak("Quick navigation links to explore different sections of my portfolio.")}>Quick Links</h3>
            <div className="footer-links">
              <a href="#hero" onMouseEnter={() => speak("Go to Home section.")}>Home</a>
              <a href="#projects" onMouseEnter={() => speak("View my technical projects.")}>Projects</a>
              <a href="#games" onMouseEnter={() => speak("Explore my interactive games.")}>Games</a>
              <a href="#ai-projects" onMouseEnter={() => speak("Check out my artificial intelligence projects.")}>AI Projects</a>
              <a href="https://linktr.ee/KRISHNACODERS" target="_blank" rel="noopener noreferrer" onMouseEnter={() => speak("Visit my Linktree library.")}>Linktree</a>
              <a href="#skills" onMouseEnter={() => speak("View my technical skills and arsenal.")}>Skills</a>
              <a href="#contact" onMouseEnter={() => speak("Get in touch with me.")}>Contact</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 onMouseEnter={() => speak("My educational background.")}>Education</h3>
            <div className="footer-edu" onMouseEnter={() => speak("I am a third-year Information Technology student at Matoshri College of Engineering and Research Centre.")}>
              <p><strong>Matoshri College of Engineering and Research Centre</strong></p>
              <p>TY - Information Technology</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="bottom-content">
            <p onMouseEnter={() => speak(`Copyright ${currentYear} Krishna Patil Rajput. All rights reserved.`)}>&copy; {currentYear} Krishna Patil Rajput. All rights reserved.</p>
            <div className="footer-credits">
              <p onMouseEnter={() => speak("This portfolio was built with React and passion in Nashik.")}>Built with React & ❤️ in Nashik</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;