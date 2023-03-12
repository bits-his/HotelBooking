import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Table } from 'reactstrap'
import '../AppStyles/GeneralStyle.css'
// import InputForm from '../CustomComponents/InputForm'
import { Modal } from 'reactstrap'
import StatusUpdate from './StatusUpdate'
import { _get, _post } from '../Utils/Helper'
export default function Dashboard() {
  const [hotelList, setHotelList] = useState([])
  const [roomList, setRoomList] = useState([])
  const [selectedRoom, setSelectedRoom] = useState([])
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

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
    getHotels();
    getCleaned();
    getCheckout();
    getOccupied()
  }, [])

  const handleSelected = ({ target: { name, value } }) => {
    // console.log({ target })
    setSelectedRoom((p) => ({ ...p, [name]: value }))
  }
  const [cleaned,setCleaned]=useState()
  const [occupied,setOccupied]=useState()
  const [checkout,setCheckout]=useState()
  const getCleaned= ()=>{
    _post(
      'api/room_tables?query_type=cleaned',
      {},
      (resp) => {
       
        setCleaned(resp.results)
      
      },
      (e) => {
        console.log(e)
      },
    )
  }
  const getOccupied= ()=>{
    _post(
      'api/room_tables?query_type=occupied',
      {},
      (resp) => {
       
        setOccupied(resp.results)
      
      },
      (e) => {
        console.log(e)
      },
    )
  }
  const getCheckout= ()=>{
    _post(
      'api/room_tables?query_type=checkout',
      {},
      (resp) => {
       
        setCheckout(resp.results)
      
      },
      (e) => {
        console.log(e)
      },
    )
  }

 useEffect(() => {
    _post(
      'api/room_tables?query_type=select-by-id',
      {hotel_id:selectedRoom.hotel},
      (resp) => {
       
          setRoomList(resp.results)
      
      },
      (e) => {
        console.log(e)
      },
    )
  }, [selectedRoom.hotel])

  const hotelName = (hotelId) => {
    return hotelList.filter((h) => h.id === hotelId)[0]?.hotel_name
  }
  return (
    <div>
      {/* {JSON.stringify(hotelList.map((item) => item.id))} */}
    {/* {JSON.stringify(cleaned[0].cleaned)} */}
    
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
              <option value={item.id}>{item.hotel_name}</option>
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
        <div className="status_button_div mt-3 ">
          <Row>
            <Col md={4} sm={4} xs={4} className="">
              <button
                className="clean_button status_button"
                style={{ width: '100%' }}
              >
                Cleaned ({cleaned&&cleaned[0].cleaned})
              </button>
            </Col>
            <Col md={4} sm={4} xs={4} className="">
              <button
                className="occupied_button status_button"
                style={{ width: '100%' }}
              >
                Occupied ({occupied&&occupied[0].occupied})
              </button>
            </Col>
            <Col md={4} sm={4} xs={4} className="">
              <button
                className="checkout_button status_button"
                style={{ width: '100%' }}
              >
                Chek Out ({checkout&&checkout[0].checkout})
              </button>
            </Col>
          </Row>
        </div>
        <Table
          bordered
          size="sm"
          responsive
          className="mt-3"

          style={{ fontSize: 13,border:"black" }}
        >
          <thead>
            <tr>
              <td className='text-center'>S/N</td>
              <td className='text-center'>Hotel Name</td>
              <td className='text-center'>Room No.</td>
              {/* <td>Status</td> */}
              {/* <td>Comments</td> */}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <span>Loading rooms...</span>
            ) : (
              roomList.map((item, index) => (
                <tr className={
                  item.status.toLowerCase() === 'cleaned'
                    ? 'green'
                    : item.status.toLowerCase() === 'occupied'
                    ? 'red'
                    : item.status.toLowerCase() === 'checkout'
                    ? 'orange'
                    : ''
                }>
                  <th className='text-center' scope="row">{index + 1}</th>
                  <td className='text-center'>{hotelName(parseInt(item.hotel_id))}</td>
                  <td className='text-center'>{item.room_number}</td>
                 
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
