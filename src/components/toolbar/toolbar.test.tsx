import React from "react";
import { cleanup, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Toolbar } from "./toolbar";

describe("Toolbar Component", () => {
  afterEach(cleanup);
  test("show all buttons", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Toolbar actionPerformed={() => null} />
      </BrowserRouter>
    );
    expect(getByTestId("bold")).toBeInTheDocument();
    expect(getByTestId("italic")).toBeInTheDocument();
    expect(getByTestId("link")).toBeInTheDocument();
    expect(getByTestId("list")).toBeInTheDocument();
  });
});
