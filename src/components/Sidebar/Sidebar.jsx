import React, { useState } from 'react';
import { usePortfolioVoice } from '../../Hooks/usePortfolioVoice';
import './Sidebar.css';
import profileLogo from '../../assets/Krishna logo.jpg';

const Sidebar = ({ onOpenJourney, onOpenGame, onOpenTerminal }) => {
  const { speak } = usePortfolioVoice();
  const [isOpen, setIsOpen] = useState(false);

  const icons = {
    Terminal: (size) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></svg>
    ),
    Map: (size) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" /><line x1="9" y1="3" x2="9" y2="18" /><line x1="15" y1="6" x2="15" y2="21" /></svg>
    ),
    Briefcase: (size) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    ),
    Cpu: (size) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" /></svg>
    ),
    Gamepad: (size) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="12" x2="10" y2="12" /><line x1="8" y1="10" x2="8" y2="14" /><rect x="2" y="6" width="20" height="12" rx="2" /><line x1="15" y1="13" x2="15.01" y2="13" /><line x1="18" y1="11" x2="18.01" y2="11" /></svg>
    ),
    ChevronRight: (size) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
    )
  };

  const menuItems = [
    { name: 'Terminal', icon: icons.Terminal(20), action: onOpenTerminal, primary: true },
    { name: 'My Journey', icon: icons.Map(20), action: () => { speak("🎓 My Journey & Background"); onOpenJourney(); } },
    { name: 'Projects', icon: icons.Briefcase(20), href: '#projects' },
    { name: 'Game Mode', icon: icons.Gamepad(20), action: onOpenGame },
  ];

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? 'rotate-180' : ''}>{icons.ChevronRight(24)}</span>
        </button>

        <div className="sidebar-logo">
          <img
            src={profileLogo}
            alt="KPR"
            className="sidebar-logo-img"
            onMouseEnter={() => {
              speak("Launch the Command Center terminal.");
              onOpenTerminal && onOpenTerminal();
            }}
          />
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`nav-item ${item.primary ? 'primary' : ''}`}
              onClick={() => {
                if (item.action) item.action();
                if (item.href) {
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                }
                if (window.innerWidth < 1024) setIsOpen(false);
              }}
              title={item.name}
              onMouseEnter={() => {
                if (item.name === 'My Journey') {
                  speak("Click to view my professional journey and background details.");
                } else if (item.name === 'Terminal') {
                  speak("Launch the Command Center terminal.");
                } else if (item.name === 'Game Mode') {
                  speak("Enter the interactive arcade mode.");
                } else if (item.name === 'Projects') {
                  speak("Browse my technical project gallery.");
                }
              }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="scroll-indicator">
            <div className="scroll-progress"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;