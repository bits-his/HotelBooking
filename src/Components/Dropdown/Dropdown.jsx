import React from 'react'
import { MdSettings } from 'react-icons/md'
import { BiUpArrow, BiDownArrow } from 'react-icons/bi'
import useToggle from './useToggle'

export default function Dropdowns(props) {
    const {open, toggle} = useToggle()
  return (
    <div>
      <div onClick={toggle} className= 'link_item'>
        <MdSettings className='logo shadow' />
        {props.title}
         {open?<BiUpArrow style={{marginLeft: 30}}/> : <BiDownArrow style={{marginLeft: 30}}/>}</div>
     { open &&<div> {props.children}</div> }
    </div>
  )
}
