import { useEffect } from 'react';
import gsap from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';

gsap.registerPlugin(CSSRulePlugin);

export const useAnimations = () => {
  useEffect(() => {
    gsap.from('.hero-title', {
      opacity: 0,
      y: 30,
      duration: 1.2,
      ease: 'power3.out',
    });

    gsap.from('.hero-subtitle', {
      opacity: 0,
      y: 20,
      duration: 1.4,
      delay: 0.3,
      ease: 'power3.out',
    });
  }, []);

  const triggerPageBreak = () => {
    const particleCount = 200;
    const body = document.body;

    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100vw';
    container.style.height = '100vh';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '9999';
    body.appendChild(container);

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = '4px';
      particle.style.height = '4px';
      particle.style.background = '#3effbe'; // your base color
      particle.style.borderRadius = '50%';
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.left = `${Math.random() * 100}vw`;
      container.appendChild(particle);

      const angle = Math.random() * Math.PI * 2;
      const radius = 300 + Math.random() * 300;

      gsap.to(particle, {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        onComplete: () => {
          particle.remove();
        },
      });
    }

    setTimeout(() => {
      container.remove();
    }, 1500);
  };

  return {
    triggerPageBreak,
  };
};
