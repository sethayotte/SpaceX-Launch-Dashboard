import React from "react";
import { Link } from "react-router-dom";

import { IoArrowForwardCircleOutline } from "react-icons/io5";
import spaceXLogo from "../assets/spacex.svg";

const Landing = () => {
  return (
    <div id="landingPage">
      <div id="title">
        <img src={spaceXLogo} id="landingLogo" alt="SpaceX Logo" />
        <h1 id="landingSubheading">Launch Schedule</h1>
      </div>
      <div>
        <Link to="/launch-dashboard">
          <IoArrowForwardCircleOutline id="startArrow" />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
