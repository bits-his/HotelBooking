import React from 'react'
import { Card, Col, Input, Label, Row } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'

export default function Allotment() {
  return(
    <Card className="app_card dashboard_card shadow p-3 m-3">
        <Row>
            <Col md={12}>
                <h5 className="app_title">Allotment</h5>
            </Col>
            <Col md={2} style={{display: 'flex',flexDirection: 'row'}}>
                <InputForm
                    className="app_input"
                    label="ID No"
                    // value={form.account_number}
                    // onChange={handleChange}
                    name="account_number"
                    type= 'number'
                />
            </Col>
            <Col md={4}>
                <label className="Label mt-2">Hotel Name</label>
                <select
                    id="exampleSelect"
                    // bbbbb{JSON.stringify(selectedRoom)}
                    className="app_input"
                    name="price_category"
                    type="select"
                    // onClick={handleChange}
                    // value={form.price_category}
                >
                    <option>Select </option>
                </select>
            </Col>
            <Col md={2}>
                <label className="Label mt-2">Allotment Type</label>
                <select
                    id="exampleSelect"
                    // bbbbb{JSON.stringify(selectedRoom)}
                    className="app_input"
                    name="price_category"
                    type="select"
                    // onClick={handleChange}
                    // value={form.price_category}
                >
                    <option>Select </option>
                </select>
            </Col>
            <Col md={4}>
                <label className="Label mt-2">Supplier Name</label>
                <select
                    id="exampleSelect"
                    // bbbbb{JSON.stringify(selectedRoom)}
                    className="app_input"
                    name="price_category"
                    type="select"
                    // onClick={handleChange}
                    // value={form.price_category}
                >
                    <option>Select </option>
                </select>
            </Col>
        </Row>
        <Row>
            <Col md={2}>
                <InputForm
                    className="app_input"
                    label="Reference ID"
                    // value={form.account_number}
                    // onChange={handleChange}
                    name="account_number"
                    type= 'number'
                />
            </Col>
            <Col md={3} style={{marginTop: 30}}>
                <Label >
                    <Input 
                        type='checkbox'
                    /> Show All Pending Transaction
                </Label>
            </Col>
            <Col md={2} style={{marginTop: 30}}>
                <Label>
                    <Input 
                        type='checkbox'
                    /> Show GI Post
                </Label>
            </Col>
            <Col md={2} style={{marginTop: 30}}>
                <Label>
                    <Input 
                        type='checkbox'
                    /> Rate Update by Total
                </Label>
            </Col>
        </Row>
        <Row>
            <Col md= {4}>
                <label>Local Contact Details</label>
                <textarea
                    className='app_input'
                    placeholder='While............'
                    name='branch_address'
                    // value={form.branch_address}
                    // onClick={handleChange}
                />
            </Col>
        </Row>
        <Row>
            <Col md= {4}>
                <button
                    className="app_button p-1"
                    style={{ width: 200, backgroundColor: 'rgb(12, 134, 103)', height: 40, marginTop: 30}}
                    // onClick={() => goto('/sign-ip')}
                    >
                    Save
                </button>
            </Col>
            <Col md= {4}>
                <button
                    className="app_button bg-danger p-1"
                    style={{ width: 200, backgroundColor: 'rgb(12, 134, 103)', height: 40, marginTop: 30}}
                    // onClick={() => goto('/sign-ip')}
                    >
                    Cancel
                </button>
            </Col>
            <Col md= {4}>
                <button
                    className="app_button  p-1"
                    style={{ width: 200, backgroundColor: 'orange', height: 40, marginTop: 30}}
                    // onClick={() => goto('/sign-ip')}
                    >
                    Add Row
                </button>
            </Col>
        </Row>
        <Row>
            <table style={{border: '1px solid #ccc', padding: 12}} className= 'mt-5'>
                <thead>
                    <th style={{border: '1px solid #ccc'}}>head</th>
                    <th style={{border: '1px solid #ccc'}}>head</th>
                    <th style={{border: '1px solid #ccc'}}>head</th>
                    <th style={{border: '1px solid #ccc'}}>head</th>
                    <th style={{border: '1px solid #ccc'}}>head</th>
                </thead>
                <tbody>
                    <td style={{border: '1px solid #ccc'}}>head</td>
                    <td style={{border: '1px solid #ccc'}}>head</td>
                    <td style={{border: '1px solid #ccc'}}>head</td>
                    <td style={{border: '1px solid #ccc'}}>head</td>
                    <td style={{border: '1px solid #ccc'}}>head</td>
                </tbody>
            </table>
        </Row>
        <center><h1 className='mt-5' style={{color:"red"}}><b>COMING SOON !!!</b></h1></center> 
    </Card>
  )
}
