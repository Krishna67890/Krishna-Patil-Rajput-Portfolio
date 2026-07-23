import React, { useState, useEffect } from 'react';
import { usePortfolioVoice } from '../../Hooks/usePortfolioVoice';
import './Journey.css';

const Journey = ({ isOpen, onClose }) => {
  const { speak: portfolioSpeak } = usePortfolioVoice();
  const [activeVoice, setActiveVoice] = useState(null);

  const journeyText = `🎓 My Journey & Background 📚
Education: 3rd Year IT Student at Matoshri College of Engineering and Research Centre. Focusing on Information Technology fundamentals and advanced software engineering principles. 💻
Hands-on Experience: Development Expertise. Extensive experience in MERN Stack, Game Development, and Mobile App Development. Built 15+ advanced web projects, clones, and interactive platforms using modern technologies. 🔧
Systems & Virtualization: OS & Environment Management. Skilled in configuring Dual Boot with Windows and Ubuntu, and VirtualBox. Actively managing various Linux distros like Manjaro and Linux Mint for testing performance and stability. ☁️
Future Goals: DevOps & Cloud. Aiming to master DevOps practices, Cloud computing (AWS or Azure), and system automation. To become a versatile developer who understands the full lifecycle of software—from code to cloud deployment. 🌐
Current Learning: Expanding Horizons. Deepening expertise in Game Development, Advanced Web, and App Development. Currently mastering game engines and cross-platform mobile frameworks. 🌐`;

  useEffect(() => {
    if (isOpen) {
      portfolioSpeak("Opening your professional journey and background briefing. You can choose a narrator voice to hear the full story.");
    }
  }, [isOpen, portfolioSpeak]);

  const speak = (gender) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(journeyText);
    const voices = window.speechSynthesis.getVoices();

    if (gender === 'male') {
      utterance.voice = voices.find(v => v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('david')) || voices[0];
      utterance.pitch = 0.8;
    } else {
      utterance.voice = voices.find(v => v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('zira')) || voices[1];
      utterance.pitch = 1.2;
    }

    utterance.rate = 1;
    setActiveVoice(gender);
    utterance.onend = () => setActiveVoice(null);
    window.speechSynthesis.speak(utterance);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setActiveVoice(null);
  };

  if (!isOpen) return null;

  return (
    <div className="journey-overlay">
      <div className="journey-modal">
        <button className="close-btn" onClick={() => { stop(); onClose(); }}>✕</button>
        <h2 className="section-title">🎓 My Journey & Background</h2>

        <div className="voice-controls">
          <button className={`voice-btn ${activeVoice === 'male' ? 'active' : ''}`} onClick={() => speak('male')}>
            🔊 Male Voice
          </button>
          <button className={`voice-btn ${activeVoice === 'female' ? 'active' : ''}`} onClick={() => speak('female')}>
            🔊 Female Voice
          </button>
          <button className="voice-btn stop" onClick={stop}>⏹ Stop</button>
        </div>

        <div className="journey-content">
          <div className="journey-grid">
            <section className="journey-section-card" onMouseEnter={() => portfolioSpeak("Education: 3rd Year IT Student at Matoshri College. Focusing on IT fundamentals.")}>
              <div className="card-header">
                <span className="card-icon">📚</span>
                <h3>Education</h3>
              </div>
              <p><strong>3rd Year IT Student</strong></p>
              <p>Matoshri College of Engineering and Research Centre</p>
              <p className="card-detail">Focusing on Information Technology fundamentals and advanced software engineering principles. 💻</p>
            </section>

            <section className="journey-section-card" onMouseEnter={() => portfolioSpeak("Development Expertise: Extensive experience in MERN, Game, and Mobile Development.")}>
              <div className="card-header">
                <span className="card-icon">🔧</span>
                <h3>Hands-on Experience</h3>
              </div>
              <p><strong>Development Expertise</strong></p>
              <p>Extensive experience in MERN Stack, Game Development, and Mobile App Development.</p>
              <p className="card-detail">Built 15+ advanced web projects, clones, and interactive platforms. 🔧</p>
            </section>

            <section className="journey-section-card" onMouseEnter={() => portfolioSpeak("OS Management: Skilled in Dual Boot and VirtualBox with Linux distros.")}>
              <div className="card-header">
                <span className="card-icon">☁️</span>
                <h3>Systems & Virtualization</h3>
              </div>
              <p><strong>OS & Environment Management</strong></p>
              <p>Skilled in configuring Dual Boot (Windows 10/11, Ubuntu 24.04 LTS) and VirtualBox.</p>
              <p className="card-detail">Managing various Linux distros like Manjaro and Linux Mint for testing. ☁️</p>
            </section>

            <section className="journey-section-card" onMouseEnter={() => portfolioSpeak("Future Goals: Aiming to master DevOps and Cloud computing.")}>
              <div className="card-header">
                <span className="card-icon">🌐</span>
                <h3>Future Goals</h3>
              </div>
              <p><strong>DevOps & Cloud</strong></p>
              <p>Aiming to master DevOps practices, Cloud computing (AWS/Azure), and system automation.</p>
              <p className="card-detail">Targeting the full software lifecycle—from code to cloud. 🌐</p>
            </section>

            <section className="journey-section-card" onMouseEnter={() => portfolioSpeak("Current Learning: Expanding Horizons in Game and App Development.")}>
              <div className="card-header">
                <span className="card-icon">🌐</span>
                <h3>Current Learning</h3>
              </div>
              <p><strong>Expanding Horizons</strong></p>
              <p>Deepening expertise in Game Development, Advanced Web, and App Development.</p>
              <p className="card-detail">Mastering game engines and cross-platform mobile frameworks. 🌐</p>
            </section>
          </div>
        </div>

        <div className="journey-game-teaser">
          <h3>🎮 Developer Journey Quest</h3>
          <p>Ready to play the journey? Click "Game Mode" in the sidebar!</p>
        </div>
      </div>
    </div>
  );
};

export default Journey;