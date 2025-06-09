import { useEffect, useRef } from 'react';
import chevron from '/icons/chevron.png';
import chevronBlack from '/icons/chevron-black.png';

import featuresNavigationActive from '/icons/navigation-icons/features-navigation-active.png';
import footerNavigationActive from '/icons/navigation-icons/footer-navigation-active.png';
import homeNavigationActive from '/icons/navigation-icons/home-navigation-active.png';
import ourMissionNavigationActive from '/icons/navigation-icons/our-mission-navigation-active.png';
import howItWorksNavigationActive from '/icons/navigation-icons/how-it-works-navigation-active.png';
import roadmapNavigationActive from '/icons/navigation-icons/roadmap-navigation-active.png';
import useCasesNavigationActive from '/icons/navigation-icons/use-cases-navigation-active.png';
import whyTexorNavigationActive from '/icons/navigation-icons/why-texor-navigation-active.png';
import clsx from 'clsx';

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

const Hero = ({ onNavigation }: { onNavigation: (index: number) => void }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsContainerRef = useRef<HTMLDivElement>(null);
  const mobileSubtitleRef = useRef<HTMLParagraphElement>(null);
  const iconsGridRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const initializeAnimations = () => {
      // Set initial states for slide-in from left
      if (sectionRef.current) {
        sectionRef.current.style.transform = 'translateX(-100%)';
        sectionRef.current.style.opacity = '0';
      }

      // Set initial states for individual elements
      [
        subtitleRef,
        titleRef,
        descriptionRef,
        buttonsContainerRef,
        mobileSubtitleRef,
      ].forEach((ref) => {
        if (ref.current) {
          ref.current.style.transform = 'translateX(-50px)';
          ref.current.style.opacity = '0';
        }
      });

      // Set initial states for icons
      if (iconsGridRef.current) {
        iconsGridRef.current.style.transform = 'translateX(100px)';
        iconsGridRef.current.style.opacity = '0';
      }

      iconRefs.current.forEach((iconRef) => {
        if (iconRef) {
          iconRef.style.transform = 'translateY(30px) scale(0.8)';
          iconRef.style.opacity = '0';
        }
      });
    };

    const startAnimations = () => {
      // Main section slide-in
      setTimeout(() => {
        if (sectionRef.current) {
          sectionRef.current.style.transform = 'translateX(0)';
          sectionRef.current.style.opacity = '1';
          sectionRef.current.style.transition =
            'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)';
        }
      }, 100);

      // Staggered content animations
      setTimeout(() => {
        if (subtitleRef.current) {
          subtitleRef.current.style.transform = 'translateX(0)';
          subtitleRef.current.style.opacity = '1';
          subtitleRef.current.style.transition =
            'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)';
        }
      }, 400);

      setTimeout(() => {
        if (titleRef.current) {
          titleRef.current.style.transform = 'translateX(0)';
          titleRef.current.style.opacity = '1';
          titleRef.current.style.transition =
            'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)';

          // Add typing effect shimmer
          titleRef.current.style.textShadow =
            '0 0 20px rgba(62, 255, 190, 0.3)';
          titleRef.current.style.animation =
            'title-glow 2s ease-in-out infinite';
        }
      }, 600);

      setTimeout(() => {
        if (descriptionRef.current) {
          descriptionRef.current.style.transform = 'translateX(0)';
          descriptionRef.current.style.opacity = '1';
          descriptionRef.current.style.transition =
            'all 0.7s cubic-bezier(0.165, 0.84, 0.44, 1)';
        }
      }, 800);

      setTimeout(() => {
        if (buttonsContainerRef.current) {
          buttonsContainerRef.current.style.transform = 'translateX(0)';
          buttonsContainerRef.current.style.opacity = '1';
          buttonsContainerRef.current.style.transition =
            'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';

          // Animate buttons individually
          const buttons =
            buttonsContainerRef.current.querySelectorAll('button');
          buttons.forEach((button, index) => {
            const htmlButton = button as HTMLElement;
            setTimeout(() => {
              htmlButton.style.transform = 'scale(1)';
              htmlButton.style.animation = `button-bounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${
                index * 0.1
              }s forwards`;
            }, 100);
          });
        }
      }, 1000);

      setTimeout(() => {
        if (mobileSubtitleRef.current) {
          mobileSubtitleRef.current.style.transform = 'translateX(0)';
          mobileSubtitleRef.current.style.opacity = '1';
          mobileSubtitleRef.current.style.transition =
            'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)';
        }
      }, 1200);

      // Icons grid animation
      setTimeout(() => {
        if (iconsGridRef.current) {
          iconsGridRef.current.style.transform = 'translateX(0)';
          iconsGridRef.current.style.opacity = '1';
          iconsGridRef.current.style.transition =
            'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)';
        }
      }, 800);

      // Staggered icon animations
      iconRefs.current.forEach((iconRef, index) => {
        if (iconRef) {
          setTimeout(() => {
            iconRef.style.transform = 'translateY(0) scale(1)';
            iconRef.style.opacity = '1';
            iconRef.style.transition = `all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${
              index * 0.05
            }s`;

            // Add floating animation
            setTimeout(() => {
              iconRef.style.animation = `icon-float 3s ease-in-out infinite ${
                index * 0.2
              }s`;
            }, 600);
          }, 1000 + index * 80);
        }
      });
    };

    initializeAnimations();
    startAnimations();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="base-width relative py-10 lg:py-20 md:pb-0 pb-20 mb-12 flex"
      >
        {/* Left Content */}
        <div className="max-w-[870px] w-full">
          <p
            ref={subtitleRef}
            className="md:block hidden text-[#e7e7e8] text-left text-[28px] font-[500] leading-[140%] tracking-0 mb-10"
          >
            A new way to build and automate with AI
          </p>

          <h1
            ref={titleRef}
            className="text-[42px] sm:text-[60px] md:text-[80px] font-[650] leading-[110%] tracking-[-0.03em] md:text-left text-center text-foreground"
          >
            Turn Logic Into Action <br className="hidden sm:block" /> With
            No-Code AI Agents
          </h1>

          <p
            ref={descriptionRef}
            className="mt-6 mb-10 sm:mb-12 md:text-left text-center text-lg sm:text-xl md:text-2xl leading-[140%] tracking-0 font-[400] text-[#C0C3C2]"
          >
            Texor.Cloud is your no-code platform for building and automating AI
            agents. <br className="hidden sm:block" />
            From workflows to alerts, trading to research, and everything in
            between. <br className="hidden sm:block" />
            All without writing code.
          </p>

          <div
            ref={buttonsContainerRef}
            className="flex flex-col sm:flex-row items-start justify-center sm:justify-start gap-6 sm:gap-5 md:px-0 px-3"
          >
            <button
              className="w-full sm:w-[220px] md:w-[311px] h-[60px] md:h-[70px] rounded-full text-xl md:text-2xl text-[#39373C] font-[500] bg-gradient-to-r from-[#3EFFBE] to-[#20E1A0] transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer flex items-center justify-center gap-8 uppercase overflow-hidden relative group"
              style={{ transform: 'scale(0.8)' }}
              onMouseEnter={(e) => {
                // Create shimmer effect
                const shimmer = document.createElement('div');
                shimmer.style.cssText = `
                  position: absolute;
                  top: 0;
                  left: -100%;
                  width: 100%;
                  height: 100%;
                  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
                  animation: shimmer 0.8s ease-out;
                `;
                e.currentTarget.appendChild(shimmer);
                setTimeout(() => shimmer.remove(), 800);
              }}
            >
              <p>Building</p>
              <img
                src={chevronBlack}
                alt="Chevron Icon"
                className="w-[18px] h-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button
              className="group w-full sm:w-[220px] md:w-[311px] h-[60px] md:h-[70px] rounded-full text-xl md:text-2xl text-white font-[500] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-background cursor-pointer border border-accent text-[20px] tracking-0 hover:bg-accent flex items-center justify-center gap-8 uppercase overflow-hidden relative"
              style={{ transform: 'scale(0.8)' }}
              onMouseEnter={(e) => {
                // Create border glow effect
                e.currentTarget.style.boxShadow =
                  '0 0 20px rgba(62, 255, 190, 0.5), inset 0 0 20px rgba(62, 255, 190, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <p>Community</p>
              <div className="relative w-[18px] h-4">
                <img
                  src={chevron}
                  alt="Chevron"
                  className="absolute inset-0 w-full h-full transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-1"
                />
                <img
                  src={chevronBlack}
                  alt="Chevron Hover"
                  className="absolute inset-0 w-full h-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"
                />
              </div>
            </button>
          </div>

          <p
            ref={mobileSubtitleRef}
            className="md:hidden text-[#e7e7e8] text-center text-xl font-[500] leading-[140%] tracking-0 mt-10 md:mt-11"
          >
            A new way to build and automate with AI
          </p>
        </div>

        {/* Right Icons Grid */}
        <div className="flex-1 relative hidden md:block">
          <div
            ref={iconsGridRef}
            className="absolute right-0 left-0 h-[500px] top-1/2 -translate-y-1/2 grid grid-cols-2 gap-x-12 gap-y-10 pr-10"
          >
            {icons.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  iconRefs.current[index] = el;
                }}
                className={clsx(
                  (index === 0 || index === 6) && 'translate-x-7',
                  (index === 1 || index === 7) && '-translate-x-7',
                  (index === 2 || index === 4) && '-translate-x-12',
                  (index === 3 || index === 5) && 'translate-x-12'
                )}
                onClick={() => onNavigation(item.navigation)}
                aria-label={`Navigate to ${item.title}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onNavigation(item.navigation);
                  }
                }}
              >
                <div
                  className="relative flex flex-col items-center text-center group cursor-pointer hover:scale-110 transition-all duration-300"
                  onMouseEnter={(e) => {
                    const iconContainer = e.currentTarget.querySelector(
                      '.icon-container'
                    ) as HTMLElement;
                    if (iconContainer) {
                      iconContainer.style.transform = 'scale(1.1)';
                      iconContainer.style.boxShadow =
                        '0 0 20px rgba(62, 255, 190, 0.5)';
                      iconContainer.style.borderColor =
                        'rgba(62, 255, 190, 0.8)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    const iconContainer = e.currentTarget.querySelector(
                      '.icon-container'
                    ) as HTMLElement;
                    if (iconContainer) {
                      iconContainer.style.transform = 'scale(1)';
                      iconContainer.style.boxShadow = '';
                      iconContainer.style.borderColor = '';
                    }
                  }}
                >
                  <p
                    className={clsx(
                      'absolute text-[14px] text-white uppercase font-[650] leading-[130%] tracking-0 transition-all duration-300 group-hover:text-[#3EFFBE]',
                      index === 0 ? '-top-12' : '-top-8'
                    )}
                  >
                    {item.title.split('<br />').map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                  <div className="icon-container size-14 rounded-full border border-accent flex items-center justify-center mb-3 transition-all duration-300">
                    <img
                      src={item.icon}
                      alt={`Icon ${index}`}
                      width={30}
                      height={24}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
