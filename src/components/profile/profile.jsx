import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_DATA } from "../../GraphQl/GraphQl-Queries";
import Produce from "immer";

import User from "./user/user";
import ReposWrapper from "./repos-wrapper/reposWrapper";

import "./profile.scss";

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

  const navigateToRepository = (repoName, owner) => {
    history.push(`/repository/${repoName}/@${owner}`);
  };

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
  if (error) return <h1>Error!</h1>;

  const { user } = data;

  return (
    <div className="profile">
      <User data={user} />
      <ReposWrapper
        canFetchMore={user.repositories.pageInfo.hasNextPage}
        fetchMoreData={fetchMoreData}
        repos={user.repositories.edges}
        navigateToRepository={navigateToRepository}
        waitRefetch={waitRefetch}
      />
    </div>
  );
};

export default Profile;
