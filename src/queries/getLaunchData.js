import { gql } from "apollo-boost";

export const GET_LAUNCH_DATA = gql`
  query getLaunchData {
    next {
      name
      date_local
      rocket
      rocketId {
        id
        name
      }
      launchpad
      location {
        full_name
        id
        locality
      }
      details
      id
      webcast
    }
    past {
      name
      date_local
      rocket
      rocketId {
        id
        name
      }
      launchpad
      location {
        full_name
        id
        locality
      }
      details
      id
      webcast
    }
  }
`;
