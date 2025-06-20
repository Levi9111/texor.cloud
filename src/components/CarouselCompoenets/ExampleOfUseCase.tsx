import { useState } from 'react';
import Button from '../Button';
import Modal from '../ui/Modal';
import useOverScroll from '../../hooks/useOverScroll';
import clsx from 'clsx';

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

const UseCase = ({
  onNavigation,
}: {
  onNavigation: (index: number) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { overScrolledAtBottom, overScrolledAtTop } = useOverScroll(768);

  if (!isOpen) {
    if (overScrolledAtTop) onNavigation(4);
    if (overScrolledAtBottom) onNavigation(6);
  }
  return (
    <section className="px-4 lg:px-0 py-10 lg:py-20 md:pb-0 pb-20 md:mt-10">
      {/* Title Section */}
      <div className="max-w-4xl mx-auto mb-10 text-center">
        <h3 className="title ">Example Use Cases</h3>
        <p className="text-title mt-2">
          These are just a few agent types you can build with Texor. Anything
          with <br className="break" /> logic and data can be turned into an
          agent.
        </p>
      </div>

      <Button onClick={() => setIsOpen(true)}>Use Case</Button>

      {/* Cards Container */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-5 mx-auto z-40 h-full">
          {steps.map((step, index) => (
            <div
              key={index}
              className={clsx(
                'max-w-[320px] w-full h-[256px] border border-accent p-5 rounded-lg flex flex-col gap-4 ',
                [0, 1, 2, 3].includes(index) && 'md:self-end'
              )}
            >
              <div className="border border-accent/20 rounded-xl p-2 w-14 h-14">
                <div className="border border-accent rounded-[10px] flex items-center justify-center w-full h-full">
                  <img
                    className="rounded-xl"
                    src={step.icon}
                    alt={`${step.title} Icon`}
                    width={26}
                    height={26}
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-[20px] font-[650] leading-145 tracking-[-2%] mb-1 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-145 tracking-[-1%] font-[400] ">
                  {step.description}
                </p>
              </div>
              {index === 0 && (
                <a
                  href="https://t.me/texorwallet_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-4 w-[103px] h-[34px] rounded-lg border border-accent text-[15px] text-foreground leading-145 tracking-0 capitalize hover:bg-accent hover:text-background transition-colors duration-300 cursor-pointer">
                    Try it out
                  </button>
                </a>
              )}
            </div>
          ))}
        </div>
      </Modal>
    </section>
  );
};

export default UseCase;
