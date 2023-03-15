import React from "react";
import cover from "../../../assets/Academic/cover.webp";
const AcademicCover = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-end h-[300px] sm:h-[450px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${cover})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h4 className="text-end text-white font-[600] text-[42px] mr-2 sm:mr-10">
        All-Star Academics
      </h4>
      <p className="text-white text-base font-[400] mr-2 sm:mr-10">
        Holistic, Individualized Curriculum
      </p>
    </div>
  );
};

export default AcademicCover;
