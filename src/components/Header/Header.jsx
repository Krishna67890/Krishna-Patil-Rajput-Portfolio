import React, { useState, useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu';
import { usePortfolioVoice } from '../../Hooks/usePortfolioVoice';
import './Header.css';
import resumePdf from '../../assets/Krishna Patil resume.pdf';
import profileLogo from '../../assets/Krishna logo.jpg';

const Header = ({ onOpenJourney, onOpenGame, onOpenTerminal }) => {
  const { speak } = usePortfolioVoice();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? 'dark' : 'light';
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#hero', desc: "Go to the home section." },
    { name: 'Projects', href: '#projects', desc: "Explore my technical projects." },
    { name: 'Certificates', href: '#certificates', desc: "View my professional certifications." },
    { name: 'AI', href: '#ai-projects', desc: "Check out my AI projects." },
    { name: 'Skills', href: '#skills', desc: "View my technical arsenal." },
    { name: 'Contact', href: '#contact', desc: "Get in touch." }
  ];

  const menuItems = [
    ...navItems,
    { name: 'Games', href: '#games', desc: "Play my interactive games." },
    { name: 'My Journey', action: onOpenJourney, desc: "Read about my professional path." },
    { name: 'Terminal', action: onOpenTerminal, desc: "Launch the KPR developer terminal." },
    { name: 'Game Mode', action: onOpenGame, desc: "Enter the arcade experience." }
  ];

  const handleProjectSelect = (e) => {
    const targetId = e.target.value;
    if (targetId) {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={profileLogo} alt="Logo" className="header-logo-img" />
          <span>Krishna Patil Rajput</span>
        </div>

        <div className="header-right">
          <nav className="nav">
            <ul className="nav-list">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onMouseEnter={() => speak(item.desc)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={resumePdf}
                  download="Krishna_Patil_Resume.pdf"
                  className="resume-btn"
                  onMouseEnter={() => speak("Download my professional resume.")}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="project-selector-container">
            <select className="project-selector" onChange={handleProjectSelect} aria-label="Select Project">
              <option value="">Quick Jump</option>
              <option value="#projects">💻 Advanced Projects</option>
              <option value="#certificates">Certificates</option>
              <option value="#games">Games</option>
              <option value="#ai-projects">AI Projects</option>
              <option value="#skills">Skills</option>
              <option value="#contact">Contact</option>
            </select>
          </div>

          <div className="theme-toggle-container">
            <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
              {isDark ? (
                <span className="theme-icon">🌙</span>
              ) : (
                <span className="theme-icon">☀️</span>
              )}
              <div className={`toggle-track ${isDark ? 'active' : ''}`}>
                <div className="toggle-thumb"></div>
              </div>
            </button>
          </div>

          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <HamburgerMenu
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        items={[...menuItems, { name: 'Resume', href: resumePdf, isDownload: true, desc: "Download my professional resume." }]}
      />
    </header>
  );
};

export default Header;