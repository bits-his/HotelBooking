import React from 'react'
import { useRoutes } from 'react-router-dom'
import Agent from '../Components/Agent'
import Allotment from '../Components/Allotment'
import BankDetails from '../Components/BankDetails'
import Country from '../Components/Country'
import CreacteRoomType from '../Components/CreacteRoomType'
import CreacteView from '../Components/CreacteView'
import CreacteCountry from '../Components/CreateCountry'
import CreacteMeal from '../Components/CreateMeal'
import CreateNewCustomer from '../Components/CreateNewCustomer'
import CustomerReg from '../Components/CustomerReg'
import Customers from '../Components/Customers'
import Dashboard from '../Components/Dashboard'
import HotelReg from '../Components/HotelReg'
import Landing from '../Components/Landing'
import ManageRooms from '../Components/ManageRooms'
import Master from '../Components/Master'
import Meal from '../Components/Meal'
import NewAgent from '../Components/NewAgent'
import NewCustomer from '../Components/NewCustomer'
import Reservation from '../Components/Reservation'
import RoomReg from '../Components/RoomReg'
import RoomType from '../Components/RoomType'
import SignIn from '../Components/SignIn'
import SignUp from '../Components/SignUp'
import View from '../Components/Views'
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
      path: 'sign-in',
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
        },
        {
          path: '/room-type',
          element: <RoomType />
        },
        {
          path: '/creact-room-type',
          element: <CreacteRoomType />
        },
        {
          path: '/view',
          element: <View />
        },
        {
          path: 'create-view',
          element: <CreacteView />
        },
        {
          path: '/meal',
          element: <Meal />
        },
        {
          path: 'create-meal',
          element: <CreacteMeal />
        },
        {
          path: '/country',
          element: <Country />
        },
        {
          path: 'create-country',
          element: <CreacteCountry />
        },
        {
          path: 'costomer',
          element: <NewCustomer />
        },
        {
          path: 'create-new-costomer',
          element: <CreateNewCustomer />
        },
      ],
    },
  ])
  return element
}
export default AppNavigation
