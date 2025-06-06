const Features = () => {
  const steps = [
    {
      title: 'Get Market Data',
      description: 'Pull price data, volume, and trend info',
      icon: '/assets/images/features1.png',
    },
    {
      title: 'Calculate Indicators',
      description: 'Analyze RSI, moving average, or custom signals',
      icon: '/assets/images/features2.png',
    },
    {
      title: 'Define Strategy Rule',
      description: 'Example: If RSI < 30 and trend is bullish',
      icon: '/assets/images/features3.png',
    },
    {
      title: 'Notify User',
      description: 'Send alerts or update performance tracking',
      icon: '/assets/images/features4.png',
    },
    {
      title: 'Crypto Trading Bot',
      description: 'Executes Buy, Sell, or Hold actions',
      icon: '/assets/images/features5.png',
    },
    {
      title: 'Crypto Trading Bot',
      description: 'Executes Buy, Sell, or Hold actions',
      icon: '/assets/images/features6.png',
    },
    {
      title: 'Crypto Trading Bot',
      description: 'Executes Buy, Sell, or Hold actions',
      icon: '/assets/images/features7.png',
    },
    {
      title: 'Crypto Trading Bot',
      description: 'Executes Buy, Sell, or Hold actions',
      icon: '/assets/images/features8.png',
    },
  ];
  return (
    <section className="px-4 lg:px-0  py-10 lg:py-20">
      {/* Title Section */}
      <div className="max-w-4xl mx-auto mb-8 ">
        <h3 className="title">What You Can Do With Texor.Cloud</h3>
        <p className="text-title">
          Texor.Cloud gives you a powerful set of tools to create, connect,
          <br className="break" />
          and launch AI agents without code.
        </p>
      </div>
      {/* Cards Container */}
       {/* Desktop/Tablet View: Grid with Specific Arrow Directions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8 gap-6 max-w-7xl mx-auto">
         {
          steps.map((step, index) => (
            <div
              key={index}
              className={`relative bg-[#000503E5] border-[1.25px] border-[#161616] p-2 rounded-lg shadow-lg`}
            >
              <div className="border-[1.25px] border-[#003A27] rounded-lg p-3 w-full h-full">
                <div className="mb-6">
                <img className="rounded-2xl " 
                style={{
                  //  shadow all around spread 50px
                  boxShadow: '0 0 50px #066D4B',
                }}
                src={step.icon} alt={`${step.title} Icon`} />
              </div>
              <div
                style={{
                  background:
                    'linear-gradient(180deg, rgba(6, 109, 75, 0) 35.45%, rgba(3, 79, 53, 0.5) 100.5%, rgba(2, 70, 47, 0.639423) 118.63%, #003020 165.54%)',
                }}
                className=""
              >
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm ">{step.description}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
 
    </section>
  );
};

export default Features;
