import React, { useState } from 'react'
import { Card, Col, Input, Row, Table } from 'reactstrap'
import '../AppStyles/GeneralStyle.css'
import InputForm from '../CustomComponents/InputForm'
import { Modal } from 'reactstrap'
export default function Dashboard() {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }
  return (
    <div>
      <Row className="m-0">
        <Col md={3}></Col>
        <Col md={6}>
          <Card className="shadow p-3 mt-3">
            <div className="status_button_div text-center mb-3">
              <button className="clean_button status_button">Cleaned (0)</button>
              <button className="occupied_button status_button">
                Occupied (0)
              </button>
              <button className="checkout_button status_button">
                Checkout (0)
              </button>
            </div>
            <div className="search_button">
              <Input id="exampleSelect" name="select" type="select">
                <option>Select Hotel</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
              <Input id="" name="search" placeholder="Search" type="search" />
            </div>
            <Table striped size="sm" responsive className="mt-4">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Room Number</th>
                  <th>Status</th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>123</td>
                  <td onClick={toggle} className="green_td">
                    <div className="green"></div>
                  </td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>123</td>
                  <td onClick={toggle} className="red_td">
                    <div className="red"></div>
                  </td>

                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>123</td>
                  <td onClick={toggle} className="orange_td">
                    <div className="orange"></div>
                  </td>

                  <td>@mdo</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Modal toggle={toggle} isOpen={open}>
        fdas
      </Modal>
    </div>
  )
}
