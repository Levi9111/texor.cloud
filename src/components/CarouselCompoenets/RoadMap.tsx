const steps = [
  {
    title: 'Foundation',

    phase: '#Phase 1',
    options: [
      'Define and validate the core concept',
      'Launch the first working AI agent',
      'Set up community and ecosystem structure',
      'Launch the $TXR token',
      'Onboard key advisors and recognized experts in AI and automation',
    ],
  },
  {
    title: 'Platform Expansion',

    phase: '#Phase 2',
    options: [
      'Continue platform development with deeper logic and flexibility',
      'Launch private beta for early builders, $TXR holders, and partners',
      'Expand integrations across Web2 and Web3 tools',
      'Onboard institutions and automation-focused teamsOnboard institutions and automation-focused teams',
      'Launch a grant program for early monetizable agents',
    ],
  },
  {
    title: 'Public Rollout',

    phase: '#Phase 3',
    options: [
      'Open the platform to the public',
      'Launch the AI agent marketplace',
      'Enable large-scale deployment and monetization',
      'Expand across crypto, research, and enterprise use cases',
      'Grow through builders, contributors, and partnerships',
    ],
  },
];

const Roadmap = () => {
  console.log(window.innerWidth);
  return (
    <section className="px-4 lg:px-0 py-10 lg:py-20 md:pb-0 pb-20">
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
      <div className="flex md:flex-row flex-col justify-center items-center gap-6 max-w-[1630px] w-[97%] mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative bg-blur/20 backdrop-blur-md border border-[#161616] p-3 rounded-[36px] overflow-hidden 
              w-full sm:w-[calc(50%-12px)] lg:w-[calc(50%-12px)] xl:w-[470px] 2xl:w-[487px]
              ${
                index === 1
                  ? 'min-h-[400px] sm:min-h-[500px] lg:min-h-[596px]'
                  : 'min-h-[350px] sm:min-h-[450px] lg:min-h-[510px]'
              }`}
          >
            <div className="w-full h-full border border-accent rounded-[25px] pt-6 sm:pt-9 pr-4 sm:pr-5 pl-4 sm:pl-6 pb-6">
              <div className="mb-2">
                <h4 className="text-[24px] sm:text-[28px] lg:text-[32px] font-[650] text-accent leading-140 tracking-0 mb-4 sm:mb-6">
                  {step.phase}
                </h4>
              </div>
              <h3 className="text-[28px] sm:text-[36px] lg:text-[40px] font-[650] leading-145 tracking-[-2%] mb-3 sm:mb-4">
                {step.title}
              </h3>
              {/* options */}
              <ul className="space-y-3">
                {step.options.map((option: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start justify-start gap-2"
                  >
                    <span className="inline-block size-1 rounded-full bg-muted mt-2" />
                    <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-[400] leading-[145%] tracking-0 text-[#a6a7a7]">
                      {option}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
