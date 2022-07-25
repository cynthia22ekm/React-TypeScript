import styled from 'styled-components'

export type ButtonSize = 'small'|'large'
export type ButtonPalette = 'danger'| 'dark' | 'default' | 'primary'
 
export type ButtonProps = {
    label: string
    size: ButtonSize
    palette: ButtonPalette
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const width = ({size}:ButtonProps )=>
    size === 'small'? '72px': '68px';

const height = ({size}: ButtonProps)=> 
size === 'small'? '30px' : '40px';

const background = ({palette} : ButtonProps)=>

    palette === 'danger' ? 'red' : palette === 'dark'? 'grey':palette === 'default'? 'white' : 'lightblue';



const StyledButton = styled.button<ButtonProps>((props)=>{
return `
display: in;ine-flex;
align-items: center; 
justify-content: center;
width: ${width(props)};
height: ${height(props)};
background: ${background(props)};
`
})


const Button: React.FC<ButtonProps> = ({label, size,palette, onClick}: ButtonProps)=>
{
return (
    <StyledButton label={label} size={size} onClick={onClick} palette={palette}>{label}</StyledButton>
)

}

export default Button