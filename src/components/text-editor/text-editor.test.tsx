import React from "react";
import { cleanup, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { TextEditor } from "./text-editor";

describe("Text-Editor Component", () => {
  afterEach(cleanup);
  test("show Text Editor", () => {
    const { getByText } = render(
      <BrowserRouter>
        <TextEditor previewText={"Test"} setPreviewText={() => null} />
      </BrowserRouter>
    );
    expect(getByText("Test")).toBeInTheDocument();
  });
});
