import React, { useState } from "react";

import Editor from "./Editor";

function App() {
  const [html, setHtml] = useState("hi i am ATul Saini");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  return (
    <div className="App">
      {/* upper code section */}
      <div className="upper-section">
        <Editor
          displayName="HTML"
          language="xml"
          value={html}
          onChange={setHtml}
        />
        {/** HTML code editor */}
        <Editor
          displayName="CSS"
          language="css"
          value={css}
          onChange={setCss}
        />
        {/** CSS code editor */}
        <Editor
          displayName="JS"
          language="javascript"
          value={js}
          onChange={setJs}
        />
        {/** JS code editor */}
      </div>
      {/* lower visualisation section */}
      <div className="lower-section">
        <iframe
          title="Result"
          sandbox="allow-scripts"
          // frameBorder="1"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
