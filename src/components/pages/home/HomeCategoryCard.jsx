import React from "react";
import CardImg1 from "../../../assets/Home-Page/H-Card-Images/card1.webp";
import CardImg2 from "../../../assets/Home-Page/H-Card-Images/card2.webp";
import CardImg3 from "../../../assets/Home-Page/H-Card-Images/card3.webp";
import CardImg4 from "../../../assets/Home-Page/H-Card-Images/card4.webp";

const HomeCategoryCard = () => {
  const CategoryCards = [
    {
      id: "101",
      name: "Individualized ACADEMICS",
      img: CardImg1,
      detail:
        "We provide a personalized education in our 8:1 student to teacher classes.",
    },
    {
      id: "102",
      name: "COGNITIVE ABILITY TRAINING",
      img: CardImg2,
      detail:
        " We develop your child's intellectual abilities with a clinically proven, FUN program.",
    },
    {
      id: "103",
      name: "EMOTIONAL intelligence",
      img: CardImg3,
      detail:
        "We believe our student's emotional development is just as important as their scholastic development.",
    },
    {
      id: "104",
      name: "EQUItation",
      img: CardImg4,
      detail:
        "With horses on-site, our students get to appreciate caring for and riding horses.",
    },
  ];

  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-y-1 lg:gap-y-0 md:gap-y-1">
        {CategoryCards?.map((card) => (
          <div
            key={card.id}
            className="flex flex-col justify-center items-center text-white"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${card.img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "380px",
            }}
          >
            <h3 className="font-[600] text-[26px] text-center">{card.name}</h3>
            <h6 className="text-center p-4">{card.detail}</h6>
          </div>
        ))}
      </div>
      <div
        className="flex flex-col justify-center items-center bg-[#4EBA59]"
        style={{ height: "175px", width: "auto" }}
      >
        <h6 className=" text-center text-white font-[600] text-[20px] sm:text-[26px] italic w-10/12 lg:w-8/12 mx-auto">
          “Tell me and I forget, teach me and I may remember, involve me and I
          learn.” - Benjamin Franklin
        </h6>
      </div>
    </div>
  );
};

export default HomeCategoryCard;
