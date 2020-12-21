import React from "react";
import { cleanup, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { EditorPreview } from "./editor-preview";

describe("Editor Preview Component", () => {
  afterEach(cleanup);
  test("show preview", () => {
    const { getByText } = render(
      <BrowserRouter>
        <EditorPreview previewText={"Test"} />
      </BrowserRouter>
    );
    expect(getByText("Test")).toBeInTheDocument();
    
  });

  test("validate preview class", () => {
    const { container } = render(
      <BrowserRouter>
        <EditorPreview previewText={"Test"} />
      </BrowserRouter>
    );
    const editorPreview = container.querySelector('.c-preview');
    expect(editorPreview).toBeInTheDocument();
  });

  test("validate preview id", () => {
    const { container } = render(
      <BrowserRouter>
        <EditorPreview previewText={"Test"} />
      </BrowserRouter>
    );
    const editorPreview = container.querySelector('#editor-preview');
    expect(editorPreview).toBeInTheDocument();
  });
});
