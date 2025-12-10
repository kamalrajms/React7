import React from "react";
import Greeting from "./Greeting";
import Props from "./Props";
import ConditionalRendering from "./Component/ConditionalRendering";
import UseStateHook from "./Component/UseStateHook";
import DarkTheme from "./Component/DarkTheme";
import UsestateForm from "./Component/UsestateForm";
import Form from "./Component/Form";
import RegisterForm from "./Component/RegisterForm";

export default function App() {
  const name = "Hari";
  const age = 22;

  return (
    <>
      <RegisterForm />
      <Form />
      <UsestateForm />
      <DarkTheme />
      <UseStateHook />
      <ConditionalRendering />
      <Props name={name} age={age} />
      <h3>My name is {name}</h3>
      Hello Everyone..!{name}
      <Greeting FirstName={name} age={age} />
      <Greeting />
    </>
  );
}
