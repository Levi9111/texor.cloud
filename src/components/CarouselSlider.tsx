import { motion, AnimatePresence } from 'framer-motion';
import Hero from './CarouselCompoenets/Hero';
import OurMission from './CarouselCompoenets/OurMission';
import HowItWorks from './CarouselCompoenets/HowItWorks';
import Features from './CarouselCompoenets/Features';
import UseCase from './CarouselCompoenets/ExampleOfUseCase';
import WhyTextCloud from './CarouselCompoenets/WhyTextCloud';
import Roadmap from './CarouselCompoenets/RoadMap';
import Footer from './CarouselCompoenets/Footer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  <Hero key="slide1" />,
  <OurMission key="slide2" />,
  <HowItWorks key="slide3" />,
  <Features key="slide4" />,
  <UseCase key="slide5" />,
  <WhyTextCloud key="slide6" />,
  <Roadmap key="slide7" />,
  <Footer key="slide8" />,
];

interface CarouselProps {
  current: number;
  setCurrentSlide: (currentSlide: number) => void;
  direction: number;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -1000 : 1000,
    opacity: 0,
  }),
};

const Carousel = ({ current, setCurrentSlide, direction }: CarouselProps) => {
  return (
    <>
      <style>{`
        .scrollable-container {
          /* WebKit browsers (Chrome, Safari, Edge) */
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
        }

        .scrollable-container::-webkit-scrollbar {
          width: 8px;
        }

        .scrollable-container::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          margin: 10px 0;
        }

        .scrollable-container::-webkit-scrollbar-thumb {
          background: linear-gradient(
            135deg,
            rgba(38, 61, 77, 0.8) 0%,
            rgba(38, 61, 77, 0.6) 50%,
            rgba(38, 61, 77, 0.4) 100%
          );
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .scrollable-container::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(
            135deg,
            rgba(38, 61, 77, 1) 0%,
            rgba(38, 61, 77, 0.8) 50%,
            rgba(38, 61, 77, 0.6) 100%
          );
          border-color: rgba(255, 255, 255, 0.2);
          transform: scaleX(1.2);
        }

        .scrollable-container::-webkit-scrollbar-thumb:active {
          background: linear-gradient(
            135deg,
            #263d4d 0%,
            rgba(38, 61, 77, 0.9) 100%
          );
        }

        /* Firefox */
        @supports (scrollbar-width: thin) {
          .scrollable-container {
            scrollbar-width: thin;
            scrollbar-color: rgba(38, 61, 77, 0.6) rgba(0, 0, 0, 0.1);
          }
        }

        /* Modern browsers with better scrollbar support */
        @supports (scrollbar-gutter: stable) {
          .scrollable-container {
            scrollbar-gutter: stable;
          }
        }
      `}</style>

      <div className="relative w-full h-screen scrollable-container">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-full h-full"
          >
            {slides[current]}
          </motion.div>
        </AnimatePresence>

        {/* on mobile display */}
        <div className="hidden w-full sflex items-center justify-center gap-4 pb-4 absolute bottom-0">
          <button
            className="w-10 h-10 rounded-full bg-[#263D4D]/70 border border-[#263D4D] backdrop-blur-md flex items-center justify-center"
            onClick={() => setCurrentSlide(Math.max(current - 1, 0))}
          >
            <ChevronLeft />
          </button>
          <button
            className="w-10 h-10 rounded-full bg-[#263D4D]/70 border border-[#263D4D] backdrop-blur-md flex items-center justify-center"
            onClick={() =>
              setCurrentSlide(Math.min(current + 1, slides.length - 1))
            }
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
