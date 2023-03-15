import { useState } from "react";
import { NavLink } from "react-router-dom";

const TestDropdown = () => {
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);

  const toggleMoreDropdown = () => {
    setShowMoreDropdown(!showMoreDropdown);
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            exact
            activeClassName="active"
            className="hover:text-[#73C780]"
            to="/"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            className="hover:text-[#73C780]"
            to="/about"
          >
            ABOUT
          </NavLink>
        </li>
        <li
          className="relative"
          onMouseEnter={toggleMoreDropdown}
          onMouseLeave={toggleMoreDropdown}
        >
          <span className="hover:text-[#73C780] cursor-pointer">MORE</span>
          {showMoreDropdown && (
            <div className="absolute z-10">
              <ul className="bg-white shadow-md rounded-lg py-2 px-3">
                <li>
                  <NavLink
                    activeClassName="active"
                    className="hover:text-[#73C780]"
                    to="/birthday"
                  >
                    BIRTHDAY
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    className="hover:text-[#73C780]"
                    to="/contact"
                  >
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default TestDropdown;
