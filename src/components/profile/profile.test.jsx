import React from "react";
import { screen, render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";
import { MockedProvider } from "@apollo/client/testing";

import Profile from "./profile";
import { GET_USER_DATA } from "../../GraphQl/GraphQl-Queries";
import { data } from "../../GraphQl/mock-queries";

const match = {
  isExact: true,
  params: {
    username: "@djamel96",
  },
  path: "/profile/:username",
  url: "/profile/@djamel96",
};
const history = createMemoryHistory();

test("Test the data state", async () => {
  const myMocks = {
    request: {
      query: GET_USER_DATA,
      variables: {
        login: "djamel96",
      },
    },
    result: {
      data,
    },
  };

  render(
    <MockedProvider mocks={[myMocks]} addTypename={false}>
      <Profile history={history} match={match} />
    </MockedProvider>
  );

  await act(async () => await new Promise(resolve => setTimeout(resolve, 0)));

  expect(screen.getByTestId("my-name").textContent).toEqual(
    "Name: djamel-tizi"
  );
  expect(screen.getByText("testing-repos")).toBeInTheDocument();
  expect(screen.getByText("66565")).toBeInTheDocument();

  screen.debug();
});

test("Test the error state", async () => {
  const myMocks = {
    request: {
      query: GET_USER_DATA,
      variables: {
        login: "djamel96",
      },
    },
    error: new Error("error"),
  };

  render(
    <MockedProvider mocks={[myMocks]} addTypename={false}>
      <Profile history={history} match={match} />
    </MockedProvider>
  );

  await act(async () => await new Promise(resolve => setTimeout(resolve, 0)));
  expect(screen.getByText("Failed to fetch!")).toBeInTheDocument();
});

test("Test the loading state", () => {
  render(
    <MockedProvider mocks={[]} addTypename={false}>
      <Profile history={history} match={match} />
    </MockedProvider>
  );

  expect(screen.getByTestId("my-spinner")).toBeInTheDocument();
});
