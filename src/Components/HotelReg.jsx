import React, { useState } from 'react'
import { Button, Card, Col, Input, Row, Table } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'

export default function HotelReg() {
  const [form, setForm] = useState({
    name: '',
    address: '',
    floor: '',
    room_no: '',
    price: '',
  })

  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }))
    console.log(form)
  }

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      <Row>
        <Col md={6}>
          <h5 className="app_title">Hotels</h5>
          <Table striped size="sm" responsive className="" style={{fontSize:13}}>
            <thead>
              <tr>
                <td>Name</td>
                <td>Address</td>
                <td>Floors</td>
                <td>Rooms</td>
                <td>Price</td>
              </tr>
            </thead>
            <tbody>
              <tr>
              
                <td>123</td>
                <td onClick={''} className="green_td">
                  fsdfs fsr rqrqwrw 
                </td>
                <td>10</td>
                <td>22</td>
                <td>200</td>
              </tr>
              <tr>
              
                <td>123</td>
                <td onClick={''} className="red_td">
                  fsdfs fsr rqrqwrw 
                </td>

                <td>10</td>
                <td>34</td>
                <td>200</td>
              </tr>
              <tr>
              
                <td>123</td>
                <td onClick={''} className="orange_td">
                  fsdfs fsr rqrqwrw 
                </td>

                <td>10</td>
                <td>21</td>
                <td>200</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col md={6}>
          <h5 className="app_title">Register New</h5>
          <InputForm
            className="app_input"
            label="Name"
            value={form.name}
            onChange={handleChange}
            name="name"
          />
          <InputForm
            className="app_input"
            label="Address"
            value={form.address}
            onChange={handleChange}
            name="address"
          />
          <InputForm
            className="app_input"
            label="Floor"
            type="number"
            value={form.floor}
            onChange={handleChange}
            name="floor"
          />
          <InputForm
            className="app_input"
            label="Room No."
            type="number"
            value={form.room_no}
            onChange={handleChange}
            name="room_no"
          />
          <InputForm
            className="app_input"
            label="Price"
            type="number"
            value={form.price}
            onChange={handleChange}
            name="price"
          />
          <div>
            <button className="app_button mt-3 p-2">Save</button>
          </div>
        </Col>
      </Row>
    </Card>
  )
}
