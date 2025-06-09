import { motion } from 'framer-motion';
import right from '/icons/right-icom.png';
import left from '/icons/left-icon.png';
import mobileNavigation from '/icons/mobile-navigation.png';

interface SlideNavigationProps {
  current: number;
  setCurrentSlide: (currentSlide: number) => void;
  totalSlides?: number;
  showIndicators?: boolean;
}

const SlideNavigation = ({
  current,
  setCurrentSlide,
  totalSlides = 8,
}: SlideNavigationProps) => {
  const handlePrevious = () => {
    setCurrentSlide(Math.max(current - 1, 0));
  };

  const handleNext = () => {
    setCurrentSlide(Math.min(current + 1, totalSlides - 1));
  };

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 pb-4 flex justify-center items-center z-50 pointer-events-none md:hidden"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 14, delay: 0.3 }}
    >
      {/* Glowing blur background */}
      <div className="absolute bottom-0 w-[200px] h-[80px] bg-[radial-gradient(circle,#3effbe66,transparent_80%)] blur-[30px] z-0" />

      {/* Button group */}
      <div className="relative z-10 flex gap-4 pointer-events-auto">
        {/* Previous */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-full bg-accent/40 border border-accent backdrop-blur-md flex items-center justify-center text-foreground shadow-[0_0_6px_rgba(62,255,190,0.4)] transition-all duration-200 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
          onClick={handlePrevious}
          disabled={current === 0}
        >
          <img src={left} alt="Previous" className="w-5 h-5" />
        </motion.button>

        {/* Center */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-full bg-accent/40 border border-accent backdrop-blur-md flex items-center justify-center text-foreground shadow-[0_0_6px_rgba(62,255,190,0.4)] transition-all duration-200 animate-pulse-glow"
        >
          <img src={mobileNavigation} alt="Navigate" className="w-5 h-5" />
        </motion.button>

        {/* Next */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-full bg-accent/40 border border-accent backdrop-blur-md flex items-center justify-center text-foreground shadow-[0_0_6px_rgba(62,255,190,0.4)] transition-all duration-200 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
          onClick={handleNext}
          disabled={current === totalSlides - 1}
        >
          <img src={right} alt="Next" className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SlideNavigation;
