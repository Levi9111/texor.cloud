import { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../Button';
import useOverScroll from '../../hooks/useOverScroll';

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

const Features = ({
  onNavigation,
}: {
  onNavigation: (index: number) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { overScrolledAtBottom, overScrolledAtTop } = useOverScroll(768);

  if (!isOpen) {
    if (overScrolledAtTop) onNavigation(2);
    if (overScrolledAtBottom) onNavigation(4);
  }
  return (
    <section className="px-4 lg:px-0 py-10 lg:py-20 md:pb-0 pb-20 md:mt-10">
      {/* Title Section */}
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <h3 className="title ">What You Can Do With Texor.Cloud</h3>
        <p className="text-title mt-2">
          Texor.Cloud gives you a powerful set of tools to create, connect,
          <br className="hidden sm:inline" />
          and launch AI agents without code.
        </p>
      </div>

      <Button onClick={() => setIsOpen(true)}>Benefits</Button>

      {/* Cards Container */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto md:flex-col md:justify-center  h-fit">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative border border-accent rounded-lg p-5 flex flex-col justify-start gap-2  w-full"
              style={{
                minHeight: '220px',
              }}
            >
              <div className="w-16 min-h-16 rounded-lg border border-accent flex items-center justify-center mb-3">
                <img
                  src={step.icon}
                  alt={`${step.title} Icon`}
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <h3 className="text-[20px] font-[650] leading-145 tracking-[-2%] mb-1 text-foreground">
                  {step.title}
                </h3>
                <p className="text-base text-[#a6a7a7] leading-145 tracking-0 font-[400]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </section>
  );
};

export default Features;
