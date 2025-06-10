import { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import infiniteCircuits from '/audio/infinite-circuits.mp3';

interface AudioPlayerProps {
  autoPlay?: boolean;
}

const AudioPlayer = ({ autoPlay = true }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.15;
    audio.loop = true;

    if (autoPlay) {
      const playAudio = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch {
          console.log('Auto-play prevented by browser');
        }
      };
      playAudio();
    }

    const showTimeout = setTimeout(() => setIsVisible(true), 1000);

    const resetFadeTimeout = () => {
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
      setIsVisible(true);
      fadeTimeoutRef.current = window.setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    document.addEventListener('mousemove', resetFadeTimeout);

    return () => {
      clearTimeout(showTimeout);
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
      document.removeEventListener('mousemove', resetFadeTimeout);
    };
  }, [autoPlay]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Audio playback error:', error);
    }
  };

  const handleMouseEnter = () => {
    setIsVisible(true);
    if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
  };

  const handleMouseLeave = () => {
    fadeTimeoutRef.current = window.setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  return (
    <>
      <audio ref={audioRef} src={infiniteCircuits} preload="auto" />

      <div
        className={`fixed bottom-4 right-4 z-50 enhanced-transition ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        } ${!isPlaying ? 'slow-bounce' : 'container-float'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="bg-black/20 backdrop-blur-md border border-[#3effbe]/20 rounded-lg sm:rounded-2xl p-2 sm:p-4 shadow-lg shadow-black/10 max-w-[80vw] sm:max-w-none floating-glow">
          {/* Subtle shimmer overlay */}
          <div className="absolute inset-0 rounded-lg sm:rounded-2xl shimmer-effect opacity-50 pointer-events-none" />

          <div className="flex items-center gap-2 sm:gap-4 relative">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className={`group relative w-8 h-8 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center enhanced-transition spring-scale overflow-hidden
                ${
                  isPlaying
                    ? 'bg-[#3effbe]/10 border-[#3effbe]/30 hover:bg-[#3effbe]/20 hover:border-[#3effbe]/60 hover:scale-105 active:scale-95'
                    : 'bg-[#3effbe]/5 border-[#3effbe]/20 attract-pulse hover:scale-105 active:scale-95'
                }
              `}
            >
              {isPlaying && <span className="visualizer-pulse" />}

              {/* Ripple effect on hover */}
              <div className="absolute inset-0 rounded-full bg-[#3effbe]/5 opacity-0 group-hover:opacity-100 enhanced-transition scale-0 group-hover:scale-100" />

              {/* Animated background gradient */}
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 enhanced-transition"
                style={{
                  background: `radial-gradient(circle at center, rgba(62, 255, 190, 0.2) 0%, transparent 70%)`,
                }}
              />

              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#3effbe] relative z-10 drop-shadow-sm" />
              ) : (
                <Play className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#3effbe] ml-0.5 relative z-10 drop-shadow-sm" />
              )}
            </button>

            {/* Enhanced Equalizer bars - visible only when playing */}
            {isPlaying && (
              <div className="hidden sm:flex items-center gap-[2px] relative">
                {/* Glow effect behind bars */}
                <div className="absolute inset-0 blur-sm opacity-60">
                  <div className="w-1 h-3 bg-[#3effbe] rounded-full equalizer-bar-1" />
                  <div className="w-1 h-4 bg-[#3effbe] rounded-full equalizer-bar-2 ml-[6px]" />
                  <div className="w-1 h-2 bg-[#3effbe] rounded-full equalizer-bar-3 ml-[12px]" />
                  <div className="w-1 h-5 bg-[#3effbe] rounded-full equalizer-bar-4 ml-[18px]" />
                </div>

                {/* Main bars */}
                <div
                  className="w-1 bg-[#3effbe]/80 rounded-full equalizer-bar-1 shadow-sm relative z-10"
                  style={{ minHeight: '12px' }}
                />
                <div
                  className="w-1 bg-[#3effbe]/80 rounded-full equalizer-bar-2 shadow-sm relative z-10"
                  style={{ minHeight: '16px' }}
                />
                <div
                  className="w-1 bg-[#3effbe]/80 rounded-full equalizer-bar-3 shadow-sm relative z-10"
                  style={{ minHeight: '8px' }}
                />
                <div
                  className="w-1 bg-[#3effbe]/80 rounded-full equalizer-bar-4 shadow-sm relative z-10"
                  style={{ minHeight: '20px' }}
                />

                {/* Reflection effect */}
                <div className="absolute inset-0 top-1/2 opacity-20 transform scale-y-[-1]">
                  <div
                    className="w-1 bg-[#3effbe] rounded-full equalizer-bar-1"
                    style={{ minHeight: '6px' }}
                  />
                  <div
                    className="w-1 bg-[#3effbe] rounded-full equalizer-bar-2 ml-[6px]"
                    style={{ minHeight: '8px' }}
                  />
                  <div
                    className="w-1 bg-[#3effbe] rounded-full equalizer-bar-3 ml-[12px]"
                    style={{ minHeight: '4px' }}
                  />
                  <div
                    className="w-1 bg-[#3effbe] rounded-full equalizer-bar-4 ml-[18px]"
                    style={{ minHeight: '10px' }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioPlayer;
