import React from "react";
import HowImg from "../../../assets/Home-Page/H-Card-Images/Howweteach-3.webp";
import WhyImg from "../../../assets/Home-Page/H-Card-Images/Whywecare-4.webp";
import { IoIosArrowForward } from "react-icons/io";

const HomeHowWeTeach = () => {
  return (
    <div>
      <div className="flex lg:flex-row md:flex-row flex-col-reverse justify-center items-center gap-10">
        <div className="w-full px-2 sm:px-0 sm:w-[70%] lg:ml-10 md:ml-5 mx-auto text-center sm:text-start">
          <h1 className="text-[32px] font-[600] my-3">How we teach</h1>
          <p className="text-[18px]">
            We provide a personalized education in classes of 8 students. We
            integrate emotional intelligence, cognitive ability development, and
            outdoor learning with individualized academics and plenty of
            optional specialist classes.
          </p>
          <a
            href="https://calendly.com/brandysimison/60min?month=2023-03"
            className="px-6 py-3 font-light text-sm border border-[#0170B8] text-[#0170B8] hover:bg-[#0170B8] hover:text-white hover:duration-500 uppercase flex justify-around items-center my-2 w-9/12 sm:w-1/2 mx-auto sm:mx-0"
            aria-label="Book a tour"
          >
            Book a tour <IoIosArrowForward className="w-5 h-5" />
          </a>
        </div>
        <div
          className=""
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${HowImg})`,
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
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${WhyImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "350px",
          }}
        ></div>
        <div className="w-full px-2 sm:px-0 sm:w-[70%] lg:mr-10 mx-auto text-center sm:text-start">
          <h1 className="text-[32px] font-[600] my-3">Why we care</h1>
          <p className="text-[18px] italic mb-2">
            "Children are the world's greatest resource and our best hope for
            the future." - J.F.K.
          </p>
          <p className="text-[18px]">
            We believe that having spiritually aligned, socially attuned,
            intelligent, tenacious and creative members of society will diminish
            our worldly problems over time.
          </p>
          <a
            href="https://calendly.com/brandysimison/60min?month=2023-03"
            className="px-6 py-3 font-light text-sm border border-[#0170B8] text-[#0170B8] hover:bg-[#0170B8] hover:text-white hover:duration-500 uppercase flex justify-around items-center my-2 w-9/12 sm:w-1/2 mx-auto sm:mx-0"
            aria-label="Book a tour"
          >
            Book a tour <IoIosArrowForward className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeHowWeTeach;
