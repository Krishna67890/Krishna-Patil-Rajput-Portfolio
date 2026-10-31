import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useGsapAnimations = (ref) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Section Entrance - Smooth & Cinematic
      const heroTl = gsap.timeline();
      heroTl.from('.hero-left', {
        y: -60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      })
      .from('.hero-right', {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.8')
      .from('.hero-badge, .hero-title, .hero-description, .hero-buttons', {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'back.out(1.4)',
        clearProps: 'all'
      }, '-=0.6');

      // Universal Section Animation - Smooth Entry
      const sections = gsap.utils.toArray('section');
      sections.forEach(section => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 95%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          y: 30,
          duration: 1,
          ease: 'power2.out',
          clearProps: 'all'
        });
      });

      // Advanced Stagger for Cards - Elegant Fade & Rise
      const cardSelectors = [
        '.project-card',      // General project cards
        '.hack-card',         // Hackathon cards
        '.background-card',   // Journey cards
        '.certificate-card',  // Certificate cards
        '.menu-card'          // Game menu cards
      ];

      cardSelectors.forEach(selector => {
        const elements = gsap.utils.toArray(selector);
        if (elements.length > 0) {
          gsap.from(elements, {
            scrollTrigger: {
              trigger: elements[0],
              start: 'top 92%',
            },
            y: 40,
            opacity: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: 'power2.out',
            clearProps: 'all'
          });
        }
      });

      // Interactive Skills Reveal
      const skillItems = gsap.utils.toArray('.skill-item-advanced');
      if (skillItems.length > 0) {
        gsap.from(skillItems, {
          scrollTrigger: {
            trigger: '#skills',
            start: 'top 85%',
          },
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          stagger: {
            each: 0.04,
            from: 'start'
          },
          ease: 'back.out(1.5)',
          clearProps: 'all'
        });
      }

      // Floating Photo Animation
      const photoCircle = document.querySelector('.photo-circle');
      if (photoCircle) {
        gsap.to(photoCircle, {
          y: -15,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }
    }, ref);

    // Refresh ScrollTrigger on load, resize & after 400ms delay to prevent blank sections on page refresh
    const handleRefresh = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', handleRefresh);
    window.addEventListener('resize', handleRefresh);

    const refreshTimer = setTimeout(handleRefresh, 400);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener('load', handleRefresh);
      window.removeEventListener('resize', handleRefresh);
      ctx.revert();
    };
  }, [ref]);
};

export default useGsapAnimations;