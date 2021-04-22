import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_LAUNCH_DATA } from "../queries/getLaunchData";

import { RiArrowRightSLine } from "react-icons/ri";

const PastListItems = ({ item }) => {
  console.log("item", item);
  return (
    <div id="listItemContainer">
      <div id="listText">
        <h2>{item.name}</h2>
        <h3>
          {item.date_local.slice(0, 10)}, {item.date_local.slice(11, 16)}
        </h3>
      </div>
      <div id="caratContainer">
        <RiArrowRightSLine id="listCarat" />
      </div>
    </div>
  );
};

const PanelData = () => {
  const { data, loading, error } = useQuery(GET_LAUNCH_DATA, {
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      {data.past.map((item) => (
        <PastListItems key={item.date_local} item={item} />
      ))}
    </div>
  );
};

export { PastListItems, PanelData };
