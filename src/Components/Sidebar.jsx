import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MdDashboard, MdRoomPreferences } from 'react-icons/md'
import { FaHotel } from 'react-icons/fa'
import { MdOutlineBedroomParent } from 'react-icons/md'
import { ImUsers } from 'react-icons/im'

export default function Sidebar() {
  const goto = useNavigate()
    return (
    <div className='sidebar_div'>
      <h4 className='mt-4 text-white app_title' style={{fontSize: '26px'}}>Hotel Booking</h4>
      <div className= 'link' activeclassName= "active">
        <li onClick={()=>goto('/dashboard')} className= 'link_item'><MdDashboard className='logo shadow'/> Dashboard</li>
        <li onClick={()=>goto('/hotel-registration')} className= 'link_item'><FaHotel className='logo shadow'/>Hotels</li>
        <li onClick={()=>goto('/room-registration')} className= 'link_item'><MdOutlineBedroomParent className='logo shadow'/>Register Room</li>
        <li onClick={()=>goto('/customers')} className= 'link_item'><ImUsers className='logo shadow'/> Customers</li>
        <li onClick={()=>goto('/manage-rooms')} className= 'link_item'><MdRoomPreferences className='logo shadow'/>Manage Rooms</li>
      </div>
    </div>
  )
}
