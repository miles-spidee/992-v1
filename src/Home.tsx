import VideoPlayer from './components/VideoPlayer';

const Home = () => {
  return (
    <div>
      <VideoPlayer src="/videos/GT3RS-1.mp4" />
      <div className="video-overlay-content">
        <h2>Born for the Track.</h2><h1> Built for Legends.</h1>
      </div>
    </div>
  );
};

export default Home;
