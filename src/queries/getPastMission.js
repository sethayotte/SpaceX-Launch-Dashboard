import { gql } from "apollo-boost";

export const GET_PAST_MISSION = gql`
  query MyQuery {
    mission(id: $missionId) {
      id
      date_local
      details
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
      webcast
      patch
    }
  }
`;
