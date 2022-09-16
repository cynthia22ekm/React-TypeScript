import Button from "./Button";
import TextInput from "./TextInput";
import { Ball } from "./SVG";
import Icon from "./Icon";
import DropDown from "./Dropdown/DropDown";
import styled from "styled-components";
import RadioButton from "./RadioButton/RadioButton";

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

  return (
    <div>
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
      <Button label={"Button Component"} size={"large"} palette={"default"} />
      <br />
      <br />
      <Icon vector={Ball} />
      <br />
      <br />
      <DropDown title={"Please select a Country"} items={items} />
      <br />
      <br />

      {<RadioButton items={items} />}
    </div>
  );
};

export default AllComponents;
