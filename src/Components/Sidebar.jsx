import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdDashboard, MdRoomPreferences, MdSafetyDivider } from 'react-icons/md'
import { BiUserPlus } from 'react-icons/bi'
import { MdOutlineBedroomParent } from 'react-icons/md'
import { ImUsers } from 'react-icons/im'
import { RiReservedLine } from 'react-icons/ri'
import Dropdowns from './Dropdown/Dropdown'
import { FaHotel } from 'react-icons/fa'

export default function Sidebar() {
  const goto = useNavigate()
  // const toggle = setIsOpen(!isOpen)

    return (
    <div className='sidebar_div'>
      <h4 className='mt-4 text-white app_title' style={{fontSize: '26px'}}>Hotel Booking</h4>
      <div className= 'link' activeclassName= "active">
        <li onClick={()=>goto('/dashboard')} className= 'link_item'><MdDashboard className='logo shadow'/> Dashboard</li>
        <li onClick={()=>goto('/agent')} className= 'link_item'><ImUsers className='logo shadow'/>Agent/Supplier Registration Form</li>
        <li onClick={()=>goto('/hotel-registration')} className= 'link_item'><FaHotel className='logo shadow'/>Hotel Registration Form</li>
        <li onClick={()=>goto('/room-registration')} className= 'link_item'><MdOutlineBedroomParent className='logo shadow'/>Rooms Registration Form</li>
        <Dropdowns title = 'SetUp Forms'>
          <li onClick={()=>goto('/room-type')} className= 'link_item' style={{marginLeft: 45, width: "87%"}}>Create Room type</li>
          <li onClick={()=>goto('/view')} className= 'link_item' style={{marginLeft: 45, width: "87%"}}>Create Room View</li>
          <li onClick={()=>goto('/table-meal')} className= 'link_item' style={{marginLeft: 45, width: "87%"}}>Create Meal</li>
          <li onClick={()=>goto('/country')} className= 'link_item' style={{marginLeft: 45, width: "87%"}}>Country</li>
          <li onClick={()=>goto('/reservation-details')} className= 'link_item' style={{marginLeft: 45, width: "87%"}}>Reservation Details</li>
        </Dropdowns>
        <li onClick={()=>goto('/costomer')} className= 'link_item'><BiUserPlus className='logo shadow'/>Client Registration Form</li>
        {/* <li onClick={()=>goto('/customers')} className= 'link_item'><ImUsers className='logo shadow'/> Customers</li> */}
        {/* <li onClick={()=>goto('/manage-rooms')} className= 'link_item'><MdRoomPreferences className='logo shadow'/>Manage Rooms</li> */}
        <li onClick={()=>goto('/allotment')} className= 'link_item'><MdSafetyDivider className='logo shadow'/>Allotment</li>
        <li onClick={()=>goto('/reservation')} className= 'link_item'><RiReservedLine className='logo shadow'/>Reservation</li>
      </div>
    </div>
  )
}
