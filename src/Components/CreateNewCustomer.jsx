import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";
import InputForm from "../CustomComponents/InputForm";
import { _get, _post } from "../Utils/Helper";

export default function CreateNewCustomer() {
  const goto = useNavigate();
  const [form, setForm] = useState({
    hotel_n: "",
    select_agent: "",
    quest_type: "",
    customer_name: "",
    country: "",
    room_type: "",
    room_number: "",
    room_view: "",
    date_from: "",
    date_to: "",
    status: "",
    meal: "",
  });
  const [file, setFile] = useState();

  const handleChange = ({ target: { name, value } }) => {
    // console.log({ target })
    setForm((p) => ({ ...p, [name]: value }));
  };
  const [Loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (form.room_name && form.room_type && form.no_of_pax) {
      setForm({
        id,
        room_name: "",
        room_type: "",
        no_of_pax: "",
      });
    }
    setLoading(true);
    _post(
      "api/customer",
      form,
      (res) => {
        // setForm((p) => ({ ...p, hotel: '', address: '', price: '' }))
        setLoading(false);
        // navigate(-1)
      },
      (err) => {
        setLoading(false);
        console.log(err);
      }
    );
    // console.log(form)
  };

  function handleFileChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const [data, setData] = useState([]);
  const [country, setCountry] = useState([]);
  const [view, setView] = useState([]);
  const [hotel, setHotel] = useState([]);
  const [meal, setMeal] = useState([]);

  const getAgent = () => {
    _post(
      "api/bank_account_details",
      {},
      (res) => {
        //   navigate(`/agent`)
        console.log(res);
        setData(res.results);
      },
      (err) => {
        // setLoading(false)
        console.log(err);
      }
    );
    // console.log(form)
  };
  const getHotels = () => {
    _post(
      "api/hotels?in_query_type=select-all",
      {},
      (resp) => {
        // setLoading(false)
        console.log(resp);
        // if (resp ) {
        setHotel(resp.resp);
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

  const getViews = () => {
    _get(
      "api/get_views",
      (res) => {
        //   navigate(`/agent`)
        console.log(res);
        setView(res.results[0]);
      },
      (err) => {
        // setLoading(false)
        console.log(err);
      }
    );
    // console.log(form)
  };
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

  useEffect(() => {
    _get(
      "api/get_countries",
      (res) => {
        //   navigate(`/agent`)
        console.log(res);
        setCountry(res.results[0]);
      },
      (err) => {
        // setLoading(false)
        console.log(err);
      }
    );
  }, [0]);
  useEffect(() => {
    getAgent();
    getHotels();
    getViews();
    getMeals_table();
  }, []);

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3 mt-3">
        {JSON.stringify(form)}
      <Row>
        <Col
          md={12}
          style={{ display: "flex", width: "100%", textAlign: "center" }}
        >
          <button
            className="app_button p-3 mb-3"
            style={{ width: 150, fontSize: 16, fontWeight: 500 }}
            onClick={() => goto("/costomer")}
          >
            <FaArrowLeft style={{ marginRight: 10 }} /> Back
          </button>
          <h5 className="app_title" style={{ fontSize: 30, width: "80%" }}>
            Create New Agent/Supplier
          </h5>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          {/* <h5 className="app_title">Create New Agent/Supplier</h5> */}
          <label className="Label mt-2">Hotel Name</label>
          <select
            id="exampleSelect"
            className="app_input"
            name="hotel_n"
            type="select"
            onChange={handleChange}
            value={form.hotel_n}
          >
            {hotel.map((i) => (
              <option value="select">{i.hotel_name}</option>
            ))}
          </select>
          <InputForm
            className="app_input"
            label="Costomer Name"
            value={form.customer_name}
            onChange={handleChange}
            name="customer_name"
          />
          <label className="Label mt-2">Country </label>
          <select
            id="exampleSelect"
            className="app_input"
            name="country"
            type="select"
            onChange={handleChange}
            value={form.country}
          >
            {country.map((i) => (
              <option value={i.country_name}>{i.country_name}</option>
            ))}
          </select>
          <InputForm
            className="app_input"
            label="Room Number"
            value={form.room_number}
            onChange={handleChange}
            name="room_number"
            type="number"
          />
          <InputForm
            className="app_input"
            label="Arrival Date"
            value={form.date_from}
            onChange={handleChange}
            name="date_from"
            type="date"
          />
          <InputForm
            className="app_input"
            label="Status"
            value={form.status}
            onChange={handleChange}
            name="status"
          />
          <InputForm
            className="app_input"
            label="Agent Image"
            value={file}
            onChange={(e) => handleFileChange(e)}
            name="file"
            type="file"
          />
        </Col>
        <Col md={6}>
          {/* <h5 className="app_title"></h5> */}
          <label className="Label mt-2">Select Agent </label>
          <select
            id="exampleSelect"
            className="app_input"
            name="select_agent"
            type="select"
            onChange={handleChange}
            value={form.select_agent}
          >
            {data.map((i) => (
              <option value="select">{i.arabic_name}</option>
            ))}
          </select>
          <label className="Label mt-2">Guest Type</label>
          <select
            id="exampleSelect"
            className="app_input"
            name="quest_type"
            type="select"
            onChange={handleChange}
            value={form.quest_type}
          >
            <option>Select</option>
            <option value="adult">Adult</option>
            <option value="adult_children">Adult / Children</option>
          </select>
          <label className="Label mt-2">Select Room Type</label>
          <select
            id="exampleSelect"
            className="app_input"
            name="room_type"
            type="select"
            onChange={handleChange}
            value={form.room_type}
          >
            <option>Select</option>
            <option value="adult">Adult</option>
            <option value="adult_children">Adult / Children</option>
          </select>
          <label className="Label mt-2">Room View</label>
          <select
            id="exampleSelect"
            className="app_input"
            name="room_view"
            type="select"
            onChange={handleChange}
            value={form.room_view}
          >
            {view && view.map((i) => <option>{i.view_name}</option>)}
          </select>
          {/* <InputForm
                    className="app_input"
                    label="State"
                    // value={form.state}
                    // onChange={handleChange}
                    name="state"
                /> */}
          <InputForm
            className="app_input"
            label="Depature Date"
            value={form.date_to}
            onChange={handleChange}
            name="date_to"
            type="date"
          />
          <label className="Label mt-2">Meal</label>
          <select
            id="exampleSelect"
            className="app_input"
            value={form.meal}
            name="meal"
            type="select"
            onChange={handleChange}
          >
            {meal && meal.map((i) => <option>{i.meal_name}</option>)}
          </select>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={6}>
          <button
            className="app_button p-3"
            style={{ width: 150, float: "right" }}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </Col>
      </Row>
    </Card>
  );
}
