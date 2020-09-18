import React from "react";
import RepositoryContext from "../../contexts/repositoryContext";
import { useQuery, useMutation } from "@apollo/client";
import { GET_REPOSITORY_DATA } from "../../GraphQl/GraphQl-Queries";
import { ADD_STAR } from "../../GraphQl/GraphQl-Mutations";
import Produce from "immer";

import WhiteWrapper from "./white-wrapper/whiteWrapper";

import "./repository.scss";

const Repository = ({
  match: {
    params: { reponame, owner },
  },
}) => {
  const queryOptions = {
    variables: { repoName: reponame, ownerName: owner.slice(1) },
  };
  const { data, loading, error } = useQuery(GET_REPOSITORY_DATA, queryOptions);

  const mutationOptions = {
    optimisticResponse: {
      addStar: {
        starrable: {
          viewerHasStarred: true,
          stargazers: {
            totalCount: data && data.repository.stargazers.totalCount + 1,
          },
        },
      },
    },
    update: (cache, { data }) => {
      const prev = cache.readQuery({
        query: GET_REPOSITORY_DATA,
        variables: { repoName: reponame, ownerName: owner.slice(1) },
      });
      console.log(prev);

      const newData = Produce(prev, newest => {
        newest.repository.viewerHasStarred =
          data.addStar.starrable.viewerHasStarred;
        newest.repository.stargazers.totalCount =
          data.addStar.starrable.stargazers.totalCount;
      });
      cache.writeQuery({
        data: newData,
        query: GET_REPOSITORY_DATA,
      });
    },
  };
  const [addStar] = useMutation(ADD_STAR, mutationOptions);

  const addStarToRepo = () => {
    addStar({
      variables: {
        input: {
          starrableId: data.repository.id,
        },
      },
    });
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error!</h1>;

  const { repository } = data;
  return (
    <RepositoryContext.Provider value={repository}>
      <div className="Repository">
        <h1 className="Repository__header">{repository.name}</h1>
        <WhiteWrapper
          addStarToRepo={addStarToRepo}
          viewerStared={repository.viewerHasStarred}
        />
      </div>
    </RepositoryContext.Provider>
  );
};

export default Repository;
