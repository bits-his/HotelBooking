import React, { useState } from 'react'
import { Card, Col, FormGroup, Input, Label, Row } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'
import { login } from '../redux/actions/authActions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function SignIn() {
    const goto = useNavigate()
   const {
    auth: { errors },
  } = useSelector((s) => s)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [display, setDisplay] = useState(false)
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }))
    console.log(form)
    }

    const submit = (e) => {
        e.preventDefault()
        console.log(form)
        setLoading(true)
        dispatch(
          login(
            form,
            (resp) => {
              if (resp.success) {
                setLoading(false)
                goto('/dashboard')
              } else {
                setLoading(false)
                alert(resp.email ? resp.email : resp.password)
                setEmailResult(resp.email)
                setPasswordResult(resp.password)
              }
              console.log(resp)
            },
            (e) => {
              setLoading(false)
              // alert(JSON.stringify(e))
              console.log(e)
            },
          ),
        )
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
    {/* <Card className="app_card shadow p-3 m-3" style={{width: 350, height: 400}}> */}
        {/* <Row >
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
                <button className="app_button mt-3 p-2 shadow" style={{width: '100%'}} onClick= {submit}> {loading ? (
                        <span>Loading...</span>
                      ) : (
                        <span>
                          Login
                        </span>
                      )}</button>
            </Col>
        </Row> */}
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
                  type='email' 
                  placeholder='Email'
                  value={form.email} 
                  name="email"
                  onChange={handleChange}
                />
                <input 
                  className='sign-in-input' 
                  type='password' 
                  placeholder='Password' 
                  value={form.password}
                  onChange={handleChange}
                  name="password"
                />
                <FormGroup switch className='sign-in-switch'>
                  <Label className='sign-in-label'>
                    <Input type="switch" role="switch" />
                    Remember Me</Label>
                </FormGroup>
                <button className='sign-in-bottom'onClick= {submit}> {loading ? (
                  <span>Loading...</span>
                    ) : (
                      <span>
                          Login
                      </span>
                      )}
                </button>
                <div>
                  <p className='sign-in-para1'>Don't have an account?<a href='#' className='sign-in-href'
                    onClick={()=>goto('/sign-up')}
                  > Sign Up</a></p>
                </div>
            </div>
          </div>
        </div>
    {/* </Card>   */}
    </div>
  )
}
