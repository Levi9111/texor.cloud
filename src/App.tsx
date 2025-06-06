import { useState, useEffect, useRef, useCallback } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import Carousel from './components/CarouselSlider';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import { AnimatePresence } from 'framer-motion';

const MAX_SLIDES = 7;
const THROTTLE_TIME = 800;

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [goWebsite, setGoWebsite] = useState(false);
  const [direction, setDirection] = useState(0);

  const throttleRef = useRef(false);
  const firstScrollDoneRef = useRef(false);

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (window.innerWidth <= 768 || throttleRef.current) return;

      const isScrollingDown = e.deltaY > 0;
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 5;
      const atTop = window.scrollY <= 5;

      if (!firstScrollDoneRef.current && isScrollingDown) {
        firstScrollDoneRef.current = true;
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        throttleRef.current = true;
        setTimeout(() => (throttleRef.current = false), THROTTLE_TIME);
        return;
      }

      // Change slides only if we are at scroll bottom or top
      if (isScrollingDown && atBottom && currentSlide < MAX_SLIDES) {
        setDirection(1);
        setCurrentSlide((prev) => prev + 1);
      } else if (!isScrollingDown && atTop && currentSlide > 0) {
        setDirection(-1);
        setCurrentSlide((prev) => prev - 1);
      }

      throttleRef.current = true;
      setTimeout(() => {
        throttleRef.current = false;
      }, THROTTLE_TIME);
    },
    [currentSlide]
  );

  useEffect(() => {
    if (!goWebsite) return;

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [goWebsite, handleWheel]);

  return (
    <>
      <AnimatePresence>
        {!goWebsite && <Home setGoWebsite={setGoWebsite} />}
      </AnimatePresence>

      {goWebsite && (
        <div className="relative w-full min-h-screen overflow-x-hidden">
          <Navbar onNavigate={setCurrentSlide} />
          <BackgroundVideo />
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <Carousel
              current={currentSlide}
              direction={direction}
              setCurrentSlide={setCurrentSlide}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
