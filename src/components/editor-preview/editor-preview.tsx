import React, { FunctionComponent, ReactElement } from "react";
import "./editor-preview.css";
import MarkdownView from "react-showdown";

interface editorPreview {
  previewText: string;
}

export const EditorPreview: FunctionComponent<editorPreview> = ({
  previewText,
}): ReactElement => {
  return (
    <div id="editor-preview" className="c-padding">
      <MarkdownView markdown={previewText}></MarkdownView>
    </div>
  );
};
