import React, { useState } from "react";
import { ChangeEvent, FocusEvent, ElementType, ForwardedRef } from "react";
import styled from "styled-components";
import Icon from "./Icon";
import { DefaultTheme } from "styled-components";

type InputSize = "small" | "large";

export type TextInputProps = {
  ariaLabel?: string;
  className?: string;
  name?: string;
  placeholder?: string;
  clearable?: boolean;
  disabled?: boolean;
  iconVectorRight?: ElementType;
  iconVectorLeft?: ElementType;
  id?: string;
  hasErrors?: boolean;
  helperMessage?: string;
  maxLength?: number;
  ref?: ForwardedRef<HTMLInputElement>; //This is used to provide focus in some cases ref.current.focus()
  required?: boolean;
  size?: InputSize;
  type?: string;
  value?: string;
  onChange?: (event?: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event?: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event?: FocusEvent<HTMLInputElement>) => void;
  onEnter?: () => void;
  onClear?: () => void;
};
type StyledInputProps = Partial<Omit<TextInputProps, "size">> & {
  inputSize: InputSize;
  focused?: boolean;
  theme: DefaultTheme;
};
const background = ({ disabled, theme }: StyledInputProps) =>
  disabled ? theme.colors.default[100] : theme.colors.default[200];

const border = ({ hasErrors, theme }: StyledInputProps) =>
  hasErrors ? `1px solid ${theme.colors.danger[400]}` : "1px solid transparent";

const borderFocus = ({ theme }: StyledInputProps) =>
  `1px solid ${theme.colors.primary[400]}`;

const borderRadius = ({ theme }: StyledInputProps) => theme.radius.medium;

const color = ({ disabled, theme }: StyledInputProps) =>
  disabled ? theme.colors.default[500] : theme.colors.default[600];

const height = ({ inputSize }: StyledInputProps) =>
  ({
    large: "48px",
    small: "32px",
  }[inputSize]);

const typography = ({ inputSize, theme }: StyledInputProps) =>
  ({
    large: theme.typography.desktop["label large regular"],
    small: theme.typography.desktop["label small regular"],
  }[inputSize]);

const placeholderColor = ({ theme }: StyledInputProps) =>
  theme.colors.default[500];

const iconPosition = ({ inputSize }: StyledInputProps) =>
  ({
    large: "16px",
    small: "12px",
  }[inputSize]);

const iconColor = ({ disabled, focused, hasErrors, theme }: StyledInputProps) =>
  disabled
    ? theme.colors.default[500]
    : focused
    ? theme.colors.primary[400]
    : hasErrors
    ? theme.colors.danger[400]
    : theme.colors.default[600];

const paddingLeft = ({ iconVectorLeft, inputSize }: StyledInputProps) =>
  ({
    large: iconVectorLeft ? "40px" : "16px",
    small: iconVectorLeft ? "36px" : "12px",
  }[inputSize]);

const paddingRight = ({
  iconVectorRight,
  inputSize,
  clearable,
  type,
}: StyledInputProps) =>
  ({
    large:
      iconVectorRight || clearable || type === "password" ? "40px" : "16px",
    small:
      iconVectorRight || clearable || type === "password" ? "36px" : "12px",
  }[inputSize]);

const StyledContainer = styled.div`
  position: relative;
  // left: 500px;
  // top: 200px;
  width: auto;
`;

const StyledIcon = styled(Icon)<StyledInputProps>`
  fill: ${iconColor};
`;
const StyledInput = styled.input<StyledInputProps>`
  background: ${background};
  border: ${border};
  border-radius: ${borderRadius};
  box-sizing: border-box;
  color: ${color};
  height: ${height};
  padding-left: ${paddingLeft};
  padding-right: ${paddingRight};
  width: 100%;
  ${typography};
  &:focus {
    border: ${borderFocus};
    outline: none;
  }
  &::placeholder {
    color: ${placeholderColor};
  }
`;

const StyledIconLeft = styled.div<StyledInputProps>`
  align-items: center;
  display: flex;
  height: ${height};
  left: ${iconPosition};
  position: absolute;
  top: 0;
`;

const TextInput: React.FC<TextInputProps> = React.forwardRef<
  HTMLInputElement,
  TextInputProps
>(
  (
    {
      className,
      ariaLabel,
      name,
      placeholder = "",
      clearable = false,
      disabled = false,
      iconVectorRight,
      iconVectorLeft,
      id,
      hasErrors = false,
      helperMessage,
      maxLength,
      required,
      size = "small",
      type = "text",
      value,
      onChange,
      onBlur,
      onFocus,
      onEnter,
      onClear,
    },
    ref
  ) => {
    const [focused, setFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const onBlurHandler = () => {
      console.log("Blur Handler");
    };

    const onFocusHandler = () => {
      console.log("Focus Handler");
    };

    const keyDownHandler = () => {
      console.log("Key Down Handler");
    };

    return (
      <StyledContainer className={className}>
        <StyledInput
          aria-label={ariaLabel}
          name={name}
          clearable={clearable}
          disabled={disabled}
          hasErrors={hasErrors}
          iconVectorLeft={iconVectorLeft}
          iconVectorRight={iconVectorRight}
          id={id}
          inputSize={size}
          placeholder={placeholder}
          ref={ref}
          required={required}
          value={value}
          maxLength={maxLength}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          onBlur={onBlurHandler}
          onChange={onChange}
          onFocus={onFocusHandler}
          onKeyDown={keyDownHandler}
        />
        {iconVectorLeft && (
          <StyledIconLeft inputSize={size}>
            <StyledIcon
              disabled={disabled}
              focused={focused}
              hasErrors={hasErrors}
              inputSize={size}
              vector={iconVectorLeft}
            />
          </StyledIconLeft>
        )}
      </StyledContainer>
    );
  }
);

export default TextInput;
