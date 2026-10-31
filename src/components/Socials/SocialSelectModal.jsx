import React from 'react';
import './SocialSelectModal.css';

const SocialSelectModal = ({ isOpen, type, onClose }) => {
  if (!isOpen) return null;

  const youtubeChannels = [
    { name: "1st Gaming Channel", handle: "@atharva_gaming_yt", url: "https://www.youtube.com/@atharva_gaming_yt", icon: "🎮" },
    { name: "2nd Gaming Channel", handle: "@KrishnaPatilRajput", url: "https://www.youtube.com/@KrishnaPatilRajput", icon: "🕹️" },
    { name: "Coding Channel", handle: "@CodewithKrishYT", url: "https://www.youtube.com/@CodewithKrishYT", icon: "💻" },
    { name: "Vibe Channel", handle: "@vibewithKrishnapatilrajput", url: "https://www.youtube.com/@vibewithKrishnapatilrajput", icon: "✨" }
  ];

  const instagramProfiles = [
    { name: "Personal Profile", handle: "@mr.krishna_rajput_12", url: "https://www.instagram.com/mr.krishna_rajput_12", icon: "📸" },
    { name: "Krish Root Labs", handle: "@krish_root_labs", url: "https://www.instagram.com/krish_root_labs?igsh=YWczM2t3amUyZ3lp", icon: "📸"}
  ];

  const items = type === 'youtube' ? youtubeChannels : instagramProfiles;
  const title = type === 'youtube' ? "📺 Which YouTube Channel would you like to visit?" : "📸 Which Instagram Profile would you like to watch?";

  return (
    <div className="social-modal-overlay" onClick={onClose}>
      <div className="social-modal-content glass-morphism" onClick={(e) => e.stopPropagation()}>
        <button className="social-modal-close" onClick={onClose}>✕</button>
        <h3>{title}</h3>
        <p className="social-modal-sub">Select your preferred destination below:</p>
        <div className="social-options-grid">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-option-card"
              onClick={onClose}
            >
              <span className="opt-icon">{item.icon}</span>
              <div className="opt-text">
                <strong>{item.name}</strong>
                <span>{item.handle}</span>
              </div>
              <span className="opt-arrow">➔</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialSelectModal;
