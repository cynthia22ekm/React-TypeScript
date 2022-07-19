import styled from 'styled-components'
 
export type ButtonProps = {
    label: string
    size: string
}

const width = ({size}:ButtonProps )=>
    size === 'small'? '32px': '48px';

const height = ({size}: ButtonProps)=> 
size === 'small'? '32px' : '48px';



const StyledButton = styled.button<ButtonProps>((props)=>{
return `
align-items: center;
width: ${width(props)};
height: ${height(props)}
`
})


const Button: React.FC<ButtonProps> = ({label, size}: ButtonProps)=>
{
return (
    <StyledButton label={label} size={size}>{label}</StyledButton>
)

}

export default Button