import React, { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });
  const [error, seterror] = useState(false);

  const handleinpput = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    // console.log("hello");

    if (!formData.name || !formData.email || !formData.password) {
      seterror("All fields are required");
      return;
    }
    if (!formData.terms) {
      seterror("Accept the check box");
      return;
    }
    seterror("");
    alert("form is submitted successfully");
    console.log(formData);
  };
  return (
    <div className="RegisterForm">
      <form onSubmit={handleForm}>
        <h2>Register form</h2>
        {error && <p style={{color:"red"}}>{error}</p>}
        <input
          type="text"
          placeholder="Enter name "
          name="name"
          value={formData.name}
          onChange={handleinpput}
        />
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleinpput}
        />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={formData.password}
          onChange={handleinpput}
        />
        <input
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={handleinpput}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
