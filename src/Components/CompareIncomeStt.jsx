import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Button, Card, Col, Modal, Row, Table } from "reactstrap";
import InputForm from "../CustomComponents/InputForm";
import { RiFileExcel2Fill } from "react-icons/ri";


export default function CompareIncomeStt() {
  const [form, setForm] = useState({
    sub_branch: '',
    mouth_of:'',
    financial_to: '',
    financial_from: ''
  });
  
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };
  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      <Row>
        <Col md={12} style={{display: 'flex', flexDirection: 'row'}}>
          <center>
            <h5 className="app_title" style={{ fontSize: 23,marginTop: 20 }}>
              Compare Incoming Statement
            </h5>
          </center>
          <Col md={3}></Col>
          <Col md={3} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 'auto'}}>
            <Col>
                <label className="Label mt-2">Sub Branch</label>
                <select
                    id="exampleSelect"
                    className="app_input"
                    value={form.sub_branch}
                    name="sub_branch"
                    type="select"
                    onClick={handleChange}
                >
                    <option>Select </option>
                </select>
            </Col>
          </Col>
        </Col>
      </Row>
      <div style={{width: '100%', border: '1px solid #cccccc', marginTop: 20, marginBottom: 20}}></div>
      <Row>
        <Col>
            <label className="Label mt-2">Financial From</label>
            <select
                id="exampleSelect"
                className="app_input"
                value={form.financial_from}
                name="financial_from"
                type="select"
                onClick={handleChange}
            >
                <option>Select </option>
            </select>
        </Col>
        <Col>
            <label className="Label mt-2">Financial To</label>
            <select
                id="exampleSelect"
                className="app_input"
                value={form.financial_to}
                name="financial_to"
                type="select"
                onClick={handleChange}
            >
                <option>Select </option>
            </select>
        </Col>
        <Col>
          <InputForm
            className="app_input"
            label="Month Of"
            value={form.mouth_of}
            onChange={handleChange}
            name="mouth_of"
          />
        </Col>
      </Row>
      <Row style={{marginTop: 10}}>
        <Col md={8} style={{marginTop: 12}}>
          <div style={{ display: "flex", gap: 15 }}>
            <button
              className="app_button p-2 mt-3 "
              style={{ width: 170, fontSize: 16, fontWeight: 500 }}
              // onClick={() => navigate('/table-meal')}
            >
              View Record   
            </button>
            <button
              className="app_button p-2 mt-3 "
              style={{ width: 170, fontSize: 16, fontWeight: 500 }}
              // onClick={() => navigate('/table-meal')}
            >
              Reset
            </button>
            <button
              className="app_button p-2 mt-3 "
              style={{ width: 170, fontSize: 16, fontWeight: 500 }}
              // onClick={() => navigate('/table-meal')}
            >
              Print
            </button>
          </div>
        </Col>
      </Row>
      <div className="m-2">
        <Col md={6}>
          <div style={{ display: "flex", gap: 15 }}>
            <button
              className="app_button p-2 mt-3 "
              style={{ width: 170, fontSize: 16, fontWeight: 500 }}
              // onClick={() => navigate('/table-meal')}
            >
              {/* <CSVLink
                data={news ? news : []}
                style={{
                    color: "#fff",
                    textDecoration: 'none'
                }}
                className="csv_link"
                filename={"Hotel Comfirma"}
              > */}
                <RiFileExcel2Fill /> Exel DownLoad
              {/* </CSVLink> */}
            </button>
            <button
              className="app_button p-2 mt-3 "
              style={{ width: 170, fontSize: 16, fontWeight: 500 }}
              // onClick={() => navigate('/table-meal')}
            >
              {/* <CSVLink
                data={news ? news : []}
                style={{
                    color: "#fff",
                    textDecoration: 'none'
                }}
                className="csv_link"
                filename={"Hotel Comfirma"}
              > */}
                <RiFileExcel2Fill /> CSV DownLoad
              {/* </CSVLink> */}
            </button>
          </div>
        </Col>
        <Col md={12}>
          <div style={{ display: "flex", flexDirection: "row", marginTop: 50 }}>
            {/* {JSON.stringify(data)} */}
            <label className="label_title">Search</label>
            <div className="search">
              <CiSearch style={{ fontSize: 30 }} />
              <input
                className="app_input2"
                type="text"
                placeholder="Search"
                name="Search"
                // value={}
              />
            </div>
          </div>
        </Col>
        <Row>
          <div className="table_overflow">
            <table
              style={{
                border: "1px solid #ccc",
                padding: 10,
                width: "100%",
                overflowX: "scroll",
              }}
              className="mt-5 mb-2"
            >
              <thead>
                <tr>
                  {/* <td style={{border: '1px solid #0d3a73', padding: "5px 10px"}}>Hotel In</td> */}
                  <td
                    style={{
                      border: "1px solid #0d3a73",
                      padding: "5px 10px",
                    }}
                  >
                    Account Number
                  </td>
                  <td
                    style={{
                      border: "1px solid #0d3a73",
                      padding: "5px 10px",
                    }}
                  >
                    Account Name
                  </td>
                  <td
                    style={{
                      border: "1px solid #0d3a73",
                      padding: "5px 10px",
                    }}
                  >
                    Balance 
                  </td>
                  <td
                    style={{
                      border: "1px solid #0d3a73",
                      padding: "5px 10px",
                    }}
                  >
                    Balance 
                  </td>
                  <td
                    style={{
                      border: "1px solid #0d3a73",
                      padding: "5px 10px",
                    }}
                  >
                    Diffrent 
                  </td>
                </tr>
              </thead>
              {/* <tbody>
                    {JSON.stringify(hotelList)}
                    {hotelList.length === 0 ? (
                        <span>Loading Rooms...</span>
                    ) : (
                        hotelList.map((item, index) => (
                        <tr>
                            <td
                            style={{
                                border: '1px solid #0d3a73',
                                padding: '5px 10px',
                            }}
                            >
                            <Button onClick={()=>{setForms((p)=>({...p,hotel:item.hotel_name})),toggles()}}>select</Button>
                            </td>
                            <td style={{border: '1px solid #0d3a73', padding: "5px 10px"}}>{item.hotel_in}</td>
                            <td
                            style={{
                                border: '1px solid #0d3a73',
                                padding: '5px 10px',
                            }}
                            >
                            {item.hotel_name}
                            </td>
                            <td
                            style={{
                                border: '1px solid #0d3a73',
                                padding: '5px 10px',
                            }}
                            >
                            {item.address}
                            </td>
                            <td
                            style={{
                                border: '1px solid #0d3a73',
                                padding: '5px 10px',
                            }}
                            >
                            {item.city}
                            </td>
                            <td
                            style={{
                                border: '1px solid #0d3a73',
                                padding: '5px 10px',
                            }}
                            >
                            {item.phone}
                            </td>
                            <td
                            style={{
                                border: '1px solid #0d3a73',
                                padding: '5px 10px',
                            }}
                            >
                            {item.email}
                            </td>
                            <td
                            style={{
                                border: '1px solid #0d3a73',
                                padding: '5px 10px',
                            }}
                            >
                            {item.website}
                            </td>
                        </tr>
                        ))
                    )}
                    </tbody> */}
            </table>
          </div>
        </Row>
      </div>
    </Card>
  );
}
CompareIncomeStt