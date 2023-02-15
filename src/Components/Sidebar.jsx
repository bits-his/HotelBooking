import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MdDashboard } from 'react-icons/md'
import { FaHotel } from 'react-icons/fa'
import { MdOutlineBedroomParent } from 'react-icons/md'

export default function Sidebar() {
  const goto = useNavigate()
    return (
    <div className='sidebar_div'>
      <h4 className='mt-4 text-white app_title' style={{fontSize: '26px'}}>Hotel Booking</h4>
      <div className= 'link' activeclassName= "active">
        <li onClick={()=>goto('/dashboard')} className= 'link_item'><MdDashboard className='logo'/> Dashboard</li>
        <li onClick={()=>goto('/hotel-registration')} className= 'link_item'><FaHotel className='logo'/> New Hotel</li>
        <li onClick={()=>goto('/room-registration')} className= 'link_item'><MdOutlineBedroomParent className='logo'/> New Room</li>
      </div>
    </div>
  )
}
