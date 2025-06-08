const Hero = () => (
  <section className="px-4 md:px-10  py-10 lg:py-20 md:pb-0 pb-20">
    <h1 className="text-[42px] sm:text-[60px] md:text-[80px] font-[650] leading-[110%] tracking-[-0.03em] text-center text-foreground">
      Turn Logic Into Action With <br className="hidden sm:block" /> No-Code AI
      Agents
    </h1>

    <p className="mt-6 mb-10 sm:mb-12 text-center text-lg sm:text-xl md:text-2xl leading-[140%] tracking-0 font-[400] text-muted">
      Texor.Cloud is your no-code platform for building and automating AI
      agents. <br className="hidden sm:block" />
      From workflows to alerts, trading to research, and everything in between.{' '}
      <br className="hidden sm:block" />
      All without writing code.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-5">
      <button className="w-[90%] sm:w-[220px] md:w-[249px] h-[64px] md:h-[74px] rounded-full text-xl md:text-2xl text-[#39373C] font-[500] bg-gradient-to-r from-[#3EFFBE] to-[#20E1A0] transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
        Building
      </button>

      <button className="w-[90%] sm:w-[220px] md:w-[249px] h-[64px] md:h-[74px] rounded-full text-xl md:text-2xl text-white font-[500]  transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-background cursor-pointer border border-accent text-[20px] tracking-0 hover:bg-accent">
        Community
      </button>
    </div>

    <p className="text-[#e7e7e8] text-center text-xl sm:text-2xl md:text-[28px] font-[500] leading-[140%] tracking-0 mt-10 md:mt-11">
      A new way to build and automate with AI
    </p>
  </section>
);

export default Hero;
