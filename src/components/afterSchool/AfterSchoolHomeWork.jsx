import React from "react";
import HomeWork1 from "../../assets/School/home-work.webp";
import HomeWork2 from "../../assets/School/home-work-2.webp";
import HomeWork3 from "../../assets/School/home-work3.webp";

const AfterSchoolHomeWork = () => {
  return (
    <div className="bg-[#fff] my-20">
      <div className="px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg md:px-18 lg:px-8">
        <h1 className="text-center font-[400] text-[36px]">
          What Will our Days Look Like?
        </h1>
        <h3 className="text-center font-[300] text-[20px] mt-3 mb-8">
          We have{" "}
          <span className="text-center font-[400]  text-[22px]">
            Homework Help
          </span>{" "}
          available everyday
        </h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center">
          <img src={HomeWork1} alt="" />
          <img src={HomeWork2} alt="" />
          <img src={HomeWork3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AfterSchoolHomeWork;
