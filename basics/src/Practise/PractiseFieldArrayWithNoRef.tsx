import { useForm, useFieldArray } from "react-hook-form"
import styled from "styled-components"
import Button from "../Components/Button"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useCallback } from "react"

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
const schema = yup.object().shape({ firstName: yup.string().required('FirstName is Required'), lastName: yup.string().required()})

const PractiseFieldArrayWithNoRef: React.FC = ()=> {

const {register, formState:{errors}, handleSubmit, control} = useForm<{registration: FormValues[]}>({defaultValues: {registration: [{firstName: '', lastName: '',age:0, gender:''}]}, resolver: yupResolver(schema)})

const {fields, append, remove} = useFieldArray({control, name: 'registration'})

const submitHandler = useCallback((values: {registration: FormValues[]})=> {
console.log(values.registration)}, []
)


    return (
        <form onSubmit={handleSubmit(submitHandler)}>
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
<Button size='small' label='Save' type='submit' palette='primary'/>
        </form>
    )
}

export default PractiseFieldArrayWithNoRef