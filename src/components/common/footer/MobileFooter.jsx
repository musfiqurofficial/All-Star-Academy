import React from "react";
import Phone from "./smartphone-call.png";
import Gmail from "./gmail.png";
import Home from "./home.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const MobileFooter = () => {
  return (
    <div className="bg-[#fff] w-full fixed bottom-0 mt-2 shadow-[0_2px_8px_0_rgba(0,0,0,0.3)]">
      <div className="w-11/12 mx-auto flex justify-around py-2">
        <NavLink className="flex flex-col items-center" to="/">
          <FontAwesomeIcon icon={faHouse} duotone={true} />
          <span className="text-sm">Home</span>
        </NavLink>
        <a href="(425) 526-4600">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faPhone} duotone={true} />
            <span className="text-sm">Phone</span>
          </div>
        </a>
        <div className="flex flex-col justify-between items-center">
          <a href="brandy@allstarkiddos.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              duotone={true}
            />
          </a>
          <span className="text-sm">Email</span>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
