import React, { useState } from "react";

export default function DarkTheme() {
  const [darkMode, setDarkmode] = useState(false);
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#333" : "#ffff",
        color: darkMode ? "#fff" : "#333",
        padding: "30px",
      }}
    >
      <button onClick={() => setDarkmode(!darkMode)}>
        Switch to {darkMode ? "light" : "dark"} mode
      </button>
      <p>you are in {darkMode ? "dark" : "Light"} mode</p>
    </div>
  );
}
