import { useState } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import Carousel from './components/CarouselSlider';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import { AnimatePresence } from 'framer-motion';
import SlideNavigation from './components/SlideNavigation';
import AudioPlayer from './components/AudioPlayer';
import CoverPage from './components/CoverPage';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [goWebsite, setGoWebsite] = useState(false);
  const [goCoverPage, setGoCoverPage] = useState(false);
  const [direction, setDirection] = useState(0);

  const handleSlideChange = (nextSlide: number) => {
    const newDirection = nextSlide > currentSlide ? 1 : -1;
    setDirection(newDirection);
    setCurrentSlide(nextSlide);
  };

  return (
    <div>
      <AnimatePresence>
        {!goCoverPage && !goWebsite && <Home setGoCoverPage={setGoCoverPage} />}
      </AnimatePresence>

      {!goWebsite && goCoverPage && <CoverPage setGoWebsite={setGoWebsite} />}

      {goWebsite && (
        <div className="relative w-full min-h-screen overflow-x-hidden">
          <Navbar onNavigate={handleSlideChange} currentSlide={currentSlide} />
          <BackgroundVideo />

          <AudioPlayer autoPlay={true} />

          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <Carousel
              current={currentSlide}
              direction={direction}
              onNavigation={handleSlideChange}
            />

            <SlideNavigation
              current={currentSlide}
              setCurrentSlide={handleSlideChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
