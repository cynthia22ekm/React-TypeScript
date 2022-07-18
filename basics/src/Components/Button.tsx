import styled from 'styled-components'
 
const StyledButton = styled.button <ButtonProps>`

`

export type ButtonProps = {
    label: string
    size: string
}

const Button: React.FC<ButtonProps> = ({label, size})=>
{
return (
    <StyledButton label={label} size={size}/>
)

}

export default Button;