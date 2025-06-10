import { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../Button';
import useOverScroll from '../../hooks/useOverScroll';

const steps = [
  {
    title: 'Get Market Data',
    description: 'Pull price data, volume, and trend info',
    icon: '/assets/images/market-data.png',
  },
  {
    title: 'Calculate Indicators',
    description: 'Analyze RSI, moving average, or custom signals',
    icon: '/assets/images/calculate.png',
  },
  {
    title: 'Define Strategy Rule',
    description: 'Example: If RSI < 30 and trend is bullish',
    icon: '/assets/images/strategy.png',
  },
  {
    title: 'Crypto Trading Bot',
    description: 'Executes Buy, Sell, or Hold actions',
    icon: '/assets/images/crypto.png',
  },
  {
    title: 'Notify User',
    description: 'Send alerts or update performance tracking',
    icon: '/assets/images/notify.png',
  },
];

const HowItWorks = ({
  onNavigation,
}: {
  onNavigation: (index: number) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { overScrolledAtBottom, overScrolledAtTop } = useOverScroll(768);

  if (!isOpen) {
    if (overScrolledAtTop) onNavigation(1);
    if (overScrolledAtBottom) onNavigation(3);
  }
  return (
    <section className="px-4 lg:px-0  py-10 lg:py-20 md:mt-10">
      {/* Title Section */}
      <div className="mb-10 mx-auto">
        <h3 className="title">How It Works</h3>
        <p className="text-title">
          Agents on Texor.Cloud are built using simple logic blocks. Each block
          performs a function <br className="break" /> such as fetching data,
          analyzing signals, or triggering an action.
        </p>
      </div>

      {/* modal btn */}
      <Button onClick={() => setIsOpen(true)}>Steps</Button>

      {/* Cards Container */}
      <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
        <div className="relative max-w-5xl mx-auto ">
          {/* Mobile View: Single Column with Top-to-Bottom Arrows */}
          <div className="block lg:hidden space-y-8 ">
            {steps.map((step, index) => (
              <div key={index} className="relative flex justify-center">
                <div className="relative  border border-accent rounded-lg text-center w-full max-w-[267px] h-[265px] p-4 flex flex-col justify-between items-center">
                  <div className="flex items-center justify-center border border-accent w-[85px] h-[87px] rounded-xl">
                    <img
                      src={step.icon}
                      alt={`${step.title} Icon`}
                      width={42}
                      height={45}
                    />
                  </div>
                  <div className="px-2 py-2 rounded-lg border border-accent text-center">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm ">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                    <img
                      src="/assets/images/arrow.svg"
                      alt="Arrow Down"
                      className="w-8 h-6 text-teal-500 rotate-90"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop/Tablet View: Grid with Specific Arrow Directions */}
          <div className="hidden lg:block">
            <div className="grid lg:grid-cols-3 lg:gap-8 mx-20 ">
              {/* First Row */}

              <div className="relative border border-accent p-4 rounded-lg shadow-lg w-[267px] h-[265px] flex flex-col justify-between">
                <div className="flex items-center justify-center border border-accent w-[65px] h-[67px] rounded-xl">
                  <img
                    src={steps[0].icon}
                    alt="Market Data Icon"
                    width={36}
                    height={32}
                  />
                </div>
                <div className="px-2 py-2 rounded-lg  border border-accent text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {steps[0].title}
                  </h3>
                  <p className="text-gray-400 text-sm ">
                    {steps[0].description}
                  </p>
                </div>

                <div className="absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2">
                  <img
                    src="/assets/images/arrow.svg"
                    alt="Arrow Right"
                    className="w-8 h-6 text-teal-500"
                  />
                </div>
              </div>
              <div className="relative border border-accent p-4 rounded-lg shadow-lg w-[267px] h-[265px] flex flex-col justify-between">
                <div className="flex items-center justify-center border border-accent w-[65px] h-[67px] rounded-xl">
                  <img
                    src={steps[1].icon}
                    alt="Calculate Indicators Icon"
                    width={24}
                    height={36}
                    className=" "
                  />
                </div>
                <div className="px-2 py-2 rounded-lg  border border-accent text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {steps[1].title}
                  </h3>
                  <p className="text-gray-400 text-sm ">
                    {steps[1].description}
                  </p>
                </div>

                <div className="absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2">
                  <img
                    src="/assets/images/arrow.svg"
                    alt="Arrow Right"
                    className="w-8 h-6 text-teal-500"
                  />
                </div>
              </div>
              <div className="relative border border-accent p-4 rounded-lg shadow-lg w-[267px] h-[265px] flex flex-col justify-between">
                <div className="flex items-center justify-center border border-accent w-[65px] h-[67px] rounded-xl">
                  <img
                    src={steps[2].icon}
                    alt="Calculate Indicators Icon"
                    width={32}
                    height={32}
                    className=" "
                  />
                </div>
                <div className="px-2 py-2 rounded-lg  border border-accent text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {steps[2].title}
                  </h3>
                  <p className="text-gray-400 text-sm ">
                    {steps[2].description}
                  </p>
                </div>
                <div className="absolute top-1/2 -right-[121px] transform -translate-x-1/2">
                  <img
                    src="/assets/images/arrow-log.svg"
                    alt="Arrow Right"
                    className=" w-20 text-teal-500 "
                  />
                </div>
              </div>

              {/* Second Row */}
              <div className="w-[267px] h-[265px]"></div>
              <div className="relative border border-accent p-4 rounded-lg shadow-lg w-[267px] h-[265px] flex flex-col justify-between">
                <div className="flex items-center justify-center border border-accent w-[65px] h-[67px] rounded-xl">
                  <img
                    src={steps[3].icon}
                    alt="Calculate Indicators Icon"
                    width={30}
                    height={32}
                  />
                </div>
                <div className="px-2 py-2 rounded-lg  border border-accent text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {steps[3].title}
                  </h3>
                  <p className="text-gray-400 text-sm ">
                    {steps[3].description}
                  </p>
                </div>
              </div>
              <div className="relative border border-accent p-4 rounded-lg shadow-lg w-[267px] h-[265px] flex flex-col justify-between">
                <div className="flex items-center justify-center border border-accent w-[65px] h-[67px] rounded-xl">
                  <img
                    src={steps[4].icon}
                    alt="Calculate Indicators Icon"
                    width={35}
                    height={36}
                  />
                </div>
                <div className="px-2 py-2 rounded-lg  border border-accent text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {steps[4].title}
                  </h3>
                  <p className="text-gray-400 text-sm ">
                    {steps[4].description}
                  </p>
                </div>
                <div className="absolute top-1/2 -left-4 transform -translate-x-1/2 -translate-y-1/2">
                  <img
                    src="/assets/images/arrow.svg"
                    alt="Arrow Left"
                    className="w-8 h-6 text-teal-500 rotate-180"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default HowItWorks;
