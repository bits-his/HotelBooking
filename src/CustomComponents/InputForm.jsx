import React from 'react'
import { Input, Label } from 'reactstrap'

export default function InputForm(props) {
  return (
    <div>
        {props.label&&<Label className='Label'> {props.label} </Label>}
        <Input {...props} className= "input_form"/>
    </div>
  )
}
