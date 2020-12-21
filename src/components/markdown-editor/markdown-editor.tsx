import React, {
  ChangeEvent,
  FunctionComponent,
  ReactElement,
  useState,
  MouseEvent,
} from "react";
import "./markdown-editor.css";
import { Toolbar } from "../toolbar/toolbar";
import { TextEditor } from "../text-editor/text-editor";
import { EditorPreview } from "../editor-preview/editor-preview";
import { applyMarkup } from "../../services/editor.service";

export const MarkdownEditor: FunctionComponent = (): ReactElement => {
  const [previewText, setPreviewText] = useState<string>("");

  const updatePreviewText: (e: ChangeEvent<HTMLTextAreaElement>) => void = (
    e
  ) => {
    setPreviewText(e.target.value);
  };

  const actionPerformed = (
    e: MouseEvent<HTMLButtonElement>,
    action: string
  ) => {
    const editor: HTMLTextAreaElement = document.getElementById(
      "editor"
    ) as HTMLTextAreaElement;
    if(!editor) {
      return;
    }
    const sourceText = editor.value;
    const startIndex = editor.selectionStart;
    const endIndex = editor.selectionEnd;
    if (startIndex !== endIndex) {
      const markupText = applyMarkup(sourceText, action, startIndex, endIndex);
      setPreviewText(markupText);
    }
    
  };

  return (
    <div>
      <Toolbar actionPerformed={actionPerformed}></Toolbar>
      <div className="c-flex-container c-parent-height">
        <div className="c-flex-child">
          <TextEditor
            previewText={previewText}
            setPreviewText={updatePreviewText}
          ></TextEditor>
        </div>

        <div className="c-flex-child">
          <EditorPreview previewText={previewText}></EditorPreview>
        </div>
      </div>
    </div>
  );
};
