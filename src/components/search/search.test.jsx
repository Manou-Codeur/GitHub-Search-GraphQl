import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";


import Search from "./search";

afterEach(cleanup);

test("Test that <Search /> renders without errors", () => {
  render(<Search />);

  expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
});

test("Test that we get one input if <Search username />", () => {
  const { getByPlaceholderText } = render(<Search />);

  expect(getByPlaceholderText("Type username...")).toBeInTheDocument();
});

test("Test that we get two inputs if <Search !username />", () => {
  const { getByPlaceholderText } = render(
    <Search selectedField="notUsername" />
  );

  expect(getByPlaceholderText("Type repository name...")).toBeInTheDocument();
  expect(
    getByPlaceholderText("Type repository's owner...")
  ).toBeInTheDocument();
});


