import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '/logo/logo.svg';

const tags = [
  { title: 'Our mission' },
  { title: 'How it works' },
  { title: 'Features' },
  { title: 'Why Texor.Cloud' },
  { title: 'Roadmap' },
];

interface NavbarProps {
  onNavigate: (index: number) => void;
}

const Navbar = ({ onNavigate }: NavbarProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <nav className="max-w-[1488px] w-[96%] h-[63px] pt-11 mx-auto flex items-center justify-between relative z-50 mb-[60px]">
        {/* Logo */}
        <div
          className="flex items-center justify-center gap-3 cursor-pointer"
          onClick={() => onNavigate(0)}
        >
          <img
            src={logo}
            alt="Texor Logo"
            width={40}
            height={40}
            className="drop-shadow-lg"
          />
          <p className="uppercase text-2xl leading-150 tracking-0 font-[750] text-white">
            texor.cloud
          </p>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          {tags.map((tag, index) => (
            <li
              key={tag.title}
              onClick={() => onNavigate(index + 1)}
              className="text-xl leading-150 tracking-0 font-[400] text-muted transition-all duration-300 hover:text-accent cursor-pointer relative z-20 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {tag.title}
            </li>
          ))}
        </ul>

        {/* Docs button */}
        <button className="hidden md:block w-[183px] h-[63px] rounded-full border-2 border-accent text-[22px] font-[400] leading-140 tracking-0 cursor-pointer hover:bg-accent text-muted hover:text-background transition-colors duration-300 shadow-sm">
          Docs
        </button>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden flex flex-col gap-[5px] cursor-pointer"
          onClick={() => setDrawerOpen(true)}
        >
          <span className="w-6 h-[3px] bg-white rounded-full" />
          <span className="w-6 h-[3px] bg-white rounded-full" />
          <span className="w-6 h-[3px] bg-white rounded-full" />
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
              className="self-end text-white text-2xl"
            >
              ✕
            </button>
            <ul className="flex flex-col gap-6 mt-8">
              {tags.map((tag, index) => (
                <li
                  key={tag.title}
                  onClick={() => {
                    onNavigate(index + 1);
                    setDrawerOpen(false);
                  }}
                  className="text-xl text-white font-medium cursor-pointer transition-all hover:text-accent"
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
