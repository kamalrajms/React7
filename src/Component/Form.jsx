import React, { useState } from "react";

export default function Form() {
  const [formName, setFormName] = useState({
    name: "",
    email: "",
    age: "",
  });

  const HandleInput = (e) => {
    const { name, value } = e.target;
    setFormName({
      ...formName,
      [name]: value,
    });
  };
  const theme = {
    backgroundColor: "yellow",
    color: "#000",
    padding: "20px",
  };

  return (
    <div style={theme}>
      <h2>Multiple form</h2>
      <input
        type="text"
        value={formName.name}
        placeholder="Enter your name"
        name="name"
        onChange={HandleInput}
      />
      <input
        type="email"
        value={formName.email}
        placeholder="Enter your email"
        name="email"
        onChange={HandleInput}
      />
      <input
        type="number"
        value={formName.age}
        placeholder="Enter your age"
        name="age"
        onChange={HandleInput}
      />
    </div>
  );
}
