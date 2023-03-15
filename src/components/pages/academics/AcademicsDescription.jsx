import React from "react";
import objectiv from "../../../assets/Academic/objectiv.webp";
import curriculam3 from "../../../assets/Academic/curriculam3.webp";
import classes5 from "../../../assets/Academic/classes5.webp";
import book1 from "../../../assets/Academic/book1.webp";
import boo2 from "../../../assets/Academic/boo2.webp";
import book3 from "../../../assets/Academic/book3.webp";
import card1 from "../../../assets/Academic/card1.webp";
import AcademicsUpperElementary from "./AcademicsUpperElementary";

const AcademicsDescription = () => {
  return (
    <div className="bg-[#FAFAFA] py-10">
      <div className="px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg lg:px-8 ">
        {/* content 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 mb-0 sm:mb-10">
          <div className="mb-5 lg:mb-0 ">
            <h1 className="font-[600] text-[42px] my-5 lg:my-8">Objective</h1>
            <p className="text-sm sm:text-base">
              Here at All-Star Academy we focus on developing each child's mind,
              body, character, and spirit with holistic or "whole child"
              education in a small classroom setting. All of our curriculum is
              research-based, data-driven and rooted in adaptability to be able
              to develop and inspire each student to their fullest potential in
              light of differences or exceptionalities. Each child's report card
              provides observation into your child's academic skills and
              social-emotional development.
            </p>
          </div>
          <div className="ml-0 sm:ml-20 mb-8 sm:mb-0">
            <img className="mb-3" src={objectiv} alt="" srcset="" />
            <p className="text-center">1st/2nd Grade Classroom May 2021</p>
          </div>
        </div>

        {/* content 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="mb-5 lg:mb-0">
            <h2 className="font-[600] text-[30px] my-5 lg:my-8">
              Lower Elementary Curriculum
            </h2>
            <article className="text-sm sm:text-base">
              <span className="font-bold text-lg text-gray-700">
                Language Arts
              </span>{" "}
              -{" "}
              <a
                className="text-xl underline text-[#0170B8]"
                href="https://www.mheducation.com/prek-12/program/microsites/MKTSP-BGA10M0/wonders.html"
              >
                Wonders Literacy Curriculum
              </a>{" "}
              <article className="text-gray-700">
                Wonders is designed to foster a love of reading in all children.
                Wonders offers us the ability to adapt instruction as students
                grow. The curriculum aligns with our focus on teaching the whole
                child—and every child—to prepare students to be lifelong
                learners and critical thinkers. Combining the work of literacy
                experts with research on social emotional learning, Wonders
                helps us strengthen skills, bolster learning, and encourage
                independence in our classrooms, every day.
              </article>
            </article>
            <br />
            <article className="text-sm sm:text-base">
              <span className="font-bold text-lg">Mathematics</span> -{" "}
              <a
                className="text-xl underline text-[#0170B8]"
                href="https://www.youtube.com/watch?v=RUcI7ZNlaek"
              >
                Mindful Math Curriculum
              </a>{" "}
              <article className="text-gray-700">
                Mindful Math focuses on hands-on, engaging lessons. It
                encourages different ways of thinking and representing math
                concepts, including many opportunities and options for
                differentiation. Lessons encourage students to show their
                understanding in different ways and practice math concepts with
                or without supports. Mindful math lessons provide different
                levels of difficulty. Activities, games, and centers can be done
                in small groups to provide more support, independently for our
                more advanced learners, or in partners. Mindful math helps
                strengthen mathematical skills, encourage curiosity, and foster
                critical thinking skills.
              </article>
            </article>
            <br />
            <article className="text-sm sm:text-base">
              <span className="font-bold text-lg ">Social Studies</span> -
              <a
                className="text-[#0170B8]"
                href="https://www.youtube.com/watch?v=RUcI7ZNlaek"
              >
                Tribal Sovereignty
              </a>{" "}
              <span className="text-xl text-[#0170B8]">
                • World Cultural Traditions
              </span>
              <article className="text-gray-700">
                We teach Tribal sovereignty lessons that develop an
                understanding of Native American spiritual values through
                stories. Through these stories students also learn about the
                plants, animals, and geography of Washington State. Next, to
                expand our students worldly understanding, we choose a country
                to learn about each month. We learn about and celebrate
                important holidays; such as "Holi - Celebration of Colors" for
                the Indian tradition. We also teach about a culture's music,
                food, and key historical events.
              </article>
            </article>
          </div>
          <div className="flex flex-col-reverse sm:flex-col ml-0 sm:ml-20 mb-8 sm:mb-0">
            <img className="shadow-md" src={curriculam3} alt="" srcset="" />
            <p className="text-sm text-center mt-2 mb-5">
              Lower Elementary Report Card{" "}
            </p>
            <p className=" text-sm sm:text-base">
              <p className="text-xl">
                Science -{" "}
                <a
                  className="underline text-[#0170B8]"
                  href="https://mrsjonessclass.com/2019/03/little-1st-grade-science-thinkers.html"
                >
                  {" "}
                  Little Science Thinkers
                </a>
              </p>
              Like math, science is focused on finding patterns. However, the
              patterns are explored in the natural world. Some units are listed
              below. In all, we focus on hands on, engaging lessons that spark
              curiosity. Our lessons include adaptable independent work, partner
              projects, and group work.
              <ul className="mt-2">
                <li className="underline text-base">Unit 1: Light and Sound</li>

                <li className="underline text-base">Unit 2: Space</li>

                <li className="underline text-base">Unit 3: Earth’s Surface</li>

                <li className="underline text-base">
                  Unit 4: Survival of Living Things
                </li>

                <li className="underline text-base">Unit 5: Weather</li>
              </ul>
            </p>
          </div>
        </div>

        <AcademicsUpperElementary />

        <div className="grid grid-cols-1 sm:grid-cols-2 items-center my-5 sm:my-10">
          <div className="mb-5 lg:mb-0">
            <h1 className="font-[600] text-[30px] my-5 lg:my-8">
              Optional Specialist Classes
            </h1>
            <p className="text-sm sm:text-base">
              <span className="font-bold text-lg">
                Cognitive Ability Advancement
              </span>{" "}
              Training Your child will first take the Woodcock Johnson Test of
              Cognitive Abilities administered by an outside, Licensed Clinician
              to gain a baseline of cognitive ability performance in general
              intellectual ability, broad and narrow cognitive abilities,
              academic domain-specific aptitudes, and related aspects of
              cognitive functioning. The test results include your child's
              predicted achievement and intellectual ability scores. Based upon
              your child's individual cognitive ability scores, they will be
              guided to perform fun "games" on the trampoline that will advance
              their cognitive development in the areas they need it most and,
              accordingly, raise their intellectual abilities and predicted
              achievement as evidenced by a follow-up test.
            </p>
          </div>
          <div className="flex flex-col-reverse sm:flex-col ml-0 sm:ml-20 mb-8 sm:mb-0">
            <img className="mb-3" src={classes5} alt="" srcset="" />

            <p className="text-center text-xs">
              Cognitive Ability Advancement Training
            </p>
          </div>
        </div>

        <div className="w-9/12">
          <h4 className="font-medium text-start text-lg mb-3">
            Bible Studies -{" "}
          </h4>
          <div className="flex-none sm:flex gap-10">
            <img className="shadow-md" src={book1} alt="" srcset="" />

            <div className="flex flex-col gap-4 justify-between items-center mt-5 sm:mt-0">
              <h4 className="font-medium text-start text-lg">
                Books we utilize:{" "}
              </h4>
              <div className="flex gap-3 sm:gap-10">
                <img className="h-64 shadow-md" src={boo2} alt="" srcset="" />
                <img className="h-64 shadow-md" src={book3} alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>

        {/* mindfull meditation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center my-5 sm:my-10">
          <div className="mb-5 lg:mb-0">
            <h1 className="font-[600] text-[30px] my-5 lg:my-8">
              Mindfulness Meditation -
            </h1>
            <p className="text-sm sm:text-base">
              <span className="font-bold text-lg">
                Cognitive Ability Advancement
              </span>{" "}
              Training Your child will first take the Woodcock Johnson Test of
              Cognitive Abilities administered by an outside, Licensed Clinician
              to gain a baseline of cognitive ability performance in general
              intellectual ability, broad and narrow cognitive abilities,
              academic domain-specific aptitudes, and related aspects of
              cognitive functioning. The test results include your child's
              predicted achievement and intellectual ability scores. Based upon
              your child's individual cognitive ability scores, they will be
              guided to perform fun "games" on the trampoline that will advance
              their cognitive development in the areas they need it most and,
              accordingly, raise their intellectual abilities and predicted
              achievement as evidenced by a follow-up test.
            </p>
          </div>
          <div className="flex flex-col-reverse sm:flex-col justify-center items-start sm:items-end ml-0 sm:ml-20 mb-8 sm:mb-0 ">
            <div className="h-96">
              <img className="mb-3 w-auto" src={card1} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicsDescription;
