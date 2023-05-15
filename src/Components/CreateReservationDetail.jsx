import React, { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Card, Col, Modal, Label, Row, Table, Input } from "reactstrap";
import InputForm from "../CustomComponents/InputForm";
import AgentModal from "./Modal/AgentModal";
import QuestModal from "./Modal/QuestModal";
import ReservationModal from "./Modal/ReservationModal";
// import HotelReg from './Modal/HotelModal'
// import ReservationTable from './Table/ReservationTable'
import { _get, _post } from '../Utils/Helper'
import Tables from './Table/Tables'
import TableForm from './Table/TableForm'
import { MdDeleteOutline } from 'react-icons/md'
import moment from "moment";

export default function CreateReservationDetail() {
  const __form = {
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
  }
  const [form, setForm] = useState(__form);
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [page, setPage] = useState(false);

  const handleReset = () => {
    setForm({reservation_type: "",
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
    BRN_transport: "",})
  }

  const toggle = () => setModal(!modal);
  const toggle1 = () => setModal1(!modal1);
  const toggle2 = () => setModal2(!modal2);
  const toggle3 = () => setModal3(!modal3);
  const navigate = useNavigate();
  const today = moment().format('YYYY-MM-DD')
  const d_to = moment(today).add('days', 1).format('YYYY-MM-DD')

  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }))
    console.log(form)
  }
   let _form ={
        hotel: '',
        check_in: today,
        check_out: d_to,
        night:1,
        view: '', 
        room_type: '',
        meal_type:'',
        no_of_rm:'',
        no_of_pax:'',
        rm_sale_source: '',
        rm_sale_source_supplier: '',
        meal_sale_source:'',
        meal_sale_source_supplier: '',
        room_sale_rate_exc_tax:'',
        room_sale_municipal :'',
        room_sale_purch_vat: '',
        room_sale_rat_inc_all_tax: '',
        total_room_sale_rate:'',
        meal_sale_rate_exc_tax:'',
        meal_sale_purch_vat:'',
        meal_sale_rat_inc_all_tax: '',
        total_meal_sale_rate:'',
        room_cost_rate_exc_tax:'',
        room_cost_municipal :'',
        room_cost_purch_vat: '',
        room_cost_rat_inc_all_tax: '',
        total_room_cost_rate: '',
        meal_cost_rate_exc_tax:'',
        meal_cost_purch_vat:'',
        meal_cost_rat_inc_all_tax: '',
        total_meal_cost_rate:'',
        net_total_sale: '',
        net_total_cost: '',
        option_date: ''
    }
  // const [data, setData] = useState([])
  const [datas, setDatas] = useState([_form])

  // const getViews = () => {
  //   _get(
  //     "api/get_views",
  //     (res) => {
  //       //   navigate(`/agent`)
  //       console.log(res);
  //       setData(res.results[0]);
  //     },
  //     (err) => {
  //       // setLoading(false)
  //       console.log(err);
  //     }
  //   );
  //   // console.log(form)
  // };
  const [hotel, setHotel] = useState([]);
  const getHotels = () => {
    _post(
      "api/room_type?query_type=select",
      {},
      (resp) => {
        // setLoading(false)
        console.log(resp);
        // if (resp ) {
        setHotel(resp.results);
        //  alert('dfasfsadf'+resp)
        // }
      },
      (e) => {
        console.log(e);
        // setLoading(false)
        // alert(e)
      }
    );
  };
  const [meal, setMeal] = useState([]);
  const getMeals_table = () => {
    _get(
      "api/meals_tables",
      (res) => {
        // navigate(-1)
        console.log(res);
        setMeal(res.results[0]);
      },
      (err) => {
        // setLoading(false)
        console.log(err);
      }
    );
    // console.log(form)
  };
  const [agent, setAgent] = useState([]);
  const getAgent = () => {
    _post(
      "api/bank_account_details",
      {},
      (res) => {
        //   navigate(`/agent`)
        console.log(res);
        setAgent(res.results);
      },
      (err) => {
        // setLoading(false)
        console.log(err);
      }
    );
    // console.log(form)
  };

  useEffect(() => {
    // getViews();
    getHotels();
    getMeals_table();
    getAgent();
  }, []);
  
  const handleSubmit = () => {
    console.log(form);
    _post(
      "api/booking_with_reservation?query_type=insert",
      form,
      (res) => {
        //   navigate(`/agent`)
        if (res.success) {
          alert("submitted successfully!!");
          setForm({
            reservation_number: "",
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
          });
        }
        console.log(res);
        // setAgent(res.results)
      },
      (err) => {
        // setLoading(false)
        console.log(err);
      }
    );
  };
  const [country, setCountry] = useState([]);
  useEffect(() => {
    _get(
      "api/get_countries",
      (res) => {
        //   navigate(`/agent`)
        console.log("contryyyyyyyyyyyyyyyy", res);
        setCountry(res.results);
      },
      (err) => {
        // setLoading(false)
        console.log(err);
      }
    );
  }, [0]);
  const [selected, setSelected] = useState({});
  return (
    <Card className="app_card dashboard_card shadow p-3 m-2 mt-2">
      <div className="">
        {/* {JSON.stringify(today)} */}

        <Row>
          <Col md={12}>
            <h5 className="app_title" style={{ fontSize: 30 }}>
              <center>Create New Reservation</center>
            </h5>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <label className="Label mt-2">Reservation Number</label>
            <div className="search_input_form">
              <input
                className="app_input3"
                value={form.reservation_number}
                onChange={handleChange}
                name="reservation_number"
                type="number"
                disabled
              />
              <CiSearch className="search_icon" onClick={toggle2} />
              <Modal isOpen={modal2} toggle={toggle2} size="xl">
                <ReservationModal setForm={setForm} toggle={toggle2} />
              </Modal>
            </div>
            <InputForm
              className="app_input"
              label="Option Date"
              value={form.date}
              onChange={handleChange}
              name="date"
              type="date"
            />
            <InputForm
              className="app_input"
              label="Vat Reg No."
              value={form.vat_reg_no}
              onChange={handleChange}
              name="vat_reg_no"
              type="number"
            />
            <label className="Label mt-2">Price Category</label>
            <select
              id="exampleSelect"
              className="app_input"
              name="price_category"
              type="select"
              onChange={handleChange}
              value={form.price_category}
            >
              <option>Select </option>
              <option>Value-based pricing </option>
              <option>Dynamic pricing</option>
              <option>Cost-plus pricing </option>
            </select>
            <InputForm
              className="app_input"
              label="Phone Number"
              value={form.phone}
              onChange={handleChange}
              name="phone"
              type="number"
            />
            {/* <label className="Label mt-2">VIP Category</label>
            <select
              id="exampleSelect"
              className="app_input"
              value={form.view}
              name="view"
              type="select"
              onChange={handleChange}
            >
              <option>Select </option>
            </select> */}
            {/* <InputForm
              className="app_input"
              label="Group Number"
              value={form.date}
              onChange={handleChange}
              name="date"
              type="number"
            /> */}
          </Col>
          <Col md={4}>
            <label className="Label mt-2">Reservation Type</label>
            <select
              id="exampleSelect"
              className="app_input"
              value={form.reservation_type}
              name="reservation_type"
              onChange={handleChange}
            >
              <option>Select</option>
              <option>Comfirmed Reservation</option>
              <option>Waitlisted Reservation </option>
              <option>Tentative Reservation </option>
            </select>
            <label className="Label mt-2">Booking Type</label>
            <select
              // id="exampleSelect"
              className="app_input"
              value={form.booking_type}
              name="booking_type"
              type="select"
              onChange={handleChange}
            >
              <option>Select </option>
              <option value="Comfirmed Reservation">
                Comfirmed Reservation
              </option>
              <option value="Waitlisted Reservation">
                Waitlisted Reservation{" "}
              </option>
              <option>Tentative Reservation </option>
            </select>
            <label className="Label mt-2">Sub Agent Name</label>
            <select
              id="exampleSelect"
              className="app_input"
              value={form.sub_agent_name}
              name="sub_agent_name"
              type="select"
              onChange={handleChange}
            >
              <option>Select </option>
              <option>Abdulsalam </option>
            </select>
            <label className="Label mt-2">Guest Full Name</label>
            <div className="search_input_form">
              <input
                className="app_input3"
                value={form.guest_name}
                onChange={handleChange}
                name="guest_name"
              />
              <CiSearch className="search_icon" onClick={toggle1} />
              <Modal isOpen={modal1} toggle={toggle1} size="xl">
                <QuestModal setForm={setForm} toggle={toggle1} />
              </Modal>
            </div>
            {/* <InputForm
              className="app_input"
              label="Local Mobile Number"
              value={form.date}
              onChange={handleChange}
              name="date"
              type="number"
            /> */}
            <InputForm
              className="app_input"
              label="BRN Hotel"
              value={form.BRN_hotel}
              onChange={handleChange}
              name="BRN_hotel"
            />
            {/* <InputForm
              className="app_input"
              label="Local Ref Number"
              value={form.date}
              onChange={handleChange}
              name="date"
              type="number"
            /> */}
          </Col>
          <Col md={4}>
            <label className="Label mt-2">Booking Status</label>
            <select
              id="exampleSelect"
              className="app_input"
              value={form.booking_status}
              name="booking_status"
              // type="select"
              onChange={handleChange}
            >
              {/* <option>Select </option> */}
              <option value="active">Active</option>
              <option value="pending">pending</option>
            </select>
            <label className="Label mt-2">Agent Name</label>
            <div className="search_input_form">
              <input
                className="app_input3"
                value={form.agent_name}
                onChange={handleChange}
                name="agent_name"
              />
              <CiSearch className="search_icon" onClick={toggle} />
              <Modal isOpen={modal} toggle={toggle} size="xl">
                <AgentModal
                  setForm={setForm}
                  toggle={toggle}
                  names="agent_name" 
                />
              </Modal>
            </div>
            {/* <InputForm
              className="app_input"
              label="Client Ref Number"
              value={form.date}
              onChange={handleChange}
              name="date"
              type="number"
            /> */}
            <label className="Label mt-2">Country </label>
            <select
              id="exampleSelect"
              className="app_input"
              name="country_name"
              type="select"
              onChange={handleChange}
              value={form.country_name}
            >
              <option>----select-----</option>
              {country.map((i) => (
                <option value={i.country_name}>{i.country_name}</option>
              ))}
            </select>
            <InputForm
              className="app_input"
              label="Email Address"
              value={form.email}
              onChange={handleChange}
              name="email"
              type="email"
            />
            <InputForm
              className="app_input"
              label="BRN Transport"
              value={form.BRN_transport}
              onChange={handleChange}
              name="BRN_transport"
            />
          </Col>
          {/* <Col md={12} style={{ display: 'flex', gap: 10 }}>
            <div>
              <button
                className="app_button p-3 mt-3"
                style={{ width: 150 }}
                onChange={()=>handleSubmit()}
              >
                Save
              </button>
            </div>
            <div>
              <button
                className="app_button p-3 mt-3"
                style={{ width: 150 }}
                // onChange={handleSubmit}
              >
                New
              </button>
            </div>
          </Col> */}
        </Row>
      </div>
      <TableForm data={datas} setData={setDatas} forms={form} handleReset={handleReset}/>
    </Card>
  );
}