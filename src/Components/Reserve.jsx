import React, { useState } from 'react'
import { Card } from 'reactstrap'
import FormWrapper from '../tab-wrapper/FormaWrapper'
import CreateReservationDetail from './CreateReservationDetail'
import Reservation from './Reservation'
import ReservationTable from './Table/ReservationTable'

export default function Reserve() {
    const [form ,setForm] = useState({
        hotel: '',
        check_in: '',
        check_out: '',
        night: '',
        view: '',
        room_type: '',
        meal_type: '',
        no_of_room: '',
        room_sale_source: '',
        supplier: '',
        meal_sale_source: '',
        supplier: '',

        sale_rate_exc_tax: '',
        sale_municipal_vat: '',
        sale_purch_vat: '',
        sale_rat_inc_all_tax: '',
        total_room_sale_rate: '',

        cost_rate_exc_tax: '',
        cost_municipal_vat: '',
        cost_purch_vat: '',
        cost_rat_inc_all_tax: '',
        total_room_cost_rate: '',

        meal_rate_exc_tax: '',
        meal_municipal_vat: '',
        meal_purch_vat: '',
        meal_rat_inc_all_tax: '',
        total_meal_cost_rate: '',

        net_total_sale: '',
        net_total_cost: '',

        reservation_no: '',
        reservation_type: '',
        booking_status: '',
        option_date: '',
        booking_type: '',
        agent_name: '',
        vat_ret_no: '',
        sub_agent_name: '',
        price_category: '',
        guest_fullname: '',
        country_name: '',
        phone_no: '',
        email: '',
        brn_hotel: '',
        brn_transport: '',

        date: '',
        status: '',
        view: '',
        hotel: '',
        category: '',
        print_view: '',
        hotel_city: '',
        filter_type: ''
    })
  return (
    <Card className="app_card dashboard_card shadow p-0 m-3 mt-2">
      {JSON.stringify(form)}
      <FormWrapper steps={["Create Reservation Detail", "Reservation",]} >
        <CreateReservationDetail form={form} setForm={setForm}/>
        <ReservationTable form={form} setForm={setForm}/>
      </FormWrapper>    
    </Card>
  )
}
