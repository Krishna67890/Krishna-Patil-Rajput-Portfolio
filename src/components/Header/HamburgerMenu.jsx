import React from 'react';
import { usePortfolioVoice } from '../../Hooks/usePortfolioVoice';
import githubLogo from '../../assets/Links/Github logo.jpg';
import linkedinLogo from '../../assets/Linked in 1.png';
import './HamburgerMenu.css';

const HamburgerMenu = ({ isOpen, toggleMenu, items }) => {
  const { speak } = usePortfolioVoice();

  const handleClick = (item) => {
    toggleMenu();
    if (item.action) {
      item.action();
      return;
    }
    if (item.isDownload) {
      const link = document.createElement('a');
      link.href = item.href;
      link.download = 'Krishna_Patil_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }
    const element = document.querySelector(item.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`hamburger-menu ${isOpen ? 'active' : ''}`}>
      <div className="close-menu" onClick={toggleMenu}>✕</div>
      <div className="menu-content">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.href || '#'}
                onClick={(e) => {
                  if (!item.isDownload && !item.action) e.preventDefault();
                  handleClick(item);
                }}
                download={item.isDownload ? "Krishna_Patil_Resume.pdf" : undefined}
                onMouseEnter={() => speak(item.desc)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="social-links-mobile">
          <a href="https://github.com/krishna67890" target="_blank" rel="noopener noreferrer" onMouseEnter={() => speak("View my GitHub profile.")}>
            <img src={githubLogo} alt="GitHub" className="mobile-social-logo" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/krishna-patil-rajput-b66b03340" target="_blank" rel="noopener noreferrer" onMouseEnter={() => speak("Connect with me on LinkedIn.")}>
            <img src={linkedinLogo} alt="LinkedIn" className="mobile-social-logo" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;