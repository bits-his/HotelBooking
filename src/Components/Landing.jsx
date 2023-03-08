import React from 'react'
import { useNavigate } from 'react-router-dom'

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
      <div>
        <button
          className="app_button p-4"
          style={{ width: 200 }}
          onClick={() => goto('/sign-ip')}
        >
          Get In
        </button>
      </div>
    </div>
  )
}
