import { gql } from "urql";

export const POST_DETAILS_QUERY = gql`
  query getPostDetails($id: ID!) {
    post (id: $id) {
      name
      votesCount
      website
      description
      media {
        url
      }
      thumbnail {
        url
      }
      topics {
        nodes {
          name
        }
      }
    }
  }
`;