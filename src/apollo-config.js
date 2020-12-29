import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import React from "react";
import { onError } from "@apollo/client/link/error";

export default props => {
  const [myError, setMyError] = React.useState(null);

  const errorLink = onError(({ networkError }) => {
    if (networkError) {
      if (networkError.statusCode === 429) {
        setMyError("There is too many requests, please try again later!");
      } else {
        setMyError("This is a network error, please reload the page!");
      }
    }
  });

  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
      Authorization: `bearer ${process.env.REACT_APP_TOKEN}`,
    },
  });

  const link = ApolloLink.concat(errorLink, httpLink);

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

  if (myError) throw new Error(myError);
  else return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};
