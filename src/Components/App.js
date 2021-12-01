import React from "react";

import Editor from "./Editor";

function App() {
  return (
    <div className="App">
      {/* upper code section */}
      <div className="upper-section">
        <Editor /> {/** HTML code editor */}
        <Editor /> {/** CSS code editor */}
        <Editor /> {/** JS code editor */}
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
