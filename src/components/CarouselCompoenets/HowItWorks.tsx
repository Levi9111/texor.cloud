const HowItWorks = () => {
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
      title: 'Notify User',
      description: 'Send alerts or update performance tracking',
      icon: '/assets/images/notify.png',
    },
    {
      title: 'Crypto Trading Bot',
      description: 'Executes Buy, Sell, or Hold actions',
      icon: '/assets/images/crypto.png',
    },
  ];
  return (
    <section className="px-4 lg:px-0  py-10 lg:py-20">
      {/* Title Section */}
      <div className="mb-10 max-w-4xl mx-auto">
        <h3 className="title">How It Works</h3>
        <p className="text-title">
          Agents on Texor.Cloud are built using simple logic blocks. Each block
          performs a function <br className="break" /> such as fetching data,
          analyzing signals, or triggering an action.
        </p>
      </div>
      {/* Cards Container */}
      <div className="relative max-w-7xl mx-auto pb-24 min-h-screen">
        {/* Mobile View: Single Column with Top-to-Bottom Arrows */}
        <div className="block lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex justify-center">
              <div className="relative bg-[#000503E5] border-[1.25px] border-[#161616] px-6 pb-6  rounded-lg shadow-lg text-center w-full max-w-sm">
                  <div className="flex items-center justify-center">
              <img
                src={step.icon}
                alt={`${step.title} Icon`}
                className=" "
              />
            </div>
                <div
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(6, 109, 75, 0) 35.45%, rgba(3, 79, 53, 0.5) 100.5%, rgba(2, 70, 47, 0.639423) 118.63%, #003020 165.54%)',
                  }}
                  className="px-7 py-4 rounded-lg -mt-20 border border-[#003A27] text-center"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm ">
                    {step.description}
                  </p>
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
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 mx-20 ">
          {/* First Row */}

          <div className="relative bg-[#000503E5] border-[1.25px] border-[#161616] px-6 pb-6 rounded-lg shadow-lg ">
            <div className="flex items-center justify-center">
              <img
                src={steps[0].icon}
                alt="Market Data Icon"
                className=" "
              />
            </div>
            <div
              style={{
                background:
                  'linear-gradient(180deg, rgba(6, 109, 75, 0) 35.45%, rgba(3, 79, 53, 0.5) 100.5%, rgba(2, 70, 47, 0.639423) 118.63%, #003020 165.54%)',
              }}
              className="px-7 py-4 rounded-lg -mt-20 border border-[#003A27] text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{steps[0].title}</h3>
              <p className="text-gray-400 text-sm ">{steps[0].description}</p>
            </div>

            <div className="absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2">
              <img
                src="/assets/images/arrow.svg"
                alt="Arrow Right"
                className="w-8 h-6 text-teal-500"
              />
            </div>
          </div>
          <div className="relative bg-[#000503E5] border-[1.25px] border-[#161616] px-6 pb-6 rounded-lg shadow-lg ">
            <div className="flex items-center justify-center">
              <img
                src={steps[1].icon}
                alt="Calculate Indicators Icon"
                className=" "
              />
            </div>
            <div
              style={{
                background:
                  'linear-gradient(180deg, rgba(6, 109, 75, 0) 35.45%, rgba(3, 79, 53, 0.5) 100.5%, rgba(2, 70, 47, 0.639423) 118.63%, #003020 165.54%)',
              }}
              className="px-7 py-4 rounded-lg -mt-20 border border-[#003A27] text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{steps[1].title}</h3>
              <p className="text-gray-400 text-sm ">{steps[1].description}</p>
            </div>

            <div className="absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2">
              <img
                src="/assets/images/arrow.svg"
                alt="Arrow Right"
                className="w-8 h-6 text-teal-500"
              />
            </div>
          </div>
          <div className="relative bg-[#000503E5] border-[1.25px] border-[#161616] px-6 pb-6 rounded-lg shadow-lg ">
            <div className="flex items-center justify-center">
              <img
                src={steps[2].icon}
                alt="Calculate Indicators Icon"
                className=" "
              />
            </div>
            <div
              style={{
                background:
                  'linear-gradient(180deg, rgba(6, 109, 75, 0) 35.45%, rgba(3, 79, 53, 0.5) 100.5%, rgba(2, 70, 47, 0.639423) 118.63%, #003020 165.54%)',
              }}
              className="px-7 py-4 rounded-lg -mt-20 border border-[#003A27] text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{steps[2].title}</h3>
              <p className="text-gray-400 text-sm ">{steps[2].description}</p>
            </div>
            <div className="absolute top-1/2 -right-24 transform -translate-x-1/2">
              <img
                src="/assets/images/arrow-log.svg"
                alt="Arrow Right"
                className=" w-20 text-teal-500 "
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="lg:col-start-2 relative bg-[#000503E5] border-[1.25px] border-[#161616] px-6 pb-6 rounded-lg shadow-lg ">
             <div className="flex items-center justify-center">
              <img
                src={steps[3].icon}
                alt="Calculate Indicators Icon"
                className=" "
              />
            </div>
            <div
              style={{
                background:
                  'linear-gradient(180deg, rgba(6, 109, 75, 0) 35.45%, rgba(3, 79, 53, 0.5) 100.5%, rgba(2, 70, 47, 0.639423) 118.63%, #003020 165.54%)',
              }}
              className="px-7 py-4 rounded-lg -mt-20 border border-[#003A27] text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{steps[3].title}</h3>
              <p className="text-gray-400 text-sm ">{steps[3].description}</p>
            </div>
          </div>
          <div className="relative bg-[#000503E5] border-[1.25px] border-[#161616] px-6 pb-6 rounded-lg shadow-lg ">
             <div className="flex items-center justify-center">
              <img
                src={steps[4].icon}
                alt="Calculate Indicators Icon"
                className=" "
              />
            </div>
            <div
              style={{
                background:
                  'linear-gradient(180deg, rgba(6, 109, 75, 0) 35.45%, rgba(3, 79, 53, 0.5) 100.5%, rgba(2, 70, 47, 0.639423) 118.63%, #003020 165.54%)',
              }}
              className="px-7 py-4 rounded-lg -mt-20 border border-[#003A27] text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{steps[4].title}</h3>
              <p className="text-gray-400 text-sm ">{steps[4].description}</p>
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
    </section>
  );
};

export default HowItWorks;
