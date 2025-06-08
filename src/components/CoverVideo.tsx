import bgVideo from '/videos/bg-video-2.mp4';
import bgVideoMobile from '/videos/bg-video-mobile-2.mp4';

const CoverVideo = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-[-1]">
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={bgVideo} type="video/mp4" media="(min-width: 769px)" />
        <source
          src={bgVideoMobile}
          type="video/mp4"
          media="(max-width: 768px)"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default CoverVideo;
