import {useFieldArray, useForm} from 'react-hook-form'
import styled from 'styled-components'
import Button from '../Components/Button/Button'


type FormType = {
    firstName: string
    lastName: string
}

const StyledInput = styled.input`
margin: 10px;
padding: 10px;
`

const newName = (): FormType => ({firstName: '',lastName:''})

const PractiseFieldArray: React.FC = ()=>{
    const {register, formState: {errors}, control} = useForm<{name: FormType[]}>({defaultValues: {name: [{firstName: '', lastName: ''}]}})

const {fields, append, remove} = useFieldArray({name:'name' ,control,})

    return (
<div>
{fields.map((field, index) => (
<div key={field.id}>
<StyledInput {...register(`name.${index}.firstName` as const)} />
<StyledInput {...register(`name.${index}.lastName` as const)}/>
{ index>0 &&
<Button size='small' label='Delete' onClick={()=> remove(index) } palette='primary'/>}
</div>
)
)}
<Button size='small' label='Append' onClick={()=> append(newName()) } palette='primary'/>

</div>
    )

}

export default PractiseFieldArray