import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'

export default function CreacteCountry() {
    const [form, setForm] = useState({
        country_id: '',
        country_name: '',
        nationalism: ''
    })

    const handleChange = ({ target: { name, value } }) => {
    // console.log({ target })
    setForm((p) => ({ ...p, [name]: value }))
    }

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
        <Row>
            <Col md={12}>
                <h5 className="app_title">Create Country</h5>
            </Col>
        </Row>
        <Row>
            <Col md={6}>
                <InputForm
                    className="app_input"
                    label="Country Id"
                    value={form.country_id}
                    onChange={handleChange}
                    name="country_id"
                    type= 'number'
                />
                <InputForm
                    className="app_input"
                    label="Country Name"
                    value={form.country_name}
                    onChange={handleChange}
                    name="country_name"
                />
                <InputForm
                    className="app_input"
                    label="Nationalism"
                    value={form.nationalism}
                    // value={form.country_name}
                    onChange={handleChange}
                    name="nationalism"
                />
                {/* <label className="Label mt-2">Country Type</label>
                <select
                    id="exampleSelect"
                    className="app_input"
                    value={form.nationalism}
                    name="nationalism"
                    type="select"
                    onChange={handleChange}
                >
                    <option>Select </option>
                </select> */}
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col md= {6}>
                <button
                    className="app_button p-3"
                    style={{ width: 150, float: 'right'}} 
                    // onClick={() => goto('/creact-room-type')}
                    >
                    Add +
                </button>
            </Col>
        </Row>
    </Card>
    
  )
}
