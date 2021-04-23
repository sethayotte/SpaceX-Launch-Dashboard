import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_PAST_MISSION } from "../queries/getPastMission";

import SpaceXLogo from "../assets/spacex.svg";
import MissionImgPlaceholder from "../assets/960x0.jpeg";
import { RiCloseCircleFill } from "react-icons/ri";
import { SolarSystemLoading } from "react-loadingg";

const LaunchDashboard = () => {
  let { missionId } = useParams();

  //   const { data, loading, error } = useQuery(GET_PAST_MISSION);
  //   const [missionData, setMissionData] = useState(null);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     console.log(data);
  //   }, [data]);

  //   if (loading) return <SolarSystemLoading color="#ffffff" speed={1.5} />;
  //   if (error) return <p>{error.message}</p>;
  //   if (!data) return null;

  return (
    <div id="dashboardPage">
      <div id="header">
        <div id="headerLeft">
          <img src={SpaceXLogo} alt="SpaceX Logo" />
          <h3>Launch Schedule</h3>
        </div>
        <div id="headerRight">
          <a href="/launch-dashboard">
            <RiCloseCircleFill id="backToTitle" />
          </a>
        </div>
      </div>
      <div id="pastMissionContainer">
        <div id="upcomingMission">
          <h1>Mission_{missionId}</h1>
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
              <h5 className="statFigure">{}</h5>
              <h4 className="statHeading">LAUNCH_DATE</h4>
              <h5 className="statFigure">
                {}, {}
              </h5>
              <h4 className="statHeading">ROCKET</h4>
              <h5 className="statFigure">{}</h5>
              <h4 className="statHeading">LAUNCH_SITE</h4>
              <h5 className="statFigure">{}</h5>
            </div>
          </div>
          <div id="blockTwo">
            <div id="missionDetails">
              <h4 className="detailsHeading">LAUNCH_DETAILS</h4>
              <p className="detailsBody">{}</p>
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
