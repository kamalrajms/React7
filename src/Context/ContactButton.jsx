import React, { useContext } from "react";
import { Pass } from "../App";

export default function ContactButton() {
  const { setMode, mode } = useContext(Pass);
  return (
    <div>
      <button onClick={() => setMode(mode === "light" ? "black" : "light")}>
        theme
      </button>
    </div>
  );
}
