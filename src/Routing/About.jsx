import React from "react";
import UseParamHook from "../Component/UseParamHook";
import ChatApp from "../Component/ChatApp";

export default function About() {
  return (
    <div>
      <h1>About component</h1>
      <UseParamHook />
      <ChatApp />
    </div>
  );
}
