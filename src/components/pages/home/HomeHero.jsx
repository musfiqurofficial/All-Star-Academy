import React from "react";
import HeroImg from "../../../assets/Home-Page/Banner/cover.webp";

const HomeHero = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${HeroImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "520px",
      }}
    >
      <h1 className="text-center text-white font-[600] text-[32px] md:w-11/12">
        DEVELOPING EACH CHILD TO THEIR POTENTIAL
      </h1>
      <div className="absolute -bottom-8 p-4 border-2 border-green-600 bg-[#fff] hover:bg-green-600 hover:text-[#fff] hover:duration-500 font-[600] text-lg uppercase">
        <a href="/https://allstarkiddos.lpages.co/infopacket/" target="_blank">
          Download Info Packet
        </a>
      </div>
    </div>
  );
};

export default HomeHero;
