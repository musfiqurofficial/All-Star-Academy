import React from 'react';
import objectiv from '../../../assets/Academic/objectiv.webp'

const AcademicsDescription = () => {
    return (
        <div className='px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8'>

            <div className='my-10'>
                <div className="flex flex-col lg:flex-row justify-between items-center">

                    <div className="mb-6 lg:mb-0 lg:w-8/12 lg:pr-5">

                        <h1 className='text-4xl font-semibold'>Objective</h1>
                        <br /><br />
                        <p className='font-sans text-base text-gray-700 mr-6'>
                            Here at All-Star Academy we focus on developing each child's mind, body, character, and spirit with holistic or "whole child" education in a small classroom setting. All of our curriculum is research-based, data-driven and rooted in adaptability to be able to develop and inspire each student to their fullest potential in light of differences or exceptionalities. Each child's report card provides observation into your child's academic skills and social-emotional development.</p>

                    </div>
                    <div>
                        <img className='mb-3' src={objectiv} alt="" srcset="" />

                        <p className='text-center'>1st/2nd Grade Classroom May 2021</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AcademicsDescription;