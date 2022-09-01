import { ElementType } from "react";
import styled from "styled-components";
import Icon from "../Icon";
import { Ball } from "../SVG";

export type DropDownItemProps = {
  label?: string;
  icon?: ElementType;
  onClick?: (event: MouseEvent) => void;
};

const DropDownContainer = styled.div<DropDownItemProps>``;

const ItemContainer = styled.div``;

const StyledIcon = styled(Icon)``;

const StyledText = styled.div``;

const DropDownItem: React.FC<DropDownItemProps> = ({
  label,
  icon,
  onClick,
}) => {
  return (
    <DropDownContainer label={label}>
      <ItemContainer>
        {icon && <StyledIcon vector={Ball} />}
        {label && <StyledText>{label}</StyledText>}
      </ItemContainer>
    </DropDownContainer>
  );
};

export default DropDownItem;
