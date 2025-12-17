import React, { useState } from "react";

export default function UseReducerHook() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>inc</button>
      <button onClick={() => setCount(count - 1)}>dec</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}
