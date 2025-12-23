import React from "react";
import APIintegration from "../Component/APIintegration";
import useCount from "../Component/useCount";

export default function Contact() {
  const { count, increment, decrement, reset } = useCount(10);
  return (
    <div>
      <h1> Contact component</h1>
      <APIintegration />
      <h2>count : {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
