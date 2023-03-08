import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'

export default function SignIn() {
    const [form, setForm] = useState({
        email: '',
        password: ''
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
        height: '90vh',
      }}
    >
    <Card className="app_card shadow p-3 m-3" style={{width: 350, height: 400}}>
        <Row onSubmit={handleAdd}>
            <Col md={12}>
                <center><h5 className="app_title">Sign IN</h5></center>
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
                    label="Password"
                    value={form.password}
                    onChange={handleChange}
                    name="password"
                    type= 'password'
                />
            </Col>
            <Col md={12}>
                <button className="app_button mt-3 p-2 shadow" style={{width: '100%'}} onSubmit= {handleAdd}>Log In</button>
            </Col>
        </Row>
    </Card>  
    </div>
  )
}
