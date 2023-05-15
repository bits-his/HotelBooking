import React, { useEffect } from 'react'
import InputForm from '../../CustomComponents/InputForm'
import { useState } from 'react'
import { _get, _post } from '../../Utils/Helper'
import { MdDeleteOutline } from 'react-icons/md'
import { Button, Card, Row } from 'reactstrap'
import { CiSearch } from 'react-icons/ci'

export default function TransportationTable() {
  const _form = {
    route: "",
    mov_type: "",
    pickup_from: "",
    pickup_to: "",
    aduil: "",
    child:"",
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
    // useEffect(()=>{
    //   setData([_form])
    // },[])
    const [form, setForm] = useState(_form)
    const [data, setData] = useState([_form])

    const handleChange = (name, value, index) => {
      let arr =[]
        data?.forEach((item,i) => {
      if(index === i){
      arr.push({...item, [name]: value })
    }else{
      arr.push(item)
    }
  })
  setData(arr)
 }
  // const handleChange = ({target:{name, value}}) => {
  //   setForm(p => ({[name]: value}))
  // }

    const handleAdd =() => {
      setData(p => [...p, {...form}])
    }

    function handleDelete(id) {
      const deleteRow = data.filter((p, idc) => idc !== id);
      setData(deleteRow);
    }
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

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      <Row>
        <h5 className="app_title" style={{ fontSize: 30, width: "80%" }}>
          Create Transport Reservation
        </h5>
        {JSON.stringify(data)}
          <div style={{ overflowX: "auto", marginTop: 20 }}>
            <table id="customers" className="mt-5">
              <thead>
                <th
                  style={{
                    border: "1px solid #0d3a73",
                    padding: "5px 10px",
                  }}
                >
                  Router
                </th>
                <th
                  style={{
                    border: "1px solid #0d3a73",
                    padding: "5px 10px",
                  }}
                >
                  Mov type
                </th>
                <th
                  style={{
                    border: "1px solid #0d3a73",
                    padding: "5px 10px",
                  }}
                >
                  Pickup From
                </th>
                <th
                  style={{
                    border: "1px solid #0d3a73",
                    padding: "5px 10px",
                  }}
                >
                  Pickup To
                </th>
                <th
                  style={{
                    border: "1px solid #0d3a73",
                    padding: "5px 10px",
                  }}
                >
                  Adult
                </th>
                <th
                  style={{
                    border: "1px solid #0d3a73",
                    padding: "5px 10px",
                  }}
                >
                  Child
                </th>
                <th
                  style={{
                    border: "1px solid #0d3a73",
                    padding: "5px 10px",
                  }}
                >
                  Pickup Date
                </th>
                <th
                  style={{
                    border: "1px solid #0d3a73",
                    padding: "5px 10px",
                  }}
                >
                  Transport Company
                </th>
                <th
                  style={{
                    border: "1px solid #0d3a73",
                    padding: "5px 10px",
                  }}
                >
                  Transport Type
                </th>
                <th
                  style={{
                    border: "1px solid #0d3a73",
                    padding: "5px 10px",
                  }}
                >
                  Qty
                </th>
                <th
                  style={{
                    border: "1px solid #0d3a73",
                    padding: "5px 10px",
                  }}
                >
                  Sale Rate
                </th>
                <th
                  style={{
                    border: "1px solid #0d3a73",
                    padding: "5px 10px",
                  }}
                >
                  Total
                </th>
                <th
                  style={{
                    border: "1px solid #0d3a73",
                    padding: "5px 10px",
                  }}
                >
                  Discount
                </th>
                <th
                  style={{
                    border: "1px solid #0d3a73",
                    padding: "5px 10px",
                  }}
                >
                  Vat %
                </th>
                <th
                  style={{
                    border: "1px solid #0d3a73",
                    padding: "5px 10px",
                  }}
                >
                  Vat Amount
                </th>
                <th
                  style={{
                    border: "1px solid #0d3a73",
                    padding: "5px 10px",
                  }}
                >
                  Net Total
                </th>
                <th
                  style={{
                    border: "1px solid #0d3a73",
                    padding: "5px 10px",
                  }}
                >
                  Purch Rate
                </th>
                <th
                  style={{
                    border: "1px solid #0d3a73",
                    padding: "5px 10px",
                  }}
                >
                  Vat %
                </th>
                <th
                  style={{
                    border: "1px solid #0d3a73",
                    padding: "5px 10px",
                  }}
                >
                  Vat Cost %
                </th>{" "}
                <th
                  style={{
                    border: "1px solid #0d3a73",
                    padding: "5px 10px",
                  }}
                >
                  Flight
                </th>
                <th
                  style={{
                    border: "1px solid #0d3a73",
                    padding: "5px 10px",
                  }}
                >
                  Flight No
                </th>
                <th
                  style={{
                    border: "1px solid #0d3a73",
                    padding: "5px 10px",
                  }}
                >
                  City
                </th>{" "}
                <th
                  style={{
                    border: "1px solid #0d3a73",
                    padding: "5px 10px",
                  }}
                >
                  Arrive Or Dep Time
                </th>{" "}
                <th
                  style={{
                    border: "1px solid #0d3a73",
                    padding: "5px 10px",
                  }}
                >
                  Remark
                </th>
                <th
                  style={{
                    border: "1px solid #0d3a73",
                    padding: "5px 10px",
                  }}
                >
                  Action
                </th>
              </thead>
              <tbody>
                {data.map((item, idx) => (
                  <tr>
                  <td style={{border: '1px solid #0d3a73'}}>
                    <div className="search_input_form" style={{width: 150, border: 'none'}}>
                      <input
                        className="app_input3"
                        value={item.route}
                        name="route"
                        type="number"
                        onChange={(e) => {
                          let val = e.target.value
                          handleChange("route", val, idx)
                        }}
                      />
                      <CiSearch className="search_icon" />
                      {/* <Modal isOpen={modal2} toggle={toggle2} size="xl">
                        <ReservationModal setForm={setForm} toggle={toggle2} />
                      </Modal> */}
                    </div>
                  </td>
                  <td style={{border: '1px solid #0d3a73'}}>
                    <select
                      style={{
                        width: 150,
                        border: 'none'
                      }}
                      id="exampleSelect"
                      className="app_input_table"
                      value={item.mov_type}
                      name="mov_type"
                      type="select"
                      onChange={(e) => {
                        let val = e.target.value
                        handleChange("mov_type", val, idx)
                      }}
                    >
                      <option>----select-----</option>
                        <option value="direct ">Direct </option>
                        <option value="allotment ">Allotment </option>
                        <option value="broker ">Broker </option>
                        <option value="agent ">Agent </option>
                    </select>
                  </td>
                  <td style={{border: '1px solid #0d3a73'}}>
                    <div className="search_input_form" style={{width: 150, border: 'none'}}>
                      <input
                        className="app_input3"
                        value={item.pickup_from}
                        name="pickup_from"
                        onChange={(e) => {
                          let val = e.target.value
                          handleChange("pickup_from", val, idx)
                        }}
                      />
                      <CiSearch className="search_icon" />
                      {/* <Modal isOpen={modal2} toggle={toggle2} size="xl">
                        <ReservationModal setForm={setForm} toggle={toggle2} />
                      </Modal> */}
                    </div>
                  </td>
                  <td style={{border: '1px solid #0d3a73'}}>
                    <div className="search_input_form" style={{width: 150, border: 'none'}}>
                      <input
                        className="app_input3"
                        value={item.pickup_to}
                        name="reservation_number"
                        onChange={(e) => {
                          let val = e.target.value
                          handleChange("pickup_to", val, idx)
                        }}
                      />
                      <CiSearch className="search_icon" />
                      {/* <Modal isOpen={modal2} toggle={toggle2} size="xl">
                        <ReservationModal setForm={setForm} toggle={toggle2} />
                      </Modal> */}
                    </div>
                  </td>
                  <td style={{border: '1px solid #0d3a73'}}>
                    <InputForm
                      style={{
                        width: 100,
                        border: 'none'
                      }}
                      className="app_input"
                      value={item.aduil}
                      name="aduil"
                      type="number"
                      onChange={(e) => {
                        let val = e.target.value
                        handleChange("aduil", val, idx)
                      }}
                    />
                  </td>
                  <td style={{border: '1px solid #0d3a73'}}>
                    <InputForm
                      style={{
                        width: 100,
                        border: 'none'
                      }}
                      className="app_input"
                      value={item.child}
                      name="child"
                      type="number"
                      onChange={(e) => {
                        let val = e.target.value
                        handleChange("child", val, idx)
                      }}
                    />
                  </td>
                  <td style={{border: '1px solid #0d3a73'}}>
                    <InputForm
                      style={{
                        width: 150,
                        border: 'none'
                      }}
                      className="app_input"
                      value={item.pickup_date}
                      name="pickup_date"
                      type="date"
                      onChange={(e) => {
                        let val = e.target.value
                        handleChange("pickup_date", val, idx)
                      }}
                    />
                  </td>
                  <td style={{border: '1px solid #0d3a73'}}>
                    <select
                      style={{
                        width: 150,
                        border: 'none'
                      }}
                      id="exampleSelect"
                      className="app_input_table"
                      value={item.transport_company}
                      name="transport_company"
                      type="select"
                      onChange={(e) => {
                        let val = e.target.value
                        handleChange("transport_company", val, idx)
                      }}
                    >
                      <option>----select-----</option>
                        <option value="direct ">Direct </option>
                        <option value="allotment ">Allotment </option>
                        <option value="broker ">Broker </option>
                        <option value="agent ">Agent </option>
                    </select>
                  </td>
                  <td style={{border: '1px solid #0d3a73'}}>
                    <select
                      style={{
                        width: 150,
                        border: 'none'
                      }}
                      id="exampleSelect"
                      className="app_input_table"
                      value={item.transport_type}
                      name="transport_type"
                      type="select"
                      onChange={(e) => {
                        let val = e.target.value
                        handleChange("transport_type", val, idx)
                      }}
                    >
                      <option>----select-----</option>
                        <option value="direct ">Direct </option>
                        <option value="allotment ">Allotment </option>
                        <option value="broker ">Broker </option>
                        <option value="agent ">Agent </option>
                    </select>
                  </td>
                  <td style={{border: '1px solid #0d3a73'}}>
                    <InputForm
                      style={{
                        width: 100,
                        border: 'none'
                      }}
                      className="app_input"
                      value={item.qty}
                      name="qty"
                      type="number"
                      onChange={(e) => {
                        let val = e.target.value
                        handleChange("qty", val, idx)
                      }}
                    />
                  </td>
                  <td style={{border: '1px solid #0d3a73'}}>
                    <InputForm
                      style={{
                        width: 100,
                        border: 'none'
                      }}
                      className="app_input"
                      value={item.sale_rate}
                      name="sale_rate"
                      type="number"
                      onChange={(e) => {
                        let val = e.target.value
                        handleChange("sale_rate", val, idx)
                      }}
                    />
                  </td>
                  <td style={{border: '1px solid #0d3a73'}}>
                    <InputForm
                      style={{
                        width: 100,
                        border: 'none'
                      }}
                      className="app_input"
                      value={item.total}
                      name="total"
                      type="number"
                      onChange={(e) => {
                        let val = e.target.value
                        handleChange("total", val, idx)
                      }}
                    />
                  </td>
                  <td style={{border: '1px solid #0d3a73'}}>
                    <InputForm
                      style={{
                        width: 100,
                        border: 'none'
                      }}
                      className="app_input"
                      value={item.discount}
                      name="discount"
                      type="number"
                      onChange={(e) => {
                        let val = e.target.value
                        handleChange("discount", val, idx)
                      }}
                    />
                  </td>
                  <td style={{border: '1px solid #0d3a73'}}>
                    <InputForm
                      style={{
                        width: 100,
                        border: 'none'
                      }}
                      className="app_input"
                      value={item.vat}
                      name="vat"
                      type="number"
                      onChange={(e) => {
                        let val = e.target.value
                        handleChange("vat", val, idx)
                      }}
                    />
                  </td>
                  <td style={{border: '1px solid #0d3a73'}}>
                    <InputForm
                      style={{
                        width: 100,
                        border: 'none'
                      }}
                      className="app_input"
                      value={item.vat_amount}
                      name="vat_amount"
                      type="number"
                      onChange={(e) => {
                        let val = e.target.value
                        handleChange("vat_amount", val, idx)
                      }}
                    />
                  </td>
                  <td style={{border: '1px solid #0d3a73'}}>
                    <InputForm
                      style={{
                        width: 100,
                        border: 'none'
                      }}
                      className="app_input"
                      value={item.net_total}
                      name="net_total"
                      type="number"
                      onChange={(e) => {
                        let val = e.target.value
                        handleChange("net_total", val, idx)
                      }}
                    />
                  </td>
                  <td style={{border: '1px solid #0d3a73'}}>
                    <InputForm
                      style={{
                        width: 100,
                        border: 'none'
                      }}
                      className="app_input"
                      value={item.purch_rate}
                      name="purch_rate"
                      onChange={(e) => {
                        let val = e.target.value
                        handleChange("purch_rate", val, idx)
                      }}
                      type="number"
                    />
                  </td>
                  <td style={{border: '1px solid #0d3a73'}}>
                    <InputForm
                      style={{
                        width: 100,
                        border: 'none'
                      }}
                      className="app_input"
                      value={item.vat1}
                      name="vat1"
                      type="number"
                      onChange={(e) => {
                        let val = e.target.value
                        handleChange("vat1", val, idx)
                      }}
                    />
                  </td>
                  <td style={{border: '1px solid #0d3a73'}}>
                    <InputForm
                      style={{
                        width: 100,
                        border: 'none'
                      }}
                      className="app_input"
                      value={item.vat_cost}
                      name="vat_cost"
                      type="number"
                      onChange={(e) => {
                        let val = e.target.value
                        handleChange("vat_cost", val, idx)
                      }}
                    />
                  </td>
                  <td style={{border: '1px solid #0d3a73'}}>
                    <select
                      style={{
                        width: 150,
                        border: 'none'
                      }}
                      id="exampleSelect"
                      className="app_input_table"
                      value={item.flight}
                      name="flight"
                      type="select"
                      onChange={(e) => {
                        let val = e.target.value
                        handleChange("flight", val, idx)
                      }}
                    >
                      <option>----select-----</option>
                        <option value="direct ">Direct </option>
                        <option value="allotment ">Allotment </option>
                        <option value="broker ">Broker </option>
                        <option value="agent ">Agent </option>
                    </select>
                  </td>
                  <td style={{border: '1px solid #0d3a73'}}>
                    <InputForm
                      style={{
                        width: 100,
                        border: 'none'
                      }}
                      className="app_input"
                      value={item.flight_no}
                      name="flight_no"
                      type="number"
                      onChange={(e) => {
                        let val = e.target.value
                        handleChange("flight_no", val, idx)
                      }}
                    />
                  </td>
                  <td style={{border: '1px solid #0d3a73'}}>
                    <InputForm
                      style={{
                        width: 100,
                        border: 'none'
                      }}
                      className="app_input"
                      value={item.city}
                      name="city"
                      onChange={(e) => {
                        let val = e.target.value
                        handleChange("city", val, idx)
                      }}
                    />
                  </td>
                  <td style={{border: '1px solid #0d3a73'}}>
                    <InputForm
                      style={{
                        width: 150,
                        border: 'none'
                      }}
                      className="app_input"
                      value={item.arrive_or_dep_time}
                      name="arrive_or_dep_time"
                      type="time"
                      onChange={(e) => {
                        let val = e.target.value
                        handleChange("arrive_or_dep_time", val, idx)
                      }}
                    />
                  </td>
                  <td style={{border: '1px solid #0d3a73'}}>
                    <InputForm
                      style={{
                        width: 100,
                        border: 'none'
                      }}
                      className="app_input"
                      value={item.remark}
                      name="remark"
                      onChange={(e) => {
                        let val = e.target.value
                        handleChange("remark", val, idx)
                      }}
                    />
                  </td>
                  <td>
                  <div>
                      <button
                        // className="app_button"
                        style={{ 
                          width: 50 ,

                        }}
                        onClick={()=>handleDelete(idx)}
                      >
                        <MdDeleteOutline />
                      </button>
                  </div>
                </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 text-center" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <button
                  className="p-2 app_button"
                  style={{ width: 100 }}
                  onClick={handleAdd}
                  >
                  Add Row
              </button>
              <button
                  className="p-2 app_button"
                  style={{ width: 100 }}
                  onClick={handleSubmiting}
                  >
                  Submit
              </button>
          </div>
        </Row>
      </Card>
  )
}