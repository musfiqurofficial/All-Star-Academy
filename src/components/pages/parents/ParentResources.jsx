import React from "react";

const ParentResources = () => {
  return (
    <div className="bg-[#fff] my-20">
      <div className="px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg md:px-18 lg:px-8">
        <h1 className="text-center font-[400] text-[36px]">Parent Resources</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 lg:gap-8 gap-4 mt-16 items-center">
          <div className="p-4 border-2 border-green-600 bg-[#fff] hover:bg-green-600 hover:text-[#fff] hover:duration-500 font-[600] text-center uppercase">
            <a
              href="https://secure.gradelink.com/gradelink"
              target="_blank"
            >
              GRADELINK LOGIN
            </a>
          </div>
          <div className="p-4 border-2 border-green-600 bg-[#fff] hover:bg-green-600 hover:text-[#fff] hover:duration-500 font-[600] text-center uppercase">
            <a
              href="https://allstarkiddos.lpages.co/infopacket/"
              target="_blank"
            >
              STUDENT DIRECTORY
            </a>
          </div>
          <div className="p-4 border-2 border-green-600 bg-[#fff] hover:bg-green-600 hover:text-[#fff] hover:duration-500 font-[600] text-center uppercase">
            <a
              href="https://allstarkiddos.lpages.co/infopacket/"
              target="_blank"
            >
              2022-23 SCHOOL CALENDAR
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentResources;
