import React, { useState, useEffect } from "react";

import useLocalStorage from "../Hooks/useLocalStorage";
import Editor from "./Editor";

function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [codeDoc, setCodeDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCodeDoc(`
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
      `);
    }, 200);

    //when we change our codeDocs in the meantime of these 350 milliseconds, we will cancel our previous update
    return () => clearTimeout(timeout);
  }, [html, css, js]);

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
          srcDoc={codeDoc}
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
