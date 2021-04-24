import React from "react";

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
        <a href="/#/launch-dashboard">
          <IoArrowForwardCircleOutline id="startArrow" />
        </a>
      </div>
    </div>
  );
};

export default Landing;
