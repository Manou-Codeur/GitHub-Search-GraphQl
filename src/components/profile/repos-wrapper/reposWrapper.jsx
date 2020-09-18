import React from "react";

import Repository from "./repo/repo";

import "./reposWrapper.scss";

const ReposWrapper = ({
  repos,
  navigateToRepository,
  fetchMoreData,
  canFetchMore,
  waitRefetch,
}) => {
  return (
    <div className="repo-wrapper">
      {repos.map(repo => (
        <Repository
          key={repo.node.id}
          data={repo.node}
          navigateToRepository={navigateToRepository}
        />
      ))}

      {canFetchMore && <button onClick={fetchMoreData}>Load More</button>}
      {waitRefetch && <h3>Loading...</h3>}
    </div>
  );
};

export default ReposWrapper;
