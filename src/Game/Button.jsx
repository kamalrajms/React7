import React from "react";

export default function Button({ value, onSquareClick }) {
  return (
    <button style={{ padding: "12px" }} onClick={onSquareClick}>
      {value}
    </button>
  );
}
