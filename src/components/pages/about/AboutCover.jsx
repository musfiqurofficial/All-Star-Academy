import React from "react";
import banner from "../../../assets/Home-Page/Banner/cover.webp";
const AboutCover = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${banner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "450px",
      }}
    >
      <h4 className="text-5xl text-center text-white p-52 font-semibold">
        ABOUT US
      </h4>
    </div>
  );
};

export default AboutCover;
