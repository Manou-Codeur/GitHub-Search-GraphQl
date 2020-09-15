import React from "react";

import User from "./user/user";
import ReposWrapper from "./repos-wrapper/reposWrapper";

import "./profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <User />
      <ReposWrapper />
    </div>
  );
};

export default Profile;
