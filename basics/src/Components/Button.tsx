import styled from 'styled-components'
 
export type ButtonProps = {
    label: string
    size: string
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const width = ({size}:ButtonProps )=>
    size === 'small'? '42px': '58px';

const height = ({size}: ButtonProps)=> 
size === 'small'? '15px' : '20px';



const StyledButton = styled.button<ButtonProps>((props)=>{
return `
display: flex;
align-items: center; 
justify-content: center;
width: ${width(props)};
height: ${height(props)}
`
})


const Button: React.FC<ButtonProps> = ({label, size, onClick}: ButtonProps)=>
{
return (
    <StyledButton label={label} size={size} onClick={onClick}>{label}</StyledButton>
)

}

export default Button