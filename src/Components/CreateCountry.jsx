import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Row } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'

export default function CreacteCountry() {
    const goto = useNavigate()

    const [form, setForm] = useState({
        // country_id: '',
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
            <Col md={12} style={{display: 'flex', width: '100%',textAlign: 'center'}}>
                <button
                    className="app_button p-3 mb-3"
                    style={{ width: 150, fontSize: 16, fontWeight: 500}} 
                    onClick={() => goto('/country')}
                >
                    <FaArrowLeft style={{marginRight: 10}} /> Back
                </button>
                <h5 className="app_title" style={{fontSize: 30, width: '80%'}}>Create Country</h5>
                
            </Col>
        </Row>
        <Row>
            <Col md={6}>
                {/* <InputForm
                    className="app_input"
                    label="Country Id"
                    value={form.country_id}
                    onChange={handleChange}
                    name="country_id"
                    type= 'number'
                /> */}
                <InputForm
                    className="app_input"
                    label="Country Name"
                    value={form.country_name}
                    onChange={handleChange}
                    name="country_name"
                />
            </Col>
            <Col md={6}>
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
                    Submit
                </button>
            </Col>
        </Row>
    </Card>
    
  )
}
