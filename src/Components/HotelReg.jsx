import React, { useEffect, useState } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import { Card, Col, Modal, Row, Table } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'
import { _get, _post } from '../Utils/Helper'
import { Floors } from './Floors'

export default function HotelReg() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    hotel_name: '',
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
  const [selected, setSelected] = useState([])
  const handleSelected = (s) => {
    setSelected(s)
  }


  let finalObj = {
    hotel_name: form.hotel_name,
    address: form.address,
    floor: form.floor,
  }
  const handleSubmit = () => {
    setLoading(true)
    _post(
      'api/hotels?query_type=create',
      finalObj,
      (res) => {
        setForm((p) => ({ ...p, hotel_name: '', address: '', floors: '' }))
        setLoading(false)
        console.log(res)
        // getHotels()
        toggle()
      },
      (err) => {
        setLoading(false)
        console.log(err)
      },
    )
    console.log(finalObj)
  }

  const getHotels = () => {
    _post( 
      'api/hotels?query_type=select',
      {},
      (resp) => {
        // setLoading(false)
        console.log(resp)
        setHotelList(resp.resp)
        
      },
      (e) => {
        console.log(e)
        // setLoading(false)
        // alert(e)
      },
    )
  }

  useEffect(() => {
    // setLoading(true)
    getHotels()
  }, [])
  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      {/* {JSON.stringify(finalObj)} */}
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
                    <td>{item.hotel_name}</td>
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
        <Card body className="app_card shadow mt-3">
          {JSON.stringify(finalObj)}

          <div className="p-3">
            <h5 className="app_title">Create New Hotel</h5>
            <InputForm
              className="app_input"
              label="Name"
              value={form.hotel_name}
              onChange={handleChange}
              name="hotel_name"
            />
            <InputForm
              className="app_input"
              label="Address"
              value={form.address}
              onChange={handleChange}
              name="address"
            />
            {/* <label className="Label mt-2">Selelct no of floors</label> */}
            <InputForm
              className="app_input"
              label="Number Of Floor"
              value={form.floor}
              onChange={handleChange}
              name="floor"
            />
            {/* <InputForm
              className="app_input"
              label="Select Number of Floors"
              type="number"
              value={form.floor}
              onChange={handleChange}
              name="floor"
            /> */}
            <div>
              {loading ? (
                <button
                  style={{ width: '100%' }}
                  className="app_button mt-3 p-2 shadow"
                >
                  Loading...
                </button>
              ) : (
                <button
                  style={{ width: '100%' }}
                  className="app_button mt-3 p-2 shadow"
                  onClick={handleSubmit}
                >
                  Create
                </button>
              )}
            </div>
          </div>
        </Card>
      </Modal>
    </Card>
  )
}
