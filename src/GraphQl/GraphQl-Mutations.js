import { gql } from "@apollo/client";

export const ADD_STAR = gql`
  mutation($input: AddStarInput!) {
    addStar(input: $input) {
      starrable {
        id
        viewerHasStarred
        stargazers {
          totalCount
        }
      }
    }
  }
`;

export const REMOVE_STAR = gql`
  mutation($input: RemoveStarInput!) {
    removeStar(input: $input) {
      starrable {
        id
        viewerHasStarred
        stargazers {
          totalCount
        }
      }
    }
  }
`;
