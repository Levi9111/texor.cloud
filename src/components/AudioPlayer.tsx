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
        className={`fixed md:bottom-4 bottom-16 right-4 z-50 transition-all duration-300 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        } ${!isPlaying ? 'slow-bounce' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="bg-black/20 backdrop-blur-md border border-accent/20 rounded-lg sm:rounded-2xl p-2 sm:p-4 shadow-lg shadow-black/10 max-w-[80vw] sm:max-w-none">
          <div className="flex items-center gap-2 sm:gap-4 relative">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className={`group relative w-8 h-8 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all duration-200
                ${
                  isPlaying
                    ? 'bg-accent/10 border-accent/30 hover:bg-accent/20 hover:border-accent/60 hover:scale-105 active:scale-95'
                    : 'bg-accent/5 border-accent/20 attract-pulse hover:scale-105 active:scale-95'
                }
              `}
            >
              {isPlaying && <span className="visualizer-pulse" />}
              <div className="absolute inset-0 rounded-full bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-accent" />
              ) : (
                <Play className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-accent ml-0.5" />
              )}
            </button>

            {/* Equalizer bars - visible only when playing */}
            {isPlaying && (
              <div className="hidden sm:flex items-center gap-[2px]">
                <div className="w-1 h-3 bg-accent/60 rounded-full animate-pulse" />
                <div className="w-1 h-4 bg-accent/60 rounded-full animate-pulse delay-[150ms]" />
                <div className="w-1 h-2 bg-accent/60 rounded-full animate-pulse delay-[300ms]" />
                <div className="w-1 h-5 bg-accent/60 rounded-full animate-pulse delay-[450ms]" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioPlayer;
