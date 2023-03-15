import React from "react";
import curriculam from "../../../assets/Academic/curriculam4.webp";

const UpperElementLeftSIde = () => {
  return (
    <div>
      <div className="mt-3 sm:mt-20 mb-3 flex flex-col-reverse sm:flex-col">
        <img className="shadow-md" src={curriculam} alt="" />
        <p className="text-center">5th/6th Grade Student Master Transcript</p>
      </div>
      <div className="lg:mb-0 mb-5">
        <h3 className="text-[#0170B8] font-[400] text-[22px] lg:my-8 my-5">
          Social Studies -
        </h3>
        <p className="">
          <span className="text-[#0170B8]">
            Social Studies Essential Questions:
          </span>
          <ul className="list-disc ml-8">
            <li>How do geography and climate affect human societies?</li>
            <li>How does the past influence the present?</li>
            <li>What do various civilizations share, and what is unique?</li>
          </ul>
        </p>
        <br />
        <p className="text-[#0170B8]">Social Studies Overview</p>
        <br />
        <p className="text-sm sm:text-base">
          Upper elementary Social Studies curriculum alternates by year. One
          year begins with Early Man and moves through the Hellenistic Period;
          the next year focuses on American History from Pre-Colonial America to
          1900. Rather than learning dates and events as ends within themselves,
          we cover dates and events to set up background knowledge so that
          students can engage in historical inquiry, using facts and documents
          to answer historical questions. It is more meaningful and interesting
          for students to develop their own answer about how Abraham Lincoln
          viewed African-Americans based on primary source documents than to
          learn what a history book says about his views. Much of our Social
          Studies work is based on the the Reading Like a Historian approach
          from Stanford University’s Education School.
        </p>
        <br />
        <p className="text-[#0170B8]">Science -</p>
        <br />
        <p className="text-sm sm:text-base">
          In intermediate science we focus on the earth sciences, studying
          topics such as soil science, rocks and minerals, plate tectonics,
          weather, and astronomy. We learn about these topics through
          inquiry-based hands-on activities. We follow each activity with
          discussions and writing assignments that help the students to cement
          their learning and assign appropriate scientific terminology to the
          concepts that they explored during the activities. The students
          regularly practice identifying relevant scientific evidence and using
          that evidence to draw conclusions. We use the forest on campus to
          augment the curriculum and give the students a chance to design and
          carry out ecological research.
        </p>
        <br />
        <p className="text-[#0170B8]">Drama -</p>
        <br />
        <p className="text-sm sm:text-base">
          Throughout the year, the fifth and sixth graders explore the world,
          inside and out. We take monthly field trips to extraordinary places –
          museums, galleries, parks, and scenic and historical wonders. Each
          exploration is accompanied by reflections, both shared and individual
          – through poetry and prose, and the use of drama improv and games to
          comprehend the environment in which we live.
        </p>
      </div>
    </div>
  );
};

export default UpperElementLeftSIde;
