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
    hotel_id: "",
  })
  const [hotelList, setHotelList] = useState([])
  // const [roomList, setRoomList] = useState([])
  // const [selectedRoom, setSelectedRoom] = useState([])
  const handleChange = ({ target: { name, value } }) => {
    // console.log({ target })
    setForm((p) => ({ ...p, [name]: value }))
  }
  // const [hotelList, setHotelList] = useState([])
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
      'api/room_tables?query_type=create',
      form,
      (res) => {
        setForm((p) => ({ ...p, hotel_id: '', address: '', price: '' }))

        setLoading(false)
        alert('room resgiter successfully')
        console.log(res)
      },
      (err) => {
        setLoading(false)
        console.log(err)
      },
    )
    // console.log(form)
  }
  const [selected, setSelected] = useState([])
  const getSelected = (item)=>{
    setSelected(item)
  }
  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      {/* {JSON.stringify(selected)} */}
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
          <label className="Label mt-2">Hotel</label>
          <select name="hotel_id" onChange={handleChange} className="app_input">
            <option>Select Hotel</option>
            {hotelList && hotelList.map((item, index) => (
              <option onClick={() => getSelected(item)} value={item.id}>{item.hotel_name}</option>
            ))}
          </select>
          <label className="Label mt-2">Floor</label>
          <select name="hotel_id" onChange={handleChange} className="app_input">
            <option>Select Hotel</option>
            {selected&&[selected].map((item) => (
              <option value={item.floor}>{item.floor}</option>
            ))}
          </select>
          <InputForm
            className="app_input"
            label="Room Number"
            value={form.room_number}
            onChange={handleChange}
            name="room_number"
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
