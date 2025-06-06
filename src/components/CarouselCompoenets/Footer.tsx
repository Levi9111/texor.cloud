const Footer = () => {
  const steps = [
    {
      title: 'Join Our Community',
      icons: ['/assets/images/telegram.png'],
    },
    {
      title: 'Read the Docs',
      icons: ['/assets/images/docs.png'],
    },
    {
      title: 'Follow us on',
      icons: [
        '/assets/images/x.png',
        '/assets/images/medium.png',
      ],
    },
  ];
  return (
    <section className="px-4 lg:px-0 py-10 lg:py-20">
      {/* Title Section */}
      <div className=" max-w-4xl mx-auto mb-8 ">
        <h3 className="title">Stay Connected</h3>
        <p className="text-title">
          Follow updates, explore the docs, or join the community
          <br className="break" />
          building with Texor.Cloud
        </p>
      </div>
      {/* Cards Container */}
      {/* Desktop/Tablet View: Grid with Specific Arrow Directions */}
      <div className="border p-6 rounded-3xl border-[#161616] backdrop-blur-[16px] max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative bg-[#000503E5] border-[1.25px] border-[#161616] p-2 rounded-lg shadow-lg overflow-hidden max-w-sm h-fit`}
            >
              <div
                style={{
                  background:
                    'linear-gradient(0deg, rgba(6, 109, 108, 0) 35.45%, rgba(3, 79, 78, 0.5) 100.5%, rgba(2, 70, 69, 0.639423) 118.63%, #00302F 165.54%)',
                }}
                className="border-[1.25px] border-[#003A27] rounded-lg p-3  "
              >
                <div className="absolute w-[60px] h-[60px]  -top-2 -left-2">
                  <img
                    src="/assets/images/ellipse.png"
                    alt="Footer Icon"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div className="rounded-lg p-4 text-center">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  {/* options */}
                  <div className="flex justify-center items-center gap-2">
                    {step.icons.map((icon, index) => (
                      <img
                        key={index}
                        src={icon}
                        alt={`Icon ${index}`}
                        className="w-12 h-12"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold">Subscribe for Updates</h2>
          <div className="bg-[#000503E5] border-[1.25px] border-[#161616] px-6 py-2 rounded-lg shadow-lg max-w-xl mx-auto mt-4 flex flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 focus:outline-none  rounded-lg w-full"
            />
            <button style={{background: 'linear-gradient(0deg, rgba(6, 109, 108, 0) 35.45%, rgba(3, 79, 78, 0.5) 100.5%, rgba(2, 70, 69, 0.639423) 118.63%, #00302F 165.54%)'}} className="mt-2 text-white px-4 py-2 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
