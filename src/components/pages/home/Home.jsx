import React from "react";
import HomeCategoryCard from "./HomeCategoryCard";
import HomeHero from "./HomeHero";
import HomeJoy from "./HomeJoy";
import HomeReview from "./Review/HomeReview";
import HomeWhatDoWe from "./HomeWhatDoWe";
import HomeWhoWeAre from "./HomeWhoWeAre";
import GoogleMap from "./GoogleMap";
import HomeCard from "./HomeCard";
import HomeReady from "./HomeReady";

const Home = () => {
  return (
    <div className="mb-10">
      <div className="hidden md:block lg:block">
        <HomeHero />
      </div>
      <HomeJoy />
      <HomeCategoryCard />
      <HomeWhoWeAre />
      <HomeWhatDoWe />
      <GoogleMap />
      <HomeReview />
      <HomeCard />
      <HomeReady />
    </div>
  );
};

export default Home;
