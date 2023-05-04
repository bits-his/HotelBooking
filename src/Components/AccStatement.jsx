import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Button, Card, Col, Modal, Row, Table } from "reactstrap";
import InputForm from "../CustomComponents/InputForm";
import { RiFileExcel2Fill } from "react-icons/ri";


export default function AccStatement() {
  const [form, setForm] = useState({
    date_frm: "",
    date_t: '',
    financial_yrs: '',
    acc_name:'',
    acc_no: '',
    journal_no:'',
    sub_acc: '',
    acc_prev_balance: ''
  });
  
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };
  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      <Row>
        <Col md={12} style={{display: 'flex', flexDirection: 'row'}}>
          <center>
            <h5 className="app_title" style={{ fontSize: 23,marginTop: 35 }}>
              Account Statement 
            </h5>
          </center>
          <Col md={4} style={{marginLeft: 'auto'}}>
                <label className="Label mt-2">Financial Year</label>
                <select
                    id="exampleSelect"
                    className="app_input"
                    name="financial_yrs"
                    type="select"
                    onClick={handleChange}
                    value={form.financial_yrs}
                >
                    <option>Select </option>
                </select>
            </Col>
        </Col>
      </Row>
      <div style={{width: '100%', border: '1px solid #cccccc', marginTop: 20, marginBottom: 20}}></div>
      <Row>
        <Col>
          <label className="Label mt-2">Account Number</label>
          <div className="search_input_form">
            <input
              id="exampleSelect"
              className="app_input3"
              value={form.acc_no}
              onClick={handleChange}
              name="acc_no"
              type="number"
            />
            <CiSearch
              className="search_icon"
              // onClick={toggle}
            />
            {/* <Modal isOpen={modal} toggle={toggle}size="xl" >
                        <HotelReg/>
                    </Modal> */}
          </div>
        </Col>
        <Col>
          <InputForm
            className="app_input"
            label="Account Name"
            value={form.acc_name}
            onChange={handleChange}
            name="acc_name"
          />
        </Col>
        <Col>
          <InputForm
            className="app_input"
            label="Date From"
            value={form.date_frm}
            onChange={handleChange}
            name="date_frm"
            type='date'
          />
        </Col>
        <Col>
          <InputForm
            className="app_input"
            label="Date To"
            value={form.date_t}
            onChange={handleChange}
            name="date_t"
            type='date'
          />
        </Col>
        <Col>
          <label className="Label mt-2">Journal Number</label>
          <div className="search_input_form">
            <input
              id="exampleSelect"
              className="app_input3"
              value={form.journal_no}
              onClick={handleChange}
              name="journal_no"
              type="number"
            />
            <CiSearch
              className="search_icon"
              // onClick={toggle}
            />
            {/* <Modal isOpen={modal} toggle={toggle}size="xl" >
                        <HotelReg/>
                    </Modal> */}
          </div>
        </Col>
        <Col>
          <InputForm
            className="app_input"
            label="Sub Account"
            value={form.sub_acc}
            onChange={handleChange}
            name="sub_acc"
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
            <button
              className="app_button p-2 mt-3 "
              style={{ width: 220, fontSize: 16, fontWeight: 500 }}
              // onClick={() => navigate('/table-meal')}
            >
              Statement Paid UnPaid
            </button>
          </div>
        </Col>
        <Col>
          <InputForm
            className="app_input"
            label="Account Prev Balance"
            value={form.acc_prev_balance}
            onChange={handleChange}
            name="acc_prev_balance"
          />
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
                    Date
                  </td>
                  <td
                    style={{
                      border: "1px solid #0d3a73",
                      padding: "5px 10px",
                    }}
                  >
                    Journal No
                  </td>
                  <td
                    style={{
                      border: "1px solid #0d3a73",
                      padding: "5px 10px",
                    }}
                  >
                    Doc No 
                  </td>
                  <td
                    style={{
                      border: "1px solid #0d3a73",
                      padding: "5px 10px",
                    }}
                  >
                    Doc Type 
                  </td>
                  <td
                    style={{
                      border: "1px solid #0d3a73",
                      padding: "5px 10px",
                    }}
                  >
                    Discribtion 
                  </td>
                  <td
                    style={{
                      border: "1px solid #0d3a73",
                      padding: "5px 10px",
                    }}
                  >
                    Debit 
                  </td>
                  <td
                    style={{
                      border: "1px solid #0d3a73",
                      padding: "5px 10px",
                    }}
                  >
                    Credit
                  </td>
                  <td
                    style={{
                      border: "1px solid #0d3a73",
                      padding: "5px 10px",
                    }}
                  >
                    ... 
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
                    Reserv Id 
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