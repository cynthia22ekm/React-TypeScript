import { useForm, useFieldArray } from "react-hook-form"
import styled from "styled-components"
import Button from "../Components/Button"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

type FormValues = {

    firstName: string
    lastName: string
    age: number
    gender: string 
}


const StyledInput = styled.input`
margin: 10px;
padding: 10px;
`

const newUser = ()=> ({firstName: '',lastName: '',age:0,gender:''})

const genders = [{gender: 'male'}, {gender: 'female'}]
const schema = yup.object().shape({}).required

const PractiseFieldArrayWithNoRef: React.FC = ()=> {

const {register, formState:{errors}, handleSubmit, control} = useForm<{registration: FormValues[]}>({defaultValues: {registration: [{firstName: '', lastName: '',age:0, gender:''}]}, resolver: yupResolver(schema)})

const {fields, append, remove} = useFieldArray({control, name: 'registration'})

const onSubmit = (data:FormValues[])=> {
console.log(data)
}


    return (
        <div>
            { fields.map((field, index) =>(
                <div key={field.id}>
<StyledInput {...register(`registration.${index}.firstName`)} />
<StyledInput {...register(`registration.${index}.lastName`)}/>
<StyledInput {...register(`registration.${index}.age`)}/>
<select>
    {genders.map((gender,index) => 

<option value={gender.gender}>{gender.gender}</option>
    )}
   
</select>
 </div>

           )) }
<Button size='small' label='Append' onClick={()=> append(newUser())} palette='primary'/>
<Button size='small' label='Save' onClick={handleSubmit(onSubmit)} palette='primary'/>
        </div>
    )
}

export default PractiseFieldArrayWithNoRef