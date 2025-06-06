const UseCase = () => {
  const steps = [
    {
      title: 'Portfolio AI Agent',
      description: 'Track wallets, calculate P&L, and get staking or airdrop alerts.',
      icon: '/assets/images/useCase-1.png',
    },
    {
      title: 'Crypto Trading Bot',
      description: 'Automate strategies that pull data, calculate indicators, and place trades.',
      icon: '/assets/images/useCase-2.png',
    },
    {
      title: 'Wallet Monitoring Agent',
      description: 'Track wallet or contract activity and get real-time alerts.',
      icon: '/assets/images/useCase-3.png',
    },
    {
      title: 'Customer Feedback Analyzer',
      description: 'Analyze public reviews by topic or sentiment. Send insights to Slack or Sheets.',
      icon: '/assets/images/useCase-4.png',
    },
    {
      title: 'Research Aggregator',
      description: 'Summarize articles and updates into daily briefings via bot or email.',
      icon: '/assets/images/useCase-5.png',
    },
    {
      title: 'Auto-Sync Between Tools',
      description: 'Sync tools like Notion or Sheets. Transfer data and trigger tasks.',
      icon: '/assets/images/useCase-6.png',
    },
    {
      title: 'AI Email Classifier',
      description: 'Sort incoming emails by topic or urgency and push summaries.',
      icon: '/assets/images/useCase-7.png',
    },
    {
      title: 'Job Tracker or Lead Qualifier',
      description: 'Scrape listings, match results to your criteria, and send alerts.',
      icon: '/assets/images/useCase-8.png',
    },
  ];
  return (
    <section className="px-4 lg:px-0 py-10 lg:py-20">
      {/* Title Section */}
      <div className="max-w-4xl mx-auto mb-10">
        <h3 className="title">Example Use Cases</h3>
        <p className="text-title">
          These are just a few agent types you can build with Texor. Anything with 
          <br className="break" />
        logic and data can be turned into an agent.
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
              <div style={{
                  background:
                    'linear-gradient(180deg, rgba(6, 109, 75, 0) 35.45%, rgba(3, 79, 53, 0.5) 100.5%, rgba(2, 70, 47, 0.639423) 118.63%, #003020 165.54%)',
                }} className="border-[1.25px] border-[#003A27] rounded-lg p-3 w-full h-full">
                <div className="mb-6">
                <img className="rounded-2xl " 
                style={{
                  //  shadow all around spread 50px
                  boxShadow: '0 0 50px #066D4B',
                }}
                src={step.icon} alt={`${step.title} Icon`} />
              </div>
              <div
                
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

export default UseCase;
