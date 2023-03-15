import React, { useState } from 'react';
import ad from '../../../assets/Admisstios/ad.webp'
import AdmissionTable from './AdmissionTable';
import ChekBox from './ChekBox';

const AdmissionDescription = () => {


    return (
        <div className='' >
            <div className="px-2 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-4 flex flex-col lg:flex-row justify-between my-12">

                <div className="mb-6 lg:mb-0 lg:w-7/12 lg:pr-5">

                    <h1 className='text-4xl font-semibold'>New Student Registration</h1>
                    <br /><br />
                    <p className='font-sans text-base text-gray-700 mr-6'>
                        We are pleased you are looking into a place for your child! We offer open enrollment throughout the year, therefore we enroll throughout the year until each class is full. Please follow the steps below to reserve a place for your child. Further down you will see tuition rates and other fee schedules. <br /><br /> </p>
                    <ChekBox></ChekBox>
                </div>
                <div>
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
            {/* description */}
            <div className="px-2 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-4 flex flex-col lg:flex-row justify-between my-12">

                <div className="mb-6 lg:mb-0 lg:w-96 lg:pr-5">

                    <h1 className='text-3xl font-semibold'>Scholarships:</h1>
                    <br /><br />
                    <p className='font-sans text-base text-gray-700 mr-6'>
                        <span className='text-lg font-medium underline'>Tribal Scholarship:</span>  <br />



                        Fills the gap between tribal benefits and tuition cost. <a className='text-blue-400 underline'
                            href="https://account.microsoft.com/"> ASK NOW</a>  <br /><br /> <br /> <span className='text-lg font-medium underline'>General Scholarship:</span> <br />



                        We are known for providing scholarships. <br /> <a className='text-blue-400 underline'
                            href="https://account.microsoft.com/"> ASK NOW</a> <br /><br /> <br />  <h1 className='text-3xl font-semibold'>Discount:</h1> <br /> <br /> <span className='text-lg font-medium underline'>Sibling Discount:</span>  <br />



                        20% off annual or monthly tuition for each additional child. <br /> <br />  <h1 className='text-3xl font-semibold'>Policies:</h1> <br /> <br /> <span className='text-lg font-medium underline'>Withdraw Policy:</span>  <br />



                        Written notification, 30 days in advance, is required if it is necessary to withdraw your child before the end of the school year. The registration/material fee and June tuition deposit are non-refundable; prorated if paid for year in-full. <br /> <br /> <span className='text-lg font-medium underline'>Absence & Vacation Policy:</span>  <br />



                        Absence from school due to weather, illness or personal vacation will not be awarded tuition fee credit.  </p>

                </div>
                <div className=''>
                    <h1 className='text-4xl font-medium text-center mb-4'>2022-23 Tuition & Fees</h1>
                    <AdmissionTable></AdmissionTable>


                </div>

            </div>

        </div>
    );
};

export default AdmissionDescription;