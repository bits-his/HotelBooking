import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Row } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'

export default function CreacteMeal() {
    const goto = useNavigate()

    const [form, setForm] = useState({
        meal_id: '',
        meal_name: '',
        meal_type: ''
    })

    const handleChange = ({ target: { name, value } }) => {
    // console.log({ target })
    setForm((p) => ({ ...p, [name]: value }))
    }

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
         <button
            className="app_button p-3 mb-3"
            style={{ width: 150, fontSize: 16, fontWeight: 500}} 
            onClick={() => goto('/meal')}
        >
            <FaArrowLeft style={{marginRight: 10}} /> Back
        </button>
        <Row>
            <Col md={12}>
                <h5 className="app_title">Create Meal</h5>
            </Col>
        </Row>
        <Row>
            <Col md={6}>
                <InputForm
                    className="app_input"
                    label="meal Id"
                    value={form.meal_id}
                    onChange={handleChange}
                    name="meal_id"
                    type= 'number'
                />
                <InputForm
                    className="app_input"
                    label="meal Name"
                    value={form.meal_name}
                    onChange={handleChange}
                    name="meal_name"
                />
            </Col>
            <Col>
                <label className="Label mt-2">meal Type</label>
                <select
                    id="exampleSelect"
                    className="app_input"
                    value={form.meal_type}
                    name="meal_type"
                    type="select"
                    onChange={handleChange}
                >
                    <option>Select </option>
                </select>
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
