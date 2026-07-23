import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './Certificates.css';
import { usePortfolioVoice } from '../../Hooks/usePortfolioVoice';

// Importing Certificate Assets (Main Folder)
import cppCert from '../../assets/Certificates/Cpp-and-Oop-Concepts.jpg';
import pythonCert from '../../assets/Certificates/Python Complete course.jpg';
import spotifyCert from '../../assets/Certificates/Spotify data Visualization.jpg';
import hacktoberfestCert from '../../assets/Certificates/Certificate of Hacktoberfest.jpg';
import cyberCert from '../../assets/Certificates/Cybersecurity essentials 101.jpg';
import careerCert from '../../assets/Certificates/All India Carear Summit Aptus.jpg';
import mernCert from '../../assets/Certificates/Mern Stack Interview quetions.jpg';
import cloudCert from '../../assets/Certificates/Cloud Native Bhujbal knowlege city.jpg';
import jsDomCert from '../../assets/Certificates/JS Dom Manupulation from fyned aademy.jpg';
import internshipCert from '../../assets/Certificates/Full stack dev internship program by eduraka.jpg';
import aiHackCert from '../../assets/Certificates/International Agentic AI Hacathon Sandip University.jpg';
import copadoCert from '../../assets/Certificates/copodo-certified-capadoai-certificate.jpg';

// Additional Certificates from assets
import sqlCert from '../../assets/SQL Course.png';
import linuxCert from '../../assets/Linux for Bingginners.png';
import backendCert from '../../assets/Backend development course.jpg';
import computerEngCert from '../../assets/Computer Engineering Course.webp';

// PDF Certificates
import finlitCert from '../../assets/Certificates/Innovate4FinLit By Hack2skill Game Challenge.pdf';
import prototypeCert from '../../assets/Certificates/Prototype Submission solution Challenge 2026 - Build with AI.pdf';

// PNG Previews for PDFs
import finlitImg from '../../assets/Certificates/Innovate4FinLit-Game-Challenge.png';
import prototypeImg from '../../assets/Certificates/Solution Challenge 2026 Build with AI.png';

