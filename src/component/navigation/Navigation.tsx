import React, { FC, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";
import "./navResponsive.scss";
import openMenu from "../../assets/images/menu.svg";
import closeMenu from "../../assets/images/menu-cross.svg";

export const Navigation: FC = () => {
  // Start click function for menu
  const [menuToggled, setMenuToggled] = useState(false);
  const ToggleMenu = () => {
    menuToggled ? setMenuToggled(false) : setMenuToggled(true);
  };
  const ref = useRef<HTMLDivElement>(null);
  const handleClickOutsideHeader = (event: { target: any }) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setMenuToggled(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutsideHeader, true);
    return () => {
      document.removeEventListener("click", handleClickOutsideHeader, true);
    };
  });
  // End click function for menu
  // Start dropdown function for menu
  const [dropdownToggled, setDropdownToggled] = useState(false);
  const DropdownToggle = () => {
    dropdownToggled ? setDropdownToggled(false) : setDropdownToggled(true);
  };
  // End dropdown function for menu
  return (
    <nav
      id="nav"
      className={`header-navigation ${menuToggled ? "active" : ""}`}
      ref={ref}
    >
      <span className="open-menu-btn" onClick={ToggleMenu}>
        <img src={openMenu} alt="" />
      </span>
      <span className="close-menu-btn" onClick={ToggleMenu}>
        <img src={closeMenu} alt="" />
      </span>
      <ul className="list-style-none">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="#">About</NavLink>
        </li>
        <li className={dropdownToggled ? "active" : ""}>
          <NavLink to="#"> Services </NavLink>
          <svg
            onClick={DropdownToggle}
            className="drop-down-arrow"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#fff"
              stroke="none"
            >
              <path d="M895 3506 c-67 -29 -105 -105 -90 -183 6 -34 100 -131 843 -875 744 -743 841 -837 875 -843 94 -18 39 -66 949 843 909 909 861 855 843 949 -9 49 -69 109 -118 118 -94 18 -46 59 -875 -768 l-762 -762 -758 757 c-424 424 -769 762 -785 768 -38 14 -85 12 -122 -4z" />
            </g>
          </svg>
          <div className="dropdownList">
            <ul className="list-style-none">
              <li>
                <NavLink to="#">Service One</NavLink>
              </li>
              <li>
                <NavLink to="#">Service Two</NavLink>
              </li>
              <li>
                <NavLink to="#">Service Three</NavLink>
              </li>
              <li>
                <NavLink to="#">Service Four</NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <NavLink to="#">Blogs</NavLink>
        </li>
        <li>
          <NavLink to="#">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};
