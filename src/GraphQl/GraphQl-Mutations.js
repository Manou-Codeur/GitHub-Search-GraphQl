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
