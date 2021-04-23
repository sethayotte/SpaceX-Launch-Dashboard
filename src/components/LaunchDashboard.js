import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_LAUNCH_DATA } from "../queries/getLaunchData";

import SpaceXLogo from "../assets/spacex.svg";
import MissionImgPlaceholder from "../assets/960x0.jpeg";
import { RiArrowGoBackLine } from "react-icons/ri";
import { SolarSystemLoading } from "react-loadingg";
import { PanelData } from "./PastListItems";

const LaunchDashboard = () => {
  const { data, loading, error } = useQuery(GET_LAUNCH_DATA);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) return <SolarSystemLoading color="#ffffff" speed={1.5} />;
  if (error) return <p>{error.message}</p>;
  if (!data) return null;

  return (
    <div id="dashboardPage">
      <div id="header">
        <div id="headerLeft">
          <a href="/" id="homeLink">
            <img src={SpaceXLogo} alt="SpaceX Logo" />
            <h3>Launch Schedule</h3>
          </a>
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
          <div id="listItemsContainer">
            <PanelData />
          </div>
        </div>
        <div id="upcomingMission">
          <h1>Upcoming_Mission</h1>
          {/* <pre>{JSON.stringify(data, null, "  ")}</pre> */}
          <div id="blockOne">
            <div id="imageContainer">
              <img
                src={MissionImgPlaceholder}
                id="missionImage"
                alt="Falcon 9 launch"
              />
            </div>
            <div id="mainStats">
              <h4 className="statHeading">MISSION_NAME</h4>
              <h5 className="statFigure">{data.next[0].name}</h5>
              <h4 className="statHeading">LAUNCH_DATE</h4>
              <h5 className="statFigure">
                {data.next[0].date_local.slice(0, 10)},{" "}
                {data.next[0].date_local.slice(11, 16)}
              </h5>
              <h4 className="statHeading">ROCKET</h4>
              <h5 className="statFigure">{data.next[0].rocketId.name}</h5>
              <h4 className="statHeading">LAUNCH_SITE</h4>
              <h5 className="statFigure">{data.next[0].location.full_name}</h5>
            </div>
          </div>
          <div id="blockTwo">
            <div id="missionDetails">
              <h4 className="detailsHeading">LAUNCH_DETAILS</h4>
              <p className="detailsBody">{data.next[0].details}</p>
            </div>
            <div id="buttonContainer">
              <div id="watchLiveButton">
                <p>WATCH LIVE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchDashboard;
