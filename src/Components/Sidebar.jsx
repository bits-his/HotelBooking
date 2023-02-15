import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Sidebar() {
  const goto = useNavigate()
    return (
    <div className=''>
      <h4 className='mt-2 text-white app_title'>Hotel Booking</h4>
      <div>
        <li onClick={()=>goto('/dashboard')}>Dashboard</li>
        <li onClick={()=>goto('/hotel-registration')}>New Hotel</li>
        <li onClick={()=>goto('/room-registration')}>New Room</li>
      </div>
    </div>
  )
}
