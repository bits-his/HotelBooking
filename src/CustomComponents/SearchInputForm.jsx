import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { Input, Label } from 'reactstrap'

export default function InputForm(props) {
  return (
    <div>
        {props.label&&
        <Label className='Label mt-2'> 
            {props.label} {props.required && <span className='text-danger'>*</span>}
        </Label>}
        <div>  
            <input {...props} className= "app_input"/>
            <y
                onClick={props.onClick}
            />
        </div>
    </div>
  )
}
