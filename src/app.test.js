import React from "react";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  act,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { ApolloProvider } from "@apollo/client";

import App from "./App";
import InputProvider from "./contexts/inputField";
import { client } from "./apollo";

afterEach(cleanup);

test("Test routing", () => {
  const history = createMemoryHistory();
  const { getByText, getByTestId } = render(
    <Router history={history}>
      <InputProvider>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </InputProvider>
    </Router>
  );

  userEvent.type(getByTestId("my-input"), "manou-codeur");
  userEvent.click(getByTestId("search-icon"));

  // expect(getByText(/Name: Manou-Codeur/i)).toBeInTheDocument();
});
