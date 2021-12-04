import React, { useState } from "react";
//importing the required codemirror libraries
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import { Controlled as ControlledEditor } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandAlt, faCompressAlt } from "@fortawesome/free-solid-svg-icons";

function Editor({ displayName, language, value, onChange }) {
  const [open, setOpen] = useState(true);

  const handleBeforeChange = (editor, data, value) => {
    onChange(value);
  };

  const handleOpenClose = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <div className={`editor-container ${open ? "" : "closed"}`}>
      <div className="editor-heading">
        {displayName}
        <button
          className={`shrink-expand-btn ${open ? "close-btn" : "open-btn"}`}
          type="button"
          onClick={handleOpenClose}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <ControlledEditor
        className="code-mirror-wrapper"
        onBeforeChange={handleBeforeChange}
        value={value}
        options={{
          lineWrapping: true,
          mode: language,
          lint: true,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </div>
  );
}

export default Editor;
