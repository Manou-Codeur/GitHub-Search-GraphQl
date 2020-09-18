import React from "react";
import RepositoryContext from "../../contexts/repositoryContext";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORY_DATA } from "../../GraphQl/GraphQl-Queries";

import WhiteWrapper from "./white-wrapper/whiteWrapper";

import "./repository.scss";

const Repository = ({
  match: {
    params: { reponame, owner },
  },
}) => {
  const { data, loading, error } = useQuery(GET_REPOSITORY_DATA, {
    variables: { repoName: reponame, ownerName: owner.slice(1) },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error!</h1>;

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
