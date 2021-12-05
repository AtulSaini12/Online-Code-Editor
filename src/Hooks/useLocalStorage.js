import React, { useState, useEffect } from "react";

const CODE_KEY = "online-code-editor-";

export default function useLocalStorage(key, initialCode) {
  const codedKey = CODE_KEY + key;

  const [code, setCode] = useState(() => {
    const JSONValue = localStorage.getItem(codedKey);
    if (JSONValue != null) {
      return JSON.parse(JSONValue);
    }
    if (typeof initialCode === "function") {
      return initialCode();
    } else {
      return initialCode;
    }
  });

  useEffect(() => {
    localStorage.setItem(codedKey, JSON.stringify(code));
  }, [code, codedKey]);

  return [code, setCode];
}
