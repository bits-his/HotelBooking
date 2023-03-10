import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Row } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'

export default function CreateNewCustomer() {
    const goto = useNavigate()
    const [form, setForm] = useState({
        hotel_n: '',
        select_agent: '',
        quest_type: '',
        customer_name: '',
        country: '',
        room_type: '',
        room_number: '',
        room_view: '',
        date_from: '',
        date_to: '',
        status: '',
        meal: ''
    })
    const [file, setFile] = useState()

    const handleChange = ({ target: { name, value } }) => {
    // console.log({ target })
    setForm((p) => ({ ...p, [name]: value }))
    }
    
    function handleFileChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3 mt-3">
        <Row>
            <Col md={12} style={{display: 'flex', width: '100%',textAlign: 'center'}}>
                <button
                    className="app_button p-3 mb-3"
                    style={{ width: 150, fontSize: 16, fontWeight: 500}} 
                    onClick={() => goto('/costomer')}
                >
                    <FaArrowLeft style={{marginRight: 10}} /> Back
                </button>
                <h5 className="app_title" style={{fontSize: 30, width: '80%'}}>Create New Country</h5>
            </Col>
        </Row>
        <Row>
            <Col md={6}>
                <InputForm
                    className="app_input"
                    label="Hotel Name"
                    value={form.hotel_n}
                    onChange={handleChange}
                    name="hotel_n"
                />
                <InputForm
                    className="app_input"
                    label="Costomer Name"
                    value={form.customer_name}
                    onChange={handleChange}
                    name="customer_name"
                />
                <InputForm
                    className="app_input"
                    label="Country"
                    value={form.country}
                    onChange={handleChange}
                    name="country"
                />
                <InputForm
                    className="app_input"
                    label="Room Number"
                    value={form.room_number}
                    onChange={handleChange}
                    name="room_number"
                    type= "number"
                />
                <InputForm
                    className="app_input"
                    label="Arrival Date"
                    value={form.date_from}
                    onChange={handleChange}
                    name="date_from"
                    type= 'date'
                />
                <InputForm
                    className="app_input"
                    label="Status"
                    value={form.status}
                    onChange={handleChange}
                    name="status"
                />
                <InputForm
                    className="app_input"
                    label="Agent Image"
                    value={file}
                    onChange={(e)=> handleFileChange(e)}
                    name="file"
                    type= "file"
                />
            </Col>
            <Col md={6}>
                {/* <h5 className="app_title"></h5> */}
                <label className="Label mt-2">Select Agent </label>
                <select
                    id="exampleSelect"
                    className="app_input"
                    name="select_agent"
                    type="select"
                    onChange={handleChange}
                    value={form.select_agent}
                >
                    <option value='select'>Select</option>
                </select>
                <label className="Label mt-2">Guest Type</label>
                <select
                    id="exampleSelect"
                    className="app_input"
                    name="quest_type"
                    type="select"
                    onChange={handleChange}
                    value={form.quest_type}
                >
                    <option>Select</option>
                    <option value="adult">Adult</option>
                    <option value="adult_children">Adult / Children</option>
                </select>
                <label className="Label mt-2">Select Room Type</label>
                <select
                    id="exampleSelect"
                    className="app_input"
                    name="room_type"
                    type="select"
                    onChange={handleChange}
                    value={form.room_type}
                >
                    <option>Select</option>
                    <option value="adult">Adult</option>
                    <option value="adult_children">Adult / Children</option>
                </select>
                <label className="Label mt-2">Room View</label>
                <select
                    id="exampleSelect"
                    className="app_input"
                    name="room_view"
                    type="select"
                    onChange={handleChange}
                    value={form.room_view}
                >
                    <option>Select</option>
                    <option value="adult">Adult</option>
                    <option value="adult_children">Adult / Children</option>
                </select>
                {/* <InputForm
                    className="app_input"
                    label="State"
                    // value={form.state}
                    // onChange={handleChange}
                    name="state"
                /> */}
                <InputForm
                    className="app_input"
                    label="Depature Date"
                    value={form.date_to}
                    onChange={handleChange}
                    name="date_to"
                    type= 'date'
                />
                <label className="Label mt-2">Meal</label>
                <select
                    id="exampleSelect"
                    className="app_input"
                    value={form.meal}
                    name="meal"
                    type="select"
                    onChange={handleChange}
                >
                    <option>Select</option>
                    <option value="adult">Adult</option>
                    <option value="adult_children">Adult / Children</option>
                </select>
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col md= {6}>
                <button
                    className="app_button p-3"
                    style={{ width: 150, float: 'right'}} 
                >
                    Save
                </button>
            </Col>
        </Row>
    </Card>
  )
}
