import React, { useState } from "react";
import { Button, Card, Col, Row } from "reactstrap";
import InputForm from "../CustomComponents/InputForm";
import { _post } from "../Utils/Helper";

export default function CreateTransportReservstion() {
  const _form = {
    route: "",
    mov_type: "",
    pickup_from: "",
    pickup_to: "",
    aduil_child: "",
    pickup_date: "",
    transport_company: "",
    transport_type: "",
    qty: "",
    sale_rote: "",
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
    city:"",
    arrive_or_dep_time: "",
    remark: ""
  };

  const [form, setForm] = useState(_form);
  const [data, setData] = useState([]);
  const handleChange = ({ target: { name, value } }) =>
    setForm((p) => ({ ...p, [name]: value }));

  const handleSubmit = () => {
    // setForm(_form);
    setData((p) => [...p, form]);
    console.log(_form);
  };
  const handleSubmiting =()=>{
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
  return (
    <div>
      <Card className="app_card dashboard_card shadow p-3 m-3">
        <h5 className="app_title" style={{ fontSize: 30, width: "80%" }}>
          Create Transport Reservation
        </h5>
        {JSON.stringify(data)}
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
          <Col md={4}>
            <InputForm
              className="app_input"
              label="Sale Rote"
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
        <Row className="mt-3">
          <Col md={6}>
            <button
              className="app_button p-3"
              style={{ width: 150, float: "right" }}
              onClick={handleSubmit}
            >
              Add
            </button>
          </Col>
        </Row>
        <Row>
          <div style={{ overflowX: "auto", marginTop: 50 }}>
            <table id="customers" className="mt-5">
              <thead>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Router
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Mov type
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Pickup From
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Pickup To
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Adult child
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Pickup Date
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Transport Company
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Transport Type
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Qty
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Sale Rate
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Total
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Discount
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Vat %
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Vat Amount
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Net Total
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Purch Rate
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Vat %
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Vat Cost %
                </th>{" "}
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Flight
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Flight No
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  City
                </th>{" "}
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Arrive Or Dep Time
                </th>{" "}
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Remark
                </th>
              </thead>
              {data &&
                data.map((i) => (
                  <tbody>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      <input
                        className="table_input"
                        value={i.route}
                        name="route"
                      />
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      <input
                        className="table_input"
                        value={i.mov_type}
                        name="mov_type"
                      />
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      <input
                        className="table_input"
                        value={i.pickup_from}
                        name="pickup_from"
                      />
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      <input
                        className="table_input"
                        value={i.pickup_to}
                        name="pickup_to"
                      />
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      <input
                        className="table_input"
                        value={i.aduil_child}
                        name="aduil_child"
                      />
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      <input
                        className="table_input"
                        value={i.pickup_date}
                        name="pickup_date"
                      />
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      <input
                        className="table_input"
                        value={i.transport_company}
                        name="transport_company"
                      />
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      <input
                        className="table_input"
                        value={i.transport_type}
                        name="transport_type"
                      />
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      <input
                        className="table_input"
                        value={i.qty}
                        name="qty"
                      />
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      <input className="table_input" value={i.sale_rote} name="sale_rote" />
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      <input
                        className="table_input"
                        value={i.total}
                        name="total"
                      />
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      <input
                        className="table_input"
                        value={i.discount}
                        name="discount"
                      />
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      <input
                        className="table_input"
                        value={i.vat}
                        name="vat"
                      />
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      <input className="table_input" value={i.vat_amount} name="vat_amount" />
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      <input
                        className="table_input"
                        value={i.net_total}
                        name="net_total"
                      />
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      <input
                        className="table_input"
                        value={i.purch_rate}
                        name="purch_rate"
                      />
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      <input
                        className="table_input"
                        value={i.vat1}
                        name="vat1"
                      />
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      <input
                        className="table_input"
                        value={i.vat_cost}
                        name="vat_cost"
                      />
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      <input
                        className="table_input"
                        value={i.flight}
                        name="flight"
                      />
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      <input
                        className="table_input"
                        value={i.flight_no}
                        name="flight_no"
                      />
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      <input
                        className="table_input"
                        value={i.city}
                        name="city"
                      />
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      <input
                        className="table_input"
                        value={i.arrive_or_dep_time}
                        name="arrive_or_dep_time"
                      />
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      <input
                        className="table_input"
                        value={i.remark}
                        name="remark"
                      />
                    </td>
                    {/* <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      <center>
                        <Button
                          size="sm"
                            onClick={() =>
                              navigate(
                                `/create-country?country_name=$&id=${i.id}`
                              )
                            }
                        >
                          Edit
                        </Button>
                      </center>
                    </td>{" "} */}
                  </tbody>
                ))}
            </table>
          </div>
        </Row>
        <center><button className="app_button p-3 mt-2" onClick={handleSubmiting}>Submit</button></center>
      </Card>
    </div>
  );
}
