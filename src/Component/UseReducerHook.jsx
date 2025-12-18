import React, { useReducer } from "react";

export default function UseReducerHook() {
  const initalState = { count: 0 };

  function reducerFunction(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducerFunction, initalState);
  return (
    <div>
      <h1>Count : {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
// action={type:"ince"}
