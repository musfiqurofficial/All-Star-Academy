import React from "react";
import HomeCategoryCard from "./HomeCategoryCard";
import HomeHero from "./HomeHero";
import HomeJoy from "./HomeJoy";
import HomeWhoWeAre from "./HomeWhoWeAre";

const Home = () => {
  return (
    <div className="mb-10">
      <div className="hidden md:block lg:block">
        <HomeHero />
      </div>
      <HomeJoy />
      <HomeCategoryCard />
      <HomeWhoWeAre />
    </div>
  );
};

export default Home;
