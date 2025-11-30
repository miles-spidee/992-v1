import React from 'react';

const Hero = () => {
  return (
    <section className='relative h-screen w-full'>
      <h1
        className="absolute top-6 left-1/2 -translate-x-1/2 z-30 text-white tracking-widest text-xl md:text-2xl font-semibold font-porsche"
      >
        PORSCHE
      </h1>

      <video
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        controlsList="nofullscreen noplaybackrate nodownload noremoteplayback"
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        src="/videos/GT3RS.mp4"
        onContextMenu={(e) => e.preventDefault()}
      />

      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white font-porsche">
        {/* Intro line with TRACK on the same line and same size */}
        {/* <h2 className="text-xl md:text-3xl font-light font-boldonse">
          Born for the <span className="font-bold">TRACK</span>
        </h2> */}
  <h1 className="mt-6 text-xl md:text-2xl font-semibold font-calli">Built For</h1>
  <div className="mt-1 text-6xl md:text-8xl font-extrabold tracking-wide">LEGENDS</div>
      </div>
    </section>
  );
};

export default Hero;
