const steps = [
  {
    title: 'Portfolio AI Agent',
    description:
      'Track wallets, calculate P&L, and get staking or airdrop alerts.',
    icon: '/assets/images/example-img-1.png',
  },
  {
    title: 'Crypto Trading Bot',
    description:
      'Automate strategies that pull data, calculate indicators, and place trades.',
    icon: '/assets/images/example-img-2.png',
  },
  {
    title: 'Wallet Monitoring Agent',
    description: 'Track wallet or contract activity and get real-time alerts.',
    icon: '/assets/images/example-img-3.png',
  },
  {
    title: 'Customer Feedback Analyzer',
    description:
      'Analyze public reviews by topic or sentiment. Send insights to Slack or Sheets.',
    icon: '/assets/images/example-img-4.png',
  },
  {
    title: 'Research Aggregator',
    description:
      'Summarize articles and updates into daily briefings via bot or email.',
    icon: '/assets/images/example-img-5.png',
  },
  {
    title: 'Auto-Sync Between Tools',
    description:
      'Sync tools like Notion or Sheets. Transfer data and trigger tasks.',
    icon: '/assets/images/example-img-6.png',
  },
  {
    title: 'AI Email Classifier',
    description: 'Sort incoming emails by topic or urgency and push summaries.',
    icon: '/assets/images/example-img-7.png',
  },
  {
    title: 'Job Tracker or Lead Qualifier',
    description:
      'Scrape listings, match results to your criteria, and send alerts.',
    icon: '/assets/images/example-img-8.png',
  },
];

const UseCase = () => {
  return (
    <section className="px-4 lg:px-0 py-10 lg:py-20">
      {/* Title Section */}
      <div className="max-w-4xl mx-auto mb-10">
        <h3 className="title">Example Use Cases</h3>
        <p className="text-title">
          These are just a few agent types you can build with Texor. Anything
          with
          <br className="break" />
          logic and data can be turned into an agent.
        </p>
      </div>
      {/* Cards Container */}
      {/* Desktop/Tablet View: Grid with Specific Arrow Directions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8 gap-4 max-w-[1352px] w-[97%] mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`h-[256px] w-[320px] relative border border-accent p-4 rounded-lg`}
          >
            <div className="border border-accent/20 rounded-xl p-[6px] w-[58px] h-[60px]">
              <div className="border border-accent rounded-[10px] flex items-center justify-center w-full h-full">
                <img
                  className="rounded-2xl "
                  src={step.icon}
                  alt={`${step.title} Icon`}
                  width={26}
                  height={26}
                />
              </div>
            </div>
            <div className="">
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm ">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCase;
