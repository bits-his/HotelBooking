import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Table } from 'reactstrap'
import '../AppStyles/GeneralStyle.css'
// import InputForm from '../CustomComponents/InputForm'
import { Modal } from 'reactstrap'
import StatusUpdate from './StatusUpdate'
import { _get } from '../Utils/Helper'
export default function Dashboard() {
  const [hotelList, setHotelList] = useState([])
  const [roomList, setRoomList] = useState([])
  const [selectedRoom, setSelectedRoom] = useState([])
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

  useEffect(() => {
    setLoading(true)
    _get(
      'hotels/',
      (resp) => {
        setLoading(false)
        console.log(resp)
        if (resp && resp.length) {
          setHotelList(resp)
          // console.log(resp[0],'fdfdf')
          getRooms(resp[0].id)
          setSelectedRoom(resp[0])
        }
      },
      (e) => {
        setLoading(false)
        console.log(e)
      },
    )
  }, [])

  const handleSelected = ({ target: { name, value } }) => {
    // console.log({ target })
    setSelectedRoom((p) => ({ ...p, [name]: value }))
  }

  const getRooms = (s) => {
    _get(
      `hotel-room/${s}`,
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
  }

  useEffect(() => {
    // setLoading(true)
    getRooms(selectedRoom.hotel)
  }, [selectedRoom])

  return (
    <div>
      {/* {JSON.stringify(hotelList.map((item) => item.id))} */}
      {/* {JSON.stringify(selectedRoom)}
      {JSON.stringify(roomList)} */}
      <Card className="app_card dashboard_card shadow p-3 m-3">
        <div
          className="p-2"
          style={{ backgroundColor: 'rgb(12, 134, 103)', color:'white' }}
        >
          <h5 className="m-0">Dashboard</h5>
        </div>

        <div className="search_button">
          <label className="Label mt-2">Select Hotel</label>

          <select
            id="exampleSelect"
            // bbbbb{JSON.stringify(selectedRoom)}
            className="app_input"
            name="hotel"
            type="select"
            onChange={handleSelected}
            // value={selectedRoom.id}
          >
            {selectedRoom.id > 0 ? (
              <option>{selectedRoom.name}</option>
            ) : (
              <option>Select Hotel</option>
            )}
            {hotelList.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
            {/* <option>Select Hotel</option>
            {hotelList.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))} */}
          </select>
        </div>
        <input
          className="app_input mt-2"
          id=""
          name="search"
          placeholder="Search room"
          type="search"
        />
        <div className="status_button_div mt-3 mb-3">
          <Row>
            <Col md={4} sm={4} xs={4} className="">
              <button
                className="clean_button status_button"
                style={{ width: '100%' }}
              >
                Cln (0)
              </button>
            </Col>
            <Col md={4} sm={4} xs={4} className="">
              <button
                className="occupied_button status_button"
                style={{ width: '100%' }}
              >
                Ocp (0)
              </button>
            </Col>
            <Col md={4} sm={4} xs={4} className="">
              <button
                className="checkout_button status_button"
                style={{ width: '100%' }}
              >
                Chkt (0)
              </button>
            </Col>
          </Row>
        </div>
        <Table
          striped
          size="sm"
          responsive
          className="mt-4"
          style={{ fontSize: 13 }}
        >
          <thead>
            <tr>
              <td>S/N</td>
              <td>Room Number</td>
              <td>Status</td>
              {/* <td>Comments</td> */}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <span>Loading rooms...</span>
            ) : (
              roomList.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item.room_number}</td>
                  <td className={item.status === 'occupied' ? 'green_td' : ''}>
                    {/* {item.status} */}
                    <div
                      className={
                        item.status.toLowerCase() === 'cleaned'
                          ? 'green'
                          : item.status.toLowerCase() === 'occupied'
                          ? 'red'
                          : item.status.toLowerCase() === 'checkout'
                          ? 'orange'
                          : ''
                      }
                    ></div>
                  </td>
                  {/* <td onClick={toggle} className="green_td">
                <div className="green"></div>
              </td> */}
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Card>

      <Modal toggle={toggle} isOpen={open}>
        <StatusUpdate />
      </Modal>
    </div>
  )
}
