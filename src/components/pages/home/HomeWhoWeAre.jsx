import React from "react";
import WhoImg from "../../../assets/Home-Page/H-Card-Images/whoweare.webp";
import WhatImg from "../../../assets/Home-Page/H-Card-Images/WhatWe.webp";
import { IoIosArrowForward } from "react-icons/io";
import HomeHowWeTeach from "./HomeHowWeTeach";

const HomeWhoWeAre = () => {
  const currentMonth = new Date().toISOString().slice(0, 7);
  const link = `https://calendly.com/brandysimison/60min?month=${currentMonth}`;
  return (
    <div>
      <div className="flex lg:flex-row md:flex-row flex-col-reverse justify-center items-center gap-10">
        <div className="w-full px-2 sm:px-0 sm:w-[70%] lg:ml-10 md:ml-5 mx-auto text-center sm:text-start">
          <h1 className="text-[32px] font-[600] my-3">Who we are</h1>
          <p className="text-[18px]">
            We are a warm, easy-going, and welcoming community. Our intimate
            scale uniquely equips us for family participation and building
            lasting, meaningful relationships. Alumni families will tell you
            that they made lifelong friends in our down-to-earth community.
          </p>
          <a
            href={link}
            target="_blank"
            className="px-6 py-3 font-light text-sm border border-[#0170B8] text-[#0170B8] hover:bg-[#0170B8] hover:text-white hover:duration-500 uppercase flex justify-around items-center my-2 w-9/12 sm:w-1/2 mx-auto sm:mx-0"
            aria-label="Book a tour"
          >
            Schedule A call <IoIosArrowForward className="w-5 h-5" />
          </a>
        </div>
        <div
          className=""
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${WhoImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "350px",
          }}
        ></div>
      </div>

      <div className="lg:flex md:flex justify-center items-center gap-10">
        <div
          className=""
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${WhatImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "350px",
          }}
        ></div>
        <div className="w-full px-2 sm:px-0 sm:w-[70%] lg:mr-10 mx-auto text-center sm:text-start">
          <h1 className="text-[32px] font-[600] my-3">What we do</h1>
          <p className="text-[18px]">
            We provide a safe, holistic, caring and enthusiastic, individually
            challenging learning environment so each student can develop into
            their current potential within 6 months.
          </p>
          <a
            href={link}
            target="_blank"
            className="px-6 py-3 font-light text-sm border border-[#0170B8] text-[#0170B8] hover:bg-[#0170B8] hover:text-white hover:duration-500 uppercase flex justify-around items-center my-2 w-9/12 sm:w-1/2 mx-auto sm:mx-0"
            aria-label="Book a tour"
          >
            Schedule A call <IoIosArrowForward className="w-5 h-5" />
          </a>
        </div>
      </div>
      <HomeHowWeTeach />
      <div
        className="flex flex-col justify-center items-center bg-[#4EBA59]"
        style={{ height: "175px", width: "auto" }}
      >
        <h6 className=" text-center text-white font-[600] text-[20px] sm:text-[26px]  italic w-10/12 lg:w-8/12 mx-auto">
          "Education is the most powerful weapon which you can use to change the
          world." - Nelson Mandela
        </h6>
      </div>
    </div>
  );
};

export default HomeWhoWeAre;
