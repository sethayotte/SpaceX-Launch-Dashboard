import React from "react";

import SpaceXLogo from "../assets/spacex.svg";

const LaunchDashboard = () => {
  return (
    <div id="dashboardPage">
      <div id="header">
        <img src={SpaceXLogo} alt="SpaceX Logo" />
        <h3>Launch Schedule</h3>
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
