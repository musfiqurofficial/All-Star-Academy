import React from 'react';
import ad from '../../../assets/Admisstios/ad.webp'

const AdmissionDescription = () => {
    return (
        <div className='' >
            <div className="px-2 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-4 flex flex-col lg:flex-row justify-between my-12">

                <div className="mb-6 lg:mb-0 lg:w-7/12 lg:pr-5">

                    <h1 className='text-3xl font-semibold'>New Student Registration</h1>
                    <br /><br />
                    <p className='font-sans text-base text-gray-700 mr-6'>
                        We are pleased you are looking into a place for your child! We offer open enrollment throughout the year, therefore we enroll throughout the year until each class is full. Please follow the steps below to reserve a place for your child. Further down you will see tuition rates and other fee schedules. <br /><br /> <span className='text-lg font-medium'>Steps to Enrollment:</span> </p>

                </div>
                <div className=''>
                    <img className='mb-3 w-full' src={ad} alt="" srcset="" />


                </div>

            </div>

            <div
                className="flex flex-col justify-center items-center bg-[#4EBA59]"
                style={{ height: "175px", width: "auto" }}
            >
                <h6 className=" text-center text-white font-[600] text-[20px] sm:text-[26px] italic w-10/12 lg:w-8/12 mx-auto">
                    "An investment in knowledge pays the best interest." <br />

                    –  Benjamin Franklin
                </h6>
            </div>

        </div>
    );
};

export default AdmissionDescription;