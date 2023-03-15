import React from "react";
import ac from "../../../assets/Admisstios/ac.webp";

const AdmissionsCover = () => {
  return (
    <div className="bg-[#0D5EBA]">
      <div
        className="flex flex-col justify-center items-start h-[300px] sm:h-[450px]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${ac})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className=" text-white font-[600] text-[42px] ml-5 sm:ml-20">
          Admissions <br />
          <span className="font-[300] text-xl">Open Enrollment</span>
        </p>
      </div>
    </div>
  );
};

export default AdmissionsCover;