const certificatesData = [
  {
    title: "Google Build with AI Prototype",
    issuer: "Google Solution Challenge 2026",
    file: prototypeCert,
    image: prototypeImg,
    type: "pdf",
    description: "Official recognition for building an AI prototype for the Google Solution Challenge 2026.",
    narration: "Google Build with AI Prototype Certificate. This recognizes the successful submission of an AI-powered solution for the Google Solution Challenge 2026."
  },
  {
    title: "Innovate4FinLit Winner",
    issuer: "Hack2skill Game Challenge",
    file: finlitCert,
    image: finlitImg,
    type: "pdf",
    description: "Awarded for winning the Innovate for Financial Literacy Hackathon Game Challenge.",
    narration: "Innovate 4 FinLit Winner Certificate. Awarded by Hack 2 Skill for excellence in developing financial literacy gaming solutions."
  },
  {
    title: "Computer Engineering Course",
    issuer: "Bhujbal Knowledge City",
    image: computerEngCert,
    description: "Comprehensive certification in Computer Engineering principles and practices.",
    narration: "Computer Engineering Course Certificate. Representing foundational and advanced knowledge in computer engineering."
  },
  {
    title: "SQL Certification",
    issuer: "Database Management",
    image: sqlCert,
    description: "Expertise in SQL for database design, querying, and management.",
    narration: "SQL Certification. Expertise in Structured Query Language for database design and management."
  },
  {
    title: "Linux for Beginners",
    issuer: "Open Source Academy",
    image: linuxCert,
    description: "Foundational knowledge of Linux operating system and command line interface.",
    narration: "Linux for Beginners Certificate. Foundational knowledge of Linux operating system and command line interface."
  },
  {
    title: "Backend Development",
    issuer: "Full Stack Mastery",
    image: backendCert,
    description: "Mastery of server-side technologies, APIs, and database integration.",
    narration: "Backend Development Certificate. Mastery of server-side technologies and API development."
  },
  {
    title: "Copado AI Certified",
    issuer: "Copado",
    image: copadoCert,
    description: "Certified expert in Copado AI for DevOps and automation workflows.",
    narration: "Copado AI Certified Developer. Demonstrating expertise in AI-driven DevOps and automation."
  },
  {
    title: "International Agentic AI Hackathon",
    issuer: "Sandip University",
    image: aiHackCert,
    description: "Recognized for participation and innovation in the International Agentic AI Hackathon.",
    narration: "International Agentic AI Hackathon Certificate from Sandip University.",
    initialRotation: 270,
    initialScale: 0.7
  },
  {
    title: "C++ and OOP Concepts",
    issuer: "Course Completion",
    image: cppCert,
    description: "Comprehensive certification in C++ programming and Object Oriented Programming principles.",
    narration: "Certificate for C++ and OOP Concepts.",
    initialRotation: 270,
    initialScale: 0.7
  },
  {
    title: "Python Complete Course",
    issuer: "Course Completion",
    image: pythonCert,
    description: "Mastery of Python programming language from basics to advanced levels.",
    narration: "Python Complete Course Certificate."
  },
  {
    title: "Full Stack Web Development Internship",
    issuer: "Edureka",
    image: internshipCert,
    description: "Successfully completed the Full Stack Web Development internship program.",
    narration: "Full Stack Web Development Internship Certificate by Edureka."
  },
  {
    title: "Cybersecurity Essentials 101",
    issuer: "Cisco / Networking Academy",
    image: cyberCert,
    description: "Foundational knowledge in cybersecurity threats, risks, and protection methods.",
    narration: "Cybersecurity Essentials 101 Certificate."
  },
  {
    title: "Cloud Native Computing",
    issuer: "Bhujbal Knowledge City",
    image: cloudCert,
    description: "Certification in Cloud Native technologies and architectures.",
    narration: "Cloud Native Computing Certificate from Bhujbal Knowledge City."
  },
  {
    title: "JS DOM Manipulation",
    issuer: "Fyned Academy",
    image: jsDomCert,
    description: "Expertise in JavaScript Document Object Model manipulation for dynamic web apps.",
    narration: "JavaScript DOM Manipulation Certificate from Fyned Academy."
  },
  {
    title: "Hacktoberfest Contribution",
    issuer: "DigitalOcean / Hacktoberfest",
    image: hacktoberfestCert,
    description: "Awarded for successful contributions to open-source projects during Hacktoberfest.",
    narration: "Certificate of Hacktoberfest."
  },
  {
    title: "Spotify Data Visualization",
    issuer: "Data Science Project",
    image: spotifyCert,
    description: "Certification for data analysis and visualization of Spotify streaming data.",
    narration: "Spotify Data Visualization Certificate."
  },
  {
    title: "MERN Stack Interview Prep",
    issuer: "Technical Training",
    image: mernCert,
    description: "Advanced preparation and mastery of MERN stack concepts for professional roles.",
    narration: "MERN Stack Interview Questions Certificate."
  },
  {
    title: "All India Career Summit",
    issuer: "Aptus",
    image: careerCert,
    description: "Participation in the national level career summit for engineering professionals.",
    narration: "All India Career Summit Certificate by Aptus."
  }
];

