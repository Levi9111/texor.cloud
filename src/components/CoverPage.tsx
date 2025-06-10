import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import logo from '/logo/logo.svg';
import BackgroundVideo from './BackgroundVideo';

const CoverPage = ({
  setGoWebsite,
}: {
  setGoWebsite: (value: boolean) => void;
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const createParticles = () => {
      if (!particlesRef.current) return;
      const particleCount = 50;
      const particles: HTMLDivElement[] = [];

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
          position: absolute;
          width: ${Math.random() * 4 + 1}px;
          height: ${Math.random() * 4 + 1}px;
          background: rgba(0, 245, 212, ${Math.random() * 0.5 + 0.2});
          border-radius: 50%;
          pointer-events: none;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          box-shadow: 0 0 ${Math.random() * 10 + 5}px rgba(0, 245, 212, 0.3);
        `;
        particlesRef.current.appendChild(particle);
        particles.push(particle);

        const animateParticle = () => {
          const duration = Math.random() * 20000 + 10000;
          const startX = Math.random() * window.innerWidth;
          const startY = Math.random() * window.innerHeight;
          const endX = Math.random() * window.innerWidth;
          const endY = Math.random() * window.innerHeight;

          particle.style.transform = `translate(${startX}px, ${startY}px)`;
          particle.style.transition = `transform ${duration}ms linear, opacity 2s ease-in-out`;

          setTimeout(() => {
            particle.style.transform = `translate(${endX}px, ${endY}px)`;
          }, 100);

          setTimeout(() => {
            if (particle.parentNode) {
              animateParticle();
            }
          }, duration);
        };

        setTimeout(() => animateParticle(), Math.random() * 2000);
      }

      return particles;
    };

    const initAnimations = () => {
      if (navRef.current) {
        navRef.current.style.transform = 'translateY(-100%)';
        navRef.current.style.opacity = '0';
      }
      if (titleRef.current) {
        titleRef.current.style.transform = 'translateY(50px)';
        titleRef.current.style.opacity = '0';
      }
      if (descRef.current) {
        descRef.current.style.transform = 'translateY(30px)';
        descRef.current.style.opacity = '0';
      }
      if (buttonRef.current) {
        buttonRef.current.style.transform = 'translateY(30px) scale(0.8)';
        buttonRef.current.style.opacity = '0';
      }

      setTimeout(() => {
        if (navRef.current) {
          navRef.current.style.transform = 'translateY(0)';
          navRef.current.style.opacity = '1';
          navRef.current.style.transition =
            'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)';
        }
      }, 300);

      setTimeout(() => {
        if (titleRef.current) {
          titleRef.current.style.transform = 'translateY(0)';
          titleRef.current.style.opacity = '1';
          titleRef.current.style.transition =
            'all 1s cubic-bezier(0.165, 0.84, 0.44, 1)';
        }
      }, 600);

      setTimeout(() => {
        if (descRef.current) {
          descRef.current.style.transform = 'translateY(0)';
          descRef.current.style.opacity = '1';
          descRef.current.style.transition =
            'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)';
        }
      }, 900);

      setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.style.transform = 'translateY(0) scale(1)';
          buttonRef.current.style.opacity = '1';
          buttonRef.current.style.transition =
            'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        }
      }, 1200);
    };

    const particles = createParticles();
    initAnimations();

    return () => {
      particles?.forEach((particle) => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);

  const performExitAnimation = () => {
    setIsExiting(true);
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'scale(1.5) rotate(180deg)';
      buttonRef.current.style.opacity = '0';
      buttonRef.current.style.transition =
        'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    }

    // const lightBurst = document.createElement('div');
    // lightBurst.style.cssText = `
    //   position: fixed;
    //   left: 50%;
    //   top: 60%;
    //   width: 10px;
    //   height: 10px;
    //   background: radial-gradient(circle, rgba(0, 245, 212, 0.8) 0%, rgba(0, 245, 212, 0.3) 30%, transparent 70%);
    //   border-radius: 50%;
    //   transform: translate(-50%, -50%) scale(0);
    //   pointer-events: none;
    //   z-index: 50;
    //   animation: light-burst 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    // `;
    // document.body.appendChild(lightBurst);

    setTimeout(() => {
      if (descRef.current) {
        descRef.current.style.transform = 'translateY(-50px) scale(0.8)';
        descRef.current.style.opacity = '0';
        descRef.current.style.filter = 'blur(10px)';
        descRef.current.style.transition =
          'all 0.6s cubic-bezier(0.55, 0.06, 0.68, 0.19)';
      }
    }, 200);

    setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.style.transform = 'translateY(-80px) scale(1.1)';
        titleRef.current.style.opacity = '0';
        titleRef.current.style.filter = 'blur(20px)';
        titleRef.current.style.transition =
          'all 0.8s cubic-bezier(0.55, 0.06, 0.68, 0.19)';
      }
    }, 400);

    setTimeout(() => {
      if (navRef.current) {
        navRef.current.style.transform = 'translateY(-100%) scale(0.9)';
        navRef.current.style.opacity = '0';
        navRef.current.style.transition =
          'all 0.6s cubic-bezier(0.55, 0.06, 0.68, 0.19)';
      }
    }, 600);

    setTimeout(() => {
      if (particlesRef.current) {
        const particles = particlesRef.current.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
          const htmlParticle = particle as HTMLElement;
          const delay = index * 20;
          const angle = (index / particles.length) * Math.PI * 2;
          const distance = Math.random() * 2000 + 1000;
          const x = Math.cos(angle) * distance;
          const y = Math.sin(angle) * distance;

          setTimeout(() => {
            htmlParticle.style.transform = `translate(${x}px, ${y}px) scale(3)`;
            htmlParticle.style.opacity = '0';
            htmlParticle.style.transition =
              'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          }, delay);
        });
      }
    }, 300);

    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.transform = 'scale(1.2)';
        containerRef.current.style.opacity = '0';
        containerRef.current.style.filter = 'blur(30px)';
        containerRef.current.style.transition =
          'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      }
    }, 800);

    setTimeout(() => {
      // if (lightBurst.parentNode) {
      //   lightBurst.parentNode.removeChild(lightBurst);
      // }
      setGoWebsite(true);
    }, 1800);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || isExiting) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    if (titleRef.current) {
      const moveX = (x - 0.5) * 10;
      const moveY = (y - 0.5) * 10;
      titleRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
  };

  return (
    <section
      ref={containerRef}
      className={`relative flex flex-col items-center w-full min-h-screen h-max pb-10 overflow-hidden ${
        isExiting ? 'pointer-events-none' : ''
      }`}
      onMouseMove={handleMouseMove}
    >
      <BackgroundVideo />

      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,245,212,0.03) 0%, transparent 70%)',
        }}
      />

      <div
        className="absolute inset-0 opacity-10 pointer-events-none z-[1]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,245,212,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,212,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite',
        }}
      />

      <nav
        ref={navRef}
        className="absolute top-0 left-0 w-full h-[100px] bg-background flex items-center justify-center md:justify-start px-4 md:px-8 z-10"
        style={{
          background: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0, 245, 212, 0.1)',
        }}
      >
        <div className="flex items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-105">
          <img
            src={logo}
            alt="Texor Logo"
            width={40}
            height={40}
            className="drop-shadow-lg"
          />
          <p className="uppercase text-2xl leading-[1.5] tracking-tight font-[750] transition-colors duration-300">
            texor.cloud
          </p>
        </div>
      </nav>

      <h1
        ref={titleRef}
        className="text-4xl md:text-[88px] font-[750] text-foreground leading-[120%] md:leading-[100%] tracking-0 md:tracking-[-3%] text-center mt-[190px] relative z-[5]"
      >
        Build and Run Real <br className="break" /> AI Agents
      </h1>

      <p
        ref={descRef}
        className="text-[15px] md:text-2xl text-muted text-center font-[400] mt-3 md:mt-6 mb-20 leading-[170%] md:leading-150 tracking-0 relative z-[5]"
      >
        Texor.Cloud lets you build real AI agents that automate tasks across
        apps,
        <br className="break" /> data, and blockchains. You can create logic,
        connect models, and deploy
        <br className="break" /> agents without writing code or setting up any
        infrastructure.
      </p>

      <button
        ref={buttonRef}
        onClick={performExitAnimation}
        disabled={isExiting}
        className="
          w-16 h-16  
          rounded-full border border-accent 
          flex items-center justify-center cursor-pointer 
          transition-all duration-300
          relative z-[5] overflow-hidden
          disabled:cursor-not-allowed
        "
        style={{ boxShadow: 'none' }}
      >
        <ArrowRight className="text-accent relative z-10" size={28} />
      </button>
    </section>
  );
};

export default CoverPage;
