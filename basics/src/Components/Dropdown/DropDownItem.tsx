import { ElementType } from "react";
import styled from "styled-components";
import Icon from "../Icon/Icon";
import { Ball } from "../SVG";

export type DropDownItemProps = {
  label?: string;
  icon?: ElementType;
  onClick?: () => void;
};

const DropDownContainer = styled.div<DropDownItemProps>`
  border: 2px solid black;
  width: 100px;
`;

const ItemContainer = styled.div<DropDownItemProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledIcon = styled(Icon)``;

const StyledText = styled.div``;

const DropDownItem: React.FC<DropDownItemProps> = ({
  label,
  icon,
  onClick,
}) => {
  return (
    <DropDownContainer label={label}>
      <ItemContainer onClick={onClick}>
        {icon && <StyledIcon vector={Ball} />}
        {label && <StyledText>{label}</StyledText>}
      </ItemContainer>
    </DropDownContainer>
  );
};

export default DropDownItem;
