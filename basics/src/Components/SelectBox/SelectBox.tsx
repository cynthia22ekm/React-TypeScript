import Select, { SingleValue } from "react-select";
import styled from "styled-components";

export type SelectOption = {
  key: string;
  value: string;
  label: string;
};

export type SelectBoxProps = {
  options: SelectOption[];
  className?: string;
  isDisabled?: boolean;
  isSearchable?: boolean;
  name: string;
  placeholder: string;
  value?: SelectOption;
  onChange: (selected: SingleValue<SelectOption>) => void;
};

const SelectBox: React.FC<SelectBoxProps> = ({
  options,
  className,
  isDisabled,
  isSearchable,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <Select
      options={options}
      className={className}
      isDisabled={isDisabled}
      isSearchable={isSearchable}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></Select>
  );
};

export default SelectBox;
