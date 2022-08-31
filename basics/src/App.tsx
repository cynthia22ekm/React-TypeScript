import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "../src/Components/Button";
import PractiseFieldArray from "./Practise/PractiseFieldArray";
import PractiseFieldArrayWithNoRef from "./Practise/PractiseFieldArrayWithNoRef";
import TextInput from "./Components/TextInput";
import { Ball } from "./Components/SVG";
import Icon from "./Components/Icon";

function App() {
  return (
    <div>
      <div>The Complete Components</div>
      <TextInput
        iconVectorLeft={Ball}
        type={"text"}
        placeholder={"Enter Name"}
      />
      <br />
      <Button label={"Submit"} size={"small"} palette={"default"} />
      <br />
      <Icon vector={Ball} />
    </div>
  );
}

export default App;
