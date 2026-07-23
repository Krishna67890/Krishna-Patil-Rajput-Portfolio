import React, { useEffect, useRef } from 'react';
import './EmberBackground.css';

const EmberBackground = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null, radius: 150, isPressed: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    let animationFrameId;
    let particles = [];

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 100 : 300;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        // Tiny dots as requested
        this.size = Math.random() * 1.2 + 0.3;
        // Initial velocity
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.4 + 0.1;

        const colors = [
          { r: 59, g: 130, b: 246 },   // Blue
          { r: 6, g: 182, b: 212 },    // Cyan
          { r: 168, g: 85, b: 247 },   // Purple
          { r: 255, g: 255, b: 255 },  // White subtle
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        // Add a bit of "wandering" randomness
        this.vx += (Math.random() - 0.5) * 0.02;
        this.vy += (Math.random() - 0.5) * 0.02;

        if (mouse.current.x != null) {
          let dx = mouse.current.x - this.x;
          let dy = mouse.current.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.current.radius) {
            const force = (mouse.current.radius - distance) / mouse.current.radius;
            if (mouse.current.isPressed) {
              this.vx += (dx / distance) * force * 0.4;
              this.vy += (dy / distance) * force * 0.4;
            } else {
              this.vx -= (dx / distance) * force * 0.2;
              this.vy -= (dy / distance) * force * 0.2;
            }
          }
        }

        this.x += this.vx;
        this.y += this.vy;

        // Speed limit for smoothness
        const maxSpeed = 1.5;
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > maxSpeed) {
            this.vx = (this.vx / speed) * maxSpeed;
            this.vy = (this.vy / speed) * maxSpeed;
        }

        // Wrap around screen instead of bouncing for "moving here and there" feel
        if (this.x < -10) this.x = canvas.width + 10;
        if (this.x > canvas.width + 10) this.x = -10;
        if (this.y < -10) this.y = canvas.height + 10;
        if (this.y > canvas.height + 10) this.y = -10;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseDown = () => { mouse.current.isPressed = true; };
    const handleMouseUp = () => { mouse.current.isPressed = false; };

    const connect = () => {
      const maxDistance = isMobile ? 50 : 85;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let distanceSq = dx * dx + dy * dy;

          if (distanceSq < maxDistance * maxDistance) {
            let distance = Math.sqrt(distanceSq);
            let opacity = 1 - (distance / maxDistance);
            ctx.strokeStyle = `rgba(140, 180, 255, ${opacity * 0.12})`;
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="ember-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        background: 'transparent'
      }}
    />
  );
};

export default EmberBackground;
