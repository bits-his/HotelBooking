import React, { useEffect, useState } from 'react'
import { Row, Table, Button, Col  } from 'reactstrap'
import InputForm from '../../CustomComponents/InputForm'
import { _get } from "../../Utils/Helper";

export default function AllaotmentTable() {
    const [form, setForm] = useState({
        room_ty: '',
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
        pur_source: ''
    })
 
    const [data, setData] = useState([])
    const [data1, setData1] = useState([])

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

  useEffect(() => {
    getData();
    getMeals_table();
  }, []);

    const handleChange = ({ target: { name, value } }) => {
        console.log(form)
        setForm((p) => ({ ...p, [name]: value }))
    }
  return (
    <Row>
        {/* {JSON.stringify(data1)} */}
        <Row>
            <Table
                bordered
                borderless
                hover
                responsive
                striped
                className='allotment_table mt-5'
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
                <tbody>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <select
                            style={{width: '200px', border: 'none ', outline: 'none '}}
                            id="exampleSelect"
                            className="app_input"
                            value={form.room_ty}
                            name="room_ty"
                            type="select"
                            onChange={handleChange}
                        >
                            <option>Select </option>
                        </select>
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <select
                            style={{width: '200px', border: 'none ', outline: 'none'}}
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
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <InputForm
                            style={{width: '200px', border: 'none ', outline: 'none', height: 20}}
                            className="app_input"
                            value={form.d_from}
                            onChange={handleChange}
                            name="d_from"
                            type= 'date'
                        />
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <InputForm
                            style={{width: 100 ,border: 'none ', outline: 'none', height: 20}}
                            className="app_input"
                            value={form.nights}
                            onChange={handleChange}
                            name="nights"
                            type= 'Number'
                        />
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <InputForm
                            style={{width: '200px', border: 'none ', outline: 'none', height: 20}}
                            className="app_input"
                            value={form.d_to}
                            onChange={handleChange}
                            name="d_to"
                            type= 'date'
                        />
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <InputForm
                            style={{width: 100 ,border: 'none ', outline: 'none', height: 20}}
                            className="app_input"
                            value={form.rooms}
                            onChange={handleChange}
                            name="rooms"
                            type= 'Number'
                        />
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <InputForm
                            style={{width: 150 ,border: 'none ', outline: 'none', height: 20}}
                            className="app_input"
                            value={form.totals}
                            onChange={handleChange}
                            name="totals"
                            type= 'Number'
                        />
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <select
                            style={{width: '200px', border: 'none ', outline: 'none'}}
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
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <InputForm
                            style={{width: 150 ,border: 'none ', outline: 'none', height: 20}}
                            className="app_input"
                            value={form.meals_ttl}
                            onChange={handleChange}
                            name="meals_ttl"
                            type= 'Number'
                        />
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <InputForm
                            style={{width: 100 ,border: 'none ', outline: 'none', height: 20}}
                            className="app_input"
                            value={form.net_ttl}
                            onChange={handleChange}
                            name="net_ttl"
                            type= 'Number'
                        />
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <InputForm
                            style={{width: 100 ,border: 'none ', outline: 'none', height: 20}}
                            className="app_input"
                            value={form.vat}
                            onChange={handleChange}
                            name="vat"
                            type= 'Number'
                        />
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <InputForm
                            style={{width: 100 ,border: 'none ', outline: 'none', height: 20}}
                            className="app_input"
                            value={form.vat_ttl}
                            onChange={handleChange}
                            name="vat_ttl"
                            type= 'Number'
                        />
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <InputForm
                            style={{width: 150 ,border: 'none ', outline: 'none', height: 20}}
                            className="app_input"
                            value={form.ttl_w_vat}
                            onChange={handleChange}
                            name="ttl_w_vat"
                            type= 'Number'
                        />
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <InputForm
                            style={{width: 150 ,border: 'none ', outline: 'none', height: 20}}
                            className="app_input"
                            value={form.ref_no}
                            onChange={handleChange}
                            name="ref_no"
                            type= 'Number'
                        />
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <InputForm
                            style={{width: 150 ,border: 'none ', outline: 'none', height: 20}}
                            className="app_input"
                            value={form.pur_source}
                            onChange={handleChange}
                            name="pur_source"
                        />
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)',backgroundColor: 'rbg(12, 134, 103)'}}><Button style={{backgroundColor: 'rbg(12, 134, 103)', color: 'black'}}>Delete</Button></td>
                </tbody>
            </Table>
        </Row>
        <Row>
            <Col md= {12}><center><button className="app_button p-3 mt-3" style={{ width: 150 }}>Sumbit</button></center> </Col>
        </Row>
    </Row>
  )
}
