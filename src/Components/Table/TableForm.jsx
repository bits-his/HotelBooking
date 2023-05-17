import React, { useEffect } from "react";
import InputForm from "../../CustomComponents/InputForm";
import { useState } from "react";
import { _get, _post } from "../../Utils/Helper";
import { MdDeleteOutline } from "react-icons/md";
import { Button } from "reactstrap";
import moment from "moment";

export default function TableForm({ data = (f) => f, setData = (f) => f,forms, handleReset }) {
  let _form = {
    hotel: "",
    check_in: "",
    check_out: "",
    night: "",
    view: "",
    room_type: "",
    meal_type: "",
    no_of_room: "",
    no_of_pax: "",
    room_scale_source: "",
    supplier: "",
    meal_sale_source: "",
    supplier1: "",
    room_sale_rate_exc_tax: 0,
    room_sale_municipal: 0.0,
    room_sale_purch_vat: 0.0,
    room_sale_rat_inc_all_tax: 0.0,
    total_room_sale_rate: "",
    meal_sale_rate_exc_tax: "",
    meal_sale_purch_vat: "",
    meal_sale_rat_inc_all_tax: "",
    total_meal_sale_rate: "",
    room_cost_rate_exc_tax: "",
    room_cost_municipal: "",
    room_cost_purch_vat: "",
    room_cost_rat_inc_all_tax: "",
    total_room_cost_rate: "",
    meal_cost_rate_exc_tax: "",
    meal_cost_purch_vat: "",
    meal_cost_rat_inc_all_tax: "",
    total_meal_cost_rate: "",
    net_total_sale: "",
    net_total_cost: "",
    query_type: "insert",
  };
  // useEffect(()=>{
  //   setData([_form])
  // },[])
  const [form, setForm] = useState(_form);
  const [view, setView] = useState([]);
  const [hotelList, setHotelList] = useState([]);
  const [roomType, setRoomType] = useState([]);
  const [meal, setMeal] = useState([]);
  // const [data, setData] = useState([_form])

  const handleChange = (name, value, index) => {
    let arr = [];
    data?.forEach((item, i) => {
      if(i === index) {
      let fivePofRate = parseFloat(value) * 0.05;
      let fifteenPofRoomRate =
        (parseFloat(value) + parseFloat(fivePofRate)) *
        0.15;
      let RatRoomIncAllTax =
        parseFloat(value) +
        parseFloat(fivePofRate) +
        parseFloat(fifteenPofRoomRate);
      let totalRoomSales = parseFloat(item.night) * parseFloat(item.no_of_room) * RatRoomIncAllTax;
      let net_total_sale = totalRoomSales + (item.total_meal_sale_rate||0)

        arr.push({
          ...item,
          [name]: value,
          room_sale_municipal: fivePofRate,
          room_sale_purch_vat: fifteenPofRoomRate,
          room_sale_rat_inc_all_tax: RatRoomIncAllTax,
          total_room_sale_rate: totalRoomSales,
          check_out: moment(item.check_in)
            .add("days", parseInt(value))
            .format("YYYY-MM-DD"),
          net_total_sale
        });
      } else {
        arr.push(item);
      }
    });
    setData(arr);
  };

  const handleChange1 = (name, value, index) => {
    let arr = [];
    data?.forEach((item, i) => {
      if(i === index) {
      let fifteenPofMealRate = parseFloat(value) * 0.15;
      let RatMealsIncAllTax =
        parseFloat(value) +
        parseFloat(fifteenPofMealRate);
      let totalsMealSales = parseFloat(item.night )* parseFloat(item.no_of_pax) * RatMealsIncAllTax;
      let net_total_sale =   (item.total_room_sale_rate||0) + totalsMealSales

      arr.push({
          ...item,
          [name]: value,
          meal_sale_purch_vat: parseFloat(fifteenPofMealRate.toFixed()),
          meal_sale_rat_inc_all_tax: parseFloat(RatMealsIncAllTax),
          total_meal_sale_rate: parseFloat(totalsMealSales),
          net_total_sale
        });
      } else {
        arr.push(item);
      }
    });
    setData(arr);
  };

  const handleChange2 = (name, value, index) => {
    let arr = [];
    data?.forEach((item, i) => {
      if(i === index) {
      let fivePofRoomCost = parseFloat(value) * 0.05;
      let fifteenPofRoomCost =
        (parseFloat(value) +
          parseFloat(fivePofRoomCost)) *
        0.15;
      let RatRoomCostIncAllTax =
        parseFloat(value) +
        parseFloat(fivePofRoomCost) +
        parseFloat(fifteenPofRoomCost);
      let totalRoomCost = parseFloat(item.night) * parseFloat(item.no_of_room) * RatRoomCostIncAllTax;
      let net_total_cost = totalRoomCost + (item.total_meal_cost_rate||0)

        arr.push({
          ...item,
          [name]: value,
          room_cost_municipal: fivePofRoomCost,
          room_cost_purch_vat: fifteenPofRoomCost,
          room_cost_rat_inc_all_tax: RatRoomCostIncAllTax,
          total_room_cost_rate: totalRoomCost,
          net_total_cost
        });
      } else {
        arr.push(item);
      }
    });
    setData(arr);
  };

  const handleChange3 = (name, value, index) => {
    let arr = [];
    data?.forEach((item, i) => {
      if(i === index) {
      let fifteenPofMealCost = parseFloat(value) * 0.15;
      let RatMealsCostIncAllTax =
        parseFloat(value) +
        parseFloat(fifteenPofMealCost);
      let totalsMealCost = parseFloat(item.night) * parseFloat(item.no_of_pax) * RatMealsCostIncAllTax;
      let net_total_cost = (item.total_room_cost_rate||0) + totalsMealCost

        arr.push({
          ...item,
          [name]: value,
          meal_cost_purch_vat: parseFloat(fifteenPofMealCost.toFixed()),
          meal_cost_rat_inc_all_tax: parseFloat(RatMealsCostIncAllTax),
          total_meal_cost_rate: parseFloat(totalsMealCost),
          net_total_cost
        });
      } else {
        arr.push(item);
      }
    });
    setData(arr);
  };

  const handleChange4 = (name, value, index) => {
    let arr = [];
    data?.forEach((item, i) => {
      if(i === index) {
      let NetTotalSale =
        parseFloat(totalRoomSales) + parseFloat(totalsMealSales);
      let NetTotalCost =
        parseFloat(item.total_room_cost_rate) + parseFloat(totalsMealCost);

        arr.push({
          ...item,
          [name]: value,
          net_total_sale: parseFloat(NetTotalSale),
          net_total_cost: parseFloat(NetTotalCost),
        });
      } else {
        arr.push(item);
      }
    });
    setData(arr);
  };

  const handleChanger = (name, value, index) => {
    let arr = [];
    data?.forEach((item, i) => {
      if(i === index) {
        arr.push({
          ...item,
          [name]: value
        });
      } else {
        arr.push(item);
      }
    });
    setData(arr);
  };

  // const handleChange = ({target:{name, value}}) => {
  //   setForm(p => ({[name]: value}))
  // }

  const handleAdd = () => {
    if (data.length) {
      
      setData((p) => [...p, data[0]]);
    }else{
      setData([form])
    }
  };

  function handleDelete(id) {
      const deleteRow = data.filter((p, idc) => idc !== id);
      setData(deleteRow);
    }

  // const handleSubmit = () => {
  //   setForm(form);
  //   console.log(form);
  // };
    // }
  const handleSubmit = async () => {
    let newArr = [];
    data.forEach((i) => newArr.push({ ...i, ...forms, query_type: 'insert' }));

    try {
      await _post(`api/booking_with_reservation`, newArr);
      console.log("Form submitted successfully");
      // setNo(resp.nextCode);
      toggle3();
    } catch (err) {
      console.log(err);
      alert("Successful");
    }
    setForm(_form)
    handleReset()
    setData([])

    // setPrint(!print);
    console.log(newArr, "LSLLSLSLSLS");
  }

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

  const getRoomType = () => {
    _post(
      "api/room_type?query_type=select-all",
      {},
      (resp) => {
        // setLoading(false)
        console.log(resp);
        // if (resp ) {
        setRoomType(resp.results);
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

  const getMeals = () => {
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
  useEffect(
    () => {
      getViews();
      getHotels();
      getRoomType();
      getMeals();
    },[]
  );

  return (
    <>
    <button
        style={{ float: "right", width: 150}}
        className="app_button mt-3 p-2 shadow"
        onClick={handleAdd}
      >
        Add
      </button>
    <div>
      {/* {JSON.stringify({roomType, ff:'FFFF'})} */}
      <div>
        <div style={{ overflowX: "auto"}}>
          <table id="customers">
            {/* <thead style={{ border: '1px solid rgb(12, 134, 103)' }}> */}
            <tr>
              <th style={{ border: "none" }} colspan="13"></th>
              <th
                style={{
                  textAlign: "center",
                  backgroundColor: "rgb(211, 211, 211)",
                }}
                colspan="4"
              >
                Room Rate Sale
              </th>
              <th style={{ border: "none" }} colspan="1"></th>
              <th
                style={{
                  textAlign: "center",
                  backgroundColor: "rgb(211, 211, 211)",
                }}
                colspan="3"
              >
                Meal Rate Sale
              </th>
              <th style={{ border: "none" }} colspan="1"></th>
              <th
                style={{
                  textAlign: "center",
                  backgroundColor: "rgb(211, 211, 211)",
                }}
                colspan="4"
              >
                Room Rate Cost
              </th>
              <th style={{ border: "none" }} colspan="1"></th>
              <th
                style={{
                  textAlign: "center",
                  backgroundColor: "rgb(211, 211, 211)",
                }}
                colspan="3"
              >
                Meal Rate Cost
              </th>
              <th style={{ border: "none" }} colspan="1"></th>
              <th
                style={{
                  textAlign: "center",
                  backgroundColor: "rgb(211, 211, 211)",
                }}
                colspan="2"
              >
                Net Total
              </th>
            </tr>
            <tr>
              <th>Hotel</th>
              <th>Check In</th>
              <th>Night</th>
              <th>Check Out</th>
              <th>View</th>
              <th>Room Type</th>
              <th>Meal Type</th>
              <th>No of Room</th>
              <th>No of Pax</th>
              <th>Room Sale Source</th>
              <th>Supplier</th>
              <th>Meal Sale Source</th>
              <th>Supplier</th>

              <th>Rate ExcTax</th>
              <th>Municipal VAT 5%</th>
              <th>Purch VAT 15%</th>
              <th>Rat Inc. All Tax</th>

              <th>Total Room Sale Rate</th>

              <th>Rate</th>
              <th>Purch VAT 15%</th>
              <th>Rat Inc. All Tax</th>

              <th>Total Meal Sale Rate</th>

              <th>Rate ExcTax</th>
              <th>Municipal VAT 5%</th>
              <th>Purch VAT 15%</th>
              <th>Rat Inc. All Tax</th>

              <th>Total Room Cost Rate</th>

              <th>Rate</th>
              <th>Purch Vate 15%</th>
              <th>Rat Inc. All Tax</th>

              <th>Total Meal Cost Rate</th>

              <th>Net Total Sale</th>
              <th>Net Total Cost</th>
              <th>Action</th>
            </tr>
            {data.map((item, idx) => (
              <tr key={idx}>
                <td>
                  <select
                    style={{
                      width: 150,
                      border: "none",
                    }}
                    id="exampleSelect"
                    className="app_input_table"
                    value={item.hotel}
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChanger("hotel", val, idx);
                    }}
                    name="hotel"
                    type="select"
                  >
                    <option>----select-----</option>
                    {hotelList.map((i) => (
                      <option value={i.hotel_name}>{i.hotel_name}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <InputForm
                    style={{
                      width: 130,
                      border: "none",
                    }}
                    className="app_input_table"
                    value={item.check_in}
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChanger("check_in", val, idx);
                    }}
                    name="check_in"
                    type="date"
                  />
                </td>
                <td>
                  <InputForm
                    style={{
                      width: 100,
                      border: "none",
                    }}
                    className="app_input_table"
                    value={item.night}
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChanger("night", val, idx);
                    }}
                    name="night"
                    type="float"
                  />
                </td>
                <td>
                  <InputForm
                    style={{
                      width: 130,
                      border: "none",
                    }}
                    className="app_input_table"
                    value={item.check_out}
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChanger("check_out", val, idx);
                    }}
                    name="check_out"
                    type="date"
                  />
                </td>
                <td>
                  <select
                    style={{
                      width: 150,
                      border: "none",
                    }}
                    id="exampleSelect"
                    className="app_input_table"
                    value={item.view}
                    name="view"
                    type="select"
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChanger("view", val, idx);
                    }}
                  >
                    <option>----select-----</option>
                    {view.map((i) => (
                      <option value={i.view_name}>{i.view_name}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <select
                    style={{
                      width: 150,
                      border: "none",
                    }}
                    id="exampleSelect"
                    className="app_input_table"
                    value={item.room_type}
                    name="room_type"
                    type="select"
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChanger("room_type", val, idx);
                    }}
                  >
                    <option>----select-----</option>
                    {roomType &&
                      roomType.map((i) => (
                        <option value={i.room_name}>{i.room_type}</option>
                      ))}
                  </select>
                </td>
                <td>
                  <select
                    style={{
                      width: 150,
                      border: "none",
                    }}
                    id="exampleSelect"
                    className="app_input_table"
                    value={item.meal_type}
                    name="meal_type"
                    type="select"
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChanger("meal_type", val, idx);
                    }}
                  >
                    <option>----select-----</option>
                    {meal.map((i) => (
                      <option value={i.meal_name}>{i.meal_name}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <InputForm
                    style={{
                      width: 100,
                      border: "none",
                    }}
                    className="app_input_table"
                    value={item.no_of_room}
                    name="no_of_room"
                    type="float"
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChanger("no_of_room", val, idx);
                    }}
                  />
                </td>
                <td>
                  <InputForm
                    style={{
                      width: 100,
                      border: "none",
                    }}
                    className="app_input_table"
                    value={item.no_of_pax}
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChanger("no_of_pax", val, idx);
                    }}
                    name="no_of_pax"
                    type="float"
                  />
                </td>
                <td>
                  <select
                    style={{
                      width: 150,
                      border: "none",
                    }}
                    id="exampleSelect"
                    className="app_input_table"
                    value={item.room_scale_source}
                    name="room_scale_source"
                    type="select"
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChanger("room_scale_source", val, idx);
                    }}
                  >
                    <option>----select-----</option>
                    <option value="direct ">Direct </option>
                    <option value="allotment ">Allotment </option>
                    <option value="broker ">Broker </option>
                    <option value="agent ">Agent </option>
                  </select>
                </td>
                <td>
                  <select
                    style={{
                      width: 150,
                      border: "none",
                    }}
                    id="exampleSelect"
                    className="app_input_table"
                    value={item.supplier}
                    name="supplier"
                    type="select"
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChanger("supplier", val, idx);
                    }}
                  >
                    <option>----select-----</option>
                    <option value="al_barakah_co">Al Barakah Co</option>
                    <option value="shaer_co">Shaer Co</option>
                    <option value="chiroma_travel">Chiroma Travel</option>
                    <option value="al_roudha_travel ">Al Roudha Travel </option>
                    <option value="roya_internaional">Roya Internaional</option>
                    <option value="al_rayan_ethiopia">Al Rayan Ethiopia</option>
                  </select>
                </td>
                <td>
                  <select
                    style={{
                      width: 150,
                      border: "none",
                    }}
                    id="exampleSelect"
                    className="app_input_table"
                    value={item.meal_sale_source}
                    name="meal_sale_source"
                    type="select"
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChanger("meal_sale_source", val, idx);
                    }}
                  >
                    <option>----select-----</option>
                    <option value="direct">Direct</option>
                    <option value="out_restaurant">Out Restaurant</option>
                  </select>
                </td>
                <td>
                  <select
                    style={{
                      width: 150,
                      border: "none",
                    }}
                    id="exampleSelect"
                    className="app_input_table"
                    value={item.supplier1}
                    name="supplier1"
                    type="select"
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChanger("supplier1", val, idx);
                    }}
                  >
                    <option>----select-----</option>
                    <option value="turkish_al_mazaq">Turkish Al Mazaq</option>
                    <option value="morocco_al_mazaq">Morocco Al Mazaq</option>
                    <option value="indonesia_rest">Indonesia Rest</option>
                    <option value="indian_rest">Indian Rest </option>
                    <option value="pakistani_rest">Pakistani Res</option>
                  </select>
                </td>
                <td>
                  <InputForm
                    style={{
                      width: 100,
                      border: "none",
                    }}
                    className="app_input_table"
                    value={item.room_sale_rate_exc_tax}
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChange("room_sale_rate_exc_tax", val, idx);
                    }}
                    name="room_sale_rate_exc_tax"
                    type="float"
                  />
                </td>
                <td>
                  <InputForm
                    style={{
                      width: 100,
                      border: "none",
                    }}
                    className="app_input_table"
                    value={item.room_sale_municipal}
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChange("room_sale_municipal", val, idx);
                    }}
                    name="room_sale_municipal"
                    type="float"
                  />
                </td>
                <td>
                  <InputForm
                    style={{
                      width: 100,
                      border: "none",
                    }}
                    className="app_input_table"
                    value={item.room_sale_purch_vat}
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChange("room_sale_purch_vat", val, idx);
                    }}
                    name="room_sale_purch_vat"
                    type="float"
                  />
                </td>
                <td>
                  <InputForm
                    style={{
                      width: 100,
                      border: "none",
                    }}
                    className="app_input_table"
                    value={item.room_sale_rat_inc_all_tax}
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChange("room_sale_rat_inc_all_tax", val, idx);
                    }}
                    name="room_sale_rat_inc_all_tax"
                    type="float"
                  />
                </td>
                <td>
                  <InputForm
                    style={{
                      width: 100,
                      border: "none",
                    }}
                    className="app_input_table"
                    value={item.total_room_sale_rate}
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChange("total_room_sale_rate", val, idx);
                    }}
                    name="total_room_sale_rate"
                    type="float"
                  />
                </td>
                <td>
                  <InputForm
                    style={{
                      width: 100,
                      border: "none",
                    }}
                    className="app_input_table"
                    value={item.meal_sale_rate_exc_tax}
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChange1("meal_sale_rate_exc_tax", val, idx);
                    }}
                    name="meal_sale_rate_exc_tax"
                    type="float"
                  />
                </td>
                <td>
                  <InputForm
                    style={{
                      width: 100,
                      border: "none",
                    }}
                    className="app_input_table"
                    value={item.meal_sale_purch_vat}
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChange1("meal_sale_purch_vat", val, idx);
                    }}
                    name="meal_sale_purch_vat"
                    type="float"
                  />
                </td>
                <td>
                  <InputForm
                    style={{
                      width: 100,
                      border: "none",
                    }}
                    className="app_input_table"
                    value={item.meal_sale_rat_inc_all_tax}
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChange1("meal_sale_rat_inc_all_tax", val, idx);
                    }}
                    name="meal_sale_rat_inc_all_tax"
                    type="float"
                  />
                </td>
                <td>
                  <InputForm
                    style={{
                      width: 100,
                      border: "none",
                    }}
                    className="app_input_table"
                    value={item.total_meal_sale_rate}
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChange1("total_meal_sale_rate", val, idx);
                    }}
                    name="total_meal_sale_rate"
                    type="float"
                  />
                </td>
                <td>
                  <InputForm
                    style={{
                      width: 100,
                      border: "none",
                    }}
                    className="app_input_table"
                    value={item.room_cost_rate_exc_tax}
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChange2("room_cost_rate_exc_tax", val, idx);
                    }}
                    name="room_cost_rate_exc_tax"
                    type="float"
                  />
                </td>
                <td>
                  <InputForm
                    style={{
                      width: 100,
                      border: "none",
                    }}
                    className="app_input_table"
                    value={item.room_cost_municipal}
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChange2("room_cost_municipal", val, idx);
                    }}
                    name="room_cost_municipal"
                    type="float"
                  />
                </td>
                <td>
                  <InputForm
                    style={{
                      width: 100,
                      border: "none",
                    }}
                    className="app_input_table"
                    value={item.room_cost_purch_vat}
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChange2("room_cost_purch_vat", val, idx);
                    }}
                    name="room_cost_purch_vat"
                    type="float"
                  />
                </td>
                <td>
                  <InputForm
                    style={{
                      width: 100,
                      border: "none",
                    }}
                    className="app_input_table"
                    value={item.room_cost_rat_inc_all_tax}
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChange2("room_cost_rat_inc_all_tax", val, idx);
                    }}
                    name="room_cost_rat_inc_all_tax"
                    type="float"
                  />
                </td>
                <td>
                  <InputForm
                    style={{
                      width: 100,
                      border: "none",
                    }}
                    className="app_input_table"
                    value={item.total_room_cost_rate}
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChange2("total_room_cost_rate", val, idx);
                    }}
                    name="total_room_cost_rate"
                    type="float"
                  />
                </td>
                <td>
                  <InputForm
                    style={{
                      width: 100,
                      border: "none",
                    }}
                    className="app_input_table"
                    value={item.meal_cost_rate_exc_tax}
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChange3("meal_cost_rate_exc_tax", val, idx);
                    }}
                    name="meal_cost_rate_exc_tax"
                    type="float"
                  />
                </td>
                <td>
                  <InputForm
                    style={{
                      width: 100,
                      border: "none",
                    }}
                    className="app_input_table"
                    value={item.meal_cost_purch_vat}
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChange3("meal_cost_purch_vat", val, idx);
                    }}
                    name="meal_cost_purch_vat"
                    type="float"
                  />
                </td>
                <td>
                  <InputForm
                    style={{
                      width: 100,
                      border: "none",
                    }}
                    className="app_input_table"
                    value={item.meal_cost_rat_inc_all_tax}
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChange3("meal_cost_rat_inc_all_tax", val, idx);
                    }}
                    name="meal_cost_rat_inc_all_tax"
                    type="float"
                  />
                </td>
                <td>
                  <InputForm
                    style={{
                      width: 100,
                      border: "none",
                    }}
                    className="app_input_table"
                    value={item.total_meal_cost_rate}
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChange3("total_meal_cost_rate", val, idx);
                    }}
                    name="total_meal_cost_rate"
                    type="float"
                  />
                </td>
                <td>
                  <InputForm
                    style={{
                      width: 100,
                      border: "none",
                    }}
                    className="app_input_table"
                    value={item.net_total_sale}
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChange4("net_total_sale", val, idx);
                    }}
                    name="net_total_sale"
                    type="float"
                  />
                </td>
                <td>
                  <InputForm
                    style={{
                      width: 100,
                      border: "none",
                    }}
                    className="app_input_table"
                    value={item.net_total_cost}
                    name="net_total_cost"
                    type="float"
                  />
                </td>
                <td>
                  <div>
                    <button
                      // className="app_button"
                      style={{
                        width: 50,
                      }}
                      onClick={()=>handleDelete(idx)}
                    >
                      <MdDeleteOutline />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
        <button
          style={{ float: "right", width: 150 }}
          className="app_button mt-3 p-2 shadow"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {/*<div style={{ float: 'right' }}>
          Meal Rat Inc. All Tax :<b> {calc}</b>
          </div>
          <br />
          <div style={{ float: 'right' }}>
          Sale Rat Inc. All Tax :<b> {saleCalc}</b>
          </div>
          <br />
          <div style={{ float: 'right' }}>
          Cost Rat Inc. All Tax :<b> {costCalc}</b>
        </div> */}
      </div>
    </div>
    </>
  );
}