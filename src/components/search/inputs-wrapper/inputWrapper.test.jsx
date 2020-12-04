import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import InputsWrapper from "./inputsWrapper";
import InputProvider, { InputFieldContext } from "../../../contexts/inputField";

afterEach(cleanup);

test("Test that the submit funct was called", () => {
  const fn = jest.fn();
  const { getByTestId } = render(
    <InputProvider>
      <InputsWrapper fieldSelected="User" handleSubmitWithClick={fn} />
    </InputProvider>
  );

  userEvent.type(getByTestId("my-input"), "manou-codeur");
  userEvent.click(getByTestId("search-icon"));

  expect(fn).toHaveBeenCalled();
});

test("Test that the input filling works", () => {
  const { getByTestId } = render(
    <InputProvider>
      <InputFieldContext.Consumer>
        {context => (
          <div>
            <InputsWrapper fieldSelected="User" />
            <h1 data-testid="context">{context.userName}</h1>
          </div>
        )}
      </InputFieldContext.Consumer>
    </InputProvider>
  );

  userEvent.type(getByTestId("my-input"), "manou-codeur");

  expect(getByTestId("context").textContent).toEqual("manou-codeur");
});

test("Test that the input will be red if it's empty when trying to submit", () => {
  const { getByTestId } = render(<InputsWrapper fieldSelected="User" />);

  userEvent.click(getByTestId("search-icon"));

  expect(getByTestId("my-input").parentNode.style.borderBottomColor).toEqual(
    "red"
  );
});
