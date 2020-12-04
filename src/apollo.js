import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ networkError }) => {
  if (networkError) {
    if (networkError.statusCode === 429)
      alert("There is too many requests, please try again later!");
    else alert("This is a network error, please reload the page!");
  }
});
const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_TOKEN}`,
  },
});
const link = ApolloLink.concat(errorLink, httpLink);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
