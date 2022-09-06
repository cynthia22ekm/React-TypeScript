import React, { useState } from "react";
import { ChangeEvent, FocusEvent, ElementType, ForwardedRef } from "react";
import styled from "styled-components";
import Icon from "./Icon";
import { Ball, Hide, Show } from "./SVG";

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
  errorMessage?: string;
  maxLength?: number;
  ref?: ForwardedRef<HTMLInputElement>; //This is used to provide focus in some cases ref.current.focus()
  required?: boolean;
  size?: InputSize;
  type?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event?: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onEnter?: () => void;
  onClear?: () => void;
};
type StyledInputProps = Partial<Omit<TextInputProps, "size">> & {
  inputSize: InputSize;
  focused?: boolean;
};

type IconButtonProps = {
  inputSize?: InputSize;
  onClick?: (event: MouseEvent) => void;
};

const height = ({ inputSize }: StyledInputProps) =>
  ({
    large: "48px",
    small: "32px",
  }[inputSize]);

const iconPosition = ({ inputSize }: StyledInputProps) =>
  ({
    large: "16px",
    small: "12px",
  }[inputSize]);

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

const borderFocus = ({ focused }: StyledInputProps) =>
  focused && "2px solid red";

const StyledContainer = styled.div`
  position: relative;
  width: auto;
`;

const StyledIcon = styled(Icon)<StyledInputProps>`
  fill: purple;
`;
const StyledInput = styled.input<StyledInputProps>`
  background: white;
  border: 1px solid;
  border-radius: 2px;
  box-sizing: border-box;
  color: black;
  height: ${height};
  padding-left: ${paddingLeft};
  padding-right: ${paddingRight};
  width: 100%;
  &:focus {
    border: ${borderFocus};
    outline: none;
    background-color: lightblue;
  }
  &::placeholder {
    color: black;
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

const StyledIconButton = styled.button<IconButtonProps>`
  background: none;
  border: none;
  margin-top: 5px;
`;

const ShowPasswordButton = styled.button<IconButtonProps>`
  background: grey;
  border: 1px solid black;
`;

const StyledIconRight = styled.div<StyledInputProps>`
  align-items: center;
  display: flex;
  height: ${height};
  position: absolute;
  right: ${iconPosition};
  top: 0;
`;

const StyledErrorMessage = styled.div<StyledInputProps>((props) => {
  const { hasErrors } = props;

  return `
    color: ${hasErrors ? "red" : "yellow"};
`;
});

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
      errorMessage,
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
      ...props
    },
    ref
  ) => {
    const [focusedState, setFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const onBlurHandler = () => {
      setFocused(false);
    };

    const onFocusHandler = (event: FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      onFocus && onFocus(event);
    };

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (onEnter) {
        onEnter();
      }
    };

    const showPasswordClickHandler = () => {
      setShowPassword(!showPassword);
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
          focused={focusedState}
          maxLength={maxLength}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          onBlur={onBlurHandler}
          onChange={onChange}
          onFocus={onFocusHandler}
          onKeyDown={keyDownHandler}
          {...props}
        />
        {iconVectorLeft && (
          <StyledIconLeft inputSize={size}>
            <StyledIcon
              disabled={disabled}
              focused={focusedState}
              hasErrors={hasErrors}
              inputSize={size}
              vector={iconVectorLeft}
            />
          </StyledIconLeft>
        )}
        {(clearable || iconVectorRight || type === "password") && (
          <StyledIconRight inputSize={size}>
            {clearable && !!value && type !== "password" ? (
              <StyledIconButton type="button" onClick={onClear}>
                <Icon vector={Ball} />
              </StyledIconButton>
            ) : (
              iconVectorRight &&
              type !== "password" && (
                <StyledIcon
                  disabled={disabled}
                  focused={focusedState}
                  hasErrors={hasErrors}
                  inputSize={size}
                  vector={iconVectorRight}
                />
              )
            )}
            {type === "password" && (
              <ShowPasswordButton
                type="button"
                onClick={showPasswordClickHandler}
              >
                <Icon vector={showPassword ? Show : Hide} />
              </ShowPasswordButton>
            )}
          </StyledIconRight>
        )}
        {hasErrors && (
          <StyledErrorMessage inputSize={size} hasErrors={hasErrors}>
            {errorMessage}
          </StyledErrorMessage>
        )}
      </StyledContainer>
    );
  }
);

export default TextInput;
