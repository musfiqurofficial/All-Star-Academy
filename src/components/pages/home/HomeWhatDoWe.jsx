import React from "react";
import networking from "../../../assets/networking.png";
import cognitive from "../../../assets/cognitive.png";

const HomeWhatDoWe = () => {
  return (
    <div className="my-20">
      <div className="px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg md:px-14 lg:px-8">
        <h1 className="text-center text-[24px] sm:text-[32px] font-[600] mb-8">
          What do we have that NO OTHER school has?
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10 ">
          <div>
            <div className="flex justify-start items-center gap-5 pb-3">
              <img className="w-14 h-14" src={cognitive} alt="" />
              <h6 className="text-[#4EBA59] text-base">Cognitive Ability Development Training </h6>
            </div>
            <p>
              Based upon your child's individual cognitive ability scores, they
              will be guided to perform fun "games" on the trampoline that will
              advance their cognitive development in the areas they need it most
              and, accordingly, raise their intellectual abilities and predicted
              achievement. <span className="underline">Results guarantee</span>.
              Learn more by downloading the info packet below!
            </p>
          </div>
          <div>
            <div className="flex justify-start items-center gap-5 pb-3">
              <img className="w-14 h-14" src={networking} alt="" />
              <h6 className="text-[#4EBA59] text-base">Restorative Correction Trained Teachers</h6>
            </div>
            <p>
              Restorative correction assures an optimal learning environment is
              maintained despite behavioral struggles. Our teachers are trained
              to be proactive in preventing common misbehaviors and to respond
              to disruptive behavior with corrective coaching - not exclusion.
              Learn more by downloading the info packet below!
            </p>
          </div>
        </div>
        <div className="mx-auto text-center">
          <a
            className="p-4 border-2 border-green-600 bg-[#fff] hover:bg-green-600 hover:text-[#fff] hover:duration-500 font-[600] text-lg uppercase"
            href="/https://allstarkiddos.lpages.co/infopacket/"
            target="_blank"
          >
            Download Info Packet
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeWhatDoWe;
