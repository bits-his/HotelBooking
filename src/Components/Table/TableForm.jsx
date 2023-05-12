import React, { useEffect } from "react";
import InputForm from "../../CustomComponents/InputForm";
import { useState } from "react";
import { _get, _post } from "../../Utils/Helper";
import { MdDeleteOutline } from "react-icons/md";
import { Button } from "reactstrap";

export default function TableForm({ data = (f) => f, setData = (f) => f,forms }) {
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
    room_sale_rate_exc_tax: 0.0,
    room_sale_municipal: "",
    room_sale_purch_vat: "",
    room_sale_rat_inc_all_tax: "",
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
    query_type:"insert"
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
      let fivePofRate = parseFloat(item.room_sale_rate_exc_tax)*(0.5);
      let fifteenPofRoomRate =(parseFloat(item.room_sale_rate_exc_tax) + parseFloat(fivePofRate))*(0.15) ;
      let RatRoomIncAllTax =
        parseFloat(item.room_sale_rate_exc_tax) +
        parseFloat(fivePofRate) +
        parseFloat(fifteenPofRoomRate);
      let totalRoomSales = (item.night*item.no_of_room*RatRoomIncAllTax);

      let fifteenPofMealRate = item.meal_sale_rate_exc_tax*0.15;
      let RatMealsIncAllTax = (parseFloat(item.meal_sale_rate_exc_tax)+parseFloat(fifteenPofMealRate));
      let totalsMealSales = (item.night*item.no_of_pax*RatMealsIncAllTax);

      let fivePofRoomCost = item.room_cost_rate_exc_tax*0.05;
      let fifteenPofRoomCost =  (parseFloat(item.room_cost_rate_exc_tax)+parseFloat(fivePofRoomCost))*0.15;
      let RatRoomCostIncAllTax = (parseFloat(item.room_cost_rate_exc_tax)+parseFloat(fivePofRoomCost)+parseFloat(fifteenPofRoomCost))
      let totalRoomCost = (item.night*item.no_of_room*RatRoomCostIncAllTax)

      let fifteenPofMealCost = item.meal_cost_rate_exc_tax*0.15;
      let RatMealsCostIncAllTax = (parseFloat(item.meal_cost_rate_exc_tax)+parseFloat(fifteenPofMealCost));
      let totalsMealCost = (item.night*item.no_of_pax*RatMealsCostIncAllTax);

      let NetTotalSale = parseFloat(totalRoomSales)+parseFloat(totalsMealSales);
      let NetTotalCost = parseFloat(form.total_room_cost_rate)+parseFloat(totalsMealCost);

      if (index === i) {
        arr.push({
          ...item,
          [name]: value,
          room_sale_municipal: fivePofRate,
          room_sale_purch_vat: fifteenPofRoomRate,
          room_sale_rat_inc_all_tax: RatRoomIncAllTax,
          total_room_sale_rate: totalRoomSales ,
          
          meal_sale_purch_vat: parseFloat(fifteenPofMealRate.toFixed()),
          meal_sale_rat_inc_all_tax: parseFloat(RatMealsIncAllTax),
          total_meal_sale_rate: parseFloat(totalsMealSales),

          room_cost_municipal: fivePofRoomCost,
          room_cost_purch_vat: fifteenPofRoomCost,
          room_cost_rat_inc_all_tax: RatRoomCostIncAllTax,
          total_room_cost_rate: totalRoomCost,

          meal_cost_purch_vat: parseFloat(fifteenPofMealCost.toFixed()),
          meal_cost_rat_inc_all_tax: parseFloat(RatMealsCostIncAllTax),
          total_meal_cost_rate: parseFloat(totalsMealCost),

          net_total_sale: parseFloat(NetTotalSale),
          net_total_cost: parseFloat(NetTotalCost),

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
    setData((p) => [...p, { ...form }]);
  };

    function handleDelete(id) {
      const deleteRow = data.filter((p, idc) => idc !== id);
      setData(deleteRow);
    }

    // const getHotels = () => {
  // const handleSubmit = () => {
  //   setForm(form);
  //   console.log(form);
  // };
    // }
  const handleSubmit = () => {
    let newArr = []
data.forEach((i) => newArr.push({...i, ...forms,query_type:'insert' }))

    _post(`api/booking_with_reservation`, newArr, (resp) => {
      console.log(resp.nextCode);
      setNo(resp.nextCode)
      // handleSubmitings()
      // NotificationManager.success('Success message', `Your Reservation Number is ${resp.nextCode}`);
      toggle3()
    }),
      (err) => {
        console.log(err);
      };
   setPrint(!print)
  console.log(newArr, "LSLLSLSLSLS")
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
      "api/room_type?query_type=select",
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

  {
    /* //////////////////////////////ROOM RATE SALE/////////////////////////// */
  }

  // let fivePofRate = form.room_sale_rate_exc_tax*0.05
  // let fifteenPofRoomRate =  (parseFloat(form.room_sale_rate_exc_tax)+parseFloat(fivePofRate))*0.15
  // let RatRoomIncAllTax = (parseFloat(form.room_sale_rate_exc_tax)+parseFloat(fivePofRate)+parseFloat(fifteenPofRoomRate))
  // let totalRoomSales = (form.night*form.no_of_room*RatRoomIncAllTax)

  {
    /* //////////////////////////////MEAL RATE SALE/////////////////////////// */
  }

  // let fifteenPofMealRate = form.meal_sale_rate_exc_tax*0.15
  // let RatMealsIncAllTax = (parseFloat(form.meal_sale_rate_exc_tax)+parseFloat(fifteenPofMealRate))
  // let totalsMealSales = (form.night*form.no_of_pax*RatMealsIncAllTax)

  {
    /* //////////////////////////////ROOM RATE COST/////////////////////////// */
  }

  // let fivePofRoomCost = form.room_cost_rate_exc_tax*0.05
  // let fifteenPofRoomCost =  (parseFloat(form.room_cost_rate_exc_tax)+parseFloat(fivePofRoomCost))*0.15
  // let RatRoomCostIncAllTax = (parseFloat(form.room_cost_rate_exc_tax)+parseFloat(fivePofRoomCost)+parseFloat(fifteenPofRoomCost))
  // let totalRoomCost = (form.night*form.no_of_room*RatRoomCostIncAllTax)

  {
    /* //////////////////////////////MEAL RATE COST/////////////////////////// */
  }
  // let fifteenPofMealCost = form.meal_cost_rate_exc_tax*0.15
  // let RatMealsCostIncAllTax = (parseFloat(form.meal_cost_rate_exc_tax)+parseFloat(fifteenPofMealCost))
  // let totalsMealCost = (form.night*form.no_of_pax*RatMealsCostIncAllTax)

  {
    /* //////////////////////////////NET TOTAL/////////////////////////// */
  }
  // let NetTotalSale = parseFloat(totalRoomSales)+parseFloat(totalsMealSales)
  // let  NetTotalCost = parseFloat(form.total_room_cost_rate)+parseFloat(totalsMealCost)
  useEffect(
    () => {
      // setForm(p => ([{
      //   ...p, room_sale_municipal: fivePofRate,
      //   room_sale_purch_vat:(fifteenPofRoomRate.toFixed()),
      //   room_sale_rat_inc_all_tax: parseFloat(RatRoomIncAllTax),
      //   total_room_sale_rate: parseFloat(totalRoomSales),

      //   meal_sale_purch_vat: parseFloat(fifteenPofMealRate.toFixed()),
      //   meal_sale_rat_inc_all_tax: parseFloat(RatMealsIncAllTax),
      //   total_meal_sale_rate: parseFloat(totalsMealSales),

      //   room_cost_municipal: fivePofRoomCost,
      //   room_cost_purch_vat: (fifteenPofRoomCost.toFixed()),
      //   room_cost_rat_inc_all_tax: parseFloat(RatRoomCostIncAllTax),
      //   total_room_cost_rate: parseFloat(totalRoomCost),

      //   meal_cost_purch_vat: parseFloat(fifteenPofMealCost.toFixed()),
      //   meal_cost_rat_inc_all_tax: parseFloat(RatMealsCostIncAllTax),
      //   total_meal_cost_rate: parseFloat(totalsMealCost),

      //   net_total_sale: parseFloat(NetTotalSale),
      //   net_total_cost: parseFloat(NetTotalCost)
      // }]))
      getViews();
      getHotels();
      getRoomType();
      getMeals();
    },
    [
      // form.room_sale_rate_exc_tax,
      // fivePofRate,
      // fifteenPofRoomRate,
      // RatRoomIncAllTax,
      // fifteenPofMealRate,
      // RatMealsIncAllTax,
      // form.room_cost_rate_exc_tax,
      // fivePofRoomCost,
      // fifteenPofRoomCost,
      // RatRoomCostIncAllTax,
      // fifteenPofMealCost,
      // RatMealsCostIncAllTax,
      // totalsMealSales,
      // totalRoomSales,
      // totalsMealCost,
      // totalRoomCost,
    ]
  );

  return (
    <div>
      {JSON.stringify(form)}
      <div>
        <div style={{ overflowX: "auto", marginTop: 50 }}>
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
              <th>Check Out</th>
              <th>Night</th>
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
                      handleChange("hotel", val, idx);
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
                      handleChange("check_in", val, idx);
                    }}
                    name="check_in"
                    type="date"
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
                      handleChange("check_out", val, idx);
                    }}
                    name="check_out"
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
                      handleChange("night", val, idx);
                    }}
                    name="night"
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
                    value={item.view}
                    name="view"
                    type="select"
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChange("view", val, idx);
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
                      handleChange("room_type", val, idx);
                    }}
                  >
                    <option>----select-----</option>
                    {roomType &&
                      roomType?.map((i) => (
                        <option value={i.room_name}>{i.room_name}</option>
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
                      handleChange("meal_type", val, idx);
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
                      handleChange("no_of_room", val, idx);
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
                      handleChange("no_of_pax", val, idx);
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
                      handleChange("room_scale_source", val, idx);
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
                      handleChange("supplier", val, idx);
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
                      handleChange("meal_sale_source", val, idx);
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
                      handleChange("supplier1", val, idx);
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
                      handleChange("meal_sale_rate_exc_tax", val, idx);
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
                      handleChange("meal_sale_purch_vat", val, idx);
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
                      handleChange("meal_sale_rat_inc_all_tax", val, idx);
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
                      handleChange("total_meal_sale_rate", val, idx);
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
                      handleChange("room_cost_rate_exc_tax", val, idx);
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
                      handleChange("room_cost_municipal", val, idx);
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
                      handleChange("room_cost_purch_vat", val, idx);
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
                      handleChange("room_cost_rat_inc_all_tax", val, idx);
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
                      handleChange("total_room_cost_rate", val, idx);
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
                      handleChange("meal_cost_rate_exc_tax", val, idx);
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
                      handleChange("meal_cost_purch_vat", val, idx);
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
                      handleChange("meal_cost_rat_inc_all_tax", val, idx);
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
                      handleChange("total_meal_cost_rate", val, idx);
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
                      handleChange("net_total_sale", val, idx);
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
                    onChange={(e) => {
                      let val = e.target.value;
                      handleChange("net_total_cost", val, idx);
                    }}
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
      <button
        style={{ float: "right", width: 150, float: "left" }}
        className="app_button mt-3 p-2 shadow"
        onClick={handleAdd}
      >
        Add 
      </button>
    </div>
  );
}
