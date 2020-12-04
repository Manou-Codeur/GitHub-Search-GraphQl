import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import * as serviceWorker from "./serviceWorker";

import { client } from "./apollo";
import App from "./App";
import InputProvider from "./contexts/inputField";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <InputProvider>
        <App />
      </InputProvider>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
