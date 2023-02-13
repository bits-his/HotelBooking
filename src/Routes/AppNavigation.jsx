import React from 'react'
import { useRoutes } from 'react-router-dom'
import AppIndex from './AppIndex'

function AppNavigation() {
  let element = useRoutes([
    {
      path: '/',
      element: <Register />,
      children: [{ index: true }],
    },
    {
      element: <AppIndex />,
      children: [
        { index: true, element: <Register /> },
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
       
      ],
    },
  ])
  return element
}
export default AppNavigation
