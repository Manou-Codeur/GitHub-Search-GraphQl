import React from "react";
import RepositoryContext from "../../contexts/repositoryContext";
import { useQuery, useMutation } from "@apollo/client";
import { GET_REPOSITORY_DATA } from "../../GraphQl/GraphQl-Queries";
import { ADD_STAR, REMOVE_STAR } from "../../GraphQl/GraphQl-Mutations";
import { Redirect } from "react-router-dom";
import Produce from "immer";

import WhiteWrapper from "./white-wrapper/whiteWrapper";
import Spinner from "../load-spinner/loadSpinner";

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

  const mutationOptions = operator => {
    const mutation = operator === "+" ? "addStar" : "removeStar";

    return {
      optimisticResponse: {
        __typename: "Mutation",
        [mutation]: {
          __typename: operator === "+" ? "AddStarPayload" : "RemoveStarPayload",
          starrable: {
            __typename: "Repository",
            viewerHasStarred: operator === "+" ? true : false,
            id: data && data.repository.id,
            stargazers: {
              __typename: "StargazerConnection",
              totalCount:
                operator === "+"
                  ? data && data.repository.stargazers.totalCount + 1
                  : data && data.repository.stargazers.totalCount - 1,
            },
          },
        },
      },
      update: (cache, { data }) => {
        const prev = cache.readQuery({
          query: GET_REPOSITORY_DATA,
          variables: { repoName: reponame, ownerName: owner.slice(1) },
        });

        const newData = Produce(prev, newest => {
          newest.repository.viewerHasStarred =
            data[mutation].starrable.viewerHasStarred;
          newest.repository.stargazers.totalCount =
            data[mutation].starrable.stargazers.totalCount;
        });
        cache.writeQuery({
          data: newData,
          query: GET_REPOSITORY_DATA,
        });
      },
    };
  };
  const [addStar] = useMutation(ADD_STAR, mutationOptions("+"));
  const [removeStar] = useMutation(REMOVE_STAR, mutationOptions("-"));

  const star_unStar = ({ target }) => {
    const variables = {
      input: {
        starrableId: data.repository.id,
      },
    };

    if (target.textContent === "Star") {
      addStar({
        variables,
      });
    } else {
      removeStar({
        variables,
      });
    }
  };

  if (loading) return <Spinner />;
  if (error) {
    if (
      error.graphQLErrors.length > 0 &&
      error.graphQLErrors[0].type === "NOT_FOUND"
    ) {
      return <Redirect to="/notFound/Repository" />;
    } else return <h2>{error.message}</h2>;
  }

  const { repository } = data;
  return (
    <RepositoryContext.Provider value={repository}>
      <div className="Repository">
        <h1 className="Repository__header">{repository.name}</h1>
        <WhiteWrapper
          star_unStar={star_unStar}
          viewerStared={repository.viewerHasStarred}
        />
      </div>
    </RepositoryContext.Provider>
  );
};

export default Repository;
