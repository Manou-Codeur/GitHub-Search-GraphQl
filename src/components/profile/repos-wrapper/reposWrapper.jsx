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
  //this is for testing reasons
  let newRepos = [];
  if (!Array.isArray(repos)) {
    newRepos.push(repos);
  } else newRepos = repos;

  return (
    <div className="repo-wrapper">
      {newRepos.length === 0 ? <h1>There is no repositories!</h1> : null}

      {newRepos.map(repo => (
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
