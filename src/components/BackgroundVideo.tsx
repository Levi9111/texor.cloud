import bgVideo1 from '/videos/bg-video-1.mp4';

const BackgroundVideo = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-[-1]">
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={bgVideo1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
