import React from "react";
import filmIcon13 from "./assets/svgexport-32.svg";
import filmIcon14 from "./assets/svgexport-33.svg";
import filmIcon15 from "./assets/svgexport-37.svg";
import filmIcon16 from "./assets/svgexport-38.svg";
import f1 from "../../../../assets/School/Film-Club/f1.webp";
import f2 from "../../../../assets/School/Film-Club/f2.webp";

const ImpactQuestion = () => {
  return (
    <div>
      <div className="">
        <div className="flex flex-wrap justify-center gap-20 my-9">
          <div>
            <h1 className="text-5xl font-bold -rotate-12 my-8">FRIENDSHIP!</h1>
            <img className="my-24" src={f1} alt="" srcset="" />
          </div>
          <div className="grid row-span-2">
            <img
              className="h-60 w-auto"
              src="https://cdn-icons-png.flaticon.com/512/7185/7185630.png"
              alt=""
              srcset=""
            />
            <img
              className="h-56 w-auto"
              src="https://cdn-icons-png.flaticon.com/512/2839/2839131.png"
              alt=""
              srcset=""
            />
          </div>

          <div>
            <h1 className="text-5xl font-bold rotate-12 my-12">TEAMWORK!</h1>
            <img className="my-5" src={f2} alt="" srcset="" />
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-8 border border-black">
        <div className="relative">
          <img
            className="absolute opacity-80 hidden sm:block top-10 right-20 w-28 h-28 -rotate-12"
            src={filmIcon13}
            alt=""
          />
          <img
            className="absolute opacity-80 hidden sm:block bottom-10 left-20 w-28 h-28 rotate-12"
            src={filmIcon14}
            alt=""
          />
          <div className="md:absolute lg:absolute top-1/2 left-1/2 transform-none sm:transform -translate-x-1/2 -translate-y-1/2  w-[65%] mx-auto py-10 sm:py-0 text-center">
            <h2 className="text-3 md:text-6xl mb-5"> The Impact! </h2>
            <p className="mb-5">
              Film is so much more than just a movie. For viewers, it can make
              them feel represented. For film makers, it allows them to express
              themselves creatively and build teamwork skills. Click on the
              video to learn more about how film has impacted our team in
              creative and positive ways!
            </p>
            <a className="sign_up_baton bg-[#0170B8] text-white" href="/">
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

      <div className="flex-none sm:flex justify-around items-center gap-8 my-10 sm:my-20">
        <img className="w-32 sm:w-auto mx-auto sm:mx-0 mb-8 sm:mb-0" src={filmIcon15} alt="" />
        <div className="col-span-2 text-center">
          <h1 className="text-4xl font-semibold mb-5">FOR FURTHER QUESTIONS:</h1>
          <p className="text-2xl font-semibold mb-3">Email Us Here:</p>
          <p>GraceNatalie1@outlook.com</p>
          <p>taylorjonson3@gmail.com</p>
        </div>
        <img className="hidden sm:block" src={filmIcon16} alt="" />
      </div>
    </div>
  );
};

export default ImpactQuestion;
