import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CoverVideo from '../../components/CoverVideo';

interface HomeProps {
  setGoCoverPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const inspiringMessages = [
  'Loading...',
  'Initializing Intelligence...',
  'Calibrating Innovation...',
  'Embrace the Future of AI-Native Automation',
];

function Home({ setGoCoverPage }: HomeProps) {
  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState(inspiringMessages[0]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_messageIndex, setMessageIndex] = useState(0);
  const [triggerBurst, setTriggerBurst] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Rotate through loading messages
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => {
        const nextIndex = (prev + 1) % inspiringMessages.length;
        setLoadingMessage(inspiringMessages[nextIndex]);
        return nextIndex;
      });
    }, 2500);

    // End loading after 10 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval);
      setLoading(false);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  // Particle burst effect
  useEffect(() => {
    if (!triggerBurst || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const particles = Array.from({ length: 150 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 6 + 2;
      return {
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        radius: Math.random() * 4 + 2,
      };
    });

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
        setGoCoverPage(true);
      }
    };

    animate();
  }, [triggerBurst, setGoCoverPage]);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50" />

        <div className="absolute inset-0 z-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                background: `linear-gradient(45deg, #3EFFBE, #00D4AA, #4FFFCF)`,
                boxShadow: `0 0 ${
                  4 + Math.random() * 8
                }px rgba(62, 255, 190, 0.6)`,
                filter: 'blur(0.5px)',
              }}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                ],
                opacity: [0, 0.8, 0.4, 0.9, 0],
                scale: [0, 1, 1.2, 0.8, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: 'easeInOut',
                times: [0, 0.25, 0.5, 0.75, 1],
              }}
            />
          ))}

          {/* Add some larger, slower moving particles for depth */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`large-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${6 + Math.random() * 8}px`,
                height: `${6 + Math.random() * 8}px`,
                background: `radial-gradient(circle, rgba(62, 255, 190, 0.4), rgba(62, 255, 190, 0.1))`,
                boxShadow: `0 0 ${
                  8 + Math.random() * 12
                }px rgba(62, 255, 190, 0.3)`,
                border: '1px solid rgba(62, 255, 190, 0.2)',
              }}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                ],
                opacity: [0, 0.6, 0.3, 0.7, 0],
                scale: [0, 1.2, 0.8, 1.4, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 12 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: 'easeInOut',
                times: [0, 0.3, 0.6, 0.8, 1],
              }}
            />
          ))}

          {/* Add some connecting lines between particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute"
              style={{
                width: '1px',
                height: `${20 + Math.random() * 60}px`,
                background: `linear-gradient(to bottom, transparent, rgba(62, 255, 190, 0.3), transparent)`,
                transformOrigin: 'top',
              }}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
                scaleY: 0,
                rotate: Math.random() * 360,
              }}
              animate={{
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                ],
                opacity: [0, 0.4, 0.1, 0.5, 0],
                scaleY: [0, 1, 0.7, 1.2, 0],
                rotate: [Math.random() * 360, Math.random() * 360 + 180],
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
        <div className="relative z-10 text-center px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={loadingMessage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
                {loadingMessage}
              </h1>
              <motion.div
                className="flex justify-center mt-6 space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-accent rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 2px #c0c3c2;
          text-stroke: 2px #c0c3c2;
          color: transparent;
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
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-20"
        />
        <div className="flex flex-col items-center justify-center flex-1 relative z-10 -translate-y-8">
          {!triggerBurst && (
            <motion.button
              onClick={() => setTriggerBurst(true)}
              className="relative cursor-pointer group"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-[180px] h-[180px] border border-accent rounded-full flex flex-col items-center justify-center text-[#bfc2c1] font-[650] text-xl uppercase text-center leading-tight tracking-wide">
                Build
                <br />
                What's
                <br />
                Next
              </div>
            </motion.button>
          )}
        </div>

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
