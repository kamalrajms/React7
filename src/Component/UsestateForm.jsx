import React, { useState } from "react";
import Style from "./Usestate.module.css";

export default function UsestateForm() {
  const [name, setName] = useState("react");
  console.log(name);
  const [isChecked, setIsChecked] = useState(false);
  //   console.log(isChecked);

  return (
    <div className={Style.useStateForm}>
      <h2>Controlled text input</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Check box</h2>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label>Check box</label>
    </div>
  );
}
