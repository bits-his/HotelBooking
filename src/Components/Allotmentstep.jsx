import React, { useState } from 'react'
import { Card } from 'reactstrap'
import FormWrapper from '../tab-wrapper/FormaWrapper'
import { _post } from '../Utils/Helper'
import CreaateAllotment from './CreaateAllotment'
import AllaotmentTable from './Table/AllaotmentTable'

export default function Allotmentstep() {
    const [form, setForm] = useState({
      room_type: '',
        veiws: '',
        d_from: '',
        nights: '',
        d_to: '',
        rooms :'',
        rate: '',
        totals: '',
        meals_plan: '',
        meals_ttl: '',
        net_ttl: '',
        vat: '',
        vat_ttl: '',
        ttl_w_vat: '',
        ref_no: '',
        pur_source: '',

        id_no: '',
        hotel_name: '',
        allotment_type: '',
        supplier_name: '',
        reference_id: '',
        details: ''
    })
    const [newData,setNewData]=useState([])
    const handleSubmit = ()=>{
      _post(`api/allotment_details?query_type=insert`,
      newData,
      (res)=>{
console.log(res)
      }),
      (err)=>{
        console.log(err)
      },
      allotment()
    }
    const allotment = () => {
      if (form.id_no&&form.hotel_name&&form.allotment_type&&form.supplier_name&&form.reference_id&&form.details) {
        setForm({
          id_no: '',  
          hotel_name: '',
          allotment_type: '',
          supplier_name: '',
          reference_id: '',
          details: '',
        })
      }
      _post('api/allotment', form, (resp) => {
        console.log(resp)
      }),
      (err) => {
        console.log(err)
      }
    }
  return (
    <Card className="app_card dashboard_card shadow p-0 m-3 mt-2">
      <FormWrapper steps={["Creaate Allotment", "Allaotment Table",]} handleSubmit={handleSubmit} >
        <CreaateAllotment form={form} setForm={setForm}/>
        <AllaotmentTable form={form} setForm={setForm} newData={newData} setNewData={setNewData} />
      </FormWrapper>    
    </Card>
  )
}
