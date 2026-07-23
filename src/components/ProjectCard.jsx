import React, { useState, useEffect, useCallback } from 'react';
import './ProjectCard.css';
import { usePortfolioVoice } from '../Hooks/usePortfolioVoice';

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const { speak, stop } = usePortfolioVoice();

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const images = project.screenshots || [project.image];

  const nextSlide = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const closeModal = useCallback((e) => {
    if (e) e.stopPropagation();
    setIsModalOpen(false);
    stop();
  }, [stop]);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') closeModal();
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, nextSlide, prevSlide, closeModal]);

  const onModalTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onModalTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientY);

  const onModalTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipeUp = distance > 150;
    const isSwipeDown = distance < -150;
    if (isSwipeUp || isSwipeDown) closeModal();
  };

  useEffect(() => {
    if (images.length <= 1 || isModalOpen) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, isModalOpen]);

  const openModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
    speak(`Viewing full screen images for ${project.title}`);
  };

  const handleMouseEnter = () => {
    if (isModalOpen) return;
    const tech = project.tech ? `Built with ${project.tech}.` : "";
    const description = project.narration || project.description;
    speak(`${project.title}. ${description} ${tech}`);
  };

  const handleMouseMove = (e) => {
    if (!isModalOpen) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const x = (clientY - innerHeight / 2) / (innerHeight / 2) * 10; // Max 10deg
    const y = (clientX - innerWidth / 2) / (innerWidth / 2) * -10; // Max 10deg

    setRotate({ x, y });
  };

  const resetRotation = () => setRotate({ x: 0, y: 0 });

  return (
    <>
      <div
        className="project-card glass-morphism"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={stop}
      >
        <div
          className="card-slider"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onClick={openModal}
        >
          <div className="slider-wrapper" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
            {images.map((img, index) => (
              <div key={index} className="slide">
                <img src={img} alt={`${project.title} screenshot ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>

          <div className="view-overlay">
            <span>🔍 View Gallery</span>
          </div>

          {images.length > 1 && (
            <>
              <button className="slider-btn prev" onClick={prevSlide}>❮</button>
              <button className="slider-btn next" onClick={nextSlide}>❯</button>
              <div className="slider-dots">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                  ></span>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="card-content">
          <h3 className="card-title">{project.title}</h3>
          <p className="card-description">{project.description}</p>
          <div className="card-tech-stack">
            {project.tech && project.tech.split(',').map((t, i) => (
              <span key={i} className="tech-tag">{t.trim()}</span>
            ))}
          </div>
          <div className="card-links">
            {project.link && <a href={project.link} className="btn card-btn glow-btn" target="_blank" rel="noopener noreferrer">Live Demo</a>}
            {project.github && <a href={project.github} className="btn card-btn outline" target="_blank" rel="noopener noreferrer">GitHub</a>}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="project-modal-overlay"
          onClick={closeModal}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetRotation}
          onTouchStart={onModalTouchStart}
          onTouchMove={onModalTouchMove}
          onTouchEnd={onModalTouchEnd}
          style={{
            background: `radial-gradient(circle at ${((rotate.y / -10) + 1) * 50}% ${((rotate.x / 10) + 1) * 50}%, rgba(59, 130, 246, 0.15) 0%, rgba(2, 6, 23, 0.85) 70%)`
          }}
        >
          <div
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transition: rotate.x === 0 && rotate.y === 0 ? 'transform 0.5s ease' : 'none'
            }}
          >
            <div className="modal-header">
              <div className="modal-title-info">
                <h3>{project.title}</h3>
                <p>Built with: {project.tech}</p>
              </div>
              <button className="modal-close-btn" onClick={closeModal}>✕</button>
            </div>

            <div className="modal-body">
              <div className="modal-slider">
                <button className="modal-nav-btn prev" onClick={prevSlide}>❮</button>
                <div className="modal-image-container zoom-container">
                  {project.video && currentImageIndex === 0 ? (
                    <div className="video-container">
                      <iframe
                        width="100%"
                        height="100%"
                        src={project.video}
                        title={project.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <>
                      <img src={images[currentImageIndex]} alt={project.title} className="modal-image zoom-image" />
                      <div className="magnifier"></div>
                    </>
                  )}
                </div>
                <button className="modal-nav-btn next" onClick={nextSlide}>❯</button>
              </div>

              <div className="modal-sidebar">
                <div className="modal-description-box">
                  <h4>About Project</h4>
                  <p>{project.description}</p>
                </div>
                <div className="modal-image-counter">
                  <span>FRAME</span>
                  <span className="counter-num">{currentImageIndex + 1} / {images.length}</span>
                </div>
              </div>
            </div>

            <div className="modal-thumbnails-wrapper">
              <div className="modal-thumbnails">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img src={img} alt="thumbnail" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
