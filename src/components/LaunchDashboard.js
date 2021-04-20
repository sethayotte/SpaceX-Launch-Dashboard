import React from "react";

import SpaceXLogo from "../assets/spacex.svg";
import { RiArrowGoBackLine } from "react-icons/ri";

const LaunchDashboard = () => {
  return (
    <div id="dashboardPage">
      <div id="header">
        <div id="headerLeft">
          <img src={SpaceXLogo} alt="SpaceX Logo" />
          <h3>Launch Schedule</h3>
        </div>
        <div id="headerRight">
          <a href="/">
            <RiArrowGoBackLine id="backToTitle" />
          </a>
        </div>
      </div>
      <div id="missionContainers">
        <div id="pastMissions">
          <h2>Past_Missions</h2>
        </div>
        <div id="upcomingMission">
          <h1>Upcoming_Mission</h1>
        </div>
      </div>
    </div>
  );
};

export default LaunchDashboard;
