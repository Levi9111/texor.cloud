const WhyTextCloud = () => {
  const features = [
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

  return (
    <section className="px-4 lg:px-0  py-10 lg:py-20">
      {/* Title Section */}
      <div className="max-w-4xl mx-auto mb-10">
        <h3 className="title">Why Texor.Cloud</h3>
        <p className="text-title">
          Most tools focus on just one layer of automation. Texor.Cloud
          <br className="break" />
          connects them all in one platform.
        </p>
      </div>
      {/* Cards Container */}
      <div className="text-[#C0C3C2] px-10 overflow-x-auto max-w-screen">
        <div className="rounded-[20px] border-2 border-[#263D4D] bg-[#00050366] backdrop-blur-md overflow-hidden min-w-[600px]">
          <table className="w-full text-left border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="p-2 font-semibold border border-[#263D4D] ">
                  Feature
                </th>
                <th className="p-2 font-semibold border border-[#263D4D] ">
                  TexorCloud
                </th>
                <th className="p-2 font-semibold border border-[#263D4D] ">
                  AutoGPT
                </th>
                <th className="p-2 font-semibold border border-[#263D4D] ">
                  Botpress
                </th>
                <th className="p-2 font-semibold border border-[#263D4D] ">
                  n8n
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="hover:bg-gray-800/70">
                  <td className="p-2 border border-[#263D4D]">
                    {feature.name}
                  </td>
                  <td className="p-2 border border-[#263D4D]">
                    {feature.texorCloud === true ? (
                      <span className="text-background p-1 w-6 h-6 flex items-center justify-center rounded-md bg-green-400">
                        ✔
                      </span>
                    ) : feature.texorCloud === false ? (
                      <span className="text-red-400">✖</span>
                    ) : (
                      <span className="text-yellow-400">
                        {feature.texorCloud}
                      </span>
                    )}
                  </td>
                  <td className="p-2 border border-[#263D4D]">
                    {feature.autoGPT === true ? (
                      <span className="text-background p-1 w-6 h-6 flex items-center justify-center rounded-md bg-green-400">
                        ✔
                      </span>
                    ) : feature.autoGPT === false ? (
                      <span className="text-red-400">✖</span>
                    ) : (
                      <span className="text-yellow-400">
                        {feature.autoGPT.text}
                      </span>
                    )}
                  </td>
                  <td className="p-2 border border-[#263D4D]">
                    {feature.botpress === true ? (
                      <span className="text-background p-1 w-6 h-6 flex items-center justify-center rounded-md bg-green-400">
                        ✔
                      </span>
                    ) : feature.botpress === false ? (
                      <span className="text-red-400">✖</span>
                    ) : (
                      <span className="text-yellow-400">
                        {feature.botpress.text}
                      </span>
                    )}
                  </td>
                  <td className="p-2 border border-[#263D4D]">
                    {feature.n8n === true ? (
                      <span className="text-background p-1 w-6 h-6 flex items-center justify-center rounded-md bg-green-400">
                        ✔
                      </span>
                    ) : feature.n8n === false ? (
                      <span className="text-red-400">✖</span>
                    ) : (
                      <span className="text-yellow-400">
                        {feature.n8n.text}
                      </span>
                    )}
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

export default WhyTextCloud;
