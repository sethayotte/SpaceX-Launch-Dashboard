import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_PAST_MISSION } from "../queries/getPastMission";

import SpaceXLogo from "../assets/spacex.svg";
// import MissionImgPlaceholder from "../assets/960x0.jpeg";
import { RiCloseCircleFill } from "react-icons/ri";
import { SolarSystemLoading } from "react-loadingg";

const LaunchDashboard = () => {
  let { missionId } = useParams();

  const { data, loading, error } = useQuery(GET_PAST_MISSION, {
    variables: { missionId },
  });

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
          <Link to="/" id="homeLink">
            <img src={SpaceXLogo} alt="SpaceX Logo" />
            <h3>Launch Dashboard</h3>
          </Link>
        </div>
        <div id="headerRight">
          <Link to="/launch-dashboard">
            <RiCloseCircleFill id="backToTitle" />
          </Link>
        </div>
      </div>
      <div id="pastMissionContainer">
        <div id="upcomingMission">
          <h1>{data.mission.name}_Mission</h1>
          <div id="blockOne">
            <div id="imageContainer">
              <img
                src={data.mission.image}
                id="missionImage"
                alt="Falcon 9 launch"
              />
            </div>
            <div id="mainStats">
              <h4 className="statHeading">MISSION_NAME</h4>
              <h5 className="statFigure">{data.mission.name}</h5>
              <h4 className="statHeading">LAUNCH_DATE</h4>
              <h5 className="statFigure">
                {data.mission.date_local.slice(0, 10)},{" "}
                {data.mission.date_local.slice(11, 16)}
              </h5>
              <h4 className="statHeading">ROCKET</h4>
              <h5 className="statFigure">{data.mission.rocketId.name}</h5>
              <h4 className="statHeading">LAUNCH_SITE</h4>
              <h5 className="statFigure">{data.mission.location.full_name}</h5>
            </div>
          </div>
          <div id="blockTwo">
            <div id="missionDetails">
              <h4 className="detailsHeading">LAUNCH_DETAILS</h4>
              <p className="detailsBody">{data.mission.details}</p>
            </div>
            <div id="buttonContainer">
              <a
                href={data.mission.webcast}
                target="_blank"
                rel="noreferrer"
                id="webcastLink"
              >
                <div id="watchLiveButton">
                  <p>WATCH REPLAY</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchDashboard;
