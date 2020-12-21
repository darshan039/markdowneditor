import React, { FunctionComponent, ReactElement, ChangeEvent } from "react";
import "./text-editor.css";

interface textEditor {
  previewText: string;
  setPreviewText: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextEditor: FunctionComponent<textEditor> = ({
  previewText,
  setPreviewText,
}): ReactElement => {
  return (
    <textarea
      className="c-text-box-styles"
      id="editor"
      value={previewText}
      onChange={setPreviewText}
      rows={10}
    ></textarea>
  );
};
