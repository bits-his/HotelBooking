import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'
import { _get, _post } from '../Utils/Helper'

export default function RoomReg() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    hotel: '',
    room_number: '',
    price: '',
  })
  const [hotelList, setHotelList] = useState([])
  // const [roomList, setRoomList] = useState([])
  // const [selectedRoom, setSelectedRoom] = useState([])
  const handleChange = ({ target: { name, value } }) => {
    // console.log({ target })
    setForm((p) => ({ ...p, [name]: value }))
  }

  useEffect(() => {
    // setLoading(true)
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
  }, [])

  // useEffect(() => {
  //   // setLoading(true)
  //   _get(
  //     `hotel-room/${selectedRoom}`,
  //     (resp) => {
  //       // setLoading(false)
  //       console.log(resp)
  //       if (resp && resp.length) {
  //         setRoomList(resp)
  //       }
  //     },
  //     (e) => {
  //       console.log(e)
  //       // setLoading(false)
  //     },
  //   )
  // }, [selectedRoom])

  const handleSubmit = () => {
    setLoading(true)
    _post(
      'create-hotel-room/',
      form,
      (res) => {
        setForm((p) => ({ ...p, hotel: '', address: '', price: '' }))

        setLoading(false)
        console.log(res)
      },
      (err) => {
        setLoading(false)
        console.log(err)
      },
    )
    // console.log(form)
  }
  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      {/* {JSON.stringify(roomList)} */}
      <Row>
        {/* <Col md={6}>
          <h5 className="app_title">Rooms</h5>
          <select name="hotel" onChange={({target:{selected}})=>setSelectedRoom(selected)} className="app_input">
            <option>Select Hotel</option>
            {hotelList.map((item, index) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </select>
          <Table
            striped
            size="sm"
            responsive
            className=""
            style={{ fontSize: 13 }}
          >
            <thead>
              <tr>
                <td>Room No</td>
                <td>Hotel</td>
                <td>Price</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>123</td>
                <td>22</td>
                <td>200</td>
              </tr>
            </tbody>
          </Table>
        </Col> */}
        <Col md={6}>
          <h5 className="app_title">Create New Room</h5>
          <InputForm
            className="app_input"
            label="Room Number"
            value={form.room_number}
            onChange={handleChange}
            name="room_number"
          />
          <label className="Label mt-2">Hotel</label>
          <select name="hotel" onChange={handleChange} className="app_input">
            <option>Select Hotel</option>
            {hotelList.map((item, index) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </select>

          <InputForm
            className="app_input"
            label="Price"
            type="number"
            value={form.price}
            onChange={handleChange}
            name="price"
          />

          <div>
            {loading ? (
              <button className="app_button  mt-3 p-2 shadow">
                Loading...
              </button>
            ) : (
              <button
                className="app_button mt-3 p-2 shadow"
                onClick={handleSubmit}
              >
                Register Room
              </button>
            )}
          </div>
        </Col>
      </Row>
    </Card>
  )
}
