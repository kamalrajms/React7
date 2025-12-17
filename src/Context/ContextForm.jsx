import React from "react";
import ContactButton from "./ContactButton";
import { Pass } from "../App";
import { useContext } from "react";

export default function ContextForm() {
  const { setMode, mode, data } = useContext(Pass);
  return (
    <div className={mode}>
      welcome to React class..--{data.name}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        minima voluptatem repudiandae nisi dolorem odit, veritatis incidunt
        cumque? Quibusdam tempora blanditiis repellendus aperiam sunt vel
        recusandae quaerat soluta a ex.
      </p>
      <ContactButton />
    </div>
  );
}
