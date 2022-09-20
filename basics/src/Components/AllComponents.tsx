import Button from "./Button/Button";
import TextInput from "./TextInput/TextInput";
import { Ball } from "./SVG";
import Icon from "./Icon/Icon";
import DropDown from "./Dropdown/DropDown";
import styled from "styled-components";
import RadioButton from "./RadioButton/RadioButton";
import SelectBox, { SelectOption } from "./SelectBox/SelectBox";
import { SingleValue } from "react-select";
import { ChangeEventHandler } from "react";

const StyledHeading = styled.div`
  margin-left: 550px;
  padding: 20px;
`;

const AllComponents: React.FC = () => {
  const items = [
    { name: "India" },
    { name: "Germany" },
    { name: "USA" },
    { name: "UK" },
  ];

  const SelectOptions = [
    { key: "IND", value: "India", label: "India" },
    { key: "DE", value: "Germany", label: "Germany" },
    { key: "USA", value: "America", label: "America" },
  ];

  const getSelectedValue = (value: SelectOption | unknown) => {
    console.log("The selected value is", value);
  };

  const getText = (event: React.ChangeEvent<HTMLInputElement>) => {
    return console.log("The event in all components", event.target.value);
  };

  return (
    <div>
      <input onChange={getText}></input>
      <StyledHeading>The Complete Components</StyledHeading>
      <TextInput
        iconVectorLeft={Ball}
        type={"text"}
        placeholder={"TextInput with Right and Left Icon"}
        clearable={true}
        iconVectorRight={Ball}
        value={""}
      />
      <br />
      <TextInput type={"text"} placeholder={"Enter Name"} />
      <br />
      <div>Passowrd TextInput</div>
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
        placeholder={"Text Input with Error Message"}
        clearable={true}
        iconVectorRight={Ball}
        value={""}
        errorMessage={"This value is incorrect"}
        hasErrors={true}
      />
      <br />
      <SelectBox
        options={SelectOptions}
        name="Countries"
        placeholder="Select Country"
        onChange={getSelectedValue}
      />
      <br />
      <Button label="Button Component" size="large" palette="default" />
      <br />
      <br />
      <Icon vector={Ball} />
      <br />
      <br />
      <DropDown title="Please select a Country" items={items} />
      <br />
      <br />

      {<RadioButton items={items} />}
    </div>
  );
};

export default AllComponents;
