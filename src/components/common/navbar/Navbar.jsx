import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/navbar/logo.webp";
import { HiOutlinePhone } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentMonth = new Date().toISOString().slice(0, 7);
  const link = `https://calendly.com/brandysimison/60min?month=${currentMonth}`;

  let activeStyle = {
    color: "#73C780",
  };
  const menuItems = (
    <>
      <li>
        <NavLink
          className="hover:text-[#73C780] text-[14px]"
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:text-[#73C780] text-[14px]"
          to="/academics"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          ACADEMICS
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:text-[#73C780] text-[14px]"
          to="/admission"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          ADMISSIONS
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:text-[#73C780] text-[14px]"
          to="/afterschool"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          AFTER-SCHOOL
        </NavLink>
      </li>
      <li>
        <a
          className="hover:text-[#73C780] text-[14px]"
          href="https://www.6crickets.com/providerDirectory/US/WA/Issaquah/All-Star-Academy-fc79250f8c5b8043/programs/9942-w56b-zb3a/All-Star-Camp!?refer&provider=2439"
          target="_blank"
        >
          CAMPS
        </a>
      </li>
      <li>
        <NavLink
          className="hover:text-[#73C780] text-[14px]"
          to="/parents"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          PARENTS
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[#73C780] text-[14px]">More</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-[#fff] sticky top-0 z-50">
      <div className="px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl md:px-18 lg:px-8">
        <div className="relative flex items-center justify-between h-[100px]">
          <Link
            to="/"
            aria-label="Company"
            className="inline-flex items-center mx-auto sm:mx-0"
          >
            <img className="w-auto h-[80px]" src={logo} alt="" />
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            {menuItems}
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex ">
            <li>
              <div className="flex flex-col items-center justify-between gap-1">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 font-light text-sm border border-[#0170B8] text-[#0170B8] hover:bg-[#0170B8] hover:text-white hover:duration-500 uppercase flex justify-around items-center"
                >
                  Book a tour <IoIosArrowForward className="w-5 h-5" />
                </a>
                <h6 className="text-[#0170B8] font-light text-sm">
                  <HiOutlinePhone className="inline w-5 h-5" /> 425-526-4600
                </h6>
              </div>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        className="inline-flex items-center mx-auto sm:mx-0"
                      >
                        <img className="w-auto h-[80px]" src={logo} alt="" />
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      {menuItems}
                      <li>
                        <a
                          href={link}
                          className="px-6 py-3 font-light text-sm border border-[#0170B8] text-[#0170B8] hover:bg-[#0170B8] hover:text-white hover:duration-500 uppercase"
                          target="_blank"
                          aria-label="Book a tour"
                        >
                          Book a tour
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
