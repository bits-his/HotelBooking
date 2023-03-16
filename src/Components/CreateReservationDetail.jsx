import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Modal, Label, Row } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'
import AgentModal from './Modal/AgentModal'
import QuestModal from './Modal/QuestModal'
import ReservationModal from './Modal/ReservationModal'

export default function CreateReservationDetail() {
    const [modal, setModal] = useState(false)
    const [modal1, setModal1] = useState(false)
    const [modal2, setModal2] = useState(false)
    const navigate = useNavigate()
    const [check, setCheck] = useState(false)
    const [form, setForm] = useState({
        reservation_no: ''
    })
    const handleChange = ({ target: { name, value } }) => {
        // console.log({ target })
        setForm((p) => ({ ...p, [name]: value }))
    }

    const toggle = () => setModal(!modal);
    const toggle1 = () => setModal1(!modal1);
    const toggle2 = () => setModal2(!modal2);
    
    return (
        <Card className="app_card dashboard_card shadow p-3 m-3">
            {/* <Row>
            <Col md={6}>
                <div className='list_item_div'>
                    <button className='btn_div' style={{borderBottom: '2px solid rgb(12, 134, 103)'}}> Reservation Details </button>
                    <button className='btn_div'>Policy</button>
                    <button className='btn_div'> Visa Details</button>
                </div>
            </Col>
        </Row> */}
            <Row>
                <Col md={12} style={{display: 'flex', width: '100%',textAlign: 'center'}}>
                    <button
                        className="app_button p-3 mb-3"
                        style={{ width: 150, fontSize: 16, fontWeight: 500}} 
                        onClick={() => navigate('/reservation-details')}
                    >
                        <FaArrowLeft style={{marginRight: 10}} /> Back
                    </button>
                    <h5 className="app_title" style={{fontSize: 30, width: '80%'}}>Create New Reservation Details</h5>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <label className="Label mt-2">Reservation Number</label>
                    <div className='search_input_form'>
                        <input
                            className="app_input3"
                            value={form.reservation_no}
                            onChange={handleChange}
                            name="reservation_no"
                            type= "number"
                        />
                        <CiSearch 
                            className='search_icon'
                            onClick={toggle2}
                        />
                        <Modal isOpen={modal2} toggle={toggle2} size="xl">
                            <ReservationModal />
                        </Modal>
                    </div>
                    <InputForm
                        className="app_input"
                        label="Option Date"
                        value={form.date}
                        onChange={handleChange}
                        name="date"
                        type= "date"
                    />
                    <InputForm
                        className="app_input"
                        label="Vat Reg No."
                        value={form.date}
                        onChange={handleChange}
                        name="date"
                        type= "number"
                    />
                    <label className="Label mt-2">Price Category</label>
                    <select
                        id="exampleSelect"
                        className="app_input"
                        name="status"
                        type="select"
                        onClick={handleChange}
                        value={form.status}
                    >
                        <option>Select </option>
                    </select>
                    <InputForm
                        className="app_input"
                        label="Phone Number"
                        value={form.date}
                        onChange={handleChange}
                        name="date"
                        type= "number"
                    />
                    <label className="Label mt-2">VIP Category</label>
                    <select
                        id="exampleSelect"
                        className="app_input"
                        value={form.view}
                        name="view"
                        type="select"
                        onClick={handleChange}
                    >
                        <option>Select </option>
                    </select>
                    {/* <InputForm
                        className="app_input"
                        label="Group Number"
                        value={form.date}
                        onChange={handleChange}
                        name="date"
                        type= "number"
                    /> */}
                </Col>
                <Col md={4}>
                    <label className="Label mt-2">Reservation Type</label>
                    <select
                        id="exampleSelect"
                        className="app_input"
                        value={form.hotel}
                        name="hotel"
                        type="select"
                        onClick={handleChange}
                    >
                        <option>Select </option>
                    </select>
                    <label className="Label mt-2">Booking Type</label>
                    <select
                        id="exampleSelect"
                        className="app_input"
                        value={form.category}
                        name="category"
                        type="select"
                        onClick={handleChange}
                    >
                        <option>Select </option>
                    </select>
                    <label className="Label mt-2">Sub Agent Name</label>
                    <select
                        id="exampleSelect"
                        className="app_input"
                        value={form.print_view}
                        name="print_view"
                        type="select"
                        onClick={handleChange}
                    >
                        <option>Select </option>
                    </select>
                    <label className="Label mt-2">Quest Full Name</label>
                    <div className='search_input_form'>
                        <input
                            className="app_input3"
                            value={form.reservation_no}
                            onChange={handleChange}
                            name="reservation_no"
                        />
                        <CiSearch
                            className='search_icon'
                            onClick={toggle1}
                        />
                        <Modal isOpen={modal1} toggle={toggle1} size="xl">
                            <QuestModal />
                        </Modal>
                    </div>
                    {/* <InputForm
                        className="app_input"
                        label="Local Mobile Number"
                        value={form.date}
                        onChange={handleChange}
                        name="date"
                        type ="number"
                    /> */}
                    <InputForm
                        className="app_input"
                        label="BRN Hotel"
                        value={form.date}
                        onChange={handleChange}
                        name="date"
                    />
                    {/* <InputForm
                        className="app_input"
                        label="Local Ref Number"
                        value={form.date}
                        onChange={handleChange}
                        name="date"
                        type= "number"
                    /> */}
                </Col>
                <Col md={4}>
                    <label className="Label mt-2">Booking Status</label>
                    <select
                        id="exampleSelect"
                        className="app_input"
                        value={form.hotel_city}
                        name="hotel_city"
                        type="select"
                        onClick={handleChange}
                    >
                        <option>Select </option>
                    </select>
                    <label className="Label mt-2">Agent Name</label>
                    <div className='search_input_form'>
                        <input
                            className="app_input3"
                            value={form.agent_name}
                            onChange={handleChange}
                            name="agent_name"
                        />
                        <CiSearch
                            className='search_icon'
                            onClick={toggle}
                        />
                        <Modal isOpen={modal} toggle={toggle} size="xl">
                            <AgentModal />
                        </Modal>
                    </div>
                    {/* <InputForm
                        className="app_input"
                        label="Client Ref Number"
                        value={form.date}
                        onChange={handleChange}
                        name="date"
                        type= 'number'
                    /> */}
                    <InputForm
                        className="app_input"
                        label="Country Name"
                        value={form.date}
                        onChange={handleChange}
                        name="date"
                    />
                    <InputForm
                        className="app_input"
                        label="Email Address"
                        value={form.date}
                        onChange={handleChange}
                        name="date"
                        type= "email"
                    />
                    <InputForm
                        className="app_input"
                        label="BRN Transport"
                        value={form.date}
                        onChange={handleChange}
                        name="date"
                    />
                </Col>
                <Col md={12}>
                    <center>
                        <button
                            className="app_button p-3 mt-3"
                            style={{ width: 150 }}
                            // onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </center>
                </Col>
            </Row>
        </Card>
    )
}
