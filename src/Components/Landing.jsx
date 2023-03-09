import React from 'react'
import { useNavigate } from 'react-router-dom'
import SignIn from './SignIn'
// import

export default function Landing() {
  const goto = useNavigate()
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <SignIn />
    </div>
    // </Row>
  )
}
