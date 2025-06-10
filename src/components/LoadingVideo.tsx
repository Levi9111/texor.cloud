import loadingVideo from '/videos/loading-video.mp4';

const LoadingVideo = () => {
  return (
    <div className="absolute inset-0 z-0">
      <video
        className="w-full h-full object-cover"
        src={loadingVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Optional dark overlay to improve readability */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40" /> */}
    </div>
  );
};

export default LoadingVideo;
