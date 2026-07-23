import React, { useState, useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu';
import { usePortfolioVoice } from '../../Hooks/usePortfolioVoice';
import './Header.css';
import resumePdf from '../../assets/Krishna Patil resume.pdf';
import profileLogo from '../../assets/Krishna logo.jpg';
import SpotifyPopup from './SpotifyPopup';

const Header = ({ onOpenJourney, onOpenGame, onOpenTerminal, onOpenSpotify, isSpotifyOpen, setIsSpotifyOpen }) => {
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
          <div className="spotify-control-container">
            <button
              className="spotify-trigger-btn"
              onClick={onOpenSpotify}
              onMouseEnter={() => speak("Open my coding playlist.")}
            >
              <div className="spotify-pulse"></div>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.491 17.306c-.215.353-.674.464-1.027.249-2.846-1.738-6.429-2.13-10.648-1.168-.404.093-.811-.157-.904-.561-.093-.404.157-.811.561-.904 4.635-1.06 8.589-.613 11.767 1.329.354.215.464.674.251 1.055zm1.467-3.258c-.27.441-.845.58-1.286.31-3.258-2.002-8.225-2.585-12.079-1.415-.494.15-1.02-.128-1.17-.622-.15-.494.128-1.02.622-1.17 4.407-1.338 9.89-.687 13.623 1.603.441.27.58.845.31 1.294zm.133-3.376c-3.906-2.321-10.347-2.535-14.114-1.391-.6.182-1.23-.162-1.412-.762-.182-.6.162-1.23.762-1.412 4.316-1.311 11.433-1.05 15.918 1.613.539.32.716 1.017.396 1.556-.32.539-1.017.716-1.55.401v-.009z"/>
              </svg>
              <span className="spotify-tooltip">🎵 Coding Playlist<br/>Listen to the music I code with.</span>
            </button>
          </div>

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
      <SpotifyPopup isOpen={isSpotifyOpen} onClose={() => setIsSpotifyOpen(false)} />
    </header>
  );
};

export default Header;