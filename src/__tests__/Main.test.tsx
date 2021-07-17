import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Main } from "../layout/main/Main";

describe("Main", () => {
  test(" test is working  !!!", async () => {
    const { findByTestId } = render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );

    const startingPage = await findByTestId("App-header");

    expect(startingPage).toBeInTheDocument();
  });
});
