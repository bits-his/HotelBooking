import React, { useEffect, useState } from 'react'
import { Card, Col, Modal, Row, Table } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'
import { _get, _post } from '../Utils/Helper'

export default function HotelReg() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    address: '',
    floor: '',
  })

  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

  const [hotelList, setHotelList] = useState([])
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }))
  }

  const handleSubmit = () => {
    setLoading(true)
    _post(
      'create-hotel/',
      form,
      (res) => {
        setForm((p) => ({ ...p, name: '', address: '', floor: '' }))
        setLoading(false)
        console.log(res)
        getHotels()
        toggle()
      },
      (err) => {
        setLoading(false)
        console.log(err)
      },
    )
    console.log(form)
  }

  const getHotels = () => {
    _get(
      'hotels/',
      (resp) => {
        // setLoading(false)
        console.log(resp)
        if (resp && resp.length) {
          setHotelList(resp)
        }
      },
      (e) => {
        console.log(e)
        // setLoading(false)
      },
    )
  }

  useEffect(() => {
    // setLoading(true)
    getHotels()
  }, [])
  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      {/* {JSON.stringify(hotelList)} */}
      <Row>
        <Col md={6}>
          <Row>
            <Col md={6} sm={6} xs={6}>
              <h5 className="app_title">Hotels</h5>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <button
                style={{ float: 'right' }}
                onClick={toggle}
                className="app_button shadow"
              >
                Create New
              </button>
            </Col>
          </Row>
          <Table
            striped
            size="sm"
            responsive
            className="mt-3"
            style={{ fontSize: 13 }}
          >
            <thead>
              <tr>
                <td>Name</td>
                <td>Address</td>
                <td>Floors</td>
              </tr>
            </thead>
            <tbody>
              {hotelList.length === 0 ? (
                <span>Loading Rooms...</span>
              ) : (
                hotelList.map((item, index) => (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.floor}</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Col>
        <Col md={6}></Col>
      </Row>
      <Modal toggle={toggle} isOpen={open}>
        <div className="p-3">
          <h5 className="app_title">Create New Hotel</h5>
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
          <div>
            {loading ? (
              <button className="app_button mt-3 p-2 shadow">Loading...</button>
            ) : (
              <button
                className="app_button mt-3 p-2 shadow"
                onClick={handleSubmit}
              >
                Register
              </button>
            )}
          </div>
        </div>
      </Modal>
    </Card>
  )
}
