import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import App from "./App";
import InputProvider from "./contexts/inputField";
import CustomApolloProvider from "./apollo-config";
import FetchError from "./errorBoundaries/fetchErrors";

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <FetchError>
      <CustomApolloProvider>
        <InputProvider>
          <App />
        </InputProvider>
      </CustomApolloProvider>
    </FetchError>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
