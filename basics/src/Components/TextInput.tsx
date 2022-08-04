import React from "react"
import { ChangeEvent,FocusEvent, ElementType, ForwardedRef } from "react"

export type TextInputProps = {
ariaLabel?: string
className?: string
name?: string
placeholder?: string
clearable?: boolean
disabled?: boolean
iconVectorRight?: ElementType
iconVectorLeft?: ElementType
id?: string
hasErrors?: boolean
helperMessage?: string
maxLength?: number
ref?: ForwardedRef<HTMLInputElement>  //This is used to provide focus in some cases ref.current.focus()
required?: string
size?: string
type?: string
value?: string
onChange?:  (event?: ChangeEvent<HTMLInputElement>) => void
onBlur?:  (event?: FocusEvent<HTMLInputElement>) => void
onFocus?:(event?: FocusEvent<HTMLInputElement>) => void
onEnter?: () => void
onClear?: ()=> void
}

const TextInput: React.FC<TextInputProps> = React.forwardRef<HTMLInputElement, TextInputProps>((
    {className,
    name,
    placeholder,
    clearable,
    disabled,
    iconVectorRight,
    iconVectorLeft,
    id,
    hasErrors,
    helperMessage,
    maxLength,
    required,
    size,
    type,
    value,
    onChange,
    onBlur,
    onFocus,
    onEnter,
    onClear}, ref) => {

    return (
<div></div>

    )
}
)

export default TextInput