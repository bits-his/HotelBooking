import React, { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { Card, Col, Modal, Row, Table, Input } from "reactstrap";
import InputForm from "../../CustomComponents/InputForm";
import { _get, _post } from "../../Utils/Helper";
import HotelReg from "../HotelReg";

export default function ReservationTable({
  form = {},
  setForm = (f) => f,
  setNew_data = (f) => f,
  new_data = (f) => f,
}) {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  const getData = () => {
    _get(
      "api/get_views",
      (res) => {
        //   navigate(`/agent`)
        console.log(res);
        setData(res.results[0]);
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
        setData1(res.results[0]);
      },
      (err) => {
        // setLoading(false)
        console.log(err);
      }
    );
    // console.log(form)
  };

  const getRoom_type = () => {
    _post(
      "api/room_type?query_type=select",
      {},
      (res) => {
        // navigate(-1)
        console.log(res);
        setData2(res.results);
      },
      (err) => {
        // setLoading(false)
        console.log(err);
      }
    );
    // console.log(form)
  };
  const [hotel, setHotel] = useState([]);
  const getHotels = () => {
    _post(
      "api/hotels?in_query_type=select-all",
      {},
      (res) => {
        console.log(res);
        setHotel(res.resp);
      },
      (err) => {
        // setLoading(false)
        console.log(err);
      }
    );
    // console.log(form)
  };

  useEffect(() => {
    getData();
    getMeals_table();
    getRoom_type();
    getHotels();
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    if (name === "night") {
      setForm((p) => ({
        ...p,
        [name]: value,
        check_out: moment(form.check_in)
          .add("days", parseInt(value))
          .format("YYYY-MM-DD"),
      }));
    } else setForm((p) => ({ ...p, [name]: value }));
  };
  const addData = () => {
    setNew_data((prev) => [
      ...prev,
      {
        hotel: form.hotel,
        check_in: form.check_in,
        gender: form.gender,
        check_out: form.check_out,
        night: form.night,
        room_type: form.room_type,
        meal_type: form.meal_type,
        no_of_room: form.no_of_room,
        room_scale_source: form.room_scale_source,
        supplier: form.supplier,
        meal_scale_source: form.meal_scale_source,
        supplier1: form.supplier1,
        sale_rate_exc_tax: form.sale_rate_exc_tax,
        sale_municipal_vat: form.sale_municipal_vat,
        sale_purch_vat: form.sale_purch_vat,
        sale_rat_inc_all_tax: form.sale_rat_inc_all_tax,
        total_room_sale_rate: form.total_room_sale_rate,
        cost_rate_exc_tax: form.cost_rate_exc_tax,
        cost_municipal_vat: form.cost_municipal_vat,
        cost_purch_vat: form.cost_purch_vat,
        cost_rat_inc_all_tax: form.cost_rat_inc_all_tax,
        total_room_cost_rate: form.total_room_cost_rate,
        meal_rate_exc_tax: form.meal_rate_exc_tax,
        meal_municipal_vat: form.meal_municipal_vat,
        meal_purch_vat: form.meal_purch_vat,
        meal_rat_inc_all_tax: form.meal_rat_inc_all_tax,
        total_meal_cost_rate: form.total_meal_cost_rate,
        net_total_sale: form.net_total_sale,
        net_total_cost: form.net_total_cost,
        view: form.view,
      },
    ]);

    console.log(form);
  };

  const handleDelete = (index) => {
    let item = new_data.filter((i, idx) => index !== idx);
    setNew_data(item);
    console.log(index);
  };
  const [modal3, setModal3] = useState(false);
  const toggle3 = () => setModal3(!modal3);
  let percent = parseInt(form.meal_municipal_vat) / 100;
  let percent2 = parseInt(form.meal_purch_vat) / 100;
  let percent3 = parseInt(form.sale_municipal_vat) / 100;
  let percent4 = parseInt(form.sale_purch_vat) / 100;
  let percent5 = parseInt(form.cost_municipal_vat) / 100;
  let percent6 = parseInt(form.cost_purch_vat) / 100;
  // let final =  meal_rate_exc_tax
  const tax = parseInt(form.meal_rate_exc_tax) * percent;
  let rate_tax = tax + parseInt(form.meal_rate_exc_tax);
  const purch_tax = percent2 * rate_tax;
  const ratInc = purch_tax + rate_tax;



  const sale_tax = parseInt(form.sale_rate_exc_tax) * percent3;
  let sale_rate_tax = sale_tax + parseInt(form.sale_rate_exc_tax);
  const sale_purch_tax = percent4 * sale_rate_tax;
  const sale_ratInc = sale_purch_tax + sale_rate_tax;

  const cost_tax = parseInt(form.cost_rate_exc_tax) * percent5;
  let cost_rate_tax = cost_tax + parseInt(form.cost_rate_exc_tax);
  const cost_purch_tax = percent6 * cost_rate_tax;
  const cost_ratInc = cost_purch_tax + cost_rate_tax;
  useEffect(() => {
    setForm((p) => ({
      ...p,
      meal_rat_inc_all_tax: ratInc,
      sale_rat_inc_all_tax: sale_ratInc,
      cost_rat_inc_all_tax: cost_ratInc,
    }));
  });
  const [modal, setModal] = useState(false);
  const [modal4, setModal4] = useState(false);
  const toggle = () => setModal(!modal);
  const toggle9 = () => setModal(!modal4);
  const filt = new_data && new_data.map((i) => i.meal_rat_inc_all_tax);
  const calc =
    new_data &&
    new_data.reduce(
      (total, item) => parseFloat(item.meal_rat_inc_all_tax) + total,
      0
    );
  const costCalc =
    new_data &&
    new_data.reduce(
      (total, item) => parseFloat(item.cost_rat_inc_all_tax) + total,
      0
    );
  const saleCalc =
    new_data &&
    new_data.reduce(
      (total, item) => parseFloat(item.sale_rat_inc_all_tax) + total,
      0
    );
  return (
    <div>
      {JSON.stringify(calc)}
      <Row>
        <Col md={12}>
          <h5 className="app_title" style={{ fontSize: 30 }}>
            <center>Hotel Booking</center>
          </h5>
        </Col>
        <Col md={4}>
          <label className="Label mt-2">Hotel</label>
          <div className="search_input_form">
            <input
              className="app_input3"
              value={form.hotel}
              onChange={handleChange}
              name="hotel"
              // type="number"
            />
            <CiSearch className="search_icon" onClick={toggle3} />
            <Modal isOpen={modal3} toggle={toggle3} size="xl">
              <HotelReg setForms={setForm} toggles={toggle3} />
            </Modal>
          </div>
          {/* <label className="Label mt-2">Hotel</label> */}
          {/* <div className='search_input_form'> */}

          {/* </div> */}
          <InputForm
            // style={{width: '200px', border: 'none ', outline: 'none', height: 15}}
            className="app_input"
            label="Night"
            value={form.night}
            onChange={handleChange}
            name="night"
            type="number"
          />
          <label className="Label mt-2">Meal Type</label>
          <select
            id="exampleSelect"
            className="app_input"
            value={form.meal_type}
            name="meal_type"
            type="select"
            onChange={handleChange}
          >
            <option>Select </option>
            {data1.map((item) => (
              <option value={item.meal_name}>{item.meal_name} </option>
            ))}
          </select>
          <label className="Label mt-2">Supllier</label>
          <div className="search_input_form">
            <input
              className="app_input3"
              value={form.supplier}
              onChange={handleChange}
              name="supplier"
            />
            <CiSearch className="search_icon" onClick={toggle} />
            <Modal isOpen={modal} toggle={toggle} size="xl">
              <AgentModal setForm={setForm} toggle={toggle} names="supplier" />
            </Modal>
          </div>
          <InputForm
            label="	Rate ExcTax"
            className="app_input"
            onChange={handleChange}
            value={form.meal_rate_exc_tax}
            name="meal_rate_exc_tax"
            type="Number"
          />
          <InputForm
            className="app_input"
            label="Rat Inc. All Tax"
            onChange={handleChange}
            value={form.meal_rat_inc_all_tax}
            name="meal_rat_inc_all_tax"
            type="Number"
          />

          <InputForm
            label="Municipal VAT 5%"
            className="app_input"
            onChange={handleChange}
            value={form.sale_municipal_vat}
            name="sale_municipal_vat"
            type="Number"
          />
          <InputForm
            className="app_input"
            label="Total Room Cost Rate"
            onChange={handleChange}
            value={form.total_room_cost_rate}
            name="total_room_cost_rate"
            type="Number"
          />
          <InputForm
            className="app_input"
            label="Purch VAT 15%a"
            onChange={handleChange}
            value={form.cost_purch_vat}
            name="cost_purch_vat"
            type="Number"
          />
          <InputForm
            className="app_input"
            label="Net Total Sale"
            onChange={handleChange}
            value={form.net_total_sale}
            name="net_total_sale"
            type="Number"
          />
        </Col>
        <Col md={4}>
          <InputForm
            // style={{width: '200px', border: 'none ', outline: 'none', height: 15}}
            className="app_input"
            label="Check In"
            value={form.check_in}
            onChange={handleChange}
            name="check_in"
            type="date"
          />
          <label className="Label mt-2">View</label>
          {/* <label */}
          <select
            id="exampleSelect"
            className="app_input"
            value={form.view}
            name="view"
            type="select"
            onChange={handleChange}
          >
            <option>Select </option>
            {data.map((item) => (
              <option value={item.view_name}>{item.view_name} </option>
            ))}
          </select>
          <InputForm
            className="app_input"
            label="No of Room"
            onChange={handleChange}
            value={form.no_of_room}
            name="no_of_room"
            type="Number"
          />
          <label className="Label mt-2">Meal Sale Source</label>
          <select
            id="exampleSelect"
            className="app_input"
            onChange={handleChange}
            value={form.meal_scale_source}
            name="meal_scale_source"
            type="select"
          >
            <option>Select </option>
            <option>Hotel </option>
            <option>restaurant </option>
            {/* {data.map(item => ( <option value={item.view_name}>{item.view_name} </option>))} */}
          </select>
          <InputForm
            label="Municipal VAT 5%"
            className="app_input"
            onChange={handleChange}
            value={form.meal_municipal_vat}
            name="meal_municipal_vat"
            type="Number"
          />
          <InputForm
            label="Tax"
            className="app_input"
            onChange={handleChange}
            value={rate_tax}
            name="cost_municipal_vat"
            type="re"
          />

          <InputForm
            className="app_input"
            label="	Total Room Sale Rate"
            onChange={handleChange}
            value={form.total_room_sale_rate}
            name="total_room_sale_rate"
            type="Number"
          />
          <InputForm
            label="Purch VAT 15%"
            className="app_input"
            onChange={handleChange}
            value={form.sale_purch_vat}
            name="sale_purch_vat"
            type="Number"
          />
          <InputForm
            label="	Rate ExcTax"
            className="app_input"
            onChange={handleChange}
            value={form.cost_rate_exc_tax}
            name="cost_rate_exc_tax"
            type="Number"
          />

          <InputForm
            className="app_input"
            label="Rat Inc. All Tax"
            onChange={handleChange}
            value={form.cost_rat_inc_all_tax}
            name="cost_rat_inc_all_tax"
            type="Number"
          />
          <InputForm
            label="Net Total Cost"
            className="app_input"
            onChange={handleChange}
            value={form.net_total_cost}
            name="net_total_cost"
            type="Number"
          />
        </Col>
        <Col md={4}>
          <InputForm
            // style={{width: '200px', border: 'none ', outline: 'none', height: 15}}
            className="app_input"
            label="Check Out"
            value={form.check_out}
            onChange={handleChange}
            name="check_out"
            type="date"
          />
          <label className="Label mt-2">Room Type</label>
          <select
            id="exampleSelect"
            className="app_input"
            value={form.room_type}
            name="room_type"
            type="select"
            onChange={handleChange}
          >
            <option>Select </option>
            {data2?.map((item) => (
              <option value={item.room_name}>{item.room_name} </option>
            ))}
          </select>
          <label className="Label mt-2">Room Sale Source</label>
          <select
            id="exampleSelect"
            className="app_input"
            onChange={handleChange}
            value={form.room_scale_source}
            name="room_scale_source"
            type="select"
          >
            <option>Select </option>
            <option>Agent</option>
            <option>supplier</option>
            {/* {data.map(item => ( <option value={item.view_name}>{item.view_name} </option>))} */}
          </select>
          <label>Supllier</label>
          <div className="search_input_form">
            <input
              className="app_input3"
              value={form.supplier1}
              onChange={handleChange}
              name="supplier1"
            />
            <CiSearch className="search_icon" onClick={toggle} />
            <Modal isOpen={modal4} toggle={toggle9} size="xl">
              <AgentModal
                setForm={setForm}
                toggle={toggle9}
                names="supplier1"
              />
            </Modal>
          </div>
          <InputForm
            className="app_input"
            label=" Purch VAT 15%s"
            onChange={handleChange}
            value={form.meal_purch_vat}
            name="meal_purch_vat"
            type="Number"
          />
          <InputForm
            label="Purch Tax"
            className="app_input"
            onChange={handleChange}
            value={purch_tax}
            name="cost_municipal_vat"
            type="re"
          />
          <InputForm
            // style={{width: 100 ,border: 'none ', outline: 'none', height: 15}}
            className="app_input"
            label="Rate ExcTax"
            onChange={handleChange}
            value={form.sale_rate_exc_tax}
            name="sale_rate_exc_tax"
            type="Number"
          />
          <InputForm
            label="Rat Inc. All Tax"
            className="app_input"
            onChange={handleChange}
            value={form.sale_rat_inc_all_tax}
            name="sale_rat_inc_all_tax"
            type="Number"
          />
          <InputForm
            className="app_input"
            label="Municipal VAT 5%"
            onChange={handleChange}
            value={form.cost_municipal_vat}
            name="cost_municipal_vat"
            type="Number"
          />
          <InputForm
            className="app_input"
            label="Total Meal Cost Rate"
            onChange={handleChange}
            value={form.total_meal_cost_rate}
            name="total_meal_cost_rate"
            type="Number"
          />
        </Col>
        <Col md={12}>
          <center>
            <button
              className="app_button p-3 mt-3"
              style={{ width: 150 }}
              onClick={addData}
            >
              Add +
            </button>
          </center>
        </Col>
      </Row>
      <div>
        {/* {JSON.stringify(new_data)} */}
        <table className="mt-3">
          <thead style={{ border: "1px solid rgb(12, 134, 103)" }}>
            <tr>
              <th className="thead_">Hotel</th>
              <th className="thead_">Check In</th>
              <th className="thead_">Check Out</th>
              <th className="thead_">Night</th>
              <th className="thead_">View</th>
              <th className="thead_">Room Type</th>
              <th className="thead_">Meal Type</th>
              <th className="thead_">No of Room</th>
              <th className="thead_">Room Sale Source</th>
              <th className="thead_">Supplier</th>
              <th className="thead_">Meal Sale Source</th>
              <th className="thead_">Supplier</th>
              <th className="thead_">Rate ExcTax</th>
              <th className="thead_">Municipal VAT 5%</th>
              <th className="thead_">Purch VAT 15%</th>
              <th className="thead_">Rat Inc. All Tax</th>
              <th className="thead_">Total Room Sale Rate</th>
              <th className="thead_">Rate ExcTax</th>
              <th className="thead_">Municipal VAT 5%</th>
              <th className="thead_">Purch VAT 15%</th>
              <th className="thead_">Rat Inc. All Tax</th>
              <th className="thead_">Total Room Cost Rate</th>
              <th className="thead_">Rate ExcTax</th>
              <th className="thead_">Municipal VAT 5%</th>
              <th className="thead_">Purch VAT 15%</th>
              <th className="thead_">Rat Inc. All Tax</th>
              <th className="thead_">Total Meal Cost Rate</th>
              <th className="thead_">Net Total Sale</th>
              <th className="thead_">Net Total Cost</th>
              <th className="thead_">Action</th>
            </tr>
          </thead>
          {new_data &&
            new_data.map((item, index) => (
              <tbody>
                <tr>
                  <td
                    style={{
                      height: 10,
                      border: "1px solid rgb(12, 134, 103)",
                    }}
                  >
                    <select
                      id="exampleSelect"
                      className="app_input"
                      value={item.hotel}
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      name="hotel"
                      type="select"
                    >
                      {hotel.map((items) => (
                        <option value={items.hotel_name}>
                          {items.hotel_name}{" "}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.check_in}
                      name="check_in"
                      type="date"
                    />
                  </td>
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.check_out}
                      name="check_out"
                      type="date"
                    />
                  </td>
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.night}
                      name="night"
                    />
                  </td>
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.view}
                      name="view"
                    />
                    {/* {item.view} */}
                  </td>
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.room_type}
                      name="room_type"
                    />
                    {/* {item.room_type} */}
                  </td>
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.meal_type}
                      name="meal_type"
                    />
                    {/* {item.meal_type}  */}
                  </td>
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.no_of_room}
                      name="no_of_room"
                    />
                    {/* {item.room_type} */}
                  </td>
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.room_scale_source}
                      name="room_scale_source"
                    />
                    {/* {item.meal_type} */}
                  </td>
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.supplier}
                      name="supplier"
                    />
                    {/* {item.no_of_room} */}
                  </td>
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.meal_scale_source}
                      name="meal_scale_source"
                    />
                    {/* {item.room_scale_source} */}
                  </td>{" "}
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.supplier1}
                      name="supplier1"
                    />
                    {/* {item.supplier} */}
                  </td>
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.meal_rate_exc_tax}
                      name="meal_rate_exc_tax"
                    />
                  </td>
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.meal_municipal_vat}
                      name="meal_municipal_vat"
                    />
                  </td>
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.meal_purch_vat}
                      name="meal_purch_vat"
                    />
                  </td>
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.meal_rat_inc_all_tax}
                      name="meal_rat_inc_all_tax"
                    />
                  </td>
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.total_room_sale_rate}
                      name="total_room_sale_rate"
                    />
                  </td>
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.sale_rate_exc_tax}
                      name="sale_rate_exc_tax"
                    />
                  </td>
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.sale_municipal_vat}
                      name="sale_municipal_vat"
                    />
                  </td>
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.sale_purch_vat}
                      name="sale_purch_vat"
                    />
                  </td>
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.sale_rat_inc_all_tax}
                      name="sale_rat_inc_all_tax"
                    />
                  </td>
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.total_room_cost_rate}
                      name="total_room_cost_rate"
                    />
                  </td>
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.cost_rate_exc_tax}
                      name="cost_rate_exc_tax"
                    />
                  </td>
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.cost_municipal_vat}
                      name="cost_municipal_vat"
                    />
                  </td>
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.cost_purch_vat}
                      name="cost_purch_vat"
                    />
                  </td>
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.cost_rat_inc_all_tax}
                      name="cost_rat_inc_all_tax"
                    />
                  </td>
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.total_meal_cost_rate}
                      name="total_meal_cost_rate"
                    />
                  </td>
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.net_total_sale}
                      name="net_total_sale"
                    />
                  </td>
                  <td style={{ border: "1px solid rgb(12, 134, 103)" }}>
                    <InputForm
                      className="app_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index);
                      }}
                      value={item.net_total_cost}
                      name="net_total_cost"
                    />
                  </td>
                  <td
                    className="text-center text-danger"
                    style={{ border: "1px solid rgb(12, 134, 103)" }}
                  >
                    <BiTrash
                      size="1.5rem"
                      onClick={() => handleDelete(index)}
                    />
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
        <div style={{ float: "right" }}>
          Meal Rat Inc. All Tax :<b> {calc}</b>
        </div>
        <br />
        <div style={{ float: "right" }}>
          Sale Rat Inc. All Tax :<b> {saleCalc}</b>
        </div>
        <br />
        <div style={{ float: "right" }}>
          Cost Rat Inc. All Tax :<b> {costCalc}</b>
        </div>
        <Col md={12}>
          <center>
            <button
              className="app_button p-3 mt-3"
              style={{ width: 150 }}
              // onClick={handleSubmit}
            >
              Submit
            </button>
          </center>
        </Col>
      </div>
    </div>
  );
}