const Certificates = ({ searchQuery }) => {
  const { speak, stop } = usePortfolioVoice();
  const [selectedCertIndex, setSelectedCertIndex] = useState(null);
  const [rotation, setRotation] = useState(0);

  const filteredCertificates = useMemo(() =>
    certificatesData.filter(cert =>
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.description.toLowerCase().includes(searchQuery.toLowerCase())
    ), [searchQuery]);

  const pdfCertificates = useMemo(() => filteredCertificates.filter(c => c.type === 'pdf'), [filteredCertificates]);
  const galleryCertificates = useMemo(() => filteredCertificates.filter(c => c.type !== 'pdf'), [filteredCertificates]);

  const openGallery = (cert) => {
    const globalIndex = certificatesData.findIndex(c => c.title === cert.title);
    setSelectedCertIndex(globalIndex);
    setRotation(certificatesData[globalIndex].initialRotation || 0);
  };

  const closeGallery = useCallback(() => {
    setSelectedCertIndex(null);
    setRotation(0);
    stop();
  }, [stop]);

  const navigate = useCallback((direction) => {
    setSelectedCertIndex((prev) => {
      const nextIdx = direction === 'next'
        ? (prev + 1) % certificatesData.length
        : (prev - 1 + certificatesData.length) % certificatesData.length;
      setRotation(certificatesData[nextIdx].initialRotation || 0);
      return nextIdx;
    });
  }, []);

  useEffect(() => {
    if (selectedCertIndex !== null) {
      speak(certificatesData[selectedCertIndex].narration);
    }
  }, [selectedCertIndex, speak]);

  const handleDownload = (e, cert) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = cert.type === 'pdf' ? cert.file : cert.image;
    link.download = `${cert.title.replace(/\s+/g, '_')}_Certificate.${cert.type === 'pdf' ? 'pdf' : 'jpg'}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (filteredCertificates.length === 0 && searchQuery !== "") return null;

  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-emoji">📜</span>
          <span className="title-text">Official Credentials & Certifications</span>
        </h2>

        <div className="certificates-grid">
          {filteredCertificates.map((cert, index) => (
            <div key={index} className="certificate-card glass-morphism" onClick={() => openGallery(cert)}>
              <div className="certificate-image-container">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="certificate-img"
                  style={{
                    transform: `${cert.initialRotation ? `rotate(${cert.initialRotation}deg)` : ''} ${cert.initialScale ? `scale(${cert.initialScale})` : ''}`.trim() || 'none'
                  }}
                />
                <div className="card-actions">
                  <button className="action-btn view-btn">🔍 View</button>
                  <button className="action-btn download-btn" onClick={(e) => handleDownload(e, cert)}>📥 Save</button>
                </div>
              </div>
              <div className="certificate-info">
                <span className="issuer">{cert.issuer}</span>
                <h3>{cert.title}</h3>
                <div className={`cert-type-badge ${cert.type === 'pdf' ? 'pdf' : ''}`}>
                  {cert.type === 'pdf' ? 'Official Document' : 'Certified Professional'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GALLERY MODAL */}
      {selectedCertIndex !== null && (
        <div className="cert-modal-overlay" onClick={closeGallery}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header">
              <div className="cert-modal-controls">
                {certificatesData[selectedCertIndex].type !== 'pdf' && (
                  <button className="cert-control-btn" onClick={() => setRotation(r => (r + 90) % 360)}>🔄 Rotate</button>
                )}
                <button className="cert-control-btn download-highlight" onClick={(e) => handleDownload(e, certificatesData[selectedCertIndex])}>
                   📥 Download Now
                </button>
              </div>
              <button className="cert-modal-close" onClick={closeGallery}>✕</button>
            </div>

            <div className="cert-modal-body">
              <button className="cert-nav-btn prev" onClick={() => navigate('prev')}>❮</button>
              <div className="cert-image-display">
                {certificatesData[selectedCertIndex].type === 'pdf' ? (
                  <div className="pdf-preview-box advanced">
                    <div className="pdf-icon-floating">📄</div>
                    <h4>{certificatesData[selectedCertIndex].title}</h4>
                    <p>Official high-resolution document verified by {certificatesData[selectedCertIndex].issuer}</p>
                    <div className="modal-actions-container">
                      <a
                        href={certificatesData[selectedCertIndex].file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pdf-open-btn primary"
                      >
                         🚀 Open in Viewer
                      </a>
                      <button className="pdf-open-btn secondary" onClick={(e) => handleDownload(e, certificatesData[selectedCertIndex])}>
                         📥 Save Offline
                      </button>
                    </div>
                  </div>
                ) : (
                  <img src={certificatesData[selectedCertIndex].image} alt="" className="modal-cert-img" style={{ transform: `rotate(${rotation}deg) scale(${certificatesData[selectedCertIndex].initialScale || 1})` }} />
                )}
              </div>
              <button className="cert-nav-btn next" onClick={() => navigate('next')}>❯</button>
            </div>

            <div className="cert-modal-footer">
              <span className="modal-issuer">{certificatesData[selectedCertIndex].issuer}</span>
              <h3>{certificatesData[selectedCertIndex].title}</h3>
              <p>{certificatesData[selectedCertIndex].description}</p>
              <div className="cert-counter">{selectedCertIndex + 1} / {certificatesData.length}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;