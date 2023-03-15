import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";
import InputForm from "../CustomComponents/InputForm";
import { _get, _post } from "../Utils/Helper";

export default function RoomReg() {
  const goto = useNavigate()
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    floor: "",
    room_no:"",
    room_type:"",
    hotel_id:""
  });
  const [hotelList, setHotelList] = useState([]);
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

  const [hotel,setHotel]=useState([])
  const _getHotels = () => {
    _post( 
      'api/hotels?in_query_type=select-all',
      {},
      (resp) => {
        // setLoading(false)
        console.log(resp)
        // if (resp ) {
          setHotel(resp.resp)
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
  const [room,setRoom]=useState([])
  const getRooms = () => {
    _post( 
      'api/room_type?query_type=select',
      {},
      (resp) => {
        // setLoading(false)
        console.log(resp)
        // if (resp ) {
          setRoom(resp.results)
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
  useEffect(
    ()=>{
      getHotels()
      getRooms()
      _getHotels()
    },[0]
  )

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
    if (form.room_name && form.room_type && form.no_of_pax) {
      setForm({
        // id,
        floor: "",
    room_no:"",
    room_type:"",
    hotel_id:""
      });
    }
    setLoading(true);
    _post(
      "api/room_tables?in_query_type=create",
      form,
      (res) => {
        // setForm((p) => ({ ...p, hotel: '', address: '', price: '' }))
        setLoading(false);
        goto(-1)
      },
      (err) => {
        setLoading(false)
        console.log(err)
      },
    )
    // console.log(form)
  };
  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      {/* {JSON.stringify(form)} */}
        <Row>
            <Col md={12} style={{display: 'flex', width: '100%',textAlign: 'center'}}>
                <button
                    className="app_button p-3 mb-3"
                    style={{ width: 150, fontSize: 16, fontWeight: 500}} 
                    onClick={() => goto('/room-registration')}
                >
                    <FaArrowLeft style={{marginRight: 10}} /> Back
                </button>
                <h5 className="app_title" style={{fontSize: 30, width: '80%'}}>Create New Room</h5>
                
            </Col>
        </Row>
        <Row>
            <Col>
                <label className="Label mt-2">Hotel Select</label>
                <select
                    id="exampleSelect"
                    className="app_input "
                    name="hotel_n"
                    type="select"
                    onChange={handleChange}
                    value={form.hotel_n}
                    // className="mt-3"
                    
                >
                    {hotel.map(i=> <option value={i.hotel_name} onClick={()=>setForm((p)=>({...p,hotel_id:i.id}))}>{i.hotel_name}</option>)}
                   
                </select>
                <InputForm
                    className="app_input"
                    label="Enter Floor"
                    value={form.floor}
                    onChange={handleChange}
                    name="floor"
                    type= 'number'
                />
            </Col>
            <Col md={6}>
                <InputForm
                    className="app_input"
                    label="Room Number"
                    value={form.room_no}
                    onChange={handleChange}
                    name="room_no"
                    type= 'number'
                />
                 <label className="Label mt-2">Room Type</label>
                <select
                    id="exampleSelect"
                    className="app_input "
                    name="room_type"
                    type="select"
                    onChange={handleChange}
                    value={form.room_type}
                    // className="mt-3"
                    
                >
                    {room.map(i=> <option value={i.room_type} >{i.room_type}</option>)}
                   
                </select>
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col md= {12}>
                <center>
                    <button
                        className="app_button p-3"
                        style={{ width: 150}} 
                        onClick={() =>handleSubmit()}
                        >
                        Submit
                    </button>
                </center>
            </Col>
        </Row>
    </Card>
  );
}
