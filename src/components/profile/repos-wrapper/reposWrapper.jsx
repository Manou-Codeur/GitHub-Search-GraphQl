import React from "react";

import Repository from "./repo/repo";

import "./reposWrapper.scss";

const ReposWrapper = ({ repos, navigateToRepository }) => {
  return (
    <div className="repo-wrapper">
      {repos.map(repo => (
        <Repository
          key={repo.node.id}
          data={repo.node}
          navigateToRepository={navigateToRepository}
        />
      ))}

      <button>Load More</button>
    </div>
  );
};

export default ReposWrapper;
