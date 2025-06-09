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

const Hero = ({ onNavigation }: { onNavigation: (index: number) => void }) => (
  <section className="base-width relative py-10 lg:py-20 md:pb-0 pb-20 flex">
    {/* Left Content */}
    <div className="max-w-[870px] w-full">
      <p className="md:block hidden text-[#e7e7e8] text-left text-[28px] font-[500] leading-[140%] tracking-0 mb-10">
        A new way to build and automate with AI
      </p>

      <h1 className="text-[42px] sm:text-[60px] md:text-[80px] font-[650] leading-[110%] tracking-[-0.03em] md:text-left text-center text-foreground">
        Turn Logic Into Action <br className="hidden sm:block" /> With No-Code
        AI Agents
      </h1>

      <p className="mt-6 mb-10 sm:mb-12 md:text-left text-center text-lg sm:text-xl md:text-2xl leading-[140%] tracking-0 font-[400] text-[#C0C3C2]">
        Texor.Cloud is your no-code platform for building and automating AI
        agents. <br className="hidden sm:block" />
        From workflows to alerts, trading to research, and everything in
        between. <br className="hidden sm:block" />
        All without writing code.
      </p>

      <div className="flex flex-col sm:flex-row items-start justify-center sm:justify-start gap-6 sm:gap-5 md:px-0 px-3">
        <button className="w-full sm:w-[220px] md:w-[311px] h-[60px] md:h-[70px] rounded-full text-xl md:text-2xl text-[#39373C] font-[500] bg-gradient-to-r from-[#3EFFBE] to-[#20E1A0] transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer flex items-center justify-center gap-8 uppercase">
          <p>Building</p>
          <img src={chevronBlack} alt="Chevron Icon" className="w-[18px] h-4" />
        </button>

        <button className="group w-full sm:w-[220px] md:w-[311px] h-[60px] md:h-[70px] rounded-full text-xl md:text-2xl text-white font-[500] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-background cursor-pointer border border-accent text-[20px] tracking-0 hover:bg-accent flex items-center justify-center gap-8 uppercase">
          <p>Community</p>
          <div className="relative w-[18px] h-4">
            <img
              src={chevron}
              alt="Chevron"
              className="absolute inset-0 w-full h-full transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src={chevronBlack}
              alt="Chevron Hover"
              className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
        </button>
      </div>

      <p className="md:hidden text-[#e7e7e8] text-center text-xl font-[500] leading-[140%] tracking-0 mt-10 md:mt-11">
        A new way to build and automate with AI
      </p>
    </div>

    {/* Right Icons Grid */}
    <div className="flex-1 relative hidden md:block">
      <div className="absolute right-0 left-0 h-[500px] top-1/2 -translate-y-1/2 grid grid-cols-2 gap-x-12 gap-y-10 pr-10 ">
        {icons.map((item, index) => (
          <div
            key={index}
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
            <div className="relative flex flex-col items-center text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
              <p
                className={clsx(
                  'absolute  text-[14px] text-white uppercase font-[650] leading-[130%] tracking-0',
                  index === 0 ? '-top-12' : '-top-8'
                )}
              >
                {item.title.split('<br />').map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <div className="size-14 rounded-full border border-accent flex items-center justify-center mb-3">
                <img
                  src={item.icon}
                  alt={`Icon ${index}`}
                  width={30}
                  height={24}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
