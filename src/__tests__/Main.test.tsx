import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../layout/main/Home";

describe("Main", () => {
    test(" test is working  !!!", async () => {
        const {findByTestId} = render(
            <BrowserRouter>
                <Home/>
            </BrowserRouter>
        );

        const startingPage = await findByTestId("App-header");

        expect(startingPage).toBeInTheDocument();
    })
})