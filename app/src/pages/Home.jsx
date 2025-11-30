import Hero from "../components/Hero";import React from 'react';
import Featured from "../components/Featured";
import LatestProducts from "../components/LatestProducts";

const Home = () => {
  return (
    <>
      <Hero/>
      <Featured/>
      <LatestProducts/>
    </>
  );
};

export default Home;
