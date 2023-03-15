import React from "react";
import HeroImg1 from "../../../assets/School/Card/school1.webp";
import HeroImg2 from "../../../assets/School/Card/school2.webp";
import HeroImg3 from "../../../assets/School/Card/school3.webp";
import HeroImg4 from "../../../assets/School/Card/school4.webp";

const AfterSchoolHero = () => {
  return (
    <div className="relative">
      <h1 className="absolute flex top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white font-[800] text-[32px]">
        AFTER-SCHOOL PROGRAM
      </h1>
      <div className="grid grid-cols-4">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${HeroImg1})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "450px",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${HeroImg2})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "450px",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${HeroImg3})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "450px",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${HeroImg4})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "450px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default AfterSchoolHero;
