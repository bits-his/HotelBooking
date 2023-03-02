import React, { useEffect, useState } from 'react'
import { Card, Col, Modal, Row, Table } from 'reactstrap'
import { _get, _put } from '../Utils/Helper'

const statusBtn = (status, handleUpdate, roomId) => {
  return (
    <>
      <div>
        <button
          className={status === 'occupied' ? 'occupied_btn' : 'inactive'}
          onClick={() => handleUpdate('occupied', roomId)}
        >
          Occupied
        </button>
      </div>

      <div>
        <button
          className={status === 'cleaned' ? 'cleaned_btn' : 'inactive'}
          onClick={() => handleUpdate('cleaned', roomId)}
        >
          Cleaned
        </button>
      </div>

      <div>
        <button
          className={status === 'checkout' ? 'checkout_btn' : 'inactive'}
          onClick={() => handleUpdate('checkout', roomId)}
        >
          Checkout
        </button>
      </div>
    </>
  )
}

export default function ManageRooms() {

  const [hotelList, setHotelList] = useState([])
  const [selectedRoom, setSelectedRoom] = useState(0)
  const [roomList, setRoomList] = useState([])
  const [loading, setLoading] = useState(false)
  // const [updateStatus, setUpdateStatus] = useState('')
  const handleSelected = ({ target: { name, value } }) => {
    // console.log({ target })
    setSelectedRoom((p) => ({ ...p, [name]: value }))
  }
  useEffect(() => {
    setLoading(true)
    _get(
      `hotel-room/${selectedRoom.hotel}`,
      (resp) => {
        setLoading(false)
        console.log(resp)
        if (resp && resp.length) {
          setRoomList(resp)
        } else {
          setRoomList([])
        }
      },
      (e) => {
        console.log(e)
        setLoading(false)
      },
    )
  }, [selectedRoom])

  useEffect(() => {
    // setLoading(true)
    _get(
      'hotels/',
      (resp) => {
        // setLoading(false)
        console.log(resp)
        if (resp && resp.length) {
          setHotelList(resp)
          setSelectedRoom({ ...resp[0], hotel: resp[0].id })
        }
      },
      (e) => {
        console.log(e)
        // setLoading(false)
      },
    )
  }, [])

  const handleUpdate = (status, roomId) => {
    console.log(status)
    _put(
      `hotelroom/update/${roomId}`,
      { status },
      // setCheckout({ status: 'checkout' })
      (resp) => {
        console.log(resp)
        _get(
          `hotel-room/${selectedRoom.hotel}`,
          (resp) => {
            // setLoading(false)
            console.log(resp)
            if (resp && resp.length) {
              setRoomList(resp)
            } else {
              setRoomList([])
            }
          },
          (e) => {
            console.log(e)
            // setLoading(false)
          },
        )
      },
      (e) => {
        console.log(e)
      },
    )
  }


  return (
    <div>
      <Card className="app_card dashboard_card shadow p-3 m-3">
        <h5 className="app_title">Manage Rooms</h5>
        <Row>
          <Col md={6}>
            <div className="mt-2">
              <p className="m-0" style={{ fontSize: 13 }}>
                Filter Rooms By:
              </p>
              <select
                name="hotel"
                className="app_input mb-3"
                onChange={handleSelected}
              >
                {selectedRoom.hotel > 0 ? (
                  <option>{selectedRoom.name}</option>
                ) : (
                  <option>Select Hotel</option>
                )}
                {hotelList.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </select>
            </div>
          </Col>
          <Col md={6}></Col>
        </Row>
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
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <span className="mt-5">Loading rooms...</span>
            ) : (
              roomList.map((item) => (
                <tr>
                  <td>{item.room_number}</td>
                  <td>
                    <div
                      className="grp_btn"
                    >
                      {statusBtn(item.status, handleUpdate, item.id)}
                    </div>
                  </td>
                </tr>
              ))
            )}
            {!loading && roomList.length == 0 ? <span>No rooms</span> : ''}
          </tbody>
        </Table>
      
      </Card>
    </div>
  )
}
