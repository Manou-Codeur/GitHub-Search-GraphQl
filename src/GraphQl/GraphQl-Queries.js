import { gql } from "@apollo/client";

export const GET_USER_DATA = gql`
  query getUserData($login: String!) {
    user(login: $login) {
      login
      avatarUrl
      bio
      followers {
        totalCount
      }
      repositories(first: 4) {
        edges {
          node {
            isPrivate
            owner {
              login
            }
            watchers {
              totalCount
            }
            description
            languages(first: 5) {
              edges {
                node {
                  name
                }
              }
            }
            id
            name
            stargazers {
              totalCount
            }
            licenseInfo {
              name
            }
            createdAt
          }
        }
      }
    }
  }
`;

export const GET_REPOSITORY_DATA = gql`
  query getRepositoryData($repoName: String!, $ownerName: String!) {
    repository(name: $repoName, owner: $ownerName) {
      name
      owner {
        login
      }
      stargazers {
        totalCount
      }
      createdAt
      isPrivate
      watchers {
        totalCount
      }
      licenseInfo {
        name
      }
      languages(first: 5) {
        edges {
          node {
            name
          }
        }
      }
      description
    }
  }
`;
