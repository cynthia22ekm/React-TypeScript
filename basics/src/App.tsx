import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "../src/Components/Button";
import PractiseFieldArray from "./Practise/PractiseFieldArray";
import PractiseFieldArrayWithNoRef from "./Practise/PractiseFieldArrayWithNoRef";
import TextInput from "./Components/TextInput";
import { Info } from "./Components/SVG";

function App() {
  return (
    <TextInput iconVectorLeft={Info} type={"text"} placeholder={"Enter Name"} />
  );
}

export default App;
