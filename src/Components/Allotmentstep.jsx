import moment from 'moment/moment'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Card } from 'reactstrap'
import FormWrapper from '../tab-wrapper/FormaWrapper'
import { _post } from '../Utils/Helper'
import CreaateAllotment from './CreaateAllotment'
import AllaotmentTable from './Table/AllaotmentTable'

export default function Allotmentstep() {
<<<<<<< HEAD
  const {user}=useSelector((state)=>state.auth)
=======
  const today = moment().format("YYYY-MM-DD")
  const d_to =moment(today).add(1,'days').format("YYYY-MM-DD") 
>>>>>>> a2316e48d45dd70ac0919d7f020f151a9c4729c5
    const [form, setForm] = useState({
      room_type: '',
        veiws: '',
        d_from: today,
        nights: 1,
        d_to: d_to,
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
        details: '',
        agent:user.name

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
      {JSON.stringify(form)}
      <FormWrapper steps={["Creaate Allotment", "Allaotment Table",]} handleSubmit={handleSubmit} >
      
        <CreaateAllotment form={form} setForm={setForm}/>
        <AllaotmentTable form={form} setForm={setForm} newData={newData} setNewData={setNewData} />
      </FormWrapper>    
    </Card>
  )
}
