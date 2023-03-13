import React from "react";
import Transport from "../../../assets/School/Card/car.webp";

const AfterSchoolTransportation = () => {
  return (
    <div className=" bg-[#4EBA59] relative">
      <div className="flex flex-col-reverse sm:flex-row justify-center items-center h-[175px] px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl md:px-18 lg:px-8 gap-5">
        <h6 className=" text-center text-white font-[600] text-[18px] sm:text-[20px] mx-auto">
          Transportation is included from: <br /> · Cascade View & Timber Ridge
          Elementary Schools via our bus · Clark Elementary students are have a
          bus stop here
        </h6>
        <img className="absolute sm:static -top-40 " src={Transport} alt="" />
      </div>

    </div>
  );
};

export default AfterSchoolTransportation;
