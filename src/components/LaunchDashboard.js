import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_LAUNCH_DATA } from "../queries/getLaunchData";

import SpaceXLogo from "../assets/spacex.svg";
import { RiArrowGoBackLine } from "react-icons/ri";

const LaunchDashboard = () => {
  const { data, loading, error } = useQuery(GET_LAUNCH_DATA);
  const launchData = data?.getLaunchData;
  useEffect(() => {
    if (data) {
      console.log(launchData);
    }
  }, [data]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (!data) return null;

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
          <pre>{launchData ? launchData : "No Data"}</pre>
        </div>
      </div>
    </div>
  );
};

export default LaunchDashboard;
