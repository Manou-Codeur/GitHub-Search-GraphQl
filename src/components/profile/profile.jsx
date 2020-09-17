import React from "react";

import User from "./user/user";
import ReposWrapper from "./repos-wrapper/reposWrapper";

import "./profile.scss";

const Profile = ({ data, error }) => {
  if (error) return <h1>Error!</h1>;
  if (!data) return <h1>Loading...</h1>;
  const { user } = data;

  return (
    <div className="profile">
      <User data={user} />
      <ReposWrapper repos={user.repositories.edges} />
    </div>
  );
};

export default Profile;
