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
      element: <HotelReg />,
      children: [{ index: true }],
    },
    {
      element: <AppIndex />,
      children: [
        { index: true, element: <HotelReg /> },
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
        {
          path: '/customer-registration',
          element: <CustomerReg />,
        },
      ],
    },
  ])
  return element
}
export default AppNavigation
