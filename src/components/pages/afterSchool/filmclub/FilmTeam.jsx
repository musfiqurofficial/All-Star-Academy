import React from "react";
import filmIcon11 from "./assets/svgexport-25.svg";
import filmIcon12 from "./assets/svgexport-26.svg";
import s1 from "../../../../assets/School/Film-Club/s1.webp";
import s2 from "../../../../assets/School/Film-Club/s2.webp";
import s3 from "../../../../assets/School/Film-Club/s3.webp";

const FilmTeam = () => {
  return (
    <div>
      <div className="px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8">
        <h1 className="text-5xl text-center font-semibold my-20">Our Team.</h1>

        {/* 1st team*/}
        <div className="flex flex-col lg:flex-row justify-between items-center my-8">
          <div className="p-2">
            <img
              className="rounded-full border-2 border-[#0170B8] shadow-md mb-3 p-4 "
              src={s1}
              alt=""
              srcset=""
            />
          </div>

          <div className="mb-6 lg:mb-0 lg:w-8/12 lg:pr-5">
            <p className="font-sans text-base text-gray-700 ml-4">
              Grace O'Neil is the Leader of Film Club. She is new to All-Star
              Academy and very excited to teach others about the wonders of
              film! She is very passionate about film and aims to begin her
              career in it after high school.
            </p>
          </div>
        </div>

        {/* 2nd team*/}
        <div className="flex flex-col lg:flex-row justify-between items-center my-8">
          <div className="p-2">
            <img
              className="rounded-full border-2 border-[#0170B8] shadow-md mb-3 p-4 "
              src={s2}
              alt=""
              srcset=""
            />
          </div>

          <div className="mb-6 lg:mb-0 lg:w-8/12 lg:pr-5">
            <p className="font-sans text-base text-gray-700 ml-4">
              Taylor Jonson is the Assistant Leader of Film Club and has worked
              for All-Star Academy for four years. She has loved film from a
              young age, and is very excited to help teach others about film.
            </p>
          </div>
        </div>
        {/* 3rd team*/}
        <div className="flex flex-col lg:flex-row justify-between items-center my-8">
          <div className="p-2">
            <img
              className="rounded-full border-2 border-[#0170B8] shadow-md mb-3 p-4 "
              src={s3}
              alt=""
              srcset=""
            />
          </div>

          <div className="mb-6 lg:mb-0 lg:w-8/12 lg:pr-5">
            <p className="font-sans text-base text-gray-700 ml-4">
              Students are as much apart of our team as the leaders are. This
              course is hands on and a collaborative environment. We are all a
              team here!{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Hello section */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-10 w-11/12 mx-auto">
        <div className="grid row-span-2">
          <img
            className="h-40 w-auto"
            src="https://cdn-icons-png.flaticon.com/512/5229/5229452.png"
            alt=""
            srcset=""
          />
          <div className="flex">
            <div>
              {" "}
              <img
                className="h-40 w-auto"
                src="https://cdn-icons-png.flaticon.com/512/1921/1921048.png"
                alt=""
                srcset=""
              />
            </div>
            <div>
              {" "}
              <img
                className="h-40 w-auto"
                src="https://cdn-icons-png.flaticon.com/512/6866/6866636.png"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
        {/* video section */}

        <div className="bg-[#FC5C7D] h-80 w-full flex p-10">
          <iframe
            width="560"
            src="https://www.youtube.com/embed/p_erFBLStVg?start=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>

        <div className="grid row-span-2 ml-44">
          <img
            className="h-40 w-auto"
            src="https://cdn-icons-png.flaticon.com/512/5129/5129597.png"
            alt=""
            srcset=""
          />
          <img
            className="h-40 w-auto"
            src="https://cdn-icons-png.flaticon.com/512/9889/9889549.png"
            alt=""
            srcset=""
          />
        </div>
      </div>

      {/* Funtimes */}
      <section className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-8 border border-black">
        <div className="relative">
          <img
            className="absolute opacity-80 hidden sm:block top-10 right-20 w-28 h-28 -rotate-12"
            src={filmIcon11}
            alt=""
          />
          <img
            className="absolute opacity-80 hidden sm:block bottom-10 left-20 w-28 h-28 rotate-12"
            src={filmIcon12}
            alt=""
          />
          <div className="md:absolute lg:absolute top-1/2 left-1/2 transform-none sm:transform -translate-x-1/2 -translate-y-1/2  w-[65%] mx-auto py-10 sm:py-0 text-center">
            <h2 className="text-4xl font-semibold mb-5"> Fun Times! </h2>
            <p className="mb-10">
            Film can be a meaningful and serious experience for so many, but
              that does not take away how incredibly enjoyable it can be. Our
              team had so many laughs while creating this class!
            </p>
            <a className="sign_up_baton bg-[#0170B8] text-white" href="l">
              Sign Up
            </a>
          </div>
        </div>
        <div className="gredent_color flex justify-center items-center">
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/p_erFBLStVg?start=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </section>
      
    </div>
  );
};

export default FilmTeam;
