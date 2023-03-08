import React, { useState } from 'react'
import { Card, Col, Label, Row } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'

export default function NewAgent() {
const [form, setForm] = useState({
    agent_name: '',
    arabic_name: '',
    phone_no: '',
    extention: '',
    country: '',
    city: '',
    zip_code: '',
    state: '',
    personal_contact: '',
    email: '',
    web_address: '',
    address: '',
    job_title: '',
    mobile: '',
    fax: ''
  })

  const handleChange = ({ target: { name, value } }) => {
    // console.log({ target })
    setForm((p) => ({ ...p, [name]: value }))
  }

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
        <Row>
            <Col md={6}>
                <h5 className="app_title">Create New Agent/Supplier</h5>
                <InputForm
                    className="app_input"
                    label="Room Number"
                    value={form.agent_name}
                    onChange={handleChange}
                    name="agent_name"
                    required
                />
                <InputForm
                    className="app_input"
                    label="Telephone No"
                    value={form.phone_no}
                    onChange={handleChange}
                    name="phone_no"
                    required
                />
                <label className="Label mt-2">Country <span className='text-danger'>*</span></label>
                <select
                    id="exampleSelect"
                    // bbbbb{JSON.stringify(selectedRoom)}
                    className="app_input"
                    name="country"
                    type="select"
                    onClick={handleChange}
                    value={form.country}
                >
                    <option></option>
                </select>
                {/* <InputForm
                    className="app_input"
                    label="Country"
                    value={form.country}
                    onChange={handleChange}
                    name="country"
                    required
                /> */}
                <InputForm
                    className="app_input"
                    label="Zip Code"
                    value={form.agent_name}
                    onChange={handleChange}
                    name="agent_name"
                />
            </Col>
            <Col md={6} style={{marginTop: 32}}>
                {/* <h5 className="app_title"></h5> */}
                <InputForm
                    className="app_input"
                    label="Arabic Name"
                    value={form.arabic_name}
                    onChange={handleChange}
                    name="arabic_name"
                />
                <InputForm
                    className="app_input"
                    label="Extention"
                    value={form.agent_name}
                    onChange={handleChange}
                    name="agent_name"
                />
                <InputForm
                    className="app_input"
                    label="City"
                    value={form.agent_name}
                    onChange={handleChange}
                    name="agent_name"
                />
                <InputForm
                    className="app_input"
                    label="State"
                    value={form.agent_name}
                    onChange={handleChange}
                    name="agent_name"
                />
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <h5 className="app_titleI">Personal Details</h5>
            </Col>
        </Row>
        <Row>
            <Col md={6}>
                <InputForm
                    className="app_input"
                    label="Contact Person"
                    value={form.personal_contact}
                    onChange={handleChange}
                    name="personal_contact"
                />
                <InputForm
                    className="app_input"
                    label="Email"
                    value={form.email}
                    onChange={handleChange}
                    name="email"
                    required
                />
                <InputForm
                    className="app_input"
                    label="Web Address"
                    value={form.web_address}
                    onChange={handleChange}
                    name="web_address"
                />
                <label>Address</label>
                <textarea
                    className='app_input'
                    placeholder='While............'
                    name='adress'
                    value={form.address}
                    onClick={handleChange}
                />
                <button
                    className="app_button p-4"
                    style={{ width: 200}}
                    // onClick={() => goto('/sign-ip')}
                    >
                    Add Agent
                </button>
            </Col>
            <Col md={6}>
                {/* <h5 className="app_title"></h5> */}
                <InputForm
                    className="app_input"
                    label="Job Title"
                    value={form.job_title}
                    onChange={handleChange}
                    name="job_title"
                />
                <InputForm
                    className="app_input"
                    label="Mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    name="mobile"
                />
                <InputForm
                    className="app_input"
                    label="Fax"
                    value={form.fax}
                    onChange={handleChange}
                    name="fax"
                />
            </Col>
            
        </Row>
    </Card>

  )
}
