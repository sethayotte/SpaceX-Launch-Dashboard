import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_LAUNCH_DATA } from "../queries/getLaunchData";

import { RiArrowRightSLine } from "react-icons/ri";

const PastListItems = ({ item }) => {
  return (
    <div id="listItemContainer">
      <Link
        to={`/missions/${item.id}`}
        id="listItemLink"
        style={{ textDecoration: "none" }}
      >
        <div id="listText">
          <h2>{item.name}</h2>
          <h3>
            {item.date_local.slice(0, 10)}, {item.date_local.slice(11, 16)}
          </h3>
        </div>
        <div id="caratContainer">
          <RiArrowRightSLine id="listCarat" />
        </div>
      </Link>
    </div>
  );
};

const PanelData = () => {
  const { data, loading, error } = useQuery(GET_LAUNCH_DATA);

  const missions = data.past;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (!data) return null;

  return (
    <div>
      {missions
        .slice(0)
        .reverse()
        .map((item, id) => (
          <PastListItems key={id} item={item} />
        ))}
    </div>
  );
};

export { PastListItems, PanelData };
