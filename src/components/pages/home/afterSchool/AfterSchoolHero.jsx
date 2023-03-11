import React from "react";
import HeroImg1 from "../../../../assets/After-School/Card/school1.webp";
import HeroImg2 from "../../../../assets/After-School/Card/school2.webp";
import HeroImg3 from "../../../../assets/After-School/Card/school3.webp";
import HeroImg4 from "../../../../assets/After-School/Card/school4.webp";

const AfterSchoolHero = () => {
  return (
    <div className="relative">
      <h1 className="absolute flex top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white font-[800] text-[32px]">
        AFTER-SCHOOL PROGRAM
      </h1>
      <div className="grid grid-cols-4">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${HeroImg1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "520px",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${HeroImg2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "520px",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${HeroImg3})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "520px",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${HeroImg4})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "520px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default AfterSchoolHero;

{
  /* <h1 className="text-center text-white font-[600] text-[32px] md:w-11/12">
          DEVELOPING EACH CHILD TO THEIR POTENTIAL
        </h1> */
}
