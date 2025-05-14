const VideoPlayer = ({ src }: { src: string }) => (
  <video
    className="video-background"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default VideoPlayer;
