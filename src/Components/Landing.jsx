import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Col, Row } from 'reactstrap'

export default function Landing() {
  const goto = useNavigate()
  return (
    // <Row>
    //   <Col>

    //   </Col>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {/* <Col>
        
      </Col> */}
      <div>
        <button
          className="app_button p-4"
          style={{ width: 200 }}
          onClick={() => goto('/sign-up')}
        >
          Sign Up
        </button>
        <button
          className="app_button p-4"
          style={{ width: 200, marginLeft: 20}}
          onClick={() => goto('/sign-ip')}
        >
          Sign In
        </button>
      </div>
    </div>
    // </Row>
  )
}
