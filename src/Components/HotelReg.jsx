import React, { useEffect, useState } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import { Card, Col, Modal, Row, Table } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'
import { _get, _post } from '../Utils/Helper'
import { Floors } from './Floors'

export default function HotelReg() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    hotel_in: '',
    hotel_name: '',
    address: '',
    city: '',
    phone: '',
    email: '',
    website: '',
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


  const handleSubmit = () => {
    let finalObj = {
      name: form.name,
      address: form.address,
      floors: selected,
    }
    setLoading(true)
    _post(
      'api/hotels?in_query_type=create',
      form,
      (res) => {
        setForm((p) => ({ ...p, hotel_in: '',
        hotel_name: '',
        address: '',
        city: '',
        phone: '',
        email: '',
        website: '',}))
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
    console.log(finalObj)
  }

  const getHotels = () => {
    _post( 
      'api/hotels?in_query_type=select-all',
      {},
      (resp) => {
        // setLoading(false)
        console.log(resp)
        // if (resp ) {
          setHotelList(resp.resp)
        //  alert('dfasfsadf'+resp)
        // }
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
      {/* {JSON.stringify(hotelList)} */}
      <Row>
        <Col md={8}>
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
                <td>Hotel In</td>
                <td>Hotel Name</td>
                <td>Address</td>
                <td>City</td>
                <td>Phone</td>
                <td>Email</td>
                <td>Website</td>
              </tr>
            </thead>
            <tbody>
              {hotelList.length === 0 ? (
                <span>Loading Rooms...</span>
              ) : (
                hotelList.map((item, index) => (
                  <tr>
                    <td>{item.hotel_in}</td>
                    <td>{item.hotel_name}</td>
                    <td>{item.address}</td>
                    <td>{item.city}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.website}</td>
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
          {/* {JSON.stringify(form)} */}

          <div className="p-3">
            <h5 className="app_title">Create New Hotel</h5>
            <InputForm
              className="app_input"
              label="Hotel In"
              value={form.hotel_in}
              onChange={handleChange}
              name="hotel_in"
            />
            <InputForm
              className="app_input"
              label="Hotel Name"
              value={form.hotel_name}
              onChange={handleChange}
              name="hotel_name"
            /> <InputForm
            className="app_input"
            label="Address"
            value={form.address}
            onChange={handleChange}
            name="address"
          /> 
         <InputForm
        className="app_input"
        label="City"
        value={form.city}
        onChange={handleChange}
        name="city"
      />
      <InputForm
          className="app_input"
          label="Phone"
          value={form.phone}
          onChange={handleChange}
          name="phone"
        />
             <InputForm
              className="app_input"
              label="Email"
              value={form.email}
              onChange={handleChange}
              name="email"
            />
              <InputForm
              className="app_input"
              label="Website"
              value={form.website}
              onChange={handleChange}
              name="website"
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
