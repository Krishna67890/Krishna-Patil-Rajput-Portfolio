import React, { useEffect, useRef } from 'react';
import './EmberBackground.css';

const EmberBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // Increased particle count for a richer "dust" feel
    const particleCount = 80;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    class Particle {
      constructor() {
        this.init();
      }

      init() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        // Parallax depth
        this.z = Math.random() * 1 + 0.5;
        this.size = (Math.random() * 2 + 0.8) * this.z;

        // Drift physics: Both upward and downward drifting for a "floating in space" feel
        this.speedX = (Math.random() - 0.5) * 0.4 * this.z;
        this.speedY = (Math.random() - 0.5) * 0.6 * this.z;

        this.opacity = 0;
        this.maxOpacity = (Math.random() * 0.5 + 0.3) / (this.z * 0.5 + 0.5);
        this.fadeSpeed = Math.random() * 0.003 + 0.001;
        this.growing = true;

        // One Piece Bounty / Cyberpunk Ember Palette: Dark Red, Orange, Soft Amber
        const colors = [
          { r: 139, g: 0, b: 0 },     // Dark Red
          { r: 204, g: 0, b: 0 },     // Mid Red
          { r: 255, g: 69, b: 0 },    // Orange Red
          { r: 255, g: 140, b: 0 },   // Dark Orange
          { r: 255, g: 191, b: 0 },   // Amber
          { r: 255, g: 215, b: 0 }    // Soft Gold
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Smooth opacity pulse
        if (this.growing) {
          this.opacity += this.fadeSpeed;
          if (this.opacity >= this.maxOpacity) this.growing = false;
        } else {
          this.opacity -= this.fadeSpeed;
          if (this.opacity <= 0) {
            this.init();
            this.y = canvas.height + 10; // Respawn at bottom
          }
        }

        // Screen wrap/reset
        if (this.x < -20) this.x = canvas.width + 20;
        if (this.x > canvas.width + 20) this.x = -20;
        if (this.y < -20) {
           this.growing = false; // Trigger fade out if reaches top
        }
      }

      draw() {
        ctx.beginPath();
        // Glowing radial gradient for each "ember"
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 3
        );

        const colorStr = `${this.color.r}, ${this.color.g}, ${this.color.b}`;
        gradient.addColorStop(0, `rgba(${colorStr}, ${this.opacity})`);
        gradient.addColorStop(0.4, `rgba(${colorStr}, ${this.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(${colorStr}, 0)`);

        ctx.fillStyle = gradient;
        // Circular ember nodes
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Add a tiny core for brighter sparkles
        if (this.opacity > 0.3) {
            ctx.beginPath();
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.5})`;
            ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
            ctx.fill();
        }
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    initParticles();

    const animate = () => {
      // Clear with slight trailing could be added here for motion blur,
      // but pure clear is cleaner for dust.
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="ember-canvas" aria-hidden="true" />;
};

export default EmberBackground;
