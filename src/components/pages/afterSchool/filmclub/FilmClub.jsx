import React from 'react';
import '../filmclub/Film.css'
import ac from '../../../../assets/School/Film-Club/ac.webp'
import ca from '../../../../assets/School/Film-Club/ca.webp'
import st from '../../../../assets/School/Film-Club/st.webp'
import sc from '../../../../assets/School/Film-Club/sc.webp'
import li from '../../../../assets/School/Film-Club/li.webp'

const FilmClub = () => {
    return (
        <div className='mx-auto max-w-full md:max-w-11/12 lg:max-w-screen-2xl' >
            <section class="fast_section bg-[#0170B8] h-[350px] w-full">
                <h1 class="text-3xl md:text-6xl pt-20 font-bold">Film Club!</h1>
                <p class=" text-center text-xl md:text-xl font-semibold py-40 text-white ">
                    Film Club is a unique opportunity for your 11-15 year-old! It is a hands <br /> -on class dedicated to teaching your child all about film. For those that <br /> already know about film this is a chance for them to hone on their skills. <br /> This class is open to all students of any school.
                </p>
            </section>

            {/* section 2 */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 p-5 text-center">
                <div className="dater_times">
                    <div className="flex gap-x-10">
                        <img src="https://cdn-icons-png.flaticon.com/512/2693/2693710.png" alt="" height="100px" width="100px" />
                        <h2 className="text-4xl font-semibold">DATES AND TIMES!</h2>
                    </div>
                    <p className="text-center">
                        This club will meet every Tuesday. The first meeting is on <strong>November 15, 2022.</strong>
                        Registration is due <strong>November 14.</strong> Late admission will be allowed within two weeks of the
                        start date <strong>[November 29].</strong> However, your student may need to spend time outside the club to
                        make up lessons, so they are on the same page as the other students. Class will start at <strong>3:45 PM</strong> and end at <strong>4:45 PM.</strong>
                        The fee for the club is $160.
                    </p>
                </div>
                <div>
                    <h2 className="text-4xl font-semibold md:text-4xl my-16 ">WHERE?</h2>
                    <p>
                        Film Club will take place at All-Star Academy.<br />
                        30355 SE High Point Way<br />
                        Preston, WA 98050<br />
                        United States
                    </p>
                </div>
                <div>
                    <h2 className="text-xl md:text-2xl mb-3">IMPORTANT DATES:</h2>
                    <p>
                        Registration Deadline: <strong>November 14th</strong> <br />
                        Start Date: <strong>November 15th</strong> <br />
                        Late Registration Deadline: <strong>November 29th</strong> <br />
                        End Date of Course: <strong>February 14, 2023</strong> <br />
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl md:text-2xl mb-10 font-bold">TO SIGN UP CLICK HERE:</h2>
                    <a className="sign_up_baton bg-[#0170B8] text-white" href="/">
                        Sign Up
                    </a>
                    <img style={{ marginLeft: "70%" }} src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png" height="150px" width="150px" alt="" />
                </div>
            </section>
            <hr />
            {/* section 3 end */}
            <section className="grid grid-cols-1  md:grid-cols-2 border-2 border-black">
                <div className="p-5">
                    <img className='w-auto h-36' src="https://cdn-icons-png.flaticon.com/512/1666/1666608.png" alt="" />

                    <div className="grid justify-items-center content-center gap-4  p-10">
                        <h2 className="text-3 md:text-6xl"> Lessons! </h2>
                        <p>
                            We will cover many topics in this club including: camera angles, storytelling/story boarding,
                            acting,
                            lighting, script writing, and more. Your student will, also, participate in All-Star Academy's very
                            first news show!
                        </p>
                        <a className="sign_up_baton bg-[#0170B8] text-white " href="l">
                            Sign Up
                        </a>
                    </div>
                    <img className='w-auto h-36' style={{ marginLeft: "65%" }} src="https://cdn-icons-png.flaticon.com/512/8242/8242575.png" alt="" />
                </div>

                <div className="gredent_color">

                    <div className='my-14'>
                        <div className="flex justify-between p-5 gap-5">
                            <img src={sc} alt="" />
                            <img src={ca} alt="" />
                        </div>
                        <center>
                            <img className="flex justify-center" src={st} alt="" />
                        </center>
                        <div className="flex justify-between p-5 gap-5">
                            <img src={ac} alt="" />
                            <img src={li} alt="" />
                        </div>
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
            <div class="flex flex-wrap justify-center gap-10 my-5">
                <div class="w-3/12 m-4">
                    <img className='w-full' src="https://cdn-icons-png.flaticon.com/512/3397/3397787.png" alt="" height="300px" width="300px" />

                </div>
                <div className="earth flex justify-center items-center text-center w-3/12 m-4">
                    <p className="text-2xl text-black">
                        "EDUCATION IS THE <br /> WAY TO MOVE <br /> MOUNTAINS, TO <br /> BUILD BRIDGES, TO <br /> CHANGE THE <br /> WORLD" -Oprah <br /> Winfrey
                    </p>
                </div>
                <div className='w-3/12 m-4'>
                    <img src="https://cdn-icons-png.flaticon.com/512/2914/2914180.png" alt="" height="300px" width="300px" />
                </div>
            </div>

            {/* 5 section start */}
            <section className="grid grid-cols-1 md:grid-cols-2 border-2 border-black">
                <div className="p-5">
                    <div className="grid justify-items-center content-center gap-4 p-10">
                        <img className='h-48 w-auto
                       ' src="https://cdn-icons-png.flaticon.com/512/9499/9499879.png" alt="" srcset="" />
                        <h2 className="text-3 md:text-6xl"> Hands On! </h2>
                        <p>
                            Film club will be a hands on class. Your student will have the chance to not only learn about film,
                            but put it into practice! A normal day will begin with the leaders presenting a short lesson on a
                            basic film aspect. The students will then try it themselves. Click on the video for an example!
                        </p>
                        <a className="sign_up_baton bg-[#0170B8] text-white" href="/">Sign Up</a>
                    </div>
                </div>
                <div className="gredent_color flex justify-center p-10">
                    <video controls src="./img/All-Star Academy- Film Club- For aspiring filmmakers.mp4"></video>
                </div>
            </section>


        </div>
    );
};

export default FilmClub;