import React, { useState } from 'react'
import { Card } from 'reactstrap'
import FormWrapper from '../tab-wrapper/FormaWrapper'
import CreaateAllotment from './CreaateAllotment'
import AllaotmentTable from './Table/AllaotmentTable'

export default function Allotmentstep() {
    const [form, setForm] = useState({
        room_ty: '',
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
  return (
    <Card className="app_card dashboard_card shadow p-0 m-3 mt-2">
      <FormWrapper steps={["Creaate Allotment", "Allaotment Table",]} >
        <CreaateAllotment form={form} setForm={setForm}/>
        <AllaotmentTable form={form} setForm={setForm}/>
      </FormWrapper>    
    </Card>
  )
}
