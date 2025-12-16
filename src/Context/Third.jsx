import React, { useContext } from "react";
import { Pass } from "../App";

export default function Third() {
  const Passvalue = useContext(Pass);
  return (
    <div style={{ border: "2px solid black", padding: "30px" }}>
      Third component---{Passvalue}
    </div>
  );
}
