import { useState } from "react";
import Calvin from "../../../assets/Home-Page/Footer/e1.webp";
import Niki from "../../../assets/Home-Page/Footer/e2.webp";
import Olga from "../../../assets/Home-Page/Footer/e3.webp";
import { BsArrowRight } from "react-icons/bs";

function HomeCard() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardDetails = [
    {
      id: 101,
      name: "Calvin & Jackie",
      date: "2021-22 Family",
      imageUrl: Calvin,
      details:
        "Click the image above to watch Calvin (11 years old) and his mom, Jackie, share their experience at All-Star Academy.",
      watchNowUrl: "https://www.youtube.com/watch?v=9PzOOxPLD7Y",
    },
    {
      id: 102,
      name: "Niki ",
      date: "2021-22 Family",
      imageUrl: Niki,
      details:
        "Click the image above to watch Calvin (11 years old) and his mom, Jackie, share their experience at All-Star Academy.",
      watchNowUrl:
        "https://www.youtube.com/watch?v=17hGSeEqE40&feature=youtu.be",
    },
    {
      id: 103,
      name: "Olga",
      date: "2021-22 Family",
      imageUrl: Olga,
      details:
        "Click the image above to watch Olga, parent of a 3rd grader, share her experience at All-Star Academy",
      watchNowUrl: "https://www.youtube.com/watch?v=xLt2-7kwSgU",
    },
  ];

  return (
    <div className="bg-[#fff] my-10">
      <div className="px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl md:px-18 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {cardDetails?.map((card) => (
            <div
              key={card.id}
              className="relative w-full h-[450px] overflow-hidden shadow-lg"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className="absolute inset-0 bg-cover bg-top"
                style={{ backgroundImage: `url(${card.imageUrl})` }}
              />
              <div
                className={`absolute py-5 inset-x-0 bottom-0 bg-[#1D67CD] text-white ${
                  hoveredCard === card.id
                    ? "h-48 opacity-100"
                    : "h-32 opacity-100"
                } transition-all duration-700 ease-in-out`}
              >
                <div className="h-full flex flex-col justify-start items-start px-4">
                  <h3 className="text-lg font-semibold">{card.name}</h3>
                  <p className="text-sm mb-3 mt-1">{card.details}</p>
                  {hoveredCard === card.id && (
                    <a
                      href={card.watchNowUrl}
                      className="text-white transition-all duration-700 ease-in-out inline-block"
                    >
                      Watch Now <BsArrowRight className="w-4 h-4 inline" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center bg-[#4EBA59] mt-5"
        style={{ height: "175px", width: "auto" }}
      >
        <h6 className=" text-center text-white font-[600] text-[20px] sm:text-[26px]  italic w-10/12 lg:w-8/12 mx-auto">
          "Intelligence plus character-that is the goal of true education.” -
          Martin Luther King Jr.
        </h6>
      </div>
    </div>
  );
}

export default HomeCard;
