import React, { useReducer } from "react";

export default function ReducerForm() {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  function formReducer(state, action) {
    return {
      ...state,
      [action.field]: action.value,
    };
  }

  const [state, dispatch] = useReducer(formReducer, initialState);

  function handleChanges(e) {
    dispatch({
      field: e.target.name,
      value: e.target.value,
    });
  }
  return (
    <div>
      <h2>Register form</h2>
      <input
        type="text"
        name="name"
        placeholder="enter name"
        value={state.name}
        onChange={handleChanges}
      />
      <input
        type="text"
        name="email"
        placeholder="enter email"
        value={state.email}
        onChange={handleChanges}
      />
      <input
        type="text"
        name="password"
        placeholder="enter password"
        value={state.password}
        onChange={handleChanges}
      />
    </div>
  );
}
