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
        clearable={true}
        iconVectorRight={Ball}
        value={"Cynthia"}
      />
      <br />
      <TextInput type={"text"} placeholder={"Enter Name"} />
      <br />
      <TextInput
        iconVectorLeft={Ball}
        type={"password"}
        placeholder={"Enter Name"}
        clearable={true}
        iconVectorRight={Ball}
      />
      <br />
      <TextInput
        iconVectorLeft={Ball}
        type={"text"}
        placeholder={"Enter Name"}
        clearable={true}
        iconVectorRight={Ball}
        value={"Cynthia"}
        errorMessage={"This value is incorrect"}
        hasErrors={true}
      />
      <br />
      <Button label={"Submit"} size={"small"} palette={"default"} />
      <br />
      <br />
      <Icon vector={Ball} />
    </div>
  );
}

export default App;
