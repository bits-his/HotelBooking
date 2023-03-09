import React, { useState } from 'react'
import { Card, Col, Label, Row } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'
import { _post } from '../Utils/Helper'
// import FormWrapper from '../tab-wrapper/FormaWrapper'
export default function NewAgent({form={},setForm=(f)=>f}) {


  const handleChange = ({ target: { name, value } }) => {
    // console.log({ target })
    setForm((p) => ({ ...p, [name]: value }))
  } 
  const [loading, setLoading] = useState(false)
  const handleSubmit = () => {
    setLoading(true)
    _post(
      'api/agent_supplier',
      form,
      (res) => {
        // setForm((p) => ({ ...p, hotel: '', address: '', price: '' }))

        setLoading(false)
        console.log(res)
      },
      (err) => {
        setLoading(false)
        console.log(err)
      },
    )
    // console.log(form)
  }


  return (
    <Card className="app_card dashboard_card shadow p-3 m-3 mt-0">
      
        <Row>
            <Col md={6}>
                <h5 className="app_title">Create New Agent/Supplier</h5>
                <InputForm
                    className="app_input"
                    label="Agent Id"
                    value={form.agent_name}
                    onChange={handleChange}
                    name="agent_name"
                    type="number"
                    required
                />
                <InputForm
                    className="app_input"
                    label="Telephone No"
                    value={form.phone}
                    onChange={handleChange}
                    name="phone"
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
                    <option>hello</option>
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
                    value={form.zipcode}
                    onChange={handleChange}
                    name="zipcode"
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
                    label="extension"
                    value={form.extension}
                    onChange={handleChange}
                    name="extension"
                />
                <InputForm
                    className="app_input"
                    label="City"
                    value={form.city}
                    onChange={handleChange}
                    name="city"
                />
                <InputForm
                    className="app_input"
                    label="State"
                    value={form.state}
                    onChange={handleChange}
                    name="state"
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
                    value={form.contact_person}
                    onChange={handleChange}
                    name="contact_person"
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
                  <InputForm
                    className="app_input"
                    label="Adress"
                    value={form.address}
                    onChange={handleChange}
                    name="address"
                />
               
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
