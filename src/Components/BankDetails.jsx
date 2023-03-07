import React, { useState } from 'react'
import { Card, Col, Input, Label, Row } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'

export default function BankDetails() {
    const [file, setFile] = useState()
    const [form, setForm] = useState({
        account_number: '',
        account_name: '',
        beneficiary_name: '',
        branch_address: '',
        credit_limit: '',
        gl_account_no_sales: '',
        gl_account_no_suppliers: '',
        price_category: '',
        payment_method: '',
        l_c_d: '',
        vat_reg_no: '',
        mofa: '',
        region: '',
        agent_type: '',
        cash_gruaranty: '',
        bank_granty: '',
        a_s_type: ''
    })

    const handleChange = ({ target: { name, value } }) => {
    // console.log({ target })
    setForm((p) => ({ ...p, [name]: value }))
  }
  function handleFileChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
        <Row>
            <Col md={12}>
                <h5 className="app_title">Bank Account Details</h5>
            </Col>
        </Row>
        <Row>
            <Col md={6}>
                <InputForm
                    className="app_input"
                    label="Account Number"
                    value={form.account_number}
                    onChange={handleChange}
                    name="account_number"
                    type= 'number'
                />
                <InputForm
                    className="app_input"
                    label="Account Name"
                    value={form.account_name}
                    onChange={handleChange}
                    name="account_name"
                />
            </Col>
            <Col md={6}>
                <InputForm
                    className="app_input"
                    label="Account Name"
                    value={form.beneficiary_name}
                    onChange={handleChange}
                    name= "beneficiary_name"
                />
                <label>Branch & Address</label>
                <textarea
                    className='app_input'
                    placeholder='While............'
                    name='branch_address'
                    value={form.branch_address}
                    onClick={handleChange}
                />
            </Col>
            <hr className='mt-2 mb-3'/>
        </Row>
        <Row>
            <Col md={6}>
                <InputForm
                    className="app_input"
                    label="Credit Limit"
                    value={form.personal_contact}
                    onChange={handleChange}
                    name="personal_contact"
                    type= 'number'
                />
                <InputForm
                    className="app_input"
                    label="GL Account No.(Sales)"
                    value={form.personal_contact}
                    onChange={handleChange}
                    name="personal_contact"
                />
            </Col>
            <Col md={6}>
                <InputForm
                    className="app_input"
                    label="GL Account No.(Supplier)"
                    value={form.beneficiary_name}
                    onChange={handleChange}
                    name= "beneficiary_name"
                />
            </Col>
        </Row>
        <Row className= "mt-3">
            <Col md={6} >
                <label className="Label mt-2">Price Category</label>
                <select
                    id="exampleSelect"
                    // bbbbb{JSON.stringify(selectedRoom)}
                    className="app_input"
                    name="price_category"
                    type="select"
                    onClick={handleChange}
                    value={form.price_category}
                >
                    <option>Select </option>
                </select>
                <label>Local Contact Details</label>
                <textarea
                    className='app_input'
                    placeholder='While............'
                    name='branch_address'
                    value={form.branch_address}
                    onClick={handleChange}
                />
                <InputForm
                    className="app_input"
                    label="Agent Image"
                    value={file}
                    onChange={(e)=> handleFileChange(e)}
                    name="file"
                    type= "file"
                />
            </Col>
            <Col md={6}>
                <label className="Label mt-2">Payment Method</label>
                <select
                    id="exampleSelect"
                    // bbbbb{JSON.stringify(selectedRoom)}
                    className="app_input"
                    name="payment_method"
                    type="select"
                    onClick={handleChange}
                    value={form.payment_method}
                >
                    <option>Cash</option>
                </select>
                <InputForm
                    className="app_input"
                    label="Vat Reg No"
                    value={form.vat_reg_no}
                    onChange={handleChange}
                    name="vat_reg_no"
                />
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col md={6}>
                {/* <h5 className="app_title"></h5> */}
                <InputForm
                    className="app_input"
                    label="MOFA File No."
                    value={form.mofa}
                    onChange={handleChange}
                    name="mofa"
                />
                <label className="Label mt-2">Agent Type </label>
                <select
                    id="exampleSelect"
                    // bbbbb{JSON.stringify(selectedRoom)}
                    className="app_input"
                    name="agent_type"
                    type="select"
                    onClick={handleChange}
                    value={form.agent_type}
                >
                    <option></option>
                </select>
                {/* <InputForm
                    className="app_input"
                    label="Agent Type"
                    value={form.agent_type}
                    onChange={handleChange}
                    name="agent_type"
                /> */}
                <InputForm
                    className="app_input"
                    label="Bank Guarantee"
                    value={form.bank_granty}
                    onChange={handleChange}
                    name="bank_granty"
                />
                <Label>
                    <Input 
                        type='checkbox'
                    /> Block service
                </Label>
            </Col>
            <Col md={6}>
                {/* <h5 className="app_title"></h5> */}
                <label className="Label mt-2">Region</label>
                <select
                    id="exampleSelect"
                    // bbbbb{JSON.stringify(selectedRoom)}
                    className="app_input"
                    name="region"
                    type="select"
                    onClick={handleChange}
                    value={form.region}
                >
                    <option></option>
                </select>
                {/* <InputForm
                    className="app_input"
                    label="Region"
                    value={form.region}
                    onChange={handleChange}
                    name="region"
                /> */}
                <InputForm
                    className="app_input"
                    label="Cash Guarantee"
                    value={form.cash_gruaranty}
                    onChange={handleChange}
                    name="cash_gruaranty"
                />
                <label className="Label mt-2">Agent/Supplier Type</label>
                <select
                    id="exampleSelect"
                    // bbbbb{JSON.stringify(selectedRoom)}
                    className="app_input"
                    name="a_s_type"
                    type="select"
                    onClick={handleChange}
                    value={form.a_s_type}
                >
                    <option></option>
                </select>
                {/* <InputForm
                    className="app_input"
                    label="Agent/Supplier Type"
                    value={form.a_s_type}
                    onChange={handleChange}
                    name="a_s_type"
                /> */}
            </Col>
        </Row>
    </Card>
  )
}
