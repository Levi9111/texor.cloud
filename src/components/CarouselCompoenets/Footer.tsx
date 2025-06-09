import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Join Our Community',
    icons: ['/assets/images/telegram.png'],
    links: ['https://t.me/TexorCloud'],
  },
  {
    title: 'Read the Docs',
    icons: ['/assets/images/docs.png'],
    links: ['https://texor-cloud.gitbook.io/'],
  },
  {
    title: 'Follow us on',
    icons: ['/assets/images/x.png', '/assets/images/medium.png'],
    links: ['https://x.com/Texorcloud', 'mailto:Texorcloud1@gmail.com'],
  },
];

const Footer = () => {
  return (
    <footer className="px-4 lg:px-0 py-10 lg:py-20 md:pb-0 pb-20 md:mb-12">
      {/* Title Section */}
      <div className="mb-8">
        <h3 className="title">Stay Connected</h3>
        <p className="text-title">
          Follow updates, explore the docs, or join the community
          <br className="hidden sm:block break" />
          <span className="sm:hidden"> </span>
          building with Texor.Cloud
        </p>
      </div>

      {/* Cards Container */}
      <div className="border p-3 sm:p-6 rounded-3xl border-[#161616] backdrop-blur-[16px] max-w-[996px] w-[97%] mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="relative border border-[#161616]/70 p-2 shadow-lg overflow-hidden max-w-sm mx-auto sm:mx-0 rounded-[20px] h-fit w-full"
            >
              <div className="border border-accent/40 rounded-[16px] p-3">
                <div className="text-center">
                  <motion.h3
                    whileHover={{ rotate: [-1, 1, -1, 0] }}
                    transition={{ duration: 0.4 }}
                    className="text-lg sm:text-2xl font-[650] leading-[145%] tracking-[-2%] mb-3 sm:mb-5"
                  >
                    {step.title}
                  </motion.h3>
                  <div className="flex justify-center items-center gap-2">
                    {step.icons.map((icon, iconIndex) => (
                      <motion.div
                        key={iconIndex}
                        whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 10,
                        }}
                        className="cursor-pointer h-[77px] w-20 rounded-[17px] border border-accent/20 p-2 flex items-center justify-center sm:h-[65px] sm:w-[68px] sm:rounded-[14px] sm:p-1.5 xs:h-[55px] xs:w-[58px] xs:rounded-[12px] xs:p-1"
                      >
                        <a
                          href={step.links[iconIndex]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-full w-full flex items-center justify-center border border-accent/40 rounded-[13px] sm:rounded-[11px] xs:rounded-[9px]"
                        >
                          <img
                            src={icon}
                            alt={`${step.title} icon ${iconIndex + 1}`}
                            width={29}
                            height={29}
                            className="sm:w-6 sm:h-6 xs:w-5 xs:h-5"
                          />
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subscribe Section */}
        <div className="text-center mt-8 sm:mt-12">
          <h2 className="text-2xl sm:text-[40px] font-[650] leading-[110%] tracking-[-3%] mb-3 sm:mb-5 px-2">
            Subscribe for Updates
          </h2>
          <div className="max-w-[645px] mx-auto relative">
            {/* Mobile Layout */}
            <div className="block sm:hidden space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-4 focus:outline-none rounded-[23px] border border-[#383838] w-full h-[60px] placeholder:text-[16px] placeholder:text-muted placeholder:leading-[160] bg-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-full h-[50px] flex items-center justify-center bg-accent text-background rounded-xl font-semibold"
              >
                Subscribe
              </motion.button>
            </div>

            {/* Desktop Layout */}
            <div className="hidden sm:block h-[85px] relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-[26px] focus:outline-none focus:ring-2 focus:ring-accent/40 rounded-[23px] border border-[#383838] w-full h-full placeholder:text-[20px] placeholder:text-muted placeholder:leading-[160] text-[20px] text-muted leading-[160] bg-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-[190px] h-[60px] flex items-center justify-center bg-accent text-background rounded-xl absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
