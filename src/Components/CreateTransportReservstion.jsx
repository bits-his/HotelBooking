import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "reactstrap";
import InputForm from "../CustomComponents/InputForm";
import { _post } from "../Utils/Helper";
import { CiSearch } from "react-icons/ci";
import TransportationTable from "./Table/TransportationTable";

export default function CreateTransportReservstion({
  data = [],
  setData = (f) => f,
}) {
  const _form = {
    route: "",
    mov_type: "",
    pickup_from: "",
    pickup_to: "",
    aduil: "",
    child: "",
    pickup_date: "",
    transport_company: "",
    transport_type: "",
    qty: "",
    sale_rate: "",
    total: "",
    discount: "",
    vat: "",
    vat_amount: "",
    net_total: "",
    purch_rate: "",
    vat1: "",
    vat_cost: "",
    flight: "",
    flight_no: "",
    city: "",
    arrive_or_dep_time: "",
    remark: "",
  };

  const [form, setForm] = useState(_form);
  const [city, setCity] = useState(_form);

  const handleChange = ({ target: { name, value } }) =>
    setForm((p) => ({ ...p, [name]: value }));

  const handleSubmit = () => {
    // setForm(_form);
    setData((p) => [...p, form]);
    console.log(_form);
  };
  const handleSubmiting = () => {
    _post(
      "api/create_transport?query_type=insert",
      data,
      (res) => {
        if (res.success) {
          alert("success");
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };
  const vat = parseInt(form.vat) / parseInt(form.sale_rate);
  const purch = parseInt(form.vat1) / parseInt(form.purch_rate);
  useEffect(() => {
    setForm((p) => ({
      ...p,
      total: vat,
      net_total: parseInt(form.vat) - vat,
      vat_cost: purch,
    }));
  }, [vat, purch]);

  
  return (
    <div>
      <Card className="app_card dashboard_card shadow p-3 m-3">
        <h5 className="app_title" style={{ fontSize: 30, width: "80%" }}>
          Create Transport Reservation
        </h5>
        {/* {JSON.stringify(vat)} */}
        <Row>
          <Col md={4}>
            <InputForm
              className="app_input"
              label="Route"
              name="route"
              value={form.route}
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <InputForm
              className="app_input"
              label="Mov Type"
              name="mov_type"
              value={form.mov_type}
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <InputForm
              className="app_input"
              label="Pickup From"
              name="pickup_from"
              value={form.pickup_from}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <InputForm
              className="app_input"
              label="Pickup To"
              name="pickup_to"
              value={form.pickup_to}
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <InputForm
              className="app_input"
              label="Aduil Child"
              name="aduil_child"
              value={form.aduil_child}
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <InputForm
              className="app_input"
              label="Pickup Date"
              type="date"
              name="pickup_date"
              value={form.pickup_date}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <InputForm
              className="app_input"
              label="Transport Company"
              name="transport_company"
              value={form.transport_company}
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <InputForm
              className="app_input"
              label="Transport Type"
              name="transport_type"
              value={form.transport_type}
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <InputForm
              className="app_input"
              label="Qty"
              type="number"
              name="qty"
              value={form.qty}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <div className="text-center mt-5">
          <p className="label_">TRANSPORT SALE RATE</p>
        </div>
        <hr className="line" />
        <Row>
          <Col md={4}>
            <InputForm
              className="app_input"
              label="Sale Rate"
              name="sale_rote"
              value={form.sale_rote}
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <InputForm
              className="app_input"
              label="Total"
              type="number"
              name="total"
              value={form.total}
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <InputForm
              className="app_input"
              label="Discount"
              type="number"
              name="discount"
              value={form.discount}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <InputForm
              className="app_input"
              label="Vat %"
              type="number"
              name="vat"
              value={form.vat}
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <InputForm
              className="app_input"
              label="Vat Amount"
              type="number"
              name="vat_amount"
              value={form.vat_amount}
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <InputForm
              className="app_input"
              label="Net Total"
              type="number"
              name="net_total"
              value={form.net_total}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <div className="text-center mt-5">
          <p className="label_">TRANSPORT PURCHASE RATE</p>
        </div>
        <hr className="line" />
        <Row>
          <Col md={4}>
            <InputForm
              className="app_input"
              label="Purch Rate"
              name="purch_rate"
              value={form.purch_rate}
              onChange={handleChange}
            />
          </Col>

          <Col md={4}>
            <InputForm
              className="app_input"
              label="Vat %"
              type="number"
              name="vat1"
              value={form.vat1}
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <InputForm
              className="app_input"
              label="Vat Cost"
              type="number"
              name="vat_cost"
              value={form.vat_cost}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <InputForm
              className="app_input"
              label="Flight"
              name="flight"
              value={form.flight}
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <InputForm
              className="app_input"
              label="Flight No"
              type="number"
              name="flight_no"
              value={form.flight_no}
              onChange={handleChange}
            />
          </Col>

          <Col md={4}>
            <InputForm
              className="app_input"
              label="City"
              name="city"
              value={form.city}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <InputForm
              className="app_input"
              label="Arrive Or Dep Time"
              name="arrive_or_dep_time"
              value={form.arrive_or_dep_time}
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <InputForm
              className="app_input"
              label="Remark"
              name="remark"
              value={form.remark}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <div className="mt-5 text-center">
          <button
            className="p-2 app_button"
            style={{ width: 100 }}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <div>
          <TransportationTable />
        </div>
        {/* <center><button className="app_button p-3 mt-2" onClick={handleSubmiting}>Submit</button></center> */}
      </Card>
    </div>
  );
}
