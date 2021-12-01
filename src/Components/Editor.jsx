import React from "react";
//importing the required codemirror libraries
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import { Controlled as ControlledEditor } from "react-codemirror2";

function Editor({ displayName, language, value, onChange }) {
  const handleBeforeChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div className="editor-container">
      <div className="editor-heading">
        {displayName}
        <button>O/C</button>
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
