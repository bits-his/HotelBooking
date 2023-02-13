import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import '../AppStyles/GeneralStyle.css'
import InputForm from '../CustomComponents/InputForm'

export default function Dashboard() {
  return (
    <div>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <Card className="shadow p-3">
            <div className="status_button_div">
              <button className="clean_button status_button">Clean (0)</button>
              <button className="occupied_button status_button">
                Occupied (0)
              </button>
              <button className="checkout_button status_button">
                Checkout (0)
              </button>
            </div>
            <InputForm label="Search" type="search" name="search" />
          </Card>
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  )
}
