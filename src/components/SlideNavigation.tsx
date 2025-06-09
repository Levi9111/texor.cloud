import right from '/icons/right-icom.png';
import left from '/icons/left-icon.png';
// import mobileNavigation from '/icons/mobile-navigation.png';

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
  showIndicators = true,
}: SlideNavigationProps) => {
  const handlePrevious = () => {
    setCurrentSlide(Math.max(current - 1, 0));
  };

  const handleNext = () => {
    setCurrentSlide(Math.min(current + 1, totalSlides - 1));
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 w-full flex items-center justify-center gap-4 pb-4  z-50 pointer-events-none">
      <div className="flex items-center gap-4 pointer-events-auto">
        {/* Previous Button */}
        <button
          className="size-12 rounded-full bg-accent/40 border border-accent backdrop-blur-md flex items-center justify-center text-foreground hover:bg-accent/60 transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handlePrevious}
          disabled={current === 0}
          aria-label="Previous slide"
        >
          <img src={left} alt="Previous slide" width={20} height={20} />
        </button>

        {/* Slide Indicators */}
        {showIndicators && (
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }, (_, i) => {
              const isActive = i === current;
              return (
                <button
                  key={i}
                  onClick={() => handleIndicatorClick(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 transform
            ${
              isActive
                ? 'bg-accent shadow-[0_0_6px_2px_rgba(255,255,255,0.5)] scale-125'
                : 'bg-white/20 hover:bg-white/30'
            }
            hover:scale-110`}
                />
              );
            })}
          </div>
        )}

        {/* Next Button */}
        <button
          className="size-12 rounded-full bg-accent/40 border border-accent backdrop-blur-md flex items-center justify-center text-foreground hover:bg-accent/60 transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleNext}
          disabled={current === totalSlides - 1}
          aria-label="Next slide"
        >
          <img src={right} alt="Next slide" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default SlideNavigation;
