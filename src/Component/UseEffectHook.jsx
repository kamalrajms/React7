import React, { useEffect, useState } from "react";

export default function UseEffectHook() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component mounted");
  }, [count]);
  useEffect(() => {
    console.log(`that count update to : ${count}`);
  }, [count]);
  return (
    <div>
      <h2>useEffect</h2>
      <h3>Count :{count}</h3>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}
