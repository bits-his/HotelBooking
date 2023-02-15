import React from 'react'
import { Outlet } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
export default function AppIndex() {
  return (
    <div>
      <Row className="m-0">
        <Col md={12} className="p-0 m-0 _outlet">
          <Outlet />
        </Col>
      </Row>
    </div>
  )
}
