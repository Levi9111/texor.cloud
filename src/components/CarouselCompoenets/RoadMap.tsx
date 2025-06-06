const Roadmap = () => {
  const steps = [
    {
      title: 'Get Market Data',

      heading: '#Phase 1',
      options: [
        'Define and validate the core concept',
        'Launch the first working AI agent',
        'Set up community and ecosystem structure',
        'Launch the $TRX token',
        'Onboard key advisors and recognized experts in AI and automation',
      ],
    },
    {
      title: 'Platform Expansion',

      heading: '#Phase 2',
      options: [
        'Continue platform development with deeper logic and flexibility',
        'Launch private beta for early builders, $TRX holders, and partners',
        'Expand integrations across Web2 and Web3 tools',
        'Onboard institutions and automation-focused teamsOnboard institutions and automation-focused teams',
        'Launch a grant program for early monetizable agents',
      ],
    },
    {
      title: 'Public Rollout',

      heading: '#Phase 3',
      options: [
        'Open the platform to the public',
        'Launch the AI agent marketplace',
        'Enable large-scale deployment and monetization',
        'Expand across crypto, research, and enterprise use cases',
        'Grow through builders, contributors, and partnerships',
      ],
    },
  ];
  return (
    <section className="px-4 lg:px-0  py-10 lg:py-20">
      {/* Title Section */}
      <div className="max-w-4xl mx-auto mb-10">
        <h3 className="title">Roadmap</h3>
        <p className="text-title">
          Texor.cloud is building the next layer of automation. Open, AI-
          <br className="break" />
        native, and built for real-world use.
        </p>
      </div>
      {/* Cards Container */}
      {/* Desktop/Tablet View: Grid with Specific Arrow Directions */}
      <div className="flex flex-wrap justify-center items-center gap-6 ">
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
                  alt="Roadmap Icon"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="mb-2">
                <h4 className="text-4xl text-gray-500 mb-1 inline ">
                  {step.heading}
                </h4>
              </div>
              <div className="rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                {/* options */}
                <ul className="list-disc list-inside">
                  {step.options.map((option, index) => (
                    <li key={index} className="text-gray-400 text-sm">
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
