const Features = () => {
  const steps = [
    {
      title: 'No-Code Agent Builder',
      description:
        'Design automation flows using a fast, drag-and-drop interface',
      icon: '/assets/images/features1.png',
    },
    {
      title: 'AI Agent Marketplace',
      description:
        'Buy, sell, or share agents. Use what others built or monetize your own',
      icon: '/assets/images/features2.png',
    },
    {
      title: 'AI Model Integration',
      description: 'Connect to any external service to send or receive data',
      icon: '/assets/images/features3.png',
    },
    {
      title: 'API and Webhook Support',
      description: 'Send alerts or update performance tracking',
      icon: '/assets/images/features4.png',
    },
    {
      title: 'Instant Agent Deployment',
      description: 'Run agents without setup, servers, or infrastructure',
      icon: '/assets/images/features5.png',
    },
    {
      title: 'Real-Time Execution and Scheduling',
      description: 'Trigger flows instantly or based on custom time rules',
      icon: '/assets/images/features6.png',
    },
    {
      title: 'Blockchain Interaction',
      description:
        'Create agents that work with wallets, smart contracts, or on-chain data.',
      icon: '/assets/images/features7.png',
    },
    {
      title: 'Universal Integrations',
      description:
        'Connect to web apps, databases, wallets, or messaging platforms without limits.',
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
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative border border-accent rounded-lg w-[267px] h-[265px] p-4 flex flex-col justify-between`}
          >
            <div className="w-12 h-12 rounded-lg border border-accent flex items-center justify-center">
              <img
                src={step.icon}
                alt={`${step.title} Icon`}
                width={26}
                height={26}
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm ">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
