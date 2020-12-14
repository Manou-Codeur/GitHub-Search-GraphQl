import React from "react";
import { screen, render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";
import { ApolloProvider } from "@apollo/client";

import Profile from "./profile";
import { client } from "../../apollo";

const match = {
  isExact: true,
  params: {
    username: "@djamel96",
  },
  path: "/profile/:username",
  url: "/profile/@djamel96",
};
const history = createMemoryHistory();

test("Test the data state", done => {
  render(
    <ApolloProvider client={client}>
      <Profile history={history} match={match} />
    </ApolloProvider>
  );

  setTimeout(() => {
    //<User />
    expect(screen.getByTestId("my-name").textContent).toEqual("Name: Djamel96");
    expect(screen.getByTestId("followers").textContent).toEqual("Followers: 4");

    //<Repowrapper />
    expect(screen.getAllByTestId("repos").length).toBe(4);
    expect(screen.getByRole("button").textContent).toEqual("Load More");

    done();
  }, 2000);
});

// test("Test the error state", async () => {
//   const myMocks = {
//     request: {
//       query: GET_USER_DATA,
//       variables: {
//         login: "djamel96",
//       },
//     },
//     error: new Error("error"),
//   };

//   render(
//     <MockedProvider mocks={[myMocks]} addTypename={false}>
//       <Profile history={history} match={match} />
//     </MockedProvider>
//   );

//   await act(async () => await new Promise(resolve => setTimeout(resolve, 0)));
//   expect(screen.getByText("Failed to fetch!")).toBeInTheDocument();
// });

test("Test the loading state", () => {
  render(
    <ApolloProvider client={client}>
      <Profile history={history} match={match} />
    </ApolloProvider>
  );

  expect(screen.getByTestId("my-spinner")).toBeInTheDocument();
});
