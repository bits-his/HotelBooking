import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Col, FormGroup, Input, Label, Row } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'
import { _post } from '../Utils/Helper'

export default function SignUp() {
    const goto = useNavigate()
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
    {/* <Card className="app_card shadow p-3 m-3" style={{width: 350}}>
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
                    value={form.confirm_password}
                    onChange={handleChange}
                    name="confirm_password"
                    type= 'password'
                />
            </Col>
            <Col md={12}>
                <button className="app_button mt-3 p-2 shadow" style={{width: '100%'}} onClick={submit}> {loading ? (
                      <span>Loading...</span>
                    ) : (
                      <span>
                        Register
                      </span>
                    )}</button>
            </Col>
        </Row>

    </Card>  */}
    <div className='sign-in-div1'>
      <div className='sign-in-div2'>
        <div className='sign-in-div3' style={{display: 'flex', justifyContent: 'space-between'}}>
            <p 
              className='sign-in-para'
              onClick={()=>goto('/sign-in')}
            >Sign in </p>
            <p style={{
              border: '1px solid #fff',
              marginTop: 15
            }}></p>
            <p 
              className='sign-in-para'
              onClick={()=>goto('/sign-up')}
            >Register </p>
      </div>
        <div className='sign-in-div4'>
          <input 
            className='sign-in-input' 
            type='text' 
            placeholder='Full Name' 
            value={form.name}
            onChange={handleChange}
            name="name"
          />
          <input 
            className='sign-in-input' 
            type='email' 
            placeholder='Email Address' 
            value={form.email}
            onChange={handleChange}
            name="email"
          />
          <input 
            className='sign-in-input' 
            type='number' 
            placeholder='Phone No.' 
            value={form.phone1}
            onChange={handleChange}
            name="phone1"
          />
          <input 
            className='sign-in-input' 
            type='number' 
            placeholder='Home Address'
            value={form.address}
            onChange={handleChange}
            name="address" 
          />
          <input 
            className='sign-in-input' 
            type='password' 
            placeholder='Password' 
            value={form.password}
            onChange={handleChange}
            name="password"
          />
          <input 
            className='sign-in-input' 
            type='password' 
            placeholder='Password' 
            value={form.confirm_passworm}
            onChange={handleChange}
            name="confirm_passworm"
          />
            <FormGroup switch className='sign-in-switch'>
              <Label className='sign-in-label'>
                <Input type="switch" role="switch" 
              />
                  Remember Me</Label>
            </FormGroup>
            <button className='sign-in-bottom' onClick={submit}> {loading ? (
              <span>Loading...</span>
              ) : (
              <span>
                Register
                  </span>
              )}
            </button>
            <div>
              <p className='sign-in-para1'>Already have an Acccount?<a href='#' className='sign-in-href'
                onClick={()=>goto('/sign-in')}
              > SignIn</a></p>
            </div>
        </div>
      </div>
    </div> 
    </div>
  )
}
