import moment from "moment";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "reactstrap";
import FormWrapper from "../tab-wrapper/FormaWrapper";
import { _post } from "../Utils/Helper";
import CreateReservationDetail from "./CreateReservationDetail";
import Reservation from "./Reservation";
import ReservationTable from "./Table/ReservationTable";

export default function Reserve() {
  const today = moment().format('YYYY-MM-DD')
  const [form, setForm] = useState({
    hotel: "",
    check_in: today,
    check_out:'',
    night: 1,
    view: "",
    room_type: "",
    meal_type: "",
    no_of_room: "",
    room_sale_source: "",
    supplier: "",
    meal_sale_source: "",
    supplier: "",

    sale_rate_exc_tax: "",
    sale_municipal_vat: "",
    sale_purch_vat: "",
    sale_rat_inc_all_tax: "",
    total_room_sale_rate: "",

    cost_rate_exc_tax: "",
    cost_municipal_vat: "",
    cost_purch_vat: "",
    cost_rat_inc_all_tax: "",
    total_room_cost_rate: "",

    meal_rate_exc_tax: "",
    meal_municipal_vat: "",
    meal_purch_vat: "",
    meal_rat_inc_all_tax: "",
    meal_scale_source:"",
    total_meal_cost_rate: "",

    net_total_sale: "",
    net_total_cost: "",

    reservation_type: "",
    booking_status: "",
    option_date: "",
    booking_type: "",
    agent_name: "",
    vat_reg_no: "",
    sub_agent_name: "",
    price_category: "",
    guest_name: "",
    country_name: "",
    phone: "",
    email: "",
    BRN_hotel: "",
    BRN_transport: "",

    date: "",
    status: "",
    // view: '',
    hotel: "",
    category: "",
    print_view: "",
    hotel_city: "",
    filter_type: "",
  });
  const [new_data, setNew_data] = useState([]);
  const post_hotel_bookings = () => {
    _post(`api/hotel_booking?query_type=insert`, new_data, (resp) => {
      console.log(resp);
    }),
      (err) => {
        console.log(err);
      };
  };
  const navigate=useNavigate()
  const handleSubmit = () => {
    _post(`api/new-reservation?query_type=insert`, form, (resp) => {
      console.log(resp);
    }),
      (err) => {
        console.log(err);
      };
    post_hotel_bookings();
    navigate('/reservation-invoice')
  };
  return (
    <Card className="app_card dashboard_card shadow p-0 m-3 mt-2">
      {/* {JSON.stringify(form)} */}
      <FormWrapper
        steps={["Create Reservation Details", "Hotel Bokking Details"]}
        handleSubmit={handleSubmit}
      >
        <CreateReservationDetail form={form} setForm={setForm} />
        <ReservationTable
          form={form}
          setForm={setForm}
          setNew_data={setNew_data}
          new_data={new_data}
        />
      </FormWrapper>
    </Card>
  );
}
