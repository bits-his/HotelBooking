import React from 'react'
import { useRoutes } from 'react-router-dom'
import CustomerReg from '../Components/CustomerReg'
import Dashboard from '../Components/Dashboard'
import HotelReg from '../Components/HotelReg'
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
        }
      ],
    },
  ])
  return element
}
export default AppNavigation
