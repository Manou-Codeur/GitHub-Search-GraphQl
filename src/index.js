import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import InputProvider from "./contexts/inputField";
import "./index.css";

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

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <InputProvider>
          <App />
        </InputProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
