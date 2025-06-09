import { motion } from 'framer-motion';
import clsx from 'clsx';

import featuresNavigationActive from '/icons/navigation-icons/features-navigation-active.png';
import footerNavigationActive from '/icons/navigation-icons/footer-navigation-active.png';
import homeNavigationActive from '/icons/navigation-icons/home-navigation-active.png';
import ourMissionNavigationActive from '/icons/navigation-icons/our-mission-navigation-active.png';
import howItWorksNavigationActive from '/icons/navigation-icons/how-it-works-navigation-active.png';
import roadmapNavigationActive from '/icons/navigation-icons/roadmap-navigation-active.png';
import useCasesNavigationActive from '/icons/navigation-icons/use-cases-navigation-active.png';
import whyTexorNavigationActive from '/icons/navigation-icons/why-texor-navigation-active.png';

const icons = [
  {
    icon: homeNavigationActive,
    title: 'Turn Logic Into Action <br /> With No-Code AI Agents',
    navigation: 0,
  },
  { icon: ourMissionNavigationActive, title: 'Our Mission', navigation: 1 },
  { icon: howItWorksNavigationActive, title: 'How it works', navigation: 2 },
  {
    icon: featuresNavigationActive,
    title: 'What can you do with texor.cloud',
    navigation: 3,
  },
  { icon: useCasesNavigationActive, title: 'Example use cases', navigation: 4 },
  { icon: whyTexorNavigationActive, title: 'Why texor.cloud', navigation: 5 },
  { icon: roadmapNavigationActive, title: 'Roadmap', navigation: 6 },
  { icon: footerNavigationActive, title: 'Stay Connected', navigation: 7 },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 14,
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.25 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FloatingButtons = ({
  current,
  setCurrentSlide,
  setShowFloatingButtons,
}: {
  current: number;
  setCurrentSlide: (slide: number) => void;
  setShowFloatingButtons: (show: boolean) => void;
}) => {
  console.log(current);

  return (
    <>
      <motion.section
        className="fixed top-10 left-0 w-screen h-screen bg-background z-[100] md:hidden flex items-center justify-center"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
      >
        <motion.div
          className="grid grid-cols-2 gap-x-6 gap-y-8 px-4"
          variants={containerVariants}
        >
          {icons.map((item, index) => (
            <motion.div
              key={index}
              className={clsx(
                (index === 0 || index === 6) && '-translate-x-12',
                (index === 1 || index === 7) && 'translate-x-12',
                (index === 2 || index === 4) && '-translate-x-18',
                (index === 3 || index === 5) && 'translate-x-18'
              )}
              variants={itemVariants}
              onClick={() => setCurrentSlide(item.navigation)}
              aria-label={`Navigate to ${item.title}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setCurrentSlide(item.navigation);
                }
              }}
            >
              <div className="relative flex flex-col items-center text-center group cursor-pointer hover:scale-105 transition-all duration-300">
                <p
                  className={clsx(
                    'absolute text-[11px] text-white text-center font-semibold leading-[130%] tracking-tight transition-all duration-300 group-hover:text-[#3EFFBE]',
                    index === 0 ? '-top-12' : '-top-6',
                    'w-28'
                  )}
                >
                  {item.title.split('<br />').map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <button
                  className="icon-container w-12 h-12 rounded-full border border-accent flex items-center justify-center mb-2 transition-all duration-300"
                  onClick={() => setShowFloatingButtons(false)}
                >
                  <img
                    src={item.icon}
                    alt={`Icon ${index}`}
                    width={24}
                    height={24}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
};

export default FloatingButtons;
