import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import { Card, Label } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'
import { _get,_post } from '../Utils/Helper'

export default function CustomerReg({ toggle, fetchCustomers }) {
  const today = moment().format('YYYY-MM-DD')
  const nextDay = moment(today).add('days', 1).format('YYYY-MM-DD')
  const [customerData, setCustomerData] = useState({
    customer_name: '',
    hotel_id: '',
    check_in: today,
    check_out: nextDay,
    agent_name: '',
    room_number:""
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
    setCustomerData((p)=>({...p,room_number:s[0].room_number}))
  }

  useEffect(() => {
    _post(
      'api/room_tables?query_type=select-by-id',
      {hotel_id:customerData.hotel_id},
      (resp) => {
       
          setRoomList(resp.results)
      
      },
      (e) => {
        console.log(e)
      },
    )
  }, [customerData.hotel_id])

  const getHotels = () => {
    _post( 
      'api/hotels?query_type=select',
      {},
      (resp) => {
        // setLoading(false)
        console.log(resp)
        setHotelList(resp.resp)
        // setSelectedRoom({ ...resp.resp[0], hotel: resp.resp[0].id })
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

  let finalObj = {
    customer: customerData,
    rooms: selectedRoom.map((item) => ({
      id: item.id,
      room_number: item.room_number,
    })),
  }
  const handleSubmit = () => {
    // console.log(finalObj)
    _post(
      'api/customer?query_type=create',
      customerData,
      (res) => {
        setLoading(false)
        console.log(res)
        fetchCustomers()
        toggle()
        alert(success)
      },
      (err) => {
        setLoading(false)
        console.log(err)
      },
    )
  }

  const dateIn = new Date(customerData.check_in)
  const dateOut = new Date(customerData.check_out)
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
        value={customerData.customer_name}
        onChange={handleChange}
        name="customer_name"
        className="mb-2"
      />
      <Label className="Label1 mt-2">Select Hotel</Label>
      <select name="hotel_id" className="app_input mb-3" onChange={handleChange}>
        <option>Select Hotel</option>
        {hotelList.map((item) => (
          <option value={item.id}>{item.hotel_name}</option>
        ))}
      </select>
      <Label className="Label1 mt-2">Select Room(s)</Label>
      <Typeahead
        id="basic-typeahead-multiple"
        labelKey={(e) => `${e.room_number}`}
        // multiple
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
        value={customerData.check_in}
        onChange={handleChange}
        name="from_date"
      />
      <InputForm
        label="Check-out"
        type="date"
        value={customerData.check_out}
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
