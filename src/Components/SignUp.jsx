import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'
import { _post } from '../Utils/Helper'

export default function SignUp() {
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        address: '',
        password: '',
        phone1:"",
        confirm_passworm: ''
    })
    const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }))
    console.log(form)
    }

    const submit = (e) => {
        e.preventDefault()
        setLoading(true)
    
        _post(
          `api/users/create`,
          form,
          (resp) => {
            // alert(JSON.stringify(resp))
            if (resp.user && resp.user.id) {
              // setLoading(false)
              dispatch(
                login(
                    form,
                  (resp) => {
                    if (resp.success) {
                      setLoading(false)
                      goto('/profile')
                    } else {
                      setLoading(false)
                      alert(resp.success)
                      setNameResult(resp.name)
                      setPhoneResult(resp.phone1)
                      setEmailResult(resp.email)
                      setPasswordResult(resp.password)
                    }
                  },
                  (error) => {
                    console.log(error)
                  },
                ),
              )
            } else {
              setLoading(false)
              setError(resp)
            }
          },
          (e) => {
            setLoading(false)
            console.log(e)
          },
        )
        // }
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
        <Row >
            <Col md={12}>
                <center><h5 className="app_title">SignUp</h5></center>
            </Col>
            <Col md={12}>
                <InputForm
                    className="app_input"
                    label="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    name="name"
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
                    label="Phone"
                    value={form.phone1}
                    onChange={handleChange}
                    name="phone1"
                    type= 'number'
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
                <button className="app_button mt-3 p-2 shadow" style={{width: '100%'}} onClick={submit}> {loading ? (
                      <span>Loading...</span>
                    ) : (
                      <span>
                        Register
                        {/* <BiChevronRight size={20} /> */}
                      </span>
                    )}</button>
            </Col>
        </Row>

    </Card>  
    </div>
  )
}
