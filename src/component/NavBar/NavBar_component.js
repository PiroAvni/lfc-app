import React from "react";
import { ReactComponent as Lfc_Icon } from "../../Assets/Images/Icons/Lfc_icon.svg";
import { BiNews } from "react-icons/bi";
import { AiOutlineTeam } from "react-icons/ai";
import {CgProfile}from "react-icons/cg";
import { GoCalendar } from "react-icons/go";

import "./NavBar.styles.css";

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="nav-bar">
        <div className="nav-icons">
          <a herf="/">
            <BiNews className="nav-icon" />
          </a>
          <p className="nav-title">News</p>
        </div>

        <div className="nav-icons">
          <a herf="/">
            <AiOutlineTeam className="nav-icon" />
          </a>
          <p className="nav-title">Teams</p>
        </div>

        <div className="nav-icons">
          <a herf="/">
            <Lfc_Icon className="lfc-icon" />
          </a>
        </div>

        <div className="nav-icons">
          <a herf="/">
            <GoCalendar className="nav-icon" />
          </a>
          <p className="nav-title">Fixtures</p>
        </div>

        <div className="nav-icons">
          <a herf="/">
            <CgProfile className="nav-icon" />
          </a>
          <p className="nav-title">Profile</p>
        </div>
        
      </div>
    </div>
  );
}

export default NavBar;
