import { ChangeEvent } from "react";
import styled from "styled-components";

export type RadioButtonProps = {
  name: string;
  label: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const StyledText = styled.span`
  margin-left: 25px;
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  margin: 10px;
`;

const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 6px;
  height: 16px;
  cursor: "pointer";
  > input {
    position: absolute;
    cursor: pointer;
  }
  &:hover input ~ span {
    background: "red";
  }
  &:hover input:checked ~ span {
    background: "yellow";
  }
  & > input:checked ~ span {
    background: "grey";
  }
  & > input:checked ~ span:after {
    display: block;
  }
  & > input:focus ~ span {
    box-shadow: 0 0 0 4px green;
  }
  & > span:after {
    top: 5px;
    left: 5px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: "pink";
  }
`;

const RadioButtonItem: React.FC<RadioButtonProps> = ({
  name,
  label,
  onChange,
}) => {
  return (
    <RadioButtonContainer>
      <StyledInput
        name={name + "-radio-button"}
        type="radio"
        onChange={onChange}
      />
      <StyledText>{label}</StyledText>
    </RadioButtonContainer>
  );
};

export default RadioButtonItem;
