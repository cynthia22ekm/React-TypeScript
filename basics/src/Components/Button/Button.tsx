import styled from "styled-components";

export type ButtonSize = "small" | "large";
export type ButtonPalette = "danger" | "dark" | "default" | "primary";
export type ButtonType = "submit" | "button";

export type ButtonProps = {
  label: string;
  type?: ButtonType;
  size: ButtonSize;
  palette: ButtonPalette;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const width = ({ size }: ButtonProps) => (size === "small" ? "72px" : "100px");

const height = ({ size }: ButtonProps) => (size === "small" ? "30px" : "40px");

const background = ({ palette }: ButtonProps) =>
  palette === "danger"
    ? "red"
    : palette === "dark"
    ? "grey"
    : palette === "default"
    ? "white"
    : "lightblue";

const StyledButton = styled.button<ButtonProps>((props) => {
  return `
display: in;ine-flex;
align-items: center; 
justify-content: center;
width: ${width(props)};
height: ${height(props)};
background: ${background(props)};
`;
});

const Button: React.FC<ButtonProps> = ({
  label,
  size,
  palette,
  type = "button",
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      label={label}
      size={size}
      type={type}
      palette={palette}
      onClick={onClick}
    >
      {label}{" "}
    </StyledButton>
  );
};

export default Button;
