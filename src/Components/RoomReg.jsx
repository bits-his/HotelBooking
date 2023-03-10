import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Row } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'

export default function RoomReg() {
    const goto = useNavigate()
    const [form, setForm] = useState({
        select_hotel: '',
        enter_floor: '',
        room_no: '',
        room_type: ''
    })

    const handleChange = ({ target: { name, value } }) => {
    // console.log({ target })
    setForm((p) => ({ ...p, [name]: value }))
    }

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
        <Row>
            <Col md={12} style={{display: 'flex', width: '100%',textAlign: 'center'}}>
                <button
                    className="app_button p-3 mb-3"
                    style={{ width: 150, fontSize: 16, fontWeight: 500}} 
                    onClick={() => goto('/room-type')}
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
                    className="app_input"
                    value={form.enter_floor}
                    onChange={handleChange}
                    name="enter_floor"
                    type="select"
                >
                    <option>Select </option>
                </select>
                <InputForm
                    className="app_input"
                    label="Enter Floor"
                    value={form.select_hotel}
                    onChange={handleChange}
                    name="select_hotel"
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
                    className="app_input"
                    value={form.room_type}
                    onChange={handleChange}
                    name="room_type"
                    type="select"
                >
                    <option>Select </option>
                </select>
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col md= {12}>
                <center>
                    <button
                        className="app_button p-3"
                        style={{ width: 150}} 
                        // onClick={() => goto('/creact-room-type')}
                        >
                        Submit
                    </button>
                </center>
            </Col>
        </Row>
    </Card>
    
  )
}
