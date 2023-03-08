import React, { useState } from 'react'
import FormWrapper from '../tab-wrapper/FormaWrapper'
import BankDetails from './BankDetails'
import NewAgent from './NewAgent'

export default function Master() {
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
  return (
    <div>
        {/* {JSON.stringify(form)} */}
          <FormWrapper steps={["Agent", "Bank Details",]} 
                >
                  <NewAgent form={form} setForm={setForm} />
                  <BankDetails form={form} setForm={setForm}  />
                </FormWrapper>
    </div>
  )
}
