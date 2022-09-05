import styled from "styled-components";
import { isTemplateSpan } from "typescript";
import RadioButtonItem from "./RadioButtonItem";

export type RadioButtonProps = {
  items: { name: string }[];
};

const StyledContainer = styled.div``;

const RadioButton: React.FC<RadioButtonProps> = ({ items }) => {
  return (
    <StyledContainer>
      {items.map((item, key) => (
        <RadioButtonItem name="country" label={item.name} key={key} />
      ))}
    </StyledContainer>
  );
};

export default RadioButton;
