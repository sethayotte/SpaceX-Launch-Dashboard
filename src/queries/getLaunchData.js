import { gql } from "graphql-tag";

export const GET_LAUNCH_DATA = gql`
  query getLaunchData {
    next {
      name
      date_utc
      rocketId {
        name
      }
      location {
        locality
        region
      }
      details
    }
    past {
      name
      date_utc
      rocketId {
        name
      }
      location {
        locality
        region
      }
      details
    }
  }
`;
