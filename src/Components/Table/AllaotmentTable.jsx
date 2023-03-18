import React, { useEffect, useState } from 'react'
import { BiTrash } from 'react-icons/bi';
import { Row, Table, Button, Col, Card  } from 'reactstrap'
import InputForm from '../../CustomComponents/InputForm'
import { _get, _post } from "../../Utils/Helper";

export default function AllaotmentTable({form={},setForm=(f)=>f,newData=f=>f,setNewData=f=>f}) {
    const [data, setData] = useState([])
    const [data1, setData1] = useState([])

    const getData = () => {
     _get(
      "api/get_views",
      (res) => {
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
const [room,setRoom]=useState([])
const getHotels = () => {
    _post( 
      'api/room_type?query_type=select',
      {},
      (resp) => {
        // setLoading(false)
        console.log(resp)
        // if (resp ) {
          setRoom(resp.results)
        //  alert('dfasfsadf'+resp)
        // }
      },
      (e) => {
        console.log(e)
        // setLoading(false)
        // alert(e)
      },
    )
  }
  useEffect(() => {
    getData();
    getMeals_table();
    getHotels()
  }, []);

    const handleChange = ({ target: { name, value } }) => {
        console.log(form)
        setForm((p) => ({ ...p, [name]: value }))
    }
   
    const addData = () =>{
   
        setNewData(prev => [
            ...prev,
            {
room_type:form.room_type,
view:form.veiws,
date_from:form.d_from,
night:form.nights,
date_to:form.d_to,
room:form.rooms,
totals:form.totals,
meal_plan:form.meals_plan,
meal_total:form.meals_ttl,
net_total:form.meals_ttl,
vat:form.vat,
vat_total:form.vat_ttl,
total_with_vat:form.ttl_w_vat,
reference_no:form.ref_no,
purchase_source:form.pur_source
            }]);
            setForm({room_type: '',
            room_type: '',
            veiws: '',
            d_from: '',
            nights: '',
            d_to: '',
            rooms :'',
            rate: '',
            totals: '',
            meals_plan: '',
            meals_ttl: '',
            net_ttl: '',
            vat: '',
            vat_ttl: '',
            ttl_w_vat: '',
            ref_no: '',
            pur_source: '',
    
            id_no: '',
            hotel_name: '',
            allotment_type: '',
            supplier_name: '',
            reference_id: '',
            details: ''})
        }
           const handleDelete = (index) =>{
        let item = newData.filter((i, idx) => index !== idx)
        setNewData(item) 
        console.log(index)
       }
  return (
    <Card className="app_card dashboard_card shadow p-3 m-3 mt-2">
        {/* {JSON.stringify(newData)} */}
        <Row>
            <Col md={4}>
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
                                {
                                    room&&room.map(i=><option value={i.room_type}>{i.room_type}</option>)
                                }
                            </select>
                            <InputForm
                                className="app_input"
                                label= 'Night'
                                value={form.nights}
                                onChange={handleChange}
                                name="nights"
                                type= 'Number'
                            />
                            <InputForm
                                className="app_input"
                                label= 'Totals'
                                value={form.totals}
                                onChange={handleChange}
                                name="totals"
                                type= 'Number'
                            />
                            <InputForm
                                className="app_input"
                                label='Net Total'
                                value={form.net_ttl}
                                onChange={handleChange}
                                name="net_ttl"
                                type= 'Number'
                            />
                            <InputForm
                                className="app_input"
                                label= 'Total With Vat'
                                value={form.ttl_w_vat}
                                onChange={handleChange}
                                name="ttl_w_vat"
                                type= 'Number'
                            />
            </Col>
            <Col md={4}>
                            <label className="Label mt-2">View</label>
                            <select
                                id="exampleSelect"
                                className="app_input"
                                value={form.veiws}
                                name="veiws"
                                type="select"
                                onChange={handleChange}
                            >
                                <option>Select </option>
                            {data.map(item => ( <option value={item.view_name}>{item.view_name} </option>))}
                            </select>
                            <InputForm
                                className="app_input"
                                label= 'Date To'
                                value={form.d_to}
                                onChange={handleChange}
                                name="d_to"
                                type= 'date'
                            />
                            <label className="Label mt-2">Meal Plan</label>
                            <select
                                id="exampleSelect"
                                className="app_input"
                                value={form.meals_plan}
                                name="meals_plan"
                                type="select"
                                onChange={handleChange}
                            >
                                <option>Select </option>
                                {data1.map(item => ( <option value={item.view_name}>{item.meal_name} </option>))}
                            </select>
                            <InputForm
                                className="app_input"
                                label= 'Vat'
                                value={form.vat}
                                onChange={handleChange}
                                name="vat"
                                type= 'Number'
                            />
                            <InputForm
                                className="app_input"
                                label= 'Reference No.'
                                value={form.ref_no}
                                onChange={handleChange}
                                name="ref_no"
                                type= 'Number'
                            />
            </Col>
            <Col md={4}>
                            <InputForm
                                label= 'Date From'
                                className="app_input"
                                value={form.d_from}
                                onChange={handleChange}
                                name="d_from"
                                type= 'date'
                            />
                            <InputForm
                                label= 'Rooms'
                                className="app_input"
                                value={form.rooms}
                                onChange={handleChange}
                                name="rooms"
                                type= 'Number'
                            />
                            <InputForm
                                className="app_input"
                                label='Meals Total'
                                value={form.meals_ttl}
                                onChange={handleChange}
                                name="meals_ttl"
                                type= 'Number'
                            />
                            <InputForm
                                className="app_input"
                                label= 'Vat Total'
                                value={form.vat_ttl}
                                onChange={handleChange}
                                name="vat_ttl"
                                type= 'Number'
                            />
                            <InputForm
                                // style={{width: 150 ,border: 'none ', outline: 'none', height: 20}}
                                className="app_input"
                                label= 'Purchase Source'
                                value={form.pur_source}
                                onChange={handleChange}
                                name="pur_source"
                            />
            </Col>
            <Col md= {12}><center><button className="app_button p-3 mt-3" style={{ width: 150 }} onClick={addData}>Add + </button></center> </Col>
        </Row>
        <Row>
            {/* {JSON.stringify(data1)} */}
            <Row>
                <Table
                    bordered
                    borderless
                    hover
                    responsive
                    striped
                    className='allotment_table mt-5 ml-3'
                >
                {/* <table > */}
                    <thead style={{width: '100px'}}>
                        <th style={{border: '1px solid rgb(12, 134, 103)', padding: '8px 10px'}}>Room Type</th>
                        <th style={{border: '1px solid rgb(12, 134, 103)', padding: '8px 10px'}}>View</th>
                        <th style={{border: '1px solid rgb(12, 134, 103)', padding: '8px 10px'}}>Date From</th>
                        <th style={{border: '1px solid rgb(12, 134, 103)', padding: '8px 10px'}}>#Night</th>
                        <th style={{border: '1px solid rgb(12, 134, 103)', padding: '8px 10px'}}>Date To</th>
                        <th style={{border: '1px solid rgb(12, 134, 103)', padding: '8px 10px'}}>#Room</th>
                        <th style={{border: '1px solid rgb(12, 134, 103)', padding: '8px 10px'}}>Totals</th>
                        <th style={{border: '1px solid rgb(12, 134, 103)', padding: '8px 10px'}}>Meal Plan</th>
                        <th style={{border: '1px solid rgb(12, 134, 103)', padding: '8px 10px'}}>Meals Total</th>
                        <th style={{border: '1px solid rgb(12, 134, 103)', padding: '8px 10px'}}>Net Total</th>
                        <th style={{border: '1px solid rgb(12, 134, 103)', padding: '8px 10px'}}>Vat</th>
                        <th style={{border: '1px solid rgb(12, 134, 103)', padding: '8px 10px'}}>Vat Total</th>
                        <th style={{border: '1px solid rgb(12, 134, 103)', padding: '8px 10px'}}>Total With Vat</th>
                        <th style={{border: '1px solid rgb(12, 134, 103)', padding: '8px 10px'}}>Reference No.</th>
                        <th style={{border: '1px solid rgb(12, 134, 103)', padding: '8px 10px'}}>Purchase Source</th>
                        <th style={{border: '1px solid rgb(12, 134, 103)', padding: '8px 10px'}}>Action</th>
                        {/* <th style={{border: '1px solid rgb(12, 134, 103)'}}>head</th> */}
                    </thead>
                    {
                        newData&&newData.map((i,index)=>
                            <tbody>
                           
                            <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                                {i.room_type}
                            </td>
                            <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                                {i.view}
                            </td>
                            <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                                {i.date_from}
                            </td>
                            <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                               {i.night} 
                            </td>
                            <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                                {i.date_to}
                            </td>
                            <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                               {i.room} 
                            </td>
                            <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                                {i.totals}
                            </td>
                            <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                               {i.meal_plan} 
                            </td>
                            <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                                {i.meal_total}
                            </td>
                            <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                                {i.net_total}
                            </td>
                            <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                               {i.vat} 
                            </td>
                            <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                                {i.vat_total}
                            </td>
                            <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                                {i.total_with_vat}
                            </td>
                            <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                                {i.reference_no}
                            </td>
                            <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                                {i.purchase_source}
                                </td>
                            <td className="text-center text-danger"style={{border: '1px solid rgb(12, 134, 103)'}}>
                            <BiTrash size="2.5rem" onClick={()=>handleDelete(index)} />
                            </td>
                        </tbody>
                        )
                    }
                   
                </Table>
            </Row>
            <Row>
                <Col md= {12}><center><button className="app_button p-3 mt-3" style={{ width: 150 }}>Sumbit</button></center> </Col>
            </Row>
        </Row>
    </Card>
  )
}
