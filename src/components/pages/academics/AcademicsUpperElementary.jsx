import React from "react";
import UpperElementLeftSIde from "./UpperElementLeftSIde";

const AcademicsUpperElementary = () => {
  const currentMonth = new Date().toISOString().slice(0, 7);
  const link = `https://calendly.com/brandysimison/60min?month=${currentMonth}`;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-10">
      <aside>
        <div className="lg:mb-0 mb-5">
          <h2 className="font-[600] text-[32px] my-5 lg:my-8">
            Upper Elementary Curriculum
          </h2>
          <h3 className="text-[#0170B8] font-[400] text-[22px] lg:my-8 my-5">
            Humanities -
          </h3>
          <p className="text-sm sm:text-base">
            Our Upper Elementary Humanities program builds on the natural
            connection between{" "}
            <span className="underline text-[#0170B8]">
              Social Studies and Language Arts
            </span>
            . This interdisciplinary approach benefits students because the more
            connections they make with academic content, the more they retain.
            Our classes are organized around essential questions, encouraging
            students to discover their own answers and truly make the learning
            their own. While the three subjects are integrated, each has its own
            class time to ensure a balanced approach.
          </p>
        </div>
        <div className="lg:mb-0 mb-5">
          <h3 className="text-[#0170B8] font-[400] text-[22px] lg:my-8 my-5">
            Writing -
          </h3>
          <p className="">
            <span className="text-[#0170B8]">
              {" "}
              Writing Essential Questions:
            </span>
            <ul className="list-disc ml-8">
              <li>How can I best harness words to express my thoughts?</li>
              <li>
                How do the steps of the writing process strengthen my work?
              </li>
              <li>How does feedback best improve writing?</li>
            </ul>
          </p>
          <br />
          <p className="text-[#0170B8]">Writing Overview:</p>
          <br />
          <p className="text-sm sm:text-base">
            Everyone has stories to tell and thoughts to share. Our Upper
            Elementary writing program focuses on using writing conventions and
            structure to develop and polish ideas.
          </p>
          <br />
          <p className="text-sm sm:text-base">
            During 5th and 6th grade, students establish the writing patterns
            they will use throughout their academic career. Accordingly, we
            focus on the writing process with multiple drafts and varied
            feedback so they internalize the importance of revision and editing.
            This sets them up for success in expressing their thoughts and
            interpretations. Students are energized and enthused as they see
            their writing improve over time and discover the beauty and power of
            their authentic voices.
          </p>
        </div>

        <div className="lg:mb-0 mb-5">
          <h3 className="text-[#0170B8] font-[400] text-[22px] lg:my-8 my-5">
            Literature -
          </h3>
          <p className="">
            <span className="text-[#0170B8]">
              Literature Essential Questions:
            </span>
            <ul className="list-disc ml-8 text-sm sm:text-base">
              <li>Why read this?</li>
              <li>How do authors harness words to express meaning?</li>
              <li>What makes a “good read”?</li>
            </ul>
          </p>
          <br />
          <p className="text-[#0170B8]">Literature Overview:</p>
          <br />
          <p className="text-sm sm:text-base">
            The overall goal is to instill a love of reading. Students choose
            books to read independently and also engage in book groups during
            class where students read, discuss, and analyze literature together,
            using their peers to help promote their understanding of the text.
            To demonstrate their reading experience, students have a wide choice
            of reading projects such as writing a song inspired by the book,
            rewriting a chapter from a different character’s point-of-view,
            designing character posters complete with graphics and quotes, or
            creating a board game based on their book. This allows students to
            interact with the text on levels besides analytical writing, and
            helps develop student intelligence and ability in varied arenas.
          </p>
        </div>

        <div className="lg:mb-0 mb-5">
          <h3 className="text-[#0170B8] font-[400] text-[22px] lg:my-8 my-5">
            Mathematics -
          </h3>
          <p className="text-sm sm:text-base">
            Along with work in the text, students are involved in cooperative
            problem-solving activities, use of manipulatives, games and puzzles.
            Homework is for exploration and enrichment or for the purpose of
            completing work begun in class. We emphasize strategies for using
            math skills to solve problems. Math level is determined by student
            ability rather than by grade.
          </p>
          <br />
          <p className="text-sm sm:text-base">
            Students are encouraged to ask questions of each other’s work and
            not only learn from the teacher, but also from each other. They
            share and work as a community of mathematicians to build on their
            knowledge and understanding of mathematics.
          </p>
          <br />
          <p className="text-[#0170B8]">Featured Topics:</p>
          <p className="">
            <ul className="list-disc ml-8 text-sm sm:text-base">
              <li>Operations and whole numbers </li>
              <li>Operations with decimals and fractions</li>
              <li>Place value</li>
              <li>Non-metric and metric</li>
              <li>Geometry</li>
              <li>Ratio and proportions</li>
            </ul>
          </p>
        </div>

        <div className="lg:mb-0 mb-5">
          <h3 className="text-[#0170B8] font-[400] text-[22px] lg:my-8 my-5">
            Arts and Crafts -
          </h3>
          <p className="text-sm sm:text-base">
            All-Star’s fifth and sixth grade art program introduces basic
            drawing, design, and three-dimensional craft skills. Students draw
            from life, memory, and imagination in a wide variety of dry and wet
            media while learning the basics of composition and perspective.
            Craft and sculpture projects introduce media such as weaving, papier
            mâché, and clay to build the foundations of three-dimensional
            expression.
          </p>
        </div>

        <div className="my-5 sm:my-20 w-auto sm:w-1/2 mx-auto sm:mx-0 text-center border-2 border-[#4EBA59] hover:bg-[#4EBA59] shadow-custom px-8 py-4 text-lg md:text-lg text-[#4EBA59] hover:text-white font-medium ">
          <a href={link} target="_blank" rel="noreferrer">
            Book A Tour
          </a>
        </div>
      </aside>
      <UpperElementLeftSIde />
    </div>
  );
};

export default AcademicsUpperElementary;
