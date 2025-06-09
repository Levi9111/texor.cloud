import { motion, AnimatePresence } from 'framer-motion';
import Hero from './CarouselCompoenets/Hero';
import OurMission from './CarouselCompoenets/OurMission';
import HowItWorks from './CarouselCompoenets/HowItWorks';
import Features from './CarouselCompoenets/Features';
import UseCase from './CarouselCompoenets/ExampleOfUseCase';
import WhyTextCloud from './CarouselCompoenets/WhyTextCloud';
import Roadmap from './CarouselCompoenets/RoadMap';
import Footer from './CarouselCompoenets/Footer';
import { useRef } from 'react';

interface CarouselProps {
  current: number;
  direction: number;
  onNavigation: (index: number) => void;
}

import featuresNavigation from '/icons/navigation-icons/features-navigation.png';
import featuresNavigationActive from '/icons/navigation-icons/features-navigation-active.png';
import footerNavigation from '/icons/navigation-icons/footer-navigation.png';
import footerNavigationActive from '/icons/navigation-icons/footer-navigation-active.png';
import homeNavigation from '/icons/navigation-icons/home-navigation.png';
import homeNavigationActive from '/icons/navigation-icons/home-navigation-active.png';
import ourMissionNavigation from '/icons/navigation-icons/our-mission-navigation.png';
import ourMissionNavigationActive from '/icons/navigation-icons/our-mission-navigation-active.png';
import howItWorksNavigation from '/icons/navigation-icons/how-it-works-navigation.png';
import howItWorksNavigationActive from '/icons/navigation-icons/how-it-works-navigation-active.png';
import roadmapNavigation from '/icons/navigation-icons/roadmap-navigation.png';
import roadmapNavigationActive from '/icons/navigation-icons/roadmap-navigation-active.png';
import useCasesNavigation from '/icons/navigation-icons/use-cases-navigation.png';
import useCasesNavigationActive from '/icons/navigation-icons/use-cases-navigation-active.png';
import whyTexorNavigation from '/icons/navigation-icons/why-texor-navigation.png';
import whyTexorNavigationActive from '/icons/navigation-icons/why-texor-navigation-active.png';

const navItems = [
  { default: homeNavigation, active: homeNavigationActive },
  { default: ourMissionNavigation, active: ourMissionNavigationActive },
  { default: howItWorksNavigation, active: howItWorksNavigationActive },
  { default: featuresNavigation, active: featuresNavigationActive },
  { default: whyTexorNavigation, active: whyTexorNavigationActive },
  { default: useCasesNavigation, active: useCasesNavigationActive },
  { default: roadmapNavigation, active: roadmapNavigationActive },
  { default: footerNavigation, active: footerNavigationActive },
];

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

// Enhanced navigation button variants
const navigationVariants = {
  hidden: {
    y: 100,
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 300,
      delay: 0.3,
    },
  },
};

const buttonVariants = {
  idle: {
    scale: 1,
    rotate: 0,
    transition: { duration: 0.2 },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 },
  },
};

const Carousel = ({ current, direction, onNavigation }: CarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen h-full scrollable-container"
    >
      {/* Slide Content */}
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

      {/* Absolute Navigation - Clean positioning without background */}
      <div className="absolute -bottom-40 left-0 right-0 z-40 flex justify-center pointer-events-none h-20">
        <motion.div
          className="flex gap-3 sm:gap-4 md:gap-6 pointer-events-auto"
          variants={navigationVariants}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => onNavigation(index)}
              className={`
                  relative size-12 sm:size-14 md:size-[60px] rounded-full border transition-all duration-300 flex items-center justify-center overflow-hidden
                  ${
                    current === index
                      ? 'border-accent shadow-lg'
                      : 'border-accent/50 hover:border-accent/80'
                  }
                `}
              variants={buttonVariants}
              initial="idle"
              whileHover="hover"
              whileTap="tap"
              aria-label={`Go to slide ${index + 1}`}
            >
              {/* Subtle glow effect for active state */}
              {current === index && (
                <motion.div
                  className="absolute inset-0 bg-accent/10 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              {/* Icon */}
              <motion.img
                src={current === index ? item.active : item.default}
                alt={`Slide ${index + 1}`}
                width={24}
                height={24}
                className="object-contain relative z-10 w-6 h-6 sm:w-7 sm:h-7 md:w-[30px] md:h-[30px]"
                animate={{
                  filter:
                    current === index ? 'brightness(1.2)' : 'brightness(1)',
                }}
                transition={{ duration: 0.2 }}
              />

              {/* Active indicator dot */}
              {current === index && (
                <motion.div
                  className="absolute -bottom-1 left-1/2 w-2 h-2 bg-accent rounded-full"
                  initial={{ scale: 0, x: '-50%' }}
                  animate={{ scale: 1, x: '-50%' }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;
