import React from 'react';
import f1 from '../../../../assets/School/Film-Club/f1.webp'
import f2 from '../../../../assets/School/Film-Club/f2.webp'

const ImpactQuestion = () => {
    return (
        <div>
            <div className=''>
                <div className='flex flex-wrap justify-center gap-20 my-9'>
                    <div>
                        <h1 className='text-5xl font-bold -rotate-12 my-8'>FRIENDSHIP!</h1>
                        <img className='my-24' src={f1} alt="" srcset="" />
                    </div>
                    <div className='grid row-span-2'>
                        <img className='h-60 w-auto' src="https://cdn-icons-png.flaticon.com/512/7185/7185630.png" alt="" srcset="" />
                        <img className='h-56 w-auto' src="https://cdn-icons-png.flaticon.com/512/2839/2839131.png" alt="" srcset="" />
                    </div>

                    <div>
                        <h1 className='text-5xl font-bold rotate-12 my-12'>TEAMWORK!</h1>
                        <img className='my-5' src={f2} alt="" srcset="" /></div>
                </div>

            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 border-2 border-black my-10">
                <div className="p-5">
                    <div className="grid justify-items-center content-center gap-4 p-10">
                        <img src="https://cdn-icons-png.flaticon.com/512/9984/9984483.png" alt="" height="100px" width="150px" />
                        <h2 className="text-3 md:text-6xl"> The Impact! </h2>
                        <p>
                            Film is so much more than just a movie. For viewers, it can make them feel represented. For film makers, it allows them to express themselves creatively and build teamwork skills. Click on the video to learn more about how film has impacted our team in creative and positive ways!
                        </p>
                        <img className='h-52 w-auto' src="https://cdn-icons-png.flaticon.com/512/9978/9978982.png" alt="" />
                        <a className="sign_up_baton bg-[#0170B8] text-white" href="/">Sign Up</a>
                    </div>
                </div>
                <div className="gredent_color flex justify-center p-10">
                    <video controls src="./img/All-Star Academy- Film Club- For aspiring filmmakers.mp4"></video>
                </div>
            </section>


            <div className='flex flex-wrap justify-center gap-20'>

                {/* 1st grid */}
                <div className='items-center'>
                    <img className='h-52 border-round p-1' src="https://cdn-icons-png.flaticon.com/512/3840/3840674.png" alt="" srcset="" />
                </div>

                {/* 2nd grid */}
                <div className='col-span-2 text-center'>
                    <h1 className='text-4xl font-semibold'>FOR FURTHER QUESTIONS:</h1> <br />
                    <p><span className='text-2xl font-semibold'>Email Us Here:</span> <br />
                        GraceNatalie1@outlook.com <br />
                        taylorjonson3@gmail.com</p>
                </div>

                {/* 3rd grid */}
                <div>
                    <img className='h-52 p-1' src="https://cdn-icons-png.flaticon.com/512/3840/3840674.png" alt="" srcset="" />
                </div>





            </div>


        </div>
    );
};

export default ImpactQuestion;