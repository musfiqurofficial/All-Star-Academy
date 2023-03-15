import React from "react";
import birth from "../../../assets/birthday/birth.webp";
import newb from "../../../assets/birthday//newb.webp";
import { Link } from "react-router-dom";
import Calendly from "../Calendly/Calendly";

const Birthday = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${birth})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "400px",
        }}
      >
        <p className="text-5xl text-center text-white p-40 font-semibold">
          Birthdays! <br />
        </p>
      </div>

      <div className="my-10">
        <div className="text-center">
          <h1 className="font-bold text-4xl">
            Birthday Parties for 3-10 year olds!
          </h1>
          <p className="text-[#E57022] my-2 text-[20px]">
            “Sometimes, you will never know the value of a moment until it{" "}
            <br /> becomes a memory.” ―Dr. Seuss
          </p>
        </div>

        <div className="mx-auto max-w-full md:max-w-full lg:max-w-screen-lg md:px-18 lg:px-8 my-10">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <div className="col-span-2">
              <h1 className="text-3xl font-semibold">
                Are you ready for a private, easy, FUN birthday party?!{" "}
              </h1>{" "}
              <br />
              <p className="text-base">
                We'll handle the activities,{" "}
                <span className="font-semibold text-[#093F7C] text-lg ">
                  you handle the food & drinks!
                </span>
                <br /> <br />
                Your party will be fully staffed and we will be your guide for
                each activity of horseback riding,
                <br /> bounce house time, and carnival games.
                <br />
                <br />
                <span className="font-semibold text-[#093F7C] text-lg">
                  The room will be decorated
                </span>{" "}
                with "typical" birthday party decorations. You may see the
                decorations we use <span className="underline">HERE.</span>{" "}
                <br /> <br />
                <span className="font-semibold text-[#093F7C] text-lg">
                  {" "}
                  Read the specifics and register via the calendar below
                </span>{" "}
                by requesting a certain day & time via emailing:
                brandy@allstarkiddos.com. <br /> <br />
                <span className="underline">Please note:</span> when registering
                (below) via mobile device, when you select your preferred date,
                you may need to scroll up to see the available times. Call/text:
                425-526-4600 with any questions!
              </p>
            </div>

            <div className="flex justify-end items-center">
              <img src={newb} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <Calendly></Calendly>
      </div>
    </div>
  );
};

export default Birthday;
