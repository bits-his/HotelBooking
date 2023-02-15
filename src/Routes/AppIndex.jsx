import React from 'react'
import { Outlet } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import CustomerReg from '../Components/CustomerReg'
import Dashboard from '../Components/Dashboard'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
export default function AppIndex() {
  return (
    <div>
        <Row className='m-0'>
          <Col md={2} className="sidebar">
            <Sidebar />
          </Col>
          <Col md={10} className="">
            {/* <Navbar /> */}
            <Row>
              <Col md={9} className="p-0 m-0 _outlet">
                <Outlet />
              </Col>
              <Col md={3}>
                <CustomerReg />
              </Col>
            </Row>
          </Col>
        </Row>
    </div>
  )
}
