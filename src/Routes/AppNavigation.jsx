import React from 'react'
import { useRoutes } from 'react-router-dom'
import Agent from '../Components/Agent'
import Allotment from '../Components/Allotment'
import Allotmentstep from '../Components/Allotmentstep'
// import Allotment from '../Components/Allotment'
import BankDetails from '../Components/BankDetails'
import Country from '../Components/Country'
import CreaateAllotment from '../Components/CreaateAllotment'
import CreacteNewRoom from '../Components/CreacteNewRoom'
import CreacteRoomType from '../Components/CreacteRoomType'
import CreacteView from '../Components/CreacteView'
import CreacteCountry from '../Components/CreateCountry'
import CreacteMeal from '../Components/CreateMeal'
import CreateNewCustomer from '../Components/CreateNewCustomer'
import CreateNewHotel from '../Components/CreateNewHotel'
import CreateReservationDetail from '../Components/CreateReservationDetail'
import CustomerReg from '../Components/CustomerReg'
import Customers from '../Components/Customers'
import Dashboard from '../Components/Dashboard'
import HotelReg from '../Components/HotelReg'
import ViewReservationInvoice from '../Components/Invoices/ViewReservationInvoice'
import ViewCashReceipt from '../Components/Invoices/ViewReservationInvoice'
import Landing from '../Components/Landing'
import ManageRooms from '../Components/ManageRooms'
import Master from '../Components/Master'
import Meal from '../Components/Meal'
import NewAgent from '../Components/NewAgent'
import NewCustomer from '../Components/NewCustomer'
import Reservation from '../Components/Reservation'
import Reserve from '../Components/Reserve'
import RoomReg from '../Components/RoomReg'
import RoomType from '../Components/RoomType'
import SignIn from '../Components/SignIn'
import SignUp from '../Components/SignUp'
import View from '../Components/Views'
import AppIndex from './AppIndex'
import CreateTransportReservstion from '../Components/CreateTransportReservstion'
import ReservationViewDetails from '../Components/ReservationViewDetails'
import AllotmentReport from '../Components/AllotmentReport'
import ViewCancelLetter from '../Components/Invoices/ViewCancelLetter'
import ViewItenaryReport from '../Components/Invoices/ViewItenaryReport'
function AppNavigation() {
  let element = useRoutes([
    {
      path: '/',
      element: <Landing />,
      children: [{ index: true }],
    },
    {
      path: 'sign-up',
      element: <SignUp />,
    },
    {
      path: 'sign-in',
      element: <SignIn />,
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
          path: '/hotel-registration',
          element: <HotelReg />,
        },
        {
          path: '/create-hotel',
          element: <CreateNewHotel />,
        },
        {
          path: '/creact-new-room',
          element: <RoomReg />,
        },
        {
          path: '/room-registration',
          element: <CreacteNewRoom />,
        },
        {
          path: '/manage-rooms',
          element: <ManageRooms />,
        },
        {
          path: '/customers',
          element: <Customers />,
        },
        {
          path: '/agent',
          element: <Agent />,
        },
        {
          path: '/new-agent/:agent_id',
          element: <Master />,
        },

        {
          path: '/new-agent',
          element: <Master />,
        },
        {
          path: 'bank-details',
          element: <BankDetails />,
        },
        {
          path: 'create-allotment',
          element: <Allotmentstep />,
        },
        {
          path: 'allotment-report',
          element: <AllotmentReport />,
        },
        {
          path: 'allotment',
          element: <Allotment />,
        },
        {
          path: '/reservation',
          element: <Reservation />,
        },
        {
          path: '/reservation-details',
          element: <Reserve />,
        },
        {
          path: '/new-reservation-details',
          element: <CreateReservationDetail />,
        },
        {
          path: '/room-type',
          element: <RoomType />,
        },
        {
          path: '/creact-room-type',
          element: <CreacteRoomType />,
        },
        {
          path: '/view',
          element: <View />,
        },
        {
          path: 'create-view',
          element: <CreacteView />,
        },
        {
          path: '/table-meal',
          element: <Meal />,
        },
        {
          path: '/create-meal',
          element: <CreacteMeal />,
        },
        {
          path: '/create-meal/:id',
          element: <CreacteMeal />,
        },
        {
          path: '/country',
          element: <Country />,
        },
        {
          path: 'create-country',
          element: <CreacteCountry />,
        },
        {
          path: 'costomer',
          element: <NewCustomer />,
        },
        {
          path: 'create-new-costomer',
          element: <CreateNewCustomer />,
        },
        {
          path: '/reservation-invoice',
          element: <ViewReservationInvoice />,
        },
        {
          path: '/reservation-view-details',
          element: <ReservationViewDetails />,
        },
        {
          path: '/create-transport-reservstion',
          element: <CreateTransportReservstion />,
        },
        {
          path:'/cancel-letter',
          element:<ViewCancelLetter/>
        },
         {
          path:'/itenary-report',
          element:<ViewItenaryReport/>
        }
      ],
    },
  ])
  return element
}
export default AppNavigation
