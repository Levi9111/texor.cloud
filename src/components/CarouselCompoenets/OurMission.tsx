import file from '/icons/file.png';

const ourMissionData = [
  'Texor.Cloud makes automation accessible and owned by the people who build it.',
  'Anyone should be able to create AI agents without relying on dev teams or closed platforms.',
  'No coding barriers. No lock-in. Just one place to create, run, and scale AI agents that work.',
  'Texor.Cloud is for builders turning ideas into logic and automation into action.',
];

const OurMission = () => (
  <div className="px-4 sm:px-6 md:px-10 lg:px-0 w-full flex flex-col items-center  py-10 lg:py-20">
    <h3 className="text-[38px] sm:text-[50px] md:text-[66px] font-[650] leading-[110%] tracking-0 text-center text-foreground">
      Our mission
    </h3>

    <p className="text-base sm:text-lg md:text-xl font-[400] leading-[160%] tracking-0 text-center mt-4 text-muted">
      We believe automation should be open, flexible, and in the{' '}
      <br className="hidden sm:block" /> hands of its creators.
    </p>

    <div className="mt-10 sm:mt-[60px] w-full max-w-[985px] px-4 sm:px-7 py-6 sm:py-10 space-y-5 sm:space-y-6 bg-[#122939]/5 backdrop-blur-[16px] rounded-[20px] border border-[#122939]">
      {ourMissionData.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-3 text-start text-muted"
        >
          <img
            src={file}
            alt="File"
            width={22}
            height={22}
            className="mt-[6px] w-[22px] h-[22px] sm:w-[26px] sm:h-[24px]"
          />
          <p className="text-[16px] sm:text-[18px] md:text-2xl font-[400] leading-[145%] tracking-0">
            {item}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default OurMission;
