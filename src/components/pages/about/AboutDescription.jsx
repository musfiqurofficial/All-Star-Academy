<<<<<<< HEAD
import React from 'react';
import admin from '../../../assets/About/admin.webp'
import natasa from '../../../assets/About/natasa.webp'
import teacher from '../../../assets/About/teacher.webp'
import turner from '../../../assets/About/turner.webp'


const AboutDescription = () => {
    return (
        <div className='px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8'>
            <div className='my-10'>
                <span className='text-center text-2xl font-semibold'>Personalized, advanced approach that causes children to LOVE learning.</span>
                <p className='my-8'>Here at All-Star Academy we partner with parents, and any preferred providers, to deliver a personalized, exceptional education to their child. We recruit the most talented teachers that are able to customize learning plans and supersede behavioral or learning challenges. <br /><br />
                    Our mission is to drive a new era of education where parents have influence and each student is challenged in a holistic manner to create a fully competent, capable, and creative member of society. <br /><br />
                    Based in Preston, we are a member of the Washington Federation of Independent Schools, Cognia Global Accreditation and Improvement Network, and University of Washington's Work-Study program. We provide a holistic education, after-school enrichment, and seasonal camps for children 4-12 years old. </p>
=======
import React from "react";

const AboutDescription = () => {
  return (
    <div className="px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg md:px-18 lg:px-8 my-10">
      <div>
        <span className="text-center text-2xl font-semibold">
          Personalized, advanced approach that causes children to LOVE learning.
        </span>
        <p className="my-8">
          Here at All-Star Academy we partner with parents, and any preferred
          providers, to deliver a personalized, exceptional education to their
          child. We recruit the most talented teachers that are able to
          customize learning plans and supersede behavioral or learning
          challenges. <br />
          <br />
          Our mission is to drive a new era of education where parents have
          influence and each student is challenged in a holistic manner to
          create a fully competent, capable, and creative member of society.{" "}
          <br />
          <br />
          Based in Preston, we are a member of the Washington Federation of
          Independent Schools, Cognia Global Accreditation and Improvement
          Network, and University of Washington's Work-Study program. We provide
          a holistic education, after-school enrichment, and seasonal camps for
          children 4-12 years old.{" "}
        </p>
>>>>>>> Musfiq

        <span className="text-center text-2xl font-semibold">
          HOW WE OPERATE
        </span>

        <p className="my-8">
          We believe that education at its best should extend whole child
          development. As such, our students are taught how to grow a garden,
          how to care for animals and are taught social and emotional skills. We
          also offer optional spiritual classes of Bible Studies and
          mindfulness+meditation.
          <br />
          <br />
          We use individual cognitive and academic data as well as the
          Montessori Method and project-based learning in order to advance each
          student to their potential. Further, we offer mixed-age classrooms to
          best support social skill development. <br />
          <br />
          Our teachers are dedicated, inspiring, skillful and compassionate
          educators. They have been selected as role models of acceptance,
          unwavering kindness, self-motivation, and good citizenship.
        </p>

<<<<<<< HEAD
                <span className='text-center text-2xl font-semibold'>HOW WE STARTED</span>
                <p className='my-8'>Our Director, Brandy Simison, grew up in a small town and experienced the benefits of small classroom sizes and a tight-knit community. After training as a Certified Psychiatric Rehabilitation Practitioner, she saw that public and private school classrooms often hosted 25 kids to a single teacher. Children with emotional or behavioral challenges and/or exceptionalities often did not get the support or attention they needed. Parents were displeased with how they had to fight for extra support or felt obligated to have their child undergo indoctrination or education they were uncertain was beneficial or in line with their family values.<br /><br />
                    All-Star Academy is an entirely different kind of environment. We are designed to promote a child’s holistic development with customized curriculum. We offer an 1:8 teacher to student ratio to provide plenty of individual attention aligned to the student's customized learning plans. We offer unique learning experiences in line with interests that help build connection and meaning to the natural world. <br /><br />
                    In 2018, we started All-Star Academy to provide this type of education for the community. We are one of the most sought-after private schools with a 100% satisfaction rate consistently recorded from the families we serve (surveying each semester). </p>

                <div className='mt-20'>
                    <h2 className='text-3xl font-semibold ml-6'>Come Meet Us!</h2>
                    <button className='btn bg-green-500 shadow-md shadow-gray-600 rounded-md w-64 h-14 text-lg md:text-lg justify-center text-white my-10 font-medium hover:bg-green-500 hover:text-black ml-6'>BOOK A TOOR NOW</button>

                </div>

            </div>
            {/* Card description */}
            <div>
                <div className="p-8">
                    {/* 1st Card */}
                    <div className="flex flex-col lg:flex-row justify-between items-center">

                        <div className="mb-6 lg:mb-0 lg:w-8/12 lg:pr-5">

                            <p className='font-sans text-base text-gray-700 mr-6'>
                                From the Director: <br /> <br />

                                "Hello! I am so pleased you found us! If you would would like to speak with me directly to get your questions answered, please schedule a call with me here: https://calendly.com/brandysimison/20min. I hope to speak with you soon!" - Brandy Simison</p>

                        </div>
                        <div>
                            <img className='mb-3' src={admin} alt="" srcset="" />
                            <span className='font-medium text-xl my-2'>Brandy Simison, Director</span>
                            <p className='text-center'>Child Behavior Specialist</p>
                        </div>

                    </div>

                    {/* 2ndt Card */}
                    <div className="flex flex-col lg:flex-row justify-between items-center my-12">
                        <div>
                            <img className='mb-3 rounded-full' src={teacher} alt="" srcset="" />
                            <p className='font-medium text-lg my-2'>Ms. Emily Good, Lead Teacher,</p>
                            <p className='text-center'>1st/2nd grade Teacher</p>
                        </div>


                        <div className="mb-6 lg:mb-0 lg:w-8/12 lg:pr-5">

                            <p className='font-sans text-base text-gray-700 ml-16'>
                                Ms. Emily Good is a Masters-level teacher with 7 years of experience. She our lead teacher and educates 6-8 year olds in our 1st/2nd grade classroom. She is a Restorative Correction trained teacher and is known for her impeccable balance of being kind yet firm. Parents and students alike adore and respect Ms. Emily for her professionalism, kind heart, and most notably, the incredible development each of her students make in her classroom.</p>

                        </div>


                    </div>

                    {/* 3rd Card */}
                    <div className="flex flex-col lg:flex-row justify-between items-center my-12">
                        <div className="mb-6 lg:mb-0 lg:w-8/12 lg:pr-5">

                            <p className='font-sans text-base text-gray-700 mr-10'>
                                Ms. Camille Turner is our PreK/Kindergarten teacher. She specializes in educating pre-kindergarten and kindergarten level students. She is trained in Restorative Correction and has been an early childhood educator for 3 years. Ms. Camille also leads our optional Bible Studies class and has a background in Pastoral Studies. She is most known for instilling a growth mindset and coming up with creative ways to educate her students. Parents appreciate her personable demeanor and focus on steady improvement.</p>
                        </div>

                        <div>
                            <img className='mb-3 rounded-full' src={turner} alt="" srcset="" />
                            <span className='font-medium text-xl my-2'>Ms. Camille Turner,</span>
                            <p className='text-center'>PreK/Kindergarten Teacher</p>
                        </div>


                    </div>

                    {/* 4th Card */}
                    <div className="flex flex-col lg:flex-row justify-between items-center my-12">
                        <div>
                            <img className='mb-3 rounded-full' src={natasa} alt="" srcset="" />
                            <span className='font-medium text-xl my-2'>Mrs. Natasha Migliacio,</span>
                            <p className='text-center'>3rd/4th grade Teacher</p>
                        </div>


                        <div className="mb-6 lg:mb-0 lg:w-8/12 lg:pr-5">

                            <p className='font-sans text-base text-gray-700 ml-16'>
                                Mrs. Natasha Migliacio is our 3rd/4th grade teacher. She specializes in teaching elementary technology computer skills as well as core educational instruction for 3rd and 4th grade level students. Natasha has 7 years teaching experience. She is known for her cheerful demeanor and being able to "reach" kids to form a meaningful relationship  that bodes impactful learning. Parents appreciate how excited their children are to go to Ms. Natasha's class and how eager they are to share what they learned in class.</p>

                        </div>


                    </div>





                </div>

            </div>
=======
        <span className="text-center text-2xl font-semibold">
          HOW WE STARTED
        </span>
        <p className="my-8">
          Our Director, Brandy Simison, grew up in a small town and experienced
          the benefits of small classroom sizes and a tight-knit community.
          After training as a Certified Psychiatric Rehabilitation Practitioner,
          she saw that public and private school classrooms often hosted 25 kids
          to a single teacher. Children with emotional or behavioral challenges
          and/or exceptionalities often did not get the support or attention
          they needed. Parents were displeased with how they had to fight for
          extra support or felt obligated to have their child undergo
          indoctrination or education they were uncertain was beneficial or in
          line with their family values.
          <br />
          <br />
          All-Star Academy is an entirely different kind of environment. We are
          designed to promote a child’s holistic development with customized
          curriculum. We offer an 1:8 teacher to student ratio to provide plenty
          of individual attention aligned to the student's customized learning
          plans. We offer unique learning experiences in line with interests
          that help build connection and meaning to the natural world. <br />
          <br />
          In 2018, we started All-Star Academy to provide this type of education
          for the community. We are one of the most sought-after private schools
          with a 100% satisfaction rate consistently recorded from the families
          we serve (surveying each semester).{" "}
        </p>
>>>>>>> Musfiq

        <div className="mt-20">
          <h2 className="text-3xl font-semibold ml-6">Come Meet Us!</h2>
          <button className="btn bg-green-500 shadow-md shadow-gray-600 w-60 h-12 text-base justify-center text-white my-10 font-medium">
            BOOK A TOOR NOW
          </button>
        </div>
      </div>
      {/* Card description */}
      <div>
        <div className="p-8 sm:p-16">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <p className="font-sans text-base text-gray-700">
                From the Director: <br />
                "Hello! I am so pleased you found us! If you would would like to
                speak with me directly to get your questions answered, please
                schedule a call with me here:
                https://calendly.com/brandysimison/20min. I hope to speak with
                you soon!" - Brandy Simison
              </p>
            </div>
            <div>
              <img
                className="mb-3"
                src="https://static.wixstatic.com/media/2a89f4_f9f1b3749dd547a9b68d14e08e2ef192~mv2.jpg/v1/crop/x_369,y_0,w_633,h_722/fill/w_233,h_266,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/no%20background%20brandy%20blazer%2080_001.jpg"
                alt=""
                srcset=""
              />
              <span className="font-medium text-xl my-2">
                Brandy Simison, Director
              </span>
              <p className="text-center">Child Behavior Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDescription;
