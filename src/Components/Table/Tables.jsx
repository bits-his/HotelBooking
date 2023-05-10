import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { BiTrash } from 'react-icons/bi'
import { CiSearch } from 'react-icons/ci'
import { Card, Col, Modal, Row, Table } from 'reactstrap'
import InputForm from '../../CustomComponents/InputForm'
import { _get, _post } from '../../Utils/Helper'
import FoodModal from '../FoodModal'
import HotelReg from '../HotelReg'
import AgentModal from '../Modal/AgentModal'

export default function Tables({
  form = {},
  setForm = (f) => f,
  setNew_data = (f) => f,
  new_data = [],
}) {
  const [data, setData] = useState([])
  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])
  const handleChanges = (name, value, index) => {
    const arr = []
    new_data?.forEach((item, idx) => {
      if (idx === index) {
        arr.push({ ...item, [name]: value })
      } else {
        arr.push(item)
      }
    })
    setNew_data(arr)
  }

  const getData = () => {
    _get(
      'api/get_views',
      (res) => {
        //   navigate(`/agent`)
        console.log(res)
        setData(res.results[0])
      },
      (err) => {
        // setLoading(false)
        console.log(err)
      },
    )
    // console.log(form)
  }

  const getMeals_table = () => {
    _get(
      'api/meals_tables',
      (res) => {
        // navigate(-1)
        console.log(res)
        setData1(res.results[0])
      },
      (err) => {
        // setLoading(false)
        console.log(err)
      },
    )
    // console.log(form)
  }

  const getRoom_type = () => {
    _post(
      'api/room_type?query_type=select',
      {},
      (res) => {
        // navigate(-1)
        console.log(res)
        setData2(res.results)
      },
      (err) => {
        // setLoading(false)
        console.log(err)
      },
    )
    // console.log(form)
  }
  const [hotel, setHotel] = useState([])
  const getHotels = () => {
    _post(
      'api/hotels?in_query_type=select-all',
      {},
      (res) => {
        console.log(res)
        setHotel(res.resp)
      },
      (err) => {
        // setLoading(false)
        console.log(err)
      },
    )
    // console.log(form)
  }

  useEffect(() => {
    getData()
    getMeals_table()
    getRoom_type()
    getHotels()
  }, [])

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'night') {
      setForm((p) => ({
        ...p,
        [name]: value,
        check_out: moment(form.check_in)
          .add('days', parseInt(value))
          .format('YYYY-MM-DD'),
      }))
    } else setForm((p) => ({ ...p, [name]: value }))
  }
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
        meal_cost_rate_ExcTax: form.meal_cost_rate_ExcTax,
        meal_cost_purch_vat: form.meal_cost_purch_vat,
        meal_cost_municipal_vat: form.meal_cost_municipal_vat,
        meal_cost_rat_Inc_all_tax: form.meal_cost_rat_Inc_all_tax,
        total_meal_sale_rate: form.total_meal_sale_rate,
      },
    ])

    console.log(form)
  }

  const handleDelete = (index) => {
    let item = new_data.filter((i, idx) => index !== idx)
    setNew_data(item)
    console.log(index)
  }
  const [modal3, setModal3] = useState(false)
  const toggle3 = () => setModal3(!modal3)
  let percent = parseInt(form.meal_municipal_vat) / 100
  let percent2 = parseInt(form.meal_purch_vat) / 100
  let percent3 = parseInt(form.sale_municipal_vat) / 100
  let percent4 = parseInt(form.sale_purch_vat) / 100
  let percent5 = parseInt(form.cost_municipal_vat) / 100
  let percent6 = parseInt(form.cost_purch_vat) / 100
  let percent7 = parseInt(form.meal_cost_municipal_vat) / 100
  let percent8 = parseInt(form.meal_cost_purch_vat) / 100
  // let final =  meal_rate_exc_tax
  const tax = parseInt(form.meal_rate_exc_tax) * percent
  let rate_tax = tax + parseInt(form.meal_rate_exc_tax)
  const purch_tax = percent2 * rate_tax
  const ratInc = purch_tax + rate_tax

  const sale_tax = parseInt(form.sale_rate_exc_tax) * percent3
  let sale_rate_tax = sale_tax + parseInt(form.sale_rate_exc_tax)
  const sale_purch_tax = percent4 * sale_rate_tax
  const sale_ratInc = sale_purch_tax + sale_rate_tax

  const cost_tax = parseInt(form.cost_rate_exc_tax) * percent5
  let cost_rate_tax = cost_tax + parseInt(form.cost_rate_exc_tax)
  const cost_purch_tax = percent6 * cost_rate_tax
  const cost_ratInc = cost_purch_tax + cost_rate_tax

  const meal_cost_tax = parseInt(form.meal_cost_rate_ExcTax) * percent7
  let meal_cost_rate_tax = meal_cost_tax + parseInt(form.meal_cost_rate_ExcTax)
  const meal_cost_purch_tax = percent8 * meal_cost_rate_tax
  const meal_cost_ratInc = meal_cost_purch_tax + meal_cost_rate_tax
  const total_r_sale =
    parseInt(form.sale_rate_exc_tax) +
    parseInt(form.sale_municipal_vat) +
    parseInt(form.sale_purch_vat)
  const total_2_sale =
    parseInt(form.meal_rate_exc_tax) +
    parseInt(form.meal_municipal_vat) +
    parseInt(form.meal_purch_vat)
  const total_3_sale =
    parseInt(form.cost_rate_exc_tax) +
    parseInt(form.cost_municipal_vat) +
    parseInt(form.cost_purch_vat)
  const total_4_sale =
    parseInt(form.meal_cost_rate_ExcTax) +
    parseInt(form.meal_cost_purch_vat) +
    parseInt(form.meal_cost_municipal_vat)
  const netsale = total_r_sale + total_2_sale
  const netCost = total_3_sale + total_4_sale
  useEffect(() => {
    setForm((p) => ({
      ...p,
      meal_rat_inc_all_tax: ratInc,
      sale_rat_inc_all_tax: sale_ratInc,
      cost_rat_inc_all_tax: cost_ratInc,
      meal_cost_rat_Inc_all_tax: meal_cost_ratInc,
      total_room_sale_rate: total_r_sale,
      total_meal_sale_rate: total_2_sale,
      total_room_cost_rate: total_3_sale,
      total_meal_cost_rate: total_4_sale,
      net_total_sale: netsale,
      net_total_cost: netCost,
    }))
  })
  const [modal, setModal] = useState(false)
  const [modal4, setModal4] = useState(false)
  const toggle = () => setModal(!modal)
  const toggle9 = () => setModal4(!modal4)
  const filt = new_data && new_data.map((i) => i.meal_rat_inc_all_tax)
  const calc =
    new_data &&
    new_data.reduce(
      (total, item) => parseFloat(item.meal_rat_inc_all_tax) + total,
      0,
    )
  const costCalc =
    new_data &&
    new_data.reduce(
      (total, item) => parseFloat(item.cost_rat_inc_all_tax) + total,
      0,
    )
  const saleCalc =
    new_data &&
    new_data.reduce(
      (total, item) => parseFloat(item.sale_rat_inc_all_tax) + total,
      0,
    )
  return (
    <div>
      {/* {JSON.stringify(form.room_sale_source)} */}
      <div>
        {/* {JSON.stringify(new_data)} */}
        <div style={{ overflowX: 'auto', marginTop: 50 }}>
          <table id="customers">
            {/* <thead style={{ border: '1px solid rgb(12, 134, 103)' }}> */}
            <tr>
              <th style={{ border: 'none' }} colspan="12"></th>
              <th
                style={{
                  textAlign: 'center',
                  backgroundColor: 'rgb(211, 211, 211)',
                }}
                colspan="4"
              >
                Room Rate Sale
              </th>
              <th style={{ border: 'none' }} colspan="1"></th>
              <th
                style={{
                  textAlign: 'center',
                  backgroundColor: 'rgb(211, 211, 211)',
                }}
                colspan="3"
              >
                Meal Rate Sale
              </th>
              <th style={{ border: 'none' }} colspan="1"></th>
              <th
                style={{
                  textAlign: 'center',
                  backgroundColor: 'rgb(211, 211, 211)',
                }}
                colspan="4"
              >
                Room Rate Cost
              </th>
              <th style={{ border: 'none' }} colspan="1"></th>
              <th
                style={{
                  textAlign: 'center',
                  backgroundColor: 'rgb(211, 211, 211)',
                }}
                colspan="3"
              >
                Meal Rate Cost
              </th>
              <th style={{ border: 'none' }} colspan="1"></th>
              <th
                style={{
                  textAlign: 'center',
                  backgroundColor: 'rgb(211, 211, 211)',
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
            {new_data &&
              new_data.map((item, index) => (
                <tr>
                  {/* /////////////////////////////////////////////////////////////////////////////////// */}
                  <td>
                    <select
                      id="exampleSelect"
                      value={item.hotel}
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      name="hotel"
                      type="select"
                    >
                      {hotel.map((items) => (
                        <option value={items.hotel_name}>
                          {items.hotel_name}{' '}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.check_in}
                      name="check_in"
                      type="date"
                    />
                  </td>
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.check_out}
                      name="check_out"
                      type="date"
                    />
                  </td>
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.night}
                      name="night"
                    />
                  </td>
                  <td>
                    <select
                      id="exampleSelect"
                      className="table_input"
                      value={item.view}
                      name="view"
                      type="select"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                    >
                      <option>Select </option>
                      {data.map((items) => (
                        <option value={items.view_name}>
                          {items.view_name}{' '}
                        </option>
                      ))}
                    </select>

                    {/* {item.view} */}
                  </td>
                  <td>
                    <select
                      id="exampleSelect"
                      className="table_input"
                      value={item.room_type}
                      name="room_type"
                      type="select"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                    >
                      <option>Select </option>
                      {data2?.map((items) => (
                        <option value={items.room_name}>
                          {items.room_name}{' '}
                        </option>
                      ))}
                    </select>
                    {/* {item.room_type} */}
                  </td>
                  <td>
                    <select
                      id="exampleSelect"
                      className="table_input"
                      value={item.meal_type}
                      name="meal_type"
                      type="select"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                    >
                      <option>Select </option>
                      {data1.map((items) => (
                        <option value={items.meal_name}>
                          {items.meal_name}{' '}
                        </option>
                      ))}
                    </select>
                    {/* {item.meal_type}  */}
                  </td>
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.no_of_room}
                      name="no_of_room"
                    />
                    {/* {item.room_type} */}
                  </td>
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.room_sale_source}
                      name="room_sale_source"
                    />
                    {/* {item.meal_type} */}
                  </td>
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.supplier}
                      name="supplier"
                    />
                    {/* {item.no_of_room} */}
                  </td>
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.meal_scale_source}
                      name="meal_scale_source"
                    />
                    {/* {item.room_scale_source} */}
                  </td>{' '}
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.supplier1}
                      name="supplier1"
                    />
                    {/* {item.supplier} */}
                  </td>
                  {/* /////////////////////////////////////////////////////////////////////////////////// */}
                  {/* //////////////////////////////ROOM RATE SALE/////////////////////////// */}
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.sale_rate_exc_tax}
                      name="sale_rate_exc_tax"
                    />
                  </td>
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.sale_municipal_vat}
                      name="sale_municipal_vat"
                    />
                  </td>
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.sale_purch_vat}
                      name="sale_purch_vat"
                    />
                  </td>
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.sale_rat_inc_all_tax}
                      name="sale_rat_inc_all_tax"
                    />
                  </td>
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.total_room_sale_rate}
                      name="total_room_sale_rate"
                    />
                  </td>
                  {/* /////////////////////////////////////////////////////////////////////////////////////// */}
                  {/* //////////////////////////////MEAL RATE SALE/////////////////////////// */}
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.meal_rate_exc_tax}
                      name="meal_rate_exc_tax"
                    />
                  </td>
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.meal_purch_vat}
                      name="meal_purch_vat"
                    />
                  </td>
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.meal_rat_inc_all_tax}
                      name="meal_rat_inc_all_tax"
                    />
                  </td>
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.total_meal_sale_rate}
                      name="total_meal_sale_rate"
                    />
                  </td>
                  {/* /////////////////////////////////////////////////////////////////////////////////////// */}
                  {/* //////////////////////////////ROOM RATE COST/////////////////////////// */}
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.cost_rate_exc_tax}
                      name="cost_rate_exc_tax"
                    />
                  </td>
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.cost_municipal_vat}
                      name="cost_municipal_vat"
                    />
                  </td>
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.cost_purch_vat}
                      name="cost_purch_vat"
                    />
                  </td>
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.cost_rat_inc_all_tax}
                      name="cost_rat_inc_all_tax"
                    />
                  </td>
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.total_room_cost_rate}
                      name="total_room_cost_rate"
                    />
                  </td>
                  {/* //////////////////////////////////////////////////////////////////////////////////// */}
                  {/* //////////////////////////////MEAL RATE COST//////////////////////////////////////// */}
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.meal_cost_rate_ExcTax}
                      name="meal_cost_rate_ExcTax"
                    />
                  </td>
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.meal_cost_purch_vat}
                      name="meal_cost_purch_vat"
                    />
                  </td>
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.meal_cost_rat_Inc_all_tax}
                      name="meal_cost_rat_Inc_all_tax"
                    />
                  </td>
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.total_meal_cost_rate}
                      name="total_meal_cost_rate"
                    />
                  </td>
                  {/* ///////////////////////////////////////////////////////// */}
                  {/* /////////////////////////NET TOTAL/////////////////////////// */}
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.net_total_sale}
                      name="net_total_sale"
                    />
                  </td>
                  <td>
                    <input
                      className="table_input"
                      onChange={({ target: { name, value } }) => {
                        handleChanges(name, value, index)
                      }}
                      value={item.net_total_cost}
                      name="net_total_cost"
                    />
                  </td>
                  {/* ///////////////////////////////////////////////////////////////////////////////////// */}
                  <td className="text-center text-danger">
                    <BiTrash
                      size="1.5rem"
                      onClick={() => handleDelete(index)}
                    />
                  </td>
                </tr>
              ))}
          </table>
        </div>
        <div style={{ float: 'right' }}>
          Meal Rat Inc. All Tax :<b> {calc}</b>
        </div>
        <br />
        <div style={{ float: 'right' }}>
          Sale Rat Inc. All Tax :<b> {saleCalc}</b>
        </div>
        <br />
        <div style={{ float: 'right' }}>
          Cost Rat Inc. All Tax :<b> {costCalc}</b>
        </div>
      </div>
      <div className=" mt-3 text-center">
       
      </div>
    </div>
  )
}