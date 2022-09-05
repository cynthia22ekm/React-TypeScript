import { useCallback, useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import { Ball } from "../SVG";
import DropDownItem from "./DropDownItem";

export type DropDownProps = {
  title: string;
  items: { name: string }[];
};

const StyledDiv = styled.div`
  margin-left: 550px;
`;

const StyledTitle = styled.div`
  margin: 10px;
`;

const DropDown: React.FC<DropDownProps> = ({ title, items }) => {
  const [showPopup, setPopup] = useState(false);
  const [showItem, setItem] = useState("Select");

  const DropDownSelectHandler = useCallback(() => {
    setPopup(true);
  }, [setPopup]);

  const SelectDropDownItemHandler = useCallback(
    (item: string) => {
      setItem(item);
      setPopup(false);
    },
    [setItem, setPopup]
  );

  return (
    <div>
      <StyledDiv>This is a DropDown Component</StyledDiv>
      <StyledTitle>{title}</StyledTitle>
      <Button
        label={showItem}
        size={"large"}
        palette={"default"}
        onClick={DropDownSelectHandler}
      />
      {showPopup &&
        items.map((item, key) => (
          <DropDownItem
            key={key}
            label={item.name}
            icon={Ball}
            onClick={() => SelectDropDownItemHandler(item.name)}
          />
        ))}
    </div>
  );
};

export default DropDown;
