import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import InputProvider from "./contexts/inputField";
import "./index.css";

const link = createHttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer 444da92d04c47d70e5b2679b806c7fe9ac6c7fd3`,
  },
});

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
