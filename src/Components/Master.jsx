import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormWrapper from '../tab-wrapper/FormaWrapper'
import { _post } from '../Utils/Helper'
import BankDetails from './BankDetails'
import NewAgent from './NewAgent'

export default function Master() {
    const navigate = useNavigate()
    const [form,setForm]=useState({
        agent_name: '',
    arabic_name: '',
    phone: '',
    extension: '',
    country: '',
    city: '',
    zipcode: '',
    state: '',
    contact_person: '',
    email: '',
    web_address: '',
    address: '',
    job_title: '',
    mobile: '',
    fax: '',
    bank_acc_no: '',
    bank_name: '',
    beneficiary_name: '',
    branch_and_address: '',
    credit_limit: '',
    gl_acc_no_sales: '',
    gl_acc_no_supplier: '',
    price_category: '',
    payment_method: '',
    local_contact_details: '',
    vat_reg_no: '',
    mofa_file_no: '',
    region: '',
    agent_type: '',
    cash_guarantee: '',
    bank_guarantee: '',
    agent_supplier: ''
    })
    const handleSubmit = () => {
        // setLoading(true)
        _post(
          'api/agent_supplier?query_type=create',
          form,
          (res) => {
            
            navigate(`/agent`)
            console.log(res)
          },
          (err) => {
            // setLoading(false)
            console.log(err)
          },
        )
        // console.log(form)
      }
  return (
    <div>
        {/* {JSON.stringify(form)} */}
          <FormWrapper steps={["Agent", "Bank Details",]}  handleSubmit={handleSubmit}
                >
                  <NewAgent form={form} setForm={setForm} />
                  <BankDetails form={form} setForm={setForm}  />
                </FormWrapper>
    </div>
  )
}
