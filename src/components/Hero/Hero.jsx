import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import gsap from 'gsap';
import linktreeLogo from '../../assets/Links/Linktree.png';
import githubLogo from '../../assets/Links/Github logo.jpg';
import microsoftLogo from '../../assets/Links/Microsoft logo.png';
import kaggleLogo from '../../assets/Links/Kaggle logo .png';
import credlyLogo from '../../assets/Links/credly logo.png';
import hack2skillLogo from '../../assets/Links/Hack2skill logo.jpg';
import resumeLogo from '../../assets/Links/resume logo.jpg';
import linkedinLogo from '../../assets/Linked in 1.png';
import profileLogo from '../../assets/Krishna logo.jpg';
import originalPhoto from '../../assets/Krishna-Original.jpg';
import resumePdf from '../../assets/Krishna Patil resume.pdf';
import { usePortfolioVoice } from '../../Hooks/usePortfolioVoice';

const Hero = () => {
  const { speak, stop, isSpeaking, voiceType, toggleVoiceType } = usePortfolioVoice();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);
  const cvLink = "https://www.linkedin.com/posts/krishna-patil-rajput-b66b03340_hi-linkedin-im-krishna-patil-rajput-a-activity-7354165496759435267-BV-V?utm_source=share&utm_medium=member_android&rcm=ACoAAFWX3r4BoZNXBTYw6j3bpV0Im06Tru2b56A";

  const introText = `
    Welcome to the Deep Dive. I am Krishna. I build high-performance systems using React and Node.js.
    My portfolio features over 15 projects, including Samadhan Shoe Mart and Prix Robotics.
    My mission is to push the boundaries of web interaction.
  `;

  const handleVoiceToggle = () => {
    if (isSpeaking) {
      stop();
    } else {
      speak(introText);
    }
  };

  const speakAction = (sentence) => {
    speak(sentence);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsRevealed(false);
    speak("Opening official identity profile. Identity currently masked.");
  };

  const closeModal = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsModalOpen(false);
        setIsRevealed(false);
      }
    });
    tl.to(modalContentRef.current, { scale: 0.8, opacity: 0, duration: 0.3, ease: "power2.in" })
      .to(modalRef.current, { opacity: 0, duration: 0.2 }, "-=0.1");
  };

  const toggleReveal = () => {
    if (!isRevealed) {
      speak("Identity verified. Scanning subject details.");
    } else {
      speak("Re-engaging identity mask.");
    }
    setIsRevealed(!isRevealed);
  };

  const handleMouseMove = (e) => {
    if (!modalContentRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  useEffect(() => {
    if (isModalOpen) {
      gsap.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 });
      gsap.fromTo(modalContentRef.current,
        { scale: 0.5, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" }
      );
    }

    const handleEsc = (event) => {
      if (event.keyCode === 27) closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isModalOpen]);

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-container">
          <div className="hero-left">
            <div className="photo-circle-wrapper">
              <div
                className={`photo-circle ${isSpeaking ? 'speaking-active' : ''}`}
                onClick={openModal}
                onMouseEnter={() => !isSpeaking && speak("I am Krishna Patil Rajput. Click to view my profile.")}
              >
                <img src={profileLogo} alt="Krishna Patil Rajput" />
                {isSpeaking && (
                  <div className="ai-visualizer">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                  </div>
                )}
              </div>

              <div className="voice-controls">
                <div className="voice-type-toggle" onClick={toggleVoiceType}>
                  <span className="voice-label">{voiceType === 'male' ? '👨 Male' : '👩 Female'}</span>
                </div>
                <button
                  className={`ai-narrator-btn ${isSpeaking ? 'active' : ''}`}
                  onClick={handleVoiceToggle}
                  onMouseEnter={() => !isSpeaking && speak("Welcome to the Deep Dive. I am Krishna. Launch the narrator to hear my mission.")}
                >
                  <span className="ai-icon">{isSpeaking ? '⏹️' : '🎙️'}</span>
                  <span className="ai-text">{isSpeaking ? 'Stop Narrator' : 'AI Deep Dive'}</span>
                </button>
                {isSpeaking && <p className="speaking-hint">AI is narrating my story...</p>}
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="quick-links-container">
              <div className="hero-badge" onMouseEnter={() => speak("2026 Developer Showcase")}>✨ 2026 Developer Showcase</div>
              <div className="hero-mini-socials">
                <a href="https://github.com/krishna67890" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <img src={githubLogo} alt="GitHub" className="mini-logo" />
                </a>
                <a href="https://www.linkedin.com/in/krishna-patil-rajput-b66b03340" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <img src={linkedinLogo} alt="LinkedIn" className="mini-logo" />
                </a>
                <a href="https://linktr.ee/KRISHNACODERS" target="_blank" rel="noopener noreferrer" title="Linktree">
                  <img src={linktreeLogo} alt="Linktree" className="mini-logo" />
                </a>
                <a href="https://learn.microsoft.com/en-us/users/krishnapatilrajput-1391/" target="_blank" rel="noopener noreferrer" title="Microsoft">
                  <img src={microsoftLogo} alt="Microsoft" className="mini-logo" />
                </a>
                <a href="https://www.kaggle.com/krishnapatilrajput" target="_blank" rel="noopener noreferrer" title="Kaggle">
                  <img src={kaggleLogo} alt="Kaggle" className="mini-logo" />
                </a>
                <a href="https://www.credly.com/users/krishna-patil-rajput/" target="_blank" rel="noopener noreferrer" title="Credly">
                  <img src={credlyLogo} alt="Credly" className="mini-logo" />
                </a>
                <a href="https://hack2skill.com/dashboard/user_public_profile/?userId=6985d138d9155d4c3659a9e1" target="_blank" rel="noopener noreferrer" title="Hack2Skills">
                  <img src={hack2skillLogo} alt="Hack2Skills" className="mini-logo" />
                </a>
              </div>
            </div>
            <h1
              className="hero-title"
              onClick={() => speak("I am Krishna Patil Rajput, a 3rd-year IT student at Matoshri College. I am a specialist in Full-stack and App development from Nashik.")}
              onMouseEnter={() => speak("Krishna Patil Rajput")}
            >
              Hi, I'm <span className="highlight-rgb">Krishna Patil Rajput</span> 👨‍💻
            </h1>
            <p className="hero-description" onMouseEnter={() => speak("I'm a passionate 3rd Year IT Student at Matoshri College of Engineering. I'm a Full-stack and App Developer.")}>
              I'm a passionate 3rd Year IT Student at <strong>Matoshri College of Engineering</strong>.
              I'm a <strong>Full-stack and App Developer</strong>.
            </p>
            <p className="hero-description" onMouseEnter={() => speak("Nashik, India. Exploring AI, App Development, and the future of web interactive experiences.")}>
              📍 <strong>Nashik, India</strong>. Exploring AI, App Development, and the future of web interactive experiences.
            </p>

            <div className="hero-links-row">
              <a href="https://github.com/krishna67890" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="GitHub" className="link-icon" /> GitHub
              </a> •
              <a href={resumePdf} download="Krishna_Patil_Resume.pdf" onClick={() => speak("Downloading my professional curriculum vitae, optimized for technical recruiters.")}>
                <img src={resumeLogo} alt="Resume" className="link-icon" /> Resume
              </a> •
              <a href="https://learn.microsoft.com/en-us/users/krishnapatilrajput-1391/" target="_blank" rel="noopener noreferrer">
                <img src={microsoftLogo} alt="Microsoft" className="link-icon" /> Microsoft
              </a> •
              <a href="https://www.kaggle.com/krishnapatilrajput" target="_blank" rel="noopener noreferrer">
                <img src={kaggleLogo} alt="Kaggle" className="link-icon" /> Kaggle
              </a> •
              <a href="https://www.credly.com/users/krishna-patil-rajput/" target="_blank" rel="noopener noreferrer">
                <img src={credlyLogo} alt="Credly" className="link-icon" /> Credly
              </a> •
              <a href="https://hack2skill.com/dashboard/user_public_profile/?userId=6985d138d9155d4c3659a9e1" target="_blank" rel="noopener noreferrer">
                <img src={hack2skillLogo} alt="Hack2Skills" className="link-icon" /> Hack2Skills
              </a>
            </div>

            <div className="hero-buttons">
              <a
                href="#projects"
                className="btn btn-primary"
                onMouseEnter={() => speakAction("Accessing my full gallery of advanced web applications and technical solutions.")}
              >
                View Projects
              </a>
              <a
                href="https://github.com/krishna67890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                onMouseEnter={() => speakAction("Opening my open-source repositories where you can review my clean code and architecture.")}
              >
                <img src={githubLogo} alt="GitHub" className="btn-icon" /> GitHub
              </a>
              <a
                href={cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-download-cv"
                onMouseEnter={() => speakAction("Opening my professional online resume for your review.")}
              >
                <img src={resumeLogo} alt="Resume" className="btn-icon" /> View Resume
              </a>
              <a
                href={resumePdf}
                download="Krishna_Patil_Resume.pdf"
                className="btn btn-resume"
                onMouseEnter={() => !isSpeaking && speak("Click to download my resume.")}
                onClick={() => speak("Downloading my professional curriculum vitae, optimized for technical recruiters.")}
              >
                <img src={resumeLogo} alt="Resume" className="btn-icon" /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Cinematic Logo Modal */}
      {isModalOpen && (
        <div className="cinematic-modal-overlay" ref={modalRef} onClick={closeModal}>
          <div className="modal-close-hint">ESC TO EXIT • CLICK PHOTO TO ANALYZE</div>
          <div
            className="cinematic-modal-content"
            ref={modalContentRef}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="modal-image-reveal-container"
              onClick={toggleReveal}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHoveringImage(true)}
              onMouseLeave={() => setIsHoveringImage(false)}
            >
               <img src={originalPhoto} alt="Original" className={`reveal-img original ${isRevealed ? 'visible' : ''}`} />
               <img src={profileLogo} alt="Logo" className={`reveal-img logo-mask ${!isRevealed ? 'visible' : ''}`} />

               {isHoveringImage && !isRevealed && (
                 <div
                   className="magnifying-circle"
                   style={{
                     left: `${mousePos.x}%`,
                     top: `${mousePos.y}%`,
                     backgroundImage: `url(${originalPhoto})`,
                     backgroundPosition: `${mousePos.x}% ${mousePos.y}%`
                   }}
                 >
                   <div className="magnifying-glass-shine"></div>
                 </div>
               )}

               {!isRevealed && (
                 <div className="reveal-scanner">
                   <div className="scanner-line"></div>
                 </div>
               )}
               <div className="reveal-status-tag">{isRevealed ? "IDENTITY VERIFIED" : "IDENTITY MASKED"}</div>
            </div>

            <div className="modal-data-hud">
              <div className="hud-header">
                <span className="bounty-label">BOUNTY: ELITE DEVELOPER</span>
                <h2 className="hud-name">KRISHNA PATIL RAJPUT</h2>
              </div>

              <div className="hud-stats-grid">
                <div className="stat-box">
                  <span className="stat-label">CLASS</span>
                  <span className="stat-value">3RD YEAR IT SPECIALIST</span>
                </div>
                <div className="stat-box">
                  <span className="stat-label">ORIGIN</span>
                  <span className="stat-value">NASHIK, MH</span>
                </div>
                <div className="stat-box">
                  <span className="stat-label">SPECIALTY</span>
                  <span className="stat-value">Full stack & App Dev</span>
                </div>
                <div className="stat-box">
                  <span className="stat-label">THREAT LEVEL</span>
                  <span className="stat-value high">MAXIMUM</span>
                </div>
              </div>

              <div className="hud-footer">
                <div className="hud-tags">
                  <span>#REACT</span><span>#GSAP</span><span>#NODE</span><span>#AI</span>
                </div>
                <button className="hud-action-btn" onClick={closeModal}>CLOSE PROFILE</button>
              </div>
            </div>

            <button className="modal-close-btn" onClick={closeModal}>✕</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;