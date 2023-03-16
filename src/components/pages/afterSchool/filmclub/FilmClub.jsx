import React from "react";
import "../filmclub/Film.css";
import filmIcon from "./assets/svgexport-3.svg";
import filmIcon2 from "./assets/svgexport-4.svg";
import filmIcon3 from "./assets/svgexport-5.svg";
import filmIcon4 from "./assets/svgexport-7.svg";
import filmIcon5 from "./assets/svgexport-8.svg";
import filmIcon6 from "./assets/svgexport-9.svg";
import filmIcon7 from "./assets/svgexport-10.svg";
import filmIcon8 from "./assets/svgexport-12.svg";
import filmIcon16 from "./assets/svgexport-13.svg";
import filmIcon17 from "./assets/svgexport-14.svg";
import ac from "../../../../assets/School/Film-Club/ac.webp";
import ca from "../../../../assets/School/Film-Club/ca.webp";
import st from "../../../../assets/School/Film-Club/st.webp";
import sc from "../../../../assets/School/Film-Club/sc.webp";
import li from "../../../../assets/School/Film-Club/li.webp";

const FilmClub = () => {
  return (
    <div className="mx-auto max-w-full md:max-w-full lg:max-w-screen-2xl">
      <section class="w-full h-[375px] mx-auto film-gnt flex flex-col justify-center items-center relative py-8">
        <img
          className="absolute w-28 h-28 left-16 hidden sm:block"
          src={filmIcon}
          alt=""
        />
        <img
          className="absolute w-28 h-28 right-16 hidden sm:block"
          src={filmIcon2}
          alt=""
        />
        <h1 class="text-[56px] font-[600] text-white">Film Club!</h1>
        <p class="text-[22px] text-white font-[500] mt-8 px-8 sm:px-0">
          Film Club is a unique opportunity for your 11-15 year-old! It is a
          hands <br /> -on class dedicated to teaching your child all about
          film. For those that <br /> already know about film this is a chance
          for them to hone on their skills. <br /> This class is open to all
          students of any school.
        </p>
      </section>

      {/* section 2 */}
      <section className="relative mt-12">
        <img
          className="absolute opacity-80 hidden sm:block top-16 left-16 w-28 h-28 -rotate-12"
          src={filmIcon3}
          alt=""
        />
        <img
          className="absolute opacity-80 hidden sm:block bottom-16 right-16 w-28 h-28 rotate-12"
          src={filmIcon4}
          alt=""
        />
        <div className="w-11/12 lg:w-8/12 md:w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-8">
          <div className="">
            <h2 className="text-4xl font-semibold mb-5">DATES AND TIMES!</h2>
            <p className="">
              This club will meet every Tuesday. The first meeting is on{" "}
              <strong>November 15, 2022.</strong>
              Registration is due <strong>November 14.</strong> Late admission
              will be allowed within two weeks of the start date{" "}
              <strong>[November 29].</strong> However, your student may need to
              spend time outside the club to make up lessons, so they are on the
              same page as the other students. Class will start at{" "}
              <strong>3:45 PM</strong> and end at <strong>4:45 PM.</strong>
              The fee for the club is $160.
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-semibold mb-5">WHERE?</h2>
            <address>
              Film Club will take addresslace at All-Star Academy.
            </address>
            <br />
            <address>30355 SE High Point Way Preston,</address>
            <address>WA 98050</address>
            <address>United States</address>
          </div>
        </div>

        <div className="w-11/12 lg:w-8/12 md:w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-8 my-12">
          <div>
            <h2 className="text-xl text-center font-semibold mb-5">
              IMPORTANT DATES:
            </h2>
            <p className="text-center mb-2">
              Registration Deadline: <strong>November 14th</strong>
            </p>
            <p className="text-center mb-2">
              Start Date: <strong>November 15th</strong>
            </p>
            <p className="text-center mb-2">
              Late Registration Deadline: <strong>November 29th</strong>
            </p>
            <p className="text-center mb-2">
              End Date of Course: <strong>February 14, 2023</strong>
            </p>
          </div>
          <div className="w-full mx-auto text-center">
            <h2 className="text-2xl mb-5">TO SIGN UP CLICK HERE:</h2>
            <a
              className="sign_up_baton bg-[#0170B8] text-white"
              href="https://schools.procareconnect.com/register/all-star-kiddos-preston-98050"
            >
              Sign Up
            </a>
          </div>
        </div>
      </section>
      <hr />
      {/* section 3 end */}
      <section className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-8 border border-black">
        <div className="relative">
          <img
            className="absolute opacity-80 hidden sm:block top-10 right-20 w-28 h-28 -rotate-12"
            src={filmIcon5}
            alt=""
          />
          <img
            className="absolute opacity-80 hidden sm:block bottom-10 left-20 w-28 h-28 rotate-12"
            src={filmIcon6}
            alt=""
          />
          <div className="md:absolute lg:absolute top-1/2 left-1/2 transform-none sm:transform -translate-x-1/2 -translate-y-1/2  w-[65%] mx-auto py-10 sm:py-0 text-center">
            <h2 className="text-4xl font-semibold mb-5"> Lessons! </h2>
            <p className="mb-10">
              We will cover many topics in this club including: camera angles,
              storytelling/story boarding, acting, lighting, script writing, and
              more. Your student will, also, participate in All-Star Academy's
              very first news show!
            </p>
            <a className="sign_up_baton bg-[#0170B8] text-white" href="l">
              Sign Up
            </a>
          </div>
        </div>
        <div className="gredent_color flex flex-col justify-center ">
          <div className="flex justify-around p-5 gap-5">
            <img src={sc} alt="" />
            <img src={ca} alt="" />
          </div>
          <center>
            <img className="" src={st} alt="" />
          </center>
          <div className="flex justify-around p-5 gap-5">
            <img src={ac} alt="" />
            <img src={li} alt="" />
          </div>
        </div>
      </section>

      {/* 4 section start */}
      {/* <section className="grid grid-cols-1 sm:grid-cols-3 my-5 ">

                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/3397/3397787.png" alt="" height="300px" width="300px" />
                </div>
                <div className="earth flex justify-center items-center text-center">
                    <p className="text-2xl text-black">
                        "EDUCATION IS THE <br /> WAY TO MOVE <br /> MOUNTAINS, TO <br /> BUILD BRIDGES, TO <br /> CHANGE THE <br /> WORLD" -Oprah <br /> Winfrey
                    </p>
                </div>
                <div className=''>
                    <img src="https://cdn-icons-png.flaticon.com/512/2914/2914180.png" alt="" height="300px" width="300px" />
                </div>

            </section> */}
      <div class="flex-none sm:flex justify-around items-center gap-10 my-8">
        <center class="">
          <img className="" src={filmIcon7} alt="" />
        </center>
        <center className="earth flex justify-center items-center text-center ">
          <p className="text-2xl text-white font-semibold">
            "EDUCATION IS THE <br /> WAY TO MOVE <br /> MOUNTAINS, TO <br />{" "}
            BUILD BRIDGES, TO <br /> CHANGE THE <br /> WORLD" -Oprah <br />{" "}
            Winfrey
          </p>
        </center>
        <center className="">
          <img className="" src={filmIcon8} alt="" />
        </center>
      </div>

      {/* 5 section start */}
      <section className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-8 border border-black">
        <div className="relative">
          <img
            className="absolute opacity-80 hidden sm:block top-10 right-20 w-28 h-28"
            src={filmIcon17}
            alt=""
          />
          <img
            className="absolute hidden sm:block top-10 left-20 w-28 h-28 "
            src={filmIcon16}
            alt=""
          />
          <div className="md:absolute lg:absolute top-1/2 left-1/2 transform-none sm:transform -translate-x-1/2 -translate-y-1/2  w-[65%] mx-auto py-10 sm:py-0 text-center">
            <h2 className="text-3 md:text-6xl mb-5"> Hands On! </h2>
            <p className="mb-5">
              Film club will be a hands on class. Your student will have the
              chance to not only learn about film, but put it into practice! A
              normal day will begin with the leaders presenting a short lesson
              on a basic film aspect. The students will then try it themselves.
              Click on the video for an example!
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
    </div>
  );
};

export default FilmClub;
