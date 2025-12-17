import React, { useContext, createContext, useState } from "react";
import Greeting from "./Greeting";
import Props from "./Props";
import ConditionalRendering from "./Component/ConditionalRendering";
import UseStateHook from "./Component/UseStateHook";
import DarkTheme from "./Component/DarkTheme";
import UsestateForm from "./Component/UsestateForm";
import Form from "./Component/Form";
import RegisterForm from "./Component/RegisterForm";
import ListRendering from "./Component/ListRendering";
import UseEffectHook from "./Component/UseEffectHook";
import UseeffectTimer from "./Component/UseeffectTimer";
import UseEffectAPIBasic from "./Component/UseEffectAPIBasic";
import UseRefHook from "./Component/UseRefHook";
import First from "./Context/First";
import MultiSelectDropdown from "./Component/MultiSelectDropdown";
import ContextForm from "./Context/ContextForm";
import UseReducerHook from "./Component/UseReducerHook";

export const Pass = createContext();

export default function App() {
  const name = "Hari";
  const age = 22;

  const [mode, setMode] = useState("light");
  const data = { name: "kumar" };

  return (
    <>
      <UseReducerHook />
      <Pass.Provider value={{ setMode, mode, data }}>
        <ContextForm />
      </Pass.Provider>
      <MultiSelectDropdown />
      <div style={{ border: "2px solid black", padding: "30px" }}>
        App component
        <Pass.Provider value={name}>
          <First />
        </Pass.Provider>
      </div>
      <h2>useRef</h2>
      <UseRefHook />
      <UseEffectAPIBasic />
      <UseeffectTimer />
      <UseEffectHook />
      <ListRendering />
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
