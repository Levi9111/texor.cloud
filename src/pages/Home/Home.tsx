import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import CoverVideo from '../../components/CoverVideo';

interface HomeProps {
  setGoWebsite: React.Dispatch<React.SetStateAction<boolean>>;
}

function Home({ setGoWebsite }: HomeProps) {
  const [triggerBurst, setTriggerBurst] = useState(false);
  const [loading, setLoading] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Initial loading state
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Particle burst logic
  useEffect(() => {
    if (!triggerBurst || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      radius: number;
    }[] = [];

    for (let i = 0; i < 120; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const speed = Math.random() * 6 + 2;
      particles.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        radius: Math.random() * 4 + 2,
      });
    }

    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.02;

        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#3EFFBE';
        ctx.fill();
      });

      ctx.globalAlpha = 1;

      frame++;
      if (frame < 60) {
        requestAnimationFrame(animate);
      } else {
        setGoWebsite(true);
      }
    };

    animate();
  }, [triggerBurst, setGoWebsite]);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-black text-white">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-4xl font-bold tracking-widest"
        >
          Loading...
        </motion.h1>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 2px #c0c3c2;
          text-stroke: 2px ##c0c3c2;
          color: transparent;
          background: transparent;
        }

        @media (max-width: 640px) {
          .stroke-text {
            -webkit-text-stroke: 1.5px #c0c3c2;
            text-stroke: 1.5px #c0c3c2;
          }
        }

        @media (max-width: 480px) {
          .stroke-text {
            -webkit-text-stroke: 1px #c0c3c2;
            text-stroke: 1px #c0c3c2;
          }
        }
      `}</style>

      <motion.div
        className="w-screen h-screen flex flex-col items-center justify-center relative"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <CoverVideo />

        {/* Canvas layer for particles */}
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-20"
        />

        {/* Main content area - centered */}
        <div className="flex flex-col items-center justify-center flex-1 relative z-10 -translate-y-8">
          {/* Floating Cloud Button - Properly centered */}
          {!triggerBurst && (
            <motion.button
              onClick={() => setTriggerBurst(true)}
              className="relative cursor-pointer group"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-[280px] h-[280px] border border-accent rounded-full flex flex-col items-center justify-center text-[#bfc2c1] font-[650] leading-[130%] tracking-0 text-xl uppercase">
                Build <br /> What's
                <br />
                Next
              </div>
            </motion.button>
          )}
        </div>

        {/* Bottom text with proper stroke effect */}
        <div className="absolute bottom-10 w-full text-center z-20 px-4">
          <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-extrabold uppercase stroke-text">
            AI-Native Automation <br /> Infrastructure
          </h1>
        </div>
      </motion.div>
    </>
  );
}

export default Home;
