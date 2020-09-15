import React from "react";

import Repository from "./repo/repo";

import "./reposWrapper.scss";

const ReposWrapper = () => {
  return (
    <div className="repo-wrapper">
      <Repository />
      <Repository />
      <Repository />
    </div>
  );
};

export default ReposWrapper;
