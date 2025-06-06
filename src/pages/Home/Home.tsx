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
    <motion.div
      className="w-screen h-screen flex items-center justify-center relative"
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

      {/* Floating Cloud Button */}
      {!triggerBurst && (
        <motion.button
          onClick={() => setTriggerBurst(true)}
          className="relative w-[220px] h-[140px] cursor-pointer group z-10"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-full shadow-2xl border border-white/30">
            <div className="absolute -top-4 left-8 w-16 h-16 bg-white/15 rounded-full"></div>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white/20 rounded-full"></div>
            <div className="absolute -top-4 right-8 w-14 h-14 bg-white/15 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-white">
            <div className="text-xl font-[500] leading-tight text-center">
              Build What's
              <br />
              <span className="text-2xl font-[700] text-accent">Next</span>
            </div>
          </div>
        </motion.button>
      )}

      <div className="absolute bottom-10 w-full text-center z-10">
        <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-extrabold uppercase text-transparent bg-clip-text stroke-text">
          AI-Native Automation <br /> Infrastructure
        </h1>
      </div>
    </motion.div>
  );
}

export default Home;
