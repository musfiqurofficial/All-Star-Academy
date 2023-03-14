import React from "react";
import cover from "../../../assets/Academic/cover.webp";
const AcademicCover = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${cover})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "450px",
        }}
      >
        <h4 className="text-6xl uppercase text-center text-white p-52 font-semibold">
          All-Star Academics
        </h4>
      </div>
    </div>
  );
};

export default AcademicCover;
