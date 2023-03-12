import React from "react";
import mon1 from '../../../../assets/School/Card/mon1.webp'
import mon2 from '../../../../assets/School/Card/mon2.webp'
import Tuesday1 from '../../../../assets/School/Card/Tuesday1.webp'
import tuesday2 from '../../../../assets/School/Card/tuesday2.webp'
import wed1 from '../../../../assets/School/Card/wed1.webp'
import wed2 from '../../../../assets/School/Card/wed2.webp'
import friday1 from '../../../../assets/School/Card/friday1.webp'
import friday2 from '../../../../assets/School/Card/friday2.webp'

const AfterSchoolWeeklyLineup = () => {

  return (

    <div className="my-20">
      <div className="px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl md:px-18 lg:px-8">
        <h1 className="text-center font-[400] text-[36px]">
          Weekly Lineup: Core Daily Focuses!
        </h1>
        <h3 className="text-center font-[300] text-[20px] mt-3 mb-8">
          Exact activity for each day may vary depending on interest and
          weather
        </h3>

        {/* Monday */}
        <div className='grid grid-cols-2'>
          {/* <h1 className=' text-[30px] font-medium'>- Monday -</h1> */}

          <div className='flex flex-col gap-y-6 items-center'>
            <h2 className='text-end text-[32px] font-semibold drop-shadow-xl ml-60'>- Monday -</h2>
            <p className='border-4 rounded-full border-[#4EBA59] py-4 rounded-r-none w-9/12 px-7 ml-56 text-center text-base'>
              <span className='font-medium text-[20px]'>Team Sports & Playground* 3:45-4:45p</span> <br />
              At the 5 acre Preston Athletic Fields and Park <br /> across the street.
            </p>

            <div className="ml-52 p-2 bg-[#FAFAFA] shadow-md">
              <img className="mb-4 w-[338px] h-[425px] " src={mon2} alt="" srcset="" />

            </div>

          </div>

          <div className='flex flex-col gap-y-6'>
            <div className="ml-4 p-2 bg-[#FAFAFA] shadow-md">
              <img className="mb-3 w-[338px] h-[425px] " src={mon1} alt="" srcset="" />
              <p>*Weather Depending</p>
            </div>

            <p className='-z-10 -ml-8  border-4 rounded-full border-[#4EBA59] py-4 rounded-l-none w-9/12  px-6 mr-64 text-center text-base'>
              <span className='font-medium text-[20px]'>Alternative: Trampolines, Art, Free-play!</span> <br />
              On-site in our playground area and in our <br /> classrooms!
            </p>


          </div>

        </div>
        {/* Tuesday */}
        <div className='grid grid-cols-2 my-20'>
          {/* <h1 className=' text-[30px] font-medium'>- Monday -</h1> */}

          <div className='flex flex-col gap-y-6 items-center'>
            <h2 className='text-end text-[32px] font-semibold drop-shadow-xl ml-60'>- Tuesday -</h2>
            <p className='border-4 rounded-full border-[#4EBA59] py-4 rounded-r-none w-9/12 px-5 ml-60 text-center text-base'>
              <span className='font-medium text-[20px]'>Film Club 3:45-4:45p</span> <br />
              How to make a film A-Z. Kids are  grouped  <br /> for age-appropriate curriculum
            </p>

            <div className="ml-52 p-2 bg-[#FAFAFA] shadow-md">
              <img className="mb-4 w-[338px] h-[425px] " src={Tuesday1} alt="" srcset="" />

            </div>

          </div>

          <div className='flex flex-col gap-y-6'>
            <div className="ml-4 p-2 bg-[#FAFAFA] shadow-md">
              <img className="mb-3 w-[338px] h-[425px] " src={tuesday2} alt="" srcset="" />
              <p>*Weather Depending</p>
            </div>

            <p className='-z-10 -ml-8  border-4 rounded-full border-[#4EBA59] py-3 rounded-l-none w-9/12  px-6 mr-64 text-center text-base'>
              <span className='font-medium text-[20px]'>Alternative: Trampolines, Art, Free-play!</span> <br />
              On-site in our playground area and in our <br /> classrooms!
            </p>


          </div>

        </div>

        {/* Wednesday */}
        <div className='grid grid-cols-2 my-20'>
          {/* <h1 className=' text-[30px] font-medium'>- Monday -</h1> */}

          <div className='flex flex-col gap-y-6 items-center'>
            <h2 className='text-end text-[32px] font-semibold drop-shadow-xl ml-60'>- Wednesday -</h2>
            <p className='border-4 rounded-full border-[#4EBA59] py-4 rounded-r-none w-9/12 px-6 ml-56 text-center text-base'>
              <span className='font-medium text-[20px]'>Horseback Riding!* 2-3:30p & 3:45-5:15p</span> <br />
              On-site in our horse paddock & on the   <br /> Preston-Fall City Trail!
            </p>

            <div className="ml-52 p-2 bg-[#FAFAFA] shadow-md">
              <img className="mb-4 w-[338px] h-[425px] " src={wed2} alt="" srcset="" />

            </div>

          </div>

          <div className='flex flex-col gap-y-6'>
            <div className="ml-4 p-2 bg-[#FAFAFA] shadow-md">
              <img className="mb-3 w-[338px] h-[425px] " src={wed1} alt="" srcset="" />
              <p>*Weather Depending</p>
            </div>

            <p className='-z-10 -ml-8  border-4 rounded-full border-[#4EBA59] py-4 rounded-l-none w-10/12  px-5 text-center text-base'>
              <span className='font-medium text-[20px]'>Optional**: Cognitive Ability Training</span> <br />
              Guaranteed to improve executive processing, processing <br /> speed, attention control, learning speed, and memory <br /> recall.  <a className='text-blue-400 underline'
                href="https://allstarkiddos.lpages.co/festival-school-interest-form/"> Click here  </a>  to download the info packet.
            </p>
            <p className="-m-5 text-center">** Extra Charge Applies</p>


          </div>

        </div>
        {/* Thursday */}
        <div className='grid grid-cols-2 my-20'>
          {/* <h1 className=' text-[30px] font-medium'>- Monday -</h1> */}

          <div className='flex flex-col gap-y-6 items-center'>
            <h2 className='text-end text-[32px] font-semibold drop-shadow-xl ml-60'>- Thursday -</h2>
            <p className='border-4 rounded-full border-[#4EBA59] py-4 rounded-r-none w-10/12 px-5 ml-56 text-center text-base'>
              <span className='font-medium text-[20px]'>Nature Day with Horses!* 3:45-4:45p</span> <br />
              We take the horses on the Preston-Fall City Trail
              <br /> and  take turns hiking, horseback riding, and <br /> leading our miniature horse.
            </p>

            <div className="ml-52 p-2 bg-[#FAFAFA] shadow-md">
              <img className="mb-4 w-[338px] h-[425px] " src={wed2} alt="" srcset="" />

            </div>

          </div>

          <div className='flex flex-col gap-y-6'>
            <div className="ml-4 p-2 bg-[#FAFAFA] shadow-md">
              <img className="mb-3 w-[338px] h-[425px] " src={wed1} alt="" srcset="" />
              <p>*Weather Depending</p>
            </div>

            <p className='-z-10 -ml-8  border-4 rounded-full border-[#4EBA59] py-4 rounded-l-none w-9/12  px-6 mr-64 text-center text-base'>
              <span className='font-medium text-[20px]'>Alternative: Movie + popcorn!</span> <br />
              In our classrooms. Free-play and trampolines <br /> are also an available!
            </p>


          </div>

        </div>
        {/* Friday */}
        <div className='grid grid-cols-2 my-20'>
          {/* <h1 className=' text-[30px] font-medium'>- Monday -</h1> */}

          <div className='flex flex-col gap-y-6 items-center'>
            <h2 className='text-end text-[32px] font-semibold drop-shadow-xl ml-60'>- Friday -</h2>
            <p className='border-4 rounded-full border-[#4EBA59] py-4 rounded-r-none w-9/12 px-5 ml-56 text-center text-base'>
              <span className='font-medium text-[20px]'>Cooking/baking 2-3:30p & 3:45-5:15p</span> <br />
              At the Raging River Church we cook, bake
              <br />  and learn about nutrition by a Professional Chef!
            </p>

            <div className="ml-52 p-2 bg-[#FAFAFA] shadow-md">
              <img className="mb-4 w-[338px] h-[425px] " src={friday2} alt="" srcset="" />

            </div>

          </div>

          <div className='flex flex-col gap-y-6'>
            <div className="ml-4 p-2 bg-[#FAFAFA] shadow-md">
              <img className="mb-3 w-[338px] h-[425px] " src={friday1} alt="" srcset="" />
              <p>*Weather Depending</p>
            </div>

            <p className='-z-10 -ml-8  border-4 rounded-full border-[#4EBA59] py-4 rounded-l-none w-8/12  px-5 text-center text-base'>
              <span className='font-medium text-[20px]'>Alternative: Movie + popcorn!</span> <br />
              In our classrooms. Free-play and <br /> trampolines are also an option!
            </p>


          </div>

        </div>

      </div>
    </div>

  );
};

export default AfterSchoolWeeklyLineup;
