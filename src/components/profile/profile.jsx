import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_DATA } from "../../GraphQl/GraphQl-Queries";

import User from "./user/user";
import ReposWrapper from "./repos-wrapper/reposWrapper";

import "./profile.scss";

const Profile = ({
  match: {
    params: { username },
  },
  history,
}) => {
  const { data, loading, error } = useQuery(GET_USER_DATA, {
    variables: { login: username.slice(1) },
  });

  const navigateToRepository = (repoName, owner) => {
    history.push(`/repository/${repoName}/@${owner}`);
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error!</h1>;

  const { user } = data;

  return (
    <div className="profile">
      <User data={user} />
      <ReposWrapper
        repos={user.repositories.edges}
        navigateToRepository={navigateToRepository}
      />
    </div>
  );
};

export default Profile;
