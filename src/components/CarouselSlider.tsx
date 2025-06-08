import { motion, AnimatePresence } from 'framer-motion';
import Hero from './CarouselCompoenets/Hero';
import OurMission from './CarouselCompoenets/OurMission';
import HowItWorks from './CarouselCompoenets/HowItWorks';
import Features from './CarouselCompoenets/Features';
import UseCase from './CarouselCompoenets/ExampleOfUseCase';
import WhyTextCloud from './CarouselCompoenets/WhyTextCloud';
import Roadmap from './CarouselCompoenets/RoadMap';
import Footer from './CarouselCompoenets/Footer';
import { useEffect, useRef } from 'react';

const slides = [
  <Hero key="slide1" />,
  <OurMission key="slide2" />,
  <HowItWorks key="slide3" />,
  <Features key="slide4" />,
  <WhyTextCloud key="slide5" />,
  <UseCase key="slide6" />,
  <Roadmap key="slide7" />,
  <Footer key="slide8" />,
];

interface CarouselProps {
  current: number;
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

const Carousel = ({ current, direction }: CarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      window?.scrollTo({
        top: 50,
        behavior: 'smooth',
      });
    }
  }, [current]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen scrollable-container overflow-y-scroll"
    >
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
    </div>
  );
};

export default Carousel;
