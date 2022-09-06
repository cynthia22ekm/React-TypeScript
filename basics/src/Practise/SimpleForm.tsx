import React, { useState } from "react";
import Button from "../Components/Button";
import TextInput from "../Components/TextInput";

const SimpleForm: React.FC = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const SetNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    console.log("Entered value is ", name);
  };

  const SetAgeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const FormSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log("The name is ", name);
    console.log("The age is ", age);
  };

  return (
    <form onSubmit={FormSubmitHandler}>
      <TextInput
        type={"text"}
        placeholder={"Enter Name"}
        clearable={true}
        value={name}
        onChange={SetNameHandler}
      />
      <TextInput
        type={"text"}
        placeholder={"Enter Age"}
        clearable={true}
        value={age}
        onChange={SetAgeHandler}
      />
      <Button type="submit" size="large" label="Submit" palette="default" />
    </form>
  );
};

export default SimpleForm;
