import React from 'react';
import { usePortfolioVoice } from '../../Hooks/usePortfolioVoice';
import './Socials.css';

// Logo Imports
import githubLogo from '../../assets/Links/Github logo.jpg';
import linktreeLogo from '../../assets/Links/Linktree.png';
import microsoftLogo from '../../assets/Links/Microsoft logo.png';
import kaggleLogo from '../../assets/Links/Kaggle logo .png';
import credlyLogo from '../../assets/Links/credly logo.png';
import hack2skillLogo from '../../assets/Links/Hack2skill logo.jpg';
import linkedinLogo from '../../assets/Linked in 1.png';
import youtubeLogo from '../../assets/Youtube 1.png';
import bloggerLogo from '../../assets/Krishna Bloggers 1.jpg';
import resumeLogo from '../../assets/Links/resume logo.jpg';
import resumePdf from '../../assets/Krishna Patil resume.pdf';

const Socials = () => {
  const { speak } = usePortfolioVoice();
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/krishna67890', icon: githubLogo, isImg: true, desc: "Check out my open source projects on GitHub." },
    { name: 'Resume', url: resumePdf, icon: resumeLogo, isImg: true, desc: "Download my professional resume.", isDownload: true },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/krishna-patil-rajput-b66b03340', icon: linkedinLogo, isImg: true, desc: "Connect with me professionally on LinkedIn." },
    { name: 'Microsoft', url: 'https://learn.microsoft.com/en-us/users/krishnapatilrajput-1391/', icon: microsoftLogo, isImg: true, desc: "View my Microsoft Learn profile and achievements." },
    { name: 'Kaggle', url: 'https://www.kaggle.com/krishnapatilrajput', icon: kaggleLogo, isImg: true, desc: "Check out my data science projects on Kaggle." },
    { name: 'Credly', url: 'https://www.credly.com/users/krishna-patil-rajput/', icon: credlyLogo, isImg: true, desc: "View my verified professional certifications on Credly." },
    { name: 'Hack2Skills', url: 'https://hack2skill.com/dashboard/user_public_profile/?userId=6985d138d9155d4c3659a9e1&utm_source=hack2skill&utm_medium=homepage', icon: hack2skillLogo, isImg: true, desc: "See my hackathon participations on Hack2Skills." },
    { name: 'Blogger', url: 'https://krishnablogy.blogspot.com/', icon: bloggerLogo, isImg: true, desc: "Read my latest tech articles on my Blog." },
    { name: 'YouTube', url: 'https://www.youtube.com/@atharva_gaming_yt', icon: youtubeLogo, isImg: true, desc: "Watch my coding and gaming content on YouTube." },
    { name: 'Linktree', url: 'https://linktr.ee/KRISHNACODERS', icon: linktreeLogo, isImg: true, desc: "View all my links in one place on Linktree." },
    { name: 'Instagram', url: 'https://www.instagram.com/mr.Krishna_patil_12', icon: '📸', isImg: false, desc: "Follow my personal journey on Instagram." },
    { name: 'WhatsApp Channel', url: 'https://www.whatsapp.com/channel/0029Vb6Ib4ULI8YgwrV7C21C', icon: '💬', isImg: false, desc: "Join my WhatsApp channel for regular updates." }
  ];

  return (
    <section id="socials" className="socials-section">
      <div className="container">
        <h2 className="section-title" onMouseEnter={() => speak("Connect with me across these platforms. I am active on all of them.")}>Connect With Me</h2>
        <div className="socials-grid">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              download={social.isDownload ? "Krishna_Patil_Resume.pdf" : undefined}
              className="social-card"
              onMouseEnter={() => speak(social.desc)}
            >
              <span className="social-icon">
                {social.isImg ? (
                  <img src={social.icon} alt={social.name} className="social-img-icon" />
                ) : (
                  social.icon
                )}
              </span>
              <span className="social-name">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Socials;