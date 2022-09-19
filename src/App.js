import logo from "./logo.svg";
import "./App.css";
import Select from "./components/Select";
import useCountryList from "./hooks/useCountryList";
import { useState } from "react";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";

function App() {
  console.log("App render");

  return (
    <div className="App">
      <Component1 />
      <Component2 />
    </div>
  );
}

export default App;
