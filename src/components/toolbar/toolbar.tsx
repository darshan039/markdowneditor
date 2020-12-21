import React, { FunctionComponent, ReactElement, MouseEvent } from "react";
import "./toolbar.css";
import { FaBold, FaItalic, FaLink, FaListUl } from "react-icons/fa";

interface toolbar {
  actionPerformed: (e: MouseEvent<HTMLButtonElement>, action: string) => void;
}

export const Toolbar: FunctionComponent<toolbar> = ({
  actionPerformed,
}): ReactElement => {
  return (
    <div className="c-button c-bottom-border">
      <button className="c-button c-icon-button" id="bold" onClick={(e) => actionPerformed(e, "bold")}>
        <FaBold />
      </button>
      <button className="c-button c-icon-button" id="italic" onClick={(e) => actionPerformed(e, "italic")}>
        <FaItalic />
      </button>
      <button className="c-button c-icon-button" id="link" onClick={(e) => actionPerformed(e, "link")}>
        <FaLink />
      </button>
      <button className="c-button c-icon-button" id="list" onClick={(e) => actionPerformed(e, "list")}>
        <FaListUl />
      </button>
    </div>
  );
};
