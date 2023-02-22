import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import { Card, Label } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'
import { _get, _post } from '../Utils/Helper'

export default function CustomerReg({ toggle, fetchCustomers }) {
  const today = moment().format('YYYY-MM-DD')
  const nextDay = moment(today).add('days', 1).format('YYYY-MM-DD')
  const [customerData, setCustomerData] = useState({
    name: '',
    hotel: '',
    from_date: today,
    to_date: nextDay,
    agent_name: '',
  })

  // const [roomData, setRoomData] = useState([])

  const [hotelList, setHotelList] = useState([])
  const [selectedRoom, setSelectedRoom] = useState([])
  const [roomList, setRoomList] = useState([])
  const [loading, setLoading] = useState(false)

  const handleChange = ({ target: { name, value, selected } }) => {
    setCustomerData((p) => ({ ...p, [name]: selected ? selected : value }))
  }

  const handleRoom = (s) => {
    setSelectedRoom(s)
  }

  useEffect(() => {
    _get(
      `hotelrooms/available/${customerData.hotel}`,
      (resp) => {
        console.log(resp)
        if (resp && resp.length) {
          setRoomList(resp)
        } else {
          setRoomList([])
        }
      },
      (e) => {
        console.log(e)
      },
    )
  }, [customerData.hotel])

  useEffect(() => {
    _get(
      'hotels/',
      (resp) => {
        console.log(resp)
        if (resp && resp.length) {
          setHotelList(resp)
        }
      },
      (e) => {
        console.log(e)
      },
    )
  }, [])

  const handleSubmit = () => {
    let finalObj = {
      customer: customerData,
      rooms: selectedRoom.map((item) => ({
        id: item.id,
        room_number: item.room_number,
      })),
    }
    console.log(finalObj)
    _post(
      'create-customer/',
      finalObj,
      (res) => {
        setLoading(false)
        console.log(res)
        fetchCustomers()
        toggle()
      },
      (err) => {
        setLoading(false)
        console.log(err)
      },
    )
  }

  const dateIn = new Date(customerData.from_date)
  const dateOut = new Date(customerData.to_date)
  const timeDiff = dateOut - dateIn
  const totalDays = timeDiff / (1000 * 3600 * 24)

  return (
    <Card body className="app_card reg_card shadow mt-3">
      {/* {JSON.stringify(customerData)} */}
      {/* {JSON.stringify(roomData)} */}
      {/* {JSON.stringify(selectedRoom)} */}
      {/* {JSON.stringify(customerReg)} */}
      {/* {JSON.stringify(roomList)} */}
      <h5 className="app_title">Customer Registration</h5>
      <InputForm
        label="Name of Customer"
        value={customerData.name}
        onChange={handleChange}
        name="name"
        className="mb-2"
      />
      <Label className="Label1 mt-2">Select Hotel</Label>
      <select name="hotel" className="app_input mb-3" onChange={handleChange}>
        <option>Select Hotel</option>
        {hotelList.map((item) => (
          <option value={item.id}>{item.name}</option>
        ))}
      </select>
      <Label className="Label1 mt-2">Select Room(s)</Label>
      <Typeahead
        id="basic-typeahead-multiple"
        labelKey={(e) => `${e.room_number}`}
        multiple
        onChange={handleRoom}
        options={roomList}
        placeholder="Room Number"
        selected={selectedRoom}
        name="no_of_rooms"
        className="app_input"
      />
      <p style={{margin:0, fontSize: 12 }}>
        Price:{' '}
        <span style={{ fontWeight: 'bold' }}>{selectedRoom[0]?.price}</span>
      </p>

      <p style={{margin:0, fontSize: 12 }}>
        Number of rooms:{' '}
        <span style={{ fontWeight: 'bold' }}>{selectedRoom?.length}</span>
      </p>
      <p style={{margin:0, fontSize: 12 }}>
        Number of days:{' '}
        <span style={{ fontWeight: 'bold' }}>
          {timeDiff > 0 ? totalDays : ''}
        </span>
      </p>

      {/* <Label className="Label1">No of Rooms</Label> */}

      <InputForm
        label="Check-in"
        type="date"
        value={customerData.from_date}
        onChange={handleChange}
        name="from_date"
      />
      <InputForm
        label="Check-out"
        type="date"
        value={customerData.to_date}
        onChange={handleChange}
        name="to_date"
      />
      <InputForm
        label="Agent Name"
        value={customerData.agent_name}
        onChange={handleChange}
        name="agent_name"
      />
      {loading ? (
        <button className="app_button mt-3 p-2 shadow">Loading...</button>
      ) : (
        <button className="app_button mt-3 p-2 shadow" onClick={handleSubmit}>
          Save
        </button>
      )}
    </Card>
  )
}
