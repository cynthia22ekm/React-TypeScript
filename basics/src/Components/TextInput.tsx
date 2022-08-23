import React from "react";
import { ChangeEvent, FocusEvent, ElementType, ForwardedRef } from "react";
import styled from "styled-components";

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
};

const StyledInput = styled.input<StyledInputProps>``;

const TextInput: React.FC<TextInputProps> = React.forwardRef<
  HTMLInputElement,
  TextInputProps
>(
  (
    {
      className,
      ariaLabel,
      name,
      placeholder,
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
      type,
      value,
      onChange,
      onBlur,
      onFocus,
      onEnter,
      onClear,
    },
    ref
  ) => {
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
        onBlur={onBlurHandler}
        onChange={onChange}
        onFocus={onFocusHandler}
        onKeyDown={keyDownHandler}
        placeholder={placeholder}
        ref={ref}
        required={required}
        value={value}
        maxLength={maxLength}
      />
    );
  }
);

export default TextInput;
