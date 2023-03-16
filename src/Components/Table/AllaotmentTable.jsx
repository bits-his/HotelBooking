import React, { useEffect, useState } from 'react'
import { Row, Table, Button  } from 'reactstrap'
import InputForm from '../../CustomComponents/InputForm'
import { _get } from "../../Utils/Helper";

export default function AllaotmentTable() {
    const [data, setData] = useState([])

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

  useEffect(() => {
    getData();
  }, []);
  return (
    <Row>
        {JSON.stringify(data)}
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
                            // bbbbb{JSON.stringify(selectedRoom)}
                            className="app_input"
                            name="price_category"
                            type="select"
                            // onClick={handleChange}
                            // value={form.price_category}
                        >
                            <option>Select </option>
                        </select>
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <select
                            style={{width: '200px', border: 'none ', outline: 'none'}}
                            id="exampleSelect"
                            // bbbbb{JSON.stringify(selectedRoom)}
                            className="app_input"
                            name="price_category"
                            type="select"
                            // onClick={handleChange}
                            // value={form.}
                        >
                            <option>Select </option>
                          {data.map(item => ( <option value={item.view_name}>{item.view_name} </option>))}
                        </select>
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <InputForm
                            style={{width: '200px', border: 'none ', outline: 'none', height: 20}}
                            className="app_input"
                            // value={form.account_number}
                            // onChange={handleChange}
                            name="account_number"
                            type= 'date'
                        />
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <InputForm
                            style={{width: 100 ,border: 'none ', outline: 'none', height: 20}}
                            className="app_input"
                            // value={form.account_number}
                            // onChange={handleChange}
                            name="account_number"
                            type= 'Number'
                        />
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <InputForm
                            style={{width: '200px', border: 'none ', outline: 'none', height: 20}}
                            className="app_input"
                            // value={form.account_number}
                            // onChange={handleChange}
                            name="account_number"
                            type= 'date'
                        />
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <InputForm
                            style={{width: 100 ,border: 'none ', outline: 'none', height: 20}}
                            className="app_input"
                            // value={form.account_number}
                            // onChange={handleChange}
                            name="account_number"
                            type= 'Number'
                        />
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <InputForm
                            style={{width: 150 ,border: 'none ', outline: 'none', height: 20}}
                            className="app_input"
                            // value={form.account_number}
                            // onChange={handleChange}
                            name="account_number"
                            type= 'Number'
                        />
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <select
                            style={{width: '200px', border: 'none ', outline: 'none'}}
                            id="exampleSelect"
                            // bbbbb{JSON.stringify(selectedRoom)}
                            className="app_input"
                            name="price_category"
                            type="select"
                            // onClick={handleChange}
                            // value={form.price_category}
                        >
                            <option>Select </option>
                        </select>
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <InputForm
                            style={{width: 150 ,border: 'none ', outline: 'none', height: 20}}
                            className="app_input"
                            // value={form.account_number}
                            // onChange={handleChange}
                            name="account_number"
                            type= 'Number'
                        />
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <InputForm
                            style={{width: 100 ,border: 'none ', outline: 'none', height: 20}}
                            className="app_input"
                            // value={form.account_number}
                            // onChange={handleChange}
                            name="account_number"
                            type= 'Number'
                        />
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <InputForm
                            style={{width: 100 ,border: 'none ', outline: 'none', height: 20}}
                            className="app_input"
                            // value={form.account_number}
                            // onChange={handleChange}
                            name="account_number"
                            type= 'Number'
                        />
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <InputForm
                            style={{width: 100 ,border: 'none ', outline: 'none', height: 20}}
                            className="app_input"
                            // value={form.account_number}
                            // onChange={handleChange}
                            name="account_number"
                            type= 'Number'
                        />
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <InputForm
                            style={{width: 150 ,border: 'none ', outline: 'none', height: 20}}
                            className="app_input"
                            // value={form.account_number}
                            // onChange={handleChange}
                            name="account_number"
                            type= 'Number'
                        />
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <InputForm
                            style={{width: 150 ,border: 'none ', outline: 'none', height: 20}}
                            className="app_input"
                            // value={form.account_number}
                            // onChange={handleChange}
                            name="account_number"
                            type= 'Number'
                        />
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)'}}>
                        <InputForm
                            style={{width: 150 ,border: 'none ', outline: 'none', height: 20}}
                            className="app_input"
                            // value={form.account_number}
                            // onChange={handleChange}
                            name="account_number"
                        />
                    </td>
                    <td style={{border: '1px solid rgb(12, 134, 103)',backgroundColor: 'rbg(12, 134, 103)'}}><Button style={{backgroundColor: 'rbg(12, 134, 103)', color: 'black'}}>Delete</Button></td>
                </tbody>
            </Table>
        </Row>
    </Row>
  )
}
