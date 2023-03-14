import React from "react";
import banner from "../../../assets/Home-Page/Banner/cover.webp";
const AboutCover = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center h-[300px] sm:h-[450px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${banner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h4 className="text-center text-white font-[600] text-[42px]">
        ABOUT US
      </h4>
    </div>
  );
};

export default AboutCover;
