import React from 'react'
import { useRoutes } from 'react-router-dom'
import Agent from '../Components/Agent'
import Allotment from '../Components/Allotment'
import BankDetails from '../Components/BankDetails'
import CustomerReg from '../Components/CustomerReg'
import Customers from '../Components/Customers'
import Dashboard from '../Components/Dashboard'
import HotelReg from '../Components/HotelReg'
import Landing from '../Components/Landing'
import ManageRooms from '../Components/ManageRooms'
import Master from '../Components/Master'
import NewAgent from '../Components/NewAgent'
import Reservation from '../Components/Reservation'
import RoomReg from '../Components/RoomReg'
import SignIn from '../Components/SignIn'
import SignUp from '../Components/SignUp'
import AppIndex from './AppIndex'
function AppNavigation() {
  let element = useRoutes([
    {
      path: '/',
      element: <Landing />,
      children: [{ index: true }],
    },
    {
      path: 'sign-up',
      element: <SignUp />
    },
    {
      path: 'sign-ip',
      element: <SignIn />
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
        },
        {
          path:'/agent',
          element:<Agent/>
        },
        {
          path:'/new-agent/:agent_id',
          element:<Master/>
        },
        
        {
          path:'/new-agent',
          element:<Master/>
        },
        {
          path:'bank-details',
          element:<BankDetails/>
        },
        {
          path:'allotment',
          element:<Allotment/>
        },
        {
          path:'/reservation',
          element:<Reservation/>
        }

      ],
    },
  ])
  return element
}
export default AppNavigation
