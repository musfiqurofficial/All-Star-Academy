import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/navbar/logo.webp";
import { HiOutlinePhone } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let activeStyle = {
    color: "#73C780",
  };
  const menuItems = (
    <>
      <li className="relative">
        <NavLink
          className="hover:text-[#73C780]"
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          ABOUT
        </NavLink>
        <ul className="absolute top-full left-0 z-10 hidden bg-white">
          <li>
            <NavLink
              to="/about/history"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about/mission"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Mission
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about/team"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Our Team
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink
          className="hover:text-[#73C780]"
          to="/academics"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          ACADEMICS
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:text-[#73C780]"
          to="/admission"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          ADMISSIONS
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:text-[#73C780]"
          to="/school"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          AFTER-SCHOOL
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:text-[#73C780]"
          to="/camps"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          CAMPS
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:text-[#73C780]"
          to="/parents"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          PARENTS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/home"
          className="hover:text-[#73C780]"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          More
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-[#fff] sticky top-0 z-50 shadow-sm">
      <div class="px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between h-[100px]">
          <Link
            to="/"
            aria-label="Company"
            class="inline-flex items-center mx-auto sm:mx-0"
          >
            <img className="w-auto h-[80px]" src={logo} alt="" />
          </Link>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            {menuItems}
          </ul>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <div className="flex flex-col items-center justify-between gap-1">
                <Link
                  href="/"
                  class="px-6 py-3 font-light text-sm border border-[#0170B8] text-[#0170B8] hover:bg-[#0170B8] hover:text-white hover:duration-500 uppercase flex justify-around items-center"
                  aria-label="Book a tour"
                >
                  Book a tour <IoIosArrowForward className="w-5 h-5" />
                </Link>
                <h6 className="text-[#0170B8] font-light text-sm">
                  <HiOutlinePhone className="inline w-5 h-5" /> 425-526-4600
                </h6>
              </div>
            </li>
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
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
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        class="inline-flex items-center mx-auto sm:mx-0"
                      >
                        <img className="w-auto h-[80px]" src={logo} alt="" />
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      {menuItems}
                      <li>
                        <Link
                          to="/"
                          class="px-6 py-3 font-light text-sm border border-[#0170B8] text-[#0170B8] hover:bg-[#0170B8] hover:text-white hover:duration-500 uppercase"
                          aria-label="Book a tour"
                        >
                          Book a tour
                        </Link>
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
