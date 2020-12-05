import React, { useState, useCallback } from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_DATA } from "../../GraphQl/GraphQl-Queries";
import { Redirect } from "react-router-dom";
import Produce from "immer";

import User from "./user/user";
import ReposWrapper from "./repos-wrapper/reposWrapper";
import Spinner from "./../load-spinner/loadSpinner";

import "./profile.scss";
export { GET_USER_DATA } from "../../GraphQl/GraphQl-Queries";
const Profile = ({
  match: {
    params: { username },
  },
  history,
}) => {
  const [waitRefetch, setWaitRefetch] = useState(false);

  const { data, loading, error, fetchMore } = useQuery(GET_USER_DATA, {
    variables: { login: username.slice(1) },
  });

  const navigateToRepository = useCallback(
    (repoName, owner) => {
      history.push(`/repository/${repoName}/@${owner}`);
    },
    [history]
  );

  const fetchMoreData = () => {
    setWaitRefetch(true);
    fetchMore({
      variables: {
        login: username.slice(1),
        cursor: data.user.repositories.pageInfo.endCursor,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        return Produce(prev, newestOne => {
          newestOne.user.repositories.edges = [
            ...newestOne.user.repositories.edges,
            ...fetchMoreResult.user.repositories.edges,
          ];
          newestOne.user.repositories.pageInfo =
            fetchMoreResult.user.repositories.pageInfo;
        });
      },
    }).then(res => setWaitRefetch(false));
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) {
    if (
      error.graphQLErrors.length > 0 &&
      error.graphQLErrors[0].type === "NOT_FOUND"
    ) {
      return <Redirect to="/notFound/User" />;
    } else return <h2>Failed to fetch!</h2>;
  }

  // const { user } = data;

  return (
    <div className="profile">
      <User
        data={{
          avatarUrl: data.user.avatarUrl,
          login: data.user.login,
          bio: data.user.bio,
          followers: {
            totalCount: data.user.followers.totalCount,
          },
        }}
      />

      <ReposWrapper
        canFetchMore={data.user.repositories.pageInfo.hasNextPage}
        fetchMoreData={fetchMoreData}
        repos={data.user.repositories.edges}
        navigateToRepository={navigateToRepository}
        waitRefetch={waitRefetch}
      />
    </div>
  );
};

export default Profile;
