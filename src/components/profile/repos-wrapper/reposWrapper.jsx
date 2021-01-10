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
      {repos.length === 0 ? <h1>There is no repositories!</h1> : null}

      {repos.map(repo => (
        <Repository
          key={repo.node.id}
          data={repo.node}
          navigateToRepository={navigateToRepository}
        />
      ))}

      {canFetchMore && (
        <button onClick={fetchMoreData} disabled={waitRefetch}>
          {waitRefetch ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
};

export default ReposWrapper;
