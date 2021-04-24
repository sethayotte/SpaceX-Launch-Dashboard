import { gql } from "apollo-boost";

export const GET_PAST_MISSION = gql`
  query MyQuery($missionId: String!) {
    mission(id: $missionId) {
      id
      date_local
      details
      image
      launchpad
      location {
        full_name
        id
        locality
      }
      name
      rocket
      rocketId {
        id
        name
      }
      image
      webcast
    }
  }
`;
