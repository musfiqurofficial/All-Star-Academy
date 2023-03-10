import React from 'react';
import objectiv from '../../../assets/Academic/objectiv.webp'
import curriculam3 from '../../../assets/Academic/curriculam3.webp'
import classes5 from '../../../assets/Academic/classes5.webp'
import book1 from '../../../assets/Academic/book1.webp'
import boo2 from '../../../assets/Academic/boo2.webp'
import book3 from '../../../assets/Academic/book3.webp'
import card1 from '../../../assets/Academic/card1.webp'


const AcademicsDescription = () => {
    return (
        <div className='px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8'>

            <div className='my-10'>
                {/* content 1 */}
                <div className="flex flex-col lg:flex-row justify-between my-12">

                    <div className="mb-6 lg:mb-0 lg:w-7/12 lg:pr-5">

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

                {/* content 2 */}
                <div className="flex flex-col lg:flex-row justify-between items-center">

                    <div className="mb-6 lg:mb-0 lg:w-7/12 lg:pr-5">

                        <h1 className='text-3xl font-semibold'>Lower Elementary Curriculum </h1>
                        <br /><br />
                        <p className='font-sans text-base text-gray-700 mr-6'>
                            <span className='font-medium text-lg'>Language Arts</span> - Wonders Literacy Curriculum

                            Wonders is designed to foster a love of reading in all children.

                            Wonders offers us the ability to adapt instruction as students grow. The curriculum aligns with our focus on teaching the whole child—and every child—to prepare students to be lifelong learners and critical thinkers. Combining the work of literacy experts with research on social emotional learning, Wonders helps us strengthen skills, bolster learning, and encourage independence in our classrooms, every day. <br /> <br />  <span className='font-medium text-lg'>Mathematics</span>  - Mindful Math Curriculum

                            Mindful Math focuses on hands-on, engaging lessons. It encourages different ways of thinking and representing math concepts, including many opportunities and options for differentiation. Lessons encourage students to show their understanding in different ways and practice math concepts with or without supports. Mindful math lessons provide different levels of difficulty. Activities, games, and centers can be done in small groups to provide more support, independently for our more advanced learners, or in partners. Mindful math helps strengthen mathematical skills, encourage curiosity, and foster critical thinking skills. <br /><br /> <span className='font-medium text-base'>Social Studies - Tribal Sovereignty • World Cultural Traditions</span>

                            <br /> We teach Tribal sovereignty lessons that develop an understanding of Native American spiritual values through stories. Through these stories students also learn about the plants, animals, and geography of Washington State. Next, to expand our students worldly understanding, we choose a country to learn about each month. We learn about and celebrate important holidays; such as "Holi - Celebration of Colors" for the Indian tradition. We also teach about a culture's music, food, and key historical events.</p>

                    </div>
                    <div className=''>
                        <img className='mb-64' src={curriculam3} alt="" srcset="" />

                        <p className='text-center font-medium'>Lower Elementary Report Card

                            {/* Science - Little Science Thinkers

                            Like math, science is focused on finding patterns. However, the patterns are explored in the natural world. Some units are listed below. In all, we focus on hands on, engaging lessons that spark curiosity. Our lessons include adaptable independent work, partner projects, and group work.

                            Unit 1: Light and Sound

                            Unit 2: Space

                            Unit 3: Earth’s Surface

                            Unit 4: Survival of Living Things

                            Unit 5: Weather */}

                        </p>

                    </div>

                </div>

                {/* Optional class section */}

                <div className="flex flex-col lg:flex-row justify-center items-end my-12">

                    <div className="mb-6 lg:mb-0 lg:w-8/12 lg:pr-5">

                        <h1 className='text-4xl font-semibold'>Optional Specialist Classes</h1>
                        <br /><br />
                        <p className='font-sans text-base text-gray-700 '>
                            <span className='font-medium text-lg'>Cognitive Ability Advancement</span>   Training Your child will first take the Woodcock Johnson Test of Cognitive Abilities administered by an outside, Licensed Clinician to gain a baseline of cognitive ability performance in general intellectual ability, broad and narrow cognitive abilities, academic domain-specific aptitudes, and related aspects of cognitive functioning. The test results include your child's predicted achievement and intellectual ability scores. Based upon your child's individual cognitive ability scores, they will be guided to perform fun "games" on the trampoline that will advance their cognitive development in the areas they need it most and, accordingly, raise their intellectual abilities and predicted achievement as evidenced by a follow-up test.</p>



                    </div>
                    <div>
                        <img className='mb-3' src={classes5} alt="" srcset="" />

                        <p className='text-center text-xs'>Cognitive Ability Advancement Training</p>
                    </div>

                </div>

                <div>
                    <h4 className='font-medium text-start text-lg'>Bible Studies - </h4>
                    <div className='flex gap-14 items-end'>

                        <div>
                            <img src={book1} alt="" srcset="" />

                        </div>

                        <div>
                            <img src={boo2} alt="" srcset="" />
                        </div>
                        <div>
                            <img src={book3} alt="" srcset="" />
                        </div>

                    </div>
                </div>
                {/* mindfull meditation */}
                <div className="flex flex-col lg:flex-row justify-between items-center my-12">

                    <div className="mb-6 lg:mb-0 lg:w-9/12 lg:pr-5">

                        <h1 className='font-medium text-start text-lg'>Mindfulness Meditation -</h1>
                        <br />
                        <p className='font-sans text-base text-gray-700 '>
                            <span className='font-medium text-lg'>Cognitive Ability Advancement</span>   Training Your child will first take the Woodcock Johnson Test of Cognitive Abilities administered by an outside, Licensed Clinician to gain a baseline of cognitive ability performance in general intellectual ability, broad and narrow cognitive abilities, academic domain-specific aptitudes, and related aspects of cognitive functioning. The test results include your child's predicted achievement and intellectual ability scores. Based upon your child's individual cognitive ability scores, they will be guided to perform fun "games" on the trampoline that will advance their cognitive development in the areas they need it most and, accordingly, raise their intellectual abilities and predicted achievement as evidenced by a follow-up test.</p>



                    </div>
                    <div>
                        <img className='mb-3' src={card1} alt="" srcset="" />


                    </div>

                </div>


            </div>
        </div>
    );
};

export default AcademicsDescription;