import React, { useEffect, useState } from 'react'
import { BiTrash } from 'react-icons/bi'
import { CiSearch } from 'react-icons/ci'
import { Card, Col, Modal, Row, Table } from 'reactstrap'
import InputForm from '../../CustomComponents/InputForm'
import { _get, _post } from '../../Utils/Helper'
import HotelReg from '../HotelReg'

export default function ReservationTable({form={},setForm=(f)=>f}) {
    const [data, setData] = useState([])
    const [data1, setData1] = useState([])
    const [data2, setData2] = useState([])

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

  useEffect(() => {
    getData();
    getMeals_table();
    getRoom_type();
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    // console.log({ target })
    setForm((p) => ({ ...p, [name]: value }));
  };

  const [modal3, setModal3] = useState(false)
  const toggle3 = () => setModal3(!modal3)
  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
        <Row> 
            <Col
            md={12}>
            <h5 className="app_title" style={{ fontSize: 30}}>
                <center >Hotel Booking</center> 
            </h5>
            </Col>
            <Col md={4}>
                <label className="Label mt-2">Hotel</label>
                <div className='search_input_form'>
                    <select
                        id="exampleSelect"
                        className="app_input3"
                        value={form.hotel}
                        name="hotel"
                        type="select"
                        onClick={handleChange}
                    >
                        <option>Select </option>
                    </select>
                    <CiSearch   
                        className='search_icon'
                        onClick={toggle3}
                    />
                    <Modal isOpen={modal3} toggle={toggle3}size="xl" >
                        <HotelReg/>
                    </Modal>
                </div>
                <InputForm
                    // style={{width: '200px', border: 'none ', outline: 'none', height: 15}}
                    className="app_input"
                    label= "Night"
                    value={form.night}
                    onChange={handleChange}
                    name="night"
                    type= 'number'
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
                          {data.map(item => ( <option value={item.meal_type}>{item.meal_type} </option>))}
                        </select>
                <label className="Label mt-2">Supplier</label>
                         <select
                            // style={{width: '200px', border: 'none ', outline: 'none'}}
                            id="exampleSelect"
                            className="app_input"
                            onChange={handleChange}
                            value={form.supplier}
                            name="supplier"
                            type="select"
                        >
                            <option>Select </option>
                          {/* {data.map(item => ( <option value={item.view_name}>{item.view_name} </option>))} */}
                        </select>
                        <InputForm
                            className="app_input"
                            label= 'Rate ExcTax'
                            onChange={handleChange}
                            value={form.sale_rate_exc_tax}
                            name="cost_rate_exc_tax"
                            type= 'Number'
                        />
                        <InputForm
                            className="app_input"
                            label='Rat Inc. All Tax'
                            onChange={handleChange}
                            value={form.sale_rat_inc_all_tax}
                            name="sale_rat_inc_all_tax"
                            type= 'Number'
                        />
                        <InputForm
                            label="Municipal VAT 5%"
                            className="app_input"
                            onChange={handleChange}
                            value={form.cost_municipal_vat}
                            name="cost_municipal_vat"
                            type= 'Number'
                        />
                        <InputForm
                            className="app_input"
                            label='Total Room Cost Rate'
                            onChange={handleChange}
                            value={form.total_room_cost_rate}
                            name="total_room_cost_rate"
                            type= 'Number'
                        />
                        <InputForm
                            className="app_input"
                            label= 'Purch VAT 15%'
                            onChange={handleChange}
                            value={form.meal_purch_vat}
                            name="meal_purch_vat"
                            type= 'Number'
                        />
                        <InputForm
                            className="app_input"
                            label= 'Net Total Sale'
                            onChange={handleChange}
                            value={form.net_total_sale}
                            name="net_total_sale"
                            type= 'Number'
                        />
            </Col>
            <Col md={4}>
                <InputForm
                    // style={{width: '200px', border: 'none ', outline: 'none', height: 15}}
                    className="app_input"
                    label= "Check In"
                    value={form.check_in}
                    onChange={handleChange}
                    name="check_in"
                    type= 'date'
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
                          {data.map(item => ( <option value={item.view_name}>{item.view_name} </option>))}
                        </select>
                        <InputForm
                            className="app_input"
                            label= 'No of Room'
                            onChange={handleChange}
                            value={form.no_of_room}
                            name="no_of_room"
                            type= 'Number'
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
                          {/* {data.map(item => ( <option value={item.view_name}>{item.view_name} </option>))} */}
                        </select>
                        <InputForm
                            label= "Municipal VAT 5%"
                            className="app_input"
                            onChange={handleChange}
                            value={form.sale_municipal_vat}
                            name="sale_municipal_vat"
                            type= 'Number'
                        />
                        <InputForm
                            className="app_input"
                            label="	Total Room Sale Rate"
                            onChange={handleChange}
                            value={form.total_room_sale_rate}
                            name="total_room_sale_rate"
                            type= 'Number'
                        />
                        <InputForm
                            label='Purch VAT 15%'
                            className="app_input"
                            onChange={handleChange}
                            value={form.cost_purch_vat}
                            name="cost_purch_vat"
                            type= 'Number'
                        />
                        <InputForm
                            label='	Rate ExcTax'
                            className="app_input"
                            onChange={handleChange}
                            value={form.meal_rate_exc_tax}
                            name="meal_rate_exc_tax"
                            type= 'Number'
                        />
                        <InputForm
                            className="app_input"
                            label= 'Rat Inc. All Tax'
                            onChange={handleChange}
                            value={form.meal_rate_exc_tax}
                            name="meal_rate_exc_tax"
                            type= 'Number'
                        />
                        <InputForm
                            label= 'Net Total Cost'
                            className="app_input"
                            onChange={handleChange}
                            value={form.net_total_cost}
                            name="net_total_cost"
                            type= 'Number'
                        />
            </Col>
            <Col md={4}>
                <InputForm
                    // style={{width: '200px', border: 'none ', outline: 'none', height: 15}}
                    className="app_input"
                    label= "Check Out"
                    value={form.check_out}
                    onChange={handleChange}
                    name="check_out"
                    type= 'date'
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
                          {data2.map(item => ( <option value={item.room_name}>{item.room_name} </option>))}
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
                          {/* {data.map(item => ( <option value={item.view_name}>{item.view_name} </option>))} */}
                        </select>
                        <label className="Label mt-2">Supplier</label>
                        <select
                            id="exampleSelect"
                            className="app_input"
                            onChange={handleChange}
                            value={form.supplier1}
                            name="supplier1"
                            type="select"
                        >
                            <option>Select </option>
                          {/* {data.map(item => ( <option value={item.view_name}>{item.view_name} </option>))} */}
                        </select>
                        <InputForm
                            className="app_input"
                            label= " Purch VAT 15%"
                            onChange={handleChange}
                            value={form.sale_purch_vat}
                            name="cost_purch_vat"
                            type= 'Number'
                        />
                        <InputForm
                            // style={{width: 100 ,border: 'none ', outline: 'none', height: 15}}
                            className="app_input"
                            label="Rate ExcTax"
                            onChange={handleChange}
                            value={form.cost_rate_exc_tax}
                            name="cost_rate_exc_tax"
                            type= 'Number'
                        />
                        <InputForm
                            label= 'Rat Inc. All Tax'
                            className="app_input"
                            onChange={handleChange}
                            value={form.cost_rate_exc_tax}
                            name="cost_rate_exc_tax"
                            type= 'Number'
                        />
                        <InputForm
                            className="app_input"
                            label= 'Municipal VAT 5%'
                            onChange={handleChange}
                            value={form.meal_municipal_vat}
                            name="meal_municipal_vat"
                            type= 'Number'
                        />
                        <InputForm
                            className="app_input"
                            label= 'Total Meal Cost Rate'
                            onChange={handleChange}
                            value={form.total_meal_cost_rate}
                            name="total_meal_cost_rate"
                            type= 'Number'
                        />
            </Col>
            <Col md={12}>
                <center>
                    <button
                        className="app_button p-3 mt-3"
                        style={{ width: 150 }}
                        // onClick={handleSubmit}
                    >
                        Add +
                    </button>
                </center>
            </Col>
        </Row>
     <div>
        {/* {JSON.stringify(data2)} */}
              <Table responsive size="sm mt-5" bordered>
                <thead style={{border: '1px solid rgb(12, 134, 103)'}}>
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
                <tbody>
                  <tr>
                    <td style={{height: 10,border: '1px solid rgb(12, 134, 103)'}}></td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}></td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}></td>
                    
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}></td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                       
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                       
                    </td>{' '}
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        
                    </td>
                    <td className="text-center text-danger"style={{border: '1px solid rgb(12, 134, 103)'}}>
                      <BiTrash size="1.5rem" />
                    </td>
                  </tr>
                </tbody>
              </Table>
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
    </Card>
  )
}
