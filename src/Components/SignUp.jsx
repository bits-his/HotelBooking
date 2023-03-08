import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'

export default function SignUp() {
    const [form, setForm] = useState({
        fullname: '',
        email: '',
        address: '',
        password: '',
        confirm_passworm: ''
    })
    const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }))
    console.log(form)
    }

    const handleAdd = (e) =>{
        e.preventDefault()
        console.log(form)
    }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
    <Card className="app_card shadow p-3 m-3" style={{width: 350}}>
        <Row onSubmit={handleAdd}>
            <Col md={12}>
                <center><h5 className="app_title">SignUp</h5></center>
            </Col>
            <Col md={12}>
                <InputForm
                    className="app_input"
                    label="Full Name"
                    value={form.fullname}
                    onChange={handleChange}
                    name="fullname"
                    required
                />
            </Col>
            <Col md={12}>
                <InputForm
                    className="app_input"
                    label="Email"
                    value={form.email}
                    onChange={handleChange}
                    name="email"
                    type= 'email'
                />
            </Col>
            <Col md={12}>
                <InputForm
                    className="app_input"
                    label="Home Address"
                    value={form.address}
                    onChange={handleChange}
                    name="address"
                />
            </Col>
            <Col md={12}>
                <InputForm
                    className="app_input"
                    label="Password"
                    value={form.password}
                    onChange={handleChange}
                    name="password"
                    type= 'password'
                />
            </Col>
            <Col md={12}>
                <InputForm
                    className="app_input"
                    label="Comfirm Password"
                    value={form.confirm_passworm}
                    onChange={handleChange}
                    name="confirm_passworm"
                    type= 'password'
                />
            </Col>
            <Col md={12}>
                <button className="app_button mt-3 p-2 shadow" style={{width: '100%'}} onSubmit= {handleAdd}>SignUp</button>
            </Col>
        </Row>

    </Card>  
    </div>
  )
}
