import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import Hero from './CarouselCompoenets/Hero';
import OurMission from './CarouselCompoenets/OurMission';
import HowItWorks from './CarouselCompoenets/HowItWorks';
import Features from './CarouselCompoenets/Features';
import UseCase from './CarouselCompoenets/ExampleOfUseCase';
import WhyTextCloud from './CarouselCompoenets/WhyTextCloud';
import Roadmap from './CarouselCompoenets/RoadMap';
import Footer from './CarouselCompoenets/Footer';
import { useRef, useEffect } from 'react';

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

// Enhanced slide transition variants
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1200 : -1200,
    opacity: 0,
    scale: 0.9,
    rotateY: direction > 0 ? 15 : -15,
    filter: 'blur(10px)',
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    filter: 'blur(0px)',
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -1200 : 1200,
    opacity: 0,
    scale: 0.9,
    rotateY: direction > 0 ? -15 : 15,
    filter: 'blur(10px)',
  }),
};

// Initial page load animation variants
const pageLoadVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 100,
    rotateX: -20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 1.2,
      ease: [0.165, 0.84, 0.44, 1],
      staggerChildren: 0.2,
    },
  },
};

// Container reveal animation
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

// Enhanced navigation button variants with more dramatic effects
const navigationVariants = {
  hidden: {
    y: 150,
    opacity: 0,
    scale: 0.6,
    rotateX: -90,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 200,
      delay: 0.8,
      staggerChildren: 0.1,
    },
  },
};

// Individual button animation variants
const buttonVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotateZ: -180,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
  idle: {
    scale: 1,
    rotate: 0,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  hover: {
    scale: 1.15,
    rotate: 10,
    y: -8,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 400,
    },
  },
  tap: {
    scale: 0.9,
    rotate: -5,
    transition: { duration: 0.1 },
  },
};

const Carousel = ({ current, direction, onNavigation }: CarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    // Initial page reveal animation
    controls.start('visible');
  }, [controls]);

  const slides = [
    <Hero key="slide1" onNavigation={onNavigation} />,
    <OurMission key="slide2" />,
    <HowItWorks key="slide3" />,
    <Features key="slide4" />,
    <WhyTextCloud key="slide5" />,
    <UseCase key="slide6" />,
    <Roadmap key="slide7" />,
    <Footer key="slide8" />,
  ];

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full md:min-h-[863px] h-full scrollable-container overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      style={{
        perspective: '1000px',
      }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(ellipse at 20% 50%, rgba(0,245,212,0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(0,245,212,0.05) 0%, transparent 50%)',
          }}
        />

        {/* Animated grid */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,245,212,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,245,212,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </motion.div>

      {/* Slide Content with enhanced animations */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.8,
            ease: [0.165, 0.84, 0.44, 1],
            opacity: { duration: 0.6 },
            filter: { duration: 0.6 },
          }}
          className="w-full h-full overflow-hidden"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          <motion.div
            variants={pageLoadVariants}
            initial="hidden"
            animate="visible"
            className="w-full h-full"
          >
            {slides[current]}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Enhanced Navigation with dramatic entry */}
      <div className="hidden md:block absolute bottom-4 left-0 right-0 z-40 md:flex justify-center pointer-events-none">
        <motion.div
          className="flex gap-3 sm:gap-4 md:gap-6 pointer-events-auto"
          variants={navigationVariants}
          initial="hidden"
          animate="visible"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {navItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => onNavigation(index)}
              className={`
                relative size-12 sm:size-14 md:size-[60px] rounded-full border transition-all duration-500 flex items-center justify-center overflow-hidden backdrop-blur-sm
                ${
                  current === index
                    ? 'border-accent shadow-[0_0_20px_rgba(0,245,212,0.5)] bg-accent/10'
                    : 'border-accent/50 hover:border-accent/80 hover:bg-accent/5'
                }
              `}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              aria-label={`Go to slide ${index + 1}`}
              style={{
                transformOrigin: 'center',
              }}
            >
              {/* Enhanced glow effect for active state */}
              {current === index && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-full"
                  initial={{ scale: 0, opacity: 0, rotate: 0 }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.8, 0.4],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              )}

              {/* Ripple effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-full border border-accent/30"
                initial={{ scale: 1, opacity: 0 }}
                whileHover={{
                  scale: [1, 1.5],
                  opacity: [0.5, 0],
                }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />

              {/* Icon with enhanced animations */}
              <motion.img
                src={current === index ? item.active : item.default}
                alt={`Slide ${index + 1}`}
                width={24}
                height={24}
                className="object-contain relative z-10 w-6 h-6 sm:w-7 sm:h-7 md:w-[30px] md:h-[30px]"
                animate={{
                  filter:
                    current === index
                      ? 'brightness(1.3) drop-shadow(0 0 8px rgba(0,245,212,0.6))'
                      : 'brightness(1)',
                  scale: current === index ? [1, 1.1, 1] : 1,
                }}
                transition={{
                  duration: current === index ? 2 : 0.2,
                  repeat: current === index ? Infinity : 0,
                  ease: 'easeInOut',
                }}
              />

              {/* Enhanced active indicator */}
              {current === index && (
                <>
                  <motion.div
                    className="absolute -bottom-2 left-1/2 w-3 h-3 bg-accent rounded-full"
                    initial={{ scale: 0, x: '-50%' }}
                    animate={{
                      scale: [1, 1.3, 1],
                      x: '-50%',
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-2 left-1/2 w-6 h-6 border border-accent/50 rounded-full"
                    initial={{ scale: 0, x: '-50%' }}
                    animate={{
                      scale: [1, 2],
                      opacity: [0.5, 0],
                      x: '-50%',
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeOut',
                    }}
                  />
                </>
              )}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Loading transition overlay */}
      <motion.div
        className="absolute inset-0 bg-background pointer-events-none z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.div>
  );
};

export default Carousel;
