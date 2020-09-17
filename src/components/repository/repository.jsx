import React from "react";
import RepositoryContext from "../../contexts/repositoryContext";

import WhiteWrapper from "./white-wrapper/whiteWrapper";

import "./repository.scss";

const Repository = ({ data, error }) => {
  if (error) return <h1>Error!</h1>;
  if (!data) return <h1>Loading...</h1>;
  const { repository } = data;

  return (
    <RepositoryContext.Provider value={repository}>
      <div className="Repository">
        <h1 className="Repository__header">{repository.name}</h1>
        <WhiteWrapper />
      </div>
    </RepositoryContext.Provider>
  );
};

export default Repository;
