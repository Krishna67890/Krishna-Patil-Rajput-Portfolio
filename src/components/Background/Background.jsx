import React from 'react';
import './Background.css';

const Background = () => {
  return (
    <section id="background" className="background-section">
      <div className="container">
        <h2 className="section-title">🎓 My Journey & Background</h2>
        <div className="background-grid">
          <div className="background-card rgb-card">
            <div className="card-icon">📚</div>
            <h3>Education</h3>
            <p><strong>3rd Year IT Student</strong></p>
            <p>Matoshri College of Engineering and Research Centre</p>
            <p className="card-detail">Focusing on Information Technology fundamentals and advanced software engineering principles.</p>
          </div>

          <div className="background-card rgb-card">
            <div className="card-icon">💻</div>
            <h3>Hands-on Experience</h3>
            <p><strong>Development Expertise</strong></p>
            <p>Extensive experience in MERN Stack, Game Development, and Mobile App Development.</p>
            <p className="card-detail">Built 15+ advanced web projects, clones, and interactive platforms using modern technologies.</p>
          </div>

          <div className="background-card rgb-card">
            <div className="card-icon">🔧</div>
            <h3>Systems & Virtualization</h3>
            <p><strong>OS & Environment Management</strong></p>
            <p>Skilled in configuring Dual Boot (Windows 10/11, Ubuntu 24.04 LTS) and VirtualBox.</p>
            <p className="card-detail">Actively managing various Linux distros like Manjaro and Linux Mint for testing performance and stability.</p>
          </div>

          <div className="background-card rgb-card">
            <div className="card-icon">🌐</div>
            <h3>Current Learning</h3>
            <p><strong>Expanding Horizons</strong></p>
            <p>Deepening expertise in <strong>Game Development</strong>, Advanced Web, and App Development.</p>
            <p className="card-detail">Currently mastering game engines and cross-platform mobile frameworks. 🌐</p>
          </div>

          <div className="background-card rgb-card">
            <div className="card-icon">☁️</div>
            <h3>Future Goals</h3>
            <p><strong>DevOps & Cloud</strong></p>
            <p>Aiming to master DevOps practices, Cloud computing (AWS/Azure), and system automation.</p>
            <p className="card-detail">To become a versatile developer who understands the full lifecycle of software—from code to cloud deployment.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;