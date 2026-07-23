import React, { useState } from 'react';
import { usePortfolioVoice } from '../../Hooks/usePortfolioVoice';
import './Contact.css';

// Logo Imports
import githubLogo from '../../assets/Links/Github logo.jpg';
import linktreeLogo from '../../assets/Links/Linktree.png';

const Contact = () => {
  const { speak } = usePortfolioVoice();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto URL with two recipients
    const recipients = "dhanadai.krishna@gmail.com,krishna.coders12@gmail.com";
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    const mailtoUrl = `mailto:${recipients}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the user's default email client
    window.location.href = mailtoUrl;

    speak("Thank you for your message, " + formData.name + ". Your email client has been opened to send the message to my official address. I will get back to you soon!");

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" onMouseEnter={() => speak("Get in touch with me. I am always open to new opportunities and collaborations.")}>Get In Touch</h2>
          <p className="section-subtitle">Have a project in mind or want to collaborate? Let's connect!</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="card-icon">👋</div>
              <h3 onMouseEnter={() => speak("Let's connect and build something amazing together.")}>Let's Connect</h3>
              <p>I'm always excited to discuss new opportunities, collaborate on interesting projects, or just chat about technology and innovation.</p>
              
              <div className="contact-details">
                <div className="contact-item" onMouseEnter={() => speak("My official email is Krishna dot coders 12 at gmail dot com. You can also reach me at dhana dai dot krishna at gmail dot com.")}>
                  <div className="item-icon">📧</div>
                  <div className="item-content">
                    <strong>Email</strong>
                    <span>Krishna.coders12@gmail.com</span>
                  </div>
                </div>
                <div className="contact-item" onMouseEnter={() => speak("I am currently based in Nashik, India.")}>
                  <div className="item-icon">📍</div>
                  <div className="item-content">
                    <strong>Location</strong>
                    <span>Nashik, India</span>
                  </div>
                </div>
                <div className="contact-item" onMouseEnter={() => speak("I am currently studying at Matoshri College of Engineering and Research Centre.")}>
                  <div className="item-icon">🎓</div>
                  <div className="item-content">
                    <strong>Education</strong>
                    <span>Matoshri College of Engineering and Research Centre</span>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <h4 onMouseEnter={() => speak("Connect with me across these platforms.")}>Connect with me:</h4>
                <div className="social-grid">
                  <a href="https://github.com/krishna67890" target="_blank" rel="noopener noreferrer" className="social-link github" onMouseEnter={() => speak("Check out my open source projects on GitHub.")}>
                    <img src={githubLogo} alt="GitHub" className="contact-social-img" />
                    <span className="social-text">GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/krishna-patil-rajput-b66b03340" target="_blank" rel="noopener noreferrer" className="social-link linkedin" onMouseEnter={() => speak("Connect with me professionally on LinkedIn.")}>
                    <span className="social-icon">💼</span>
                    <span className="social-text">LinkedIn</span>
                  </a>
                  <a href="https://krishnablogy.blogspot.com/" target="_blank" rel="noopener noreferrer" className="social-link blogger" onMouseEnter={() => speak("Read my latest tech articles on my Blog.")}>
                    <span className="social-icon">📝</span>
                    <span className="social-text">Blogger</span>
                  </a>
                  <a href="https://www.youtube.com/@atharva_gaming_yt" target="_blank" rel="noopener noreferrer" className="social-link youtube" onMouseEnter={() => speak("Watch my coding and gaming content on YouTube.")}>
                    <span className="social-icon">📺</span>
                    <span className="social-text">YouTube</span>
                  </a>
                  <a href="https://linktr.ee/KRISHNACODERS" target="_blank" rel="noopener noreferrer" className="social-link linktree" onMouseEnter={() => speak("View all my links in one place on Linktree.")}>
                    <img src={linktreeLogo} alt="Linktree" className="contact-social-img" />
                    <span className="social-text">Linktree</span>
                  </a>
                  <a href="https://www.instagram.com/mr.Krishna_patil_12" target="_blank" rel="noopener noreferrer" className="social-link instagram" onMouseEnter={() => speak("Follow my personal journey on Instagram.")}>
                    <span className="social-icon">📸</span>
                    <span className="social-text">Instagram</span>
                  </a>
                  <a href="https://www.whatsapp.com/channel/0029Vb6Ib4ULI8YgwrV7C21C" target="_blank" rel="noopener noreferrer" className="social-link whatsapp" onMouseEnter={() => speak("Join my WhatsApp channel for regular updates.")}>
                    <span className="social-icon">💬</span>
                    <span className="social-text">WhatsApp</span>
                  </a>
                </div>
              </div>
              
              <div className="availability">
                <div className="availability-status" onMouseEnter={() => speak("I am currently available for new projects and opportunities. Let's talk!")}>
                  <div className="status-indicator available"></div>
                  <span>Currently Available for Projects</span>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <h3 onMouseEnter={() => speak("Send me a message directly from here.")}>Send me a message</h3>
              <p>Fill out the form below and I'll get back to you as soon as possible</p>
            </div>
            
            <div className="form-group" onMouseEnter={() => speak("Please enter your full name.")}>
              <label htmlFor="name">Full Name</label>
              <div className="input-wrapper">
                <span className="input-icon">👤</span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>
            
            <div className="form-group" onMouseEnter={() => speak("Please enter your email address so I can reply to you.")}>
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <span className="input-icon">📧</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>
            
            <div className="form-group" onMouseEnter={() => speak("What would you like to discuss?")}>
              <label htmlFor="message">Your Message</label>
              <div className="input-wrapper textarea-wrapper">
                <span className="input-icon">💬</span>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello!"
                  required
                ></textarea>
              </div>
            </div>
            
            <button type="submit" className="submit-btn" onMouseEnter={() => speak("Click here to send your message to my official address.")}>
              <span className="btn-icon">🌐</span>
              Send Message
            </button>
            
            <div className="form-footer">
              <p onMouseEnter={() => speak("You can also email me directly at dhanadai dot krishna at gmail dot com or krishna dot coders 12 at gmail dot com.")}>
                Or email me directly at:<br />
                <a href="mailto:dhanadai.krishna@gmail.com">dhanadai.krishna@gmail.com</a><br />
                <a href="mailto:krishna.coders12@gmail.com">krishna.coders12@gmail.com</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;