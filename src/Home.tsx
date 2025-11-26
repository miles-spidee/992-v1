import VideoPlayer from './components/VideoPlayer';
import Intro from './components/intro';

const Home = () => {
  return (
    <div>
      <VideoPlayer src="/videos/GT3RS.mp4" />
      <div className="video-overlay-content">
        <h2>Born for the Track.</h2><h1> Built for Legends.</h1>
      </div>
      <Intro/>
    </div>
  );
};

export default Home;
