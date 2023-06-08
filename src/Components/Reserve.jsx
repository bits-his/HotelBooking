import { pdf } from "@react-pdf/renderer";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Card, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import FormWrapper from "../tab-wrapper/FormaWrapper";
import useQuery, { _get, _post } from "../Utils/Helper";
import CreateReservationDetail from "./CreateReservationDetail";
import ViewReservationInvoice from "./Invoices/ViewReservationInvoice";
import Reservation from "./Reservation";
import ReservationTable from "./Table/ReservationTable";
// import TransportReservation from "./ReservationViewDeteals";
import CreateTransportReservstion from "./CreateTransportReservstion";

export default function Reserve() {
  const today = moment().format('YYYY-MM-DD')
  const [new_data, setNew_data] = useState([]);
  const [results,setResults]=useState([])
  const getChart =()=>{
      _get('api/getNextCode',(resp)=>{
          console.log(resp.results)
        setResults(resp.results)

      setForm((p)=>({...p,reservation_number:resp.results&&results?.code}))
      },(err)=>{
          console.log(err)
      })
  }
  useEffect(()=>{
      getChart()
  },[0])
  // let nos= results.code;
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
    meal_cost_rate_ExcTax:"",
    meal_cost_purch_vat:"",
    meal_cost_municipal_vat:"",
    meal_cost_rat_Inc_all_tax:"",
    total_meal_sale_rate:"",

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
    reservation_number:0,
    // arr:new_data
  });
  
  // const post_hotel_bookings = () => {
  //   _post(`api/hotel_booking?query_type=insert`, new_data, (resp) => {
  //     console.log(resp);
  //   }),
  //     (err) => {
  //       console.log(err);
  //     };
  // };
  const navigate=useNavigate()
  const [print,setPrint]=useState(false)
  const [no,setNo]=useState()
  const handleSubmit = () => {
    _post(`api/hotel_booking?query_type=insert`, {...form,arr:new_data}, (resp) => {
      console.log(resp.nextCode);
      setNo(resp.nextCode)
      handleSubmitings()
      setForm((p)=>({...p,reservation_number:resp.nextCode}))
      NotificationManager.success('Success message', `Your Reservation Number is ${resp.nextCode}`);
      toggle3()
    }),
      (err) => {
        console.log(err);
      };
    // post_hotel_bookings();
  //  setPrint(!print)
  };
  // const trys = ()=>{
  //   setPrint(!print)
  // }
  const [modal3, setModal3] = useState(false)
  const toggle3 = () => setModal3(!modal3)
  const query = useQuery();
  const country_name = query.get("reservation_number")
  const [hotel, setHotel] = useState([]);

  const getHotels = () => {
    _post(
      `api/new-reservation?query_type=select-by-id&reservation_number=${country_name}`,
      {},
      (resp) => {
        // setLoading(false)
        console.log(resp);
        // if (resp ) {
        setHotel(resp.results);
        if(resp.results){
          if (country_name) {
            setForm(resp.results[0])
            
          }else{
           
          }
        }
        // }
      },
      (e) => {
        console.log(e);
        // setLoading(false)
        // alert(e)
      }
    );
  };
  const getBookings = () => {
    _post(
      `api/getHotelBooking?reservation_no=${country_name}`,
      {},
      (resp) => {
        // setLoading(false)
        console.log(resp);
        // if (resp ) {
        // setHotel(resp.results);
        if(resp.results){
          if(country_name){

            setNew_data(resp.results)
          }else{
            setNew_data([])
          }
        }
        // }
      },
      (e) => {
        console.log(e);
        // setLoading(false)
        // alert(e)
      }
    );
  };
  const [data,setData]=useState([])
  const handleSubmitings =()=>{
    _post('api/create_transport?query_type=insert',
    data,
    (res)=>{
      if(res.success){
        alert('success')
      }
    },(err)=>{
      console.log(err)
    })
  }
  // const navigate =useNavigate()
  useEffect(() => {
    getHotels();
    getBookings()
  }, [country_name]);
  return (
    <Card className="app_card dashboard_card shadow p-0 m-3 mt-2">
       <Modal isOpen={modal3} toggle={toggle3} size="md">
       <ModalHeader>Continue With</ModalHeader>
        <ModalBody>
        <Alert color="primary">
    Reservation Updated! ResNo :{no}
  </Alert>
         <div className="d-flex justify-content-between">
          <Button color='success' size="md" onClick={()=>{setPrint(!print);toggle3()}}>Print & Share Invoice</Button>
          <Button color='success' size="md">Print ltinery</Button>
          <Button color='success' size="md">Hotel Request</Button>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle3}>
          View Booking Details
          </Button>{' '}
          <Button style={{background:"rgb(233, 31, 64)"}} onClick={toggle3}>
          Add Transportation
          </Button>
          <Button color="danger" onClick={toggle3}>
            Close
          </Button>
        </ModalFooter>
                </Modal>
      {/* {JSON.stringify(new_data)} */}
      {
        print?<><Button color="danger" onClick={()=>setPrint(false)}>close</Button><ViewReservationInvoice setNew_data={new_data} form={form}/></>: <FormWrapper
        steps={["Create Reservation Details", "Hotel Bokking Details","Transport Reservation"]}
        handleSubmit={handleSubmit}
      >
        <CreateReservationDetail form={form} setForm={setForm} />
        <ReservationTable
          form={form}
          setForm={setForm}
          setNew_data={setNew_data}
          new_data={new_data}
        />
      <CreateTransportReservstion data={data} setData={setData} />
      </FormWrapper>}
      
     
    </Card>
  );
}