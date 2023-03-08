import React from "react";
import HomeHero from "./HomeHero";
import HomeJoy from "./HomeJoy";

const Home = () => {
  return (
    <div className="mb-10">
      <div className="hidden md:block lg:block">
        <HomeHero />
      </div>
      <HomeJoy />
    </div>
  );
};

export default Home;
