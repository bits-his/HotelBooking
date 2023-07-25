import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";
import InputForm from "../CustomComponents/InputForm";
import { _get, _post } from "../Utils/Helper";

export default function CreateNewHotel() {
  const goto = useNavigate();
  // export default function HotelReg() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    hotel_in: "",
    hotel_name: "",
    address: "",
    city: "",
    phone: "",
    email: "",
    website: "",
    contact_person: "",
    contact_no1: "",
    phone2: "",
    country: "",
    email2: "",
  });

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  const [hotelList, setHotelList] = useState([]);

  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };
  const [selected, setSelected] = useState([]);
  const handleSelected = (s) => {
    setSelected(s);
  };

  const handleSubmit = () => {
    let finalObj = {
      name: form.name,
      address: form.address,
      floors: selected,
    };
    setLoading(true);
    _post(
      "api/hotels?in_query_type=create",
      form,
      (res) => {
        setForm((p) => ({
          ...p,
          hotel_in: "",
          hotel_name: "",
          address: "",
          city: "",
          phone: "",
          email: "",
          website: "",
          contact_person: "",
          contact_no1: "",
          phone2: "",
          country: "",
          email2: "",
        }));
        setLoading(false);
        console.log(res);
        getHotels();
        toggle();
      },
      (err) => {
        setLoading(false);
        console.log(err);
      }
    );
    console.log(finalObj);
    console.log(form);
  };

  const getHotels = () => {
    _post(
      "api/hotels?in_query_type=select-all",
      {},
      (resp) => {
        // setLoading(false)
        console.log(resp);
        // if (resp ) {
        setHotelList(resp.resp);
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

  useEffect(() => {
    // setLoading(true)
    getHotels();
  }, []);

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3 mt-3">
      <Row>
        <Col
          md={12}
          style={{ display: "flex", width: "100%", textAlign: "center" }}
        >
          <button
            className="app_button p-2 mb-3"
            style={{ width: 150, fontSize: 16, fontWeight: 500 }}
            onClick={() => goto("/hotel-registration")}
          >
            <FaArrowLeft style={{ marginRight: 10 }} /> Back
          </button>
          <h5 className="app_title" style={{ fontSize: 30, width: "80%" }}>
            Create New Hotel
          </h5>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <InputForm
            className="app_input"
            label="Hotel Name"
            value={form.hotel_name}
            onChange={handleChange}
            name="hotel_name"
          />
          <InputForm
            className="app_input"
            label="phone No 2"
            value={form.phone2}
            onChange={handleChange}
            name="phone2"
          />
          <InputForm
            className="app_input"
            label="Email 2"
            type="email"
            value={form.email2}
            onChange={handleChange}
            name="email2"
          />
          <InputForm
            className="app_input"
            label="Address"
            value={form.address}
            onChange={handleChange}
            name="address"
          />
          <InputForm
            className="app_input"
            label="City"
            value={form.city}
            onChange={handleChange}
            name="city"
          />
        </Col>
        <Col md={6}>
          <InputForm
            className="app_input"
            label="Phone"
            type="number"
            value={form.phone}
            onChange={handleChange}
            name="phone"
          />
          <InputForm
            className="app_input"
            label="Email"
            value={form.email}
            onChange={handleChange}
            name="email"
          />
          <InputForm
            className="app_input"
            label="Website"
            value={form.website}
            onChange={handleChange}
            name="website"
          />
          <InputForm
            className="app_input"
            label="Contact person"
            value={form.contact_person}
            onChange={handleChange}
            name="contact_person"
          />
          <InputForm
            className="app_input"
            label="Country"
            value={form.country}
            onChange={handleChange}
            name="country"
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={6}>
          <div>
            {loading ? (
              <button
                style={{ float: "right", width: 150 }}
                //   style={{ width: '150px' }}
                className="app_button mt-3 p-2 shadow"
              >
                Loading...
              </button>
            ) : (
              <button
                style={{ float: "right", width: 150 }}
                className="app_button mt-3 p-2 shadow"
                onClick={handleSubmit}
              >
                Create
              </button>
            )}
          </div>
        </Col>
      </Row>
    </Card>
  );
}
