interface WarningValue {
  type: 'warning';
  text: string;
}

type FeatureValue = boolean | WarningValue;

interface Feature {
  name: string;
  texorCloud: FeatureValue;
  autoGPT: FeatureValue;
  botpress: FeatureValue;
  n8n: FeatureValue;
}

interface Platform {
  key: keyof Omit<Feature, 'name'>;
  name: string;
  highlight: boolean;
}

const WhyTexorCloud = () => {
  const features: Feature[] = [
    {
      name: 'No-Code Visual Builder',
      texorCloud: true,
      autoGPT: false,
      botpress: true,
      n8n: true,
    },
    {
      name: 'AI Model Integration',
      texorCloud: true,
      autoGPT: true,
      botpress: true,
      n8n: { type: 'warning', text: 'Basic OpenAI Support' },
    },
    {
      name: 'On-Chain Interaction',
      texorCloud: true,
      autoGPT: false,
      botpress: false,
      n8n: false,
    },
    {
      name: 'Agent Marketplace',
      texorCloud: true,
      autoGPT: false,
      botpress: false,
      n8n: false,
    },
    {
      name: 'Workflow Automation',
      texorCloud: true,
      autoGPT: { type: 'warning', text: 'Prompt-chained only' },
      botpress: { type: 'warning', text: 'Chat-focused only' },
      n8n: true,
    },
    {
      name: 'Multi-Platform Integration',
      texorCloud: true,
      autoGPT: { type: 'warning', text: 'Script-based only' },
      botpress: true,
      n8n: true,
    },
    {
      name: 'Self-Hosting Option',
      texorCloud: true,
      autoGPT: true,
      botpress: true,
      n8n: true,
    },
  ];

  const platforms: Platform[] = [
    { key: 'texorCloud', name: 'TexorCloud', highlight: true },
    { key: 'autoGPT', name: 'AutoGPT', highlight: false },
    { key: 'botpress', name: 'Botpress', highlight: false },
    { key: 'n8n', name: 'n8n', highlight: false },
  ];

  const renderFeatureValue = (value: FeatureValue) => {
    if (value === true) {
      return (
        <div className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-green-400 text-white text-sm font-bold">
          ✓
        </div>
      );
    } else if (value === false) {
      return (
        <div className="inline-flex items-center justify-center w-6 h-6 text-red-400 text-lg font-bold">
          ✕
        </div>
      );
    } else {
      return (
        <div className="inline-flex items-center justify-center">
          <span className="text-yellow-400 text-xs font-medium px-2 py-1 bg-yellow-400/10 rounded border border-yellow-400/20">
            {value.text}
          </span>
        </div>
      );
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 md:pb-0 pb-20">
      {/* Title Section */}
      <div className="max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16 text-center">
        <h2 className="title">Why Texor.Cloud</h2>
        <p className="text-title">
          Most tools focus on just one layer of automation. Texor.Cloud{' '}
          <br className="break" /> connects them all in one platform.
        </p>
      </div>

      {/* Mobile Accordion Layout (xs to md) */}
      <div className="block lg:hidden space-y-3 sm:space-y-4">
        {features.map((feature, index) => (
          <div
            key={`mobile-${index}`}
            className="rounded-xl sm:rounded-2xl border border-slate-700/50 bg-slate-900/10 backdrop-blur-sm overflow-hidden"
          >
            {/* Feature Header */}
            <div className="px-4 py-3 sm:px-6 sm:py-4 bg-slate-800/30 border-b border-slate-700/30">
              <h3 className="text-white font-semibold text-sm sm:text-base">
                {feature.name}
              </h3>
            </div>

            {/* Platform Comparison Grid */}
            <div className="p-3 sm:p-4">
              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                {platforms.map((platform) => (
                  <div
                    key={`${feature.name}-${platform.key}`}
                    className={`flex items-center justify-between p-3 sm:p-4 rounded-lg border transition-all duration-200 ${
                      platform.highlight
                        ? 'border-blue-400/30 bg-blue-500/5 shadow-sm'
                        : 'border-slate-600/30 bg-slate-800/20'
                    }`}
                  >
                    <span
                      className={`font-medium text-sm sm:text-base ${
                        platform.highlight ? 'text-blue-300' : 'text-gray-300'
                      }`}
                    >
                      {platform.name}
                    </span>
                    <div className="flex items-center ml-2">
                      {renderFeatureValue(feature[platform.key])}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table Layout */}
      <div className="hidden lg:block text-[#C0C3C2] px-10">
        <div className="rounded-[20px] border-2 border-[#263D4D] bg-[#00050366] backdrop-blur-md overflow-hidden max-w-[1007px] h-[642px] w-full mx-auto">
          <table className="text-left border-separate border-spacing-0 h-full w-full">
            <thead>
              <tr>
                <th className="p-4 font-semibold border border-[#263D4D] text-left">
                  Feature
                </th>
                <th className="p-4 font-semibold border border-[#263D4D] text-center bg-accent/10">
                  TexorCloud
                </th>
                <th className="p-4 font-semibold border border-[#263D4D] text-center">
                  AutoGPT
                </th>
                <th className="p-4 font-semibold border border-[#263D4D] text-center">
                  Botpress
                </th>
                <th className="p-4 font-semibold border border-[#263D4D] text-center">
                  n8n
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="hover:bg-gray-800/70">
                  <td className="p-4 border border-[#263D4D] font-medium">
                    {feature.name}
                  </td>
                  <td className="p-4 border border-[#263D4D] text-center bg-accent/5">
                    <div className="flex justify-center">
                      {renderFeatureValue(feature.texorCloud)}
                    </div>
                  </td>
                  <td className="p-4 border border-[#263D4D] text-center">
                    <div className="flex justify-center">
                      {renderFeatureValue(feature.autoGPT)}
                    </div>
                  </td>
                  <td className="p-4 border border-[#263D4D] text-center">
                    <div className="flex justify-center">
                      {renderFeatureValue(feature.botpress)}
                    </div>
                  </td>
                  <td className="p-4 border border-[#263D4D] text-center">
                    <div className="flex justify-center">
                      {renderFeatureValue(feature.n8n)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default WhyTexorCloud;
