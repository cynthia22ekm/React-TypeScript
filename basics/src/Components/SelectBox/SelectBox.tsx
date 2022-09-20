import Select from "react-select";
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
  onChange: (selected: SelectOption | unknown) => void;
};

const StyledSelect = styled(Select)<SelectBoxProps>`
  color: red;
`;

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
    <StyledSelect
      options={options}
      classNamePrefix={"select"}
      className={className}
      isDisabled={isDisabled}
      isSearchable={isSearchable}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default SelectBox;
