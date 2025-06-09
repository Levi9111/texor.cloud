import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '/logo/logo.svg';

const tags = [
  { title: 'Our mission', slide: 1 },
  { title: 'How it works', slide: 2 },
  { title: 'Features', slide: 3 },
  { title: 'Why Texor.Cloud', slide: 4 },
  { title: 'Roadmap', slide: 6 },
];

interface NavbarProps {
  onNavigate: (index: number) => void;
  currentSlide: number;
}

const Navbar = ({ onNavigate, currentSlide }: NavbarProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const getActiveStyles = (index: number) => {
    const isActive = currentSlide === index;
    return isActive
      ? 'text-accent after:w-full'
      : 'text-muted hover:text-accent hover:after:w-full';
  };

  const getMobileActiveStyles = (index: number) => {
    const isActive = currentSlide === index;
    return isActive
      ? 'text-accent font-semibold'
      : 'text-white hover:text-accent';
  };

  return (
    <>
      <nav className="base-width h-[63px] pt-11  flex items-center justify-between relative z-40 mb-[60px]">
        {/* Logo */}
        <div
          className={`flex items-center justify-center gap-3 cursor-pointer transition-all duration-300 ${
            currentSlide === 0 ? 'scale-105' : 'hover:scale-105'
          }`}
          onClick={() => onNavigate(0)}
        >
          <img
            src={logo}
            alt="Texor Logo"
            width={40}
            height={40}
            className="drop-shadow-lg"
          />
          <p
            className={`uppercase text-2xl leading-150 tracking-0 font-[750] transition-colors duration-300 ${
              currentSlide === 0 ? 'text-accent' : 'text-white'
            }`}
          >
            texor.cloud
          </p>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          {tags.map((tag) => (
            <li
              key={tag.title}
              onClick={() => onNavigate(tag.slide)}
              className={`text-xl leading-150 tracking-0 font-[400] transition-all duration-300 cursor-pointer relative z-20 
                after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300
                ${getActiveStyles(tag.slide)}`}
            >
              {tag.title}
            </li>
          ))}
        </ul>

        {/* Docs button */}
        <button
          className="group hidden md:flex w-[183px] h-[63px] rounded-full border-2 border-accent text-[22px] font-[400] leading-[140%] tracking-0 cursor-pointer hover:bg-accent text-muted hover:text-background transition-all duration-300 shadow-sm hover:shadow-xl hover:scale-105 relative overflow-hidden items-center justify-center gap-8 uppercase"
          style={{ transform: 'scale(0.95)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              '0 0 20px rgba(62, 255, 190, 0.5), inset 0 0 20px rgba(62, 255, 190, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '';
          }}
        >
          Docs
        </button>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden flex flex-col gap-[5px] cursor-pointer"
          onClick={() => setDrawerOpen(true)}
        >
          <span className="w-6 h-[3px] bg-white rounded-full transition-all duration-300" />
          <span className="w-6 h-[3px] bg-white rounded-full transition-all duration-300" />
          <span className="w-6 h-[3px] bg-white rounded-full transition-all duration-300" />
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 right-0 w-[80%] h-full bg-black/90 z-50 p-8 backdrop-blur-lg flex flex-col gap-8"
          >
            <button
              onClick={() => setDrawerOpen(false)}
              className="self-end text-white text-2xl hover:text-accent transition-colors duration-300"
            >
              ✕
            </button>
            <ul className="flex flex-col gap-6 mt-8">
              {tags.map((tag) => (
                <li
                  key={tag.title}
                  onClick={() => {
                    onNavigate(tag.slide);
                    setDrawerOpen(false);
                  }}
                  className={`text-xl font-medium cursor-pointer transition-all duration-300 relative
                    ${getMobileActiveStyles(tag.slide)}
                    ${
                      currentSlide === tag.slide
                        ? 'pl-4 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-accent before:rounded-full'
                        : ''
                    }
                  `}
                >
                  {tag.title}
                </li>
              ))}
              <li>
                <button className="mt-6 w-full h-[50px] rounded-full border-2 border-accent text-[20px] font-[400] tracking-0 cursor-pointer hover:bg-accent text-white hover:text-background transition-colors duration-300 shadow-md">
                  Docs
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
