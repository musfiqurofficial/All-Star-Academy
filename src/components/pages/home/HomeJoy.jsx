import React from "react";
import JoyImg from "../../../assets/Home-Page/H-Card-Images/joy-in-learning-2.webp";

const HomeJoy = () => {
  return (
    <div className="bg-[#FAFAFA] py-0 sm:py-20">
      <div className="px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex flex-col justify-center items-center">
          <img src={JoyImg} alt="" />
          <h1 className="text-[32px] font-[600] uppercase my-6">
            JOY IN LEARNING
          </h1>
          <h3 className="w-full sm:w-9/12 text-[26px] text-justify font-light">
            Our students develop a love of learning and meet their current
            potential academically, socially, and emotionally within 6 months.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HomeJoy;
