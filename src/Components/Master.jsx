import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Card } from 'reactstrap'
import FormWrapper from '../tab-wrapper/FormaWrapper'
import { _get, _post } from '../Utils/Helper'
import BankDetails from './BankDetails'
import NewAgent from './NewAgent'

export default function Master() {
  const params = useParams()
  const agent_id = params.agent_id;
  const type = agent_id? 'update':'create'
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
          `api/agent_supplier?query_type=${type}&agent_id=${agent_id}`,
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
     
      const [data,setData]=useState([])
      const getAgents = ()=>{
        _get(
            `api/get_agents?agent_id=${agent_id}`,
            // {},
            (res) => {
              console.log(res)
              setForm(res.results[0])
            },
            (err) => {
              // setLoading(false)
              console.log(err)
            },
          )
          // console.log(form)
        }
      
      useEffect(() => {
        getAgents()
      }, [])
      
  return (
    <Card className="app_card dashboard_card shadow p-0 m-3 mt-2">
      <FormWrapper steps={["Agent", "Bank Details",]}  handleSubmit={handleSubmit}>
        <NewAgent form={form} setForm={setForm} />
        <BankDetails form={form} setForm={setForm}  />
      </FormWrapper>
    </Card>
  )
}
