import React from 'react'
import { useRoutes } from 'react-router-dom'
import CustomerReg from '../Components/CustomerReg'
import Customers from '../Components/Customers'
import Dashboard from '../Components/Dashboard'
import HotelReg from '../Components/HotelReg'
import ManageRooms from '../Components/ManageRooms'
import RoomReg from '../Components/RoomReg'
import AppIndex from './AppIndex'
function AppNavigation() {
  let element = useRoutes([
    {
      path: '/',
      element: <AppIndex />,
      children: [{ index: true }],
    },
    {
      element: <AppIndex />,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
        {
          path: '/customer-registration',
          element: <CustomerReg />,
        },
        {
          path:'/hotel-registration',
          element:<HotelReg/>
        },
        {
          path:'/room-registration',
          element:<RoomReg/>
        },
        {
          path:'/manage-rooms',
          element:<ManageRooms  />
        },
        {
          path:'/customers',
          element:<Customers/>
        }

      ],
    },
  ])
  return element
}
export default AppNavigation
