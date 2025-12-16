import React from "react";
import Second from "./Second";

export default function First() {
  return (
    <div style={{border:"2px solid black",padding:"30px"}}>
      First component
      <Second />
    </div>
  );
}
