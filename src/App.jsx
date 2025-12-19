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
import ReducerForm from "./Component/ReducerForm";
import UseCallBackHook from "./Component/UseCallBackHook";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Home from "./Routing/Home";
import About from "./Routing/About";
import Service from "./Routing/Service";
import Contact from "./Routing/Contact";
import WebDev from "./Routing/WebDev";
import AppDev from "./Routing/AppDev";

export const Pass = createContext();

export default function App() {
  const name = "Hari";
  const age = 22;

  const display = false;

  const [mode, setMode] = useState("light");
  const data = { name: "kumar" };

  return (
    <>
      {display && (
        <div>
          <UseCallBackHook />
          <ReducerForm />
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
        </div>
      )}
      <BrowserRouter>
        <div className="Header">
          <Link to={""}>Home</Link>
          <Link to={"/About"}>About</Link>
          <Link to={"/Service"}>Service</Link>
          <Link to={"/Contact"}>Contact</Link>
        </div>

        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />}>
            <Route path="WebDevelopment" element={<WebDev />} />
            <Route path="AppDevelopment" element={<AppDev />} />
          </Route>
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
