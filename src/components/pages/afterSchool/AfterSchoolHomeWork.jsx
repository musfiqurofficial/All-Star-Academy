import React from "react";
import HomeWork1 from "../../../assets/School/hw/home-work.webp";
import HomeWork2 from "../../../assets/School/hw/home-work-2.webp";
import work3 from '../../../assets/School/hw/work3.webp'


const AfterSchoolHomeWork = () => {
  return (
    <div className="bg-[#fff] my-20">
      <div className="px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg md:px-18 lg:px-8">
        <h1 className="text-center font-[400] text-[36px]">
          What Will our Days Look Like?
        </h1>
        <h3 className="text-center font-[300] text-[20px] mt-3 mb-8">
          We have <span className="text-center font-[400]  text-[22px]">Homework Help</span> available everyday
        </h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center">
          <img src={HomeWork1} alt="" />
          <img src={HomeWork2} alt="" />
          <img src={work3} alt="" />
        </div>
      </div>

      <div className=' mt-4'>

        <div className=" bg-[#0D5EBA] relative">
          <div className="flex flex-col-reverse sm:flex-row justify-center items-center h-[130px] px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl md:px-18 lg:px-8 gap-5">
            <h1 className=" text-center text-white font-[600] text-[44px] sm:text-[32px] mx-auto">
              A Few Common Questions
            </h1>
          </div>
        </div>




      </div>
    </div>
  );
};

export default AfterSchoolHomeWork;
