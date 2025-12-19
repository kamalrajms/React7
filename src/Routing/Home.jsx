import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const page = useNavigate();

  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= 5) {
      page("/Service");
    }
  }, [count]);

  return (
    <div>
      <h1>Home component</h1>
      <button onClick={() => page("/Service")}> Move to service</button>

      <h3>Count : {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
    </div>
  );
}
