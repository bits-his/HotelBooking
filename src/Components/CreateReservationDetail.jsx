import React, { useState } from 'react'
import { BiTrash } from 'react-icons/bi'
import { CiSearch } from 'react-icons/ci'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Modal, Label, Row, Table } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'
import AgentModal from './Modal/AgentModal'
import QuestModal from './Modal/QuestModal'
import ReservationModal from './Modal/ReservationModal'
import HotelReg from './Modal/HotelModal'

export default function CreateReservationDetail() {
  const [modal, setModal] = useState(false)
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)
  const [page, setPage] = useState(false)

  const toggle = () => setModal(!modal)
  const toggle1 = () => setModal1(!modal1)
  const toggle2 = () => setModal2(!modal2)
  const toggle3 = () => setModal3(!modal3)
  const navigate = useNavigate()
  const hotelBookingForm = {
    hotel: '',
    check_in: '',
    check_out: '',
    night: '',
    view: '',
    room_type: '',
    meal_type: '',
    no_of_room: '',
    room_sale_source: '',
    supplier: '',
    meal_sale_source: '',
    supplier: '',

    sale_rate_exc_tax: '',
    sale_municipal_vat: '',
    sale_purch_vat: '',
    sale_rat_inc_all_tax: '',
    total_room_sale_rate: '',

    cost_rate_exc_tax: '',
    cost_municipal_vat: '',
    cost_purch_vat: '',
    cost_rat_inc_all_tax: '',
    total_room_cost_rate: '',

    meal_rate_exc_tax: '',
    meal_municipal_vat: '',
    meal_purch_vat: '',
    meal_rat_inc_all_tax: '',
    total_meal_cost_rate: '',

    net_total_sale: '',
    net_total_cost: '',
  }
  const reservationForm = {
    reservation_no: '',
    reservation_type: '',
    booking_status: '',
    option_date: '',
    booking_type: '',
    agent_name: '',
    vat_ret_no: '',
    sub_agent_name: '',
    price_category: '',
    guest_fullname: '',
    country_name: '',
    phone_no: '',
    email: '',
    brn_hotel: '',
    brn_transport: '',
  }
  const [form, setForm] = useState({
    reservationForm,
  })
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }))
  }

  const handleSubmit = () => {
    console.log(form)
  }
  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      {/* {JSON.stringify(form)} */}

      <Row>
        <Col
          md={12}
          style={{ display: 'flex', width: '100%', textAlign: 'center' }}
        >
          <button
            className="app_button p-3 mb-3"
            style={{ width: 150, fontSize: 16, fontWeight: 500 }}
            onClick={() => navigate('/reservation-details')}
          >
            <FaArrowLeft style={{ marginRight: 10 }} /> Back
          </button>
          <h5 className="app_title" style={{ fontSize: 30, width: '80%' }}>
            Create New Reservation
          </h5>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <label className="Label mt-2">Reservation Number</label>
          <div className="search_input_form">
            <input
              className="app_input3"
              value={form.reservation_no}
              onChange={handleChange}
              name="reservation_no"
              type="number"
            />
            <CiSearch className="search_icon" onClick={toggle2} />
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
            type="date"
          />
          <InputForm
            className="app_input"
            label="Vat Reg No."
            value={form.date}
            onChange={handleChange}
            name="date"
            type="number"
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
            type="number"
          />
          {/* <label className="Label mt-2">VIP Category</label>
          <select
            id="exampleSelect"
            className="app_input"
            value={form.view}
            name="view"
            type="select"
            onClick={handleChange}
          >
            <option>Select </option>
          </select> */}
          {/* <InputForm
            className="app_input"
            label="Group Number"
            value={form.date}
            onChange={handleChange}
            name="date"
            type="number"
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
          <div className="search_input_form">
            <input
              className="app_input3"
              value={form.reservation_no}
              onChange={handleChange}
              name="reservation_no"
            />
            <CiSearch className="search_icon" onClick={toggle1} />
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
            type="number"
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
            type="number"
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
          <div className="search_input_form">
            <input
              className="app_input3"
              value={form.agent_name}
              onChange={handleChange}
              name="agent_name"
            />
            <CiSearch className="search_icon" onClick={toggle} />
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
            type="number"
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
            type="email"
          />
          <InputForm
            className="app_input"
            label="BRN Transport"
            value={form.date}
            onChange={handleChange}
            name="date"
          />
        </Col>
        <Col md={12} style={{ display: 'flex', gap: 10 }}>
          <div>
            <button
              className="app_button p-3 mt-3"
              style={{ width: 150 }}
              // onClick={handleSubmit}
            >
              Save
            </button>
          </div>
          <div>
            <button
              className="app_button p-3 mt-3"
              style={{ width: 150 }}
              // onClick={handleSubmit}
            >
              New
            </button>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="switch_div mt-5">
          <div>
            <p
              className="login_register"
              style={{
                borderBottom: '1px solid grey',
                paddingBottom: 10,
                // width: 'fit-content',
              }}
            >
              <span
                style={{
                  borderBottom: page ? null : `3px solid rgb(12, 134, 103)`,
                  marginRight: 20,
                  paddingBottom: 10,
                  cursor: 'pointer',
                }}
                onClick={() => setPage(false)}
              >
                Hotel Booking
              </span>
              {/* <span
                style={{
                  borderBottom: page ? `3px solid rgb(12, 134, 103)` : null,
                  marginLeft: 20,
                  paddingBottom: 10,
                  cursor: 'pointer',
                }}
                onClick={() => setPage(true)}
              >
                Transport Booking
              </span> */}
            </p>
          </div>
        </div>
        {!page ? (
          <>
            <div style={{ display: 'flex', gap: 10 }}>
              <button className="app_button">Hotel Rack</button>
              <button className="app_button">Show Rate Table</button>
              <button className="app_button">Show Availability</button>
              <button className="app_button">Add Row</button>
              <button className="app_button">Add Local VAT</button>
              <input type="checkbox" />
              Show All
            </div>
            <div>
              <Table responsive size="sm mt-5" bordered striped>
                <thead>
                  <tr>
                    <th className="thead_">Hotel</th>
                    <th className="thead_">Check In</th>
                    <th className="thead_">Check Out</th>
                    <th className="thead_">Night</th>
                    <th className="thead_">View</th>
                    <th className="thead_">Room Type</th>
                    <th className="thead_">Meal Type</th>
                    <th className="thead_">No of Room</th>
                    <th className="thead_">Room Sale Source</th>
                    <th className="thead_">Supplier</th>
                    <th className="thead_">Meal Sale Source</th>
                    <th className="thead_">Supplier</th>
                    <th className="thead_">Rate ExcTax</th>
                    <th className="thead_">Municipal VAT 5%</th>
                    <th className="thead_">Purch VAT 15%</th>
                    <th className="thead_">Rat Inc. All Tax</th>
                    <th className="thead_">Total Room Sale Rate</th>
                    <th className="thead_">Rate ExcTax</th>
                    <th className="thead_">Municipal VAT 5%</th>
                    <th className="thead_">Purch VAT 15%</th>
                    <th className="thead_">Rat Inc. All Tax</th>
                    <th className="thead_">Total Room Cost Rate</th>
                    <th className="thead_">Rate ExcTax</th>
                    <th className="thead_">Municipal VAT 5%</th>
                    <th className="thead_">Purch VAT 15%</th>
                    <th className="thead_">Rat Inc. All Tax</th>
                    <th className="thead_">Total Meal Cost Rate</th>
                    <th className="thead_">Net Total Sale</th>
                    <th className="thead_">Net Total Cost</th>
                    <th className="thead_">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div style={{ display: 'flex' }}>
                        <input className="table_input" type="search" />
                        <CiSearch
                          className=""
                          size="1.5rem"
                          style={{
                            backgroundColor: 'rgb(12, 134, 103)',
                            color: 'white',
                          }}
                          onClick={toggle3}
                        />
                        <Modal isOpen={modal3} toggle={toggle3} size="xl">
                          <HotelReg />
                        </Modal>
                      </div>
                    </td>
                    <td>
                      <input className="table_input" type="date" />
                    </td>
                    <td>
                      <input className="table_input" type="date" />
                    </td>
                    <td></td>
                    <td>
                      <select className="table_input">
                        <option></option>
                      </select>
                    </td>
                    <td>
                      <select className="table_input">
                        <option></option>
                      </select>
                    </td>
                    <td>
                      <select className="table_input">
                        <option></option>
                      </select>
                    </td>
                    <td></td>
                    <td>
                      <select className="table_input">
                        <option></option>
                      </select>
                    </td>
                    <td>
                      <select className="table_input">
                        <option></option>
                      </select>
                    </td>
                    <td>
                      <select className="table_input">
                        <option></option>
                      </select>
                    </td>{' '}
                    <td>
                      <select className="table_input">
                        <option></option>
                      </select>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="text-center text-danger">
                      <BiTrash size="1.5rem" />
                    </td>
                  </tr>
                </tbody>
              </Table>
              <button
                className="app_button p-3 mt-3"
                style={{ width: 150 }}
                // onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </>
        ) : (
          ''
        )}
      </Row>
    </Card>
  )
}
