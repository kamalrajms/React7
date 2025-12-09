import React, { useState } from "react";

export default function UseStateHook() {
  const [count, setCount] = useState();
  const [user, setUser] = useState(true);
  return (
    <div>
      <div>
        {user ? <p>welcome back...!</p> : <p>Please signin ..!</p>}
        <button onClick={() => setUser(!user)}>
          Sign {user ? "out" : "in"}
        </button>
      </div>
      <div>
        <h2>Count :{count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

// !true=false
// !false=true
